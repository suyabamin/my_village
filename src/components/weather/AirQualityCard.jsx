import React from 'react';
import { Wind, ShieldAlert, HeartPulse } from 'lucide-react';
import { toBengaliNumber } from '../../services/weatherService';

export const AirQualityCard = ({ airQuality }) => {
  if (!airQuality) return null;

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.titleBox}>
          <Wind size={18} color="#059669" />
          <h3 style={styles.title}>বায়ুর মান ও পরিবেশ (Air Quality)</h3>
        </div>
        <span style={{
          ...styles.statusBadge,
          backgroundColor: airQuality.bg,
          color: airQuality.color
        }}>
          {airQuality.status}
        </span>
      </div>

      <div style={styles.bodyRow}>
        <div style={styles.aqiBox}>
          <div style={styles.aqiNum}>{toBengaliNumber(airQuality.aqi)}</div>
          <div style={styles.aqiLabel}>AQI ইনডেক্স</div>
        </div>

        <div style={styles.detailsCol}>
          <div style={styles.adviceRow}>
            <HeartPulse size={16} color={airQuality.color} />
            <span style={styles.adviceText}>{airQuality.advice}</span>
          </div>

          <div style={styles.pollutantsRow}>
            {airQuality.pm25 && (
              <div style={styles.pollutantPill}>
                <span>PM 2.5:</span>
                <strong>{toBengaliNumber(airQuality.pm25)} µg/m³</strong>
              </div>
            )}
            {airQuality.pm10 && (
              <div style={styles.pollutantPill}>
                <span>PM 10:</span>
                <strong>{toBengaliNumber(airQuality.pm10)} µg/m³</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: '1.25rem',
    borderRadius: '16px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBox: {
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
  statusBadge: {
    fontSize: '0.78rem',
    fontWeight: '700',
    padding: '3px 10px',
    borderRadius: '12px',
  },
  bodyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  aqiBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.25rem',
    borderRadius: '14px',
    backgroundColor: 'var(--bg-elevated, #f8fafc)',
    border: '1px solid var(--border-color, #e2e8f0)',
    minWidth: '90px',
  },
  aqiNum: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'var(--text-main, #0f172a)',
    lineHeight: 1,
  },
  aqiLabel: {
    fontSize: '0.7rem',
    color: 'var(--text-muted, #64748b)',
    fontWeight: '600',
    marginTop: '4px',
  },
  detailsCol: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    minWidth: '200px',
  },
  adviceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  adviceText: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-main, #0f172a)',
  },
  pollutantsRow: {
    display: 'flex',
    gap: '0.65rem',
    flexWrap: 'wrap',
  },
  pollutantPill: {
    fontSize: '0.78rem',
    padding: '4px 10px',
    borderRadius: '8px',
    backgroundColor: 'var(--bg-elevated, #f1f5f9)',
    color: 'var(--text-muted, #475569)',
    display: 'flex',
    gap: '4px',
  }
};
