import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
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
  ShieldAlert,
  Sprout,
  Trophy
} from 'lucide-react';
import ProfileAvatar from '../profile/ProfileAvatar';
import { HeaderSearchModal } from './HeaderSearchModal';

export const Header = ({ onOpenMobileNav }) => {
  const { currentUser, userProfile, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const notifRef = useRef(null);
  const userRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  // Keyboard shortcut Ctrl + K or Cmd + K to open search modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  const hasAdminRole = userProfile?.roles?.length > 0;

  // Recent notifications matching the imported HTML design
  const headerNotifications = [
    {
      id: 'n-1',
      title: 'মাদকবিরোধী সচেতনতা সভা অনুষ্ঠিত হবে',
      time: 'আজ, ০৯:০০ AM',
      path: '/emergency',
      icon: ShieldAlert,
      color: '#ef4444'
    },
    {
      id: 'n-2',
      title: 'বিদ্যালয় বার্ষিক ক্রীড়া প্রতিযোগিতা',
      time: '২৮ এপ্রিল ২০২৫',
      path: '/education',
      icon: Trophy,
      color: '#2563eb'
    },
    {
      id: 'n-3',
      title: 'গ্রামে বৃক্ষরোপণ কর্মসূচি',
      time: '২৭ এপ্রিল ২০২৫',
      path: '/social',
      icon: Sprout,
      color: '#16a34a'
    }
  ];

  const userName = userProfile?.displayName || (currentUser ? 'মাহফুজ ইসলাম' : 'মাহফুজ ইসলাম');
  const userRole = userProfile?.roles?.[0] ? 'গ্রাম অ্যাডমিন' : 'সাধারণ ব্যবহারকারী';

  return (
    <>
      <header className="header">
        
        {/* Mobile Hamburger Drawer Button */}
        <button 
          onClick={onOpenMobileNav}
          className="header-mobile-toggle"
          aria-label="মোবাইল মেনু খুলুন"
        >
          <Menu size={22} />
        </button>

        {/* Central Search Bar */}
        <div className="search-bar" onClick={() => setSearchOpen(true)}>
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="গ্রাম, স্থান, সেবা বা কিছু খুঁজুন..." 
            readOnly
          />
          <kbd className="header-search-badge">Ctrl+K</kbd>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          
          {/* Notification Button */}
          <div className="header-notif-container" ref={notifRef}>
            <button 
              className="icon-btn" 
              onClick={() => setNotifOpen(!notifOpen)}
              aria-label="নোটিফিকেশন দেখুন"
              aria-expanded={notifOpen}
            >
              <Bell size={18} />
              <span className="badge">3</span>
            </button>

            {/* Notification Dropdown Popover */}
            {notifOpen && (
              <div className="notif-popover">
                <div className="notif-popover-header">
                  <span className="notif-title">জরুরি বিজ্ঞপ্তি ও আপডেট</span>
                  <span className="notif-badge-pill">৩টি নতুন</span>
                </div>
                <div className="notif-popover-list">
                  {headerNotifications.map((notif) => {
                    const Icon = notif.icon;
                    return (
                      <Link
                        key={notif.id}
                        to={notif.path}
                        className="notif-popover-item"
                        onClick={() => setNotifOpen(false)}
                      >
                        <div className="notif-popover-icon" style={{ backgroundColor: `${notif.color}15`, color: notif.color }}>
                          <Icon size={15} />
                        </div>
                        <div className="notif-popover-text">
                          <div className="notif-item-title">{notif.title}</div>
                          <div className="notif-item-time">{notif.time}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
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

          {/* Theme Toggle (Moon / Sun) */}
          <button 
            className="icon-btn" 
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'লাইট মোডে যান' : 'ডার্ক মোডে যান'}
            title={theme === 'dark' ? 'লাইট মোড' : 'ডার্ক মোড'}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} />}
          </button>

          {/* Language Toggle */}
          <div className="lang-toggle" title="ভাষা নির্বাচন: বাংলা">
            <Globe size={16} /> বাংলা <ChevronDown size={12} />
          </div>

          {/* User Profile Pill */}
          <div className="user-profile-container" ref={userRef}>
            <div 
              className="user-profile" 
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              role="button"
              tabIndex={0}
            >
              {currentUser ? (
                <ProfileAvatar user={userProfile || currentUser} size={35} />
              ) : (
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                  alt="ব্যবহারকারী" 
                />
              )}
              <div className="user-info">
                {userName}
                <span>{userRole}</span>
              </div>
              <ChevronDown size={12} style={{ opacity: 0.7 }} />
            </div>

            {/* Profile Dropdown Menu */}
            {userDropdownOpen && (
              <div className="user-dropdown-popover">
                {currentUser ? (
                  <>
                    <div className="dropdown-user-header">
                      <strong>{userName}</strong>
                      <span className="dropdown-email">{currentUser.email}</span>
                    </div>
                    <hr className="dropdown-divider" />
                    <Link to="/dashboard" className="dropdown-link" onClick={() => setUserDropdownOpen(false)}>
                      <LayoutDashboard size={15} /> আমার ড্যাশবোর্ড
                    </Link>
                    <Link to="/profile" className="dropdown-link" onClick={() => setUserDropdownOpen(false)}>
                      <User size={15} /> প্রোফাইল সেটিংস
                    </Link>
                    {hasAdminRole && (
                      <Link to="/admin" className="dropdown-link admin-link" onClick={() => setUserDropdownOpen(false)}>
                        <ShieldCheck size={15} /> এডমিন প্যানেল
                      </Link>
                    )}
                    <hr className="dropdown-divider" />
                    <button onClick={handleLogout} className="dropdown-link logout-link">
                      <LogOut size={15} /> লগআউট
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="dropdown-link" onClick={() => setUserDropdownOpen(false)}>
                      লগইন করুন
                    </Link>
                    <Link to="/register" className="dropdown-link" onClick={() => setUserDropdownOpen(false)}>
                      নতুন অ্যাকাউন্ট তৈরি
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

        </div>
      </header>

      {/* Global Fast Search Modal */}
      <HeaderSearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </>
  );
};
