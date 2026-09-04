import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { 
  MapPin, 
  Phone, 
  Search, 
  Navigation, 
  Layers, 
  Maximize2, 
  Minimize2, 
  Locate, 
  Compass, 
  Check, 
  Info, 
  ExternalLink,
  Plus,
  Minus,
  Home,
  X
} from 'lucide-react';

// Default Alamdipara Geographic Center & Zoom (From Google Maps: https://maps.app.goo.gl/pZt3kjTtQ2wA2FvN8)
const DEFAULT_CENTER = [24.397140, 90.858307];
const DEFAULT_ZOOM = 15;

// Verified Agricultural Field Polygons (Centered around Alamdipara Village location)
const AGRI_POLYGONS = [
  {
    id: "poly-latiyakuri",
    name: "লাটিয়াকুড়ি কৃষি মাঠ",
    center: [24.3940, 90.8540],
    polygon: [
      [24.3958, 90.8520],
      [24.3965, 90.8560],
      [24.3925, 90.8565],
      [24.3920, 90.8525]
    ],
    crop: "ধান, গম, সরিষা ও রবি শস্য",
    water: "ডিপ টিউবওয়েল ও সেচ ক্যানাল"
  },
  {
    id: "poly-chore-bondo",
    name: "চড়ে বন্দ কৃষি মাঠ",
    center: [24.4010, 90.8620],
    polygon: [
      [24.4025, 90.8595],
      [24.4030, 90.8640],
      [24.3995, 90.8645],
      [24.3990, 90.8600]
    ],
    crop: "বোরো ধান ও ভুট্টা চাষ এলাকা",
    water: "ক্যানাল সেচ প্রক্রিয়া"
  },
  {
    id: "poly-magura-bondo",
    name: "মাগুড়া বন্দ কৃষি মাঠ",
    center: [24.3910, 90.8510],
    polygon: [
      [24.3928, 90.8490],
      [24.3932, 90.8530],
      [24.3895, 90.8535],
      [24.3890, 90.8495]
    ],
    crop: "শাকসবজি ও পাট প্রধান এলাকা",
    water: "সৌরবিদ্যুৎ সেচ পাম্প"
  }
];

// Category styling configuration with Google Maps inspired colors & SVG icons
export const categoryConfig = {
  mosque: {
    label: 'মসজিদ',
    color: '#16a34a',
    bgLight: '#dcfce7',
    iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 10.93a10 10 0 0 1 14.14 0"/><path d="M2 18h20"/><path d="M12 6a6 6 0 0 0-6 6v6h12v-6a6 6 0 0 0-6-6z"/></svg>`
  },
  school: {
    label: 'শিক্ষা প্রতিষ্ঠান',
    color: '#2563eb',
    bgLight: '#dbeafe',
    iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  },
  agriculture: {
    label: 'কৃষি মাঠ',
    color: '#15803d',
    bgLight: '#f0fdf4',
    iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c0-3 1.5-5 5-6"/><path d="M12 20c0-6 3-9 7-10"/><path d="M12 20c0-8-5-11-9-12"/></svg>`
  },
  sports: {
    label: 'খেলার মাঠ',
    color: '#d97706',
    bgLight: '#fef3c7',
    iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`
  },
  organization: {
    label: 'সংগঠন',
    color: '#7c3aed',
    bgLight: '#f3e8ff',
    iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  emergency: {
    label: 'জরুরি স্থান',
    color: '#dc2626',
    bgLight: '#fee2e2',
    iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`
  },
  other: {
    label: 'গুরুত্বপূর্ণ স্থান',
    color: '#0f172a',
    bgLight: '#f1f5f9',
    iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  }
};

