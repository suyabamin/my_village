import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Compass, Layers } from 'lucide-react';
import { VillageMap, categoryConfig } from '../../map/VillageMap';
import { fetchVillageLocations } from '../../../services/villageMapService';

export const MobileMapPreview = ({ mapLocations = [] }) => {
  const [locations, setLocations] = useState(mapLocations);
  const [activeCategory, setActiveCategory] = useState('all');

  // Load locations if not provided or when map updates
  useEffect(() => {
    if (mapLocations && mapLocations.length > 0) {
      setLocations(mapLocations);
    } else {
      fetchVillageLocations(false).then(res => {
        if (res && res.length > 0) setLocations(res);
      }).catch(() => {});
    }

    const handler = () => {
      fetchVillageLocations(false).then(res => {
        if (res && res.length > 0) setLocations(res);
      }).catch(() => {});
    };

    window.addEventListener('village-map-updated', handler);
    return () => window.removeEventListener('village-map-updated', handler);
  }, [mapLocations]);

  // Quick categories for mobile preview pills
  const quickCategories = [
    { key: 'all', label: 'সব স্থান' },
    { key: 'mosque', label: 'মসজিদ' },
    { key: 'school', label: 'স্কুল' },
    { key: 'agriculture', label: 'কৃষি মাঠ' },
    { key: 'sports', label: 'খেলার মাঠ' },
    { key: 'organization', label: 'যুব সংঘ' }
  ];

  const filteredLocations = useMemo(() => {
    if (activeCategory === 'all') return locations;
    return locations.filter(loc => loc.category === activeCategory);
  }, [locations, activeCategory]);

  return (
    <section className="mobile-map-card" aria-label="ডিজিটাল ভিলেজ স্যাটেলাইট ম্যাপ">
      {/* Header */}
      <div className="mobile-map-header">
        <div className="mobile-map-title-wrap">
          <div className="mobile-map-title">
            <MapPin size={17} color="#0b6132" /> ডিজিটাল ভিলেজ ম্যাপ
          </div>
          <div className="mobile-map-title-desc">
            🛰️ আলমদীপাড়া লাইভ স্যাটেলাইট ভিউ ও স্থানসমূহ
          </div>
        </div>
        <Link to="/map" className="mobile-view-all-btn">
          সম্পূর্ণ ম্যাপ <ArrowRight size={13} />
        </Link>
      </div>

      {/* Quick Category Chips for Mobile */}
      <div style={{
        display: 'flex',
        gap: '6px',
        padding: '0 12px 10px 12px',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: '#ffffff'
      }}>
        {quickCategories.map(cat => {
          const isSelected = activeCategory === cat.key;
          const count = cat.key === 'all' 
            ? locations.length 
            : locations.filter(l => l.category === cat.key).length;

          if (cat.key !== 'all' && count === 0) return null;

          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '4px 10px',
                borderRadius: '16px',
                border: isSelected ? '1px solid #16a34a' : '1px solid #e2e8f0',
                background: isSelected ? '#16a34a' : '#f8fafc',
                color: isSelected ? '#ffffff' : '#334155',
                fontSize: '11px',
                fontWeight: isSelected ? '700' : '500',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Map Preview Box */}
      <div className="mobile-map-preview-wrap">
        <VillageMap 
          locations={filteredLocations} 
          compact={true}
          height="240px"
        />
      </div>

      {/* Footer Info Strip */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 14px',
        background: '#f8fafc',
        borderTop: '1px solid #f1f5f9',
        fontSize: '11px',
        color: '#64748b'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>
          <span>{filteredLocations.length}টি স্থান প্রদর্শিত</span>
        </div>
        <Link 
          to="/map" 
          style={{ 
            color: '#16a34a', 
            fontWeight: '700', 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '3px' 
          }}
        >
          <span>বড় মানচিত্রে খুঁজুন</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
};

export default MobileMapPreview;
