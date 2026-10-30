/**
 * villageMapService.js
 * 
 * Dedicated service for Village Map Locations management.
 * Provides real-time synchronization, Firestore persistence, and local fallback.
 */

import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db, isLiveFirebaseConfigured } from '../config/firebase';
import { initialVillageData } from './dbService';

const COLLECTION_NAME = 'map_locations';
const STORAGE_KEY = 'alamdipara_map_locations_cache';

// Dispatch event so all map instances refresh in real-time
const notifyMapUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('village-map-updated'));
  }
};

// Default seed locations if Firestore is empty
const DEFAULT_LOCATIONS = [
  {
    id: "loc-mosque-1",
    name: "বায়তুল নূর জামে মসজিদ",
    nameEn: "Baitun Noor Jame Mosque",
    category: "mosque",
    lat: 24.3975,
    lng: 90.8588,
    address: "পূর্বপাড়া, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80",
    description: "আলমদীপাড়া গ্রামের কেন্দ্রীয় জামে মসজিদ। পাঁচ ওয়াক্ত নামাজ ও জুমার নামাজ অনুষ্ঠিত হয়।",
    phone: "01711001122",
    openingHours: "ফজর থেকে এশা",
    isActive: true,
    isFeatured: true,
    displayOrder: 1
  },
  {
    id: "loc-mosque-2",
    name: "বায়তুল মামুর জামে মসজিদ",
    nameEn: "Baitul Mamur Jame Mosque",
    category: "mosque",
    lat: 24.3962,
    lng: 90.8565,
    address: "পশ্চিমপাড়া, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    description: "গ্রামের পশ্চিম অঞ্চলের প্রধান মসজিদ ও ইসলামী পাঠাগার।",
    phone: "01722334455",
    openingHours: "ফজর থেকে এশা",
    isActive: true,
    isFeatured: false,
    displayOrder: 2
  },
  {
    id: "loc-school-1",
    name: "আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয়",
    nameEn: "Alamdipara Govt Primary School",
    category: "school",
    lat: 24.3980,
    lng: 90.8575,
    address: "বিদ্যালয় সড়ক, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
    description: "গ্রামের শিশুদের প্রাথমিক শিক্ষার একমাত্র ঐতিহ্যবাহী সরকারি শিক্ষাপ্রতিষ্ঠান।",
    phone: "01733445566",
    openingHours: "সকাল ৯:০০ - বিকাল ৪:০০",
    isActive: true,
    isFeatured: true,
    displayOrder: 3
  },
  {
    id: "loc-field-1",
    name: "লাটিয়াকুড়ি কৃষি মাঠ",
    nameEn: "Latiyakuri Agriculture Field",
    category: "agriculture",
    lat: 24.3940,
    lng: 90.8540,
    address: "দক্ষিণ মাঠ, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    description: "উর্বর ফসলি মাঠ — ধান, সরিষা ও রবিশস্য উৎপাদনের প্রধান এলাকা।",
    isActive: true,
    isFeatured: true,
    displayOrder: 4
  },
  {
    id: "loc-field-2",
    name: "চড়ে বন্দ কৃষি মাঠ",
    nameEn: "Chore Bondo Agriculture Field",
    category: "agriculture",
    lat: 24.4010,
    lng: 90.8620,
    address: "উত্তর-পূর্ব অঞ্চল, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    description: "বোরো ধান ও উন্নত জাতের ভুট্টা চাষের জন্য সমাদৃত বিস্তৃত মাঠ।",
    isActive: true,
    isFeatured: false,
    displayOrder: 5
  },
  {
    id: "loc-field-3",
    name: "মাগুড়া বন্দ কৃষি মাঠ",
    nameEn: "Magura Bondo Agriculture Field",
    category: "agriculture",
    lat: 24.3910,
    lng: 90.8510,
    address: "দক্ষিণ-পশ্চিম মাঠ, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80",
    description: "শাকসবজি ও পাট চাষের উর্বর কৃষি জমি।",
    isActive: true,
    isFeatured: false,
    displayOrder: 6
  },
  {
    id: "loc-sports-1",
    name: "আলমদীপাড়া কেন্দ্রীয় খেলার মাঠ",
    nameEn: "Alamdipara Central Sports Ground",
    category: "sports",
    lat: 24.3985,
    lng: 90.8595,
    address: "বিদ্যালয় সংলগ্ন মাঠ, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    description: "গ্রামের ফুটবল টুর্নামেন্ট, ক্রিকেট খেলা ও বার্ষিক ক্রীড়া প্রতিযোগিতার প্রধান ভেন্যু।",
    isActive: true,
    isFeatured: true,
    displayOrder: 7
  },
  {
    id: "loc-club-1",
    name: "আলমদীপাড়া যুব সংঘ ও পাঠাগার",
    nameEn: "Alamdipara Youth Club & Library",
    category: "organization",
    lat: 24.3970,
    lng: 90.8580,
    address: "বাজার রোড, আলমদীপাড়া",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    description: "সামাজিক উন্নয়ন, মাদকবিরোধী প্রচারণা ও তরুণদের পাঠাগার কেন্দ্র।",
    phone: "01744556677",
    isActive: true,
    isFeatured: true,
    displayOrder: 8
  }
];

