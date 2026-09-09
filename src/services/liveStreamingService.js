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

// Standard Google STUN servers for WebRTC peer discovery
export const rtcConfiguration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    { urls: 'stun:stun3.l.google.com:19302' },
    { urls: 'stun:stun4.l.google.com:19302' }
  ]
};

// In-memory cache for fallback state
let localActiveStreams = {};
let localActiveCameras = {};

/**
 * ============================================================================
 * METADATA SUBSCRIPTIONS & SERVICES
 * ============================================================================
 */

// Subscribe to main stream metadata for a match
export const subscribeLiveStream = (matchId, callback) => {
  if (isLiveFirebaseConfigured) {
    try {
      const docRef = doc(db, 'live_streams', matchId);
      return onSnapshot(docRef, (snap) => {
        if (snap.exists()) {
          callback({ id: snap.id, ...snap.data() });
        } else {
          callback(localActiveStreams[matchId] || null);
        }
      }, (err) => {
        console.warn("[STREAM] subscribeLiveStream error:", err);
        callback(localActiveStreams[matchId] || null);
      });
    } catch (e) {
      console.warn("[STREAM] subscribeLiveStream fallback:", e);
    }
  }
  callback(localActiveStreams[matchId] || null);
  return () => {};
};

// Subscribe to all active camera feeds for a match (Multi-camera support)
export const subscribeActiveCameras = (matchId, callback) => {
  if (isLiveFirebaseConfigured) {
    try {
      const q = query(
        collection(db, 'live_streams', matchId, 'cameras'),
        where('status', '==', 'active')
      );
      return onSnapshot(q, (snap) => {
        const cameras = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        callback(cameras);
      }, (err) => {
        console.warn("[STREAM] subscribeActiveCameras error:", err);
        callback(localActiveCameras[matchId] || []);
      });
    } catch (e) {
      console.warn("[STREAM] subscribeActiveCameras fallback:", e);
    }
  }
  callback(localActiveCameras[matchId] || []);
  return () => {};
};

