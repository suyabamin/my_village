import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Users, Calendar, Trophy, Play, Radio,
  CheckCircle2, XCircle, Eye, ShieldAlert, Loader2, RefreshCw
} from 'lucide-react';
import {
  getTournamentById,
  getTournamentRegistrations,
  updateTeamRegistrationStatus
} from '../services/sportsService';
import { FixtureManager } from '../components/sports/FixtureManager';
import { FootballScoreController } from '../components/sports/FootballScoreController';
import { CricketScoreController } from '../components/sports/CricketScoreController';
import { StreamBroadcaster } from '../components/sports/StreamBroadcaster';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

export const TournamentManagement = () => {
  const { id } = useParams();
  const { currentUser, userProfile } = useAuth();
  const { addToast } = useNotification();

  const [tournament, setTournament] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('teams'); // 'teams' | 'fixtures' | 'scoring' | 'streaming'
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [selectedTeamModal, setSelectedTeamModal] = useState(null);

  const loadTournamentData = async () => {
    setPageLoading(true);
    try {
      const t = await getTournamentById(id);
      setTournament(t);
      if (t) {
        const regs = await getTournamentRegistrations(t.id);
        setRegistrations(regs || []);
      }
    } catch (err) {
      console.error('TournamentManagement load error:', err);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    loadTournamentData();
  }, [id]);

  // ── Loading skeleton ─────────────────────────────────────────────────────────
  if (pageLoading) {
    return (
      <div className="container" style={{ padding: '3rem 1.25rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="skeleton" style={{ height: '48px', width: '200px', borderRadius: '10px' }} />
          <div className="skeleton" style={{ height: '120px', borderRadius: '16px' }} />
          <div className="skeleton" style={{ height: '52px', borderRadius: '12px' }} />
          <div className="skeleton" style={{ height: '300px', borderRadius: '16px' }} />
        </div>
      </div>
    );
  }

  // ── Tournament not found ─────────────────────────────────────────────────────
  if (!tournament) {
    return (
      <div className="container" style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
        <Trophy size={56} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>টুর্নামেন্টটি পাওয়া যায়নি</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          ID: <code>{id}</code> — এই টুর্নামেন্টটি মুছে ফেলা হয়েছে অথবা অবৈধ লিংক।
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <button onClick={loadTournamentData} className="btn btn-secondary">
            <RefreshCw size={16} /> পুনরায় লোড করুন
          </button>
          <Link to="/sports" className="btn btn-primary">ক্রীড়াঙ্গনে ফিরুন</Link>
        </div>
      </div>
    );
  }

  // ── Access control — who can manage ─────────────────────────────────────────
  const userRoles = userProfile?.roles || [];
  const isAdmin = userRoles.includes('super_admin') || userRoles.includes('game_admin');
  const isCreator = currentUser && tournament.createdBy === currentUser.uid;
  const canManage = isCreator || isAdmin;

  if (!currentUser) {
    return (
      <div className="container" style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
        <ShieldAlert size={48} color="#dc2626" style={{ margin: '0 auto 1rem' }} />
        <h2>লগইন প্রয়োজন</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
          এই পেজটি দেখতে আপনাকে লগইন থাকতে হবে।
        </p>
        <Link to="/login" className="btn btn-primary">লগইন করুন</Link>
      </div>
    );
  }

  if (!canManage) {
    return (
      <div className="container" style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
        <ShieldAlert size={48} color="#dc2626" style={{ margin: '0 auto 1rem' }} />
        <h2>অ্যাক্সেস অনুমোদিত নয়</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
          শুধুমাত্র টুর্নামেন্টের আয়োজক বা গেম অ্যাডমিন এই কন্ট্রোল প্যানেল ব্যবহার করতে পারবেন।
        </p>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          আপনার UID: <code>{currentUser.uid}</code><br />
          টুর্নামেন্ট createdBy: <code>{tournament.createdBy || 'N/A'}</code>
        </div>
        <Link to={`/tournament/${tournament.id}`} className="btn btn-primary">
          টুর্নামেন্ট পেজে ফিরুন
        </Link>
      </div>
    );
  }

  const handleApproveTeam = async (regId) => {
    await updateTeamRegistrationStatus(regId, 'approved');
    addToast('দল সফলভাবে অনুমোদন করা হয়েছে!', 'success');
    loadTournamentData();
  };

  const handleRejectTeam = async (regId) => {
    const reason = window.prompt('প্রত্যাখ্যানের কারণ লিখুন (অপশনাল):') || '';
    await updateTeamRegistrationStatus(regId, 'rejected', reason);
    addToast('দলটি প্রত্যাখ্যান করা হয়েছে।', 'info');
    loadTournamentData();
  };

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)' }}>
      <Link to={`/tournament/${tournament.id}`} className="btn btn-secondary btn-sm" style={{ marginBottom: '1.25rem' }}>
        <ArrowLeft size={16} /> টুর্নামেন্ট পেজে ফিরুন
      </Link>

      {/* Control Panel Header */}
      <div className="card" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--bg-elevated)', borderLeft: '4px solid var(--color-primary-600)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <span className="badge badge-amber">আয়োজক কন্ট্রোল প্যানেল</span>
            <h1 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', margin: '0.3rem 0' }}>
              {tournament.name}
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
              খেলার ধরন: {tournament.sport === 'cricket' ? '🏏 ক্রিকেট' : '⚽ ফুটবল'} | স্থান: {tournament.venue}
            </p>
          </div>

          <span className={`badge ${tournament.status === 'approved' ? 'badge-green' : tournament.status === 'rejected' ? 'badge-red' : 'badge-amber'}`}>
            স্ট্যাটাস: {tournament.status === 'approved' ? 'অনুমোদিত' : tournament.status === 'rejected' ? 'প্রত্যাখ্যাত' : 'অনুমোদনের অপেক্ষায়'}
          </span>
        </div>
      </div>

      {/* Touch Nav Tabs */}
      <div style={{
        display: 'flex', gap: '0.5rem', marginBottom: '1.5rem',
        borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem',
        overflowX: 'auto', WebkitOverflowScrolling: 'touch'
      }}>
        {[
          { key: 'teams', icon: <Users size={16} />, label: `নিবন্ধিত দলসমূহ (${registrations.length})` },
          { key: 'fixtures', icon: <Calendar size={16} />, label: 'ফিক্সচার ও সিডিউল' },
          { key: 'scoring', icon: <Play size={16} />, label: 'লাইভ স্কোর কন্ট্রোলার' },
          { key: 'streaming', icon: <Radio size={16} />, label: 'ব্রডকাস্ট ও লাইভ স্ট্রিমিং' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`btn ${activeTab === tab.key ? 'btn-primary' : 'btn-secondary'}`}
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Teams Management */}
      {activeTab === 'teams' && (
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>
            আবেদনকৃত দলসমূহ পর্যালোচনা ও অনুমোদন
          </h2>

          {registrations.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-muted)' }}>
              <Users size={40} style={{ margin: '0 auto 0.75rem', opacity: 0.4 }} />
              <p>এখনো কোনো দল এই টুর্নামেন্টে রেজিস্ট্রেশন করেনি।</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {registrations.map(r => (
                <div key={r.id} className="card" style={{ padding: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className={`badge ${r.status === 'approved' ? 'badge-green' : r.status === 'rejected' ? 'badge-red' : 'badge-amber'}`}>
                        {r.status === 'approved' ? 'অনুমোদিত' : r.status === 'rejected' ? 'প্রত্যাখ্যাত' : 'অপেক্ষমাণ'}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {typeof r.createdAt === 'string' ? r.createdAt.slice(0, 10) : ''}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem' }}>{r.teamName}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      <div><strong>অধিনায়ক:</strong> {r.captainName} ({r.captainPhone})</div>
                      <div><strong>খেলোয়াড়:</strong> {r.players ? r.players.length : 0} জন</div>
                      {r.location && <div><strong>এলাকা:</strong> {r.location}</div>}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSelectedTeamModal(r)}
                      className="btn btn-secondary btn-sm btn-mobile-full"
                      style={{ marginBottom: '0.5rem', justifyContent: 'center', width: '100%' }}
                    >
                      <Eye size={14} /> প্লেয়ার স্কোয়াড ও ছবি দেখুন
                    </button>

                    {r.status === 'pending' && (
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleApproveTeam(r.id)}
                          className="btn btn-primary btn-sm"
                          style={{ flex: 1, justifyContent: 'center' }}
                        >
                          <CheckCircle2 size={14} /> অনুমোদন
                        </button>
                        <button
                          onClick={() => handleRejectTeam(r.id)}
                          className="btn btn-secondary btn-sm"
                          style={{ backgroundColor: '#dc2626', color: '#fff', borderColor: '#dc2626' }}
                        >
                          <XCircle size={14} /> নাকচ
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Fixtures */}
      {activeTab === 'fixtures' && (
        <FixtureManager
          tournament={tournament}
          onSelectMatchForScoring={(match) => {
            setSelectedMatch(match);
            setActiveTab('scoring');
          }}
        />
      )}

      {/* Tab 3: Live Scoring Controller */}
      {activeTab === 'scoring' && (
        <div>
          {!selectedMatch ? (
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Play size={44} color="var(--text-muted)" style={{ margin: '0 auto 0.75rem', opacity: 0.4 }} />
              <h3>ম্যাচ নির্বাচন করুন</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                স্কোর আপডেট করার জন্য ফিক্সচার ট্যাব থেকে একটি সচল ম্যাচ সিলেক্ট করুন।
              </p>
              <button onClick={() => setActiveTab('fixtures')} className="btn btn-primary">
                <Calendar size={16} /> ফিক্সচারে যান
              </button>
            </div>
          ) : tournament.sport === 'cricket' ? (
            <CricketScoreController
              match={selectedMatch}
              teamAName={selectedMatch.teamA}
              teamBName={selectedMatch.teamB}
            />
          ) : (
            <FootballScoreController
              match={selectedMatch}
              teamAName={selectedMatch.teamA}
              teamBName={selectedMatch.teamB}
            />
          )}
        </div>
      )}

      {/* Tab 4: Live Stream Broadcaster */}
      {activeTab === 'streaming' && (
        <StreamBroadcaster
          matchId={selectedMatch ? selectedMatch.id : `tourn-main-${tournament.id}`}
          tournamentId={tournament.id}
          currentUserId={currentUser.uid}
        />
      )}

      {/* Player Squad Modal */}
      {selectedTeamModal && (
        <div
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)', zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedTeamModal(null); }}
        >
          <div
            className="card"
            style={{ width: 'min(580px, 94vw)', maxHeight: '85vh', overflowY: 'auto', padding: '1.25rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>
                {selectedTeamModal.teamName} — প্লেয়ার স্কোয়াড
              </h3>
              <button onClick={() => setSelectedTeamModal(null)} className="btn btn-secondary btn-sm">বন্ধ করুন</button>
            </div>

            {selectedTeamModal.teamLogoUrl && (
              <img
                src={selectedTeamModal.teamLogoUrl}
                alt="Team Logo"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block', border: '3px solid var(--color-primary-500)' }}
              />
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem' }}>
              {selectedTeamModal.players && selectedTeamModal.players.length > 0 ? (
                selectedTeamModal.players.map((p, i) => (
                  <div key={i} style={{
                    border: '1px solid var(--border-color)', borderRadius: '10px',
                    padding: '0.65rem', textAlign: 'center', backgroundColor: 'var(--bg-elevated)'
                  }}>
                    <img
                      src={p.photoUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'}
                      alt={p.name}
                      style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 0.4rem', display: 'block' }}
                    />
                    <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{p.name}</div>
                    {p.jerseyNumber && <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>#{p.jerseyNumber}</div>}
                    {p.position && <div style={{ fontSize: '0.72rem', color: 'var(--color-primary-600)', marginTop: '0.2rem' }}>{p.position}</div>}
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1/-1', color: 'var(--text-muted)', textAlign: 'center', padding: '1.5rem' }}>
                  কোনো প্লেয়ার লিস্ট প্রদান করা হয়নি।
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
