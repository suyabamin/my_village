import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { User, Mail, Phone, Lock, AlertCircle } from 'lucide-react';

export const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { register } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('পাসওয়ার্ড দুটি মিলছে না।');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।');
      return;
    }

    setSubmitting(true);

    try {
      await register(email, password, displayName, phone);
      addToast('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!', 'success');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setErrorMessage('রেজিস্ট্রেশন করতে সমস্যা হচ্ছে। অন্য ইমেইল দিয়ে চেষ্টা করুন।');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '500px' }}>
      <div className="card animate-fade-in" style={{ padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: '800' }}>নতুন একাউন্ট রেজিস্ট্রেশন</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>আলমদীপাড়া ডিজিটাল গ্রামে স্বাগতম</p>
        </div>

        {errorMessage && (
          <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={18} /> {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">আপনার পূর্ণ নাম</label>
            <input type="text" className="form-input" required placeholder="যেমন: আব্দুল রহিম" value={displayName} onChange={e => setDisplayName(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">ইমেইল ঠিকানা</label>
            <input type="email" className="form-input" required placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">মোবাইল নম্বর</label>
            <input type="tel" className="form-input" required placeholder="017........" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">পাসওয়ার্ড</label>
              <input type="password" className="form-input" required placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">পুনরায় পাসওয়ার্ড</label>
              <input type="password" className="form-input" required placeholder="••••••••" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
          </div>

          <button type="submit" disabled={submitting} className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
            {submitting ? 'রেজিস্ট্রেশন হচ্ছে...' : 'সাইন আপ করুন'}
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          ইতিমধ্যে অ্যাকাউন্ট আছে? <Link to="/login" style={{ color: 'var(--color-primary-600)', fontWeight: '700' }}>লগইন করুন</Link>
        </div>
      </div>
    </div>
  );
};
