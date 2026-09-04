/**
 * villageCommonImageService.js
 * 
 * NEW isolated service for Village Common Image feature.
 * This file is completely independent from existing fetchers in dbService.js.
 * 
 * Existing fetchers in dbService.js are NEVER modified.
 */

import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp
} from 'firebase/firestore';
import { db, isLiveFirebaseConfigured } from '../config/firebase';
import { uploadFreeImage } from './imageService';

const COLLECTION_NAME = 'village_common_images';
const STORAGE_KEY = 'alamdipara_village_common_images';

// Helper to notify slider components in real-time
const notifyUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('village-images-updated'));
  }
};

// Save local fallback list to localStorage
const saveLocalImages = (images) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  } catch (e) {
    console.warn('Failed to save village images to localStorage:', e);
  }
  notifyUpdate();
};

// ─── READ: Fetch all ACTIVE village images for public slider ─────────────────
export const fetchActiveVillageImages = async () => {
  try {
    if (isLiveFirebaseConfigured) {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('isActive', '==', true)
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        return items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      }
      // If Firestore collection is empty, fallback to local/demo list
    }
  } catch (err) {
    console.warn('fetchActiveVillageImages error:', err);
  }
  // Return demo/local images when Firebase is not configured or empty
  return getDemoVillageImages().filter(img => img.isActive !== false);
};

// ─── READ: Fetch ALL village images (admin view, includes inactive) ───────────
export const fetchAllVillageImages = async () => {
  try {
    if (isLiveFirebaseConfigured) {
      const q = collection(db, COLLECTION_NAME);
      const snap = await getDocs(q);
      if (!snap.empty) {
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        return items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      }
    }
  } catch (err) {
    console.warn('fetchAllVillageImages error:', err);
  }
  return getDemoVillageImages();
};

// ─── CREATE: Add a new village image ────────────────────────────────────────
export const addVillageCommonImage = async (file, imageData, createdByUid) => {
  let imageUrl = imageData.imageUrl || '';

  // Upload the file if a file object was provided
  if (file) {
    imageUrl = await uploadFreeImage(file);
    if (!imageUrl) {
      throw new Error('ছবি আপলোড করতে ব্যর্থ হয়েছে।');
    }
  }

  const newDoc = {
    imageUrl,
    title: imageData.title || '',
    caption: imageData.caption || '',
    description: imageData.description || '',
    displayOrder: Number(imageData.displayOrder) || 1,
    isActive: imageData.isActive !== false,
    createdBy: createdByUid || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (isLiveFirebaseConfigured) {
    try {
      const ref = await addDoc(collection(db, COLLECTION_NAME), {
        ...newDoc,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      notifyUpdate();
      return { id: ref.id, ...newDoc };
    } catch (err) {
      console.warn('addVillageCommonImage Firestore error:', err);
    }
  }

  // Local fallback
  const demoList = getDemoVillageImages();
  const localItem = { id: 'vimg-' + Date.now(), ...newDoc };
  demoList.unshift(localItem);
  saveLocalImages(demoList);
  return localItem;
};

// ─── UPDATE: Edit an existing village image ──────────────────────────────────
export const updateVillageCommonImage = async (imageId, file, imageData) => {
  let imageUrl = imageData.imageUrl || '';

  if (file) {
    imageUrl = await uploadFreeImage(file);
    if (!imageUrl) {
      throw new Error('ছবি আপলোড করতে ব্যর্থ হয়েছে।');
    }
  }

  const updateData = {
    ...(imageUrl ? { imageUrl } : {}),
    title: imageData.title || '',
    caption: imageData.caption || '',
    description: imageData.description || '',
    displayOrder: Number(imageData.displayOrder) || 1,
    isActive: imageData.isActive !== false,
    updatedAt: new Date().toISOString()
  };

  if (isLiveFirebaseConfigured) {
    try {
      const ref = doc(db, COLLECTION_NAME, imageId);
      await updateDoc(ref, {
        ...updateData,
        updatedAt: serverTimestamp()
      });
      notifyUpdate();
      return true;
    } catch (err) {
      console.warn('updateVillageCommonImage Firestore error:', err);
    }
  }

  // Local fallback
  const demoList = getDemoVillageImages();
  const idx = demoList.findIndex(img => img.id === imageId);
  if (idx !== -1) {
    demoList[idx] = { ...demoList[idx], ...updateData };
    saveLocalImages(demoList);
  }
  return true;
};

// ─── DELETE: Remove a village image document ─────────────────────────────────
export const deleteVillageCommonImage = async (imageId) => {
  if (isLiveFirebaseConfigured) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, imageId));
      notifyUpdate();
      return true;
    } catch (err) {
      console.warn('deleteVillageCommonImage Firestore error:', err);
    }
  }

  // Local fallback
  const demoList = getDemoVillageImages();
  const updatedList = demoList.filter(img => img.id !== imageId);
  saveLocalImages(updatedList);
  return true;
};

