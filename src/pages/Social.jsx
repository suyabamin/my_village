import React, { useState } from 'react';
import { HeartHandshake, Calendar, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Social = () => {
  const { hasRole } = useAuth();
  const [events] = useState([
    {
      id: 's-1',
      title: 'গ্রামব্যাপী বার্ষিক বৃক্ষরোপণ ও সবুজায়ন অভিযান',
      date: '২০২৬-০৯-১৫',
      time: 'সকাল ৯:০০ AM',
      location: 'আলমদীপাড়া প্রধান সড়ক ও সংযোগ রাস্তা',
      description: '৫০০টি ফলজ ও ওষধি গাছের চারা রোপণ ও বিতরণ কর্মসূচি।',
      poster: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>সামাজিক কল্যাণ</div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>সামাজিক কর্মকাণ্ড ও সেবাসমূহ</h1>
        </div>
        {hasRole('social_admin') && (
          <button className="btn btn-primary">+ নতুন সামাজিক ইভেন্ট</button>
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
