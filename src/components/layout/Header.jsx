import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  User,
  LogOut,
  MapPin,
  Sprout,
  Trophy,
  GraduationCap,
  Building2,
  ShieldAlert,
  Users,
  LayoutDashboard,
  CloudSun
} from 'lucide-react';
import ProfileAvatar from '../profile/ProfileAvatar';

export const Header = ({ onOpenMobileNav }) => {
  const { currentUser, userProfile, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };
    if (userDropdownOpen) {
      document.addEventListener('mousedown', handler);
      document.addEventListener('touchstart', handler);
    }
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [userDropdownOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'হোম', path: '/' },
    { label: 'মানচিত্র', path: '/map', icon: MapPin },
    { label: 'কৃষি', path: '/agriculture', icon: Sprout },
    { label: 'আবহাওয়া', path: '/weather', icon: CloudSun },
    { label: 'খেলাধুলা', path: '/sports', icon: Trophy },
    { label: 'শিক্ষা', path: '/education', icon: GraduationCap },
    { label: 'মসজিদ', path: '/mosques', icon: Building2 },
    { label: 'যুব সংঘ', path: '/organization', icon: Users },
    { label: 'জরুরি সভা', path: '/emergency', icon: ShieldAlert },
  ];

  return (
    <header className="header-glass">
      <div className="container header-inner">

        {/* Brand Logo & Title */}
        <Link to="/" className="brand-link" aria-label="আলমদীপাড়া ডিজিটাল গ্রাম হোম">
          <div className="brand-icon" aria-hidden="true">আ</div>
          <div className="brand-text">
            <div className="brand-name">আলমদীপাড়া</div>
            <div className="brand-sub">ডিজিটাল গ্রাম</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="প্রধান নেভিগেশন">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link${isActive ? ' nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'লাইট মোডে যান' : 'ডার্ক মোডে যান'}
            className="action-btn"
          >
            {theme === 'dark'
              ? <Sun size={18} color="#f59e0b" aria-hidden="true" />
              : <Moon size={18} color="#64748b" aria-hidden="true" />}
          </button>

          {/* User Auth Section */}
          {currentUser ? (
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="user-btn"
                aria-label="ব্যবহারকারী মেনু"
                aria-expanded={userDropdownOpen}
                aria-haspopup="true"
              >
                <ProfileAvatar user={userProfile || currentUser} size={28} />
                <span className="user-btn-name">
                  {userProfile?.displayName || 'অ্যাকাউন্ট'}
                </span>
              </button>

              {userDropdownOpen && (
                <div className="dropdown-menu" role="menu">
                  <Link
                    to="/dashboard"
                    onClick={() => setUserDropdownOpen(false)}
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <LayoutDashboard size={16} aria-hidden="true" /> ড্যাশবোর্ড
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() => setUserDropdownOpen(false)}
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <User size={16} aria-hidden="true" /> প্রোফাইল
                  </Link>

                  {userProfile?.roles?.length > 0 && (
                    <Link
                      to="/admin"
                      onClick={() => setUserDropdownOpen(false)}
                      className="dropdown-item dropdown-item-primary"
                      role="menuitem"
                    >
                      এডমিন প্যানেল
                    </Link>
                  )}

                  <hr className="dropdown-divider" aria-hidden="true" />

                  <button
                    onClick={handleLogout}
                    className="dropdown-item dropdown-item-danger"
                    role="menuitem"
                  >
                    <LogOut size={16} aria-hidden="true" /> লগআউট
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm login-btn">
              লগইন
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={onOpenMobileNav}
            aria-label="মোবাইল মেনু খুলুন"
            className="action-btn mobile-menu-btn"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <style>{`
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
          gap: 0.5rem;
        }

        /* Brand */
        .brand-link {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          text-decoration: none;
          flex-shrink: 0;
          min-width: 0;
        }

        .brand-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: var(--color-primary-600);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          box-shadow: 0 2px 6px rgba(22, 163, 74, 0.3);
          flex-shrink: 0;
        }

        .brand-text {
          min-width: 0;
        }

        .brand-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.2;
          white-space: nowrap;
        }

        .brand-sub {
          font-size: 0.62rem;
          font-weight: 600;
          color: var(--color-primary-600);
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        /* Desktop nav — hidden on mobile */
        .desktop-nav {
          display: none;
          gap: 0.25rem;
          align-items: center;
          flex: 1;
          justify-content: center;
          flex-wrap: nowrap;
          overflow: hidden;
        }

        .nav-link {
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-main);
          white-space: nowrap;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--color-primary-600);
          background-color: var(--color-primary-50);
        }

        .nav-link-active {
          font-weight: 700;
          color: var(--color-primary-600);
          background-color: var(--color-primary-50);
        }

        [data-theme="dark"] .nav-link:hover,
        [data-theme="dark"] .nav-link-active {
          background-color: rgba(34, 197, 94, 0.1);
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-shrink: 0;
        }

        .action-btn {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .action-btn:hover {
          border-color: var(--color-primary-400);
          background-color: var(--color-primary-50);
        }

        /* User button */
        .user-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-elevated);
          border: 1.5px solid var(--color-primary-600);
          height: 38px;
          padding: 0 0.45rem;
          border-radius: 20px;
          cursor: pointer;
          color: var(--text-main);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .user-btn:hover {
          background-color: var(--color-primary-50);
        }

        .user-btn-name {
          font-size: 0.82rem;
          font-weight: 600;
          max-width: 72px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 3px;
        }

        /* Dropdown */
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 185px;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.35rem;
          z-index: 200;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.75rem;
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-size: 0.88rem;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background-color 0.15s ease;
          min-height: var(--min-touch-target);
        }

        .dropdown-item:hover {
          background-color: var(--bg-elevated);
        }

        .dropdown-item-primary {
          color: var(--color-primary-600);
          font-weight: 600;
        }

        .dropdown-item-danger {
          color: var(--color-accent-red);
        }

        .dropdown-divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 0.2rem 0;
        }

        /* Login button */
        .login-btn {
          font-size: 0.85rem;
          padding: 0.35rem 0.85rem;
          min-height: 36px;
        }

        /* Mobile menu button — always visible on small screens */
        .mobile-menu-btn {
          display: flex;
        }

        /* =========== 360px+ (Compact Android) =========== */
        @media (min-width: 360px) {
          .brand-name { font-size: 1rem; }
          .brand-icon { width: 34px; height: 34px; }
        }

        /* =========== 768px+ (Tablet / Wider) =========== */
        @media (min-width: 768px) {
          .header-inner { height: 60px; }
          .user-btn-name { max-width: 100px; }
        }

        /* =========== 900px+ (Desktop) =========== */
        @media (min-width: 900px) {
          .header-inner { height: 68px; }
          .desktop-nav { display: flex; }
          .mobile-menu-btn { display: none; }
          .brand-icon { width: 40px; height: 40px; font-size: 1.15rem; border-radius: 10px; }
          .brand-name { font-size: 1.05rem; }
          .brand-sub { font-size: 0.65rem; }
          .action-btn { width: 40px; height: 40px; }
          .user-btn { height: 40px; }
          .login-btn { min-height: 40px; padding: 0.45rem 1rem; }
          .nav-link { font-size: 0.9rem; padding: 0.45rem 0.7rem; }
        }

        /* =========== On very small screens (< 360px) =========== */
        @media (max-width: 359px) {
          .brand-sub { display: none; }
          .login-btn { padding: 0.3rem 0.6rem; font-size: 0.78rem; }
          .header-actions { gap: 0.2rem; }
          .action-btn { width: 34px; height: 34px; }
          .user-btn { height: 34px; padding: 0 0.3rem; }
        }
      `}</style>
    </header>
  );
};
