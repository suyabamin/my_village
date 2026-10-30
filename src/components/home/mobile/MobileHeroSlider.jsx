import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export const MobileHeroSlider = ({ 
  sliderImages = [], 
  siteSettings = {} 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideTimer = useRef(null);

  const totalSlides = sliderImages.length > 0 ? sliderImages.length : 1;

  // Next & Prev handlers
  const handleNext = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Touch Swipe Handling
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // Swiped Left -> Next Slide
        handleNext();
      } else {
        // Swiped Right -> Prev Slide
        handlePrev();
      }
    }
    // Resume auto slide after 3 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Autoplay interval timer (3.5 seconds)
  useEffect(() => {
    if (!isPaused && totalSlides > 1) {
      autoSlideTimer.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, 3500);
    }
    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, [isPaused, totalSlides]);

  const activeImage = sliderImages[currentSlide] || sliderImages[0] || {
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'স্বাগতম',
    caption: 'সবুজে ঘেরা, ঐতিহ্যে ভরা আমাদের গ্রাম'
  };

  return (
    <section 
      className="mobile-hero-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="গ্রামের তথ্য ও ছবি স্লাইডার"
    >
      {sliderImages.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div 
            key={slide.id || index}
            className={`mobile-hero-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            <img 
              src={slide.imageUrl || activeImage.imageUrl} 
              alt={slide.title || 'আলমদীপাড়া ডিজিটাল গ্রাম'} 
              className="mobile-hero-bg"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      {/* Hero Dark Gradient Overlay with Text */}
      <div className="mobile-hero-overlay">
        <h2 className="mobile-hero-title">
          {activeImage.title || siteSettings?.heroTitle || 'স্বাগতম'}
        </h2>
        <h3 className="mobile-hero-subtitle">
          আলমদীপাড়া ডিজিটাল গ্রাম
        </h3>
        <p className="mobile-hero-desc">
          {activeImage.caption || siteSettings?.heroSubtitle || 'সবুজে ঘেরা, ঐতিহ্যে ভরা আমাদের গ্রাম'}
        </p>
        
        <div className="mobile-location-badge">
          <MapPin size={13} /> আলমদীপাড়া, বাগাতিপাড়া
        </div>
      </div>

      {/* Prev / Next Arrows */}
      {totalSlides > 1 && (
        <div className="mobile-slider-nav">
          <button 
            type="button" 
            onClick={handlePrev}
            aria-label="পূর্ববর্তী ছবি"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            type="button" 
            onClick={handleNext}
            aria-label="পরবর্তী ছবি"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Slide Dots Indicator */}
      {totalSlides > 1 && (
        <div className="mobile-slider-dots">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`mobile-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`স্লাইড ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MobileHeroSlider;
