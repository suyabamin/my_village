import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  MapPin,
  Leaf,
  Trophy,
  BookOpen,
  Building2,
  Users,
  Music,
  HeartHandshake,
  AlertCircle,
  Moon,
  LayoutDashboard,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const SidebarNav = () => {
  const location = useLocation();
  const { currentUser, userProfile } = useAuth();

  const navItems = [
    { label: 'হোম', path: '/', icon: Home },
    { label: 'ডিজিটাল ম্যাপ', path: '/map', icon: MapPin },
    { label: 'কৃষি ও আবহাওয়া', path: '/agriculture', icon: Leaf },
    { label: 'খেলাধুলা', path: '/sports', icon: Trophy },
    { label: 'শিক্ষা প্রতিষ্ঠান', path: '/education', icon: BookOpen },
    { label: 'মসজিদ', path: '/mosques', icon: Building2 },
    { label: 'যুব ইউনিয়ন সংঘ', path: '/organization', icon: Users },
    { label: 'সাংস্কৃতিক অনুষ্ঠান', path: '/culture', icon: Music },
    { label: 'সামাজিক অনুষ্ঠান', path: '/social', icon: HeartHandshake },
    { label: 'জরুরি মিটিং', path: '/emergency', icon: AlertCircle },
    { label: 'ধর্মীয় অনুষ্ঠান', path: '/religious-events', icon: Moon },
  ];

  const hasAdminRole = userProfile?.roles?.length > 0;

  return (
    <aside className="sidebar" aria-label="সাইডবার নেভিগেশন">
      <div className="sidebar-content">
        
        {/* Sidebar Logo Header */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-circle">
            <svg viewBox="0 0 40 40" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 26 L20 18 L28 26 Z" fill="#1b7a43" />
              <rect x="15" y="26" width="10" height="7" fill="#0f4d2b" />
              <rect x="18" y="28" width="4" height="5" fill="#ffffff" />
              <path d="M20 17 Q 16 11, 20 8 Q 24 11, 20 17 Z" fill="#22c55e" />
              <path d="M18 14 Q 13 12, 14 8 Q 18 10, 18 14 Z" fill="#4ade80" />
              <path d="M22 14 Q 27 12, 26 8 Q 22 10, 22 14 Z" fill="#4ade80" />
            </svg>
          </div>
          <div>
            <h1>আলমদীপাড়া ডিজিটাল গ্রাম</h1>
            <span>একাদারে তথ্য, উন্নয়ন, সমৃদ্ধি</span>
          </div>
        </div>

        {/* Sidebar Navigation Menu */}
        <ul className="sidebar-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={isActive ? 'active' : ''}
                  title={item.label}
                >
                  <Icon size={17} strokeWidth={2.2} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}

          {/* Authenticated Links */}
          {currentUser && (
            <li>
              <NavLink
                to="/dashboard"
                className={location.pathname === '/dashboard' ? 'active' : ''}
              >
                <LayoutDashboard size={17} strokeWidth={2.2} />
                <span>আমার ড্যাশবোর্ড</span>
              </NavLink>
            </li>
          )}

          {hasAdminRole && (
            <li>
              <NavLink
                to="/admin"
                className={location.pathname.startsWith('/admin') ? 'active' : ''}
              >
                <ShieldCheck size={17} strokeWidth={2.2} />
                <span>এডমিন প্যানেল</span>
              </NavLink>
            </li>
          )}
        </ul>

        {/* Sidebar Bottom Village Branding */}
        <div className="sidebar-bottom-text">
          সবুজে ঘেরা<br />
          <strong>আলমদীপাড়া</strong>
          স্মার্ট গ্রামের পথে
        </div>

      </div>
    </aside>
  );
};
