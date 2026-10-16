import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { MobileBottomBar } from '../components/layout/MobileBottomBar';

export const MainLayout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minHeight: '100dvh', width: '100%', maxWidth: '100%', overflowX: 'clip' }}>
      <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <main style={{ flex: 1, minWidth: 0 }} className="main-content">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};
