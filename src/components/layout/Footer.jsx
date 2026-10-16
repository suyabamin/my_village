import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      marginTop: '3rem',
    }}>
      <div className="container" style={{ paddingTop: 'clamp(2rem, 5vw, 3rem)', paddingBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>

        <div className="footer-grid">

          {/* Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-primary-600)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                flexShrink: 0,
              }}>
                আ
              </div>
              <span style={{ fontWeight: '700', fontSize: 'clamp(1rem, 3vw, 1.2rem)', wordBreak: 'break-word' }}>
                আলমদীপাড়া ডিজিটাল গ্রাম
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '0.75rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              "আমাদের গ্রাম, আমাদের তথ্য, আমাদের সেবা"
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              আলমদীপাড়া গ্রামের কৃষি, শিক্ষা, ধর্মীয় প্রতিষ্ঠান, যুব সমিতি ও সামাজিক কর্মকাণ্ডকে ডিজিটাল মাধ্যমে সহজলভ্য করার একটি আধুনিক উদ্যোগ।
            </p>
          </div>

          {/* Location Reference */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.85rem', color: 'var(--color-primary-700)', fontWeight: '700' }}>
              গ্রামের ভৌগোলিক পরিচিতি
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                <MapPin size={16} style={{ marginTop: '3px', color: 'var(--color-primary-600)', flexShrink: 0 }} aria-hidden="true" />
                <span>প্লাস কোড: <strong>9VW5+R92 Bil Barulla</strong></span>
              </div>
              <a
                href="https://maps.app.goo.gl/XsHYNvn2aeG6gfdQ7"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-primary-600)', fontWeight: '600', fontSize: '0.88rem' }}
              >
                গুগল ম্যাপে দেখুন <ExternalLink size={13} aria-hidden="true" />
              </a>
              <div style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                কৃষিপ্রান্ত: লাটিয়াকুড়ি, চড়ে বন্দ, মাগুড়া বন্দ
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.85rem', color: 'var(--color-primary-700)', fontWeight: '700' }}>
              জরুরি সেবাসমূহ
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
              <li><Link to="/agriculture" style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>কৃষিযন্ত্রপাতি ভাড়া ও জমি লিজ</Link></li>
              <li><Link to="/sports" style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>খেলার মাঠ ও টুর্নামেন্ট লাইভ স্কোর</Link></li>
              <li><Link to="/education" style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>সরকারি প্রাথমিক বিদ্যালয় তথ্য</Link></li>
              <li><Link to="/mosques" style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>বায়তুল নূর ও মামুর মসজিদের সময়সূচি</Link></li>
              <li><Link to="/organization" style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ</Link></li>
              <li>
                <Link to="/emergency" style={{ color: 'var(--color-accent-red)', fontWeight: '600', lineHeight: 1.5 }}>
                  জরুরি সভা ও বিজ্ঞপ্তি
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1.5rem 0 1rem' }} aria-hidden="true" />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          fontSize: '0.83rem',
          color: 'var(--text-muted)',
        }}>
          <div>
            © {new Date().getFullYear()} আলমদীপাড়া ডিজিটাল গ্রাম। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexWrap: 'wrap' }}>
            ভালোবাসার সাথে তৈরি{' '}
            <Heart size={14} color="#ef4444" fill="#ef4444" aria-hidden="true" />{' '}
            আলমদীপাড়া গ্রামবাসীর জন্য
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 4vw, 2.5rem);
          margin-bottom: 0;
        }

        @media (min-width: 600px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
