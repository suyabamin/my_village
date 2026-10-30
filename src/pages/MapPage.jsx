import React, { useState, useEffect } from 'react';
import { VillageMap } from '../components/map/VillageMap';
import { fetchVillageLocations } from '../services/villageMapService';

export const MapPage = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadLocations = async () => {
    try {
      const data = await fetchVillageLocations(false);
      setLocations(data || []);
    } catch (err) {
      console.warn('MapPage location load error:', err);
      setLocations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLocations();
    // Listen for admin map updates
    const handler = () => loadLocations();
    window.addEventListener('village-map-updated', handler);
    return () => window.removeEventListener('village-map-updated', handler);
  }, []);

  return (
    <div className="container" style={{ paddingTop: 'clamp(1.5rem, 4vw, 2rem)', paddingBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2rem)', fontWeight: '800', marginBottom: '0.5rem' }}>
          আলমদীপাড়া ডিজিটাল মানচিত্র
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          গ্রামের মসজিদ, সরকারি প্রাথমিক বিদ্যালয়, কৃষি মাঠ (লাটিয়াকুড়ি, চড়ে বন্দ, মাগুড়া বন্দ) ও গুরুত্বপূর্ণ স্থানসমূহের সুনির্দিষ্ট অবস্থান।
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
          মানচিত্র লোড হচ্ছে...
        </div>
      ) : (
        <VillageMap locations={locations} />
      )}
    </div>
  );
};
