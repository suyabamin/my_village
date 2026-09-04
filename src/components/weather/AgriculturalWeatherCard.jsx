import React from 'react';
import { Sprout, AlertCircle, Droplet, Wind, ShieldCheck } from 'lucide-react';
import { toBengaliNumber } from '../../services/weatherService';

export const AgriculturalWeatherCard = ({ weather }) => {
  if (!weather || !weather.current) return null;

  const { current, daily = [] } = weather;
  const todayRainProb = daily[0]?.rainProb || 0;
  const humidity = current.humidity;
  const windSpeed = current.windSpeed;

  // Generate agricultural advisory based on real weather data
  let irrigationAdvice = "আজ পানির সরবরাহ স্বাভাবিক রয়েছে। নিয়মিত সেচ অব্যাহত রাখুন।";
  if (todayRainProb >= 65) {
    irrigationAdvice = "আজ কৃত্রিম সেচ বন্ধ রাখুন, কারণ ভারী বর্ষণের উচ্চ সম্ভাবনা রয়েছে।";
  } else if (todayRainProb >= 40) {
    irrigationAdvice = "সেচ দেওয়ার আগে আকাশের অবস্থা লক্ষ্য করুন, হালকা বৃষ্টির সম্ভাবনা রয়েছে।";
  } else if (humidity < 60) {
    irrigationAdvice = "বায়ুর আর্দ্রতা কম থাকায় মাটির রস শুকাতে পারে। হালকা সেচ উপযোগী।";
  }

  let sprayAdvice = "কীটনাশক ও বালাইনাশক স্প্রে করার জন্য আবহাওয়া অনুকূল।";
  if (windSpeed > 15) {
    sprayAdvice = "বাতাসের গতিবেগ বেশি থাকায় স্প্রে করা সাময়িক স্থগিত রাখা ভালো।";
  } else if (todayRainProb > 50) {
    sprayAdvice = "বৃষ্টির সম্ভাবনা থাকায় ওষুধ ধুয়ে যেতে পারে, আজ স্প্রে না করাই শ্রেয়।";
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.titleBox}>
          <Sprout size={20} color="#15803d" />
          <h3 style={styles.title}>কৃষি আবহাওয়া নির্দেশিকা</h3>
        </div>
        <span style={styles.badge}>আলমদীপাড়া মাঠসমূহ</span>
      </div>

      <p style={styles.subtitle}>
        লাটিয়াকুড়ি, চড়ে বন্দ ও মাগুড়া বন্দ কৃষি মাঠের চাষীদের জন্য আবহাওয়া নির্ভর তথ্য।
      </p>

      <div style={styles.adviceGrid}>
        {/* Irrigation Plan */}
        <div style={styles.adviceBox}>
          <div style={styles.adviceTitle}>
            <Droplet size={16} color="#2563eb" />
            <span>সেচ ব্যবস্থাপনা</span>
          </div>
          <p style={styles.adviceText}>{irrigationAdvice}</p>
        </div>

        {/* Crop Protection / Spray Window */}
        <div style={styles.adviceBox}>
          <div style={styles.adviceTitle}>
            <ShieldCheck size={16} color="#d97706" />
            <span>ফসল সুরক্ষা ও স্প্রে</span>
          </div>
          <p style={styles.adviceText}>{sprayAdvice}</p>
        </div>
      </div>

      <div style={styles.footerRow}>
        <span>🌧️ বৃষ্টির সম্ভাবনা: <strong>{toBengaliNumber(todayRainProb)}%</strong></span>
        <span>💧 আর্দ্রতা: <strong>{toBengaliNumber(humidity)}%</strong></span>
        <span>💨 বাতাসের গতি: <strong>{toBengaliNumber(windSpeed)} km/h</strong></span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: '1.25rem',
    borderRadius: '16px',
    backgroundColor: 'var(--bg-elevated, #f0fdf4)',
    border: '1px solid var(--border-color, #bbf7d0)',
    boxShadow: '0 4px 12px -2px rgba(21, 128, 61, 0.08)',
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
    gap: '8px',
  },
  title: {
    margin: 0,
    fontSize: '1.05rem',
    fontWeight: '800',
    color: '#15803d',
  },
  badge: {
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '3px 8px',
    borderRadius: '10px',
    backgroundColor: '#dcfce7',
    color: '#16a34a',
  },
  subtitle: {
    margin: 0,
    fontSize: '0.82rem',
    color: 'var(--text-muted, #475569)',
    lineHeight: '1.4',
  },
  adviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '0.75rem',
  },
  adviceBox: {
    padding: '0.75rem',
    borderRadius: '12px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #dcfce7)',
  },
  adviceTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.88rem',
    fontWeight: '700',
    color: 'var(--text-main, #0f172a)',
    marginBottom: '4px',
  },
  adviceText: {
    margin: 0,
    fontSize: '0.82rem',
    color: 'var(--text-muted, #475569)',
    lineHeight: '1.45',
  },
  footerRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    fontSize: '0.78rem',
    color: 'var(--text-color, #1e293b)',
    paddingTop: '0.5rem',
    borderTop: '1px solid var(--border-color, #dcfce7)',
  }
};
