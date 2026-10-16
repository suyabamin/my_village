import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Sprout, Trophy, ShieldAlert } from 'lucide-react';

export const MobileBottomBar = () => {
  const location = useLocation();

  const items = [
    { label: 'হোম', path: '/', icon: Home },
    { label: 'মানচিত্র', path: '/map', icon: MapPin },
    { label: 'কৃষি', path: '/agriculture', icon: Sprout },
    { label: 'খেলাধুলা', path: '/sports', icon: Trophy },
    { label: 'জরুরি', path: '/emergency', icon: ShieldAlert },
  ];

  return (
    <nav
      className="mobile-bottom-bar"
      aria-label="মোবাইল বটম নেভিগেশন"
      role="navigation"
    >
      {items.map(item => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path ||
          (item.path !== '/' && location.pathname.startsWith(item.path));
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-bottom-item${isActive ? ' active' : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon
              size={22}
              color={isActive ? 'var(--color-primary-600)' : 'var(--text-muted)'}
              aria-hidden="true"
            />
            <span style={{ lineHeight: 1.2 }}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
