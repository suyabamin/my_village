import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tv, Trophy, Shield, RefreshCw } from 'lucide-react';
import { subscribeLiveScore, subscribeLiveStream, getTournamentMatches } from '../services/sportsService';
import { LiveStreamPlayer } from '../components/sports/LiveStreamPlayer';

export const LiveMatchPage = () => {
  const { id } = useParams(); // matchId
  const [match, setMatch] = useState(null);
  const [score, setScore] = useState(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    // 1. Subscribe live score
    const unSubScore = subscribeLiveScore(id, (scoreData) => {
      setScore(scoreData);
    });

    // 2. Subscribe live stream metadata
    const unSubStream = subscribeLiveStream(id, (streamData) => {
      setStream(streamData);
    });

    return () => {
      unSubScore();
      unSubStream();
    };
  }, [id]);

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)', maxWidth: '900px' }}>
      <Link to="/sports" className="btn btn-secondary btn-sm" style={{ marginBottom: '1.25rem' }}>
        <ArrowLeft size={16} /> সকল টুর্নামেন্ট ও স্পোর্টসে ফিরুন
      </Link>

      {/* Live Stream Video Player Box */}
      <div style={{ marginBottom: '1.5rem' }}>
        <LiveStreamPlayer 
          streamUrl={stream?.streamUrl || ''} 
          isLive={stream?.status === 'active' || true}
          matchTitle={match ? `${match.teamA} বনাম ${match.teamB}` : 'লাইভ ম্যাচ ব্রডকাস্ট'}
          cameraAngle={stream?.cameraAngle || 'প্রধান মাঠ ক্যামেরা'}
        />
      </div>

      {/* Live Scorecard */}
      <div className="card" style={{ marginBottom: '1.5rem', borderColor: 'var(--color-primary-500)', boxShadow: 'var(--shadow-glow)', padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="badge badge-red" style={{ backgroundColor: '#dc2626', color: '#fff' }}>
            🔴 লাইভ স্কোরবোর্ড
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>আলমদীপাড়া খেলার মাঠ</span>
        </div>

        {score?.gameType === 'cricket' ? (
          <div>
            <div style={{ textAlign: 'center', padding: '1rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-primary-700)', margin: '0 0 0.3rem' }}>
                {score.innings === 1 ? '১ম ইনিংস' : '২য় ইনিংস'} — {score.teamARuns || 0}/{score.teamAWickets || 0}
              </h2>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                {score.teamAOvers || '0.0'} ওভার (CRR: {score.runRate || '0.00'})
              </div>
              {score.statusText && (
                <div style={{ color: 'var(--color-accent-amber)', fontWeight: '700', marginTop: '0.4rem', fontSize: '0.95rem' }}>
                  {score.statusText}
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', backgroundColor: 'var(--bg-elevated)', padding: '0.85rem', borderRadius: '10px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ব্যাটার</div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>🏏 {score.currentBatsman?.name || 'ব্যাটার'} — {score.currentBatsman?.runs || 0} ({score.currentBatsman?.balls || 0})</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>বোলার</div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>⚾ {score.currentBowler?.name || 'বোলার'} — {score.currentBowler?.wickets || 0}/{score.currentBowler?.runs || 0}</div>
              </div>
            </div>
          </div>
        ) : (
          /* Football Score View */
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', padding: '1.25rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>টিম এ</h3>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#dc2626' }}>{score?.homeGoals || 0}</div>
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>VS</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>টিম বি</h3>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#dc2626' }}>{score?.awayGoals || 0}</div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '0.85rem', fontWeight: '700', color: 'var(--color-primary-600)' }}>
              ⏱️ {score?.matchMinute || 0}' মিনিট ({score?.period || '1st Half'})
            </div>
          </div>
        )}

        {/* Timeline Log */}
        {score?.timeline && score.timeline.length > 0 && (
          <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.5rem' }}>রিয়েল-টাইম ইভেন্ট টাইমলাইন</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {score.timeline.map((evt, idx) => (
                <div key={idx} style={{ fontSize: '0.85rem', padding: '0.45rem 0.65rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '6px' }}>
                  {evt.text || evt.event}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
