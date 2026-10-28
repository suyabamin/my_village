import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { Mail, RefreshCw, Send, LogOut, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

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

  const from = location.state?.from?.pathname || '/dashboard';

  // If user is already verified, redirect immediately
  useEffect(() => {
    if (isEmailVerified) {
      navigate(from, { replace: true });
    }
  }, [isEmailVerified, navigate, from]);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Handle Refresh Verification Status
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
        setFeedbackMessage('আপনার ইমেইল এখনো যাচাই করা হয়নি। অনুগ্রহ করে আপনার ইনবক্স অথবা স্প্যাম ফোল্ডারে পাঠানো লিঙ্কে ক্লিক করুন এবং পুনরায় এখানে রিফ্রেশ করুন।');
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
      setFeedbackMessage('একটি নতুন ভেরিফিকেশন লিঙ্ক আপনার ইমেইলে সফলভাবে পাঠানো হয়েছে। ইনবক্স ও স্প্যাম ফোল্ডার পরীক্ষা করুন।');
      addToast('ভেরিফিকেশন লিঙ্ক পুনরায় পাঠানো হয়েছে!', 'success');
    } catch (err) {
      console.error(err);
      setFeedbackType('error');
      if (err.code === 'auth/too-many-requests') {
        setCooldown(120);
        setFeedbackMessage('অতিরিক্ত অনুরোধের কারণে সাময়িক বিরতি প্রয়োজন। অনুগ্রহ করে ২ মিনিট পর পুনরায় চেষ্টা করুন।');
        addToast('সাময়িক বিরতি প্রয়োজন। অনুগ্রহ করে কিছুক্ষণ পর চেষ্টা করুন।', 'error');
      } else {
        setFeedbackMessage(err.message || 'ভেরিফিকেশন ইমেইল পাঠাতে সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।');
        addToast('ইমেইল পাঠানো ব্যর্থ হয়েছে।', 'error');
      }
    } finally {
      setResending(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        <div className="card animate-fade-in" style={{ padding: 'clamp(1.75rem, 5vw, 2.5rem)', textAlign: 'center' }}>
          
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
            marginBottom: '1.25rem'
          }}>
            <Mail size={32} strokeWidth={2.2} />
          </div>

          <h1 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.75rem)', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
            ইমেইল ভেরিফিকেশন প্রয়োজন
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            নিরাপত্তার স্বার্থে সুরক্ষিত ফিচারগুলো ব্যবহারের পূর্বে আপনার ইমেইল ঠিকানা যাচাই করা আবশ্যক।
          </p>

          {/* User Email Box */}
          {currentUser?.email && (
            <div style={{
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--bg-elevated, #f8faf9)',
              borderRadius: '10px',
              border: '1px solid var(--border-color, #e2e8f0)',
              fontSize: '0.95rem',
              fontWeight: '700',
              color: 'var(--color-primary-800, #166534)',
              wordBreak: 'break-all',
              marginBottom: '1.5rem'
            }}>
              📧 {currentUser.email}
            </div>
          )}

          {/* Feedback Alert */}
          {feedbackMessage && (
            <div style={{
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              fontSize: '0.88rem',
              lineHeight: 1.5,
              textAlign: 'left',
              marginBottom: '1.5rem',
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

          {/* Instructions Box */}
          <div style={{
            textAlign: 'left',
            padding: '1rem',
            borderRadius: '10px',
            backgroundColor: 'var(--bg-elevated, #f8faf9)',
            border: '1px solid var(--border-color, #e5e7eb)',
            fontSize: '0.86rem',
            color: 'var(--text-main)',
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            <div style={{ fontWeight: '700', marginBottom: '0.35rem', color: 'var(--color-primary-700)' }}>
              কীভাবে ভেরিফিকেশন সম্পন্ন করবেন?
            </div>
            <ol style={{ paddingLeft: '1.25rem', margin: 0 }}>
              <li>আপনার ইমেইল ইনবক্স চেক করে ভেরিফিকেশন লিঙ্কটিতে ক্লিক করুন।</li>
              <li>ইনবক্সে না পেলে অনুগ্রহ করে <strong>স্প্যাম (Spam) বা জাঙ্ক (Junk)</strong> ফোল্ডার পরীক্ষা করুন।</li>
              <li>লিঙ্কে ক্লিক করার পর নিচের <strong>"ভেরিফিকেশন স্ট্যাটাস রিফ্রেশ করুন"</strong> বাটনে চাপ দিন।</li>
            </ol>
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
              {refreshing ? 'পরীক্ষা করা হচ্ছে...' : 'ভেরিফিকেশন স্ট্যাটাস রিফ্রেশ করুন'}
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
              <LogOut size={14} /> লগআউট
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
