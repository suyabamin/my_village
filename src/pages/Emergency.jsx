import React, { useState, useEffect } from 'react';
import { ShieldAlert, Bell, Calendar, MapPin, AlertTriangle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { getCollectionData } from '../services/dbService';

export const Emergency = () => {
  const { hasRole } = useAuth();
  const { addToast } = useNotification();
  const [notificationPermissionGranted, setNotificationPermissionGranted] = useState(
    Notification.permission === 'granted'
  );

  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCollectionData('emergency_meetings').then(res => {
      setEmergencies(res || []);
    }).catch(err => {
      console.warn("Emergency meetings fetch notice:", err);
      setEmergencies([]);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

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
    <div className="container" style={{ paddingTop: 'clamp(1.5rem, 4vw, 2.5rem)', paddingBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
      
      {/* Emergency Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="badge badge-red" style={{ marginBottom: '0.5rem' }}>
          জরুরি নোটিশ বোর্ড
        </div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)', fontWeight: '800', marginBottom: '0.5rem', color: '#ef4444' }}>
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

      {loading ? (
        <div style={{ padding: '3rem', textAlign: 'center' }}>
          <Loader2 size={32} className="animate-spin" style={{ margin: '0 auto 0.5rem', color: '#ef4444' }} />
          <div>জরুরি নোটিশ লোড হচ্ছে...</div>
        </div>
      ) : emergencies.length === 0 ? (
        <div className="card" style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <ShieldAlert size={40} style={{ margin: '0 auto 0.75rem', color: '#16a34a', opacity: 0.8 }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
            বর্তমানে কোনো জরুরি সভা বা সতর্কতা বিজ্ঞপ্তি নেই
          </h3>
          <p style={{ fontSize: '0.9rem' }}>
            আলমদীপাড়া গ্রামে বর্তমানে কোনো আপৎকালীন সতর্কতা জারি নেই।
          </p>
        </div>
      ) : (
        <div className="home-cards-grid">
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
      )}

    </div>
  );
};
