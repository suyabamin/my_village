import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { User, Mail, Phone, Lock, AlertCircle } from 'lucide-react';
import GoogleSignInButton from '../components/auth/GoogleSignInButton';

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

  const getFriendlyErrorMessage = (err) => {
    const code = err?.code || '';
    if (code.includes('email-already-in-use')) {
      return 'এই ইমেইলটি ইতিমধ্যে ব্যবহৃত হয়েছে। অনুগ্রহ করে লগইন করুন।';
    }
    if (code.includes('weak-password')) {
      return 'পাসওয়ার্ডটি খুব দুর্বল। অন্তত ৬ অক্ষরের একটি শক্তিশালী পাসওয়ার্ড প্রদান করুন।';
    }
    if (code.includes('invalid-email')) {
      return 'অনুগ্রহ করে একটি সঠিক ও বৈধ ইমেইল ঠিকানা প্রদান করুন।';
    }
    if (code.includes('network-request-failed')) {
      return 'নেটওয়ার্ক সংযোগে সমস্যা হয়েছে। ইন্টারনেট সংযোগ পরীক্ষা করে পুনরায় চেষ্টা করুন।';
    }
    return err.message || 'রেজিস্ট্রেশন সম্পন্ন করতে সমস্যা হচ্ছে। অন্য ইমেইল দিয়ে চেষ্টা করুন।';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = displayName.trim();
    const cleanPhone = phone.trim();

    // Basic email syntax validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage('সঠিক ফরম্যাটের ইমেইল ঠিকানা লিখুন (যেমন: name@gmail.com)।');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('পাসওয়ার্ড দুটি মিলছে না। পুনরায় লিখুন।');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।');
      return;
    }

    setSubmitting(true);

    try {
      try {
        localStorage.setItem('alamdipara_registered_email', cleanEmail);
      } catch (_) {}
      await register(cleanEmail, password, cleanName, cleanPhone);
      addToast('রেজিস্ট্রেশন সফল! আপনার ইমেইল যাচাই করার জন্য লিঙ্ক পাঠানো হয়েছে।', 'success');
      navigate('/verify-email');
    } catch (err) {
      console.error(err);
      setErrorMessage(getFriendlyErrorMessage(err));
      addToast('রেজিস্ট্রেশন সম্পন্ন করা যায়নি।', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        <div className="card animate-fade-in" style={{ padding: 'clamp(1.5rem, 5vw, 2.25rem)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: '800' }}>নতুন অ্যাকাউন্ট রেজিস্ট্রেশন</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>আলমদীপাড়া ডিজিটাল গ্রামে স্বাগতম</p>
          </div>

          {/* 1. Continue with Google Button */}
          <div style={{ marginBottom: '1.25rem' }}>
            <GoogleSignInButton 
              onSuccess={handleGoogleSuccess}
              text="গুগল দিয়ে এগিয়ে যান" 
            />
          </div>

          {/* Or Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '1.25rem 0',
            color: 'var(--text-muted)',
            fontSize: '0.85rem'
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color, #e5e7eb)' }} />
            <span style={{ padding: '0 0.75rem' }}>অথবা ইমেইল দিয়ে রেজিস্ট্রেশন করুন</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color, #e5e7eb)' }} />
          </div>

          {errorMessage && (
            <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} /> <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">আপনার পূর্ণ নাম</label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ paddingLeft: '2.5rem' }}
                  required 
                  placeholder="যেমন: আব্দুল রহিম" 
                  value={displayName} 
                  onChange={e => setDisplayName(e.target.value)} 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">ইমেইল ঠিকানা</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="email" 
                  className="form-input" 
                  style={{ paddingLeft: '2.5rem' }}
                  required 
                  placeholder="name@gmail.com" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">মোবাইল নম্বর</label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="tel" 
                  className="form-input" 
                  style={{ paddingLeft: '2.5rem' }}
                  required 
                  placeholder="017........" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">পাসওয়ার্ড</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="password" 
                    className="form-input" 
                    style={{ paddingLeft: '2.5rem' }}
                    required 
                    placeholder="••••••••" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">পুনরায় পাসওয়ার্ড</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="password" 
                    className="form-input" 
                    style={{ paddingLeft: '2.5rem' }}
                    required 
                    placeholder="••••••••" 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={submitting} 
              className="btn btn-primary btn-lg" 
              style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
            >
              {submitting ? 'রেজিস্ট্রেশন হচ্ছে...' : 'সাইন আপ করুন'}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            ইতিমধ্যে অ্যাকাউন্ট আছে? <Link to="/login" style={{ color: 'var(--color-primary-600)', fontWeight: '700' }}>লগইন করুন</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
