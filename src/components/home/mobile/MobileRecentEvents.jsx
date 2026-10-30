import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, Calendar, ChevronRight, Radio, ArrowRight, Tv } from 'lucide-react';

export const MobileRecentEvents = ({ liveMatches = [], upcomingEvents = [] }) => {
  // Use real upcoming events or formatted list
  const defaultEvents = [
    {
      id: 'event-sports',
      title: 'প্রথম ফুটবল টুর্নামেন্ট ২০২৬',
      date: '২৬ অক্টোবর ২০২৬, সকাল ৯:০০',
      tag: 'খেলাধুলা',
      badge: 'ফুটবল',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      link: '/sports'
    },
    {
      id: 'event-social',
      title: 'মাদকবিরোধী সচেতনতা সভা',
      date: '২৮ এপ্রিল ২০২৫, বিকাল ৪:০০',
      tag: 'জরুরি সভা',
      badge: 'সভা',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      link: '/emergency'
    },
    {
      id: 'event-religious',
      title: 'বায়তুল নূর জামে মসজিদে ওয়াজ মাহফিল',
      date: '৩০ এপ্রিল ২০২৫, বাদ মাগরিব',
      tag: 'ধর্মীয়',
      badge: 'মাহফিল',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      link: '/religious-events'
    }
  ];

  const displayList = upcomingEvents.length > 0 ? upcomingEvents : defaultEvents;

  return (
    <section className="mobile-events-container" aria-label="সাম্প্রতিক ঘটনা ও অনুষ্ঠান">
      <div className="mobile-section-header">
        <div className="mobile-section-title">
          <CalendarCheck size={16} color="#0b6132" /> সাম্প্রতিক ঘটনা
        </div>
        <Link to="/sports" className="mobile-view-all-btn">
          সব দেখুন <ArrowRight size={13} />
        </Link>
      </div>

      {/* 🔴 Active Live Match Emergency Banner if any match is running */}
      {liveMatches.length > 0 && (
        <Link 
          to={`/match/${liveMatches[0].id}`}
          className="mobile-event-card"
          style={{ 
            borderColor: '#fca5a5', 
            backgroundColor: '#fff1f2',
            marginBottom: '12px'
          }}
        >
          <div className="mobile-event-img-wrap" style={{ backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Radio size={28} color="#ef4444" className="animate-pulse" />
            <span className="mobile-event-badge" style={{ backgroundColor: '#dc2626' }}>সরাসরি লাইভ</span>
          </div>
          <div className="mobile-event-details">
            <div className="mobile-event-title" style={{ color: '#991b1b' }}>
              {liveMatches[0].teamA} বনাম {liveMatches[0].teamB}
            </div>
            <div className="mobile-event-date" style={{ color: '#b91c1c' }}>
              <Tv size={12} /> সরাসরি স্কোর ও লাইভ সম্প্রচার চলছে
            </div>
            <span className="mobile-event-tag" style={{ backgroundColor: '#fecaca', color: '#991b1b' }}>
              এখনই দেখুন
            </span>
          </div>
          <ChevronRight size={18} className="mobile-event-arrow" color="#ef4444" />
        </Link>
      )}

      {/* Event Cards List */}
      {displayList.slice(0, 3).map((item) => (
        <Link
          key={item.id}
          to={item.link || '/sports'}
          className="mobile-event-card"
        >
          <div className="mobile-event-img-wrap">
            <img 
              src={item.image || 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'} 
              alt={item.title} 
              className="mobile-event-img"
              loading="lazy"
            />
            <span className="mobile-event-badge">
              {item.badge || item.tag || 'অনুষ্ঠান'}
            </span>
          </div>

          <div className="mobile-event-details">
            <h4 className="mobile-event-title">{item.title}</h4>
            <div className="mobile-event-date">
              <Calendar size={12} /> {item.date || item.time}
            </div>
            <span className="mobile-event-tag">
              {item.tag || 'আলমদীপাড়া'}
            </span>
          </div>

          <ChevronRight size={18} className="mobile-event-arrow" />
        </Link>
      ))}
    </section>
  );
};

export default MobileRecentEvents;
