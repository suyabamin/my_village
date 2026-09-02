import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialVillageData } from '../services/dbService';
import { ArrowLeft, Sprout, Droplets, Sun, AlertCircle } from 'lucide-react';

export const FieldDetail = () => {
  const { fieldId } = useParams();
  const field = initialVillageData.agriculture_fields.find(f => f.id === fieldId) || {
    name: 'কৃষি মাঠ',
    cropInfo: 'তথ্য শীঘ্রই যুক্ত করা হবে।',
    irrigationStatus: 'তথ্য শীঘ্রই যুক্ত করা হবে।',
    irrigationMachines: 'তথ্য শীঘ্রই যুক্ত করা হবে।',
    machinery: 'তথ্য শীঘ্রই যুক্ত করা হবে।',
    weatherNote: 'তথ্য শীঘ্রই যুক্ত করা হবে।',
    updatedAt: '২০২৬'
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem', maxWidth: '900px' }}>
      <Link to="/agriculture" className="btn btn-secondary btn-sm" style={{ marginBottom: '1.5rem' }}>
        <ArrowLeft size={16} /> কৃষি পোর্টালে ফিরুন
      </Link>

      <div className="card">
        <div className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
          আলমদীপাড়া প্রধান কৃষি ক্ষেত্র
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-primary-700)' }}>
          {field.name} কৃষি মাঠের বিস্তারিত তথ্য
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-600)', fontWeight: '700', marginBottom: '0.5rem' }}>
              <Sprout size={20} /> বর্তমান ফসল অবস্থা
            </div>
            <p style={{ fontSize: '0.95rem' }}>{field.cropInfo}</p>
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0284c7', fontWeight: '700', marginBottom: '0.5rem' }}>
              <Droplets size={20} /> সেচ ব্যবস্থা ও পাম্প
            </div>
            <p style={{ fontSize: '0.95rem' }}>{field.irrigationStatus}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{field.irrigationMachines}</p>
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d97706', fontWeight: '700', marginBottom: '0.5rem' }}>
              <Sun size={20} /> আবহাওয়া ও তাপমাত্রা নোট
            </div>
            <p style={{ fontSize: '0.95rem' }}>{field.weatherNote}</p>
          </div>
        </div>

        <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <strong>কৃষিযন্ত্রপাতি বা জমিলিজ দরকার?</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>সরাসরি কৃষি পোর্টালে পাওয়ার টিলার, পাম্প ভাড়া ও বিজ্ঞাপন খুঁজুন।</p>
          </div>
          <Link to="/agriculture" className="btn btn-primary btn-sm">
            কৃষি বিজ্ঞাপন দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
};
