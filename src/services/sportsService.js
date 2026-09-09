import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp,
  onSnapshot 
} from 'firebase/firestore';
import { db, isLiveFirebaseConfigured } from '../config/firebase';
import { initialVillageData } from './dbService';

// Local memory fallback state for offline / demo mode
let localTournaments = [...(initialVillageData.tournaments || [])];
let localRegistrations = [];
let localTeams = [];
let localMatches = [...(initialVillageData.matches || [])];
let localLiveScores = {};
let localLiveStreams = {};
let localNotifications = [];

/**
 * ============================================================================
 * TOURNAMENT SERVICES
 * ============================================================================
 */

// Get all tournaments with status filtering
export const getTournaments = async (statusFilter = null) => {
  try {
    if (isLiveFirebaseConfigured) {
      let q;
      if (statusFilter) {
        q = query(collection(db, 'tournaments'), where('status', '==', statusFilter));
      } else {
        q = query(collection(db, 'tournaments'));
      }
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn("Firestore getTournaments failed, using fallback data:", err);
  }
  if (statusFilter) {
    return localTournaments.filter(t => (t.status || 'approved') === statusFilter);
  }
  return localTournaments;
};

// Listen to tournaments in real-time
export const subscribeTournaments = (callback, statusFilter = null) => {
  if (isLiveFirebaseConfigured) {
    try {
      let q;
      if (statusFilter) {
        q = query(collection(db, 'tournaments'), where('status', '==', statusFilter));
      } else {
        q = query(collection(db, 'tournaments'));
      }
      return onSnapshot(q, (snap) => {
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        callback(list);
      }, (err) => {
        console.warn("Tournament realtime subscription error:", err);
        callback(statusFilter ? localTournaments.filter(t => (t.status || 'approved') === statusFilter) : localTournaments);
      });
    } catch (e) {
      console.warn("Realtime subscription fallback:", e);
    }
  }
  callback(statusFilter ? localTournaments.filter(t => (t.status || 'approved') === statusFilter) : localTournaments);
  return () => {};
};

// Get single tournament by ID
export const getTournamentById = async (tournamentId) => {
  try {
    if (isLiveFirebaseConfigured) {
      const docRef = doc(db, 'tournaments', tournamentId);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        return { id: snap.id, ...snap.data() };
      }
    }
  } catch (err) {
    console.warn(`getTournamentById failed for ${tournamentId}:`, err);
  }
  return localTournaments.find(t => t.id === tournamentId) || null;
};

// Create a new tournament (Default status: pending approval)
export const createTournament = async (tournamentData, userId) => {
  const payload = {
    name: tournamentData.name || '',
    sport: tournamentData.sport || 'football', // 'football' | 'cricket'
    description: tournamentData.description || '',
    organizerName: tournamentData.organizerName || '',
    organizerPhone: tournamentData.organizerPhone || '',
    poster: tournamentData.poster || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
    logoUrl: tournamentData.logoUrl || '',
    venue: tournamentData.venue || 'আলমদীপাড়া খেলার মাঠ',
    venueAddress: tournamentData.venueAddress || 'আলমদীপাড়া, গ্রাম সড়ক',
    venueDescription: tournamentData.venueDescription || '',
    startDate: tournamentData.startDate || '',
    endDate: tournamentData.endDate || '',
    registrationDeadline: tournamentData.registrationDeadline || '',
    teamCount: Number(tournamentData.teamCount) || 8,
    playersPerTeam: Number(tournamentData.playersPerTeam) || 11,
    prizes: {
      champion: tournamentData.prizes?.champion || '৳৫০,০০০',
      runnerUp: tournamentData.prizes?.runnerUp || '৳২৫,০০০',
      thirdPlace: tournamentData.prizes?.thirdPlace || '',
      others: tournamentData.prizes?.others || ''
    },
    rules: tournamentData.rules || '',
    planDocumentUrl: tournamentData.planDocumentUrl || '',
    fixturePlanUrl: tournamentData.fixturePlanUrl || '',
    status: 'pending', // 'draft' | 'pending' | 'approved' | 'rejected'
    rejectionReason: '',
    createdBy: userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, 'tournaments'), {
        ...payload,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      const created = { id: docRef.id, ...payload };
      // Create notification for creator
      await sendSportsNotification(userId, 'আপনার টুর্নামেন্ট অনুমোদনের জন্য পাঠানো হয়েছে।', created.id);
      return created;
    }
  } catch (err) {
    console.warn("createTournament Firestore failed:", err);
  }

  const newObj = { id: 'tourn-' + Date.now(), ...payload };
  localTournaments.unshift(newObj);
  return newObj;
};

