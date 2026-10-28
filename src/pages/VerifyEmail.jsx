import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { Mail, RefreshCw, Send, LogOut, CheckCircle2, AlertTriangle, ArrowLeft, ExternalLink, Inbox } from 'lucide-react';

export const VerifyEmail = () => {
  const { 
    currentUser, 
    sendVerificationEmail, 
    refreshVerificationStatus, 
    isEmailVerified, 
    logout 
  } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();
  const location = useLocation();

  const [refreshing, setRefreshing] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('info'); // 'info' | 'success' | 'error'
  const pollerRef = useRef(null);

  const from = location.state?.from?.pathname || '/dashboard';
  const displayEmail = currentUser?.email || localStorage.getItem('alamdipara_registered_email') || '';

  // If user is already verified, redirect immediately
  useEffect(() => {
    if (isEmailVerified) {
      navigate(from, { replace: true });
    }
  }, [isEmailVerified, navigate, from]);

  // Background auto-refresh polling (checks every 4 seconds so user is auto-redirected once clicked)
  useEffect(() => {
    if (isEmailVerified || !currentUser) return;

    let attempts = 0;
    const maxAttempts = 45; // Poll for 3 minutes

    pollerRef.current = setInterval(async () => {
      attempts += 1;
      if (attempts > maxAttempts) {
        clearInterval(pollerRef.current);
        return;
      }
      try {
        const verified = await refreshVerificationStatus();
        if (verified) {
          clearInterval(pollerRef.current);
          addToast('ইমেইল সফলভাবে যাচাই করা হয়েছে! স্বাগতম।', 'success');
          navigate(from, { replace: true });
        }
      } catch (e) {
        // Silent catch for background polling
      }
    }, 4000);

    return () => {
      if (pollerRef.current) clearInterval(pollerRef.current);
    };
  }, [currentUser, isEmailVerified, refreshVerificationStatus, navigate, from, addToast]);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Handle Refresh Verification Status manually
  const handleRefresh = async () => {
    setRefreshing(true);
    setFeedbackMessage('');
    try {
      const verified = await refreshVerificationStatus();
      if (verified) {
        addToast('ইমেইল সফলভাবে যাচাই করা হয়েছে! স্বাগতম।', 'success');
        navigate(from, { replace: true });
      } else {
        setFeedbackType('info');
        setFeedbackMessage('আপনার ইমেইল এখনো যাচাই করা হয়নি। অনুগ্রহ করে ইনবক্স অথবা স্প্যাম ফোল্ডারের লিঙ্কে ক্লিক করার পর পুনরায় রিফ্রেশ করুন।');
        addToast('ইমেইল এখনো যাচাই সম্পন্ন হয়নি।', 'info');
      }
    } catch (err) {
      console.error(err);
      setFeedbackType('error');
      setFeedbackMessage('স্ট্যাটাস পরীক্ষা করতে সমস্যা হয়েছে। ইন্টারনেট সংযোগ পরীক্ষা করুন।');
      addToast('স্ট্যাটাস পরীক্ষা ব্যর্থ হয়েছে।', 'error');
    } finally {
      setRefreshing(false);
    }
  };

  // Handle Resend Verification Email
  const handleResend = async () => {
    if (cooldown > 0) return;
    setResending(true);
    setFeedbackMessage('');

    try {
      await sendVerificationEmail();
      setCooldown(60);
      setFeedbackType('success');
      setFeedbackMessage('একটি নতুন ভেরিফিকেশন লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে। অনুগ্রহ করে ইনবক্স ও স্প্যাম ফোল্ডার পরীক্ষা করুন।');
      addToast('ভেরিফিকেশন লিঙ্ক পুনরায় পাঠানো হয়েছে!', 'success');
    } catch (err) {
      console.error(err);
      setFeedbackType('error');
      if (err.code === 'auth/too-many-requests') {
        setCooldown(120);
        setFeedbackMessage('ফায়ারবেস সাময়িক রেট লিমিট প্রয়োগ করেছে। অনুগ্রহ করে ২ মিনিট পর পুনরায় চেষ্টা করুন অথবা ইতিমধ্যে পাঠানো লিঙ্কের জন্য স্প্যাম ফোল্ডার দেখুন।');
        addToast('কিছুক্ষণ পর আবার চেষ্টা করুন।', 'error');
      } else {
        setFeedbackMessage(err.message || 'ভেরিফিকেশন লিঙ্ক পাঠাতে সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।');
        addToast('ইমেইল পাঠানো ব্যর্থ হয়েছে।', 'error');
      }
    } finally {
      setResending(false);
    }
  };

  const handleLogout = async () => {
    if (pollerRef.current) clearInterval(pollerRef.current);
    await logout();
    navigate('/login');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" style={{ maxWidth: '520px' }}>
        <div className="card animate-fade-in" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center' }}>
          
          {/* Top Mail Icon Badge */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(22, 163, 74, 0.12)',
            color: 'var(--color-primary-600, #16a34a)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <Mail size={32} strokeWidth={2.2} />
          </div>

          <h1 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.65rem)', fontWeight: '800', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
            ইমেইল ভেরিফিকেশন লিঙ্ক পাঠানো হয়েছে
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            নিরাপত্তার স্বার্থে আপনার অ্যাকাউন্টের ইমেইল ঠিকানাটি নিশ্চিত করা প্রয়োজন।
          </p>

          {/* User Email Box */}
          {displayEmail && (
            <div style={{
              padding: '0.8rem 1rem',
              backgroundColor: 'var(--bg-elevated, #f0fdf4)',
              borderRadius: '10px',
              border: '1px solid #bbf7d0',
              fontSize: '0.96rem',
              fontWeight: '700',
              color: '#166534',
              wordBreak: 'break-all',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Mail size={16} /> {displayEmail}
            </div>
          )}

          {/* Direct 1-Click Mail Open Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.65rem',
            marginBottom: '1.25rem'
          }}>
            <a
              href="https://mail.google.com/mail/u/0/#search/alamdipara"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                fontSize: '0.85rem',
                padding: '0.65rem 0.5rem',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              <Inbox size={15} /> জিমেইলে খুঁজুন <ExternalLink size={12} />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#spam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                fontSize: '0.85rem',
                padding: '0.65rem 0.5rem',
                justifyContent: 'center',
                textDecoration: 'none',
                color: '#b45309',
                borderColor: '#fde68a'
              }}
            >
              <AlertTriangle size={15} /> স্প্যাম ফোল্ডার <ExternalLink size={12} />
            </a>
          </div>

          {/* Feedback Alert */}
          {feedbackMessage && (
            <div style={{
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              fontSize: '0.88rem',
              lineHeight: 1.5,
              textAlign: 'left',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem',
              backgroundColor: feedbackType === 'success' ? '#dcfce7' : feedbackType === 'error' ? '#fee2e2' : '#e0f2fe',
              color: feedbackType === 'success' ? '#166534' : feedbackType === 'error' ? '#991b1b' : '#075985',
              border: `1px solid ${feedbackType === 'success' ? '#86efac' : feedbackType === 'error' ? '#fca5a5' : '#7dd3fc'}`
            }}>
              {feedbackType === 'success' ? (
                <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              ) : feedbackType === 'error' ? (
                <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              ) : (
                <Mail size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              )}
              <span>{feedbackMessage}</span>
            </div>
          )}

          {/* Detailed Instructions Box to Find Verification Link */}
          <div style={{
            textAlign: 'left',
            padding: '1rem',
            borderRadius: '10px',
            backgroundColor: '#fffbeb',
            border: '1px solid #fef3c7',
            fontSize: '0.84rem',
            color: '#92400e',
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            <div style={{ fontWeight: '700', marginBottom: '0.35rem', color: '#78350f', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertTriangle size={15} /> লিঙ্কটি খুঁজে পেতে করণীয়:
            </div>
            <ul style={{ paddingLeft: '1.15rem', margin: 0 }}>
              <li>
                <strong>স্প্যাম (Spam) বা প্রমোশন ফোল্ডার:</strong> গুগল স্বয়ংক্রিয়ভাবে প্রথমবার নো-রিপ্লাই ইমেইলগুলো স্প্যামে পাঠিয়ে দিতে পারে। জিমেইল অ্যাপের বাম পাশের মেন্যু থেকে <strong>Spam</strong> ফোল্ডার চেক করুন।
              </li>
              <li>
                <strong>প্রেরকের নাম:</strong> ইমেইলটি এসেছে <code>noreply@alamdipara-digital-village.firebaseapp.com</code> থেকে।
              </li>
              <li>
                <strong>বিষয় (Subject):</strong> <code>Verify your email for alamdipara-digital-village</code>
              </li>
              <li>
                <strong>স্বয়ংক্রিয় যাচাই:</strong> আপনি ইমেইলের লিঙ্কে ক্লিক করার পর পেজটি স্বয়ংক্রিয়ভাবে চালু হয়ে যাবে (বা রিফ্রেশ বাটনে ক্লিক করুন)।
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <RefreshCw size={17} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'যাচাই পরীক্ষা করা হচ্ছে...' : 'ভেরিফিকেশন স্ট্যাটাস রিফ্রেশ করুন'}
            </button>

            <button
              type="button"
              onClick={handleResend}
              disabled={resending || cooldown > 0}
              className="btn btn-secondary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Send size={17} />
              {resending 
                ? 'পাঠানো হচ্ছে...' 
                : cooldown > 0 
                  ? `নতুন লিঙ্ক পাঠান (${cooldown} সেকেন্ড)` 
                  : 'পুনরায় ভেরিফিকেশন লিঙ্ক পাঠান'}
            </button>
          </div>

          {/* Secondary Actions: Logout and Back to Home */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1.75rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-color, #e5e7eb)',
            fontSize: '0.88rem'
          }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={14} /> মূল পাতায় ফিরে যান
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#ef4444',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: 0
              }}
            >
              <LogOut size={14} /> লগআউট / অন্য অ্যাকাউন্ট
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
