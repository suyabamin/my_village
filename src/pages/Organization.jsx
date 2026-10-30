import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Calendar, 
  Image as ImageIcon, 
  CheckCircle2, 
  Shield, 
  Clock, 
  Award,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { VillageGuardSchedule } from '../components/organization/VillageGuardSchedule';
import { DailyActivitiesSection } from '../components/organization/DailyActivitiesSection';
import { OrganizationPhotoGallery } from '../components/organization/OrganizationPhotoGallery';

export const Organization = () => {
  const { hasRole, isSuperAdmin } = useAuth();
  const canManage = hasRole('organization_admin') || isSuperAdmin;

  // Tabs: 'overview' | 'program' | 'guard' | 'gallery'
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)' }}>
      
      {/* Page Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <div className="badge badge-green">
            স্বীকৃত যুব ও সমাজকল্যাণ সংগঠন
          </div>
          {canManage && (
            <div style={{
              background: '#ede9fe',
              color: '#7c3aed',
              fontSize: '0.78rem',
              fontWeight: '800',
              padding: '3px 10px',
              borderRadius: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Shield size={12} /> যুব সংঘ এডমিন সক্রিয়
            </div>
          )}
        </div>

        <h1 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)', fontWeight: '800', marginBottom: '0.4rem' }}>
          আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 2.2vw, 1rem)', margin: 0, lineHeight: 1.5 }}>
          স্লোগান: <em>"মাদকমুক্ত সমাজ গঠন ও উন্নত ভবিষ্যৎ বিনির্মাণে যুবসমাজ"</em> — স্থাপিত: ২০২১ খ্রি.
        </p>
      </div>

      {/* Touch Scrollable Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginBottom: '1.75rem', 
        borderBottom: '1px solid var(--border-color, #e2e8f0)', 
        paddingBottom: '0.5rem', 
        overflowX: 'auto', 
        WebkitOverflowScrolling: 'touch' 
      }}>
        <button 
          onClick={() => setActiveTab('overview')} 
          className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`} 
          style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <Users size={17} /> পরিচিতি ও মিশন
        </button>

        <button 
          onClick={() => setActiveTab('program')} 
          className={`btn ${activeTab === 'program' ? 'btn-primary' : 'btn-secondary'}`} 
          style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <Calendar size={17} /> দৈনিক কার্যক্রম ও সময়সূচি
        </button>

        <button 
          onClick={() => setActiveTab('guard')} 
          className={`btn ${activeTab === 'guard' ? 'btn-primary' : 'btn-secondary'}`} 
          style={{ 
            whiteSpace: 'nowrap', 
            flexShrink: 0,
            background: activeTab === 'guard' ? '#15803d' : undefined,
            color: activeTab === 'guard' ? '#ffffff' : undefined
          }}
        >
          <Shield size={17} /> সাপ্তাহিক গ্রাম পাহারা
        </button>

        <button 
          onClick={() => setActiveTab('gallery')} 
          className={`btn ${activeTab === 'gallery' ? 'btn-primary' : 'btn-secondary'}`} 
          style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <ImageIcon size={17} /> ফটো গ্যালারি
        </button>
      </div>

      {/* ── Tab 1: Overview & Mission ── */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="card" style={{ padding: 'clamp(1rem, 3.5vw, 1.75rem)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.85rem', color: 'var(--color-primary-700, #15803d)' }}>
              আমাদের মূল লক্ষ্য ও দৃষ্টিভঙ্গি
            </h2>
            <p style={{ color: 'var(--text-main)', lineHeight: '1.65', marginBottom: '1.25rem', fontSize: '0.94rem' }}>
              আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ গ্রামের যুবসমাজকে কুসংস্কার ও মাদকের ভয়াল থাবা থেকে রক্ষা করে খেলাধুলা, ডিজিটাল শিক্ষা ও সামাজিক কাজের মাধ্যমে একটি আদর্শ ডিজিটাল গ্রাম গঠনে কাজ করছে। গ্রামের সার্বিক নিরাপত্তা, রাত্রিকালীন টহল ও সামাজিক সৌহার্দ্য রক্ষা এই সংগঠনের প্রধান ব্রত।
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated, #f8fafc)', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)' }}>
                <CheckCircle2 color="#16a34a" size={20} style={{ marginBottom: '0.4rem' }} />
                <h4 style={{ margin: '0 0 0.25rem 0', fontWeight: '800', fontSize: '0.98rem' }}>মাদকমুক্ত গ্রাম গড়া</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                  সচেতনতামূলক উঠান বৈঠক, মাদকবিরোধী পোস্টারিং ও নিয়মিত টহল পরিচালনা।
                </p>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated, #f8fafc)', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)' }}>
                <CheckCircle2 color="#16a34a" size={20} style={{ marginBottom: '0.4rem' }} />
                <h4 style={{ margin: '0 0 0.25rem 0', fontWeight: '800', fontSize: '0.98rem' }}>ডিজিটাল প্রশিক্ষণ</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                  বিনামূল্যে কম্পিউটার প্রশিক্ষণ, ফ্রিল্যান্সিং গাইডলাইন ও ডিজিটাল স্কিল বিল্ডিং।
                </p>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated, #f8fafc)', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)' }}>
                <CheckCircle2 color="#16a34a" size={20} style={{ marginBottom: '0.4rem' }} />
                <h4 style={{ margin: '0 0 0.25rem 0', fontWeight: '800', fontSize: '0.98rem' }}>সামাজিক নিরাপত্তা ও পাহারা</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                  ৭ দিনের সাপ্তাহিক রাত্রিকালীন স্বেচ্ছাসেবী পাহারা কর্মসূচি ও জরুরি সহায়তা।
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 2: Daily Activities & Schedules ── */}
      {activeTab === 'program' && (
        <DailyActivitiesSection />
      )}

      {/* ── Tab 3: Weekly Village Guard Duty Schedule ── */}
      {activeTab === 'guard' && (
        <VillageGuardSchedule />
      )}

      {/* ── Tab 4: Photo Gallery ── */}
      {activeTab === 'gallery' && (
        <OrganizationPhotoGallery />
      )}

    </div>
  );
};

export default Organization;
