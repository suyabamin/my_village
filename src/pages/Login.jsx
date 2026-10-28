import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { LogIn, Mail, Lock, AlertCircle, ShieldCheck, UserCheck } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { login, demoLogin } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const getFriendlyErrorMessage = (err) => {
    const code = err?.code || '';
    if (code.includes('user-not-found')) {
      return 'এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি। নতুন রেজিস্ট্রেশন করুন।';
    }
    if (code.includes('wrong-password') || code.includes('invalid-credential')) {
      return 'ইমেইল বা পাসওয়ার্ড সঠিক নয়। অনুগ্রহ করে পুনরায় পরীক্ষা করুন।';
    }
    if (code.includes('invalid-email')) {
      return 'অনুগ্রহ করে সঠিক ইমেইল ঠিকানা প্রদান করুন।';
    }
    if (code.includes('too-many-requests')) {
      return 'অতিরিক্ত ভুল চেষ্টার কারণে অ্যাকাউন্ট সাময়িক ব্লক রয়েছে। কিছুক্ষণ পর চেষ্টা করুন।';
    }
    if (code.includes('network-request-failed')) {
      return 'নেটওয়ার্ক সংযোগে সমস্যা হয়েছে। ইন্টারনেট সংযোগ পরীক্ষা করুন।';
    }
    return err.message || 'ইমেইল বা পাসওয়ার্ড সঠিক নয়। অনুগ্রহ করে আবার চেষ্টা করুন।';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitting(true);

    try {
      await login(email.trim(), password);
      addToast('সফলভাবে লগইন হয়েছে!', 'success');
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setErrorMessage(getFriendlyErrorMessage(err));
      addToast('লগইন ব্যর্থ হয়েছে।', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuickLogin = (roleType) => {
    try {
      demoLogin(roleType);
      addToast(roleType === 'admin' ? 'সুপার এডমিন হিসেবে লগইন সফল!' : 'নাগরিক হিসেবে লগইন সফল!', 'success');
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      addToast('লগইনে সমস্যা হয়েছে।', 'error');
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        <div className="card animate-fade-in" style={{ padding: 'clamp(1.5rem, 5vw, 2rem)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'var(--color-primary-600)',
              color: '#fff',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem'
            }}>
              আ
            </div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: '800' }}>অ্যাকাউন্টে প্রবেশ করুন</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>আলমদীপাড়া ডিজিটাল গ্রাম প্ল্যাটফর্ম</p>
          </div>

          {errorMessage && (
            <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} /> <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">ইমেইল ঠিকানা</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="email"
                  className="form-input"
                  style={{ paddingLeft: '2.5rem' }}
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="form-label">পাসওয়ার্ড</label>
                <Link to="/forgot-password" style={{ fontSize: '0.8rem', color: 'var(--color-primary-600)' }}>
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </div>
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

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              {submitting ? 'লগইন হচ্ছে...' : 'লগইন করুন'}
            </button>
          </form>

          {/* Quick Demo Login Helpers */}
          <div style={{ marginTop: '1.25rem', padding: '0.85rem', background: 'var(--bg-elevated, #f8faf9)', borderRadius: '10px', border: '1px solid var(--border-color, #e5e7eb)' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem', textAlign: 'center' }}>
              পরীক্ষা ও ডেমোর জন্য দ্রুত লগইন করুন:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => handleQuickLogin('admin')}
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', borderColor: 'var(--color-primary-600)', color: 'var(--color-primary-700)' }}
              >
                <ShieldCheck size={14} /> সুপার এডমিন
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin('citizen')}
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <UserCheck size={14} /> সাধারণ নাগরিক
              </button>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            অ্যাকাউন্ট নেই? <Link to="/register" style={{ color: 'var(--color-primary-600)', fontWeight: '700' }}>নতুন রেজিস্ট্রেশন করুন</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
