import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';
import { MobileBottomBar } from '../components/layout/MobileBottomBar';

export const MainLayout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};
