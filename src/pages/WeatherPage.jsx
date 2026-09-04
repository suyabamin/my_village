import React from 'react';
import { WeatherDashboard } from '../components/weather/WeatherDashboard';

export const WeatherPage = () => {
  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      <WeatherDashboard />
    </div>
  );
};

export default WeatherPage;
