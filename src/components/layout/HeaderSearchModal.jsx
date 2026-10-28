import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  MapPin, 
  Sprout, 
  Trophy, 
  GraduationCap, 
  Building2, 
  Users, 
  ShieldAlert, 
  CloudSun,
  ArrowRight
} from 'lucide-react';

export const HeaderSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Search Index covering all village locations, modules, and features
  const searchItems = [
    { title: 'বায়তুল নূর জামে মসজিদ', category: 'মসজিদ ও দোয়া', path: '/mosques/loc-1', icon: Building2, keywords: 'namaz prayer masjid noor' },
    { title: 'বায়তুল মামুর জামে মসজিদ', category: 'মসজিদ ও দোয়া', path: '/mosques/loc-2', icon: Building2, keywords: 'namaz prayer masjid mamur' },
    { title: 'আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয়', category: 'শিক্ষা প্রতিষ্ঠান', path: '/education/loc-3', icon: GraduationCap, keywords: 'school primary biddaloy' },
    { title: 'লাটিয়াকুড়ি কৃষি মাঠ', category: 'কৃষি মাঠ', path: '/agriculture/latiyakuri', icon: Sprout, keywords: 'field krishi dhaan crop latiyakuri' },
    { title: 'চড়ে বন্দ কৃষি মাঠ', category: 'কৃষি মাঠ', path: '/agriculture/chore-bondo', icon: Sprout, keywords: 'field krishi chore bondo' },
    { title: 'মাগুড়া বন্দ কৃষি মাঠ', category: 'কৃষি মাঠ', path: '/agriculture/magura-bondo', icon: Sprout, keywords: 'field krishi magura' },
    { title: 'কৃষি যন্ত্রপাতি ও মেশিন ভাড়া', category: 'কৃষি সেবা', path: '/agriculture', icon: Sprout, keywords: 'tractor tiller pump machine jontro' },
    { title: 'জমি লিজ ও বর্গা বিজ্ঞাপন', category: 'জমি লিজ', path: '/agriculture', icon: Sprout, keywords: 'land lease jomi borga' },
    { title: 'খেলাধুলা টুর্নামেন্ট ও লাইভ স্কোর', category: 'খেলাধুলা', path: '/sports', icon: Trophy, keywords: 'football cricket tournament live score' },
    { title: 'লাইভ স্ট্রিমিং ও সম্প্রচার', category: 'লাইভ খেলা', path: '/sports', icon: Trophy, keywords: 'stream live video broadcast' },
    { title: 'আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ', category: 'যুব সংঘ', path: '/organization', icon: Users, keywords: 'madok birodhi jubo shongho club' },
    { title: 'জরুরি সভা ও বিজ্ঞপ্তি', category: 'জরুরি সেবা', path: '/emergency', icon: ShieldAlert, keywords: 'emergency meeting alert notice shova' },
    { title: 'আবহাওয়া পূর্বাভাস ও কৃষি পরামর্শ', category: 'আবহাওয়া', path: '/weather', icon: CloudSun, keywords: 'weather rain forecast abohawa' },
    { title: 'ডিজিটাল ভিলেজ ম্যাপ', category: 'মানচিত্র', path: '/map', icon: MapPin, keywords: 'map location gps manchitro' },
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? searchItems.slice(0, 6)
    : searchItems.filter(item => {
        const q = query.toLowerCase();
        return item.title.toLowerCase().includes(q) ||
               item.category.toLowerCase().includes(q) ||
               item.keywords.toLowerCase().includes(q);
      });

  const handleSelect = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="search-modal-header">
          <Search size={20} className="search-modal-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="গ্রাম, স্থান, সেবা বা কিছু খুঁজুন..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="search-modal-close-btn" aria-label="বন্ধ করুন">
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="search-modal-results">
          {filtered.length === 0 ? (
            <div className="search-modal-empty">
              "<strong>{query}</strong>" এর জন্য কিছু পাওয়া যায়নি। অনুগ্রহ করে অন্য কিছু খুঁজুন।
            </div>
          ) : (
            <div className="search-results-list">
              <div className="search-results-label">
                {query.trim() === '' ? 'দ্রুত পরামর্শ' : 'অনুসন্ধানের ফলাফল'}
              </div>
              {filtered.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="search-result-item"
                    onClick={() => handleSelect(item.path)}
                  >
                    <div className="search-result-icon">
                      <Icon size={18} />
                    </div>
                    <div className="search-result-content">
                      <div className="search-result-title">{item.title}</div>
                      <div className="search-result-category">{item.category}</div>
                    </div>
                    <ArrowRight size={16} className="search-result-arrow" />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="search-modal-footer">
          <span>পরামর্শ: ব্রাউজ করতে যেকোনো আইটেমে ক্লিক করুন</span>
          <span className="search-modal-esc">ESC চেপে বন্ধ করুন</span>
        </div>
      </div>
    </div>
  );
};
