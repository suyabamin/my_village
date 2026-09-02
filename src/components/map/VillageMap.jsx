import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Phone, ExternalLink, Search, Filter } from 'lucide-react';

// Fix Leaflet marker icon asset path issues in React Vite bundle
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

// Category Icons / Color mapping
const categoryColors = {
  mosque: '#16a34a',       // Green
  school: '#2563eb',       // Blue
  agriculture: '#d97706',  // Amber/Gold
  sports: '#dc2626',       // Red
  organization: '#0d9488', // Teal
  emergency: '#ef4444',    // Bright Red
  other: '#64748b'         // Gray
};

const categoryLabels = {
  all: 'সব স্থান',
  mosque: 'মসজিদ',
  school: 'শিক্ষা প্রতিষ্ঠান',
  agriculture: 'কৃষি মাঠ',
  sports: 'খেলার মাঠ',
  organization: 'সংগঠন',
  emergency: 'জরুরি স্থান',
  other: 'অন্যান্য'
};

// Component to dynamically re-center map when marker selected
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export const VillageMap = ({ locations = [], onSelectLocation, isAdmin, onAddLocation }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [mapCenter, setMapCenter] = useState([24.1250, 89.2360]); // Alamdipara area center
  const [zoomLevel, setZoomLevel] = useState(15);

  const filteredLocations = locations.filter(loc => {
    const matchesCategory = selectedCategory === 'all' || loc.category === selectedCategory;
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (loc.description && loc.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      
      {/* Search & Filter Header */}
      <div className="card" style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Search Input */}
        <div style={{ position: 'relative', flex: '1', minWidth: '220px' }}>
          <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
            placeholder="গ্রামের স্থান বা প্রতিষ্ঠান খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
          {Object.entries(categoryLabels).map(([catKey, label]) => (
            <button
              key={catKey}
              onClick={() => setSelectedCategory(catKey)}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: '600',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                backgroundColor: selectedCategory === catKey ? 'var(--color-primary-600)' : 'var(--bg-elevated)',
                color: selectedCategory === catKey ? '#ffffff' : 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {isAdmin && (
          <button onClick={onAddLocation} className="btn btn-primary btn-sm">
            + নতুন স্থান যোগ করুন
          </button>
        )}
      </div>

      {/* Leaflet Map Box */}
      <div style={{
        position: 'relative',
        height: '520px',
        width: '100%',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <MapContainer
          center={mapCenter}
          zoom={zoomLevel}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <ChangeView center={mapCenter} zoom={zoomLevel} />
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredLocations.map(loc => (
            <Marker 
              key={loc.id} 
              position={[loc.lat, loc.lng]}
              eventHandlers={{
                click: () => {
                  setMapCenter([loc.lat, loc.lng]);
                  if (onSelectLocation) onSelectLocation(loc);
                }
              }}
            >
              <Popup width={260}>
                <div style={{ fontFamily: 'var(--font-family)', padding: '0.25rem' }}>
                  {loc.image && (
                    <img 
                      src={loc.image} 
                      alt={loc.name} 
                      style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem' }} 
                    />
                  )}
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem', color: '#16a34a' }}>
                    {loc.name}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.5rem' }}>
                    শ্রেণি: {categoryLabels[loc.category] || loc.category}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                    {loc.description}
                  </p>
                  {loc.phone && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#166534', fontWeight: '600' }}>
                      <Phone size={14} /> {loc.phone}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Map Locations Grid List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {filteredLocations.map(loc => (
          <div 
            key={loc.id}
            className="card card-interactive"
            onClick={() => {
              setMapCenter([loc.lat, loc.lng]);
              setZoomLevel(17);
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            style={{ padding: '1rem', display: 'flex', gap: '0.85rem', alignItems: 'center' }}
          >
            {loc.image ? (
              <img src={loc.image} alt={loc.name} style={{ width: '64px', height: '64px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }} />
            ) : (
              <div style={{ width: '64px', height: '64px', borderRadius: '10px', backgroundColor: 'var(--color-primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={24} color="var(--color-primary-600)" />
              </div>
            )}
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{loc.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{categoryLabels[loc.category] || loc.category}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-primary-600)', marginTop: '0.2rem', fontWeight: '600' }}>
                ম্যাপে পিন দেখুন →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
