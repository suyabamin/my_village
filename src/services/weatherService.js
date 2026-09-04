/**
 * Isolated Weather Service for Alamdipara Digital Village
 * Location Locked: https://maps.app.goo.gl/nYTwz1EhnHwSTSkg6
 * Latitude: 24.397121, Longitude: 90.858264
 * 
 * Strict Fetcher Protection: This service is completely self-contained.
 * Zero modifications to existing project/Firebase fetchers.
 */

export const FIXED_WEATHER_LOCATION = {
  name: "আলমদীপাড়া",
  fullName: "আলমদীপাড়া গ্রাম, বাংলাদেশ",
  lat: 24.397121,
  lng: 90.858264,
  mapUrl: "https://maps.app.goo.gl/nYTwz1EhnHwSTSkg6"
};

const CACHE_KEY = "alamdipara_weather_cache_v1";
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache

// Convert English numbers to Bengali numerals
export const toBengaliNumber = (num) => {
  if (num === undefined || num === null || isNaN(num)) return '0';
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (digit) => banglaDigits[parseInt(digit, 10)]);
};

// Map WMO Weather Codes to Bengali Condition, Icon & Visual Theme
export const getWmoWeatherInfo = (code, isDay = 1) => {
  switch (code) {
    case 0:
      return {
        label: isDay ? 'পরিষ্কার আকাশ' : 'পরিষ্কার রাত',
        icon: isDay ? '☀️' : '🌙',
        theme: 'clear',
        desc: 'আকাশ একদম পরিষ্কার ও উজ্জ্বল'
      };
    case 1:
      return {
        label: 'প্রায় পরিষ্কার',
        icon: isDay ? '🌤️' : '🌙',
        theme: 'clear',
        desc: 'সামান্য হালকা মেঘের আভাস'
      };
    case 2:
      return {
        label: 'আংশিক মেঘলা',
        icon: isDay ? '⛅' : '☁️',
        theme: 'cloudy',
        desc: 'আকাশের কিছু অংশে মেঘ বিদ্যমান'
      };
    case 3:
      return {
        label: 'মেঘলা আকাশ',
        icon: '☁️',
        theme: 'cloudy',
        desc: 'আকাশ মেঘাচ্ছন্ন'
      };
    case 45:
    case 48:
      return {
        label: 'ঘন কুয়াশা',
        icon: '🌫️',
        theme: 'fog',
        desc: 'দৃষ্টিসীমা কম, সাবধানে চলাচল করুন'
      };
    case 51:
    case 53:
    case 55:
      return {
        label: 'হালকা গুঁড়ি গুঁড়ি বৃষ্টি',
        icon: '🌦️',
        theme: 'rain',
        desc: 'হালকা রিমঝিম বর্ষণ'
      };
    case 56:
    case 57:
      return {
        label: 'শীতল হিমেল বৃষ্টি',
        icon: '🌧️',
        theme: 'rain',
        desc: 'ঠান্ডা গুঁড়ি গুঁড়ি বৃষ্টি'
      };
    case 61:
    case 63:
      return {
        label: 'বৃষ্টিপাত',
        icon: '🌧️',
        theme: 'rain',
        desc: 'নিয়মিত মাঝারি বৃষ্টিপাত'
      };
    case 65:
      return {
        label: 'মুষলধারে ভারী বৃষ্টি',
        icon: '🌧️',
        theme: 'heavy-rain',
        desc: 'প্রবল বর্ষণ চলছে'
      };
    case 80:
    case 81:
    case 82:
      return {
        label: 'ঝটিকা বৃষ্টিপাত',
        icon: '🌧️',
        theme: 'rain',
        desc: 'সাময়িক ভারী বৃষ্টি'
      };
    case 95:
      return {
        label: 'বজ্রসহ বৃষ্টিপাত',
        icon: '⛈️',
        theme: 'thunderstorm',
        desc: 'বজ্রপাত ও বৃষ্টির সম্ভাবনা'
      };
    case 96:
    case 99:
      return {
        label: 'বজ্রপাত ও শিলাবৃষ্টি',
        icon: '⛈️',
        theme: 'thunderstorm',
        desc: 'বজ্রসহ শিলাবৃষ্টির সতর্কতা'
      };
    default:
      return {
        label: 'মেঘলা পরিবেশ',
        icon: '🌤️',
        theme: 'cloudy',
        desc: 'স্বাভাবিক গ্রামীণ আবহাওয়া'
      };
  }
};

