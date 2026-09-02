import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, MapPin } from 'lucide-react';
import { initialVillageData } from '../services/dbService';

export const MosqueDetail = () => {
  const { id } = useParams();
  const mosque = initialVillageData.mosques.find(m => m.id === id) || initialVillageData.mosques[0];

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem', maxWidth: '850px' }}>
      <Link to="/mosques" className="btn btn-secondary btn-sm" style={{ marginBottom: '1.5rem' }}>
        <ArrowLeft size={16} /> মসজিদ তালিকায় ফিরুন
      </Link>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-primary-700)' }}>
          {mosque.name}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <MapPin size={16} /> {mosque.address}
        </div>

        <img src={mosque.image} alt={mosque.name} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }} />

        {/* Eid Prayer Times */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-primary-800)' }}>
          ঈদের জামায়াতের সময়সূচি
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary-50)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-900)' }}>ঈদুল ফিতরের জামাত</h3>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-700)', marginTop: '0.25rem' }}>
              {mosque.eidTimes?.fitr || '৭:৩০ AM'}
            </div>
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary-50)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-900)' }}>ঈদুল আজহার জামাত</h3>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-700)', marginTop: '0.25rem' }}>
              {mosque.eidTimes?.adha || '৭:০০ AM'}
            </div>
          </div>
        </div>

        {/* Important Duas */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={20} color="var(--color-primary-600)" /> প্রয়োজনীয় মাসনুন দো’আসমূহ
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mosque.duas && mosque.duas.map((dua, idx) => (
            <div key={idx} style={{ padding: '1.25rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-primary-700)' }}>
                {dua.title}
              </h3>
              <div style={{ fontSize: '1.4rem', fontFamily: 'serif', direction: 'rtl', textAlign: 'right', marginBottom: '0.75rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
                {dua.arabic}
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                <strong>অর্থ:</strong> {dua.translation}
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                সূত্র: {dua.reference}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
