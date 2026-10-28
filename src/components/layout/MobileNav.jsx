import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  X,
  Home,
  MapPin,
  Sprout,
  Trophy,
  GraduationCap,
  Building2,
  ShieldAlert,
  Users,
  User,
  LayoutDashboard,
  LogOut,
  Sparkles,
  CloudSun,
  HeartHandshake,
  Moon
} from 'lucide-react';

export const MobileNav = ({ isOpen, onClose }) => {
  const { currentUser, userProfile, logout } = useAuth();
  const location = useLocation();
  const drawerRef = useRef(null);
  const hasAdminRole = userProfile?.roles?.some(r => r.endsWith('_admin') || r === 'super_admin');

  // Close on route change
  useEffect(() => {
    if (isOpen) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Trap scroll behind overlay
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus drawer on open (keyboard accessibility)
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = [
    { label: 'হোম', path: '/', icon: Home },
    { label: 'ডিজিটাল মানচিত্র', path: '/map', icon: MapPin },
    { label: 'কৃষি সেবা ও মাঠ', path: '/agriculture', icon: Sprout },
    { label: 'আবহাওয়া পূর্বাভাস', path: '/weather', icon: CloudSun },
    { label: 'খেলাধুলা ও টুর্নামেন্ট', path: '/sports', icon: Trophy },
    { label: 'শিক্ষা প্রতিষ্ঠান', path: '/education', icon: GraduationCap },
    { label: 'মসজিদ', path: '/mosques', icon: Building2 },
    { label: 'যুব উন্নয়ন সংঘ', path: '/organization', icon: Users },
    { label: 'জরুরি সভা', path: '/emergency', icon: ShieldAlert },
    { label: 'সাংস্কৃতিক অনুষ্ঠান', path: '/culture', icon: Sparkles },
    { label: 'সামাজিক কর্মকাণ্ড', path: '/social', icon: HeartHandshake },
    { label: 'ধর্মীয় অনুষ্ঠান', path: '/religious-events', icon: Moon },
  ];

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex' }}
      role="dialog"
      aria-modal="true"
      aria-label="মোবাইল নেভিগেশন"
    >
      {/* Overlay Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
        }}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div
        ref={drawerRef}
        tabIndex={-1}
        style={{
          position: 'relative',
          width: 'min(300px, 88vw)',
          height: '100%',
          backgroundColor: 'var(--bg-card)',
          borderRight: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1001,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          outline: 'none',
          /* Safe area padding at bottom */
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1rem 0.75rem',
          borderBottom: '1px solid var(--border-color)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              backgroundColor: 'var(--color-primary-600)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1rem',
              flexShrink: 0,
            }}>
              আ
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', lineHeight: 1.2 }}>আলমদীপাড়া</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-primary-600)', fontWeight: 600 }}>ডিজিটাল গ্রাম</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            aria-label="মেনু বন্ধ করুন"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* User Card or Login Button */}
        <div style={{ padding: '0.85rem 1rem 0.5rem', flexShrink: 0 }}>
          {currentUser ? (
            <div style={{
              padding: '0.85rem 1rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-primary-50)',
              border: '1px solid var(--color-primary-100)',
            }}>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--color-primary-800)', marginBottom: '0.15rem', wordBreak: 'break-word' }}>
                {userProfile?.displayName || 'গ্রামবাসী'}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                {userProfile?.email}
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              লগইন করুন
            </Link>
          )}
        </div>

        {/* Navigation Links */}
        <nav
          style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1, padding: '0 0.75rem' }}
          aria-label="মোবাইল নেভিগেশন লিস্ট"
        >
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.7rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? 'var(--color-primary-700)' : 'var(--text-main)',
                  backgroundColor: isActive ? 'var(--color-primary-50)' : 'transparent',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '0.93rem',
                  minHeight: 'var(--min-touch-target)',
                  textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  wordBreak: 'break-word',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon
                  size={19}
                  color={isActive ? 'var(--color-primary-600)' : 'var(--text-muted)'}
                  style={{ flexShrink: 0 }}
                  aria-hidden="true"
                />
                <span style={{ minWidth: 0 }}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Authenticated User Bottom Actions */}
        {currentUser && (
          <div style={{
            borderTop: '1px solid var(--border-color)',
            padding: '0.75rem',
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
            flexShrink: 0,
          }}>
            <Link
              to="/dashboard"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.7rem 0.85rem',
                color: 'var(--text-main)',
                fontSize: '0.93rem',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                minHeight: 'var(--min-touch-target)',
                transition: 'background-color 0.15s ease',
              }}
            >
              <LayoutDashboard size={19} aria-hidden="true" color="var(--text-muted)" />
              ড্যাশবোর্ড
            </Link>
            <Link
              to="/profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.7rem 0.85rem',
                color: 'var(--text-main)',
                fontSize: '0.93rem',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                minHeight: 'var(--min-touch-target)',
                transition: 'background-color 0.15s ease',
              }}
            >
              <User size={19} aria-hidden="true" color="var(--text-muted)" />
              প্রোফাইল
            </Link>
            {hasAdminRole && (
              <Link
                to="/admin"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.7rem 0.85rem',
                  color: 'var(--color-primary-600)',
                  fontSize: '0.93rem',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  minHeight: 'var(--min-touch-target)',
                }}
              >
                <LayoutDashboard size={19} aria-hidden="true" color="var(--color-primary-600)" />
                এডমিন প্যানেল
              </Link>
            )}
            <button
              onClick={() => { logout(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.7rem 0.85rem',
                color: 'var(--color-accent-red)',
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '0.93rem',
                borderRadius: 'var(--radius-md)',
                minHeight: 'var(--min-touch-target)',
              }}
            >
              <LogOut size={19} aria-hidden="true" /> লগআউট
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
