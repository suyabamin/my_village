import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import { Loader2 } from 'lucide-react';

export const GoogleSignInButton = ({ onSuccess, text = "গুগল দিয়ে এগিয়ে যান" }) => {
  const { signInWithGoogle } = useAuth();
  const { addToast } = useNotification();
  const [loading, setLoading] = useState(false);

  const getGoogleErrorMessage = (err) => {
    const code = err?.code || '';
    if (code === 'auth/popup-closed-by-user') {
      return 'গুগল সাইন-ইন উইন্ডো বন্ধ করা হয়েছে। পুনরায় চেষ্টা করুন।';
    }
    if (code === 'auth/cancelled-popup-request') {
      return 'সাইন-ইন অনুরোধ বাতিল করা হয়েছে।';
    }
    if (code === 'auth/popup-blocked') {
      return 'ব্রাউজারে পপ-আপ ব্লক করা রয়েছে। অনুগ্রহ করে পপ-আপ অনুমোদন করুন।';
    }
    if (code === 'auth/account-exists-with-different-credential') {
      return 'এই ইমেইল দিয়ে ইতিমধ্যে সাধারণ পাসওয়ার্ড অ্যাকাউন্ট তৈরি আছে। অনুগ্রহ করে পাসওয়ার্ড দিয়ে লগইন করুন।';
    }
    if (code === 'auth/network-request-failed') {
      return 'নেটওয়ার্ক সংযোগ বিচ্ছিন্ন। অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।';
    }
    return err.message || 'গুগল সাইন-ইন সম্পন্ন করা সম্ভব হয়নি। পুনরায় চেষ্টা করুন।';
  };

  const handleGoogleClick = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const user = await signInWithGoogle();
      if (user) {
        addToast('গুগল দিয়ে সফলভাবে লগইন হয়েছে!', 'success');
        onSuccess?.(user);
      }
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        console.error("Google sign in failure:", err);
      }
      const msg = getGoogleErrorMessage(err);
      addToast(msg, err.code === 'auth/popup-closed-by-user' ? 'info' : 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      disabled={loading}
      className="btn"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#374151',
        border: '1.5px solid #d1d5db',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.65rem',
        padding: '0.65rem 1rem',
        borderRadius: 'var(--radius-md, 8px)',
        fontWeight: '600',
        fontSize: '0.95rem',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'all 0.15s ease'
      }}
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" color="#16a34a" />
          <span>সংযোগ হচ্ছে...</span>
        </>
      ) : (
        <>
          {/* Official Google G Logo */}
          <svg width="19" height="19" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

export default GoogleSignInButton;
