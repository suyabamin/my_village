import React from 'react';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Gauge, 
  Sun, 
  CloudRain, 
  Sunset, 
  Sunrise,
  Navigation,
  Cloud
} from 'lucide-react';
import { toBengaliNumber, getUvRiskLevel } from '../../services/weatherService';

export const CurrentWeatherCard = ({ weather }) => {
  if (!weather || !weather.current) return null;

  const { current, location } = weather;
  const uvRisk = getUvRiskLevel(current.uvIndex);

  return (
    <div style={styles.cardContainer}>
      {/* Background Subtle Ambient Backdrop Styling */}
      <div style={styles.ambientGlow} />

      {/* Top Header Row */}
      <div style={styles.topHeader}>
        <div>
          <div style={styles.locationBadge}>
            <Navigation size={13} color="#16a34a" />
            <span>{location.name} (স্থায়ী অবস্থান)</span>
          </div>
          <h2 style={styles.mainHeading}>বর্তমান আবহাওয়া</h2>
        </div>
        
        {current.todayMaxTemp !== undefined && (
          <div style={styles.tempRangePill}>
            <span style={{ color: '#ef4444' }}>↑ {toBengaliNumber(current.todayMaxTemp)}°C</span>
            <span style={{ color: '#3b82f6', marginLeft: '6px' }}>↓ {toBengaliNumber(current.todayMinTemp)}°C</span>
          </div>
        )}
      </div>

      {/* Main Temperature & Weather Icon Display */}
      <div style={styles.heroSection}>
        <div style={styles.iconBox}>
          <span style={{ fontSize: '3.8rem', lineHeight: 1 }}>{current.icon}</span>
        </div>

        <div style={styles.tempDisplayCol}>
          <div style={styles.tempRow}>
            <span style={styles.tempNum}>{toBengaliNumber(current.temp)}</span>
            <span style={styles.tempUnit}>°C</span>
          </div>
          <div style={styles.conditionText}>{current.condition}</div>
          <div style={styles.feelsLikeText}>
            অনুভূত হচ্ছে <strong>{toBengaliNumber(current.feelsLike)}°C</strong>
          </div>
        </div>
      </div>

      {/* Quick Key Weather Stats Grid */}
      <div style={styles.statsGrid}>
        {/* Humidity */}
        <div style={styles.statCard}>
          <Droplets size={18} color="#2563eb" />
          <div>
            <div style={styles.statLabel}>আর্দ্রতা</div>
            <div style={styles.statVal}>{toBengaliNumber(current.humidity)}%</div>
          </div>
        </div>

        {/* Wind Speed & Direction */}
        <div style={styles.statCard}>
          <Wind size={18} color="#059669" />
          <div>
            <div style={styles.statLabel}>বাতাস ({current.windDir})</div>
            <div style={styles.statVal}>
              {toBengaliNumber(current.windSpeed)} km/h
              {current.windGusts && (
                <span style={styles.gustText}> (ঝাপটা {toBengaliNumber(current.windGusts)})</span>
              )}
            </div>
          </div>
        </div>

        {/* Atmospheric Pressure */}
        <div style={styles.statCard}>
          <Gauge size={18} color="#7c3aed" />
          <div>
            <div style={styles.statLabel}>বায়ুর চাপ</div>
            <div style={styles.statVal}>{toBengaliNumber(current.pressure)} hPa</div>
          </div>
        </div>

        {/* Cloud Cover */}
        <div style={styles.statCard}>
          <Cloud size={18} color="#0284c7" />
          <div>
            <div style={styles.statLabel}>মেঘের ঘনত্ব</div>
            <div style={styles.statVal}>{toBengaliNumber(current.cloudCover)}%</div>
          </div>
        </div>

        {/* UV Index */}
        <div style={styles.statCard}>
          <Sun size={18} color={uvRisk.color} />
          <div>
            <div style={styles.statLabel}>UV ইনডেক্স</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={styles.statVal}>{toBengaliNumber(current.uvIndex)}</span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                padding: '1px 6px',
                borderRadius: '8px',
                backgroundColor: uvRisk.bg,
                color: uvRisk.color
              }}>
                {uvRisk.level}
              </span>
            </div>
          </div>
        </div>

        {/* Sunrise & Sunset */}
        <div style={styles.statCard}>
          <div style={{ display: 'flex', gap: '4px' }}>
            <Sunrise size={16} color="#d97706" />
            <Sunset size={16} color="#ea580c" />
          </div>
          <div>
            <div style={styles.statLabel}>সূর্যোদয় / সূর্যাস্ত</div>
            <div style={styles.statValSub}>
              🌅 {current.sunrise} • 🌇 {current.sunset}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    position: 'relative',
    padding: '1.25rem',
    borderRadius: '16px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  ambientGlow: {
    position: 'absolute',
    top: '-40px',
    right: '-40px',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, rgba(255,255,255,0) 70%)',
    pointerEvents: 'none',
  },
  topHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  locationBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '3px 10px',
    borderRadius: '20px',
    backgroundColor: 'var(--bg-elevated, #f0fdf4)',
    color: '#15803d',
    fontSize: '0.78rem',
    fontWeight: '700',
    marginBottom: '4px',
  },
  mainHeading: {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: '800',
    color: 'var(--text-main, #0f172a)',
  },
  tempRangePill: {
    fontSize: '0.85rem',
    fontWeight: '700',
    backgroundColor: 'var(--bg-elevated, #f8fafc)',
    padding: '4px 10px',
    borderRadius: '12px',
    border: '1px solid var(--border-color, #cbd5e1)',
  },
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    padding: '0.5rem 0',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempDisplayCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  tempRow: {
    display: 'flex',
    alignItems: 'flex-start',
    lineHeight: 1,
  },
  tempNum: {
    fontSize: '3.2rem',
    fontWeight: '800',
    color: 'var(--text-main, #0f172a)',
    letterSpacing: '-1px',
  },
  tempUnit: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-muted, #64748b)',
    marginLeft: '2px',
    marginTop: '4px',
  },
  conditionText: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-color, #1e293b)',
    marginTop: '4px',
  },
  feelsLikeText: {
    fontSize: '0.85rem',
    color: 'var(--text-muted, #64748b)',
    marginTop: '2px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '0.65rem',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.65rem 0.75rem',
    borderRadius: '12px',
    backgroundColor: 'var(--bg-elevated, #f8fafc)',
    border: '1px solid var(--border-color, #e2e8f0)',
  },
  statLabel: {
    fontSize: '0.72rem',
    color: 'var(--text-muted, #64748b)',
    fontWeight: '600',
  },
  statVal: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: 'var(--text-main, #0f172a)',
  },
  statValSub: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--text-main, #0f172a)',
  },
  gustText: {
    fontSize: '0.7rem',
    color: '#d97706',
    fontWeight: '600'
  }
};