// Approve or Reject tournament (Admin only)
export const updateTournamentStatus = async (tournamentId, status, rejectionReason = '', adminId = '') => {
  const updatePayload = {
    status,
    rejectionReason: status === 'rejected' ? rejectionReason : '',
    approvedBy: status === 'approved' ? adminId : '',
    approvedAt: status === 'approved' ? new Date().toISOString() : null,
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const ref = doc(db, 'tournaments', tournamentId);
      await updateDoc(ref, {
        ...updatePayload,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`updateTournamentStatus failed for ${tournamentId}:`, err);
  }

  const idx = localTournaments.findIndex(t => t.id === tournamentId);
  if (idx !== -1) {
    localTournaments[idx] = { ...localTournaments[idx], ...updatePayload };
    // Notify creator
    const target = localTournaments[idx];
    if (target.createdBy) {
      const msg = status === 'approved' ? 'আপনার টুর্নামেন্ট অনুমোদিত হয়েছে।' : `আপনার টুর্নামেন্ট অনুমোদিত হয়নি। কারণ: ${rejectionReason}`;
      sendSportsNotification(target.createdBy, msg, tournamentId);
    }
  }
  return true;
};

/**
 * ============================================================================
 * TEAM REGISTRATION & PLAYER MANAGEMENT SERVICES
 * ============================================================================
 */

// Register Team in Tournament
export const registerTeam = async (registrationData, userId) => {
  const payload = {
    tournamentId: registrationData.tournamentId,
    tournamentName: registrationData.tournamentName || '',
    teamName: registrationData.teamName || '',
    teamLogoUrl: registrationData.teamLogoUrl || '',
    description: registrationData.description || '',
    captainName: registrationData.captainName || '',
    captainPhone: registrationData.captainPhone || '',
    location: registrationData.location || '',
    players: registrationData.players || [], // Array of { name, photoUrl, jerseyNumber, position }
    registeredBy: userId,
    status: 'pending', // 'pending' | 'approved' | 'rejected'
    rejectionReason: '',
    createdAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, 'tournament_registrations'), {
        ...payload,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, ...payload };
    }
  } catch (err) {
    console.warn("registerTeam Firestore failed:", err);
  }

  const newReg = { id: 'reg-' + Date.now(), ...payload };
  localRegistrations.unshift(newReg);
  return newReg;
};

