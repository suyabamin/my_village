import React, { useState } from 'react';
import { Moon, Calendar, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const ReligiousEvents = () => {
  const { hasRole } = useAuth();
  const [events] = useState([
    {
      id: 'r-1',
      title: 'বার্ষিক ওয়াজ মাহফিল ও হুজুরগণের তাফসীর সভা',
      date: '২০২৬-১১-১৫',
      time: 'বাদ এশা',
      location: 'বায়তুল নূর জামে মসজিদ সংলগ্ন প্রাঙ্গণ',
      description: 'আমন্ত্রিত প্রখ্যাত ওলামায়ে কেরামগণের তাফসীরুল কোরআন ও হেদায়েতি বক্তব্য।',
      poster: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <div className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>ধর্মীয় অনুষ্ঠান</div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>ওয়াজ মাহফিল ও ইসলামিক সভা</h1>
        </div>
        {hasRole('religious_admin') && (
          <button className="btn btn-primary">+ নতুন ধর্মীয় সভা</button>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {events.map(evt => (
          <div key={evt.id} className="card">
            <img src={evt.poster} alt={evt.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>{evt.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{evt.description}</p>
            <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', color: 'var(--text-main)', backgroundColor: 'var(--bg-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <div><Calendar size={14} /> <strong>তারিখ ও সময়:</strong> {evt.date} ({evt.time})</div>
              <div><MapPin size={14} /> <strong>স্থান:</strong> {evt.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
