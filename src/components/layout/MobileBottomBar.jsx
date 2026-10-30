import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Calendar, Bell, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';

export const MobileBottomBar = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  const { unreadCount } = useNotification();

  const items = [
    { 
      label: 'হোম', 
      path: '/', 
      icon: Home,
      isActive: location.pathname === '/'
    },
    { 
      label: 'ম্যাপ', 
      path: '/map', 
      icon: MapPin,
      isActive: location.pathname.startsWith('/map')
    },
    { 
      label: 'ইভেন্ট', 
      path: '/sports', 
      icon: Calendar,
      isActive: location.pathname.startsWith('/sports') || 
                location.pathname.startsWith('/tournament') || 
                location.pathname.startsWith('/match')
    },
    { 
      label: 'নোটিফিকেশন', 
      path: '/emergency', 
      icon: Bell,
      badge: unreadCount,
      isActive: location.pathname.startsWith('/emergency')
    },
    { 
      label: 'প্রোফাইল', 
      path: currentUser ? '/profile' : '/login', 
      icon: User,
      isActive: location.pathname.startsWith('/profile') || 
                location.pathname.startsWith('/dashboard') || 
                location.pathname.startsWith('/login')
    },
  ];

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="মোবাইল বটম নেভিগেশন"
      role="navigation"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = item.isActive;

        return (
          <Link
            key={item.label}
            to={item.path}
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon
              size={20}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span>{item.label}</span>
            {item.badge > 0 && (
              <span className="mobile-nav-badge" aria-label={`${item.badge}টি নোটিফিকেশন`}>
                {item.badge}
              </span>
            )}
            {isActive && <span className="mobile-nav-indicator" />}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomBar;
