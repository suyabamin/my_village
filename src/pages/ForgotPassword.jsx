import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { ArrowLeft, Mail } from 'lucide-react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { resetPassword } = useAuth();
  const { addToast } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setSubmitted(true);
      addToast('পাসওয়ার্ড রিসেট লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে।', 'success');
    } catch (err) {
      addToast('পাসওয়ার্ড রিসেট করা সম্ভব হয়নি।', 'error');
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '480px' }}>
      <div className="card animate-fade-in" style={{ padding: '2rem' }}>
        <Link to="/login" className="btn btn-secondary btn-sm" style={{ marginBottom: '1.25rem' }}>
          <ArrowLeft size={16} /> লগইনে ফিরুন
        </Link>

        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          পাসওয়ার্ড রিসেট করুন
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          আপনার নিবন্ধিত ইমেইল ইনপুট দিন, পাসওয়ার্ড পরিবর্তন করার নির্দেশনা পাঠানো হবে।
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">ইমেইল ঠিকানা</label>
              <input type="email" className="form-input" required placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              রিসেট লিঙ্ক পাঠান
            </button>
          </form>
        ) : (
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary-50)', borderRadius: '8px', color: 'var(--color-primary-900)', textAlign: 'center' }}>
            আপনার <strong>{email}</strong> ঠিকানায় রিসেট করার নিয়ম পাঠানো হয়েছে। ইমেইল ইনবক্স চেক করুন।
          </div>
        )}
      </div>
    </div>
  );
};
