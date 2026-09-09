import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Plus, Award, AlertTriangle, Shield, CheckCircle2 } from 'lucide-react';
import { updateFootballScore, subscribeLiveScore } from '../../services/sportsService';
import { useNotification } from '../../context/NotificationContext';

export const FootballScoreController = ({ match, teamAName, teamBName }) => {
  const { addToast } = useNotification();
  
  const [homeGoals, setHomeGoals] = useState(0);
  const [awayGoals, setAwayGoals] = useState(0);
  const [matchMinute, setMatchMinute] = useState(0);
  const [period, setPeriod] = useState('1st Half');
  const [timerRunning, setTimerRunning] = useState(false);
  const [yellowCards, setYellowCards] = useState([]);
  const [redCards, setRedCards] = useState([]);
  const [timeline, setTimeline] = useState([]);

  // Goal scorer modal state
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [scoringTeam, setScoringTeam] = useState('home'); // 'home' | 'away'
  const [scorerName, setScorerName] = useState('');
  const [assistName, setAssistName] = useState('');

  // Card modal state
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardType, setCardType] = useState('yellow'); // 'yellow' | 'red'
  const [cardTeam, setCardTeam] = useState('home');
  const [cardPlayer, setCardPlayer] = useState('');

  useEffect(() => {
    const unsubscribe = subscribeLiveScore(match.id, (scoreData) => {
      if (scoreData) {
        setHomeGoals(scoreData.homeGoals || 0);
        setAwayGoals(scoreData.awayGoals || 0);
        setMatchMinute(scoreData.matchMinute || 0);
        setPeriod(scoreData.period || '1st Half');
        setTimerRunning(Boolean(scoreData.timerRunning));
        setYellowCards(scoreData.yellowCards || []);
        setRedCards(scoreData.redCards || []);
        setTimeline(scoreData.timeline || []);
      }
    });
    return () => unsubscribe();
  }, [match.id]);

  // Match Timer ticker
  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setMatchMinute(prev => prev + 1);
      }, 60000); // 1 minute per tick (or rapid tick for testing)
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning]);

  // Sync update to database
  const saveStateToDb = async (overrides = {}) => {
    const payload = {
      homeGoals: overrides.homeGoals !== undefined ? overrides.homeGoals : homeGoals,
      awayGoals: overrides.awayGoals !== undefined ? overrides.awayGoals : awayGoals,
      matchMinute: overrides.matchMinute !== undefined ? overrides.matchMinute : matchMinute,
      period: overrides.period !== undefined ? overrides.period : period,
      timerRunning: overrides.timerRunning !== undefined ? overrides.timerRunning : timerRunning,
      yellowCards: overrides.yellowCards !== undefined ? overrides.yellowCards : yellowCards,
      redCards: overrides.redCards !== undefined ? overrides.redCards : redCards,
      timeline: overrides.timeline !== undefined ? overrides.timeline : timeline,
      status: overrides.status || 'live'
    };

    await updateFootballScore(match.id, payload);
  };

  const handleStartTimer = () => {
    setTimerRunning(true);
    saveStateToDb({ timerRunning: true, status: 'live' });
    addToast('ম্যাচ টাইমার শুরু করা হয়েছে।', 'success');
  };

  const handlePauseTimer = () => {
    setTimerRunning(false);
    saveStateToDb({ timerRunning: false });
    addToast('ম্যাচ টাইমার সাময়িক স্থগিত।', 'info');
  };

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    const isHome = scoringTeam === 'home';
    const newHome = isHome ? homeGoals + 1 : homeGoals;
    const newAway = !isHome ? awayGoals + 1 : awayGoals;

    const goalEvent = {
      type: 'goal',
      team: isHome ? teamAName : teamBName,
      player: scorerName,
      assist: assistName,
      minute: matchMinute,
      timestamp: new Date().toLocaleTimeString('bn-BD')
    };

    const updatedTimeline = [goalEvent, ...timeline];
    setHomeGoals(newHome);
    setAwayGoals(newAway);
    setTimeline(updatedTimeline);
    setShowGoalModal(false);
    setScorerName('');
    setAssistName('');

    saveStateToDb({
      homeGoals: newHome,
      awayGoals: newAway,
      timeline: updatedTimeline
    });

    addToast(`⚽ গোল আপডেট করা হয়েছে! (${isHome ? teamAName : teamBName})`, 'success');
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    const isHome = cardTeam === 'home';
    const cardObj = {
      team: isHome ? teamAName : teamBName,
      player: cardPlayer,
      minute: matchMinute
    };

    let updatedYellows = yellowCards;
    let updatedReds = redCards;

    if (cardType === 'yellow') {
      updatedYellows = [...yellowCards, cardObj];
      setYellowCards(updatedYellows);
    } else {
      updatedReds = [...redCards, cardObj];
      setRedCards(updatedReds);
    }

    const cardEvent = {
      type: cardType === 'yellow' ? 'yellow_card' : 'red_card',
      team: isHome ? teamAName : teamBName,
      player: cardPlayer,
      minute: matchMinute
    };

    const updatedTimeline = [cardEvent, ...timeline];
    setTimeline(updatedTimeline);
    setShowCardModal(false);
    setCardPlayer('');

    saveStateToDb({
      yellowCards: updatedYellows,
      redCards: updatedReds,
      timeline: updatedTimeline
    });

    addToast(`${cardType === 'yellow' ? '🟨 হলুদ কার্ড' : '🟥 লাল কার্ড'} রেকর্ড করা হয়েছে।`, 'warning');
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    saveStateToDb({ period: newPeriod });
    addToast(`হাফ পরিবর্তিত হয়েছে: ${newPeriod}`, 'info');
  };

  const handleEndMatch = () => {
    if (window.confirm("আপনি কি নিশ্চিতভাবে এই ফুটবল ম্যাচটি সমাপ্ত করতে চান?")) {
      setTimerRunning(false);
      saveStateToDb({ timerRunning: false, period: 'সম্পন্ন (Full Time)', status: 'completed' });
      addToast('ফুটবল ম্যাচ সফলভাবে সম্পন্ন ঘোষণা করা হলো!', 'success');
    }
  };

  return (
    <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <span className="badge badge-amber">⚽ ফুটবল লাইভ স্কোরবোর্ড কন্ট্রোলার</span>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '0.4rem 0' }}>
          {teamAName} <span style={{ color: '#ef4444' }}>{homeGoals}</span> — <span style={{ color: '#ef4444' }}>{awayGoals}</span> {teamBName}
        </h2>
        <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-primary-600)' }}>
          ⏱️ {matchMinute}' মিনিট ({period})
        </div>
      </div>

      {/* Timer Controls */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {!timerRunning ? (
          <button onClick={handleStartTimer} className="btn btn-primary btn-sm">
            <Play size={16} /> টাইমার শুরু করুন
          </button>
        ) : (
          <button onClick={handlePauseTimer} className="btn btn-secondary btn-sm">
            <Pause size={16} /> টাইমার বিরতি
          </button>
        )}

        <button onClick={() => handlePeriodChange('১ম হাফ (1st Half)')} className="btn btn-secondary btn-sm">
          ১ম হাফ
        </button>
        <button onClick={() => handlePeriodChange('হাফ টাইম (Half Time)')} className="btn btn-secondary btn-sm">
          হাফ টাইম
        </button>
        <button onClick={() => handlePeriodChange('২য় হাফ (2nd Half)')} className="btn btn-secondary btn-sm">
          ২য় হাফ
        </button>
        <button onClick={handleEndMatch} className="btn btn-secondary btn-sm" style={{ backgroundColor: '#dc2626', color: '#fff' }}>
          <Square size={14} /> ম্যাচ শেষ করুন
        </button>
      </div>

      {/* Scoring Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <button 
          onClick={() => { setScoringTeam('home'); setShowGoalModal(true); }}
          className="btn btn-primary"
          style={{ height: '54px', fontSize: '1rem', justifyContent: 'center' }}
        >
          ⚽ গোল ({teamAName})
        </button>
        <button 
          onClick={() => { setScoringTeam('away'); setShowGoalModal(true); }}
          className="btn btn-primary"
          style={{ height: '54px', fontSize: '1rem', justifyContent: 'center' }}
        >
          ⚽ গোল ({teamBName})
        </button>
        <button 
          onClick={() => { setCardType('yellow'); setShowCardModal(true); }}
          className="btn btn-secondary"
          style={{ height: '54px', fontSize: '0.9rem', justifyContent: 'center', backgroundColor: '#f59e0b', color: '#fff' }}
        >
          🟨 হলুদ কার্ড
        </button>
        <button 
          onClick={() => { setCardType('red'); setShowCardModal(true); }}
          className="btn btn-secondary"
          style={{ height: '54px', fontSize: '0.9rem', justifyContent: 'center', backgroundColor: '#dc2626', color: '#fff' }}
        >
          🟥 লাল কার্ড
        </button>
      </div>

      {/* Goal Scorer Modal */}
      {showGoalModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="card" style={{ width: 'min(420px, 94vw)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              ⚽ গোলদাতা এনট্রি ({scoringTeam === 'home' ? teamAName : teamBName})
            </h3>
            <form onSubmit={handleGoalSubmit}>
              <div className="form-group">
                <label className="form-label">গোলদাতা খেলোয়াড় (Goal Scorer)</label>
                <input type="text" className="form-input" required placeholder="খেলোয়াড়ের নাম" value={scorerName} onChange={e => setScorerName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">অ্যাসিস্ট (অপশনাল)</label>
                <input type="text" className="form-input" placeholder="অ্যাসিস্টকারীর নাম" value={assistName} onChange={e => setAssistName(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowGoalModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary">সাবমিট গোল</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Card Modal */}
      {showCardModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="card" style={{ width: 'min(420px, 94vw)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              {cardType === 'yellow' ? '🟨 হলুদ কার্ড এনট্রি' : '🟥 লাল কার্ড এনট্রি'}
            </h3>
            <form onSubmit={handleCardSubmit}>
              <div className="form-group">
                <label className="form-label">দল নির্বাচন</label>
                <select className="form-select" value={cardTeam} onChange={e => setCardTeam(e.target.value)}>
                  <option value="home">{teamAName}</option>
                  <option value="away">{teamBName}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">খেলোয়াড়ের নাম</label>
                <input type="text" className="form-input" required placeholder="খেলোয়াড়ের নাম" value={cardPlayer} onChange={e => setCardPlayer(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowCardModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary">কার্ড রেকর্ড করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Live Match Timeline */}
      {timeline.length > 0 && (
        <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.5rem' }}>ম্যাচ টাইমলাইন ও হাইলাইটস</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {timeline.map((evt, idx) => (
              <div key={idx} style={{ fontSize: '0.85rem', padding: '0.4rem 0.6rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{evt.type === 'goal' ? '⚽' : evt.type === 'yellow_card' ? '🟨' : '🟥'}</span>
                <strong>{evt.minute}'</strong>
                <span>{evt.team} — {evt.player} {evt.assist ? `(অ্যাসিস্ট: ${evt.assist})` : ''}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
