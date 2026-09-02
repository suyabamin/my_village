import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialVillageData, addDocument } from '../services/dbService';
import { ArrowLeft, Trophy, Download, CheckCircle2, Phone, Calendar, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import html2pdf from 'html2pdf.js';

export const TournamentDetail = () => {
  const { id } = useParams();
  const { currentUser, userProfile } = useAuth();
  const { addToast } = useNotification();

  const tournament = initialVillageData.tournaments.find(t => t.id === id) || initialVillageData.tournaments[0];

  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [captainPhone, setCaptainPhone] = useState('');
  const [playerCount, setPlayerCount] = useState('11');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    if (!teamName || !captainName || !captainPhone) {
      addToast('অনুগ্রহ করে সমস্ত ঘর সঠিকভাবে পূরণ করুন।', 'error');
      return;
    }

    const regData = {
      tournamentId: tournament.id,
      tournamentName: tournament.name,
      teamName,
      captainName,
      captainPhone,
      playerCount,
      submittedBy: currentUser?.uid || 'guest',
      createdAt: new Date().toLocaleDateString('bn-BD')
    };

    await addDocument('tournament_registrations', regData);
    setSubmittedData(regData);
    addToast('দলের রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!', 'success');
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
    <div className="container" style={{ padding: '2.5rem 1.25rem', maxWidth: '850px' }}>
      <Link to="/sports" className="btn btn-secondary btn-sm" style={{ marginBottom: '1.5rem' }}>
        <ArrowLeft size={16} /> ক্রীড়াঙ্গনে ফিরুন
      </Link>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <span className="badge badge-amber">টুর্নামেন্ট রেজিস্ট্রেশন ফরম</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>শেষ সময়: {tournament.registrationDeadline}</span>
        </div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--color-primary-700)' }}>
          {tournament.name}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          {tournament.description}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', backgroundColor: 'var(--bg-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          <div><strong>খেলার স্থান:</strong> {tournament.venue}</div>
          <div><strong>তারিখ:</strong> {tournament.startDate} থেকে {tournament.endDate}</div>
          <div><strong>যোগাযোগ:</strong> {tournament.contactPhone}</div>
        </div>
      </div>

      {/* Registration Form Box */}
      {!submittedData ? (
        <div className="card">
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
            দলের তথ্য প্রদান ও রেজিস্ট্রেশন
          </h2>

          {!currentUser && (
            <div style={{ padding: '0.75rem', backgroundColor: '#fef3c7', borderRadius: '8px', color: '#92400e', marginBottom: '1rem', fontSize: '0.9rem' }}>
              বিজ্ঞপ্তি: দল রেজিস্ট্রেশনের জন্য লগইন থাকা বাঞ্ছনীয়।
            </div>
          )}

          <form onSubmit={handleSubmitRegistration}>
            <div className="form-group">
              <label className="form-label">দলের নাম (Team Name)</label>
              <input type="text" className="form-input" required placeholder="যেমন: আলমদীপাড়া সুপার কিংস" value={teamName} onChange={e => setTeamName(e.target.value)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">অধিনায়কের নাম (Captain Name)</label>
                <input type="text" className="form-input" required placeholder="অধিনায়কের পূর্ণ নাম" value={captainName} onChange={e => setCaptainName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">অধিনায়কের মোবাইল (Phone)</label>
                <input type="tel" className="form-input" required placeholder="017........" value={captainPhone} onChange={e => setCaptainPhone(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">খেলোয়াড় সংখ্যা</label>
              <input type="number" className="form-input" required value={playerCount} onChange={e => setPlayerCount(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
              রেজিস্ট্রেশন জমা দিন
            </button>
          </form>
        </div>
      ) : (
        /* Submitted Success & PDF Download Section */
        <div className="card" style={{ borderColor: 'var(--color-primary-500)', boxShadow: 'var(--shadow-glow)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 0.5rem' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-700)' }}>
              রেজিস্ট্রেশন নিশ্চিত করা হয়েছে!
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>নিচের অফিশিয়াল রসিদটি ডাউনলোড করে রাখুন</p>
          </div>

          {/* Printable Receipt Target */}
          <div id="pdf-registration-receipt" style={{ padding: '1.5rem', border: '2px dashed var(--color-primary-500)', borderRadius: '12px', backgroundColor: '#fff', color: '#000' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #16a34a', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#16a34a', margin: 0 }}>আলমদীপাড়া ডিজিটাল গ্রাম — ক্রীড়া কমিটি</h3>
              <p style={{ fontSize: '0.85rem', margin: '0.25rem 0 0', color: '#64748b' }}>অফিসিয়াল টুর্নামেন্ট টিম রেজিস্ট্রেশন স্লিপ</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.95rem' }}>
              <div><strong>টুর্নামেন্ট:</strong> {submittedData.tournamentName}</div>
              <div><strong>রেজিস্ট্রেশন তারিখ:</strong> {submittedData.createdAt}</div>
              <div><strong>দলের নাম:</strong> {submittedData.teamName}</div>
              <div><strong>অধিনায়ক:</strong> {submittedData.captainName}</div>
              <div><strong>ফোন:</strong> {submittedData.captainPhone}</div>
              <div><strong>খেলোয়াড় সংখ্যা:</strong> {submittedData.playerCount} জন</div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid #e2e8f0', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
              যেকোনো প্রয়োজনে আলমদীপাড়া যুব কল্যাণ সমিতি ক্রীড়া সেলের সাথে যোগাযোগ করুন।
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button onClick={handleDownloadPDF} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              <Download size={18} /> পিডিএফ ডাউনলোড করুন (PDF)
            </button>
            <button onClick={() => setSubmittedData(null)} className="btn btn-secondary">
              নতুন দল ভর্তি করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
