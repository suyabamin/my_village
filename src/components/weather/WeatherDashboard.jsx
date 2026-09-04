import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, MapPin, AlertTriangle, CloudOff, ExternalLink, CheckCircle } from 'lucide-react';
import { fetchVillageWeather, FIXED_WEATHER_LOCATION } from '../../services/weatherService';
import { CurrentWeatherCard } from './CurrentWeatherCard';
import { HourlyForecastRow } from './HourlyForecastRow';
import { DailyForecastList } from './DailyForecastList';
import { WeatherTrendChart } from './WeatherTrendChart';
import { AgriculturalWeatherCard } from './AgriculturalWeatherCard';
import { AirQualityCard } from './AirQualityCard';

export const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather data
  const loadWeather = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    else setLoading(true);

    setError(null);

    try {
      const data = await fetchVillageWeather(isManual);
      setWeatherData(data);
    } catch (err) {
      console.error("Failed to load weather data:", err);
      setError("আবহাওয়ার তথ্য লোড করতে সমস্যা হয়েছে। ইন্টারনেট সংযোগ পরীক্ষা করে পুনরায় চেষ্টা করুন।");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Initial load & 15-minute auto-refresh timer
  useEffect(() => {
    loadWeather(false);

    const intervalId = setInterval(() => {
      loadWeather(true);
    }, 15 * 60 * 1000); // 15 minutes auto-refresh

    return () => clearInterval(intervalId);
  }, [loadWeather]);

  return (
    <div style={styles.dashboardContainer}>
      {/* Top Header Card */}
      <div style={styles.topBar}>
        <div>
          <div style={styles.locationHeader}>
            <MapPin size={18} color="#16a34a" />
            <h1 style={styles.locationTitle}>{FIXED_WEATHER_LOCATION.name} ডিজিটাল আবহাওয়া সেন্টার</h1>
          </div>
          <p style={styles.locationDesc}>
            {FIXED_WEATHER_LOCATION.fullName} (স্থায়ী অবস্থান: ২৪.৩৯৭১° N, ৯০.৮৫৮২° E)
          </p>
        </div>

        <div style={styles.actionGroup}>
          {weatherData && (
            <span style={styles.updateTime}>
              সর্বশেষ আপডেট: {weatherData.updatedAtFormatted}
            </span>
          )}

          <button
            onClick={() => loadWeather(true)}
            disabled={refreshing || loading}
            style={styles.refreshBtn}
            title="আবহাওয়া আপডেট করুন"
          >
            <RefreshCw size={15} style={{ animation: refreshing ? 'spin 1s linear infinite' : 'none' }} />
            <span>{refreshing ? 'আপডেট হচ্ছে...' : 'আপডেট'}</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseSkeleton {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>

      {/* Offline / Cached Data Notice if applicable */}
      {weatherData?.isFromCache && (
        <div style={styles.cacheNotice}>
          <CheckCircle size={15} color="#059669" />
          <span>সংরক্ষিত আবহাওয়া তথ্য প্রদর্শিত হচ্ছে।</span>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && !weatherData && (
        <div style={styles.loadingSkeletonBox}>
          <div style={styles.skeletonItem} />
          <div style={{ ...styles.skeletonItem, height: '140px' }} />
          <div style={{ ...styles.skeletonItem, height: '220px' }} />
        </div>
      )}

      {/* Error Message Display */}
      {error && !weatherData && (
        <div style={styles.errorBox}>
          <CloudOff size={36} color="#dc2626" />
          <h3 style={styles.errorTitle}>আবহাওয়া তথ্য পাওয়া যায়নি</h3>
          <p style={styles.errorDesc}>{error}</p>
          <button onClick={() => loadWeather(true)} style={styles.retryBtn}>
            পুনরায় চেষ্টা করুন
          </button>
        </div>
      )}

      {/* Main Weather App Dashboard Sections */}
      {weatherData && (
        <div style={styles.contentGrid}>
          {/* Top Row: Current Weather & Agricultural Advisory */}
          <div style={styles.rowTwoCol}>
            <CurrentWeatherCard weather={weatherData} />
            <AgriculturalWeatherCard weather={weatherData} />
          </div>

          {/* Hourly 24-Hour Forecast */}
          <HourlyForecastRow hourly={weatherData.hourly} />

          {/* Hourly Temperature & Rain Trend Chart */}
          <WeatherTrendChart hourly={weatherData.hourly} />

          {/* Daily 7-Day Forecast & Air Quality */}
          <div style={styles.rowTwoCol}>
            <DailyForecastList daily={weatherData.daily} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <AirQualityCard airQuality={weatherData.airQuality} />
              
              {/* Google Maps Fixed Location Reference Link Card */}
              <div style={styles.locationLinkCard}>
                <h4 style={styles.linkTitle}>📍 আবহাওয়ার অবস্থান নির্দেশিকা</h4>
                <p style={styles.linkDesc}>
                  এই আবহাওয়া ব্যবস্থাটি Google Maps এর নির্দিষ্ট আলমদীপাড়া গ্রামের স্থানাঙ্কে স্থায়ীভাবে সংযোজিত।
                </p>
                <a
                  href={FIXED_WEATHER_LOCATION.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.mapLinkBtn}
                >
                  <span>Google Maps এ গ্রামের অবস্থান দেখুন</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    width: '100%',
  },
  topBar: {
    padding: '1.25rem',
    borderRadius: '16px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  locationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  locationTitle: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--text-main, #0f172a)',
  },
  locationDesc: {
    margin: '4px 0 0 0',
    fontSize: '0.82rem',
    color: 'var(--text-muted, #64748b)',
  },
  actionGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    flexWrap: 'wrap',
  },
  updateTime: {
    fontSize: '0.78rem',
    color: 'var(--text-muted, #64748b)',
    fontWeight: '600',
  },
  refreshBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.55rem 1rem',
    borderRadius: '10px',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    border: 'none',
    fontSize: '0.85rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(22, 163, 74, 0.3)',
    transition: 'all 0.2s',
  },
  cacheNotice: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0.65rem 1rem',
    borderRadius: '10px',
    backgroundColor: '#ecfdf5',
    border: '1px solid #a7f3d0',
    color: '#047857',
    fontSize: '0.82rem',
    fontWeight: '600',
  },
  loadingSkeletonBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  skeletonItem: {
    height: '180px',
    borderRadius: '16px',
    backgroundColor: 'var(--bg-elevated, #f1f5f9)',
    animation: 'pulseSkeleton 1.5s infinite ease-in-out',
  },
  errorBox: {
    padding: '2.5rem 1.5rem',
    borderRadius: '16px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #fee2e2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.75rem',
  },
  errorTitle: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#dc2626',
  },
  errorDesc: {
    margin: 0,
    fontSize: '0.85rem',
    color: 'var(--text-muted, #64748b)',
    maxWidth: '400px',
  },
  retryBtn: {
    padding: '0.5rem 1.25rem',
    borderRadius: '8px',
    backgroundColor: '#dc2626',
    color: '#ffffff',
    border: 'none',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  rowTwoCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.25rem',
  },
  locationLinkCard: {
    padding: '1.25rem',
    borderRadius: '16px',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
  },
  linkTitle: {
    margin: 0,
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--text-main, #0f172a)',
  },
  linkDesc: {
    margin: 0,
    fontSize: '0.82rem',
    color: 'var(--text-muted, #64748b)',
    lineHeight: '1.45',
  },
  mapLinkBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.55rem 0.85rem',
    borderRadius: '8px',
    backgroundColor: 'var(--bg-elevated, #f8fafc)',
    color: '#16a34a',
    border: '1px solid var(--border-color, #cbd5e1)',
    fontSize: '0.82rem',
    fontWeight: '700',
    textDecoration: 'none',
    marginTop: '4px',
  }
};