// Wind direction degrees to Bengali compass text
export const getWindDirectionBengali = (deg) => {
  if (deg === undefined || deg === null) return 'দক্ষিণ-পশ্চিম';
  if (deg >= 337.5 || deg < 22.5) return 'উত্তর';
  if (deg >= 22.5 && deg < 67.5) return 'উত্তর-পূর্ব';
  if (deg >= 67.5 && deg < 112.5) return 'পূর্ব';
  if (deg >= 112.5 && deg < 157.5) return 'দক্ষিণ-পূর্ব';
  if (deg >= 157.5 && deg < 202.5) return 'দক্ষিণ';
  if (deg >= 202.5 && deg < 247.5) return 'দক্ষিণ-পশ্চিম';
  if (deg >= 247.5 && deg < 292.5) return 'পশ্চিম';
  if (deg >= 292.5 && deg < 337.5) return 'উত্তর-পশ্চিম';
  return 'দক্ষিণ-পশ্চিম';
};

// UV Index risk text in Bengali
export const getUvRiskLevel = (uv) => {
  if (uv <= 2) return { level: 'কম', color: '#16a34a', bg: '#dcfce7' };
  if (uv <= 5) return { level: 'মাঝারি', color: '#d97706', bg: '#fef3c7' };
  if (uv <= 7) return { level: 'উচ্চ', color: '#ea580c', bg: '#ffedd5' };
  if (uv <= 10) return { level: 'খুব উচ্চ', color: '#dc2626', bg: '#fee2e2' };
  return { level: 'অত্যন্ত উচ্চ', color: '#7c3aed', bg: '#f3e8ff' };
};

// European Air Quality Index (AQI) description in Bengali
export const getAqiDescription = (aqi) => {
  if (!aqi || aqi <= 20) return { status: 'খুব ভালো', color: '#16a34a', bg: '#dcfce7', advice: 'বাতাস সতেজ ও বিশুদ্ধ' };
  if (aqi <= 40) return { status: 'ভালো', color: '#22c55e', bg: '#f0fdf4', advice: 'ঘরের বাইরে চলাচলে সুবিধা' };
  if (aqi <= 60) return { status: 'মাঝারি', color: '#d97706', bg: '#fef3c7', advice: 'সংবেদনশীল মানুষের সচেতন থাকা ভালো' };
  if (aqi <= 80) return { status: 'অস্বাস্থ্যকর (আংশিক)', color: '#ea580c', bg: '#ffedd5', advice: 'মাস্ক ব্যবহার উপযোগী' };
  if (aqi <= 100) return { status: 'খুব অস্বাস্থ্যকর', color: '#dc2626', bg: '#fee2e2', advice: 'বাইরে অতিরিক্ত ব্যায়াম পরিহার করুন' };
  return { status: 'বিপজ্জনক', color: '#7c3aed', bg: '#f3e8ff', advice: 'জরুরি প্রয়োজন ছাড়া ঘরের বাইরে যাবেন না' };
};

// Format timestamp to Bengali Time string (e.g. "সকাল ০৬:৩০" or "১১:৪৫ PM")
export const formatTimeBengali = (timeStr) => {
  if (!timeStr) return '';
  const date = new Date(timeStr);
  if (isNaN(date.getTime())) return timeStr;

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const minFormatted = minutes < 10 ? `০${minutes}` : toBengaliNumber(minutes);
  return `${toBengaliNumber(hours)}:${minFormatted} ${ampm}`;
};

