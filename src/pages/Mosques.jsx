import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Clock, MapPin, Heart, BookOpen, ChevronRight } from 'lucide-react';
import { initialVillageData } from '../services/dbService';

export const Mosques = () => {
  const [mosques] = useState(initialVillageData.mosques);

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
          ইসলামিক তথ্য ও সময়সূচি
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          আলমদীপাড়া মসজিদসমূহ
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          বায়তুল নূর জামে মসজিদ ও বায়তুল মামুর জামে মসজিদের নামাজের জামাত, জুম্মা, ঈদের জামাতের সময়সূচি ও গুরুত্বপূর্ণ দোয়া।
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {mosques.map(mosque => (
          <div key={mosque.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <img src={mosque.image} alt={mosque.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <MapPin size={16} color="var(--color-primary-600)" /> {mosque.address}
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-primary-700)' }}>
                {mosque.name}
              </h2>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                {mosque.description}
              </p>

              {/* Prayer Times Grid */}
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={18} color="var(--color-primary-600)" /> পাঁচ ওয়াক্ত নামাজের জামাতের সময়
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <div style={{ textAlign: 'center', padding: '0.5rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ফজর</div>
                  <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-primary-700)' }}>{mosque.prayerTimes.fajr}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '0.5rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>যোহর</div>
                  <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-primary-700)' }}>{mosque.prayerTimes.dhuhr}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '0.5rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>আসর</div>
                  <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-primary-700)' }}>{mosque.prayerTimes.asr}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '0.5rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>মাগরিব</div>
                  <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-primary-700)' }}>{mosque.prayerTimes.maghrib}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '0.5rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>এশা</div>
                  <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-primary-700)' }}>{mosque.prayerTimes.isha}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '0.5rem', backgroundColor: 'var(--color-primary-50)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-primary-800)', fontWeight: 'bold' }}>জুম্মা</div>
                  <div style={{ fontWeight: '800', fontSize: '0.92rem', color: 'var(--color-primary-800)' }}>{mosque.prayerTimes.jummah}</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <Link to={`/mosques/${mosque.id}`} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                ঈদের জামাত সময়সূচি ও দো’আসমূহ <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