// Create Google Maps style SVG pin marker
const createCustomMarkerIcon = (category, isSelected = false, showLabel = false, locationName = '') => {
  const config = categoryConfig[category] || categoryConfig.other;
  const color = config.color;
  const iconSvg = config.iconSvg;
  const size = isSelected ? 44 : 36;
  const borderSize = isSelected ? 3 : 2;

  const labelHtml = showLabel ? `
    <div style="
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
      margin-top: 4px;
      background-color: rgba(15, 23, 42, 0.88);
      color: #ffffff;
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 600;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      backdrop-filter: blur(4px);
      pointer-events: none;
      border: 1px solid rgba(255,255,255,0.2);
    ">
      ${locationName}
    </div>
  ` : '';

  return L.divIcon({
    className: 'custom-map-marker-pin',
    html: `
      <div style="position: relative; width: ${size}px; height: ${size}px;">
        ${isSelected ? `
          <div style="
            position: absolute;
            top: -6px;
            left: -6px;
            right: -6px;
            bottom: -6px;
            border-radius: 50%;
            background-color: ${color};
            opacity: 0.35;
            animation: pulseRing 1.5s infinite ease-out;
          "></div>
        ` : ''}
        <div style="
          position: absolute;
          inset: 0;
          background-color: ${color};
          border: ${borderSize}px solid #ffffff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 14px rgba(0,0,0,0.35);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        ">
          <div style="transform: rotate(45deg); display: flex; align-items: center; justify-content: center; color: #ffffff;">
            ${iconSvg}
          </div>
        </div>
        ${labelHtml}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size - 4]
  });
};

// Create Leaflet Cluster Group Icon
const createClusterIcon = (count) => {
  return L.divIcon({
    className: 'custom-map-cluster-icon',
    html: `
      <div style="
        width: 44px;
        height: 44px;
        background: linear-gradient(135deg, #16a34a, #15803d);
        color: #ffffff;
        border: 3px solid #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 0.95rem;
        box-shadow: 0 6px 16px rgba(22, 163, 74, 0.45);
        cursor: pointer;
      ">
        ${count}
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22]
  });
};

// Approved Tile Providers
const tileProviders = {
  street: {
    name: 'স্ট্রিট ম্যাপ (Voyager)',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
  },
  satellite: {
    name: 'স্যাটেলাইট (Satellite)',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP'
  },
  osm: {
    name: 'স্ট্যান্ডার্ড (OSM)',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
};

// Internal controller component for Leaflet view changes, scale control & zoom listener
function MapController({ center, zoom, onZoomChange }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, zoom, { animate: true, duration: 0.8 });
    }
  }, [center, zoom, map]);

  useEffect(() => {
    // Add Leaflet distance scale bar control
    const scaleControl = L.control.scale({
      position: 'bottomleft',
      metric: true,
      imperial: false
    });
    scaleControl.addTo(map);

    const handleZoomEnd = () => {
      if (onZoomChange) onZoomChange(map.getZoom());
    };

    map.on('zoomend', handleZoomEnd);

    return () => {
      scaleControl.remove();
      map.off('zoomend', handleZoomEnd);
    };
  }, [map, onZoomChange]);

  return null;
}

