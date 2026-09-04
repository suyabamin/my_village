import React, { useState } from 'react';
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
  LayoutDashboard
} from 'lucide-react';

import ProfileAvatar from '../profile/ProfileAvatar';

export const Header = ({ onOpenMobileNav }) => {
  const { currentUser, userProfile, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  const navItems = [
    { label: 'হোম', path: '/' },
    { label: 'মানচিত্র', path: '/map', icon: MapPin },
    { label: 'কৃষি', path: '/agriculture', icon: Sprout },
    { label: 'খেলাধুলা', path: '/sports', icon: Trophy },
    { label: 'শিক্ষা', path: '/education', icon: GraduationCap },
    { label: 'মসজিদ', path: '/mosques', icon: Building2 },
    { label: 'যুব সংঘ', path: '/organization', icon: Users },
    { label: 'জরুরি সভা', path: '/emergency', icon: ShieldAlert },
  ];

  return (
    <header className="header-glass">
      <div className="container header-container">
        
        {/* Brand Logo & Title */}
        <Link to="/" className="brand-logo-link">
          <div className="brand-icon-box">
            আ
          </div>
          <div className="brand-text-box">
            <div className="brand-title">
              আলমদীপাড়া
            </div>
            <div className="brand-subtitle">
              ডিজিটাল গ্রাম
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '0.35rem', alignItems: 'center' }} className="desktop-nav-links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--color-primary-600)' : 'var(--text-main)',
                  backgroundColor: isActive ? 'var(--color-primary-50)' : 'transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action controls (Theme Toggle, Auth / User Menu, Touch-friendly icons) */}
        <div className="header-actions">
          {/* Light/Dark Mode Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="action-btn theme-toggle-btn"
          >
            {theme === 'dark' ? <Sun className="action-icon" color="#f59e0b" /> : <Moon className="action-icon" color="#64748b" />}
          </button>

          {/* User Auth Section */}
          {currentUser ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="user-profile-btn"
                aria-label="User profile menu"
              >
                <ProfileAvatar 
                  user={userProfile || currentUser}
                  size={28}
                />
                <span className="user-name-text">
                  {userProfile?.displayName || 'অ্যাকাউন্ট'}
                </span>
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-menu">
                  <Link
                    to="/dashboard"
                    onClick={() => setUserDropdownOpen(false)}
                    className="dropdown-item"
                  >
                    <LayoutDashboard size={16} /> ড্যাশবোর্ড
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() => setUserDropdownOpen(false)}
                    className="dropdown-item"
                  >
                    <User size={16} /> প্রোফাইল
                  </Link>

                  {userProfile?.roles?.length > 0 && (
                    <Link
                      to="/admin"
                      onClick={() => setUserDropdownOpen(false)}
                      className="dropdown-item text-primary"
                    >
                      এডমিন প্যানেল
                    </Link>
                  )}

                  <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0.25rem 0' }} />

                  <button
                    onClick={handleLogout}
                    className="dropdown-item text-danger"
                  >
                    <LogOut size={16} /> লগআউট
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm login-header-btn">
              লগইন
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={onOpenMobileNav}
            aria-label="Toggle Mobile Menu"
            className="action-btn mobile-menu-btn"
          >
            <Menu className="menu-icon-svg" />
          </button>
        </div>
      </div>

      <style>{`
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .brand-logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .brand-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background-color: var(--color-primary-600);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
          box-shadow: 0 3px 8px rgba(22, 163, 74, 0.3);
          flex-shrink: 0;
        }

        .brand-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.2;
        }

        .brand-subtitle {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--color-primary-600);
          letter-spacing: 0.4px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .action-btn {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-icon {
          width: 18px;
          height: 18px;
        }

        .menu-icon-svg {
          width: 20px;
          height: 20px;
        }

        .user-profile-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          height: 36px;
          padding: 0 0.4rem;
          border-radius: 20px;
          cursor: pointer;
          color: var(--text-main);
          transition: all 0.2s ease;
        }

        .user-name-text {
          font-size: 0.82rem;
          font-weight: 600;
          max-width: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 4px;
        }

        .user-dropdown-menu {
          position: absolute;
          top: 120%;
          right: 0;
          width: 190px;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.4rem;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.7rem;
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-size: 0.88rem;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .dropdown-item.text-primary {
          color: var(--color-primary-600);
          font-weight: 600;
        }

        .dropdown-item.text-danger {
          color: var(--color-accent-red);
        }

        @media (max-width: 600px) {
          .user-name-text {
            display: none;
          }

          .user-profile-btn {
            padding: 0;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            justify-content: center;
            border: 1.5px solid var(--color-primary-600);
            background: transparent;
          }

          .brand-title {
            font-size: 0.95rem;
          }

          .brand-subtitle {
            font-size: 0.62rem;
          }

          .brand-icon-box {
            width: 32px;
            height: 32px;
            font-size: 1rem;
            border-radius: 8px;
          }

          .header-container {
            height: 56px;
          }

          .login-header-btn {
            padding: 0.35rem 0.7rem;
            font-size: 0.82rem;
          }
        }

        @media (min-width: 900px) {
          .desktop-nav-links { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .header-container { height: 68px; }
          .brand-icon-box { width: 40px; height: 40px; font-size: 1.2rem; }
          .action-btn { width: 40px; height: 40px; }
          .action-icon { width: 20px; height: 20px; }
          .user-profile-btn { height: 40px; padding: 0.3rem 0.65rem; border-radius: var(--radius-md); }
        }
      `}</style>
    </header>
  );
};
