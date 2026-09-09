import React, { useState, useRef, useEffect } from 'react';
import { Tv, Volume2, VolumeX, Maximize, Radio, RefreshCw, AlertCircle, Camera } from 'lucide-react';
import { connectWebRTCViewer, subscribeActiveCameras } from '../../services/liveStreamingService';

export const LiveStreamPlayer = ({ matchId, streamUrl, provider = 'webrtc', isLive = true, matchTitle = '', cameraAngle = 'প্রধান মাঠ ক্যামেরা' }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [activeCameraId, setActiveCameraId] = useState('main');
  const [activeCameras, setActiveCameras] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('connecting'); // 'connecting' | 'live' | 'reconnecting' | 'failed' | 'ended'
  const [hasRemoteVideo, setHasRemoteVideo] = useState(false);

  const playerRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const viewerCleanupRef = useRef(null);

  const toggleFullscreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerRef.current.requestFullscreen();
      }
    }
  };

  // Helper to extract YouTube embed URL if streamUrl is a YouTube link
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=${isMuted ? 1 : 0}` : null;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(streamUrl);

  // Subscribe to active camera streams for this match (Multi-camera feature)
  useEffect(() => {
    if (!matchId) return;
    const unSubCams = subscribeActiveCameras(matchId, (cams) => {
      setActiveCameras(cams);
      if (cams && cams.length > 0 && !cams.find(c => c.cameraId === activeCameraId)) {
        setActiveCameraId(cams[0].cameraId || 'main');
      }
    });
    return () => unSubCams();
  }, [matchId]);

  // Connect WebRTC Viewer to streamer
  const startViewerConnection = () => {
    if (youtubeEmbedUrl || !matchId) return;

    if (viewerCleanupRef.current) {
      viewerCleanupRef.current();
      viewerCleanupRef.current = null;
    }

    setConnectionStatus('connecting');
    setHasRemoteVideo(false);

    const cleanup = connectWebRTCViewer(
      matchId,
      activeCameraId,
      (remoteStream) => {
        console.log("[STREAM-PLAYER] Remote stream received, attaching to player video element");
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play().catch(e => console.warn("Auto-play error:", e));
        }
        setHasRemoteVideo(true);
        setConnectionStatus('live');
      },
      (status) => {
        setConnectionStatus(status);
      }
    );

    viewerCleanupRef.current = cleanup;
  };

  useEffect(() => {
    startViewerConnection();
    return () => {
      if (viewerCleanupRef.current) {
        viewerCleanupRef.current();
        viewerCleanupRef.current = null;
      }
    };
  }, [matchId, activeCameraId, youtubeEmbedUrl]);

  return (
    <div>
      {/* Multi-Camera Angle Selector Tabs (If multiple streams available) */}
      {activeCameras.length > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', alignSelf: 'center', color: 'var(--text-muted)' }}>ক্যামেরা ভিউ:</span>
          {activeCameras.map(cam => (
            <button
              key={cam.cameraId}
              type="button"
              onClick={() => setActiveCameraId(cam.cameraId)}
              className={`btn btn-sm ${activeCameraId === cam.cameraId ? 'btn-primary' : 'btn-secondary'}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              📹 {cam.cameraLabel || cam.cameraId}
            </button>
          ))}
        </div>
      )}

      {/* Main Video Box container */}
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
        {/* Live Badge & Camera Label Overlay */}
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
          {connectionStatus === 'live' || isLive ? (
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
            <span className="badge badge-secondary">
              {connectionStatus === 'connecting' ? 'সংযোগ হচ্ছে...' : connectionStatus === 'reconnecting' ? 'পুনরায় সংযোগের চেষ্টা...' : 'রেকর্ডকৃত / অফলাইন'}
            </span>
          )}

          {cameraAngle && (
            <span 
              style={{
                backgroundColor: 'rgba(0,0,0,0.65)',
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

        {/* Video Option 1: External YouTube Live Stream */}
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
        ) : (
          /* Video Option 2: Real-time WebRTC Mobile Stream */
          <>
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              muted={isMuted}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: hasRemoteVideo ? 'block' : 'none'
              }}
            />

            {/* Placeholder / Connecting / Offline Screen */}
            {!hasRemoteVideo && (
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
                  <Radio size={32} color="#ef4444" style={{ animation: 'spin 3s linear infinite' }} />
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem', color: '#f8fafc' }}>
                  {matchTitle || 'সরাসরি মোবাইল ক্যামেরা সম্প্রচার'}
                </h3>

                <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '380px', marginBottom: '1.25rem' }}>
                  {connectionStatus === 'connecting'
                    ? 'আয়োজকের মোবাইল ক্যামেরা থেকে রিয়েল-টাইম লাইভ ভিডিও ফিড যুক্ত হচ্ছে...'
                    : connectionStatus === 'reconnecting'
                    ? 'সংযোগ বিচ্ছিন্ন হয়েছে। পুনরায় লাইভ ফিড সংযুক্তির চেষ্টা করা হচ্ছে...'
                    : 'আয়োজকের সচল লাইভ স্ট্রিমের জন্য অপেক্ষা করা হচ্ছে...'}
                </p>

                <button 
                  onClick={startViewerConnection}
                  className="btn btn-sm"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <RefreshCw size={14} /> পুনরায় কানেক্ট করুন
                </button>
              </div>
            )}
          </>
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
              type="button"
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
              type="button"
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
    </div>
  );
};
