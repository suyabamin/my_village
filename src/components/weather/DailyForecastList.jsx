import React from 'react';
import { Calendar, CloudRain, Sunrise, Sunset } from 'lucide-react';
import { toBengaliNumber } from '../../services/weatherService';

export const DailyForecastList = ({ daily = [] }) => {
  if (!daily || daily.length === 0) return null;

  // Find min and max temp across 7 days for range bar scaling
  const allMax = Math.max(...daily.map(d => d.maxTemp));
  const allMin = Math.min(...daily.map(d => d.minTemp));
  const tempRange = allMax - allMin || 10;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Calendar size={16} color="#16a34a" />
        <h3 style={styles.title}>আগামী ৭ দিনের আবহাওয়া পূর্বাভাসের বিবরণ</h3>
      </div>

      <div style={styles.dailyList}>
        {daily.map((item, idx) => {
          // Calculate percentage width for visual temperature bar
          const leftPercent = Math.max(0, Math.min(100, ((item.minTemp - allMin) / tempRange) * 100));
          const widthPercent = Math.max(15, Math.min(100 - leftPercent, ((item.maxTemp - item.minTemp) / tempRange) * 100));

          return (
            <div key={idx} style={styles.dayRow}>
              {/* Day Name */}
              <div style={styles.dayCol}>
                <span style={styles.dayName}>{item.dayName}</span>
                <span style={styles.conditionText}>{item.condition}</span>
              </div>

              {/* Weather Icon & Rain Prob */}
              <div style={styles.iconCol}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                {item.rainProb > 20 && (
                  <span style={styles.rainPill}>
                    <CloudRain size={10} color="#2563eb" />
                    {toBengaliNumber(item.rainProb)}%
                  </span>
                )}
              </div>

              {/* Temperature Bar & Range */}
              <div style={styles.tempRangeCol}>
                <span style={styles.minTemp}>{toBengaliNumber(item.minTemp)}°</span>
                
                <div style={styles.barTrack}>
                  <div 
                    style={{
                      ...styles.barFill,
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`
                    }}
                  />
                </div>

                <span style={styles.maxTemp}>{toBengaliNumber(item.maxTemp)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '1.25rem',
    borderRadius: '16px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  title: {
    margin: 0,
    fontSize: '0.98rem',
    fontWeight: '700',
    color: 'var(--text-main, #0f172a)',
  },
  dailyList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  dayRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.65rem 0.85rem',
    borderRadius: '12px',
    backgroundColor: 'var(--bg-elevated, #f8fafc)',
    border: '1px solid var(--border-color, #f1f5f9)',
    gap: '0.5rem',
    flexWrap: 'nowrap',
  },
  dayCol: {
    width: '90px',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
  },
  dayName: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: 'var(--text-main, #0f172a)',
  },
  conditionText: {
    fontSize: '0.72rem',
    color: 'var(--text-muted, #64748b)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  iconCol: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    width: '70px',
    flexShrink: 0,
  },
  rainPill: {
    fontSize: '0.68rem',
    fontWeight: '700',
    color: '#2563eb',
    backgroundColor: '#dbeafe',
    padding: '2px 5px',
    borderRadius: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
  },
  tempRangeCol: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    maxWidth: '220px',
  },
  minTemp: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-muted, #64748b)',
    width: '28px',
    textAlign: 'right',
  },
  maxTemp: {
    fontSize: '0.88rem',
    fontWeight: '800',
    color: 'var(--text-main, #0f172a)',
    width: '28px',
    textAlign: 'left',
  },
  barTrack: {
    flex: 1,
    height: '6px',
    borderRadius: '3px',
    backgroundColor: 'var(--border-color, #e2e8f0)',
    position: 'relative',
    overflow: 'hidden',
  },
  barFill: {
    position: 'absolute',
    height: '100%',
    borderRadius: '3px',
    background: 'linear-gradient(90deg, #3b82f6, #f59e0b, #ef4444)',
  }
};
