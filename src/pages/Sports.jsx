import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Tv, Users, Calendar, Plus, Play, Phone, Award, Upload, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getTournaments, subscribeTournaments, subscribeLiveMatches, createTournament } from '../services/sportsService';
import { uploadFreeImage } from '../services/imageService';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

export const Sports = () => {
  const navigate = useNavigate();
  const { currentUser, userProfile } = useAuth();
  const { addToast } = useNotification();

  const [tournaments, setTournaments] = useState([]);
  const [liveMatches, setLiveMatches] = useState([]);
  const [activeTab, setActiveTab] = useState('tournaments'); // 'tournaments' | 'upcoming' | 'completed' | 'live' | 'today'

  const [showTournamentModal, setShowTournamentModal] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [form, setForm] = useState({
    name: '',
    sport: 'football',
    description: '',
    organizerName: '',
    organizerPhone: '',
    poster: '',
    venue: 'আলমদীপাড়া খেলার মাঠ',
    venueAddress: 'আলমদীপাড়া, গ্রাম সড়ক',
    venueDescription: '',
    startDate: '',
    endDate: '',
    registrationDeadline: '',
    teamCount: '8',
    playersPerTeam: '11',
    championPrize: '৳৫০,০০০',
    runnerUpPrize: '৳২৫,০০০',
    thirdPrize: '',
    rules: ''
  });

  useEffect(() => {
    // Realtime subscriptions
    const unSubTourn = subscribeTournaments((data) => {
      setTournaments(data);
    }, 'approved');

    const unSubMatches = subscribeLiveMatches((mList) => {
      setLiveMatches(mList);
    });

    return () => {
      unSubTourn();
      unSubMatches();
    };
  }, []);

  const handlePosterUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setUploadingImage(true);
      const url = await uploadFreeImage(file);
      if (url) {
        setForm(prev => ({ ...prev, poster: url }));
        addToast('টুর্নামেন্ট পোস্টার ছবি আপলোড সম্পন্ন!', 'success');
      }
    } catch (err) {
      addToast(err.message || 'ছবি আপলোড ব্যর্থ হয়েছে।', 'error');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleCreateTournament = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      addToast('টুর্নামেন্ট তৈরি করতে লগইন থাকা আবশ্যক।', 'error');
      navigate('/login');
      return;
    }

    if (!form.name || !form.startDate || !form.organizerPhone) {
      addToast('অনুগ্রহ করে সমস্ত প্রয়োজনীয় ঘরসমূহ পূরণ করুন।', 'error');
      return;
    }

    const payload = {
      ...form,
      prizes: {
        champion: form.championPrize,
        runnerUp: form.runnerUpPrize,
        thirdPlace: form.thirdPrize
      }
    };

    const res = await createTournament(payload, currentUser.uid);
    setShowTournamentModal(false);
    addToast('আপনার টুর্নামেন্ট সফলভাবে জমা দেওয়া হয়েছে! এডমিন অনুমোদনের পর প্রকাশিত হবে।', 'success');
  };

  const approvedTournaments = tournaments.filter(t => (t.status || 'approved') === 'approved');
  const activeTournaments = approvedTournaments.filter(t => !t.endDate || new Date(t.endDate) >= new Date());
  const completedTournaments = approvedTournaments.filter(t => t.endDate && new Date(t.endDate) < new Date());

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>
          🏆 আলমদীপাড়া ডিজিটাল ক্রীড়াঙ্গন
        </div>
        <h1 style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.2rem)', fontWeight: '800', marginBottom: '0.4rem', color: 'var(--color-primary-800)' }}>
          খেলাধুলা — টুর্নামেন্ট, টিম রেজিস্ট্রেশন, ফিক্সচার ও লাইভ স্কোর
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 2.2vw, 1rem)' }}>
          আলমদীপাড়া গ্রামের ঐতিহ্যবাহী ফুটবল, ক্রিকেট ও টুর্নামেন্ট পঞ্জিকা, লাইভ স্কোরবোর্ড এবং মোবাইল ক্যামেরা সরাসরি সম্প্রচার।
        </p>
      </div>

      {/* Touch Scrollable Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <button onClick={() => setActiveTab('tournaments')} className={`btn ${activeTab === 'tournaments' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Trophy size={18} /> চলমান টুর্নামেন্ট ({activeTournaments.length})
        </button>
        <button onClick={() => setActiveTab('live')} className={`btn ${activeTab === 'live' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Tv size={18} /> 🔴 লাইভ ম্যাচ ({liveMatches.length})
        </button>
        <button onClick={() => setActiveTab('completed')} className={`btn ${activeTab === 'completed' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Calendar size={18} /> শেষ হওয়া টুর্নামেন্ট ({completedTournaments.length})
        </button>
      </div>

      {/* Tab 1: Active Tournaments */}
      {activeTab === 'tournaments' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: '700' }}>চলতি ও নিবন্ধনাধীন টুর্নামেন্টসমূহ</h2>
            {currentUser ? (
              <button onClick={() => setShowTournamentModal(true)} className="btn btn-primary btn-mobile-full">
                <Plus size={18} /> + টুর্নামেন্ট তৈরি করুন
              </button>
            ) : (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                নতুন টুর্নামেন্ট আয়োজন করতে <Link to="/login" style={{ textDecoration: 'underline' }}>লগইন করুন</Link>
              </span>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {activeTournaments.map(t => (
              <div key={t.id} className="card card-interactive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img src={t.poster || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80'} alt={t.name} style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '0.85rem' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="badge badge-amber">{t.sport === 'cricket' ? '🏏 ক্রিকেট' : '⚽ ফুটবল'}</span>
                    <span className="badge badge-green">👥 {t.teamCount || 8} দল</span>
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
                    {t.prizes?.champion && <div><strong>🏆 চ্যাম্পিয়ন পুরস্কার:</strong> {t.prizes.champion}</div>}
                  </div>
                </div>

                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <Link to={`/tournament/${t.id}`} className="btn btn-primary btn-sm btn-mobile-full" style={{ justifyContent: 'center', flex: 1 }}>
                    বিস্তারিত ও দল ভর্তি →
                  </Link>
                  {currentUser && t.createdBy === currentUser.uid && (
                    <Link to={`/tournament/${t.id}/manage`} className="btn btn-secondary btn-sm" style={{ backgroundColor: 'var(--color-primary-600)', color: '#fff' }}>
                      কন্ট্রোল
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Live Matches */}
      {activeTab === 'live' && (
        <div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: '700', marginBottom: '1.25rem' }}>চলতি ম্যাচের লাইভ স্কোরবোর্ড ও ভিডিও</h2>
          {liveMatches.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <Tv size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
              <h3>বর্তমানে কোনো লাইভ ম্যাচ সচল নেই</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>নতুন ম্যাচ শুরু হলে স্বয়ংক্রিয়ভাবে রিয়েল-টাইমে এখানে লাইভ দেখতে পাবেন।</p>
            </div>
          ) : (
            liveMatches.map(m => (
              <div key={m.id} className="card" style={{ marginBottom: '1.25rem', borderColor: 'var(--color-primary-500)', boxShadow: 'var(--shadow-glow)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="badge badge-red" style={{ backgroundColor: '#dc2626', color: '#fff' }}>
                    🔴 সচল লাইভ ম্যাচ
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.venue || 'আলমদীপাড়া খেলার মাঠ'}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '1rem', textAlign: 'center', padding: '0.85rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ flex: '1 1 120px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{m.teamA}</h3>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-600)' }}>
                      {m.scoreSummary || '০'}
                    </div>
                  </div>

                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>VS</div>

                  <div style={{ flex: '1 1 120px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{m.teamB}</h3>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <Link to={`/match/${m.id}`} className="btn btn-primary btn-mobile-full" style={{ justifyContent: 'center' }}>
                    <Tv size={18} /> লাইভ ভিডিও ও পূর্ণাঙ্গ স্কোর দেখুন →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 3: Completed Tournaments */}
      {activeTab === 'completed' && (
        <div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: '700', marginBottom: '1.25rem' }}>শেষ হওয়া টুর্নামেন্ট ও ফলাফল</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {completedTournaments.map(t => (
              <div key={t.id} className="card" style={{ padding: '1rem' }}>
                <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>সম্পন্ন টুর্নামেন্ট</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{t.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>স্থান: {t.venue}</p>
                <Link to={`/tournament/${t.id}`} className="btn btn-secondary btn-sm" style={{ marginTop: '0.75rem', width: '100%', justifyContent: 'center' }}>
                  ফলাফল দেখুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tournament Creation Modal */}
      {showTournamentModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem' }}>
          <div className="card" style={{ width: 'min(580px, 94vw)', maxHeight: '90vh', overflowY: 'auto', padding: '1.25rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary-700)' }}>
              নতুন টুর্নামেন্ট আয়োজন করুন (বাংলা ফরম)
            </h2>

            <form onSubmit={handleCreateTournament}>
              <div className="form-group">
                <label className="form-label">টুর্নামেন্টের নাম *</label>
                <input type="text" className="form-input" required placeholder="যেমন: আলমদীপাড়া বিজয় দিবস কাপ ২০২৬" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">খেলার ধরন (Sport Type) *</label>
                  <select className="form-select" value={form.sport} onChange={e => setForm({...form, sport: e.target.value})}>
                    <option value="football">⚽ ফুটবল</option>
                    <option value="cricket">🏏 ক্রিকেট</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">আয়োজকের নাম *</label>
                  <input type="text" className="form-input" required placeholder="আয়োজকের পূর্ণ নাম" value={form.organizerName} onChange={e => setForm({...form, organizerName: e.target.value})} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">মোট দল সংখ্যা *</label>
                  <input type="number" className="form-input" required value={form.teamCount} onChange={e => setForm({...form, teamCount: e.target.value})} />
                </div>

                <div className="form-group">
                  <label className="form-label">প্রতি দলে খেলোয়াড় সংখ্যা *</label>
                  <input type="number" className="form-input" required value={form.playersPerTeam} onChange={e => setForm({...form, playersPerTeam: e.target.value})} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">চ্যাম্পিয়ন পুরস্কার</label>
                  <input type="text" className="form-input" placeholder="যেমন: ৳৫০,০০০" value={form.championPrize} onChange={e => setForm({...form, championPrize: e.target.value})} />
                </div>

                <div className="form-group">
                  <label className="form-label">রানার্স-আপ পুরস্কার</label>
                  <input type="text" className="form-input" placeholder="যেমন: ৳২৫,০০০" value={form.runnerUpPrize} onChange={e => setForm({...form, runnerUpPrize: e.target.value})} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">শুরুর তারিখ *</label>
                  <input type="date" className="form-input" required value={form.startDate} onChange={e => setForm({...form, startDate: e.target.value})} />
                </div>

                <div className="form-group">
                  <label className="form-label">শেষের তারিখ *</label>
                  <input type="date" className="form-input" required value={form.endDate} onChange={e => setForm({...form, endDate: e.target.value})} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">খেলার স্থান (Venue) *</label>
                <input type="text" className="form-input" required value={form.venue} onChange={e => setForm({...form, venue: e.target.value})} />
              </div>

              <div className="form-group">
                <label className="form-label">আয়োজকের ফোন নম্বর *</label>
                <input type="tel" className="form-input" required placeholder="017........" value={form.organizerPhone} onChange={e => setForm({...form, organizerPhone: e.target.value})} />
              </div>

              <div className="form-group">
                <label className="form-label">পোস্টার/লোগো ছবি আপলোড (Poster/Logo)</label>
                <input type="file" accept="image/*" onChange={handlePosterUpload} className="form-input" disabled={uploadingImage} />
                {form.poster && <img src={form.poster} alt="Poster preview" style={{ width: '100px', height: '60px', objectFit: 'cover', marginTop: '0.5rem', borderRadius: '6px' }} />}
              </div>

              <div className="form-group">
                <label className="form-label">বিবরণ ও নিয়মাবলী</label>
                <textarea className="form-textarea" rows="3" placeholder="টুর্নামেন্টের শর্তাবলী ও নিয়ম লিখুন" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button type="button" onClick={() => setShowTournamentModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary" disabled={uploadingImage}>
                  {uploadingImage ? 'ছবি আপলোড হচ্ছে...' : 'অনুমোদনের জন্য পাঠান'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
