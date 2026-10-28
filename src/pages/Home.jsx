import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Trophy, 
  GraduationCap, 
  Building2, 
  Users, 
  Music, 
  HeartHandshake, 
  AlertCircle, 
  Moon, 
  MapPin, 
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Calendar,
  CloudSun,
  Star,
  Quote,
  Radio,
  Tv,
  Megaphone,
  BookOpen,
  Leaf
} from 'lucide-react';
import { getCollectionData, initialVillageData } from '../services/dbService';
import { subscribeLiveMatches } from '../services/sportsService';
import { fetchVillageWeather, toBengaliNumber } from '../services/weatherService';
import { fetchActiveVillageImages } from '../services/villageCommonImageService';
import { VillageMap } from '../components/map/VillageMap';
import { EditableText } from '../components/common/EditableText';

export const Home = () => {
  const [siteSettings, setSiteSettings] = useState(initialVillageData.site_settings);
  const [mapLocations, setMapLocations] = useState(initialVillageData.map_locations);
  const [liveMatches, setLiveMatches] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [sliderImages, setSliderImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const autoSlideTimerRef = useRef(null);

  // 1. Fetch site settings & map locations
  useEffect(() => {
    getCollectionData('site_settings').then(res => {
      if (res && res.length > 0) setSiteSettings(res[0]);
    }).catch(() => {});

    getCollectionData('map_locations').then(res => {
      if (res && res.length > 0) setMapLocations(res);
    }).catch(() => {});

    const unSubMatches = subscribeLiveMatches((list) => {
      setLiveMatches(list || []);
    });

    return () => unSubMatches();
  }, []);

  // 2. Load weather data from isolated village weather service
  useEffect(() => {
    fetchVillageWeather().then(res => {
      if (res) setWeatherData(res);
    }).catch(err => {
      console.warn("Weather fetch fallback on dashboard:", err);
    });
  }, []);

  // 3. Load active village photographs for automatic slider
  useEffect(() => {
    fetchActiveVillageImages().then(res => {
      if (res && res.length > 0) {
        setSliderImages(res);
      } else {
        // High quality fallback village photos
        setSliderImages([
          {
            id: 'fb-1',
            imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'আলমদীপাড়া ডিজিটাল গ্রামে আপনাকে স্বাগতম!',
            caption: '“গ্রামের উন্নয়ন, প্রগতির ছোঁয়ায়”'
          },
          {
            id: 'fb-2',
            imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'সবুজে ঘেরা ফসলি মাঠ',
            caption: '“লাটিয়াকুড়ি, চড়ে বন্দ ও মাগুড়া বন্দ কৃষি মাঠ”'
          },
          {
            id: 'fb-3',
            imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            title: 'ঐতিহ্য ও সম্প্রীতির আলমদীপাড়া',
            caption: '“সবার অংশগ্রহণে, স্মার্ট সোনার গ্রাম”'
          }
        ]);
      }
    }).catch(() => {});
  }, []);

  // Automatic Village Image Slider advancement timer (3.5 seconds)
  useEffect(() => {
    if (!isSliderPaused && sliderImages.length > 1) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % sliderImages.length);
      }, 3500);
    }
    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isSliderPaused, sliderImages.length]);

  const handleNextSlide = () => {
    if (sliderImages.length === 0) return;
    setCurrentSlide(prev => (prev + 1) % sliderImages.length);
  };

  const handlePrevSlide = () => {
    if (sliderImages.length === 0) return;
    setCurrentSlide(prev => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Formatted Bengali date string
  const bengaliDateStr = useMemo(() => {
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const now = new Date();
    const day = now.getDate().toString().replace(/\d/g, d => banglaDigits[d]);
    const month = months[now.getMonth()];
    const year = now.getFullYear().toString().replace(/\d/g, d => banglaDigits[d]);
    return `আজ: ${day} ${month} ${year}`;
  }, []);

  // 9 Core Service Cards matching imported HTML layout & color cards
  const serviceCards = [
    {
      id: 'farming',
      cls: 'card-farming',
      title: 'কৃষি',
      subtitle: 'মাঠ, খামার, ফসল',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/agriculture'
    },
    {
      id: 'sports',
      cls: 'card-sports',
      title: 'খেলাধুলা',
      subtitle: 'টুর্নামেন্ট, খেলা',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/sports'
    },
    {
      id: 'education',
      cls: 'card-education',
      title: 'শিক্ষা প্রতিষ্ঠান',
      subtitle: 'বিদ্যালয়, স্কুল',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/education'
    },
    {
      id: 'mosque',
      cls: 'card-mosque',
      title: 'মসজিদ',
      subtitle: 'নামাজের সময়সূচী',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/mosques'
    },
    {
      id: 'youth',
      cls: 'card-youth',
      title: 'যুব সংঘ',
      subtitle: 'সদস্য, কার্যক্রম',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/organization'
    },
    {
      id: 'culture',
      cls: 'card-culture',
      title: 'সাংস্কৃতিক',
      subtitle: 'গান, নাচ, নাটক',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/culture'
    },
    {
      id: 'social',
      cls: 'card-social',
      title: 'সামাজিক',
      subtitle: 'মিলন, সাহায্য',
      icon: HeartHandshake,
      image: 'https://images.unsplash.com/photo-1593113589914-07599018dd2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/social'
    },
    {
      id: 'emergency',
      cls: 'card-emergency',
      title: 'জরুরি মিটিং',
      subtitle: 'সতর্কতা, নোটিশ',
      icon: AlertCircle,
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/emergency'
    },
    {
      id: 'religion',
      cls: 'card-religion',
      title: 'ধর্মীয় অনুষ্ঠান',
      subtitle: 'ওয়াজ মাহফিল, ইসলামী',
      icon: Moon,
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/religious-events'
    }
  ];

  // Urgent Notices list from imported HTML
  const urgentNotices = [
    {
      id: 'un-1',
      title: 'মাদকবিরোধী সচেতনতা সভা অনুষ্ঠিত হবে',
      time: 'আজ, ০৯:০০ AM',
      colorCls: 'red',
      link: '/emergency'
    },
    {
      id: 'un-2',
      title: 'বিদ্যালয় বার্ষিক ক্রীড়া প্রতিযোগিতা',
      time: '২৮ এপ্রিল ২০২৫',
      colorCls: 'teal',
      link: '/education'
    },
    {
      id: 'un-3',
      title: 'গ্রামে বৃক্ষরোপণ কর্মসূচি',
      time: '২৭ এপ্রিল ২০২৫',
      colorCls: 'pink',
      link: '/social'
    },
    {
      id: 'un-4',
      title: 'বায়তুল নূর জামে মসজিদে ওয়াজ মাহফিল',
      time: '২৬ এপ্রিল ২০২৫',
      colorCls: 'purple',
      link: '/religious-events'
    },
    {
      id: 'un-5',
      title: 'জরুরি মিটিং: পানি সংকট সমাধান',
      time: '২৫ এপ্রিল ২০২৫',
      colorCls: 'orange',
      link: '/emergency'
    }
  ];

  // Upcoming Events list from imported HTML
  const upcomingEvents = [
    {
      id: 'evt-1',
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা',
      time: '২৮ এপ্রিল ২০২৫, সকাল ১০:০০',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      link: '/sports'
    },
    {
      id: 'evt-2',
      title: 'ওয়াজ মাহফিল',
      time: '২৫ এপ্রিল ২০২৫, বিকাল ৪:০০',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      link: '/religious-events'
    },
    {
      id: 'evt-3',
      title: 'সাংস্কৃতিক অনুষ্ঠান',
      time: '৩০ এপ্রিল ২০২৫, সন্ধ্যা ৭:০০',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      link: '/culture'
    }
  ];

  // Weather fallback & live readings
  const currentTemp = weatherData?.current?.temp !== undefined 
    ? toBengaliNumber(weatherData.current.temp) 
    : '২৮';

  const currentCondition = weatherData?.current?.condition || 'আংশিক মেঘলা';
  const humidityVal = weatherData?.current?.humidity !== undefined 
    ? toBengaliNumber(weatherData.current.humidity) 
    : '৭২';
  const windVal = weatherData?.current?.windSpeed !== undefined 
    ? toBengaliNumber(weatherData.current.windSpeed) 
    : '১২';
  const aqiVal = weatherData?.airQualityInfo?.aqi !== undefined 
    ? `${toBengaliNumber(weatherData.airQualityInfo.aqi)} (${weatherData.airQualityInfo.label})` 
    : '৪৮ (ভাল)';

  // 7-day Forecast items
  const forecast7Days = [
    { day: 'বুধ', icon: '⛅', temp: '২৮°' },
    { day: 'বৃহঃ', icon: '🌧️', temp: '২৭°' },
    { day: 'শনি', icon: '🌧️', temp: '২৯°' },
    { day: 'রবি', icon: '☀️', temp: '৩০°' },
    { day: 'সোম', icon: '⛅', temp: '২৮°' },
    { day: 'মঙ্গল', icon: '🌧️', temp: '২৯°' },
    { day: 'বুধ', icon: '☀️', temp: '২৭°' }
  ];

  const activeSlideImage = sliderImages[currentSlide] || sliderImages[0];

  return (
    <div className="dashboard-content">
      
      {/* LEFT COLUMN */}
      <div className="left-col">
        
        {/* 🔴 Active Live Match Emergency Alert Banner if any match is running */}
        {liveMatches.length > 0 && (
          <div className="live-match-home-banner">
            <div className="live-badge-pulse">
              <Radio size={14} className="pulse-icon" /> লাইভ খেলা চলছে
            </div>
            <span className="live-match-teams">
              {liveMatches[0].teamA} বনাম {liveMatches[0].teamB}
            </span>
            <Link to={`/match/${liveMatches[0].id}`} className="live-match-action-btn">
              <Tv size={14} /> সরাসরি স্কোর ও লাইভ ভিডিও দেখুন
            </Link>
          </div>
        )}

        {/* 1. Hero Banner with Automatic Village Image Slider */}
        <div 
          className="hero-banner"
          style={{
            backgroundImage: `url(${activeSlideImage?.imageUrl || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'})`
          }}
          onMouseEnter={() => setIsSliderPaused(true)}
          onMouseLeave={() => setIsSliderPaused(false)}
        >
          <div className="hero-text">
            <h2>
              <EditableText
                value={siteSettings?.heroTitle || 'আলমদীপাড়া ডিজিটাল গ্রামে'}
                collection="site_settings"
                docId={siteSettings?.id || 'general'}
                field="heroTitle"
                onSaved={(val) => setSiteSettings(prev => ({ ...prev, heroTitle: val }))}
              />
              <br />
              আপনাকে স্বাগতম!
            </h2>
            <p>
              <Quote size={16} /> "
              <EditableText
                value={siteSettings?.heroSubtitle || 'গ্রামের উন্নয়ন, প্রগতির ছোঁয়ায়'}
                collection="site_settings"
                docId={siteSettings?.id || 'general'}
                field="heroSubtitle"
                onSaved={(val) => setSiteSettings(prev => ({ ...prev, heroSubtitle: val }))}
              />
              "
            </p>
          </div>

          {/* Prev & Next Slide Buttons */}
          <button 
            className="hero-nav prev" 
            onClick={handlePrevSlide}
            aria-label="পূর্ববর্তী স্লাইড"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            className="hero-nav next" 
            onClick={handleNextSlide}
            aria-label="পরবর্তী স্লাইড"
          >
            <ChevronRight size={18} />
          </button>

          {/* Hero Bottom Information Pills */}
          <div className="hero-bottom-info">
            <div><MapPin size={14} /> আলমদীপাড়া, বাংলাদেশ</div>
            <div><Calendar size={14} /> {bengaliDateStr}</div>
            <div><CloudSun size={14} /> {currentTemp}°C {currentCondition}</div>
          </div>

          {/* Slide Indicator Dots */}
          {sliderImages.length > 1 && (
            <div className="hero-slider-dots">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`hero-slider-dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`স্লাইড ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 2. Services Section ("আমাদের সেবাসমূহ") */}
        <div className="services-section">
          <div className="section-header">
            <h3><Star size={18} color="#4caf50" fill="#4caf50" /> আমাদের সেবাসমূহ</h3>
            <Link to="/agriculture">সব দেখুন <ArrowRight size={14} /></Link>
          </div>

          <div className="services-grid">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link 
                  key={card.id} 
                  to={card.link} 
                  className={`service-card ${card.cls}`}
                >
                  <div className="service-header">
                    <div className="service-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4>{card.title}</h4>
                      <p>{card.subtitle}</p>
                    </div>
                  </div>
                  <div className="service-img">
                    <img src={card.image} alt={card.title} loading="lazy" />
                    <div className="service-arrow">
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. Map Section ("ডিজিটাল ভিলেজ ম্যাপ") */}
        <div className="map-section">
          <div className="map-header">
            <div className="map-header-left">
              <h3><MapPin size={18} color="#4caf50" /> ডিজিটাল ভিলেজ ম্যাপ</h3>
              <p>আলমদীপাড়া গ্রামের সকল গুরুত্বপূর্ণ স্থানসমূহ</p>
            </div>
            <div className="map-filters">
              <Link to="/map" className="filter-pill filter-all">সব</Link>
              <Link to="/mosques" className="filter-pill filter-mosque">মসজিদ</Link>
              <Link to="/education" className="filter-pill filter-edu">শিক্ষা প্রতিষ্ঠান</Link>
              <Link to="/agriculture" className="filter-pill filter-farm">কৃষি মাঠ</Link>
              <Link to="/sports" className="filter-pill filter-sports">খেলাধুলা</Link>
              <Link to="/organization" className="filter-pill filter-social">সঙ্ঘ/ক্লাব</Link>
            </div>
          </div>

          {/* Embedded Free Interactive Leaflet Map */}
          <div className="map-embed-wrapper">
            <VillageMap 
              locations={mapLocations} 
              compact={true}
              height="320px"
            />
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-col">
        
        {/* 1. Notice Widget */}
        <div className="widget">
          <div className="widget-header">
            <h3><Megaphone size={16} color="#4caf50" /> জরুরি নোটিশ</h3>
            <Link to="/emergency">সব দেখুন <ArrowRight size={12} /></Link>
          </div>
          <div className="notice-list">
            {urgentNotices.map((n) => (
              <Link key={n.id} to={n.link} className="notice-item">
                <div className={`notice-icon ${n.colorCls}`}>
                  <AlertCircle size={15} />
                </div>
                <div className="notice-content">
                  <h4>{n.title}</h4>
                  <p>{n.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. Events Widget */}
        <div className="widget">
          <div className="widget-header">
            <h3><Calendar size={16} color="#4caf50" /> আসন্ন অনুষ্ঠান</h3>
            <Link to="/sports">সব দেখুন <ArrowRight size={12} /></Link>
          </div>
          <div className="event-list">
            {upcomingEvents.map((evt) => (
              <Link key={evt.id} to={evt.link} className="event-item">
                <img src={evt.image} className="event-img" alt={evt.title} />
                <div className="event-info">
                  <h4>{evt.title}</h4>
                  <p>{evt.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 3. Weather Widget */}
        <div className="widget">
          <div className="widget-header">
            <h3><CloudSun size={18} color="#4caf50" /> আজকের আবহাওয়া</h3>
            <Link to="/weather" style={{ fontSize: '12px', color: 'var(--text-gray)' }}>
              বিস্তারিত <ArrowRight size={12} />
            </Link>
          </div>

          {/* Weather Main Temperature */}
          <div className="weather-main">
            <div className="weather-temp">
              <CloudSun size={38} color="#ffb300" />
              <div>
                <h2>{currentTemp}°C</h2>
                <p>{currentCondition}</p>
              </div>
            </div>
          </div>

          {/* Weather Details (Humidity, Wind, AQI) */}
          <div className="weather-details">
            <div>
              আর্দ্রতা
              <strong>{humidityVal}%</strong>
            </div>
            <div>
              বাতাস
              <strong>{windVal} কি.মি./ঘণ্টা</strong>
            </div>
            <div>
              বায়ু মান
              <strong>{aqiVal}</strong>
            </div>
          </div>

          {/* 7-Day Forecast Grid */}
          <div style={{ marginTop: '15px' }}>
            <div className="forecast-title">৭ দিনের পূর্বাভাস</div>
            <div className="forecast-grid">
              {(weatherData?.formattedDaily && weatherData.formattedDaily.length >= 7
                ? weatherData.formattedDaily.slice(0, 7).map((d, i) => ({
                    day: i === 0 ? 'আজ' : d.dayName.replace('বার', ''),
                    icon: d.icon,
                    temp: `${toBengaliNumber(d.maxTemp)}°`
                  }))
                : forecast7Days
              ).map((fc, i) => (
                <div key={i} className="forecast-day">
                  <span>{fc.day}</span>
                  <span style={{ fontSize: '16px' }}>{fc.icon}</span>
                  <span>{fc.temp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agricultural Weather Advice */}
          <div className="agri-advice">
            <Sprout size={22} color="#4caf50" style={{ flexShrink: 0 }} />
            <p>
              <strong>কৃষি পরামর্শ</strong>
              {weatherData?.advisory?.tips?.[0] || 'আগামী ৩ দিনের মধ্যে বৃষ্টি সম্ভাবনা রয়েছে। ধানের জমিতে সেচ দেওয়ার উপযুক্ত সময়।'}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
