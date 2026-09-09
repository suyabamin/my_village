import React, { useState, useEffect } from 'react';
import { Plus, CheckCircle2, AlertTriangle, Square, RefreshCw, Award } from 'lucide-react';
import { updateCricketScore, subscribeLiveScore, addCricketBall } from '../../services/sportsService';
import { useNotification } from '../../context/NotificationContext';

export const CricketScoreController = ({ match, teamAName, teamBName }) => {
  const { addToast } = useNotification();

  const [innings, setInnings] = useState(1);
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [oversStr, setOversStr] = useState('0.0');
  const [targetRuns, setTargetRuns] = useState(0);
  
  const [currentBatsman, setCurrentBatsman] = useState({ name: 'রহিম', runs: 0, balls: 0 });
  const [nonStriker, setNonStriker] = useState({ name: 'করিম', runs: 0, balls: 0 });
  const [currentBowler, setCurrentBowler] = useState({ name: 'হাসান', overs: '0.0', runs: 0, wickets: 0 });
  
  const [statusText, setStatusText] = useState('');
  const [timeline, setTimeline] = useState([]);

  // Wicket Modal state
  const [showWicketModal, setShowWicketModal] = useState(false);
  const [wicketType, setWicketType] = useState('Bowled');
  const [outBatsmanName, setOutBatsmanName] = useState('');
  const [newBatsmanName, setNewBatsmanName] = useState('');

  useEffect(() => {
    const unsubscribe = subscribeLiveScore(match.id, (scoreData) => {
      if (scoreData) {
        setInnings(scoreData.innings || 1);
        if (scoreData.innings === 2) {
          setRuns(scoreData.teamBRuns || 0);
          setWickets(scoreData.teamBWickets || 0);
          setOversStr(scoreData.teamBOvers || '0.0');
        } else {
          setRuns(scoreData.teamARuns || 0);
          setWickets(scoreData.teamAWickets || 0);
          setOversStr(scoreData.teamAOvers || '0.0');
        }
        setTargetRuns(scoreData.targetRuns || 0);
        if (scoreData.currentBatsman) setCurrentBatsman(scoreData.currentBatsman);
        if (scoreData.nonStriker) setNonStriker(scoreData.nonStriker);
        if (scoreData.currentBowler) setCurrentBowler(scoreData.currentBowler);
        setStatusText(scoreData.statusText || '');
        setTimeline(scoreData.timeline || []);
      }
    });
    return () => unsubscribe();
  }, [match.id]);

  // Compute Run Rates
  const parseOversToFloat = (oStr) => {
    const parts = String(oStr || '0.0').split('.');
    const o = parseInt(parts[0] || '0', 10);
    const b = parseInt(parts[1] || '0', 10);
    return o + (b / 6);
  };

  const totalOversDec = parseOversToFloat(oversStr);
  const currentRR = totalOversDec > 0 ? (runs / totalOversDec).toFixed(2) : '0.00';
  const totalMatchOvers = Number(match.overs) || 20;
  const remOvers = Math.max(0, totalMatchOvers - totalOversDec);
  const remRuns = Math.max(0, targetRuns - runs);
  const requiredRR = (innings === 2 && remOvers > 0) ? (remRuns / remOvers).toFixed(2) : '0.00';

  const saveCricketState = async (updates = {}) => {
    const isBattingTeamA = innings === 1;

    const payload = {
      matchId: match.id,
      gameType: 'cricket',
      innings,
      teamARuns: isBattingTeamA ? (updates.runs !== undefined ? updates.runs : runs) : (match.teamARuns || 0),
      teamAWickets: isBattingTeamA ? (updates.wickets !== undefined ? updates.wickets : wickets) : (match.teamAWickets || 0),
      teamAOvers: isBattingTeamA ? (updates.oversStr !== undefined ? updates.oversStr : oversStr) : (match.teamAOvers || '0.0'),
      
      teamBRuns: !isBattingTeamA ? (updates.runs !== undefined ? updates.runs : runs) : (match.teamBRuns || 0),
      teamBWickets: !isBattingTeamA ? (updates.wickets !== undefined ? updates.wickets : wickets) : (match.teamBWickets || 0),
      teamBOvers: !isBattingTeamA ? (updates.oversStr !== undefined ? updates.oversStr : oversStr) : (match.teamBOvers || '0.0'),
      
      targetRuns: updates.targetRuns !== undefined ? updates.targetRuns : targetRuns,
      currentBatsman: updates.currentBatsman || currentBatsman,
      nonStriker: updates.nonStriker || nonStriker,
      currentBowler: updates.currentBowler || currentBowler,
      runRate: currentRR,
      reqRunRate: requiredRR,
      statusText: updates.statusText !== undefined ? updates.statusText : statusText,
      timeline: updates.timeline || timeline,
      status: updates.status || 'live'
    };

    await updateCricketScore(match.id, payload);
  };

  // Add Ball Runs (0, 1, 2, 3, 4, 6)
  const handleAddRuns = (runVal) => {
    const newRuns = runs + runVal;
    const newOvers = addCricketBall(oversStr, 'normal');

    // Update batsman score
    const updatedBatsman = {
      ...currentBatsman,
      runs: currentBatsman.runs + runVal,
      balls: currentBatsman.balls + 1
    };

    // Update bowler overs & runs
    const bowlerOvers = addCricketBall(currentBowler.overs || '0.0', 'normal');
    const updatedBowler = {
      ...currentBowler,
      overs: bowlerOvers,
      runs: currentBowler.runs + runVal
    };

    // Auto rotate strike if odd runs (1, 3)
    let newStriker = updatedBatsman;
    let newNonStriker = nonStriker;
    if (runVal % 2 !== 0) {
      newStriker = nonStriker;
      newNonStriker = updatedBatsman;
    }

    const logEntry = {
      over: newOvers,
      event: `${runVal} রান`,
      text: `${updatedBatsman.name} ${runVal} রান করেছেন`
    };

    const newTimeline = [logEntry, ...timeline.slice(0, 19)];

    setRuns(newRuns);
    setOversStr(newOvers);
    setCurrentBatsman(newStriker);
    setNonStriker(newNonStriker);
    setCurrentBowler(updatedBowler);
    setTimeline(newTimeline);

    const autoStatus = innings === 2 
      ? `${innings === 1 ? teamAName : teamBName} জিততে ${Math.max(0, targetRuns - newRuns)} রান দরকার (${(totalMatchOvers - parseOversToFloat(newOvers)).toFixed(1)} ওভার থেকে)`
      : `${teamAName} ব্যাটিং করছে: ${newRuns}/${wickets}`;
    
    setStatusText(autoStatus);

    saveCricketState({
      runs: newRuns,
      oversStr: newOvers,
      currentBatsman: newStriker,
      nonStriker: newNonStriker,
      currentBowler: updatedBowler,
      statusText: autoStatus,
      timeline: newTimeline
    });
  };

  // Handle Extra (Wide, No Ball)
  const handleExtra = (extraType) => {
    const extraRuns = 1;
    const newRuns = runs + extraRuns;
    const newOvers = addCricketBall(oversStr, extraType);

    const updatedBowler = {
      ...currentBowler,
      runs: currentBowler.runs + extraRuns
    };

    const logEntry = {
      over: newOvers,
      event: extraType === 'wide' ? 'ওয়াইড (Wide)' : 'নো বল (No Ball)',
      text: `${extraType === 'wide' ? 'ওয়াইড বল' : 'নো বল'} +১ রান`
    };

    const newTimeline = [logEntry, ...timeline.slice(0, 19)];

    setRuns(newRuns);
    setOversStr(newOvers);
    setCurrentBowler(updatedBowler);
    setTimeline(newTimeline);

    saveCricketState({
      runs: newRuns,
      oversStr: newOvers,
      currentBowler: updatedBowler,
      timeline: newTimeline
    });

    addToast(`ক্রিকেট এক্সট্রা যোগ করা হয়েছে (${extraType})`, 'info');
  };

  // Handle Wicket Submit
  const handleWicketSubmit = (e) => {
    e.preventDefault();
    const newWickets = wickets + 1;
    const newOvers = addCricketBall(oversStr, 'normal');

    const updatedBowler = {
      ...currentBowler,
      overs: addCricketBall(currentBowler.overs || '0.0', 'normal'),
      wickets: currentBowler.wickets + 1
    };

    const nextBatsman = {
      name: newBatsmanName || `নতুন ব্যাটার (${newWickets + 1})`,
      runs: 0,
      balls: 0
    };

    const logEntry = {
      over: newOvers,
      event: 'উইকেট (WICKET)',
      text: `OUT! ${currentBatsman.name} (${wicketType})`
    };

    const newTimeline = [logEntry, ...timeline.slice(0, 19)];

    setWickets(newWickets);
    setOversStr(newOvers);
    setCurrentBatsman(nextBatsman);
    setCurrentBowler(updatedBowler);
    setTimeline(newTimeline);
    setShowWicketModal(false);
    setNewBatsmanName('');

    saveCricketState({
      wickets: newWickets,
      oversStr: newOvers,
      currentBatsman: nextBatsman,
      currentBowler: updatedBowler,
      timeline: newTimeline
    });

    addToast(`💥 উইকেট আপডেট করা হয়েছে! (${wicketType})`, 'warning');
  };

  // Switch Innings
  const handleSwitchInnings = () => {
    if (window.confirm("আপনি কি ১ম ইনিংস শেষ করে ২য় ইনিংস শুরু করতে চান?")) {
      const newTarget = runs + 1;
      setInnings(2);
      setTargetRuns(newTarget);
      setRuns(0);
      setWickets(0);
      setOversStr('0.0');
      setCurrentBatsman({ name: 'ওপেনার ১', runs: 0, balls: 0 });
      setNonStriker({ name: 'ওপেনার ২', runs: 0, balls: 0 });
      
      const newStatus = `${teamBName}-এর জয়ের জন্য টার্গেট ${newTarget} রান।`;
      setStatusText(newStatus);

      saveCricketState({
        targetRuns: newTarget,
        runs: 0,
        wickets: 0,
        oversStr: '0.0',
        currentBatsman: { name: 'ওপেনার ১', runs: 0, balls: 0 },
        nonStriker: { name: 'ওপেনার ২', runs: 0, balls: 0 },
        statusText: newStatus
      });

      addToast(`২য় ইনিংস শুরু হয়েছে! টার্গেট: ${newTarget} রান`, 'success');
    }
  };

  return (
    <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
      {/* Header Info */}
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <span className="badge badge-green">🏏 ক্রিকেট লাইভ স্কোরবোর্ড</span>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', margin: '0.4rem 0', color: 'var(--color-primary-700)' }}>
          {innings === 1 ? teamAName : teamBName} : {runs}/{wickets}
        </h2>
        <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
          {oversStr} ওভার (সর্বোচ্চ {match.overs || '20'} ওভার)
        </div>
        {statusText && (
          <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--color-accent-amber)', marginTop: '0.3rem' }}>
            {statusText}
          </div>
        )}
      </div>

      {/* Live Batter & Bowler Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', backgroundColor: 'var(--bg-elevated)', padding: '0.85rem', borderRadius: '10px', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>স্ট্রাইকার ব্যাটার</div>
          <div style={{ fontWeight: '700' }}>🏏 {currentBatsman.name} — {currentBatsman.runs} ({currentBatsman.balls})</div>
        </div>
        <div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>নন-স্ট্রাইকার</div>
          <div style={{ fontWeight: '700' }}>{nonStriker.name} — {nonStriker.runs} ({nonStriker.balls})</div>
        </div>
        <div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>বর্তমান বোলার</div>
          <div style={{ fontWeight: '700' }}>⚾ {currentBowler.name} — {currentBowler.wickets}/{currentBowler.runs} ({currentBowler.overs})</div>
        </div>
        <div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>রান রেট</div>
          <div style={{ fontWeight: '700' }}>CRR: {currentRR} {innings === 2 && `| RRR: ${requiredRR}`}</div>
        </div>
      </div>

      {/* Scoring Buttons Panel */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
          বল আপডেট করুন (Touch Scoring):
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {[0, 1, 2, 3, 4, 6].map(num => (
            <button 
              key={num}
              onClick={() => handleAddRuns(num)}
              className="btn btn-primary"
              style={{ height: '48px', fontSize: '1.2rem', fontWeight: '800', justifyContent: 'center' }}
            >
              {num}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem' }}>
          <button 
            onClick={() => setShowWicketModal(true)}
            className="btn btn-secondary"
            style={{ backgroundColor: '#dc2626', color: '#fff', height: '44px', fontWeight: '700', justifyContent: 'center' }}
          >
            💥 WICKET
          </button>
          <button 
            onClick={() => handleExtra('wide')}
            className="btn btn-secondary"
            style={{ height: '44px', fontWeight: '700', justifyContent: 'center' }}
          >
            WIDE
          </button>
          <button 
            onClick={() => handleExtra('noball')}
            className="btn btn-secondary"
            style={{ height: '44px', fontWeight: '700', justifyContent: 'center' }}
          >
            NO BALL
          </button>

          {innings === 1 ? (
            <button onClick={handleSwitchInnings} className="btn btn-secondary" style={{ height: '44px', fontWeight: '700', justifyContent: 'center', backgroundColor: 'var(--color-primary-600)', color: '#fff' }}>
              ২য় ইনিংস
            </button>
          ) : (
            <button onClick={() => saveCricketState({ status: 'completed', statusText: 'ম্যাচ সম্পন্ন হয়েছে!' })} className="btn btn-secondary" style={{ height: '44px', fontWeight: '700', justifyContent: 'center', backgroundColor: '#16a34a', color: '#fff' }}>
              ম্যাচ শেষ
            </button>
          )}
        </div>
      </div>

      {/* Wicket Modal */}
      {showWicketModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="card" style={{ width: 'min(420px, 94vw)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#dc2626' }}>
              💥 উইকেট তথ্য সাবমিট করুন
            </h3>
            <form onSubmit={handleWicketSubmit}>
              <div className="form-group">
                <label className="form-label">আউট হওয়ার ধরন</label>
                <select className="form-select" value={wicketType} onChange={e => setWicketType(e.target.value)}>
                  <option value="Bowled">Bowled (ক্লিন বোল্ড)</option>
                  <option value="Caught">Caught (ক্যাচ আউট)</option>
                  <option value="Run Out">Run Out (রান আউট)</option>
                  <option value="LBW">LBW (এলবিডব্লিউ)</option>
                  <option value="Stumped">Stumped (স্ট্যাম্পিং)</option>
                  <option value="Hit Wicket">Hit Wicket (হিট উইকেট)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">নতুন ব্যাটারের নাম</label>
                <input type="text" className="form-input" required placeholder="পরবর্তী ব্যাটার" value={newBatsmanName} onChange={e => setNewBatsmanName(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowWicketModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#dc2626' }}>উইকেট নিশ্চিত করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Timeline log */}
      {timeline.length > 0 && (
        <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
            বল-বাই-বল লগ (Ball Timeline)
          </h4>
          <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
            {timeline.map((evt, idx) => (
              <span 
                key={idx} 
                style={{ 
                  whiteSpace: 'nowrap', 
                  fontSize: '0.8rem', 
                  padding: '4px 8px', 
                  backgroundColor: evt.event.includes('WICKET') ? '#fee2e2' : 'var(--bg-elevated)', 
                  color: evt.event.includes('WICKET') ? '#dc2626' : 'var(--text-main)', 
                  borderRadius: '6px', 
                  border: '1px solid var(--border-color)' 
                }}
              >
                <strong>{evt.over}:</strong> {evt.event}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
