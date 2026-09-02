import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, ExternalLink, Phone, ShieldAlert } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '3rem',
      paddingBottom: '2rem',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          
          {/* Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-primary-600)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>
                আ
              </div>
              <span style={{ fontWeight: '700', fontSize: '1.25rem' }}>আলমদীপাড়া ডিজিটাল গ্রাম</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem', fontStyle: 'italic' }}>
              "আমাদের গ্রাম, আমাদের তথ্য, আমাদের সেবা"
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              আলমদীপাড়া গ্রামের কৃষি, শিক্ষা, ধর্মীয় প্রতিষ্ঠান, যুব সমিতি ও সামাজিক কর্মকাণ্ডকে ডিজিটাল মাধ্যমে সহজলভ্য করার একটি আধুনিক উদ্যোগ।
            </p>
          </div>

          {/* Location Reference */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-primary-700)' }}>
              গ্রামের ভৌগোলিক পরিচিতি
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} style={{ marginTop: '2px', color: 'var(--color-primary-600)', flexShrink: 0 }} />
                <span>প্লাস কোড: <strong>9VW5+R92 Bil Barulla</strong></span>
              </div>
              <a 
                href="https://maps.app.goo.gl/XsHYNvn2aeG6gfdQ7" 
                target="_blank" 
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-primary-600)', fontWeight: '600' }}
              >
                গুগল ম্যাপে দেখুন <ExternalLink size={14} />
              </a>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                কৃষিপ্রান্ত: লাটিয়াকুড়ি, চড়ে বন্দ, মাগুড়া বন্দ
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-primary-700)' }}>
              জরুরি সেবাসমূহ
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <li><Link to="/agriculture">কৃষিযন্ত্রপাতি ভাড়া ও জমি লিজ</Link></li>
              <li><Link to="/sports">খেলার মাঠ ও টুর্নামেন্ট লাইভ স্কোর</Link></li>
              <li><Link to="/education">সরকারি প্রাথমিক বিদ্যালয় তথ্য</Link></li>
              <li><Link to="/mosques">বায়তুল নূর ও বায়তুল মামুর মসজিদের সময়সূচি</Link></li>
              <li><Link to="/organization">আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ</Link></li>
              <li><Link to="/emergency" style={{ color: 'var(--color-accent-red)', fontWeight: '600' }}>জরুরি সভা ও বিজ্ঞপ্তি</Link></li>
            </ul>
          </div>

        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} আলমদীপাড়া ডিজিটাল গ্রাম। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            ভালোবাসার সাথে তৈরি <Heart size={15} color="#ef4444" fill="#ef4444" /> আলমদীপাড়া গ্রামবাসীর জন্য
          </div>
        </div>
      </div>
    </footer>
  );
};
