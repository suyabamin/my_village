import React from 'react';
import { CloudRain, Clock } from 'lucide-react';
import { toBengaliNumber } from '../../services/weatherService';

export const HourlyForecastRow = ({ hourly = [] }) => {
  if (!hourly || hourly.length === 0) return null;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={16} color="#16a34a" />
          <h3 style={styles.title}>ঘণ্টাভিত্তিক পূর্বাভাস (২৪ ঘণ্টা)</h3>
        </div>
        <span style={styles.subtext}>ডানে-বামে স্ক্রোল করুন →</span>
      </div>

      <div style={styles.scrollRow}>
        {hourly.map((item, idx) => (
          <div key={idx} style={styles.hourCard}>
            <div style={styles.timeText}>{item.timeFormatted}</div>
            <div style={styles.icon}>{item.icon}</div>
            <div style={styles.tempText}>{toBengaliNumber(item.temp)}°C</div>
            
            {item.rainProb > 0 ? (
              <div style={styles.rainBadge}>
                <CloudRain size={10} color="#2563eb" />
                <span>{toBengaliNumber(item.rainProb)}%</span>
              </div>
            ) : (
              <div style={styles.noRainText}>বৃষ্টি নেই</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem 1.25rem',
    borderRadius: '16px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '0.98rem',
    fontWeight: '700',
    color: 'var(--text-main, #0f172a)',
  },
  subtext: {
    fontSize: '0.75rem',
    color: 'var(--text-muted, #64748b)',
  },
  scrollRow: {
    display: 'flex',
    gap: '0.65rem',
    overflowX: 'auto',
    paddingBottom: '0.4rem',
    WebkitOverflowScrolling: 'touch',
  },
  hourCard: {
    minWidth: '76px',
    padding: '0.75rem 0.5rem',
    borderRadius: '12px',
    backgroundColor: 'var(--bg-elevated, #f8fafc)',
    border: '1px solid var(--border-color, #e2e8f0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    flexShrink: 0,
    transition: 'all 0.2s',
  },
  timeText: {
    fontSize: '0.72rem',
    fontWeight: '600',
    color: 'var(--text-muted, #64748b)',
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: '1.6rem',
    lineHeight: 1,
    margin: '2px 0',
  },
  tempText: {
    fontSize: '0.92rem',
    fontWeight: '800',
    color: 'var(--text-main, #0f172a)',
  },
  rainBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#2563eb',
    backgroundColor: '#dbeafe',
    padding: '2px 6px',
    borderRadius: '10px',
    marginTop: '2px',
  },
  noRainText: {
    fontSize: '0.68rem',
    color: '#94a3b8',
    marginTop: '2px',
  }
};
