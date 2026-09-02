import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
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

export const Header = ({ onOpenMobileNav }) => {
  const { currentUser, userProfile, logout, isSuperAdmin } = useAuth();
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
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Brand Logo & Title */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: 'var(--color-primary-600)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            boxShadow: '0 4px 10px rgba(22, 163, 74, 0.3)'
          }}>
            আ
          </div>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: '1.2' }}>
              আলমদীপাড়া
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-primary-600)', letterSpacing: '0.5px' }}>
              ডিজিটাল গ্রাম
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }} className="desktop-nav-links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  padding: '0.5rem 0.85rem',
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

        {/* Action controls (Theme Toggle, Auth / User Menu) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Light/Dark Mode Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={19} color="#f59e0b" /> : <Moon size={19} color="#64748b" />}
          </button>

          {/* User Auth Section */}
          {currentUser ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-color)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  color: 'var(--text-main)'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-600)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>
                  {(userProfile?.displayName || 'ইউ').charAt(0)}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {userProfile?.displayName || 'আমার অ্যাকাউন্ট'}
                </span>
              </button>

              {userDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '200px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '0.5rem',
                  zIndex: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}>
                  <Link
                    to="/dashboard"
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem'
                    }}
                  >
                    <LayoutDashboard size={16} /> ড্যাশবোর্ড
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem'
                    }}
                  >
                    <User size={16} /> প্রোফাইল
                  </Link>

                  {userProfile?.roles?.length > 0 && (
                    <Link
                      to="/admin"
                      onClick={() => setUserDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--color-primary-600)',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                      }}
                    >
                      এডমিন প্যানেল
                    </Link>
                  )}

                  <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0.25rem 0' }} />

                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-accent-red)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      textAlign: 'left'
                    }}
                  >
                    <LogOut size={16} /> লগআউট
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              লগইন
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={onOpenMobileNav}
            aria-label="Toggle Mobile Menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
            className="mobile-menu-btn"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-links { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
