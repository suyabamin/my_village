import React, { useState, useEffect, useRef, useCallback } from 'react';
import { fetchActiveVillageImages } from '../../services/villageCommonImageService';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles
} from 'lucide-react';

export default function VillageCommonImageSlider() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const autoPlayRef = useRef(null);

  // Minimum swipe distance in px for mobile touch gesture
  const minSwipeDistance = 40;

  // Load active images from isolated village image service
  const loadImages = async () => {
    setLoading(true);
    try {
      const data = await fetchActiveVillageImages();
      // Unlimited items: sort by displayOrder
      const sorted = (data || []).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      setImages(sorted);
    } catch (err) {
      console.warn('Error loading village common images:', err);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();

    const handleUpdate = () => {
      loadImages();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('village-images-updated', handleUpdate);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('village-images-updated', handleUpdate);
      }
    };
  }, []);

  const changeSlide = useCallback((newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 150); // Quick smooth crossfade transition
  }, []);

  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  }, [images.length, currentIndex, changeSlide]);

  const prevSlide = useCallback(() => {
    if (images.length === 0) return;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  }, [images.length, currentIndex, changeSlide]);

  // Handle slideshow autoplay timer: EXACT 1.5 SECONDS (1500ms)
  useEffect(() => {
    if (isPlaying && images.length > 1) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 1500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, images.length, nextSlide]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // ─── LOADING STATE ───
  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingBox}>
          <div style={styles.loadingSpinner}></div>
          <p style={styles.loadingText}>ছবি লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // ─── EMPTY STATE ───
  if (!images || images.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyBox}>
          <div style={styles.emptyIcon}>🌾</div>
          <h4 style={styles.emptyTitle}>আলমদীপাড়ার ছবি শীঘ্রই যুক্ত করা হবে।</h4>
          <p style={styles.emptySubtitle}>আমাদের মনোরম গ্রামের ছবি দ্রুতই এখানে প্রদর্শন করা হবে।</p>
        </div>
      </div>
    );
  }

  const currentImg = images[currentIndex];

  // For high image counts (>12), show compact dots slice to prevent broken UI on mobile
  const maxVisibleDots = 10;
  let visibleDots = images;
  let startIdx = 0;
  if (images.length > maxVisibleDots) {
    startIdx = Math.max(0, Math.min(currentIndex - Math.floor(maxVisibleDots / 2), images.length - maxVisibleDots));
    visibleDots = images.slice(startIdx, startIdx + maxVisibleDots);
  }

  return (
    <section 
      style={styles.container} 
      aria-label="Public Village Image Slider"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div 
        style={styles.sliderWrapper}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Main Image Banner Container */}
        <div style={styles.imageContainer}>
          {/* Ambient Major-Color Blurred Background Fill */}
          <img 
            src={currentImg.imageUrl} 
            alt="" 
            aria-hidden="true"
            style={{
              ...styles.ambientBg,
              opacity: isFading ? 0.4 : 1,
            }}
          />

          {/* Vignette & Contrast Overlay */}
          <div style={styles.overlayGradient} />

          {/* Main Foreground Accurate Image (100% original aspect ratio) */}
          <img 
            src={currentImg.imageUrl} 
            alt={currentImg.title || `আলমদীপাড়া গ্রামের ছবি ${currentIndex + 1}`}
            style={{
              ...styles.image,
              opacity: isFading ? 0.3 : 1,
              transform: isFading ? 'scale(0.98)' : 'scale(1)',
            }}
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80';
            }}
          />

          {/* Top Badge & Play/Pause Control */}
          <div style={styles.topBadgeRow}>
            <span style={styles.badge}>
              <Sparkles size={13} style={{ marginRight: '5px' }} />
              আমাদের আলমদীপাড়া ({currentIndex + 1} / {images.length})
            </span>
            {images.length > 1 && (
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                style={styles.playPauseBtn}
                title={isPlaying ? 'অটোস্লাইড থামান' : 'অটোস্লাইড চালু করুন'}
                aria-label="Toggle autoplay"
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              </button>
            )}
          </div>

          {/* Captions Overlay */}
          <div style={styles.captionArea}>
            {currentImg.title && (
              <h3 style={styles.captionTitle}>{currentImg.title}</h3>
            )}
            {currentImg.caption && (
              <p style={styles.captionText}>{currentImg.caption}</p>
            )}
          </div>

          {/* Prev / Next Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                style={{ ...styles.navBtn, left: '12px' }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={nextSlide}
                style={{ ...styles.navBtn, right: '12px' }}
                aria-label="Next slide"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Indicators Row (Mobile Compact Safe) */}
        {images.length > 1 && (
          <div style={styles.dotsRow}>
            {visibleDots.map((_, i) => {
              const actualIdx = startIdx + i;
              return (
                <button
                  key={actualIdx}
                  onClick={() => changeSlide(actualIdx)}
                  style={{
                    ...styles.dot,
                    backgroundColor: actualIdx === currentIndex ? 'var(--primary-color, #16a34a)' : '#cbd5e1',
                    width: actualIdx === currentIndex ? '24px' : '8px',
                  }}
                  aria-label={`Go to slide ${actualIdx + 1}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// Inline component styles matching system design tokens & responsive standards
const styles = {
  container: {
    width: '100%',
    margin: '1.25rem 0 2rem 0',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
  },
  sliderWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 'clamp(260px, 52vh, 480px)',
    overflow: 'hidden',
    backgroundColor: '#0f172a',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ambientBg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'blur(30px) brightness(0.65) saturate(1.6)',
    transform: 'scale(1.3)',
    pointerEvents: 'none',
    zIndex: 0,
    transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
  },
  overlayGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.1) 50%, rgba(15, 23, 42, 0.35) 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  image: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    objectPosition: 'center',
    transition: 'opacity 0.25s ease-in-out, transform 0.3s ease-in-out',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
    borderRadius: '4px',
  },
  topBadgeRow: {
    position: 'absolute',
    top: '14px',
    left: '14px',
    right: '14px',
    display: 'flex',
    justify: 'space-between',
    alignItems: 'center',
    zIndex: 3,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 14px',
    borderRadius: '20px',
    backgroundColor: 'rgba(22, 163, 74, 0.92)',
    color: '#ffffff',
    fontSize: '0.82rem',
    fontWeight: '600',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  playPauseBtn: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    color: '#ffffff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backdropFilter: 'blur(8px)',
    transition: 'background 0.2s',
  },
  captionArea: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    right: '16px',
    zIndex: 3,
    color: '#ffffff',
  },
  captionTitle: {
    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
    fontWeight: '700',
    margin: '0 0 4px 0',
    color: '#ffffff',
    textShadow: '0 2px 4px rgba(0,0,0,0.6)',
  },
  captionText: {
    fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
    margin: 0,
    opacity: 0.92,
    color: '#f1f5f9',
    textShadow: '0 1px 3px rgba(0,0,0,0.6)',
  },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    color: '#0f172a',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 4,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.2s ease',
  },
  dotsRow: {
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 0',
    backgroundColor: 'var(--card-bg, #ffffff)',
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  loadingBox: {
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
  loadingSpinner: {
    width: '32px',
    height: '32px',
    border: '3px solid #e2e8f0',
    borderTopColor: 'var(--primary-color, #16a34a)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    color: 'var(--text-muted, #64748b)',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  emptyBox: {
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  emptyTitle: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: 'var(--text-color, #1e293b)',
    margin: '0 0 4px 0',
  },
  emptySubtitle: {
    fontSize: '0.85rem',
    color: 'var(--text-muted, #64748b)',
    margin: 0,
  }
};
