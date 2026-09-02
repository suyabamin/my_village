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
    <div className="mobile-bottom-bar">
      {items.map(item => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-bottom-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={20} color={isActive ? 'var(--color-primary-600)' : 'var(--text-muted)'} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};
