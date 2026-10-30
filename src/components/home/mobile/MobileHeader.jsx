import React from 'react';
import { Search, Menu, TreePine } from 'lucide-react';
import { useNotification } from '../../../context/NotificationContext';

export const MobileHeader = ({ onOpenMobileNav, onOpenSearch }) => {
  const { unreadCount } = useNotification();

  return (
    <header className="mobile-top-header" role="banner">
      <div className="mobile-header-top">
        {/* Village Logo & Brand */}
        <div className="mobile-logo-area">
          <div className="mobile-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 26 L20 18 L28 26 Z" fill="#0b6132" />
              <rect x="15" y="26" width="10" height="7" fill="#064220" />
              <rect x="18" y="28" width="4" height="5" fill="#ffffff" />
              <path d="M20 17 Q 16 11, 20 8 Q 24 11, 20 17 Z" fill="#168a48" />
              <path d="M18 14 Q 13 12, 14 8 Q 18 10, 18 14 Z" fill="#4ade80" />
              <path d="M22 14 Q 27 12, 26 8 Q 22 10, 22 14 Z" fill="#4ade80" />
            </svg>
          </div>
          <div className="mobile-logo-text">
            <h1>আলমদীপাড়া</h1>
            <p>ডিজিটাল গ্রাম</p>
          </div>
        </div>

        {/* Mobile Navigation Drawer Trigger */}
        <div className="mobile-header-actions">
          <button
            type="button"
            className="mobile-header-btn"
            onClick={onOpenMobileNav}
            aria-label="মেনু খুলুন"
            title="মেনু খুলুন"
          >
            <Menu size={22} />
            {unreadCount > 0 && <span className="mobile-notif-dot" aria-label={`${unreadCount}টি নতুন নোটিফিকেশন`} />}
          </button>
        </div>
      </div>

      {/* Interactive Mobile Search Bar */}
      <div 
        className="mobile-search-bar" 
        onClick={onOpenSearch}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenSearch();
          }
        }}
        aria-label="গ্রামে তথ্য বা স্থান খুঁজুন"
      >
        <Search size={17} color="#64748b" style={{ flexShrink: 0 }} />
        <input
          type="text"
          placeholder="খুঁজুন (মসজিদ, স্কুল, মাঠ, সেবা)..."
          readOnly
          aria-label="খুঁজুন"
        />
      </div>
    </header>
  );
};

export default MobileHeader;
