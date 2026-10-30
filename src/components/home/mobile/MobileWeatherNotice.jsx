import React from 'react';
import { Link } from 'react-router-dom';
import { CloudSun, Sprout, ArrowRight, AlertCircle } from 'lucide-react';
import { toBengaliNumber } from '../../../services/weatherService';

export const MobileWeatherNotice = ({ weatherData, urgentNotices = [] }) => {
  const currentTemp = weatherData?.current?.temp !== undefined 
    ? toBengaliNumber(weatherData.current.temp) 
    : '২৮';

  const currentCondition = weatherData?.current?.condition || 'আংশিক মেঘলা';
  const humidityVal = weatherData?.current?.humidity !== undefined 
    ? toBengaliNumber(weatherData.current.humidity) 
    : '৭২';
  const windVal = weatherData?.current?.windSpeed !== undefined 
    ? toBengaliNumber(weatherData.current.windSpeed) 
    : '১২';

  const agriTip = weatherData?.advisory?.tips?.[0] || 'মাঠের ফসল সুরক্ষায় নিয়মিত পরিদর্শন করুন ও পরিমিত সেচ বজায় রাখুন।';

  return (
    <div className="mobile-additional-sections">
      {/* 1. Mobile Weather & Agri Tip Card */}
      <div className="mobile-info-card">
        <div className="mobile-section-header" style={{ marginBottom: '10px' }}>
          <div className="mobile-section-title">
            <CloudSun size={17} color="#0b6132" /> আজকের আবহাওয়া
          </div>
          <Link to="/weather" className="mobile-view-all-btn">
            পূর্বাভাস <ArrowRight size={13} />
          </Link>
        </div>

        <div className="mobile-weather-row">
          <div className="mobile-weather-temp">
            <CloudSun size={36} color="#f59e0b" />
            <div>
              <h2>{currentTemp}°C</h2>
              <p>{currentCondition}</p>
            </div>
          </div>

          <div className="mobile-weather-metrics">
            <div>
              <span>আর্দ্রতা</span>
              <strong>{humidityVal}%</strong>
            </div>
            <div>
              <span>বাতাস</span>
              <strong>{windVal} কিমি</strong>
            </div>
          </div>
        </div>

        <div className="mobile-agri-tip">
          <Sprout size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>কৃষি পরামর্শ:</strong> {agriTip}
          </div>
        </div>
      </div>

      {/* 2. Urgent Notices Quick List (if available) */}
      {urgentNotices.length > 0 && (
        <div className="mobile-info-card" style={{ padding: '12px 14px' }}>
          <div className="mobile-section-header" style={{ marginBottom: '8px' }}>
            <div className="mobile-section-title" style={{ color: '#b91c1c' }}>
              <AlertCircle size={16} color="#ef4444" /> জরুরি বিজ্ঞপ্তি
            </div>
            <Link to="/emergency" style={{ fontSize: '11.5px', color: '#b91c1c', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '3px' }}>
              সকল সভা <ArrowRight size={12} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {urgentNotices.slice(0, 2).map((notice) => (
              <Link
                key={notice.id}
                to={notice.link || '/emergency'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 9px',
                  backgroundColor: '#fef2f2',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  border: '1px solid #fee2e2'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#991b1b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {notice.title}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#7f1d1d' }}>
                    {notice.time}
                  </div>
                </div>
                <ArrowRight size={13} color="#ef4444" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileWeatherNotice;