// Main Fetcher Function: Weather + Air Quality Data for Alamdipara
export const fetchVillageWeather = async (forceRefresh = false) => {
  // Check Local Cache if not forcing refresh
  if (!forceRefresh) {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return { ...parsed.data, isFromCache: true };
        }
      }
    } catch (e) {
      console.warn("Weather cache read error:", e);
    }
  }

  const { lat, lng } = FIXED_WEATHER_LOCATION;

  // Forecast API URL
  const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max&timezone=Asia%2FDhaka`;

  // Air Quality API URL
  const aqUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=european_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone&timezone=Asia%2FDhaka`;

  try {
    const [forecastRes, aqRes] = await Promise.allSettled([
      fetch(forecastUrl),
      fetch(aqUrl)
    ]);

    if (forecastRes.status !== 'fulfilled' || !forecastRes.value.ok) {
      throw new Error('Weather API request failed');
    }

    const forecastData = await forecastRes.value.json();
    let aqData = null;

    if (aqRes.status === 'fulfilled' && aqRes.value.ok) {
      try {
        aqData = await aqRes.value.json();
      } catch (err) {
        console.warn("AQI parse warning:", err);
      }
    }

    const current = forecastData.current || {};
    const daily = forecastData.daily || {};
    const hourly = forecastData.hourly || {};

    const currentWeatherInfo = getWmoWeatherInfo(current.weather_code, current.is_day);

    // Format Hourly array (Next 24 hours)
    const formattedHourly = (hourly.time || []).slice(0, 24).map((time, idx) => {
      const code = hourly.weather_code?.[idx] || 0;
      const info = getWmoWeatherInfo(code, 1);
      return {
        time,
        timeFormatted: formatTimeBengali(time),
        temp: Math.round(hourly.temperature_2m?.[idx] || 0),
        humidity: hourly.relative_humidity_2m?.[idx] || 0,
        rainProb: hourly.precipitation_probability?.[idx] || 0,
        precip: hourly.precipitation?.[idx] || 0,
        windSpeed: Math.round(hourly.wind_speed_10m?.[idx] || 0),
        uv: hourly.uv_index?.[idx] || 0,
        condition: info.label,
        icon: info.icon
      };
    });

    // Format Daily array (7 days)
    const dayNamesBengali = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const formattedDaily = (daily.time || []).map((dateStr, idx) => {
      const dateObj = new Date(dateStr);
      const dayName = idx === 0 ? 'আজ' : idx === 1 ? 'আগামীকাল' : dayNamesBengali[dateObj.getDay()];
      const code = daily.weather_code?.[idx] || 0;
      const info = getWmoWeatherInfo(code, 1);

      return {
        dateStr,
        dayName,
        maxTemp: Math.round(daily.temperature_2m_max?.[idx] || 0),
        minTemp: Math.round(daily.temperature_2m_min?.[idx] || 0),
        condition: info.label,
        icon: info.icon,
        rainProb: daily.precipitation_probability_max?.[idx] || 0,
        precipSum: daily.precipitation_sum?.[idx] || 0,
        sunrise: formatTimeBengali(daily.sunrise?.[idx]),
        sunset: formatTimeBengali(daily.sunset?.[idx]),
        maxUv: daily.uv_index_max?.[idx] || 0
      };
    });

    // Extract Air Quality details if available
    const aqCurrent = aqData?.current || {};
    const airQualityInfo = aqCurrent.european_aqi !== undefined ? {
      aqi: Math.round(aqCurrent.european_aqi),
      pm25: aqCurrent.pm2_5 ? aqCurrent.pm2_5.toFixed(1) : null,
      pm10: aqCurrent.pm10 ? aqCurrent.pm10.toFixed(1) : null,
      ...getAqiDescription(aqCurrent.european_aqi)
    } : null;

    const payload = {
      location: FIXED_WEATHER_LOCATION,
      updatedAt: new Date().toISOString(),
      updatedAtFormatted: formatTimeBengali(new Date().toISOString()),
      current: {
        temp: Math.round(current.temperature_2m || 0),
        feelsLike: Math.round(current.apparent_temperature || current.temperature_2m || 0),
        humidity: current.relative_humidity_2m || 0,
        windSpeed: Math.round(current.wind_speed_10m || 0),
        windGusts: current.wind_gusts_10m ? Math.round(current.wind_gusts_10m) : null,
        windDir: getWindDirectionBengali(current.wind_direction_10m),
        pressure: Math.round(current.surface_pressure || 1012),
        cloudCover: current.cloud_cover || 0,
        precipitation: current.precipitation || 0,
        weatherCode: current.weather_code,
        isDay: current.is_day,
        condition: currentWeatherInfo.label,
        conditionDesc: currentWeatherInfo.desc,
        icon: currentWeatherInfo.icon,
        theme: currentWeatherInfo.theme,
        todayMaxTemp: formattedDaily[0]?.maxTemp || Math.round(current.temperature_2m + 3),
        todayMinTemp: formattedDaily[0]?.minTemp || Math.round(current.temperature_2m - 4),
        sunrise: formattedDaily[0]?.sunrise || '০৫:৪০ AM',
        sunset: formattedDaily[0]?.sunset || '০৬:১০ PM',
        uvIndex: formattedDaily[0]?.maxUv || 5
      },
      hourly: formattedHourly,
      daily: formattedDaily,
      airQuality: airQualityInfo
    };

    // Cache successful response locally
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: payload
      }));
    } catch (e) {
      console.warn("Weather cache write error:", e);
    }

    return payload;

  } catch (error) {
    console.error("fetchVillageWeather Error:", error);
    
    // Try to load cached data on failure
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        return { ...parsed.data, isFromCache: true, fetchError: true };
      }
    } catch (e) {
      // Ignore cache error
    }

    throw error;
  }
};
