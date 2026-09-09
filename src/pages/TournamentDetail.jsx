import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Download, CheckCircle2, Phone, Calendar, UserCheck, Plus, Trash2, Shield, Eye } from 'lucide-react';
import { getTournamentById, registerTeam, getTournamentRegistrations, getTournamentMatches } from '../services/sportsService';
import { uploadFreeImage } from '../services/imageService';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import html2pdf from 'html2pdf.js';

export const TournamentDetail = () => {
  const { id } = useParams();
  const { currentUser, userProfile } = useAuth();
  const { addToast } = useNotification();

  const [tournament, setTournament] = useState(null);
  const [approvedTeams, setApprovedTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'teams' | 'fixtures' | 'standings' | 'register'

  // Registration Form State
  const [teamName, setTeamName] = useState('');
  const [teamLogoUrl, setTeamLogoUrl] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [captainPhone, setCaptainPhone] = useState('');
  const [teamLocation, setTeamLocation] = useState('');
  const [uploadingLogo, setUploadingLogo] = useState(false);

  // Dynamic Players Array
  const [players, setPlayers] = useState([
    { name: '', jerseyNumber: '', position: '', photoUrl: '' }
  ]);
  const [submittedData, setSubmittedData] = useState(null);

  const loadData = async () => {
    const t = await getTournamentById(id);
    setTournament(t);
    if (t) {
      const regs = await getTournamentRegistrations(t.id, 'approved');
      setApprovedTeams(regs);
      const mList = await getTournamentMatches(t.id);
      setMatches(mList);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  if (!tournament) {
    return (
      <div className="container" style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
        <div className="skeleton" style={{ height: '220px', borderRadius: '16px' }} />
      </div>
    );
  }

  // Handle Team Logo Upload
  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setUploadingLogo(true);
      const url = await uploadFreeImage(file);
      if (url) {
        setTeamLogoUrl(url);
        addToast('দলের লোগো ছবি আপলোড সম্পন্ন হয়েছে!', 'success');
      }
    } catch (err) {
      addToast('লোগো ছবি আপলোড ব্যর্থ হয়েছে।', 'error');
    } finally {
      setUploadingLogo(false);
    }
  };

  // Add / Remove Player row
  const handleAddPlayerField = () => {
    const reqMax = Number(tournament.playersPerTeam) || 11;
    if (players.length >= reqMax) {
      addToast(`এই টুর্নামেন্টে প্রতি দলে সর্বোচ্চ ${reqMax} জন খেলোয়াড় অনুমোদিত।`, 'warning');
      return;
    }
    setPlayers(prev => [...prev, { name: '', jerseyNumber: '', position: '', photoUrl: '' }]);
  };

  const handleRemovePlayerField = (idx) => {
    setPlayers(prev => prev.filter((_, i) => i !== idx));
  };

  const handlePlayerChange = (idx, field, value) => {
    const copy = [...players];
    copy[idx][field] = value;
    setPlayers(copy);
  };

  // Player Photo Upload
  const handlePlayerPhotoUpload = async (idx, file) => {
    if (!file) return;
    try {
      addToast('খেলোয়াড়ের ছবি কম্প্রেস ও আপলোড হচ্ছে...', 'info');
      const url = await uploadFreeImage(file);
      if (url) {
        handlePlayerChange(idx, 'photoUrl', url);
        addToast('খেলোয়াড়ের ছবি সফলভাবে যুক্ত হয়েছে!', 'success');
      }
    } catch (err) {
      addToast('খেলোয়াড়ের ছবি আপলোড করা যায়নি।', 'error');
    }
  };

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      addToast('দল রেজিস্ট্রেশন করতে হলে একাউন্টে লগইন করুন।', 'error');
      return;
    }

    if (!teamName || !captainName || !captainPhone) {
      addToast('অনুগ্রহ করে সমস্ত প্রয়োজনীয় ঘরসমূহ পূরণ করুন।', 'error');
      return;
    }

    const regData = {
      tournamentId: tournament.id,
      tournamentName: tournament.name,
      teamName,
      teamLogoUrl,
      captainName,
      captainPhone,
      location: teamLocation,
      players,
      submittedBy: currentUser.uid,
      createdAt: new Date().toLocaleDateString('bn-BD')
    };

    await registerTeam(regData, currentUser.uid);
    setSubmittedData(regData);
    addToast('আপনার দলের রেজিস্ট্রেশন আবেদন জমা দেওয়া হয়েছে! আয়োজক পর্যালোচনার পর নিশ্চিত করবেন।', 'success');
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('pdf-registration-receipt');
    if (!element) return;

    const opt = {
      margin:       10,
      filename:     `Tournament-Registration-${teamName || 'Team'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).save();
  };

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)', maxWidth: '900px' }}>
      <Link to="/sports" className="btn btn-secondary btn-sm" style={{ marginBottom: '1.25rem' }}>
        <ArrowLeft size={16} /> সকল টুর্নামেন্টে ফিরুন
      </Link>

      {/* Header Banner */}
      <div className="card" style={{ marginBottom: '1.5rem', padding: '0', overflow: 'hidden' }}>
        <img 
          src={tournament.poster || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'} 
          alt={tournament.name} 
          style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
        />
        <div style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-amber">{tournament.sport === 'cricket' ? '🏏 ক্রিকেট টুর্নামেন্ট' : '⚽ ফুটবল টুর্নামেন্ট'}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>শেষ সময়: {tournament.registrationDeadline}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-primary-700)' }}>
            {tournament.name}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.6' }}>
            {tournament.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', backgroundColor: 'var(--bg-elevated)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
            <div><strong>খেলার স্থান:</strong> {tournament.venue}</div>
            <div><strong>তারিখ:</strong> {tournament.startDate} থেকে {tournament.endDate}</div>
            <div><strong>আয়োজক:</strong> {tournament.organizerName || 'আলমদীপাড়া যুব কমিটি'}</div>
            <div><strong>ফোন:</strong> {tournament.organizerPhone}</div>
          </div>
        </div>
      </div>

      {/* Touch Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <button onClick={() => setActiveTab('overview')} className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          📌 তথ্য ও পুরষ্কার
        </button>
        <button onClick={() => setActiveTab('teams')} className={`btn ${activeTab === 'teams' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          👥 অনুমোদিত দল ({approvedTeams.length})
        </button>
        <button onClick={() => setActiveTab('fixtures')} className={`btn ${activeTab === 'fixtures' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          📅 ফিক্সচার ({matches.length})
        </button>
        <button onClick={() => setActiveTab('register')} className={`btn ${activeTab === 'register' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          📝 দল রেজিস্ট্রেশন
        </button>
      </div>

      {/* Tab 1: Overview & Prizes */}
      {activeTab === 'overview' && (
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>🏆 টুর্নামেন্ট পুরস্কার ও নিয়মাবলী</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '12px', color: '#92400e' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>🥇 চ্যাম্পিয়ন পুরস্কার</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '0.2rem' }}>{tournament.prizes?.champion || '৳৫০,০০০'}</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '12px', color: '#334155' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>🥈 রানার্স-আপ পুরস্কার</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '0.2rem' }}>{tournament.prizes?.runnerUp || '৳২৫,০০০'}</div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>নিয়মাবলী:</h3>
          <p style={{ whiteSpace: 'pre-line', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {tournament.rules || '১. আয়োজক কমিটির সিদ্ধান্ত চূড়ান্ত বলে গণ্য হবে।\n২. নির্ধারিত সময়ের মধ্যে মাঠে উপস্থিত থাকতে হবে।'}
          </p>
        </div>
      )}

      {/* Tab 2: Approved Teams */}
      {activeTab === 'teams' && (
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>অনুমোদিত অংশগ্রহণকারী দলসমূহ</h2>
          {approvedTeams.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>এখনো কোনো দল অনুমোদিত হয়নি।</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
              {approvedTeams.map(t => (
                <div key={t.id} style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', backgroundColor: 'var(--bg-elevated)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 0.3rem' }}>{t.teamName}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>অধিনায়ক: {t.captainName}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>খেলোয়াড়: {t.players ? t.players.length : 0} জন</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Fixtures */}
      {activeTab === 'fixtures' && (
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>ম্যাচ ফিক্সচার ও সময়সূচী</h2>
          {matches.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>এখনো ফিক্সচার প্রকাশ করা হয়নি।</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {matches.map(m => (
                <div key={m.id} style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', backgroundColor: 'var(--bg-elevated)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-primary-600)', fontWeight: '700', marginBottom: '0.3rem' }}>{m.round}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', textAlign: 'center', margin: '0.5rem 0' }}>
                    {m.teamA} VS {m.teamB}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    {m.scheduledDate} ({m.scheduledTime}) — {m.venue}
                  </div>
                  {m.status === 'live' && (
                    <Link to={`/match/${m.id}`} className="btn btn-primary btn-sm btn-mobile-full" style={{ marginTop: '0.75rem', justifyContent: 'center' }}>
                      🔴 লাইভ দেখুন →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Registration Form */}
      {activeTab === 'register' && (
        <div>
          {!submittedData ? (
            <div className="card">
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-primary-700)' }}>
                টিম রেজিস্ট্রেশন ও খেলোয়াড় তালিকা জমা
              </h2>

              {!currentUser && (
                <div style={{ padding: '0.85rem', backgroundColor: '#fef3c7', borderRadius: '8px', color: '#92400e', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  বিজ্ঞপ্তি: দল রেজিস্ট্রেশনের জন্য সাইটে অ্যাকাউন্ট থাকা আবশ্যক। <Link to="/login" style={{ textDecoration: 'underline' }}>লগইন করুন</Link>
                </div>
              )}

              <form onSubmit={handleSubmitRegistration}>
                <div className="form-group">
                  <label className="form-label">দলের নাম (Team Name) *</label>
                  <input type="text" className="form-input" required placeholder="যেমন: আলমদীপাড়া সুপার কিংস" value={teamName} onChange={e => setTeamName(e.target.value)} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                  <div className="form-group">
                    <label className="form-label">অধিনায়কের নাম (Captain Name) *</label>
                    <input type="text" className="form-input" required placeholder="অধিনায়কের পূর্ণ নাম" value={captainName} onChange={e => setCaptainName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">অধিনায়কের ফোন নম্বর *</label>
                    <input type="tel" className="form-input" required placeholder="017........" value={captainPhone} onChange={e => setCaptainPhone(e.target.value)} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">দলের লোগো ছবি আপলোড (Team Logo)</label>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="form-input" disabled={uploadingLogo} />
                  {teamLogoUrl && <img src={teamLogoUrl} alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginTop: '0.5rem' }} />}
                </div>

                {/* Player Roster Section */}
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>
                      খেলোয়াড় তালিকা (সর্বোচ্চ {tournament.playersPerTeam || 11} জন)
                    </h3>
                    <button type="button" onClick={handleAddPlayerField} className="btn btn-secondary btn-sm">
                      <Plus size={16} /> খেলোয়াড় যোগ করুন
                    </button>
                  </div>

                  {players.map((p, idx) => (
                    <div key={idx} style={{ padding: '0.85rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '10px', marginBottom: '0.75rem', border: '1px solid var(--border-color)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>খেলোয়াড় #{idx + 1}</span>
                        {players.length > 1 && (
                          <button type="button" onClick={() => handleRemovePlayerField(idx)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer' }}>
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="খেলোয়াড়ের নাম *" 
                          required
                          value={p.name} 
                          onChange={e => handlePlayerChange(idx, 'name', e.target.value)} 
                        />
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="জার্সি নম্বর" 
                          value={p.jerseyNumber} 
                          onChange={e => handlePlayerChange(idx, 'jerseyNumber', e.target.value)} 
                        />
                        <div>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={e => handlePlayerPhotoUpload(idx, e.target.files[0])} 
                            className="form-input" 
                            style={{ fontSize: '0.75rem', padding: '6px' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1.25rem' }}>
                  রেজিস্ট্রেশন আবেদন জমা দিন
                </button>
              </form>
            </div>
          ) : (
            /* Printable PDF Receipt View */
            <div className="card" style={{ borderColor: 'var(--color-primary-500)', boxShadow: 'var(--shadow-glow)' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 0.5rem' }} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-700)' }}>
                  রেজিস্ট্রেশন জমা সম্পন্ন হয়েছে!
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>আয়োজক অনুমোদনের পর দলটি অফিশিয়াল ফিক্সচারে অন্তর্ভুক্ত হবে</p>
              </div>

              {/* PDF Receipt Target */}
              <div id="pdf-registration-receipt" style={{ padding: '1.5rem', border: '2px dashed var(--color-primary-500)', borderRadius: '12px', backgroundColor: '#fff', color: '#000' }}>
                <div style={{ textAlign: 'center', borderBottom: '2px solid #16a34a', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#16a34a', margin: 0 }}>আলমদীপাড়া ডিজিটাল গ্রাম — ক্রীড়া সেল</h3>
                  <p style={{ fontSize: '0.85rem', margin: '0.25rem 0 0', color: '#64748b' }}>অফিসিয়াল টুর্নামেন্ট টিম রেজিস্ট্রেশন রসিদ</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <div><strong>টুর্নামেন্ট:</strong> {submittedData.tournamentName}</div>
                  <div><strong>রেজিস্ট্রেশন তারিখ:</strong> {submittedData.createdAt}</div>
                  <div><strong>দলের নাম:</strong> {submittedData.teamName}</div>
                  <div><strong>অধিনায়ক:</strong> {submittedData.captainName} ({submittedData.captainPhone})</div>
                  <div><strong>মোট খেলোয়াড়:</strong> {submittedData.players ? submittedData.players.length : 0} জন</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button onClick={handleDownloadPDF} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  <Download size={18} /> অফিশিয়াল পিডিএফ ডাউনলোড করুন (PDF)
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
