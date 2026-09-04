import React from 'react';
import { TrendingUp } from 'lucide-react';
import { toBengaliNumber } from '../../services/weatherService';

export const WeatherTrendChart = ({ hourly = [] }) => {
  if (!hourly || hourly.length === 0) return null;

  // Use 12 hours for a clean SVG graph
  const dataPoints = hourly.slice(0, 12);
  const temps = dataPoints.map(d => d.temp);
  const rainProbs = dataPoints.map(d => d.rainProb);

  const minTemp = Math.min(...temps) - 2;
  const maxTemp = Math.max(...temps) + 2;
  const tempSpan = maxTemp - minTemp || 5;

  const svgWidth = 600;
  const svgHeight = 160;
  const paddingX = 30;
  const paddingY = 25;
  const graphWidth = svgWidth - paddingX * 2;
  const graphHeight = svgHeight - paddingY * 2;

  // Calculate X & Y coordinates for SVG points
  const points = dataPoints.map((item, idx) => {
    const x = paddingX + (idx / (dataPoints.length - 1)) * graphWidth;
    const y = paddingY + graphHeight - ((item.temp - minTemp) / tempSpan) * graphHeight;
    return { x, y, ...item };
  });

  // Generate SVG smooth path d string
  const pathD = points.reduce((acc, point, idx) => {
    if (idx === 0) return `M ${point.x} ${point.y}`;
    const prev = points[idx - 1];
    const controlX1 = prev.x + (point.x - prev.x) / 2;
    const controlY1 = prev.y;
    const controlX2 = prev.x + (point.x - prev.x) / 2;
    const controlY2 = point.y;
    return `${acc} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${point.x} ${point.y}`;
  }, '');

  // Fill gradient area below line
  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight - 10} L ${points[0].x} ${svgHeight - 10} Z`;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <TrendingUp size={16} color="#16a34a" />
        <h3 style={styles.title}>তাপমাত্রা ও বৃষ্টির প্রবণতা রেখাচিত্র (১২ ঘণ্টা)</h3>
      </div>

      <div style={styles.svgWrapper}>
        <svg 
          viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Rain Probability Bars in Background */}
          {points.map((pt, idx) => {
            if (pt.rainProb === 0) return null;
            const barHeight = (pt.rainProb / 100) * (graphHeight * 0.5);
            return (
              <rect
                key={`rain-${idx}`}
                x={pt.x - 8}
                y={svgHeight - 20 - barHeight}
                width={16}
                height={barHeight}
                rx={3}
                fill="#3b82f6"
                opacity={0.3}
              />
            );
          })}

          {/* Fill Area Gradient */}
          <path d={areaD} fill="url(#tempGradient)" />

          {/* Smooth Curve Line */}
          <path 
            d={pathD} 
            fill="none" 
            stroke="#16a34a" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />

          {/* Dots and Labels */}
          {points.map((pt, idx) => (
            <g key={`pt-${idx}`}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="4"
                fill="#ffffff"
                stroke="#16a34a"
                strokeWidth="2.5"
              />
              <text
                x={pt.x}
                y={pt.y - 10}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="var(--text-main, #0f172a)"
              >
                {toBengaliNumber(pt.temp)}°
              </text>
              <text
                x={pt.x}
                y={svgHeight - 2}
                textAnchor="middle"
                fontSize="10"
                fill="var(--text-muted, #64748b)"
              >
                {pt.timeFormatted.split(' ')[0]}
              </text>
            </g>
          ))}
        </svg>
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
    gap: '0.75rem',
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
  svgWrapper: {
    width: '100%',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
  }
};
