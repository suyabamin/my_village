import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Header } from '../components/layout/Header';
import { SidebarNav } from '../components/layout/SidebarNav';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { MobileBottomBar } from '../components/layout/MobileBottomBar';
import { EditModeBar } from '../components/common/EditModeBar';

export const MainLayout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { currentUser, isEmailVerified } = useAuth();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const showVerificationAlert = currentUser && !isEmailVerified && location.pathname !== '/verify-email';

  return (
    <div className="app-root-layout">
      {/* 1. Desktop Left Sidebar */}
      <SidebarNav />

      {/* 2. Right Main Wrapper with Header, Main Scrollable Content & Footer */}
      <div className={`main-wrapper ${isHomePage ? 'on-home-page' : ''}`}>
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />

        {showVerificationAlert && (
          <div style={{
            backgroundColor: '#fef3c7',
            borderBottom: '1px solid #fde68a',
            color: '#92400e',
            padding: '0.65rem 1.25rem',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            zIndex: 90
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>⚠️</span>
              <span>
                <strong>ইমেইল যাচাই প্রয়োজন:</strong> অ্যাকাউন্ট সুরক্ষিত ও সক্রিয় করতে ইমেইল ভেরিফাই করুন। (মেইলটি জিমেইলের <strong>Spam</strong> ফোল্ডারে থাকতে পারে)
              </span>
            </div>
            <Link 
              to="/verify-email" 
              className="btn btn-sm btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem', textDecoration: 'none' }}
            >
              এখনই যাচাই করুন
            </Link>
          </div>
        )}

        <div className="main-content-scrollable">
          <Outlet context={{ onOpenMobileNav: () => setMobileNavOpen(true) }} />
        </div>
        <Footer />
      </div>

      {/* 3. Mobile Drawer & Mobile Bottom Bar Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <MobileBottomBar />

      {/* 4. Super Admin Inline Edit Mode Indicator */}
      <EditModeBar />
    </div>
  );
};