// Set / Create Main Live Stream Metadata
export const setLiveStreamSession = async (matchId, streamData, ownerId) => {
  const payload = {
    matchId,
    tournamentId: streamData.tournamentId || '',
    ownerId: ownerId || '',
    provider: streamData.provider || 'webrtc', // 'webrtc' | 'youtube' | 'custom_url'
    streamUrl: streamData.streamUrl || '',
    cameraAngle: streamData.cameraAngle || 'প্রধান মাঠ ক্যামেরা',
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

      // Update match liveStreamUrl & status
      const matchRef = doc(db, 'matches', matchId);
      await updateDoc(matchRef, {
        liveStreamUrl: payload.streamUrl,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`[STREAM] setLiveStreamSession failed for ${matchId}:`, err);
  }

  localActiveStreams[matchId] = payload;
  return payload;
};

// Stop Live Stream Session
export const stopLiveStreamSession = async (matchId, cameraId = 'main') => {
  try {
    if (isLiveFirebaseConfigured) {
      const ref = doc(db, 'live_streams', matchId);
      await updateDoc(ref, {
        status: 'ended',
        endedAt: serverTimestamp()
      });

      const camRef = doc(db, 'live_streams', matchId, 'cameras', cameraId);
      await updateDoc(camRef, {
        status: 'ended',
        endedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn(`[STREAM] stopLiveStreamSession failed for ${matchId}:`, err);
  }

  if (localActiveStreams[matchId]) {
    localActiveStreams[matchId].status = 'ended';
  }
  return true;
};

/**
 * ============================================================================
 * WEBRTC PUBLISHER (STREAMER CAMERA)
 * ============================================================================
 */

export const startWebRTCPublisher = (matchId, cameraId, localStream, cameraInfo = {}, onStatusChange = () => {}) => {
  console.log(`[STREAM] Initializing publisher for match: ${matchId}, camera: ${cameraId}`);
  onStatusChange('starting');

  const peerConnections = {}; // viewerId -> RTCPeerConnection
  const unsubscribers = [];

  if (!isLiveFirebaseConfigured) {
    onStatusChange('live');
    return () => {};
  }

  const cameraDocRef = doc(db, 'live_streams', matchId, 'cameras', cameraId);

  // 1. Register camera source in Firestore
  setDoc(cameraDocRef, {
    cameraId,
    matchId,
    cameraLabel: cameraInfo.cameraLabel || 'প্রধান মাঠ ক্যামেরা (Camera 1)',
    isPrimary: Boolean(cameraInfo.isPrimary),
    status: 'active',
    startedAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  }, { merge: true }).then(() => {
    onStatusChange('live');
    console.log(`[STREAM] Publisher initialized for camera ${cameraId}`);
  }).catch(err => {
    console.error("[STREAM] Error creating camera doc:", err);
    onStatusChange('error');
  });

  // 2. Listen for viewers joining this camera stream
  const viewersColRef = collection(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers');
  const unSubViewers = onSnapshot(viewersColRef, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      const viewerId = change.doc.id;
      const viewerData = change.doc.data();

      if (change.type === 'added' || change.type === 'modified') {
        if (!peerConnections[viewerId]) {
          console.log(`[STREAM] New viewer detected: ${viewerId}`);
          
          // Create RTCPeerConnection for this viewer
          const pc = new RTCPeerConnection(rtcConfiguration);
          peerConnections[viewerId] = pc;

          // Add local media tracks to peer connection
          if (localStream) {
            localStream.getTracks().forEach((track) => {
              pc.addTrack(track, localStream);
            });
          }

          // Write streamer ICE candidates to Firestore
          const streamerCandidatesCol = collection(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers', viewerId, 'streamerCandidates');
          pc.onicecandidate = (event) => {
            if (event.candidate) {
              addDoc(streamerCandidatesCol, event.candidate.toJSON()).catch(e => console.warn(e));
            }
          };

          pc.onconnectionstatechange = () => {
            console.log(`[STREAM] Peer ${viewerId} state: ${pc.connectionState}`);
          };

          // Create SDP Offer
          try {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            await setDoc(doc(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers', viewerId), {
              offer: { type: offer.type, sdp: offer.sdp },
              status: 'offered',
              updatedAt: serverTimestamp()
            }, { merge: true });

            console.log(`[STREAM] SDP offer published to viewer ${viewerId}`);
          } catch (e) {
            console.error(`[STREAM] Error creating SDP offer for ${viewerId}:`, e);
          }

          // Listen for SDP Answer from viewer
          const viewerDocRef = doc(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers', viewerId);
          const unSubAnswer = onSnapshot(viewerDocRef, (docSnap) => {
            const data = docSnap.data();
            if (data && data.answer && pc.signalingState !== 'stable') {
              console.log(`[STREAM] SDP Answer received from viewer ${viewerId}`);
              const rtcAnswer = new RTCSessionDescription(data.answer);
              pc.setRemoteDescription(rtcAnswer).catch(err => console.warn("setRemoteDescription error:", err));
            }
          });
          unsubscribers.push(unSubAnswer);

          // Listen for ICE Candidates from viewer
          const viewerCandidatesCol = collection(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers', viewerId, 'viewerCandidates');
          const unSubViewerCandidates = onSnapshot(viewerCandidatesCol, (candidateSnap) => {
            candidateSnap.docChanges().forEach((candChange) => {
              if (candChange.type === 'added') {
                const candidateData = candChange.doc.data();
                pc.addIceCandidate(new RTCIceCandidate(candidateData)).catch(e => console.warn("addIceCandidate error:", e));
              }
            });
          });
          unsubscribers.push(unSubViewerCandidates);
        }
      }
    });
  });
  unsubscribers.push(unSubViewers);

  // Return cleanup function for publisher
  return () => {
    console.log(`[STREAM] Stopping publisher for camera ${cameraId}`);
    unsubscribers.forEach(unsub => unsub());
    Object.keys(peerConnections).forEach((vid) => {
      try {
        peerConnections[vid].close();
      } catch (e) {}
    });
    updateDoc(cameraDocRef, {
      status: 'ended',
      endedAt: serverTimestamp()
    }).catch(() => {});
  };
};

/**
 * ============================================================================
 * WEBRTC VIEWER (CONSUMER PLAYER)
 * ============================================================================
 */

export const connectWebRTCViewer = (matchId, cameraId = 'main', onRemoteStream = () => {}, onStatusChange = () => {}) => {
  console.log(`[STREAM] Connecting viewer for match: ${matchId}, camera: ${cameraId}`);
  onStatusChange('connecting');

  if (!isLiveFirebaseConfigured) {
    onStatusChange('failed');
    return () => {};
  }

  const viewerId = `viewer_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const unsubscribers = [];

  const pc = new RTCPeerConnection(rtcConfiguration);

  // Handle incoming remote media stream from streamer
  pc.ontrack = (event) => {
    console.log("[STREAM] Remote track received from streamer:", event.streams);
    if (event.streams && event.streams[0]) {
      onRemoteStream(event.streams[0]);
      onStatusChange('live');
    }
  };

  pc.onconnectionstatechange = () => {
    console.log(`[STREAM] Viewer connection state: ${pc.connectionState}`);
    if (pc.connectionState === 'connected') {
      onStatusChange('live');
    } else if (pc.connectionState === 'connecting') {
      onStatusChange('connecting');
    } else if (pc.connectionState === 'disconnected' || pc.connectionState === 'failed') {
      onStatusChange('reconnecting');
    } else if (pc.connectionState === 'closed') {
      onStatusChange('ended');
    }
  };

  pc.oniceconnectionstatechange = () => {
    if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed') {
      onStatusChange('reconnecting');
    }
  };

  const viewerDocRef = doc(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers', viewerId);
  const viewerCandidatesCol = collection(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers', viewerId, 'viewerCandidates');
  const streamerCandidatesCol = collection(db, 'live_streams', matchId, 'cameras', cameraId, 'viewers', viewerId, 'streamerCandidates');

  // Write ICE Candidates to Firestore for streamer to consume
  pc.onicecandidate = (event) => {
    if (event.candidate) {
      addDoc(viewerCandidatesCol, event.candidate.toJSON()).catch(e => console.warn(e));
    }
  };

  // 1. Create viewer join document in Firestore
  setDoc(viewerDocRef, {
    viewerId,
    status: 'joining',
    createdAt: serverTimestamp()
  }).then(() => {
    console.log(`[STREAM] Viewer session created with ID ${viewerId}`);
  }).catch((e) => {
    console.error("[STREAM] Error creating viewer doc:", e);
    onStatusChange('failed');
  });

  // 2. Listen for SDP Offer from streamer
  let offerHandled = false;
  const unSubOffer = onSnapshot(viewerDocRef, async (snap) => {
    const data = snap.data();
    if (data && data.offer && !offerHandled) {
      offerHandled = true;
      console.log("[STREAM] Received SDP offer from streamer");
      try {
        await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        await updateDoc(viewerDocRef, {
          answer: { type: answer.type, sdp: answer.sdp },
          status: 'answered',
          updatedAt: serverTimestamp()
        });
        console.log("[STREAM] SDP answer sent to streamer");
      } catch (err) {
        console.error("[STREAM] Error processing SDP offer/answer:", err);
        onStatusChange('failed');
      }
    }
  });
  unsubscribers.push(unSubOffer);

  // 3. Listen for ICE candidates from streamer
  const unSubStreamerCandidates = onSnapshot(streamerCandidatesCol, (snap) => {
    snap.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const candidateData = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(candidateData)).catch(e => console.warn("addIceCandidate error:", e));
      }
    });
  });
  unsubscribers.push(unSubStreamerCandidates);

  // Return cleanup function for viewer
  return () => {
    console.log(`[STREAM] Cleaning up viewer ${viewerId}`);
    unsubscribers.forEach(unsub => unsub());
    try {
      pc.close();
    } catch (e) {}
    deleteDoc(viewerDocRef).catch(() => {});
  };
};