export const VillageMap = ({ locations = [], onSelectLocation, isAdmin, onAddLocation }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [zoomLevel, setZoomLevel] = useState(DEFAULT_ZOOM);
  const [currentZoom, setCurrentZoom] = useState(DEFAULT_ZOOM);
  const [activeTileKey, setActiveTileKey] = useState('street');
  const [activeLocationId, setActiveLocationId] = useState(null);
  
  // Controls & Overlay States
  const [showLayerMenu, setShowLayerMenu] = useState(false);
  const [showLegend, setShowLegend] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [userAccuracy, setUserAccuracy] = useState(null);
  const [locatingUser, setLocatingUser] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showAgriFields, setShowAgriFields] = useState(true);

  const containerRef = useRef(null);

  // Filter locations by category & search query
  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesCategory = selectedCategory === 'all' || loc.category === selectedCategory;
      const matchesSearch = !searchTerm.trim() || 
        (loc.name && loc.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (loc.description && loc.description.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [locations, selectedCategory, searchTerm]);

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 1, 19));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 1, 3));
  };

  // Browser Geolocation (Locate Me)
  const handleLocateUser = () => {
    if (!navigator.geolocation) {
      alert('আপনার ব্রাউজারে লোকেশন ট্র্যাকিং সমর্থিত নয়।');
      return;
    }
    setLocatingUser(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(coords);
        setUserAccuracy(pos.coords.accuracy || 30);
        setMapCenter(coords);
        setZoomLevel(17);
        setLocatingUser(false);
      },
      (err) => {
        console.warn('Geolocation error:', err);
        alert('আপনার বর্তমান অবস্থান সনাক্ত করা সম্ভব হয়নি। অনুগ্রহ করে ব্রাউজারের লোকেশন পারমিশন দিন।');
        setLocatingUser(false);
      },
      { enableHighAccuracy: true, timeout: 12000 }
    );
  };

  // Reset to Alamdipara Default Center View
  const handleResetView = () => {
    setMapCenter(DEFAULT_CENTER);
    setZoomLevel(DEFAULT_ZOOM);
    setActiveLocationId(null);
  };

  // Toggle Fullscreen Mode
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => setIsFullscreen(true));
      } else {
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => setIsFullscreen(false));
      }
      setIsFullscreen(false);
    }
  };

  // Count items per category
  const getCategoryCount = (catKey) => {
    if (catKey === 'all') return locations.length;
    return locations.filter(l => l.category === catKey).length;
  };

  const activeTile = tileProviders[activeTileKey] || tileProviders.street;

  return (
    <div 
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        width: '100%',
        position: isFullscreen ? 'fixed' : 'relative',
        inset: isFullscreen ? 0 : 'auto',
        zIndex: isFullscreen ? 99999 : 1,
        backgroundColor: 'var(--bg-main, #ffffff)',
        padding: isFullscreen ? '1rem' : 0,
        height: isFullscreen ? '100vh' : 'auto',
        overflow: isFullscreen ? 'auto' : 'visible'
      }}
    >
      {/* Dark mode Leaflet CSS overrides & custom animations */}
      <style>{`
        [data-theme="dark"] .leaflet-popup-content-wrapper,
        [data-theme="dark"] .leaflet-popup-tip {
          background-color: var(--bg-card, #142217) !important;
          color: var(--text-main, #f1f5f9) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.6) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        [data-theme="dark"] .leaflet-container {
          background-color: #0c140e !important;
        }
        [data-theme="dark"] .leaflet-control-attribution {
          background-color: rgba(20, 34, 23, 0.88) !important;
          color: #94a3b8 !important;
        }
        [data-theme="dark"] .leaflet-control-attribution a {
          color: #4ade80 !important;
        }
        @keyframes pulseRing {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes userPulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
          70% { box-shadow: 0 0 0 16px rgba(37, 99, 235, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
        .user-location-pulse-dot {
          animation: userPulse 1.8s infinite;
        }
        .custom-tooltip-agri {
          background-color: rgba(21, 128, 61, 0.92) !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 8px !important;
          font-weight: 700 !important;
          font-size: 0.78rem !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
          padding: 4px 8px !important;
        }
      `}</style>
      
      {/* ─── TOP CONTROL BAR (SEARCH & CATEGORY CHIPS) ─── */}
      <div style={styles.topControlCard}>
        {/* Search Input Box */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={styles.searchWrapper}>
            <Search size={18} style={styles.searchIcon} />
            <input
              type="text"
              style={styles.searchInput}
              placeholder="আলমদীপাড়ার স্থান, মসজিদ, স্কুল, ক্লাব বা কৃষি মাঠ খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 220)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                style={styles.clearSearchBtn}
                title="মুছে ফেলুন"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Instant Search Suggestions Dropdown */}
          {searchFocused && searchTerm.trim() && (
            <div style={styles.suggestionsBox}>
              {filteredLocations.length > 0 ? (
                filteredLocations.slice(0, 6).map(loc => {
                  const cfg = categoryConfig[loc.category] || categoryConfig.other;
                  return (
                    <div
                      key={loc.id}
                      onMouseDown={() => {
                        setMapCenter([loc.lat, loc.lng]);
                        setZoomLevel(17);
                        setActiveLocationId(loc.id);
                        setSearchTerm(loc.name);
                        if (onSelectLocation) onSelectLocation(loc);
                      }}
                      style={styles.suggestionItem}
                    >
                      <MapPin size={16} color={cfg.color} />
                      <div>
                        <div style={styles.suggestionTitle}>{loc.name}</div>
                        <div style={styles.suggestionSubtitle}>
                          {cfg.label}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={styles.noSuggestionText}>কোনো স্থান খুঁজে পাওয়া যায়নি।</div>
              )}
            </div>
          )}
        </div>

        {/* Category Filter Chips Horizontal Scroll Container */}
        <div style={styles.chipsRow}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              ...styles.chipBtn,
              backgroundColor: selectedCategory === 'all' ? 'var(--primary-color, #16a34a)' : 'var(--bg-elevated, #f8fafc)',
              color: selectedCategory === 'all' ? '#ffffff' : 'var(--text-color, #1e293b)',
            }}
          >
            সব স্থান ({locations.length})
          </button>
          
          {Object.entries(categoryConfig).map(([catKey, cfg]) => {
            const count = getCategoryCount(catKey);
            if (count === 0 && catKey !== 'other') return null;
            const isSelected = selectedCategory === catKey;

            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                style={{
                  ...styles.chipBtn,
                  backgroundColor: isSelected ? cfg.color : 'var(--bg-elevated, #f8fafc)',
                  color: isSelected ? '#ffffff' : 'var(--text-color, #1e293b)',
                  borderLeft: isSelected ? 'none' : `3px solid ${cfg.color}`,
                }}
              >
                {cfg.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── MAP VIEWPORT BOX WITH FLOATING GOOGLE MAPS CONTROLS ─── */}
      <div style={{
        ...styles.mapBox,
        height: isFullscreen ? 'calc(100vh - 120px)' : 'clamp(380px, 58vh, 600px)'
      }}>
        
        {/* Leaflet Map Container */}
        <MapContainer
          center={mapCenter}
          zoom={zoomLevel}
          scrollWheelZoom={true}
          zoomControl={false}
          style={{ width: '100%', height: '100%', borderRadius: '16px' }}
        >
          <MapController 
            center={mapCenter} 
            zoom={zoomLevel} 
            onZoomChange={(z) => setCurrentZoom(z)} 
          />

          {/* Active Map Tile Layer */}
          <TileLayer
            key={activeTileKey}
            url={activeTile.url}
            attribution={activeTile.attribution}
            maxZoom={19}
          />

          {/* Satellite View Reference Labels Overlay */}
          {activeTileKey === 'satellite' && (
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
              attribution=""
            />
          )}

          {/* Agricultural Field Vector Polygons */}
          {showAgriFields && AGRI_POLYGONS.map(field => (
            <React.Fragment key={field.id}>
              <Polygon
                positions={field.polygon}
                pathOptions={{
                  color: '#15803d',
                  fillColor: '#22c55e',
                  fillOpacity: 0.18,
                  weight: 2,
                  dashArray: '4, 4'
                }}
              >
                <Tooltip sticky className="custom-tooltip-agri">
                  <div>🌾 {field.name}</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>{field.crop}</div>
                </Tooltip>
              </Polygon>
            </React.Fragment>
          ))}

          {/* User Location Pulse Marker & Accuracy Circle */}
          {userLocation && (
            <>
              {userAccuracy && (
                <Circle 
                  center={userLocation} 
                  radius={userAccuracy} 
                  pathOptions={{
                    color: '#2563eb',
                    fillColor: '#3b82f6',
                    fillOpacity: 0.15,
                    weight: 1
                  }} 
                />
              )}
              <Marker
                position={userLocation}
                icon={L.divIcon({
                  className: 'user-location-pulse-dot',
                  html: `<div style="
                    width: 20px;
                    height: 20px;
                    background-color: #2563eb;
                    border: 3px solid #ffffff;
                    border-radius: 50%;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                  "></div>`,
                  iconSize: [20, 20],
                  iconAnchor: [10, 10]
                })}
              >
                <Popup>
                  <div style={{ padding: '4px', fontSize: '0.85rem', fontWeight: '600' }}>
                    📍 আপনার বর্তমান অবস্থান
                  </div>
                </Popup>
              </Marker>
            </>
          )}

          {/* Village Center Pin Marker (From Google Maps Link: 24.397140, 90.858307) */}
          <Marker
            position={DEFAULT_CENTER}
            icon={createCustomMarkerIcon('other', activeLocationId === 'village-center', true, 'আলমদীপাড়া (কেন্দ্রীয় অবস্থান)')}
            eventHandlers={{
              click: () => {
                setMapCenter(DEFAULT_CENTER);
                setActiveLocationId('village-center');
              }
            }}
          >
            <Popup maxWidth={300} minWidth={260}>
              <div style={styles.popupCard}>
                <div style={styles.popupContent}>
                  <span style={{
                    ...styles.popupBadgeInline,
                    backgroundColor: '#dcfce7',
                    color: '#15803d'
                  }}>
                    🏡 কেন্দ্রীয় অবস্থান
                  </span>
                  <h4 style={styles.popupTitle}>আলমদীপাড়া (কেন্দ্রীয় এলাকা)</h4>
                  <p style={styles.popupDesc}>
                    আমাদের প্রিয় আলমদীপাড়া গ্রাম — তথ্য, সেবা ও ঐতিহ্যে একটি আধুনিক ডিজিটাল গ্রাম।
                  </p>
                  <a
                    href="https://maps.app.goo.gl/pZt3kjTtQ2wA2FvN8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.directionsBtn}
                  >
                    <Navigation size={13} />
                    <span>Google Maps এ সরাসরি দেখুন</span>
                    <ExternalLink size={11} style={{ marginLeft: 'auto' }} />
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>

          {/* Map Location Markers */}
          {filteredLocations.map(loc => {
            const isSelected = activeLocationId === loc.id;
            const showNameLabel = currentZoom >= 16;
            const markerIcon = createCustomMarkerIcon(loc.category, isSelected, showNameLabel, loc.name);

            return (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={markerIcon}
                eventHandlers={{
                  click: () => {
                    setMapCenter([loc.lat, loc.lng]);
                    setActiveLocationId(loc.id);
                    if (onSelectLocation) onSelectLocation(loc);
                  }
                }}
              >
                {/* Mobile-Friendly Rich Popup Card */}
                <Popup maxWidth={300} minWidth={260}>
                  <div style={styles.popupCard}>
                    {loc.image && (
                      <div style={styles.popupImageContainer}>
                        <img 
                          src={loc.image} 
                          alt={loc.name} 
                          style={styles.popupImage}
                          loading="lazy"
                        />
                        <span style={{
                          ...styles.popupBadge,
                          backgroundColor: categoryConfig[loc.category]?.color || '#16a34a'
                        }}>
                          {categoryConfig[loc.category]?.label || loc.category}
                        </span>
                      </div>
                    )}
                    
                    <div style={styles.popupContent}>
                      {!loc.image && (
                        <span style={{
                          ...styles.popupBadgeInline,
                          backgroundColor: categoryConfig[loc.category]?.bgLight || '#dcfce7',
                          color: categoryConfig[loc.category]?.color || '#16a34a'
                        }}>
                          {categoryConfig[loc.category]?.label || loc.category}
                        </span>
                      )}

                      <h4 style={styles.popupTitle}>{loc.name}</h4>
                      
                      {loc.description && (
                        <p style={styles.popupDesc}>{loc.description}</p>
                      )}

                      {loc.phone && (
                        <div style={styles.popupPhone}>
                          <Phone size={13} color="#16a34a" />
                          <a href={`tel:${loc.phone}`} style={{ color: '#16a34a', textDecoration: 'none' }}>
                            {loc.phone}
                          </a>
                        </div>
                      )}

                      {/* Google Maps External Directions */}
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.directionsBtn}
                      >
                        <Navigation size={13} />
                        <span>দিকনির্দেশনা (Google Maps)</span>
                        <ExternalLink size={11} style={{ marginLeft: 'auto' }} />
                      </a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* ─── FLOATING MAP ACTION CONTROLS (Google Maps Style) ─── */}
        
        {/* Map Layer Style Control */}
        <div style={styles.layerControlWrapper}>
          <button 
            onClick={() => setShowLayerMenu(!showLayerMenu)} 
            style={{
              ...styles.floatingControlBtn,
              backgroundColor: showLayerMenu ? '#16a34a' : 'rgba(255, 255, 255, 0.95)',
              color: showLayerMenu ? '#ffffff' : '#0f172a'
            }}
            title="ম্যাপ ভিউ পরিবর্তন করুন"
          >
            <Layers size={18} />
          </button>

          {showLayerMenu && (
            <div style={styles.layerMenuDropdown}>
              <div style={styles.layerMenuTitle}>ম্যাপ স্টাইল নির্বাচন:</div>
              {Object.entries(tileProviders).map(([key, provider]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTileKey(key);
                    setShowLayerMenu(false);
                  }}
                  style={{
                    ...styles.layerOptionBtn,
                    backgroundColor: activeTileKey === key ? '#dcfce7' : 'transparent',
                    color: activeTileKey === key ? '#15803d' : 'var(--text-main, #334155)',
                    fontWeight: activeTileKey === key ? '700' : '500'
                  }}
                >
                  <span>{provider.name}</span>
                  {activeTileKey === key && <Check size={14} color="#15803d" />}
                </button>
              ))}

              <div style={{ borderTop: '1px solid var(--border-color, #e2e8f0)', marginTop: '6px', paddingTop: '6px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', cursor: 'pointer', userSelect: 'none' }}>
                  <input
                    type="checkbox"
                    checked={showAgriFields}
                    onChange={(e) => setShowAgriFields(e.target.checked)}
                  />
                  <span>কৃষি মাঠ সীমানা দেখান</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons Right Column */}
        <div style={styles.actionControlsCol}>
          {/* Zoom In */}
          <button 
            onClick={handleZoomIn} 
            style={styles.floatingControlBtn}
            title="জুম ইন (+)"
          >
            <Plus size={18} />
          </button>

          {/* Zoom Out */}
          <button 
            onClick={handleZoomOut} 
            style={styles.floatingControlBtn}
            title="জুম আউট (-)"
          >
            <Minus size={18} />
          </button>

          {/* Compass Orientation */}
          <button 
            onClick={handleResetView} 
            style={styles.floatingControlBtn}
            title="উত্তর দিক ঠিক করুন / কম্পাস"
          >
            <Compass size={18} color="#2563eb" />
          </button>

          {/* Geolocation Locate Me */}
          <button 
            onClick={handleLocateUser} 
            disabled={locatingUser}
            style={styles.floatingControlBtn}
            title="আমার বর্তমান অবস্থান"
          >
            <Locate size={18} color={locatingUser ? '#16a34a' : '#1e293b'} />
          </button>

          {/* Alamdipara Village View Reset */}
          <button 
            onClick={handleResetView} 
            style={{
              ...styles.floatingControlBtn,
              width: 'auto',
              padding: '0 10px',
              gap: '4px',
              fontSize: '0.78rem',
              fontWeight: '700',
              color: '#15803d'
            }}
            title="আলমদীপাড়া ভিউতে ফিরে যান"
          >
            <Home size={15} />
            <span style={{ display: 'inline' }}>আলমদীপাড়া</span>
          </button>

          {/* Fullscreen Viewport Toggle */}
          <button 
            onClick={toggleFullscreen} 
            style={styles.floatingControlBtn}
            title={isFullscreen ? 'ছোট করুন' : 'ফুলস্ক্রিন ম্যাপ'}
          >
            {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
          </button>
        </div>

        {/* Map Legend Overlay Button & Box */}
        <div style={styles.legendWrapper}>
          <button 
            onClick={() => setShowLegend(!showLegend)}
            style={{
              ...styles.legendToggleBtn,
              backgroundColor: showLegend ? '#15803d' : 'rgba(255, 255, 255, 0.95)',
              color: showLegend ? '#ffffff' : '#0f172a'
            }}
          >
            <Info size={14} />
            <span>ম্যাপ নির্দেশিকা</span>
          </button>

          {showLegend && (
            <div style={styles.legendBox}>
              <div style={styles.legendTitle}>স্থানসমূহের ক্যাটাগরি কালার:</div>
              <div style={styles.legendGrid}>
                {Object.entries(categoryConfig).map(([catKey, cfg]) => (
                  <div key={catKey} style={styles.legendItem}>
                    <span style={{ ...styles.legendDot, backgroundColor: cfg.color }}></span>
                    <span>{cfg.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ─── BOTTOM LIST GRID OF VILLAGE LOCATIONS ─── */}
      <div style={styles.cardsGrid}>
        {filteredLocations.map(loc => {
          const cfg = categoryConfig[loc.category] || categoryConfig.other;
          const isSelected = activeLocationId === loc.id;

          return (
            <div 
              key={loc.id}
              onClick={() => {
                setMapCenter([loc.lat, loc.lng]);
                setZoomLevel(17);
                setActiveLocationId(loc.id);
              }}
              style={{
                ...styles.locationCard,
                borderColor: isSelected ? cfg.color : 'var(--border-color, #e2e8f0)',
                backgroundColor: isSelected ? 'var(--bg-elevated, #f8fafc)' : 'var(--card-bg, #ffffff)',
                transform: isSelected ? 'translateY(-2px)' : 'none'
              }}
            >
              {loc.image ? (
                <img src={loc.image} alt={loc.name} style={styles.cardImg} loading="lazy" />
              ) : (
                <div style={{ ...styles.cardIconBox, backgroundColor: cfg.bgLight, color: cfg.color }}>
                  <MapPin size={22} />
                </div>
              )}
              
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.cardTitle}>{loc.name}</div>
                <div style={styles.cardCatBadge}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cfg.color, marginRight: '6px' }}></span>
                  {cfg.label}
                </div>
                <div style={{ ...styles.cardActionText, color: cfg.color }}>
                  ম্যাপে দেখুন →
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// CSS styles matching mobile-first responsive guidelines & design system
const styles = {
  topControlCard: {
    padding: '0.85rem',
    borderRadius: '14px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  searchWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  searchIcon: {
    position: 'absolute',
    left: '0.85rem',
    color: 'var(--text-muted, #64748b)',
    pointerEvents: 'none',
  },
  searchInput: {
    width: '100%',
    padding: '0.65rem 2.4rem 0.65rem 2.6rem',
    borderRadius: '10px',
    border: '1px solid var(--border-color, #cbd5e1)',
    fontSize: '0.9rem',
    outline: 'none',
    backgroundColor: 'var(--bg-input, #ffffff)',
    color: 'var(--text-main, #0f172a)',
    boxSizing: 'border-box',
  },
  clearSearchBtn: {
    position: 'absolute',
    right: '0.85rem',
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionsBox: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '4px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    borderRadius: '10px',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12)',
    zIndex: 99,
    overflow: 'hidden',
  },
  suggestionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    padding: '0.65rem 0.85rem',
    cursor: 'pointer',
    borderBottom: '1px solid var(--border-color, #f1f5f9)',
    transition: 'background-color 0.15s',
  },
  suggestionTitle: {
    fontSize: '0.88rem',
    fontWeight: '600',
    color: 'var(--text-color, #0f172a)',
  },
  suggestionSubtitle: {
    fontSize: '0.75rem',
    color: 'var(--text-muted, #64748b)',
  },
  noSuggestionText: {
    padding: '0.85rem',
    fontSize: '0.85rem',
    color: '#64748b',
    textAlign: 'center',
  },
  chipsRow: {
    display: 'flex',
    gap: '0.45rem',
    overflowX: 'auto',
    paddingBottom: '0.2rem',
    WebkitOverflowScrolling: 'touch',
  },
  chipBtn: {
    padding: '0.4rem 0.85rem',
    borderRadius: '20px',
    fontSize: '0.82rem',
    fontWeight: '600',
    border: '1px solid var(--border-color, #cbd5e1)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    minHeight: '36px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'all 0.2s',
  },
  mapBox: {
    position: 'relative',
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
  },
  layerControlWrapper: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    zIndex: 1000,
  },
  floatingControlBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    color: '#0f172a',
    border: '1px solid rgba(0,0,0,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backdropFilter: 'blur(6px)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.12)',
    transition: 'all 0.2s',
  },
  layerMenuDropdown: {
    position: 'absolute',
    top: '46px',
    right: 0,
    width: '200px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    borderRadius: '12px',
    border: '1px solid var(--border-color, #cbd5e1)',
    boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
    padding: '0.65rem',
    zIndex: 1001,
  },
  layerMenuTitle: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: 'var(--text-muted, #64748b)',
    marginBottom: '6px',
  },
  layerOptionBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.45rem 0.6rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.82rem',
    cursor: 'pointer',
    textAlign: 'left',
    marginBottom: '2px',
  },
  actionControlsCol: {
    position: 'absolute',
    top: '60px',
    right: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    zIndex: 1000,
  },
  legendWrapper: {
    position: 'absolute',
    bottom: '24px',
    right: '12px',
    zIndex: 1000,
  },
  legendToggleBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.12)',
    fontSize: '0.78rem',
    fontWeight: '600',
    cursor: 'pointer',
    backdropFilter: 'blur(6px)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
  },
  legendBox: {
    position: 'absolute',
    bottom: '38px',
    right: 0,
    width: '210px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    borderRadius: '12px',
    padding: '0.75rem',
    boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
    border: '1px solid var(--border-color, #cbd5e1)',
  },
  legendTitle: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: 'var(--text-muted, #334155)',
    marginBottom: '6px',
  },
  legendGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.78rem',
    color: 'var(--text-main, #475569)',
  },
  legendDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
  popupCard: {
    fontFamily: 'inherit',
    margin: '-12px -20px',
    overflow: 'hidden',
    borderRadius: '12px',
  },
  popupImageContainer: {
    position: 'relative',
    width: '100%',
    height: '130px',
  },
  popupImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  popupBadge: {
    position: 'absolute',
    bottom: '8px',
    left: '8px',
    padding: '3px 8px',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '0.72rem',
    fontWeight: '700',
  },
  popupBadgeInline: {
    display: 'inline-block',
    padding: '3px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '700',
    marginBottom: '6px',
  },
  popupContent: {
    padding: '0.85rem',
  },
  popupTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--text-main, #0f172a)',
    margin: '0 0 4px 0',
  },
  popupDesc: {
    fontSize: '0.82rem',
    color: 'var(--text-muted, #475569)',
    lineHeight: '1.4',
    margin: '0 0 8px 0',
  },
  popupPhone: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.8rem',
    color: '#16a34a',
    fontWeight: '600',
    marginBottom: '8px',
  },
  directionsBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    fontSize: '0.78rem',
    fontWeight: '600',
    textDecoration: 'none',
    marginTop: '6px',
    boxShadow: '0 2px 6px rgba(22, 163, 74, 0.3)',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '0.85rem',
  },
  locationCard: {
    padding: '0.85rem',
    borderRadius: '12px',
    border: '1px solid var(--border-color, #e2e8f0)',
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardImg: {
    width: '56px',
    height: '56px',
    borderRadius: '10px',
    objectFit: 'cover',
    flexShrink: 0,
  },
  cardIconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: '0.92rem',
    color: 'var(--text-color, #0f172a)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardCatBadge: {
    fontSize: '0.78rem',
    color: 'var(--text-muted, #64748b)',
    display: 'flex',
    alignItems: 'center',
    margin: '2px 0',
  },
  cardActionText: {
    fontSize: '0.8rem',
    fontWeight: '600',
    marginTop: '2px',
  }
};
