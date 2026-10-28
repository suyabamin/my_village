import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { SidebarNav } from '../components/layout/SidebarNav';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { MobileBottomBar } from '../components/layout/MobileBottomBar';

export const MainLayout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="app-root-layout">
      {/* 1. Desktop Left Sidebar */}
      <SidebarNav />

      {/* 2. Right Main Wrapper with Header, Main Scrollable Content & Footer */}
      <div className="main-wrapper">
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
        <div className="main-content-scrollable">
          <Outlet />
        </div>
        <Footer />
      </div>

      {/* 3. Mobile Drawer & Mobile Bottom Bar Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <MobileBottomBar />
    </div>
  );
};
