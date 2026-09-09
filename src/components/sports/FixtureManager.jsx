import React, { useState, useEffect } from 'react';
import { Plus, Calendar, Trophy, Users, CheckCircle2, Play, Tv, Shield } from 'lucide-react';
import { createMatchFixture, getTournamentMatches, getTournamentRegistrations } from '../../services/sportsService';
import { useNotification } from '../../context/NotificationContext';

export const FixtureManager = ({ tournament, onSelectMatchForScoring }) => {
  const { addToast } = useNotification();
  const [approvedTeams, setApprovedTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [fixtureFormat, setFixtureFormat] = useState('knockout'); // 'knockout' | 'league'

  const [form, setForm] = useState({
    teamAId: '',
    teamBId: '',
    scheduledDate: tournament.startDate || '',
    scheduledTime: '15:00',
    venue: tournament.venue || 'আলমদীপাড়া মাঠ',
    round: 'কোয়ার্টার ফাইনাল',
    matchNumber: 1,
    officials: '',
    overs: '20'
  });

  const loadData = async () => {
    const regs = await getTournamentRegistrations(tournament.id, 'approved');
    setApprovedTeams(regs);
    const mList = await getTournamentMatches(tournament.id);
    setMatches(mList);
  };

  useEffect(() => {
    loadData();
  }, [tournament.id]);

  const handleManualAddFixture = async (e) => {
    e.preventDefault();
    if (!form.teamAId || !form.teamBId) {
      addToast('অনুগ্রহ করে দুটি দল নির্বাচন করুন।', 'error');
      return;
    }
    if (form.teamAId === form.teamBId) {
      addToast('একই দল দুটি বিপরীত অবস্থানে হতে পারে না।', 'error');
      return;
    }

    const teamAObj = approvedTeams.find(t => t.id === form.teamAId) || { teamName: 'টিম এ' };
    const teamBObj = approvedTeams.find(t => t.id === form.teamBId) || { teamName: 'টিম বি' };

    const payload = {
      tournamentId: tournament.id,
      gameType: tournament.sport || 'football',
      teamAId: form.teamAId,
      teamBId: form.teamBId,
      teamA: teamAObj.teamName,
      teamB: teamBObj.teamName,
      teamALogo: teamAObj.teamLogoUrl || '',
      teamBLogo: teamBObj.teamLogoUrl || '',
      venue: form.venue,
      scheduledDate: form.scheduledDate,
      scheduledTime: form.scheduledTime,
      round: form.round,
      matchNumber: Number(matches.length) + 1,
      officials: form.officials,
      overs: form.overs,
      status: 'scheduled'
    };

    const newM = await createMatchFixture(payload);
    setMatches(prev => [...prev, newM]);
    setShowAddModal(false);
    addToast('ম্যাচ ফিক্সচার সফলভাবে তৈরি হয়েছে!', 'success');
  };

  // Automatic Fixture Generator
  const handleAutoGenerateFixtures = async () => {
    if (approvedTeams.length < 2) {
      addToast('ফিক্সচার জেনারেট করার জন্য অন্তত ২ টি অনুমোদিত দল প্রয়োজন।', 'warning');
      return;
    }

    if (window.confirm(`${approvedTeams.length}টি অনুমোদিত দলের জন্য স্বয়ংক্রিয় ফিক্সচার তৈরি করতে চান?`)) {
      const generated = [];
      const shuffled = [...approvedTeams].sort(() => Math.random() - 0.5);

      for (let i = 0; i < shuffled.length; i += 2) {
        if (shuffled[i + 1]) {
          const m = await createMatchFixture({
            tournamentId: tournament.id,
            gameType: tournament.sport || 'football',
            teamAId: shuffled[i].id,
            teamBId: shuffled[i + 1].id,
            teamA: shuffled[i].teamName,
            teamB: shuffled[i + 1].teamName,
            teamALogo: shuffled[i].teamLogoUrl || '',
            teamBLogo: shuffled[i + 1].teamLogoUrl || '',
            venue: tournament.venue || 'আলমদীপাড়া মাঠ',
            scheduledDate: tournament.startDate || '',
            scheduledTime: '15:30',
            round: `নকআউট ম্যাচ ${Math.floor(i / 2) + 1}`,
            matchNumber: Math.floor(i / 2) + 1,
            overs: '20',
            status: 'scheduled'
          });
          generated.push(m);
        }
      }
      setMatches(prev => [...prev, ...generated]);
      addToast(`${generated.length}টি ফিক্সচার সফলভাবে জেনারেট করা হয়েছে!`, 'success');
    }
  };

  return (
    <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0 }}>
            📅 ফিক্সচার ও ম্যাচ ব্যবস্থাপনা
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            অনুমোদিত দলসমূহ: {approvedTeams.length}টি | মোট তৈরি ম্যাচ: {matches.length}টি
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={handleAutoGenerateFixtures} className="btn btn-secondary btn-sm">
            ⚡ অটমেটিক ফিক্সচার তৈরি
          </button>
          <button onClick={() => setShowAddModal(true)} className="btn btn-primary btn-sm">
            <Plus size={16} /> নতুন ফিক্সচার যোগ করুন
          </button>
        </div>
      </div>

      {/* Fixtures List */}
      {matches.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg-elevated)', borderRadius: '12px', color: 'var(--text-muted)' }}>
          এখনো কোনো ফিক্সচার তৈরি করা হয়নি। "অটমেটিক ফিক্সচার তৈরি" বা "নতুন ফিক্সচার যোগ করুন" ব্যবহার করুন।
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {matches.map(m => (
            <div key={m.id} className="card" style={{ padding: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="badge badge-amber">{m.round}</span>
                  <span className={`badge ${m.status === 'live' ? 'badge-red' : m.status === 'completed' ? 'badge-green' : 'badge-secondary'}`}>
                    {m.status === 'live' ? '🔴 LIVE' : m.status === 'completed' ? 'সম্পন্ন' : 'আসন্ন'}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '0.75rem 0', fontWeight: '800', textAlign: 'center' }}>
                  <div style={{ flex: 1 }}>{m.teamA}</div>
                  <div style={{ padding: '0 0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>VS</div>
                  <div style={{ flex: 1 }}>{m.teamB}</div>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-elevated)', padding: '0.5rem', borderRadius: '6px' }}>
                  <div><strong>তারিখ ও সময়:</strong> {m.scheduledDate} ({m.scheduledTime})</div>
                  <div><strong>স্থান:</strong> {m.venue}</div>
                </div>
              </div>

              <div style={{ marginTop: '0.85rem', display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => onSelectMatchForScoring(m)} 
                  className="btn btn-primary btn-sm btn-mobile-full"
                  style={{ justifyContent: 'center' }}
                >
                  <Play size={14} /> স্কোর ও লাইভ কন্ট্রোল →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Manual Fixture Modal */}
      {showAddModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="card" style={{ width: 'min(500px, 94vw)', padding: '1.25rem', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ম্যানুয়াল ফিক্সচার তৈরি</h3>
            <form onSubmit={handleManualAddFixture}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">টিম এ (Team A)</label>
                  <select className="form-select" required value={form.teamAId} onChange={e => setForm({...form, teamAId: e.target.value})}>
                    <option value="">দল নির্বাচন করুন</option>
                    {approvedTeams.map(t => <option key={t.id} value={t.id}>{t.teamName}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">টিম বি (Team B)</label>
                  <select className="form-select" required value={form.teamBId} onChange={e => setForm({...form, teamBId: e.target.value})}>
                    <option value="">দল নির্বাচন করুন</option>
                    {approvedTeams.map(t => <option key={t.id} value={t.id}>{t.teamName}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">তারিখ</label>
                  <input type="date" className="form-input" required value={form.scheduledDate} onChange={e => setForm({...form, scheduledDate: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">সময়</label>
                  <input type="time" className="form-input" required value={form.scheduledTime} onChange={e => setForm({...form, scheduledTime: e.target.value})} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">রাউন্ড / পর্ব</label>
                <select className="form-select" value={form.round} onChange={e => setForm({...form, round: e.target.value})}>
                  <option value="গ্রুপ পর্ব">গ্রুপ পর্ব</option>
                  <option value="কোয়ার্টার ফাইনাল">কোয়ার্টার ফাইনাল</option>
                  <option value="সেমিফাইনাল">সেমিফাইনাল</option>
                  <option value="ফাইনাল">ফাইনাল</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary">ফিক্সচার সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
