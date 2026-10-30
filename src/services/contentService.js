/**
 * contentService.js
 * 
 * Complete Website Content Management System (CMS) Service
 * Manages site texts, titles, descriptions, service cards, and image/icon uploads.
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db, isLiveFirebaseConfigured } from '../config/firebase';
import { uploadToFirebaseStorage } from './imageService';

const SETTINGS_DOC_ID = 'general';
const SERVICE_CARDS_COLLECTION = 'service_cards';
const CONTENT_CACHE_KEY = 'alamdipara_site_content_cache';
const SERVICE_CARDS_CACHE_KEY = 'alamdipara_service_cards_cache';

// Dispatch event so UI updates in real-time without reload
const notifyContentUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('site-content-updated'));
  }
};

// Default Initial Website Content
export const DEFAULT_SITE_CONTENT = {
  siteTitle: "আলমদীপাড়া ডিজিটাল গ্রাম",
  tagline: "আমাদের গ্রাম, আমাদের তথ্য, আমাদের সেবা",
  slogan: "একাদারে তথ্য, উন্নয়ন ও সমৃদ্ধি",
  heroTitle: "স্বাগতম",
  heroSubtitle: "আলমদীপাড়া ডিজিটাল গ্রাম",
  heroDesc: "সবুজে ঘেরা, ঐতিহ্যে ভরা আমাদের প্রিয় গ্রাম",
  heroLocation: "আলমদীপাড়া, বাগাতিপাড়া",
  servicesTitle: "আমাদের সেবাসমূহ",
  servicesSubtitle: "গ্রামের প্রয়োজনীয় সকল নাগরিক সেবা এক ক্লিকে",
  mapTitle: "ডিজিটাল ভিলেজ ম্যাপ",
  mapSubtitle: "আমাদের গ্রামের সকল গুরুত্বপূর্ণ স্থানসমূহ ও মাঠের অবস্থান",
  eventsTitle: "সাম্প্রতিক ঘটনা",
  weatherTitle: "আজকের আবহাওয়া ও কৃষি পরামর্শ",
  noticesTitle: "জরুরি নোটিশসমূহ",
  footerText: "© ২০২৬ আলমদীপাড়া ডিজিটাল গ্রাম। সর্বস্বত্ব সংরক্ষিত।",
  footerSlogan: "গ্রামের উন্নয়ন, প্রগতির ছোঁয়ায়"
};

// Default 9 Core Service Cards
export const DEFAULT_SERVICE_CARDS = [
  {
    id: "card-agri",
    title: "কৃষি ও আবহাওয়া",
    description: "মাঠ, খামার, সেচ ও আবহাওয়া পূর্বাভাস",
    link: "/agriculture",
    iconEmoji: "🌱",
    iconUrl: "",
    bgGradient: "mob-card-1",
    displayOrder: 1,
    isActive: true
  },
  {
    id: "card-sports",
    title: "খেলাধুলা",
    description: "টুর্নামেন্ট, লাইভ স্কোর ও দলের তালিকা",
    link: "/sports",
    iconEmoji: "⚽",
    iconUrl: "",
    bgGradient: "mob-card-2",
    displayOrder: 2,
    isActive: true
  },
  {
    id: "card-education",
    title: "শিক্ষা প্রতিষ্ঠান",
    description: "সরকারি প্রাথমিক বিদ্যালয় ও নোটিশ",
    link: "/education",
    iconEmoji: "🎓",
    iconUrl: "",
    bgGradient: "mob-card-3",
    displayOrder: 3,
    isActive: true
  },
  {
    id: "card-mosques",
    title: "মসজিদ",
    description: "বায়তুল নূর ও মামুর জামে মসজিদ, নামাজের সময়",
    link: "/mosques",
    iconEmoji: "🕌",
    iconUrl: "",
    bgGradient: "mob-card-4",
    displayOrder: 4,
    isActive: true
  },
  {
    id: "card-youth",
    title: "যুব সংঘ",
    description: "সদস্য, সমাজসেবা ও যুব কার্যক্রম",
    link: "/organization",
    iconEmoji: "👨‍👩‍👧‍👦",
    iconUrl: "",
    bgGradient: "mob-card-5",
    displayOrder: 5,
    isActive: true
  },
  {
    id: "card-culture",
    title: "সাংস্কৃতিক অনুষ্ঠান",
    description: "নাটক, গান, বৈশাখী মেলা ও উৎসব",
    link: "/culture",
    iconEmoji: "🎭",
    iconUrl: "",
    bgGradient: "mob-card-6",
    displayOrder: 6,
    isActive: true
  },
  {
    id: "card-social",
    title: "সামাজিক অনুষ্ঠান",
    description: "বৃক্ষরোপণ, সমাজকল্যাণ ও মিলনমেলা",
    link: "/social",
    iconEmoji: "👥",
    iconUrl: "",
    bgGradient: "mob-card-7",
    displayOrder: 7,
    isActive: true
  },
  {
    id: "card-emergency",
    title: "জরুরি মিটিং",
    description: "গ্রামের জরুরি সিদ্ধান্ত ও তাৎক্ষণিক সভা",
    link: "/emergency",
    iconEmoji: "🚨",
    iconUrl: "",
    bgGradient: "mob-card-8",
    displayOrder: 8,
    isActive: true
  },
  {
    id: "card-religious",
    title: "ধর্মীয় অনুষ্ঠান",
    description: "ওয়াজ মাহফিল ও বিশেষ আলোচনা সভা",
    link: "/religious-events",
    iconEmoji: "🙏",
    iconUrl: "",
    bgGradient: "mob-card-9",
    displayOrder: 9,
    isActive: true
  }
];

// ─── 1. SITE CONTENT (General, Titles, Headings, Footer) ─────────────────────

export const fetchSiteContent = async () => {
  let content = null;

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = doc(db, 'site_settings', SETTINGS_DOC_ID);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        content = snap.data();
      }
    }
  } catch (err) {
    console.warn("Firestore fetchSiteContent fallback:", err.message);
  }

  if (!content) {
    try {
      const cached = localStorage.getItem(CONTENT_CACHE_KEY);
      content = cached ? JSON.parse(cached) : DEFAULT_SITE_CONTENT;
    } catch (_) {
      content = DEFAULT_SITE_CONTENT;
    }
  }

  return { ...DEFAULT_SITE_CONTENT, ...content };
};

export const updateSiteContent = async (updatedFields) => {
  const merged = { ...updatedFields, updatedAt: new Date().toISOString() };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = doc(db, 'site_settings', SETTINGS_DOC_ID);
      await setDoc(docRef, {
        ...merged,
        updatedAt: serverTimestamp()
      }, { merge: true });
    }
  } catch (err) {
    console.warn("Firestore updateSiteContent fallback:", err);
  }

  try {
    localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(merged));
  } catch (_) {}

  notifyContentUpdate();
  return merged;
};

// ─── 2. SERVICE CARDS CMS ───────────────────────────────────────────────────

export const fetchServiceCards = async (includeInactive = false) => {
  let list = [];

  try {
    if (isLiveFirebaseConfigured) {
      const q = query(collection(db, SERVICE_CARDS_COLLECTION), orderBy('displayOrder', 'asc'));
      const snap = await getDocs(q);
      if (!snap.empty) {
        list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        // Write fresh data to cache immediately so it's always up to date
        try { localStorage.setItem(SERVICE_CARDS_CACHE_KEY, JSON.stringify(list)); } catch (_) {}
      }
    }
  } catch (err) {
    console.warn("Firestore fetchServiceCards fallback:", err.message);
  }

  if (!list || list.length === 0) {
    try {
      const cached = localStorage.getItem(SERVICE_CARDS_CACHE_KEY);
      list = cached ? JSON.parse(cached) : DEFAULT_SERVICE_CARDS;
    } catch (_) {
      list = DEFAULT_SERVICE_CARDS;
    }
  }

  if (!includeInactive) {
    return list.filter(card => card.isActive !== false);
  }
  return list;
};

export const updateServiceCard = async (cardId, updatedFields) => {
  const cleaned = {
    ...updatedFields,
    displayOrder: Number(updatedFields.displayOrder || 1),
    isActive: updatedFields.isActive !== false,
    updatedAt: new Date().toISOString()
  };

  // Throw on Firestore error so the caller's catch block fires (no false-success toast)
  if (isLiveFirebaseConfigured) {
    const cardRef = doc(db, SERVICE_CARDS_COLLECTION, cardId);
    await updateDoc(cardRef, {
      ...cleaned,
      updatedAt: serverTimestamp()
    });
  }

  // Update localStorage cache by direct merge — do NOT re-fetch from Firestore
  // (re-fetching risks a consistency race where the old document is still returned)
  try {
    const raw = localStorage.getItem(SERVICE_CARDS_CACHE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    const idx = list.findIndex(c => c.id === cardId);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...cleaned };
    } else {
      list.push({ id: cardId, ...cleaned });
    }
    localStorage.setItem(SERVICE_CARDS_CACHE_KEY, JSON.stringify(list));
  } catch (_) {}

  notifyContentUpdate();
  return cleaned;
};

export const addServiceCard = async (cardData) => {
  const newCard = {
    ...cardData,
    displayOrder: Number(cardData.displayOrder || 1),
    isActive: cardData.isActive !== false,
    createdAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, SERVICE_CARDS_COLLECTION), {
        ...newCard,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      newCard.id = docRef.id;
    } else {
      newCard.id = `card-${Date.now()}`;
    }
  } catch (err) {
    newCard.id = `card-${Date.now()}`;
  }

  try {
    const cached = await fetchServiceCards(true);
    const updated = [...cached, newCard].sort((a, b) => a.displayOrder - b.displayOrder);
    localStorage.setItem(SERVICE_CARDS_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyContentUpdate();
  return newCard;
};

export const deleteServiceCard = async (cardId) => {
  try {
    if (isLiveFirebaseConfigured) {
      await deleteDoc(doc(db, SERVICE_CARDS_COLLECTION, cardId));
    }
  } catch (err) {
    console.warn("Firestore deleteServiceCard error:", err);
  }

  try {
    const cached = await fetchServiceCards(true);
    const updated = cached.filter(c => c.id !== cardId);
    localStorage.setItem(SERVICE_CARDS_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyContentUpdate();
  return true;
};

// ─── 3. IMAGE & ICON UPLOAD HELPER ──────────────────────────────────────────

/**
 * Upload an image or custom icon to Firebase Storage.
 * Returns a permanent HTTPS download URL.
 * Falls back to ImgBB, then compressed base64 if Storage is unavailable.
 *
 * @param {File} file - The file to upload
 * @param {boolean} isIcon - true for icons (uses icon subfolder), false for bg images
 * @param {string} cardId - Card ID used to name the file in storage
 */
export const uploadIconOrImage = async (file, isIcon = false, cardId = 'general') => {
  if (!file) return null;

  // Validate format
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
  if (!validTypes.includes(file.type)) {
    throw new Error('অনুগ্রহ করে শুধুমাত্র PNG, JPG বা WebP ফরম্যাটের ছবি আপলোড করুন।');
  }

  // Max size 5MB
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('ছবির সাইজ সর্বোচ্চ ৫ মেগাবাইট (5MB) হতে পারবে।');
  }

  // Build Firebase Storage path
  const ext = file.name.split('.').pop().toLowerCase() || 'png';
  const folder = isIcon ? 'service_card_icons' : 'service_card_images';
  const storagePath = `${folder}/${cardId}_${Date.now()}.${ext}`;

  // Upload to Firebase Storage → returns permanent HTTPS URL
  const url = await uploadToFirebaseStorage(file, storagePath);
  if (!url) throw new Error('ছবি আপলোড ব্যর্থ হয়েছে।');
  return url;
};
