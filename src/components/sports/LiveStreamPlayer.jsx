import React, { useState, useRef } from 'react';
import { Tv, Volume2, VolumeX, Maximize, Radio, RefreshCw } from 'lucide-react';

export const LiveStreamPlayer = ({ streamUrl, isLive = true, matchTitle = '', cameraAngle = 'প্রধান ক্যামেরা' }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(false);
  const playerRef = useRef(null);

  const toggleFullscreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerRef.current.requestFullscreen();
      }
    }
  };

  // Extract YouTube ID if it's a YouTube link
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=${isMuted ? 1 : 0}` : null;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(streamUrl);

  return (
    <div 
      ref={playerRef}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // 16:9 Aspect Ratio
        backgroundColor: '#0f172a',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      {/* Live Badge Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        {isLive ? (
          <span 
            style={{
              backgroundColor: '#dc2626',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 10px rgba(220,38,38,0.5)',
              letterSpacing: '0.5px'
            }}
          >
            <span 
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'pulse 1.5s infinite'
              }} 
            />
            🔴 LIVE
          </span>
        ) : (
          <span className="badge badge-secondary">রেকর্ডকৃত স্ট্রিম</span>
        )}

        {cameraAngle && (
          <span 
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#e2e8f0',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          >
            📹 {cameraAngle}
          </span>
        )}
      </div>

      {/* Video Content */}
      {youtubeEmbedUrl ? (
        <iframe
          src={youtubeEmbedUrl}
          title={matchTitle || 'Live Video Stream'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : streamUrl && streamUrl.startsWith('data:video') ? (
        <video
          src={streamUrl}
          autoPlay
          playsInline
          muted={isMuted}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      ) : (
        /* Video Simulation / Demo Live Player fallback */
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justify: 'center',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#fff',
            padding: '1.5rem',
            textAlign: 'center'
          }}
        >
          <div 
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(220, 38, 38, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              marginBottom: '1rem',
              border: '2px solid rgba(220, 38, 38, 0.4)'
            }}
          >
            <Radio size={32} color="#ef4444" style={{ animation: 'spin 4s linear infinite' }} />
          </div>

          <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem', color: '#f8fafc' }}>
            {matchTitle || 'সরাসরি মোবাইল ক্যামেরা সম্প্রচার'}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '380px', marginBottom: '1.25rem' }}>
            আয়োজক মোবাইল ক্যামেরা দিয়ে লাইভ সম্প্রচার করছেন। রিয়েল-টাইম লাইভ ফিড প্রস্তুত হচ্ছে...
          </p>

          <button 
            onClick={() => setError(false)}
            className="btn btn-sm"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <RefreshCw size={14} /> আবার চেষ্টা করুন
          </button>
        </div>
      )}

      {/* Control Overlay Bar */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          color: '#fff'
        }}
      >
        <div style={{ fontSize: '0.85rem', fontWeight: '600', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
          {matchTitle}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={() => setIsMuted(!isMuted)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '4px'
            }}
            title={isMuted ? "শব্দ চালু করুন" : "শব্দ বন্ধ করুন"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <button 
            onClick={toggleFullscreen}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '4px'
            }}
            title="ফুলস্ক্রিন (Fullscreen)"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