// 1. Fetch All Locations (Public: only active, Admin: all)
export const fetchVillageLocations = async (includeInactive = false) => {
  let list = [];

  try {
    if (isLiveFirebaseConfigured) {
      const q = query(collection(db, COLLECTION_NAME), orderBy('displayOrder', 'asc'));
      const snap = await getDocs(q);
      
      if (!snap.empty) {
        list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn("Firestore fetchVillageLocations fallback:", err.message);
  }

  // Fallback to localStorage or DEFAULT_LOCATIONS
  if (!list || list.length === 0) {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        list = JSON.parse(cached);
      } else {
        list = DEFAULT_LOCATIONS;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_LOCATIONS));
      }
    } catch (_) {
      list = DEFAULT_LOCATIONS;
    }
  }

  // Normalize lat/lng to numbers
  list = list.map(item => ({
    ...item,
    lat: Number(item.lat || item.latitude || 24.39714),
    lng: Number(item.lng || item.longitude || 90.858307),
    isActive: item.isActive !== false
  }));

  if (!includeInactive) {
    return list.filter(item => item.isActive);
  }
  return list;
};

// 2. Add New Village Location
export const addVillageLocation = async (locationData, currentUser) => {
  const newLoc = {
    ...locationData,
    lat: Number(locationData.lat),
    lng: Number(locationData.lng),
    isActive: locationData.isActive !== false,
    isFeatured: Boolean(locationData.isFeatured),
    displayOrder: Number(locationData.displayOrder || 1),
    createdBy: currentUser?.uid || 'admin',
    createdAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...newLoc,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      newLoc.id = docRef.id;
    } else {
      newLoc.id = `loc-${Date.now()}`;
    }
  } catch (err) {
    console.warn("Firestore addVillageLocation error:", err);
    newLoc.id = `loc-${Date.now()}`;
  }

  // Update local cache
  try {
    const cached = await fetchVillageLocations(true);
    const updated = [...cached, newLoc].sort((a, b) => a.displayOrder - b.displayOrder);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyMapUpdate();
  return newLoc;
};

// 3. Update Existing Village Location
export const updateVillageLocation = async (id, updatedFields) => {
  const cleaned = {
    ...updatedFields,
    lat: Number(updatedFields.lat),
    lng: Number(updatedFields.lng),
    isActive: updatedFields.isActive !== false,
    isFeatured: Boolean(updatedFields.isFeatured),
    displayOrder: Number(updatedFields.displayOrder || 1),
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      await updateDoc(doc(db, COLLECTION_NAME, id), {
        ...cleaned,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn("Firestore updateVillageLocation error:", err);
  }

  // Update local cache
  try {
    const cached = await fetchVillageLocations(true);
    const updated = cached.map(loc => loc.id === id ? { ...loc, ...cleaned } : loc);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyMapUpdate();
  return cleaned;
};

// 4. Delete Village Location
export const deleteVillageLocation = async (id) => {
  try {
    if (isLiveFirebaseConfigured) {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    }
  } catch (err) {
    console.warn("Firestore deleteVillageLocation error:", err);
  }

  // Update local cache
  try {
    const cached = await fetchVillageLocations(true);
    const updated = cached.filter(loc => loc.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyMapUpdate();
  return true;
};

// 5. Toggle Location Active Status
export const toggleLocationStatus = async (id, currentStatus) => {
  return updateVillageLocation(id, { isActive: !currentStatus });
};
