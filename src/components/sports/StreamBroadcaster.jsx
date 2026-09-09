import React, { useState, useRef, useEffect } from 'react';
import { Camera, Radio, StopCircle, RefreshCw, Video, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { setLiveStream, stopLiveStream } from '../../services/sportsService';
import { useNotification } from '../../context/NotificationContext';

export const StreamBroadcaster = ({ matchId, tournamentId, currentUserId }) => {
  const { addToast } = useNotification();
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamMode, setStreamMode] = useState('camera'); // 'camera' | 'youtube'
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [cameraAngle, setCameraAngle] = useState('প্রধান মাঠ ক্যামেরা (Camera 1)');
  const [facingMode, setFacingMode] = useState('environment'); // 'user' | 'environment'
  
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Start mobile device camera stream
  const startCameraStream = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: true
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        // Save stream metadata to Firestore
        await setLiveStream(matchId, {
          tournamentId,
          provider: 'camera',
          streamUrl: '', // WebRTC / Peer broadcast metadata indicator
          cameraAngle,
          status: 'active'
        }, currentUserId);

        setIsStreaming(true);
        addToast('মোবাইল ক্যামেরা লাইভ সম্প্রচার শুরু হয়েছে!', 'success');
      } else {
        throw new Error("ক্যামেরা সাপোর্ট পাওয়া যায়নি।");
      }
    } catch (err) {
      console.warn("Camera stream failed, falling back to stream link mode:", err);
      addToast('ক্যামেরা অ্যাক্সেস পাওয়া যায়নি। অনুগ্রহ করে ইউটিউব লাইভ লিংক ব্যবহার করুন।', 'error');
      setStreamMode('youtube');
    }
  };

  // Switch front / back camera
  const switchCameraFacing = async () => {
    const newFacing = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(newFacing);
    if (isStreaming && streamMode === 'camera') {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      setTimeout(() => startCameraStream(), 300);
    }
  };

  // Start YouTube or custom URL stream
  const startUrlStream = async (e) => {
    e.preventDefault();
    if (!youtubeUrl) {
      addToast('অনুগ্রহ করে সঠিক লাইভ লিংক প্রবেশ করান।', 'error');
      return;
    }

    await setLiveStream(matchId, {
      tournamentId,
      provider: 'youtube',
      streamUrl: youtubeUrl,
      cameraAngle,
      status: 'active'
    }, currentUserId);

    setIsStreaming(true);
    addToast('লাইভ ভিডিও লিংক সফলভাবে সংযুক্ত হয়েছে!', 'success');
  };

  // Stop Stream
  const handleStopStream = async () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    await stopLiveStream(matchId);
    setIsStreaming(false);
    addToast('লাইভ সম্প্রচার বন্ধ করা হয়েছে।', 'info');
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem', border: '1px solid var(--color-primary-500)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Radio color="#ef4444" size={20} style={{ animation: isStreaming ? 'pulse 1.5s infinite' : 'none' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>
            মোবাইল ক্যামেরা ও ভিডিও লাইভ স্ট্রিমিং কন্ট্রোলার
          </h3>
        </div>

        {isStreaming && (
          <span className="badge badge-red" style={{ backgroundColor: '#ef4444', color: '#fff' }}>
            🔴 ব্রডকাস্ট সচল (LIVE)
          </span>
        )}
      </div>

      {/* Stream Mode Tabs */}
      {!isStreaming && (
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          <button 
            type="button"
            onClick={() => setStreamMode('camera')}
            className={`btn btn-sm ${streamMode === 'camera' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Camera size={16} /> মোবাইল ফোন ক্যামেরা
          </button>
          <button 
            type="button"
            onClick={() => setStreamMode('youtube')}
            className={`btn btn-sm ${streamMode === 'youtube' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <LinkIcon size={16} /> ইউটিউব / স্ট্রিম লিংক
          </button>
        </div>
      )}

      {/* Camera Selector */}
      <div style={{ marginBottom: '1rem' }}>
        <label className="form-label" style={{ fontSize: '0.85rem' }}>ক্যামেরা এঙ্গেল / সোর্স সিলেক্ট করুন:</label>
        <select 
          className="form-select" 
          value={cameraAngle}
          onChange={(e) => setCameraAngle(e.target.value)}
          disabled={isStreaming}
        >
          <option value="প্রধান মাঠ ক্যামেরা (Camera 1)">Camera 1 — প্রধান মাঠ ক্যামেরা (Main field camera)</option>
          <option value="সাইড লাইন ক্যামেরা (Camera 2)">Camera 2 — সাইড লাইন ক্যামেরা (Side camera)</option>
          <option value="স্কোরবোর্ড ক্যামেরা (Camera 3)">Camera 3 — স্কোরবোর্ড ক্যামেরা (Scoreboard camera)</option>
        </select>
      </div>

      {/* Mode 1: Phone Camera Stream */}
      {streamMode === 'camera' && (
        <div>
          <div 
            style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              marginBottom: '1rem'
            }}
          >
            <video 
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {!isStreaming && (
              <div style={{ position: 'absolute', textAlign: 'center', color: '#fff', padding: '1rem' }}>
                <Camera size={36} style={{ marginBottom: '0.5rem', opacity: 0.8 }} />
                <p style={{ fontSize: '0.85rem', margin: 0, color: '#94a3b8' }}>
                  ক্যামেরা প্রিভিউ চালু করতে "লাইভ সম্প্রচার শুরু করুন" চাপুন
                </p>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {!isStreaming ? (
              <button onClick={startCameraStream} className="btn btn-primary btn-mobile-full" style={{ backgroundColor: '#dc2626', borderColor: '#dc2626' }}>
                <Radio size={18} /> মোবাইল ক্যামেরা লাইভ শুরু করুন
              </button>
            ) : (
              <>
                <button onClick={handleStopStream} className="btn btn-secondary btn-mobile-full" style={{ backgroundColor: '#475569', color: '#fff' }}>
                  <StopCircle size={18} /> সম্প্রচার শেষ করুন
                </button>
                <button onClick={switchCameraFacing} className="btn btn-secondary">
                  <RefreshCw size={16} /> ক্যামেরা সুইচ করুন
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mode 2: External Stream URL */}
      {streamMode === 'youtube' && (
        <form onSubmit={startUrlStream}>
          <div className="form-group">
            <label className="form-label">ইউটিউব লাইভ / এক্সটার্নাল স্ট্রিমিং URL</label>
            <input 
              type="url" 
              className="form-input"
              placeholder="https://www.youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              disabled={isStreaming}
              required
            />
          </div>

          {!isStreaming ? (
            <button type="submit" className="btn btn-primary btn-mobile-full">
              <Video size={18} /> স্ট্রিম সংযুক্ত করুন
            </button>
          ) : (
            <button type="button" onClick={handleStopStream} className="btn btn-secondary btn-mobile-full">
              <StopCircle size={18} /> সম্প্রচার শেষ করুন
            </button>
          )}
        </form>
      )}
    </div>
  );
};