// ─── UPDATE ORDER: Update displayOrder for a single image ───────────────────
export const updateVillageImageOrder = async (imageId, newOrder) => {
  if (isLiveFirebaseConfigured) {
    try {
      const ref = doc(db, COLLECTION_NAME, imageId);
      await updateDoc(ref, { displayOrder: newOrder, updatedAt: serverTimestamp() });
      notifyUpdate();
      return true;
    } catch (err) {
      console.warn('updateVillageImageOrder Firestore error:', err);
    }
  }

  const demoList = getDemoVillageImages();
  const idx = demoList.findIndex(img => img.id === imageId);
  if (idx !== -1) {
    demoList[idx].displayOrder = newOrder;
    saveLocalImages(demoList);
  }
  return true;
};

// ─── TOGGLE ACTIVE STATUS ────────────────────────────────────────────────────
export const toggleVillageImageActive = async (imageId, currentStatus) => {
  const newStatus = !currentStatus;

  if (isLiveFirebaseConfigured) {
    try {
      const ref = doc(db, COLLECTION_NAME, imageId);
      await updateDoc(ref, { isActive: newStatus, updatedAt: serverTimestamp() });
      notifyUpdate();
      return newStatus;
    } catch (err) {
      console.warn('toggleVillageImageActive Firestore error:', err);
    }
  }

  // Local fallback
  const demoList = getDemoVillageImages();
  const idx = demoList.findIndex(img => img.id === imageId);
  if (idx !== -1) {
    demoList[idx].isActive = newStatus;
    saveLocalImages(demoList);
  }
  return newStatus;
};

// ─── DEMO DATA (used when Firebase is not configured or as persistent fallback)
let _demoImages = null;

const getDemoVillageImages = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        _demoImages = parsed;
        return _demoImages;
      }
    }
  } catch (e) {
    console.warn('Failed to parse village images from localStorage:', e);
  }

  _demoImages = [
    {
      id: 'vimg-1',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      title: 'লাটিয়াকুড়ি কৃষি মাঠ',
      caption: 'আলমদীপাড়ার সবুজ ধানক্ষেত',
      description: 'গ্রামের প্রধান কৃষি মাঠ — লাটিয়াকুড়ি।',
      displayOrder: 1,
      isActive: true,
      createdBy: 'system',
      createdAt: new Date().toISOString()
    },
    {
      id: 'vimg-2',
      imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
      title: 'বায়তুল নূর জামে মসজিদ',
      caption: 'গ্রামের ঐতিহ্যবাহী মসজিদ',
      description: 'আলমদীপাড়া উত্তর পাড়ার প্রধান মসজিদ।',
      displayOrder: 2,
      isActive: true,
      createdBy: 'system',
      createdAt: new Date().toISOString()
    },
    {
      id: 'vimg-3',
      imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
      title: 'আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয়',
      caption: 'জ্ঞানের আলো ছড়ানো শিক্ষা প্রতিষ্ঠান',
      description: 'গ্রামের একমাত্র সরকারি প্রাথমিক বিদ্যালয়।',
      displayOrder: 3,
      isActive: true,
      createdBy: 'system',
      createdAt: new Date().toISOString()
    },
    {
      id: 'vimg-4',
      imageUrl: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80',
      title: 'আলমদীপাড়া কেন্দ্রীয় খেলার মাঠ',
      caption: 'ক্রীড়া ও বিনোদনের কেন্দ্র',
      description: 'গ্রামের ফুটবল ও ক্রিকেট টুর্নামেন্টের প্রধান স্থান।',
      displayOrder: 4,
      isActive: true,
      createdBy: 'system',
      createdAt: new Date().toISOString()
    },
    {
      id: 'vimg-5',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      title: 'যুব উন্নয়ন সংঘের অনুষ্ঠান',
      caption: 'সামাজিক কর্মকাণ্ড ও সংগঠন',
      description: 'আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘের বার্ষিক অনুষ্ঠান।',
      displayOrder: 5,
      isActive: true,
      createdBy: 'system',
      createdAt: new Date().toISOString()
    }
  ];
  saveLocalImages(_demoImages);
  return _demoImages;
};
