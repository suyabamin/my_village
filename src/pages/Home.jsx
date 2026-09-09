import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Trophy, 
  GraduationCap, 
  Building2, 
  Users, 
  Sparkles, 
  HeartHandshake, 
  ShieldAlert, 
  Moon, 
  MapPin, 
  ArrowRight,
  Bell,
  CheckCircle2,
  Tv,
  Radio
} from 'lucide-react';
import { getCollectionData, initialVillageData } from '../services/dbService';
import { subscribeLiveMatches } from '../services/sportsService';
import { VillageMap } from '../components/map/VillageMap';
import VillageCommonImageSlider from '../components/village/VillageCommonImageSlider';

export const Home = () => {
  const [siteSettings, setSiteSettings] = useState(initialVillageData.site_settings);
  const [mapLocations, setMapLocations] = useState(initialVillageData.map_locations);
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    getCollectionData('map_locations').then(res => {
      if (res && res.length > 0) setMapLocations(res);
    });

    const unSubMatches = subscribeLiveMatches((list) => {
      setLiveMatches(list);
    });

    return () => unSubMatches();
  }, []);

  const dashboardCards = [
    {
      id: 'agriculture',
      title: 'কৃষি সেবা ও মাঠ',
      description: 'লাটিয়াকুড়ি, চড়ে বন্দ, মাগুড়া বন্দ কৃষি মাঠ, সেচ, পাওয়ার টিলার ও জমি লিজ সুবিধা।',
      icon: Sprout,
      color: '#16a34a',
      link: '/agriculture'
    },
    {
      id: 'sports',
      title: 'খেলাধুলা ও টুর্নামেন্ট',
      description: 'ফুটবল ও ক্রিকেট টুর্নামেন্ট, টিম মেম্বার রেজিস্ট্রেশন এবং সরাসরি লাইভ স্কোর।',
      icon: Trophy,
      color: '#d97706',
      link: '/sports'
    },
    {
      id: 'education',
      title: 'শিক্ষা প্রতিষ্ঠান',
      description: 'আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয়ের ভর্তি, বই বিতরণ ও শিক্ষা সংবাদ।',
      icon: GraduationCap,
      color: '#2563eb',
      link: '/education'
    },
    {
      id: 'mosques',
      title: 'বায়তুল নূর ও মামুর মসজিদ',
      description: 'নামাজের পাঁচ ওয়াক্ত সময়সূচি, জুম্মা, ঈদের জামাত ও প্রতিদিনের দোয়া।',
      icon: Building2,
      color: '#0d9488',
      link: '/mosques'
    },
    {
      id: 'organization',
      title: 'যুব উন্নয়ন সংঘ',
      description: 'আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘের বার্ষিক কর্মপরিকল্পনা ও ফটো গ্যালারি।',
      icon: Users,
      color: '#7c3aed',
      link: '/organization'
    },
    {
      id: 'culture',
      title: 'সাংস্কৃতিক অনুষ্ঠান',
      description: 'গ্রামের বৈশাখী মেলা, সাংস্কৃতিক সন্ধ্যা ও লোকজ উৎসবের আয়োজন।',
      icon: Sparkles,
      color: '#ec4899',
      link: '/culture'
    },
    {
      id: 'social',
      title: 'সামাজিক কর্মকাণ্ড',
      description: 'বৃক্ষরোপণ অভিযান, রক্তদান শিবির ও ত্রাণ সহায়তার সামাজিক তথ্য।',
      icon: HeartHandshake,
      color: '#059669',
      link: '/social'
    },
    {
      id: 'emergency',
      title: 'জরুরি সভা ও বিজ্ঞপ্তি',
      description: 'গ্রামের যেকোনো জরুরি পরিস্থিতি, বিচার সভা ও তাৎক্ষণিক সরকারি অ্যালার্ট।',
      icon: ShieldAlert,
      color: '#ef4444',
      link: '/emergency'
    },
    {
      id: 'religious-events',
      title: 'ধর্মীয় অনুষ্ঠান',
      description: 'ওয়াজ মাহফিল, তাফসীরুল কোরআন সভা ও মিলাদ মাহফিলের তারিখ ও স্থান।',
      icon: Moon,
      color: '#0284c7',
      link: '/religious-events'
    }
  ];

  return (
    <div>
      
      {/* Responsive Mobile-First Hero Section */}
      <section style={{
        position: 'relative',
        padding: 'clamp(2.5rem, 6vw, 4rem) 0 clamp(2rem, 5vw, 3.5rem)',
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(13, 148, 136, 0.05) 100%)',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}>
        <div className="container animate-fade-in" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          
          <div className="badge badge-green" style={{ marginBottom: '1rem', fontSize: 'clamp(0.78rem, 2.5vw, 0.88rem)', padding: '0.4rem 0.85rem' }}>
            <CheckCircle2 size={15} /> আলমদীপাড়া প্রামাণিক ডিজিটাল হাব
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
            {siteSettings.heroTitle}
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', color: 'var(--color-primary-700)', fontWeight: '600', marginBottom: '1rem' }}>
            "{siteSettings.heroSubtitle}"
          </p>

          <p style={{ fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            আমাদের গ্রামের কৃষি জমি, প্রাথমিক স্কুল, মসজিদ, খেলার মাঠ, সামাজিক সংগঠন ও সকল প্রয়োজনীয় সেবা এখন আপনার কাছে।
          </p>

          {/* 🔴 Live Match Quick Alert on Home Page if active */}
          {liveMatches.length > 0 && (
            <div style={{ backgroundColor: '#fee2e2', border: '1px solid #fca5a5', padding: '0.85rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="badge badge-red" style={{ backgroundColor: '#dc2626', color: '#fff' }}>
                <Radio size={14} style={{ animation: 'pulse 1.5s infinite' }} /> 🔴 লাইভ ম্যাচ সচল
              </span>
              <span style={{ fontWeight: '700', color: '#991b1b', fontSize: '0.9rem' }}>
                {liveMatches[0].teamA} VS {liveMatches[0].teamB}
              </span>
              <Link to={`/match/${liveMatches[0].id}`} className="btn btn-primary btn-sm" style={{ backgroundColor: '#dc2626', borderColor: '#dc2626' }}>
                <Tv size={14} /> সরাসরি ভিডিও ও লাইভ স্কোর দেখুন
              </Link>
            </div>
          )}

          {/* 🖼️ PUBLIC VILLAGE IMAGE AUTO SLIDER UNDER "আমাদের আলমদীপাড়া" */}
          <VillageCommonImageSlider />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link to="/map" className="btn btn-primary btn-lg btn-mobile-full">
              <MapPin size={20} /> গ্রামের মানচিত্র দেখুন
            </Link>
            <Link to="/agriculture" className="btn btn-secondary btn-lg btn-mobile-full">
              <Sprout size={20} /> কৃষি সেবা ও জমি লিজ
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Responsive Announcement Bar */}
      {siteSettings.announcements && siteSettings.announcements.length > 0 && (
        <section style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '0.65rem 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: '#ef4444', color: '#fff', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 'bold', flexShrink: 0 }}>
              <Bell size={13} /> ঘোষণা
            </div>
            <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '0.88rem' }}>
              {siteSettings.announcements.join('  •  ')}
            </div>
          </div>
        </section>
      )}

      {/* Main 9 Dashboard Module Cards Grid */}
      <section style={{ padding: 'clamp(2rem, 5vw, 3.5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', marginBottom: '0.4rem' }}>
              ডিজিটাল গ্রামের সেবাসমূহ
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 2.2vw, 1rem)' }}>
              প্রয়োজনীয় মডিউলে ট্যাপ করে বিস্তারিত তথ্য ও সেবাসমূহ জানুন
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}>
            {dashboardCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.id}
                  to={card.link}
                  className="card card-interactive"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    textDecoration: 'none',
                    padding: '1.25rem'
                  }}
                >
                  <div>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: `${card.color}15`,
                      color: card.color,
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      marginBottom: '1rem'
                    }}>
                      <Icon size={26} />
                    </div>
                    
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      {card.title}
                    </h3>
                    
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.15rem' }}>
                      {card.description}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: card.color,
                    fontWeight: '700',
                    fontSize: '0.88rem'
                  }}>
                    প্রবেশ করুন <ArrowRight size={15} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Map Preview Section */}
      <section style={{ padding: '2.5rem 0 3.5rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '0.85rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '700' }}>আলমদীপাড়া গ্রামের মানচিত্র</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                বায়তুল নূর ও মামুর মসজিদ, সরকারি প্রাথমিক স্কুল, লাটিয়াকুড়ি, চড়ে বন্দ ও মাগুড়া বন্দ
              </p>
            </div>
            <Link to="/map" className="btn btn-secondary btn-sm btn-mobile-full">
              সম্পূর্ণ মানচিত্র মোড <ArrowRight size={15} />
            </Link>
          </div>

          <VillageMap locations={mapLocations} />
        </div>
      </section>

    </div>
  );
};
