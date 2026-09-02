import React, { useState, useEffect } from 'react';
import { VillageMap } from '../components/map/VillageMap';
import { getCollectionData, initialVillageData } from '../services/dbService';

export const MapPage = () => {
  const [locations, setLocations] = useState(initialVillageData.map_locations);

  useEffect(() => {
    getCollectionData('map_locations').then(res => {
      if (res && res.length > 0) setLocations(res);
    });
  }, []);

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          আলমদীপাড়া ডিজিটাল মানচিত্র
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          গ্রামের মসজিদ, সরকারি প্রাথমিক বিদ্যালয়, কৃষি মাঠ (লাটিয়াকুড়ি, চড়ে বন্দ, মাগুড়া বন্দ) ও গুরুত্বপূর্ণ স্থানসমূহের সুনির্দিষ্ট অবস্থান।
        </p>
      </div>

      <VillageMap locations={locations} />
    </div>
  );
};
