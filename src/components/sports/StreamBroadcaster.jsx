import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, Radio, StopCircle, RefreshCw, Video, Link as LinkIcon, 
  Mic, MicOff, VideoOff, Maximize, AlertCircle, Settings, CheckCircle2, ShieldAlert
} from 'lucide-react';
import { setLiveStreamSession, stopLiveStreamSession, startWebRTCPublisher } from '../../services/liveStreamingService';
import { useNotification } from '../../context/NotificationContext';

export const StreamBroadcaster = ({ matchId, tournamentId, currentUserId }) => {
  const { addToast } = useNotification();
  
  // Stream state
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamMode, setStreamMode] = useState('camera'); // 'camera' | 'youtube'
  const [youtubeUrl, setYoutubeUrl] = useState('');
  
  // Camera & Audio Controls
  const [cameraId, setCameraId] = useState('main'); // 'main' | 'side' | 'scoreboard'
  const [cameraLabel, setCameraLabel] = useState('প্রধান মাঠ ক্যামেরা (Camera 1)');
  const [facingMode, setFacingMode] = useState('environment'); // Default to rear camera for sports
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isPrimary, setIsPrimary] = useState(true);
  
  // Status & Permission states
  const [connectionStatus, setConnectionStatus] = useState('প্রস্তুত'); // 'প্রস্তুত' | 'starting' | 'live' | 'reconnecting' | 'ended' | 'error'
  const [permissionError, setPermissionError] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [durationSeconds, setDurationSeconds] = useState(0);

  const videoRef = useRef(null);
  const localStreamRef = useRef(null);
  const publisherCleanupRef = useRef(null);
  const durationTimerRef = useRef(null);
  const containerRef = useRef(null);

  // Update camera label on select change
  const handleCameraChange = (e) => {
    const val = e.target.value;
    if (val === 'main') {
      setCameraId('main');
      setCameraLabel('প্রধান মাঠ ক্যামেরা (Camera 1)');
    } else if (val === 'side') {
      setCameraId('side');
      setCameraLabel('সাইড লাইন ক্যামেরা (Camera 2)');
    } else if (val === 'scoreboard') {
      setCameraId('scoreboard');
      setCameraLabel('স্কোরবোর্ড ক্যামেরা (Camera 3)');
    }
  };

  // Start Duration Timer
  const startTimer = () => {
    setDurationSeconds(0);
    if (durationTimerRef.current) clearInterval(durationTimerRef.current);
    durationTimerRef.current = setInterval(() => {
      setDurationSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (durationTimerRef.current) {
      clearInterval(durationTimerRef.current);
      durationTimerRef.current = null;
    }
  };

  // Format Duration string MM:SS
  const formatDuration = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Request Camera + Microphone media stream
  const getMediaStream = async (targetFacing = facingMode) => {
    setPermissionError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("আপনার ব্রাউজারে ক্যামেরা বা মাইক্রোফোন সাপোর্ট পাওয়া যায়নি।");
      }

      console.log(`[STREAM] Requesting camera permission (facingMode: ${targetFacing})...`);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: targetFacing, 
          width: { ideal: 1280 }, 
          height: { ideal: 720 },
          frameRate: { ideal: 30 }
        },
        audio: true
      });

      localStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      return stream;
    } catch (err) {
      console.error("[STREAM] Camera/Microphone access error:", err);
      let msg = 'ক্যামেরা এবং মাইক্রোফোন অ্যাক্সেস করতে সমস্যা হয়েছে।';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        msg = 'ক্যামেরা ও মাইক্রোফোন ব্যবহারের অনুমতি বাতিল করা হয়েছে। ব্রাউজার সেটিংস থেকে অনুমতি প্রদান করুন।';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        msg = 'কোনো সক্রিয় ক্যামেরা বা মাইক্রোফোন পাওয়া যায়নি।';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        msg = 'ক্যামেরা অন্য কোনো অ্যাপ ব্যবহার করছে। অনুগ্রহ করে অন্য অ্যাপ বন্ধ করুন।';
      }
      setPermissionError(msg);
      addToast(msg, 'error');
      return null;
    }
  };

  // Confirm and Start WebRTC Mobile Stream
  const executeStartCameraStream = async () => {
    setShowConfirmModal(false);
    setConnectionStatus('starting');

    const stream = await getMediaStream(facingMode);
    if (!stream) {
      setConnectionStatus('error');
      return;
    }

    try {
      // 1. Save main stream metadata
      await setLiveStreamSession(matchId, {
        tournamentId,
        provider: 'webrtc',
        streamUrl: '',
        cameraAngle: cameraLabel,
        status: 'active'
      }, currentUserId);

      // 2. Start WebRTC Publisher for real remote multi-device streaming
      const cleanup = startWebRTCPublisher(
        matchId, 
        cameraId, 
        stream, 
        { cameraLabel, isPrimary }, 
        (status) => {
          if (status === 'live') {
            setConnectionStatus('live');
            setIsStreaming(true);
            startTimer();
            addToast('🔴 রিয়েল-টাইম লাইভ সম্প্রচার শুরু হয়েছে!', 'success');
          } else if (status === 'reconnecting') {
            setConnectionStatus('reconnecting');
          } else if (status === 'error') {
            setConnectionStatus('error');
          }
        }
      );

      publisherCleanupRef.current = cleanup;
    } catch (err) {
      console.error("[STREAM] Failed to start live stream:", err);
      setConnectionStatus('error');
      addToast('লাইভ সম্প্রচার শুরু করা সম্ভব হয়নি।', 'error');
    }
  };

  // Toggle Camera Front / Rear
  const switchCameraFacing = async () => {
    const newFacing = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(newFacing);

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
    }

    const newStream = await getMediaStream(newFacing);
    if (newStream && isStreaming) {
      // Restart WebRTC publisher with new stream
      if (publisherCleanupRef.current) publisherCleanupRef.current();
      publisherCleanupRef.current = startWebRTCPublisher(
        matchId, 
        cameraId, 
        newStream, 
        { cameraLabel, isPrimary }, 
        (st) => setConnectionStatus(st)
      );
      addToast(`ক্যামেরা পরিবর্তন করা হয়েছে (${newFacing === 'environment' ? 'পেছনের ক্যামেরা' : 'সামনের ক্যামেরা'})`, 'info');
    }
  };

  // Toggle Mic Mute / Unmute
  const toggleMute = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach(track => {
        track.enabled = isMuted; // Invert
      });
      setIsMuted(!isMuted);
      addToast(isMuted ? 'মাইক্রোফোন চালু করা হয়েছে' : 'মাইক্রোফোন মিউট করা হয়েছে', 'info');
    }
  };

  // Toggle Video On / Off
  const toggleVideo = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getVideoTracks().forEach(track => {
        track.enabled = !isVideoEnabled;
      });
      setIsVideoEnabled(!isVideoEnabled);
      addToast(!isVideoEnabled ? 'ক্যামেরা ভিডিও চালু করা হয়েছে' : 'ক্যামেরা ভিডিও বন্ধ করা হয়েছে', 'info');
    }
  };

  // Fullscreen Preview
  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  // External URL / YouTube stream submit
  const startUrlStream = async (e) => {
    e.preventDefault();
    if (!youtubeUrl) {
      addToast('অনুগ্রহ করে সঠিক লাইভ লিংক প্রবেশ করান।', 'error');
      return;
    }

    await setLiveStreamSession(matchId, {
      tournamentId,
      provider: 'youtube',
      streamUrl: youtubeUrl,
      cameraAngle: cameraLabel,
      status: 'active'
    }, currentUserId);

    setIsStreaming(true);
    setConnectionStatus('live');
    startTimer();
    addToast('ইউটিউব লাইভ ভিডিও লিংক সফলভাবে সংযুক্ত হয়েছে!', 'success');
  };

  // Stop Stream and cleanup all tracks & WebRTC connections
  const handleStopStream = async () => {
    stopTimer();
    if (publisherCleanupRef.current) {
      publisherCleanupRef.current();
      publisherCleanupRef.current = null;
    }
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
      localStreamRef.current = null;
    }

    await stopLiveStreamSession(matchId, cameraId);
    setIsStreaming(false);
    setConnectionStatus('ended');
    addToast('লাইভ সম্প্রচার বন্ধ করা হয়েছে।', 'info');
  };

  useEffect(() => {
    return () => {
      stopTimer();
      if (publisherCleanupRef.current) publisherCleanupRef.current();
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem', border: '1px solid var(--color-primary-500)', backgroundColor: 'var(--bg-elevated)' }}>
      {/* Title & Status Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Radio color="#ef4444" size={20} style={{ animation: isStreaming ? 'pulse 1.5s infinite' : 'none' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>
            মোবাইল ক্যামেরা ও ভিডিও লাইভ স্ট্রিমিং কন্ট্রোলার
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isStreaming && (
            <span style={{ fontSize: '0.85rem', fontWeight: '700', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '4px 10px', borderRadius: '20px', border: '1px solid rgba(239,68,68,0.3)' }}>
              ⏱️ {formatDuration(durationSeconds)}
            </span>
          )}

          {isStreaming ? (
            <span className="badge badge-red" style={{ backgroundColor: '#dc2626', color: '#fff' }}>
              🔴 LIVE (সম্প্রচার সচল)
            </span>
          ) : (
            <span className="badge badge-secondary">
              স্ট্যাটাস: {connectionStatus}
            </span>
          )}
        </div>
      </div>

      {/* Stream Mode Selection Tabs */}
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
            <LinkIcon size={16} /> ইউটিউব / এক্সটার্নাল লিংক
          </button>
        </div>
      )}

      {/* Permission Warning Box */}
      {permissionError && (
        <div style={{ padding: '0.85rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', color: '#991b1b', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', marginBottom: '0.3rem' }}>
            <AlertCircle size={18} color="#dc2626" /> ক্যামেরা/মাইক্রোফোন পারমিশন সমস্যা:
          </div>
          <div>{permissionError}</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#7f1d1d' }}>
            টিপস: ব্রাউজারের অ্যাড্রেস বারে থাকা প্যাডলক (🔒) আইকনে ক্লিক করে "Camera" ও "Microphone" পারমিশন Allow করে পেজ রিফ্রেশ করুন।
          </div>
        </div>
      )}

      {/* Multi-Camera Angle Selector */}
      <div style={{ marginBottom: '1rem' }}>
        <label className="form-label" style={{ fontSize: '0.85rem', fontWeight: '700' }}>ক্যামেরা সোর্স ও পজিশন সিলেক্ট করুন:</label>
        <select 
          className="form-select" 
          value={cameraId}
          onChange={handleCameraChange}
          disabled={isStreaming}
        >
          <option value="main">Camera 1 — প্রধান মাঠ ক্যামেরা (Main Field Camera)</option>
          <option value="side">Camera 2 — সাইড লাইন ক্যামেরা (Side Line Camera)</option>
          <option value="scoreboard">Camera 3 — স্কোরবোর্ড ক্যামেরা (Scoreboard Camera)</option>
        </select>
      </div>

      {/* Mode 1: Mobile Phone WebRTC Camera Broadcast */}
      {streamMode === 'camera' && (
        <div>
          {/* Camera Local Preview Screen */}
          <div 
            style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              marginBottom: '1rem',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
            }}
          >
            <video 
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Status Overlay */}
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10, display: 'flex', gap: '6px' }}>
              <span style={{ backgroundColor: 'rgba(0,0,0,0.65)', color: '#fff', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
                📹 {cameraLabel}
              </span>
              <span style={{ backgroundColor: 'rgba(0,0,0,0.65)', color: '#fff', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
                {facingMode === 'environment' ? '📷 পেছনের ক্যামেরা' : '🤳 সামনের ক্যামেরা'}
              </span>
            </div>

            {!isStreaming && (
              <div style={{ position: 'absolute', textAlign: 'center', color: '#fff', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={44} style={{ marginBottom: '0.5rem', color: '#ef4444' }} />
                <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.05rem', color: '#fff' }}>ক্যামেরা প্রস্তুত</h4>
                <p style={{ fontSize: '0.82rem', margin: 0, color: '#cbd5e1', maxWidth: '320px' }}>
                  ক্যামেরা ফিড চালু করে দর্শক পেজে রিয়েল-টাইমে সম্প্রচার করতে নিচের বাটনে চাপুন।
                </p>
              </div>
            )}
          </div>

          {/* Action Button Controls */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {!isStreaming ? (
              <button 
                type="button"
                onClick={() => setShowConfirmModal(true)} 
                className="btn btn-primary btn-mobile-full" 
                style={{ backgroundColor: '#dc2626', borderColor: '#dc2626', fontSize: '0.95rem', fontWeight: '800', padding: '0.75rem 1.25rem' }}
              >
                <Radio size={18} /> লাইভ স্ট্রিম শুরু করুন
              </button>
            ) : (
              <>
                <button 
                  type="button"
                  onClick={handleStopStream} 
                  className="btn btn-secondary btn-mobile-full" 
                  style={{ backgroundColor: '#dc2626', color: '#fff', borderColor: '#dc2626' }}
                >
                  <StopCircle size={18} /> সম্প্রচার শেষ করুন
                </button>

                <button type="button" onClick={switchCameraFacing} className="btn btn-secondary" title="ক্যামেরা সুইচ করুন">
                  <RefreshCw size={16} /> ক্যামেরা সুইচ
                </button>

                <button type="button" onClick={toggleMute} className={`btn ${isMuted ? 'btn-danger' : 'btn-secondary'}`} title="মাইক্রোফোন মিউট/আনমিউট">
                  {isMuted ? <MicOff size={16} color="#ef4444" /> : <Mic size={16} />}
                  {isMuted ? 'আনমিউট' : 'মিউট'}
                </button>

                <button type="button" onClick={toggleVideo} className={`btn ${!isVideoEnabled ? 'btn-danger' : 'btn-secondary'}`} title="ভিডিও চালু/বন্ধ">
                  {!isVideoEnabled ? <VideoOff size={16} color="#ef4444" /> : <Camera size={16} />}
                  {!isVideoEnabled ? 'ভিডিও অন' : 'ভিডিও অফ'}
                </button>

                <button type="button" onClick={toggleFullscreen} className="btn btn-secondary" title="ফুলস্ক্রিন">
                  <Maximize size={16} />
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
            <button type="button" onClick={handleStopStream} className="btn btn-secondary btn-mobile-full" style={{ backgroundColor: '#dc2626', color: '#fff' }}>
              <StopCircle size={18} /> সম্প্রচার শেষ করুন
            </button>
          )}
        </form>
      )}

      {/* Start Live Confirmation Modal */}
      {showConfirmModal && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)', zIndex: 1100,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
        }}>
          <div className="card" style={{ width: 'min(420px, 94vw)', padding: '1.5rem', textAlign: 'center' }}>
            <Radio size={48} color="#dc2626" style={{ margin: '0 auto 0.75rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '0 0 0.5rem' }}>
              আপনি কি এই ম্যাচের লাইভ স্ট্রিম শুরু করতে চান?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              আপনার মোবাইল ডিভাইসের ক্যামেরা ও মাইক্রোফোন সমস্ত দর্শকের কাছে রিয়েল-টাইমে ভিডিও সম্প্রচার শুরু করবে।
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                type="button"
                onClick={() => setShowConfirmModal(false)} 
                className="btn btn-secondary" 
                style={{ flex: 1 }}
              >
                বাতিল
              </button>
              <button 
                type="button"
                onClick={executeStartCameraStream} 
                className="btn btn-primary" 
                style={{ flex: 1, backgroundColor: '#dc2626', borderColor: '#dc2626' }}
              >
                হ্যাঁ, লাইভ শুরু করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
