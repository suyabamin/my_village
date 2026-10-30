import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { fetchServiceCards, DEFAULT_SERVICE_CARDS } from '../../../services/contentService';

export const MobileServiceGrid = () => {
  const [services, setServices] = useState(
    DEFAULT_SERVICE_CARDS.map((c, i) => ({
      id: c.id,
      title: c.title,
      icon: c.iconEmoji || '📌',
      iconUrl: c.iconUrl || '',
      link: c.link,
      cardClass: c.bgGradient || `mob-card-${i + 1}`
    }))
  );

  useEffect(() => {
    const load = async () => {
      try {
        const cards = await fetchServiceCards(false);
        if (cards && cards.length > 0) {
          setServices(
            cards.map((c, i) => ({
              id: c.id,
              title: c.title,
              icon: c.iconEmoji || '📌',
              iconUrl: c.iconUrl || '',
              link: c.link,
              cardClass: c.bgGradient || `mob-card-${i + 1}`
            }))
          );
        }
      } catch (err) {
        console.warn('MobileServiceGrid load error:', err);
      }
    };

    load();

    const handler = () => load();
    window.addEventListener('site-content-updated', handler);
    return () => window.removeEventListener('site-content-updated', handler);
  }, []);

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
            title={item.title}
          >
            <div className="mobile-service-icon" aria-hidden="true">
              {item.iconUrl ? (
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  style={{ width: '32px', height: '32px', objectFit: 'contain', display: 'block' }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
              ) : (
                <span>{item.icon}</span>
              )}
            </div>
            <div className="mobile-service-text">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
