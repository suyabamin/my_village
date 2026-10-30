import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Crosshair, Loader2 } from 'lucide-react';
import { VillageMap } from '../../map/VillageMap';
import { useNotification } from '../../../context/NotificationContext';

export const MobileMapPreview = ({ mapLocations = [] }) => {
  const { addToast } = useNotification();
  const [locating, setLocating] = useState(false);

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      addToast('আপনার ব্রাউজার লোকেশন সমর্থন করে না।', 'error');
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocating(false);
        const { latitude, longitude } = position.coords;
        addToast(`আপনার অবস্থান শনাক্ত হয়েছে (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`, 'success');
      },
      (error) => {
        setLocating(false);
        console.warn('Geolocation permission error:', error.message);
        addToast('লোকেশন ব্যবহারের অনুমতি মেলেনি। গ্রামের মানচিত্র প্রদর্শিত হচ্ছে।', 'info');
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };

  return (
    <section className="mobile-map-card" aria-label="ডিজিটাল ভিলেজ ম্যাপ প্রিভিউ">
      <div className="mobile-map-header">
        <div className="mobile-map-title-wrap">
          <div className="mobile-map-title">
            <MapPin size={17} color="#0b6132" /> ডিজিটাল ভিলেজ ম্যাপ
          </div>
          <div className="mobile-map-title-desc">
            আমাদের গ্রামের সম্পূর্ণ মানচিত্র দেখুন
          </div>
        </div>
        <Link to="/map" className="mobile-view-all-btn">
          মানচিত্র দেখুন <ArrowRight size={13} />
        </Link>
      </div>

      <div className="mobile-map-preview-wrap">
        <VillageMap 
          locations={mapLocations} 
          compact={true}
          height="200px"
        />

        {/* Floating "আমার অবস্থান" Button matching reference */}
        <button
          type="button"
          onClick={handleMyLocation}
          disabled={locating}
          className="mobile-map-my-location-btn"
          aria-label="আমার বর্তমান অবস্থান"
        >
          {locating ? (
            <Loader2 size={13} className="animate-spin" />
          ) : (
            <Crosshair size={13} />
          )}
          <span>আমার অবস্থান</span>
        </button>
      </div>
    </section>
  );
};

export default MobileMapPreview;