// Get registered teams for a tournament
export const getTournamentRegistrations = async (tournamentId, statusFilter = null) => {
  try {
    if (isLiveFirebaseConfigured) {
      let q = query(collection(db, 'tournament_registrations'), where('tournamentId', '==', tournamentId));
      if (statusFilter) {
        q = query(collection(db, 'tournament_registrations'), where('tournamentId', '==', tournamentId), where('status', '==', statusFilter));
      }
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn(`getTournamentRegistrations failed for ${tournamentId}:`, err);
  }

  return localRegistrations.filter(r => r.tournamentId === tournamentId && (!statusFilter || r.status === statusFilter));
};

// Tournament Owner Approve/Reject Team
export const updateTeamRegistrationStatus = async (registrationId, status, rejectionReason = '') => {
  const updatePayload = {
    status,
    rejectionReason,
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const ref = doc(db, 'tournament_registrations', registrationId);
      await updateDoc(ref, {
        ...updatePayload,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`updateTeamRegistrationStatus failed for ${registrationId}:`, err);
  }

  const idx = localRegistrations.findIndex(r => r.id === registrationId);
  if (idx !== -1) {
    localRegistrations[idx] = { ...localRegistrations[idx], ...updatePayload };
  }
  return true;
};

/**
 * ============================================================================
 * FIXTURE MANAGEMENT SERVICES
 * ============================================================================
 */

// Create match fixture
export const createMatchFixture = async (matchData) => {
  const payload = {
    tournamentId: matchData.tournamentId,
    gameType: matchData.gameType || 'football', // 'football' | 'cricket'
    teamAId: matchData.teamAId || '',
    teamBId: matchData.teamBId || '',
    teamA: matchData.teamA || 'টিম এ',
    teamB: matchData.teamB || 'টিম বি',
    teamALogo: matchData.teamALogo || '',
    teamBLogo: matchData.teamBLogo || '',
    venue: matchData.venue || 'আলমদীপাড়া মাঠ',
    scheduledDate: matchData.scheduledDate || '',
    scheduledTime: matchData.scheduledTime || '',
    round: matchData.round || 'গ্রুপ পর্ব', // 'কোয়ার্টার ফাইনাল', 'সেমিফাইনাল', 'ফাইনাল', 'গ্রুপ পর্ব'
    matchNumber: Number(matchData.matchNumber) || 1,
    officials: matchData.officials || '', // Referee / Umpires
    overs: matchData.overs || '20', // Cricket specific (T20, 10 overs, etc)
    status: matchData.status || 'scheduled', // 'scheduled' | 'live' | 'completed' | 'postponed' | 'cancelled'
    liveStreamUrl: matchData.liveStreamUrl || '',
    createdAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, 'matches'), {
        ...payload,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, ...payload };
    }
  } catch (err) {
    console.warn("createMatchFixture Firestore failed:", err);
  }

  const newMatch = { id: 'match-' + Date.now(), ...payload };
  localMatches.unshift(newMatch);
  return newMatch;
};

