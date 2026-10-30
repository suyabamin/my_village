import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mobileHome.css';
import { MobileHeader } from './MobileHeader';
import { MobileHeroSlider } from './MobileHeroSlider';
import { MobileServiceGrid } from './MobileServiceGrid';
import { MobileMapPreview } from './MobileMapPreview';
import { MobileRecentEvents } from './MobileRecentEvents';
import { MobileWeatherNotice } from './MobileWeatherNotice';
import { HeaderSearchModal } from '../../layout/HeaderSearchModal';

export const MobileHomePage = ({
  onOpenMobileNav,
  sliderImages = [],
  siteSettings = {},
  mapLocations = [],
  liveMatches = [],
  upcomingEvents = [],
  urgentNotices = [],
  weatherData = null
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="mobile-home-container">
      {/* 1. Mobile Header (Logo, Bengali Title, Menu Button, Search Bar) */}
      <MobileHeader 
        onOpenMobileNav={onOpenMobileNav}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* 2. Mobile Hero Slider (Real village photos, touch swipe, autoplay, controls, location badge) */}
      <MobileHeroSlider 
        sliderImages={sliderImages}
        siteSettings={siteSettings}
      />

      {/* 3. Mobile Main Content (Service Grid, Map, Events, Weather & Notices) */}
      <main className="mobile-main-content">
        {/* A. 3x3 Service Cards Grid */}
        <MobileServiceGrid />

        {/* A2. Village Guard Quick-Access Card */}
        <section style={{ padding: '0 1rem 0.25rem' }}>
          <Link
            to="/organization?tab=guard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, #14532d 0%, #15803d 100%)',
              borderRadius: '14px',
              padding: '0.9rem 1.1rem',
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(21,128,61,0.28)',
              WebkitTapHighlightColor: 'transparent',
              transition: 'transform 0.15s ease, opacity 0.15s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onTouchStart={e => { e.currentTarget.style.transform = 'scale(0.975)'; e.currentTarget.style.opacity = '0.93'; }}
            onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}
          >
            <div style={{
              width: '44px', height: '44px', borderRadius: '11px',
              background: 'rgba(255,255,255,0.17)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              fontSize: '1.55rem'
            }}>🛡️</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: '800', fontSize: '0.97rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>গ্রাম পাহারা</div>
              <div style={{ fontSize: '0.78rem', opacity: 0.9, marginTop: '1px' }}>সাপ্তাহিক পাহারার সময়সূচি দেখুন</div>
            </div>
            <div style={{ fontSize: '1.1rem', opacity: 0.8 }}>›</div>
          </Link>
        </section>

        {/* B. Digital Village Map Preview with Geolocation */}
        <MobileMapPreview mapLocations={mapLocations} />

        {/* C. Recent Events & Live Matches */}
        <MobileRecentEvents 
          liveMatches={liveMatches}
          upcomingEvents={upcomingEvents}
        />

        {/* D. Additional Mobile Adapted Sections (Weather & Urgent Notices) */}
        <MobileWeatherNotice 
          weatherData={weatherData}
          urgentNotices={urgentNotices}
        />
      </main>

      {/* Full-Feature Global Village Search Modal */}
      <HeaderSearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </div>
  );
};

export default MobileHomePage;
