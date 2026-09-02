import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Culture = () => {
  const { hasRole } = useAuth();
  const [events] = useState([
    {
      id: 'c-1',
      title: 'বাংলা নববর্ষ ১৪৩৪ বৈশাখী মেলা ও সাংস্কৃতিক সন্ধ্যা',
      date: '২০২৭-০৪-১৪',
      time: 'বিকাল ৩:০০ PM',
      location: 'আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয় প্রাঙ্গণ',
      description: 'গ্রামীণ লোকজ গান, পুতুল নাচ, পিঠা উৎসব ও বৈচিত্র্যময় সাংস্কৃতিক উপস্থাপনা।',
      poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>সাংস্কৃতিক ঐতিহ্য</div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>সাংস্কৃতিক উৎসব ও অনুষ্ঠান</h1>
        </div>
        {hasRole('cultural_admin') && (
          <button className="btn btn-primary">+ নতুন অনুষ্ঠান যোগ করুন</button>
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