// Get matches for a tournament
export const getTournamentMatches = async (tournamentId) => {
  try {
    if (isLiveFirebaseConfigured) {
      const q = query(collection(db, 'matches'), where('tournamentId', '==', tournamentId));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn(`getTournamentMatches failed for ${tournamentId}:`, err);
  }

  return localMatches.filter(m => m.tournamentId === tournamentId);
};

// Listen to all live matches
export const subscribeLiveMatches = (callback) => {
  if (isLiveFirebaseConfigured) {
    try {
      const q = query(collection(db, 'matches'), where('status', '==', 'live'));
      return onSnapshot(q, (snap) => {
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        callback(list);
      }, (err) => {
        console.warn("Live matches realtime subscription error:", err);
        callback(localMatches.filter(m => m.status === 'live'));
      });
    } catch (e) {
      console.warn("subscribeLiveMatches fallback:", e);
    }
  }
  callback(localMatches.filter(m => m.status === 'live'));
  return () => {};
};

/**
 * ============================================================================
 * LIVE SCORING SERVICES (FOOTBALL & CRICKET)
 * ============================================================================
 */

// Subscribe to a single live score real-time snapshot
export const subscribeLiveScore = (matchId, callback) => {
  if (isLiveFirebaseConfigured) {
    try {
      const docRef = doc(db, 'live_scores', matchId);
      return onSnapshot(docRef, (snap) => {
        if (snap.exists()) {
          callback({ matchId, ...snap.data() });
        } else {
          callback(localLiveScores[matchId] || null);
        }
      }, (err) => {
        console.warn("Live score subscription error:", err);
        callback(localLiveScores[matchId] || null);
      });
    } catch (e) {
      console.warn("subscribeLiveScore fallback:", e);
    }
  }
  callback(localLiveScores[matchId] || null);
  return () => {};
};

// Update Football Live Score
export const updateFootballScore = async (matchId, footballScoreData) => {
  const payload = {
    matchId,
    gameType: 'football',
    homeGoals: Number(footballScoreData.homeGoals) || 0,
    awayGoals: Number(footballScoreData.awayGoals) || 0,
    matchMinute: footballScoreData.matchMinute || 0,
    period: footballScoreData.period || '1st Half', // '1st Half' | 'Half Time' | '2nd Half' | 'Extra Time' | 'Penalty' | 'Ended'
    timerRunning: Boolean(footballScoreData.timerRunning),
    timerStartTimestamp: footballScoreData.timerStartTimestamp || Date.now(),
    yellowCards: footballScoreData.yellowCards || [], // Array of { team, player, minute }
    redCards: footballScoreData.redCards || [], // Array of { team, player, minute }
    timeline: footballScoreData.timeline || [], // Array of { type: 'goal'|'card'|'period', text, minute, timestamp }
    status: footballScoreData.status || 'live',
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const scoreRef = doc(db, 'live_scores', matchId);
      await setDoc(scoreRef, {
        ...payload,
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Also update main match record
      const matchRef = doc(db, 'matches', matchId);
      await updateDoc(matchRef, {
        status: payload.status,
        scoreSummary: `${payload.homeGoals} - ${payload.awayGoals} (${payload.matchMinute}')`,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`updateFootballScore failed for ${matchId}:`, err);
  }

  localLiveScores[matchId] = payload;
  const mIdx = localMatches.findIndex(m => m.id === matchId);
  if (mIdx !== -1) {
    localMatches[mIdx].status = payload.status;
    localMatches[mIdx].score = {
      teamA: `${payload.homeGoals}`,
      teamB: `${payload.awayGoals}`,
      statusText: `${payload.period} - ${payload.matchMinute} মিনিট`
    };
  }
  return payload;
};

// Update Cricket Live Score
export const updateCricketScore = async (matchId, cricketScoreData) => {
  const payload = {
    matchId,
    gameType: 'cricket',
    innings: cricketScoreData.innings || 1,
    teamARuns: Number(cricketScoreData.teamARuns) || 0,
    teamAWickets: Number(cricketScoreData.teamAWickets) || 0,
    teamAOvers: cricketScoreData.teamAOvers || '0.0', // e.g. "12.4"
    teamBRuns: Number(cricketScoreData.teamBRuns) || 0,
    teamBWickets: Number(cricketScoreData.teamBWickets) || 0,
    teamBOvers: cricketScoreData.teamBOvers || '0.0',
    targetRuns: Number(cricketScoreData.targetRuns) || 0,
    currentBatsman: cricketScoreData.currentBatsman || { name: 'ব্যাটার ১', runs: 0, balls: 0 },
    nonStriker: cricketScoreData.nonStriker || { name: 'ব্যাটার ২', runs: 0, balls: 0 },
    currentBowler: cricketScoreData.currentBowler || { name: 'বোলার', overs: '0.0', runs: 0, wickets: 0 },
    runRate: cricketScoreData.runRate || '0.00',
    reqRunRate: cricketScoreData.reqRunRate || '0.00',
    statusText: cricketScoreData.statusText || '',
    timeline: cricketScoreData.timeline || [], // ball by ball log
    status: cricketScoreData.status || 'live',
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const scoreRef = doc(db, 'live_scores', matchId);
      await setDoc(scoreRef, {
        ...payload,
        updatedAt: serverTimestamp()
      }, { merge: true });

      const matchRef = doc(db, 'matches', matchId);
      await updateDoc(matchRef, {
        status: payload.status,
        scoreSummary: `${payload.teamARuns}/${payload.teamAWickets} vs ${payload.teamBRuns}/${payload.teamBWickets}`,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`updateCricketScore failed for ${matchId}:`, err);
  }

  localLiveScores[matchId] = payload;
  const mIdx = localMatches.findIndex(m => m.id === matchId);
  if (mIdx !== -1) {
    localMatches[mIdx].status = payload.status;
    localMatches[mIdx].score = {
      teamA: `${payload.teamARuns}/${payload.teamAWickets} (${payload.teamAOvers} ওভার)`,
      teamB: `${payload.teamBRuns}/${payload.teamBWickets} (${payload.teamBOvers} ওভার)`,
      statusText: payload.statusText,
      currentBatsman: `${payload.currentBatsman.name} (${payload.currentBatsman.runs})`,
      currentBowler: `${payload.currentBowler.name} (${payload.currentBowler.wickets}/${payload.currentBowler.runs})`
    };
  }
  return payload;
};

/**
 * Helper to compute Cricket Overs String correctly (e.g. 12.5 + 1 ball = 13.0)
 */
export const addCricketBall = (currentOversStr, extraType = 'normal') => {
  const parts = String(currentOversStr || '0.0').split('.');
  let overs = parseInt(parts[0] || '0', 10);
  let balls = parseInt(parts[1] || '0', 10);

  if (extraType === 'wide' || extraType === 'noball') {
    // Extras do not count as a legal ball in overs calculation
    return `${overs}.${balls}`;
  }

  balls += 1;
  if (balls >= 6) {
    overs += 1;
    balls = 0;
  }
  return `${overs}.${balls}`;
};

/**
 * ============================================================================
 * LIVE STREAMING SERVICES
 * ============================================================================
 */

// Subscribe to Live Stream Metadata
export const subscribeLiveStream = (matchId, callback) => {
  if (isLiveFirebaseConfigured) {
    try {
      const q = query(collection(db, 'live_streams'), where('matchId', '==', matchId), where('status', '==', 'active'));
      return onSnapshot(q, (snap) => {
        if (!snap.empty) {
          callback({ id: snap.docs[0].id, ...snap.docs[0].data() });
        } else {
          callback(localLiveStreams[matchId] || null);
        }
      }, (err) => {
        console.warn("subscribeLiveStream error:", err);
        callback(localLiveStreams[matchId] || null);
      });
    } catch (e) {
      console.warn("subscribeLiveStream fallback:", e);
    }
  }
  callback(localLiveStreams[matchId] || null);
  return () => {};
};

// Start or Update Live Stream (Tournament owner / Admin)
export const setLiveStream = async (matchId, streamData, ownerId) => {
  const payload = {
    matchId,
    tournamentId: streamData.tournamentId || '',
    ownerId,
    provider: streamData.provider || 'camera', // 'camera' | 'youtube' | 'custom_url'
    streamUrl: streamData.streamUrl || '',
    cameraAngle: streamData.cameraAngle || 'Main Field Camera',
    status: streamData.status || 'active', // 'active' | 'ended'
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const ref = doc(db, 'live_streams', matchId);
      await setDoc(ref, {
        ...payload,
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Update match liveStreamUrl
      const matchRef = doc(db, 'matches', matchId);
      await updateDoc(matchRef, {
        liveStreamUrl: payload.streamUrl,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`setLiveStream failed for ${matchId}:`, err);
  }

  localLiveStreams[matchId] = payload;
  const mIdx = localMatches.findIndex(m => m.id === matchId);
  if (mIdx !== -1) {
    localMatches[mIdx].liveStreamUrl = payload.streamUrl;
  }
  return payload;
};

// Stop Live Stream
export const stopLiveStream = async (matchId) => {
  try {
    if (isLiveFirebaseConfigured) {
      const ref = doc(db, 'live_streams', matchId);
      await updateDoc(ref, {
        status: 'ended',
        endedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`stopLiveStream failed for ${matchId}:`, err);
  }

  if (localLiveStreams[matchId]) {
    localLiveStreams[matchId].status = 'ended';
  }
  return true;
};

/**
 * ============================================================================
 * NOTIFICATIONS HELPER
 * ============================================================================
 */
export const sendSportsNotification = async (userId, message, targetId = '') => {
  const payload = {
    userId,
    title: 'খেলাধুলা আপডেট',
    message,
    targetId,
    read: false,
    createdAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      await addDoc(collection(db, 'notifications'), {
        ...payload,
        createdAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn("sendSportsNotification failed:", err);
  }
  localNotifications.unshift(payload);
  return payload;
};
