import React, { useState } from 'react';
import { ShieldAlert, Bell, Calendar, MapPin, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

export const Emergency = () => {
  const { hasRole } = useAuth();
  const { addToast } = useNotification();
  const [notificationPermissionGranted, setNotificationPermissionGranted] = useState(
    Notification.permission === 'granted'
  );

  const [emergencies] = useState([
    {
      id: 'e-1',
      title: 'জরুরি গ্রাম প্রতিরক্ষা ও নদী বাঁধ পরিদর্শন মিটিং',
      date: '২০২৬-০৯-১০',
      time: 'সন্ধ্যা ৭:৩০ PM',
      location: 'আলমদীপাড়া যুব সংঘ কার্যালয় প্রাঙ্গণ',
      instructions: 'গ্রামের প্রতি পরিবার থেকে অন্তত ১ জন প্রাপ্তবয়স্ক প্রতিনিধিকে উপস্থিতি থাকার অনুরোধ করা যাচ্ছে।',
      poster: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setNotificationPermissionGranted(true);
        addToast('নোটিফিকেশন অনুমতি সফলভাবে গ্রহণ করা হয়েছে!', 'success');
      } else {
        addToast('নোটিফিকেশন অনুমতি প্রদান করা হয়নি।', 'error');
      }
    } catch (err) {
      addToast('ব্রাউজারে নোটিফিকেশন সাপোর্ট পাওয়া যায়নি।', 'error');
    }
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      
      {/* Emergency Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="badge badge-red" style={{ marginBottom: '0.5rem' }}>
          জরুরি নোটিশ বোর্ড
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ef4444' }}>
          জরুরি সভা ও গ্রাম সতর্কবার্তা
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          আলমদীপাড়া গ্রামের অতি জরুরি বিজ্ঞপ্তি, গ্রাম্য বিচার সালিশ ও দুর্যোগ সতর্কবার্তা কেন্দ্র।
        </p>
      </div>

      {/* FCM Notification Permission Guidance Banner */}
      <div className="card" style={{ backgroundColor: 'var(--color-primary-50)', borderColor: 'var(--color-primary-400)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flex: 1, minWidth: '250px' }}>
            <Bell size={24} color="var(--color-primary-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-primary-900)' }}>
                জরুরি ঘোষণার পুশ নোটিফিকেশন পেতে চান?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-800)', marginTop: '0.2rem' }}>
                গ্রামের জরুরি সভা বা গুরুত্বপূর্ণ অ্যালার্ট সরাসরি মোবাইল/ব্রাউজারে পেতে নোটিফিকেশন অনুমতি সক্রিয় করুন।
              </p>
            </div>
          </div>
          <button 
            onClick={requestNotificationPermission} 
            disabled={notificationPermissionGranted}
            className={`btn ${notificationPermissionGranted ? 'btn-secondary' : 'btn-primary'}`}
          >
            {notificationPermissionGranted ? '✓ অনুমতি সক্রিয় রয়েছে' : 'অনুমতি দিন (Allow)'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {emergencies.map(e => (
          <div key={e.id} className="card" style={{ borderLeft: '5px solid #ef4444' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="badge badge-red">🚨 জরুরি আহ্বান</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>জরুরি সভা</span>
            </div>

            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              {e.title}
            </h2>

            <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', color: 'var(--text-main)', backgroundColor: 'var(--bg-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
              <div><Calendar size={14} /> <strong>তারিখ ও সময়:</strong> {e.date} ({e.time})</div>
              <div><MapPin size={14} /> <strong>স্থান:</strong> {e.location}</div>
            </div>

            <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', borderRadius: '8px', color: '#991b1b', fontSize: '0.88rem', fontWeight: '500' }}>
              <strong>উপস্থিতি নির্দেশনা:</strong> {e.instructions}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
