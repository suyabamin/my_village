import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Tv, Users, Calendar, Plus, Play, Phone, Award } from 'lucide-react';
import { getCollectionData, addDocument, initialVillageData } from '../services/dbService';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

export const Sports = () => {
  const { currentUser, userProfile } = useAuth();
  const { addToast } = useNotification();

  const [tournaments, setTournaments] = useState(initialVillageData.tournaments);
  const [matches, setMatches] = useState(initialVillageData.matches);
  const [activeTab, setActiveTab] = useState('tournaments'); // 'tournaments' | 'livescore'

  const [showTournamentModal, setShowTournamentModal] = useState(false);
  const [tournamentForm, setTournamentForm] = useState({
    name: '',
    sport: 'cricket',
    description: '',
    venue: 'আলমদীপাড়া কেন্দ্রীয় খেলার মাঠ',
    startDate: '',
    endDate: '',
    registrationDeadline: '',
    rules: '',
    contactPhone: ''
  });

  useEffect(() => {
    getCollectionData('tournaments').then(res => {
      if (res && res.length > 0) setTournaments(res);
    });
    getCollectionData('matches').then(res => {
      if (res && res.length > 0) setMatches(res);
    });
  }, []);

  const handleCreateTournament = async (e) => {
    e.preventDefault();
    if (!tournamentForm.name || !tournamentForm.startDate || !tournamentForm.contactPhone) {
      addToast('অনুগ্রহ করে প্রয়োজনীয় তথ্যসমূহ প্রদান করুন।', 'error');
      return;
    }

    const newTourn = {
      ...tournamentForm,
      poster: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
      customFields: [
        { label: "দলের সদস্য সংখ্যা", type: "number", required: true },
        { label: "অধিনায়কের ফোন নম্বর", type: "phone", required: true }
      ],
      status: 'active',
      createdBy: currentUser.uid,
      createdAt: new Date().toISOString()
    };

    const res = await addDocument('tournaments', newTourn);
    setTournaments(prev => [res, ...prev]);
    setShowTournamentModal(false);
    addToast('টুর্নামেন্ট সফলভাবে তৈরি করা হয়েছে!', 'success');
  };

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>
          আলমদীপাড়া ক্রীড়াঙ্গন
        </div>
        <h1 style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.2rem)', fontWeight: '800', marginBottom: '0.4rem' }}>
          খেলাধুলা, টুর্নামেন্ট ও লাইভ স্কোর
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 2.2vw, 1rem)' }}>
          আলমদীপাড়া গ্রামের ফুটবল, ক্রিকেট ও ঐতিহ্যবাহী গ্রামীণ খেলার টুর্নামেন্ট পঞ্জিকা ও সরাসরি লাইভ আপডেট।
        </p>
      </div>

      {/* Touch Scrollable Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <button onClick={() => setActiveTab('tournaments')} className={`btn ${activeTab === 'tournaments' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Trophy size={18} /> টুর্নামেন্টসমূহ ({tournaments.length})
        </button>
        <button onClick={() => setActiveTab('livescore')} className={`btn ${activeTab === 'livescore' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Tv size={18} /> লাইভ স্কোর ও স্ট্রিমিং ({matches.length})
        </button>
      </div>

      {/* Tab 1: Tournaments */}
      {activeTab === 'tournaments' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: '700' }}>চলতি ও আসন্ন টুর্নামেন্ট</h2>
            {currentUser ? (
              <button onClick={() => setShowTournamentModal(true)} className="btn btn-primary btn-mobile-full">
                <Plus size={18} /> টুর্নামেন্ট আয়োজন করুন
              </button>
            ) : (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                টুর্নামেন্ট তৈরি করতে <Link to="/login" style={{ textDecoration: 'underline' }}>লগইন করুন</Link>
              </span>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {tournaments.map(t => (
              <div key={t.id} className="card card-interactive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img src={t.poster} alt={t.name} style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '0.85rem' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="badge badge-amber">{t.sport === 'cricket' ? 'ক্রিকেট' : t.sport === 'football' ? 'ফুটবল' : 'ক্রীড়া'}</span>
                    <span className="badge badge-green">সচল রেজিস্ট্রেশন</span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    {t.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.85rem', lineHeight: '1.5' }}>
                    {t.description}
                  </p>

                  <div style={{ fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', backgroundColor: 'var(--bg-elevated)', padding: '0.65rem', borderRadius: 'var(--radius-sm)' }}>
                    <div><strong>স্থান:</strong> {t.venue}</div>
                    <div><strong>তারিখ:</strong> {t.startDate} - {t.endDate}</div>
                    <div><strong>শেষ সময়:</strong> {t.registrationDeadline}</div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <Link to={`/tournament/${t.id}`} className="btn btn-primary btn-sm btn-mobile-full" style={{ justifyContent: 'center' }}>
                    রেজিস্ট্রেশন ও বিবরণ →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Live Scores & Streaming */}
      {activeTab === 'livescore' && (
        <div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: '700', marginBottom: '1.25rem' }}>চলতি ম্যাচের লাইভ স্কোরবোর্ড</h2>
          {matches.map(m => (
            <div key={m.id} className="card" style={{ marginBottom: '1.25rem', borderColor: 'var(--color-primary-500)', boxShadow: 'var(--shadow-glow)', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge badge-red" style={{ backgroundColor: '#ef4444', color: '#fff' }}>
                  🔴 সচল লাইভ ম্যাচ
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>আলমদীপাড়া খেলার মাঠ</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '1rem', textAlign: 'center', padding: '0.85rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ flex: '1 1 120px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{m.teamA}</h3>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-600)' }}>
                    {m.score.teamA}
                  </div>
                </div>

                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>VS</div>

                <div style={{ flex: '1 1 120px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{m.teamB}</h3>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-600)' }}>
                    {m.score.teamB}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '0.85rem', textAlign: 'center' }}>
                <div style={{ fontWeight: '700', color: 'var(--color-accent-amber)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                  {m.score.statusText}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  ব্যাটার: {m.score.currentBatsman} | বোলার: {m.score.currentBowler}
                </div>
              </div>

              {/* YouTube Live Stream Embed */}
              {m.liveStreamUrl && (
                <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '700', marginBottom: '0.65rem', color: '#ef4444', fontSize: '0.9rem' }}>
                    <Tv size={16} /> সরাসরি সম্প্রচার (ইউটিউব লাইভ)
                  </div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px', background: '#000' }}>
                    <iframe
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      src="https://www.youtube-nocookie.com/embed/live_stream?channel=UCdemo"
                      title="Live Stream"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal: Create Tournament */}
      {showTournamentModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem' }}>
          <div className="card" style={{ width: 'min(540px, 94vw)', maxHeight: '90vh', overflowY: 'auto', padding: '1.25rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>নতুন টুর্নামেন্ট আয়োজন করুন</h2>
            <form onSubmit={handleCreateTournament}>
              <div className="form-group">
                <label className="form-label">টুর্নামেন্টের নাম</label>
                <input type="text" className="form-input" required placeholder="যেমন: আলমদীপাড়া ফুটবল কাপ ২০২৬" value={tournamentForm.name} onChange={e => setTournamentForm({...tournamentForm, name: e.target.value})} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">খেলার ধরন</label>
                  <select className="form-select" value={tournamentForm.sport} onChange={e => setTournamentForm({...tournamentForm, sport: e.target.value})}>
                    <option value="cricket">ক্রিকেট</option>
                    <option value="football">ফুটবল</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">খেলার স্থান</label>
                  <input type="text" className="form-input" required value={tournamentForm.venue} onChange={e => setTournamentForm({...tournamentForm, venue: e.target.value})} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">শুরুর তারিখ</label>
                  <input type="date" className="form-input" required value={tournamentForm.startDate} onChange={e => setTournamentForm({...tournamentForm, startDate: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">শেষের তারিখ</label>
                  <input type="date" className="form-input" required value={tournamentForm.endDate} onChange={e => setTournamentForm({...tournamentForm, endDate: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">রেজিস্ট্রেশনের শেষ সময়</label>
                <input type="date" className="form-input" required value={tournamentForm.registrationDeadline} onChange={e => setTournamentForm({...tournamentForm, registrationDeadline: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">আয়োজকের ফোন নম্বর</label>
                <input type="tel" className="form-input" required placeholder="017........" value={tournamentForm.contactPhone} onChange={e => setTournamentForm({...tournamentForm, contactPhone: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">নিয়মাবলী ও বিবরণ</label>
                <textarea className="form-textarea" rows="3" placeholder="টুর্নামেন্টের নিয়মাবলী ও পুরস্কার বিবরণ লিখুন" value={tournamentForm.description} onChange={e => setTournamentForm({...tournamentForm, description: e.target.value})} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button type="button" onClick={() => setShowTournamentModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary">পাবলিশ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
