import React, { useState } from 'react';
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
