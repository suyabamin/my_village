import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

export const MobileServiceGrid = () => {
  const services = [
    {
      id: 'agri',
      title: 'কৃষি\nও আবহাওয়া',
      icon: '🌱',
      link: '/agriculture',
      cardClass: 'mob-card-1'
    },
    {
      id: 'sports',
      title: 'খেলাধুলা',
      icon: '⚽',
      link: '/sports',
      cardClass: 'mob-card-2'
    },
    {
      id: 'education',
      title: 'শিক্ষা প্রতিষ্ঠান',
      icon: '🎓',
      link: '/education',
      cardClass: 'mob-card-3'
    },
    {
      id: 'mosque',
      title: 'মসজিদ',
      icon: '🕌',
      link: '/mosques',
      cardClass: 'mob-card-4'
    },
    {
      id: 'youth',
      title: 'যুব সংঘ',
      icon: '👨‍👩‍👧‍👦',
      link: '/organization',
      cardClass: 'mob-card-5'
    },
    {
      id: 'culture',
      title: 'সাংস্কৃতিক\nঅনুষ্ঠান',
      icon: '🎭',
      link: '/culture',
      cardClass: 'mob-card-6'
    },
    {
      id: 'social',
      title: 'সামাজিক\nঅনুষ্ঠান',
      icon: '👥',
      link: '/social',
      cardClass: 'mob-card-7'
    },
    {
      id: 'emergency',
      title: 'জরুরি মিটিং',
      icon: '🚨',
      link: '/emergency',
      cardClass: 'mob-card-8'
    },
    {
      id: 'religion',
      title: 'ধর্মীয় অনুষ্ঠান',
      icon: '🙏',
      link: '/religious-events',
      cardClass: 'mob-card-9'
    }
  ];

  return (
    <section className="mobile-services-section" aria-label="আমাদের সেবাসমূহ">
      <div className="mobile-section-header">
        <div className="mobile-section-title">
          <Star size={16} fill="#168a48" color="#168a48" /> আমাদের সেবাসমূহ
        </div>
        <Link to="/agriculture" className="mobile-view-all-btn">
          সব দেখুন <ArrowRight size={13} />
        </Link>
      </div>

      <div className="mobile-service-grid">
        {services.map((item, index) => (
          <Link
            key={item.id}
            to={item.link}
            className={`mobile-service-card ${item.cardClass}`}
            style={{ animationDelay: `${index * 40}ms` }}
            title={item.title.replace('\n', ' ')}
          >
            <div className="mobile-service-icon" aria-hidden="true">
              {item.icon}
            </div>
            <div className="mobile-service-text">
              {item.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < item.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MobileServiceGrid;
