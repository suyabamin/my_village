import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNotification } from '../../context/NotificationContext';
import {
  Search,
  Bell,
  Moon,
  Sun,
  Globe,
  ChevronDown,
  User,
  LayoutDashboard,
  ShieldCheck,
  LogOut,
  Menu,
  ExternalLink,
  X,
  Check,
  AlertTriangle,
  Trophy,
  Sprout,
  Calendar
} from 'lucide-react';
import ProfileAvatar from '../profile/ProfileAvatar';
import { HeaderSearchModal } from './HeaderSearchModal';

/* ─────────────────────────────────────────────────────────────
   Notification type → icon + colour mapping
───────────────────────────────────────────────────────────── */
const NOTIF_ICON_MAP = {
  emergency: { Icon: AlertTriangle, color: '#ef4444' },
  tournament: { Icon: Trophy,       color: '#2563eb' },
  event:      { Icon: Calendar,     color: '#16a34a' },
  system:     { Icon: ShieldCheck,  color: '#7c3aed' },
  default:    { Icon: Bell,         color: '#64748b' },
};

function formatRelativeTime(ts) {
  if (!ts) return '';
  const date = ts?.toDate ? ts.toDate() : new Date(ts);
  if (isNaN(date)) return '';
  const diffMs  = Date.now() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1)  return 'এইমাত্র';
  if (diffMin < 60) return `${diffMin} মিনিট আগে`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr  < 24) return `${diffHr} ঘণ্টা আগে`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay} দিন আগে`;
}

/* ─────────────────────────────────────────────────────────────
   Main Header Component
───────────────────────────────────────────────────────────── */
export const Header = ({ onOpenMobileNav }) => {
  const { currentUser, userProfile, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { notifications, unreadCount, markRead, markAllRead, setNotificationUser } = useNotification();
  const location  = useLocation();
  const navigate  = useNavigate();

  const [searchOpen,       setSearchOpen]       = useState(false);
  const [notifOpen,        setNotifOpen]        = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const notifRef = useRef(null);
  const userRef  = useRef(null);

  // Wire up Firestore notification listener when user changes
  useEffect(() => {
    if (currentUser?.uid) {
      setNotificationUser(currentUser.uid);
    }
  }, [currentUser?.uid, setNotificationUser]);

  // Close all dropdowns on outside click / touch
  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target))
        setNotifOpen(false);
      if (userRef.current && !userRef.current.contains(e.target))
        setUserDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  // Ctrl+K / Cmd+K → global search modal
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setNotifOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  const handleNotifClick = (notif) => {
    markRead(notif.id);
    setNotifOpen(false);
  };

  const userName = userProfile?.displayName
    || currentUser?.displayName
    || (currentUser?.email ? currentUser.email.split('@')[0] : null)
    || 'মেহমান';

  const userRoleLabel = (() => {
    const roles = userProfile?.roles || [];
    if (roles.includes('super_admin'))       return 'সুপার এডমিন';
    if (roles.some(r => r.endsWith('_admin'))) return 'প্রশাসক';
    if (roles.includes('user'))              return 'গ্রামের নাগরিক';
    return 'গ্রামের মেহমান';
  })();

  const hasAdminRole = (userProfile?.roles || []).some(r => r.endsWith('_admin'));

  const topNotifs = notifications.slice(0, 5);

  return (
    <>
      {/* ── Top Header Bar ───────────────────────────────────── */}
      <header className="header">

        {/* Mobile Hamburger */}
        <button
          className="header-mobile-toggle"
          onClick={onOpenMobileNav}
          aria-label="মোবাইল মেনু খুলুন"
        >
          <Menu size={22} />
        </button>

        {/* Central Search Bar */}
        <div
          className="search-bar"
          onClick={() => setSearchOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setSearchOpen(true)}
          aria-label="সার্চ খুলুন"
        >
          <Search size={15} className="search-icon" />
          <input
            type="text"
            placeholder="গ্রাম, স্থান, সেবা বা কিছু খুঁজুন..."
            readOnly
            style={{ cursor: 'pointer' }}
          />
          <kbd className="header-search-badge">Ctrl+K</kbd>
        </div>

        {/* ── Right Actions ──────────────────────────────────── */}
        <div className="header-actions">

          {/* ── Notification Bell ─────────────────────────── */}
          <div className="header-notif-container" ref={notifRef} style={{ position: 'relative' }}>
            <button
              className="icon-btn"
              onClick={() => {
                setNotifOpen(v => !v);
                setUserDropdownOpen(false);
              }}
              aria-label={`বিজ্ঞপ্তি — ${unreadCount} টি অপঠিত`}
              aria-expanded={notifOpen}
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="badge">{unreadCount > 9 ? '9+' : unreadCount}</span>
              )}
            </button>

            {/* Notification Dropdown Popover */}
            {notifOpen && (
              <div className="notif-popover" role="dialog" aria-label="বিজ্ঞপ্তি সমূহ">
                {/* Header row */}
                <div className="notif-popover-header">
                  <span className="notif-title">বিজ্ঞপ্তি ও আপডেট</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {unreadCount > 0 && (
                      <span className="notif-badge-pill">{unreadCount} নতুন</span>
                    )}
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllRead}
                        title="সব পড়া হয়েছে"
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--primary-green)',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '2px',
                          borderRadius: '4px',
                        }}
                        aria-label="সব বিজ্ঞপ্তি পড়া হিসেবে চিহ্নিত করুন"
                      >
                        <Check size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Notification list */}
                <div className="notif-popover-list">
                  {topNotifs.length === 0 ? (
                    <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-gray)', fontSize: '13px' }}>
                      কোনো নতুন বিজ্ঞপ্তি নেই
                    </div>
                  ) : topNotifs.map((notif) => {
                    const { Icon, color } = NOTIF_ICON_MAP[notif.type] || NOTIF_ICON_MAP.default;
                    return (
                      <button
                        key={notif.id}
                        className="notif-popover-item"
                        onClick={() => handleNotifClick(notif)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          border: 'none',
                          background: notif.read ? 'transparent' : 'rgba(27,122,67,0.04)',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          className="notif-popover-icon"
                          style={{ backgroundColor: `${color}18`, color }}
                        >
                          <Icon size={14} />
                        </div>
                        <div className="notif-popover-text" style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="notif-item-title"
                            style={{ fontWeight: notif.read ? '500' : '700' }}
                          >
                            {notif.title}
                          </div>
                          {notif.message && (
                            <div className="notif-item-time" style={{ marginTop: '1px' }}>
                              {notif.message}
                            </div>
                          )}
                          <div className="notif-item-time" style={{ marginTop: '2px', color: '#94a3b8' }}>
                            {formatRelativeTime(notif.createdAt)}
                          </div>
                        </div>
                        {!notif.read && (
                          <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#16a34a',
                            flexShrink: 0,
                            alignSelf: 'center',
                          }} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Footer link */}
                <Link
                  to="/emergency"
                  className="notif-popover-footer"
                  onClick={() => setNotifOpen(false)}
                >
                  সকল নোটিশ দেখুন <ExternalLink size={12} />
                </Link>
              </div>
            )}
          </div>

          {/* ── Theme Toggle ───────────────────────────────── */}
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'লাইট মোড' : 'ডার্ক মোড'}
            title={theme === 'dark' ? 'লাইট মোডে যান' : 'ডার্ক মোডে যান'}
          >
            {theme === 'dark'
              ? <Sun  size={18} color="#f59e0b" />
              : <Moon size={18} />
            }
          </button>

          {/* ── Language Indicator ─────────────────────────── */}
          <div className="lang-toggle" title="ভাষা নির্বাচন: বাংলা">
            <Globe size={15} /> বাংলা <ChevronDown size={11} />
          </div>

          {/* ── User Profile Pill ──────────────────────────── */}
          <div className="user-profile-container" ref={userRef}>
            <div
              className="user-profile"
              onClick={() => {
                setUserDropdownOpen(v => !v);
                setNotifOpen(false);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setUserDropdownOpen(v => !v)}
              aria-haspopup="true"
              aria-expanded={userDropdownOpen}
            >
              {/* Avatar */}
              {currentUser ? (
                <ProfileAvatar
                  user={userProfile || currentUser}
                  size={34}
                />
              ) : (
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <User size={18} color="#fff" />
                </div>
              )}

              {/* Name + role label (hidden on small screens via CSS) */}
              <div className="user-info">
                {userName}
                <span>{userRoleLabel}</span>
              </div>

              <ChevronDown size={12} style={{ opacity: 0.75 }} />
            </div>

            {/* ── Dropdown Menu ──────────────────────────── */}
            {userDropdownOpen && (
              <div className="user-dropdown-popover">
                {currentUser ? (
                  <>
                    {/* User header */}
                    <div className="dropdown-user-header">
                      <strong style={{ fontSize: '14px' }}>{userName}</strong>
                      <span className="dropdown-email">{currentUser.email}</span>
                    </div>
                    <hr className="dropdown-divider" />

                    <Link
                      to="/dashboard"
                      className="dropdown-link"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <LayoutDashboard size={15} /> আমার ড্যাশবোর্ড
                    </Link>
                    <Link
                      to="/profile"
                      className="dropdown-link"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <User size={15} /> প্রোফাইল সেটিংস
                    </Link>

                    {hasAdminRole && (
                      <Link
                        to="/admin"
                        className="dropdown-link admin-link"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        <ShieldCheck size={15} /> এডমিন প্যানেল
                      </Link>
                    )}

                    <hr className="dropdown-divider" />
                    <button
                      onClick={handleLogout}
                      className="dropdown-link logout-link"
                    >
                      <LogOut size={15} /> লগআউট
                    </button>
                  </>
                ) : (
                  <>
                    {/* Guest options */}
                    <div style={{ padding: '6px 8px 4px', fontSize: '12px', color: 'var(--text-gray)' }}>
                      লগইন করুন বা অ্যাকাউন্ট তৈরি করুন
                    </div>
                    <hr className="dropdown-divider" />
                    <Link
                      to="/login"
                      className="dropdown-link"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <LogOut size={15} /> লগইন করুন
                    </Link>
                    <Link
                      to="/register"
                      className="dropdown-link"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <User size={15} /> নতুন অ্যাকাউন্ট তৈরি
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

        </div>
        {/* end .header-actions */}
      </header>

      {/* Global Fast Search Modal */}
      <HeaderSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
};
