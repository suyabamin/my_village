import React, { useState } from 'react';
import { Users, ShieldCheck, Download, Calendar, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

export const Organization = () => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'program' | 'gallery'

  const dailyPrograms = [
    { time: 'সকাল ৭:০০ AM - ৮:৩০ AM', activity: 'সকালের ফজর পরবর্তী শারীরিক কসরত ও যুব আড্ডা' },
    { time: 'সকাল ১০:০০ AM - ১২:০০ PM', activity: 'কম্পিউটার ও ডিজিটাল স্কিল ট্রেনিং সেশন (যুব কেন্দ্র)' },
    { time: 'বিকাল ৪:০০ PM - ৬:০০ PM', activity: 'কেন্দ্রীয় খেলার মাঠে নিয়মিত ফুটবল ও ক্রিকেট অনুশীলন' },
    { time: 'সন্ধ্যা ৭:০০ PM - ৮:৩০ PM', activity: 'মাদকবিরোধী সচেতনতা সভা ও সান্ধ্য পাঠচক্র' }
  ];

  const galleryImages = [
    { title: 'মাদকবিরোধী যুব র্যালি ২০২৬', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80' },
    { title: 'বৃক্ষরোপণ কর্মসূচি', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80' },
    { title: 'বিনামূল্যে স্বাস্থ্য ও রক্তদান ক্যাম্প', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' }
  ];

  const handleDownloadProgramPDF = () => {
    const element = document.getElementById('organization-routine-pdf');
    if (!element) return;
    const opt = {
      margin:       10,
      filename:     'Alamdipara-Youth-Association-Routine.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).save();
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
          স্বীকৃত যুব সংগঠন
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          স্লোগান: "মাদকমুক্ত সমাজ গঠন ও উন্নত ভবিষ্যৎ বিনির্মাণে যুবসমাজ"
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button onClick={() => setActiveTab('overview')} className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}>
          <Users size={18} /> পরিচিতি ও মিশন
        </button>
        <button onClick={() => setActiveTab('program')} className={`btn ${activeTab === 'program' ? 'btn-primary' : 'btn-secondary'}`}>
          <Calendar size={18} /> দৈনিক কর্মসূচী ও PDF
        </button>
        <button onClick={() => setActiveTab('gallery')} className={`btn ${activeTab === 'gallery' ? 'btn-primary' : 'btn-secondary'}`}>
          <ImageIcon size={18} /> ফটো গ্যালারি
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-primary-700)' }}>
              আমাদের মূল লক্ষ্য ও দৃষ্টিভঙ্গি
            </h2>
            <p style={{ color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ গ্রামের যুবসমাজকে কুসংস্কার ও মাদকের ভয়াল থাবা থেকে রক্ষা করে খেলাধুলা, ডিজিটাল শিক্ষা ও সামাজিক কাজের মাধ্যমে একটি আদর্শ ডিজিটাল গ্রাম গঠনে কাজ করছে।
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 color="#16a34a" size={20} style={{ marginBottom: '0.35rem' }} />
                <strong>মাদকমুক্ত গ্রাম গড়া</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>সচেতনতামূলক উঠান বৈঠক ও নিয়মিত টহল।</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 color="#16a34a" size={20} style={{ marginBottom: '0.35rem' }} />
                <strong>ডিজিটাল প্রশিক্ষণ</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>বিনামূল্যে কম্পিউটার প্রশিক্ষণ ও স্কিল বিল্ডিং।</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 color="#16a34a" size={20} style={{ marginBottom: '0.35rem' }} />
                <strong>সামাজিক নিরাপত্তা</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>অসহায় গ্রামবাসীদের আপদকালীন জরুরি সহায়তা।</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Daily Routine Chart & PDF Download */}
      {activeTab === 'program' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700' }}>দৈনিক কার্যক্রম ও সময়সূচি</h2>
            <button onClick={handleDownloadProgramPDF} className="btn btn-primary btn-sm">
              <Download size={16} /> সময়সূচি PDF ডাউনলোড
            </button>
          </div>

          <div id="organization-routine-pdf" className="card" style={{ padding: '2rem', backgroundColor: '#fff', color: '#000' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #16a34a', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#16a34a', margin: 0 }}>আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ</h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0.35rem 0 0' }}>অফিসিয়াল দৈনিক কার্যক্রম ও সময়সূচি পঞ্জিকা</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {dailyPrograms.map((prog, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#f8faf9', borderRadius: '8px', borderLeft: '4px solid #16a34a' }}>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{prog.activity}</div>
                  <div style={{ fontSize: '0.9rem', color: '16a34a', fontWeight: 'bold' }}>{prog.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Gallery */}
      {activeTab === 'gallery' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {galleryImages.map((img, idx) => (
            <div key={idx} className="card" style={{ padding: '0.75rem' }}>
              <img src={img.url} alt={img.title} loading="lazy" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '0.75rem' }} />
              <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-main)' }}>{img.title}</div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
