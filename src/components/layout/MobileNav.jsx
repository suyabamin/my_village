import React from 'react';
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
  CloudSun
} from 'lucide-react';

export const MobileNav = ({ isOpen, onClose }) => {
  const { currentUser, userProfile, logout } = useAuth();
  const location = useLocation();

  if (!isOpen) return null;

  const navItems = [
    { label: 'হোম', path: '/', icon: Home },
    { label: 'ডিজিটাল মানচিত্র', path: '/map', icon: MapPin },
    { label: 'কৃষি সেবা ও মাঠ', path: '/agriculture', icon: Sprout },
    { label: 'আবহাওয়া পূর্বাভাস', path: '/weather', icon: CloudSun },
    { label: 'খেলাধুলা ও টুর্নামেন্ট', path: '/sports', icon: Trophy },
    { label: 'শিক্ষা প্রতিষ্ঠান', path: '/education', icon: GraduationCap },
    { label: 'বায়তুল নূর ও বায়তুল মামুর মসজিদ', path: '/mosques', icon: Building2 },
    { label: 'আলমদীপাড়া যুব উন্নয়ন সংঘ', path: '/organization', icon: Users },
    { label: 'জরুরি সভা ও ঘোষণা', path: '/emergency', icon: ShieldAlert },
    { label: 'সাংস্কৃতিক অনুষ্ঠান', path: '/culture', icon: Sparkles },
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex'
    }}>
      {/* Overlay Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)'
        }}
      />

      {/* Drawer Content */}
      <div style={{
        position: 'relative',
        width: '300px',
        maxWidth: '85vw',
        height: '100%',
        backgroundColor: 'var(--bg-card)',
        borderRight: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1001,
        padding: '1.5rem 1rem',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'var(--color-primary-600)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              আ
            </div>
            <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>আলমদীপাড়া</span>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* User Card */}
        {currentUser ? (
          <div style={{
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-primary-50)',
            marginBottom: '1.5rem'
          }}>
            <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-primary-800)' }}>
              {userProfile?.displayName || 'গ্রামবাসী'}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {userProfile?.email}
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: '1.5rem' }}>
            <Link 
              to="/login" 
              onClick={onClose}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              লগইন করুন
            </Link>
          </div>
        )}

        {/* Navigation list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? 'var(--color-primary-600)' : 'var(--text-main)',
                  backgroundColor: isActive ? 'var(--color-primary-50)' : 'transparent',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '0.95rem'
                }}
              >
                <Icon size={20} color={isActive ? 'var(--color-primary-600)' : 'var(--text-muted)'} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {currentUser && (
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1rem' }}>
            <Link
              to="/dashboard"
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 1rem',
                color: 'var(--text-main)',
                fontSize: '0.95rem'
              }}
            >
              <LayoutDashboard size={18} /> ড্যাশবোর্ড
            </Link>
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 1rem',
                color: 'var(--color-accent-red)',
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              <LogOut size={18} /> লগআউট
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
