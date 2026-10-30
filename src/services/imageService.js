/**
 * Free Image Upload & Compression Service
 * 
 * 1. Compresses large photos (e.g. 5MB-10MB mobile phone photos) on the client side
 *    to lightweight WebP images (<100KB) using HTML5 Canvas.
 * 2. Uploads to Firebase Storage (preferred) for permanent, reliable URLs.
 * 3. Falls back to free image APIs (ImgBB) if Storage is unavailable, or returns 
 *    the compressed WebP Data URL so it requires 0 paid storage!
 */

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, isLiveFirebaseConfigured } from '../config/firebase';

// Client-side Image Compressor
export const compressImage = (file, maxWidth = 1000, quality = 0.75) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to lightweight WebP data URL
        const dataUrl = canvas.toDataURL('image/webp', quality);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
};

// ImgBB Free API Upload (Optionally set VITE_IMGBB_API_KEY in .env)
export const uploadToImgBB = async (imageFileOrBase64) => {
  const apiKey = import.meta.env.VITE_IMGBB_API_KEY || "e305e55099ed5f7fbc32b21cbf7a3721"; // Free ImgBB API key fallback
  try {
    const formData = new FormData();
    if (typeof imageFileOrBase64 === 'string' && imageFileOrBase64.startsWith('data:')) {
      // Extract base64 part
      const base64Data = imageFileOrBase64.split(',')[1];
      formData.append('image', base64Data);
    } else {
      formData.append('image', imageFileOrBase64);
    }

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      return data.data.url;
    }
  } catch (err) {
    console.warn("Free ImgBB upload failed, falling back to local compressed image:", err);
  }
  return null;
};

/**
 * Main Free Upload Handler
 * Takes a file -> Compresses it client side -> Uploads to ImgBB free API or returns compressed Data URL.
 */
export const uploadFreeImage = async (file) => {
  if (!file) return null;

  // 1. Validate file type
  if (!file.type.startsWith('image/')) {
    throw new Error('কেবলমাত্র ছবি ফাইল (JPG, PNG, WebP) আপলোড করা সম্ভব।');
  }

  // 2. Compress image client-side to lightweight WebP
  const compressedBase64 = await compressImage(file);

  // 3. Try uploading to ImgBB Free API for a permanent hosted URL
  const imgbbUrl = await uploadToImgBB(compressedBase64);
  if (imgbbUrl) {
    return imgbbUrl;
  }

  // 4. Fallback: Return client-side compressed WebP Data URL (100% free, zero backend needed!)
  return compressedBase64;
};

/**
 * Upload image to Firebase Storage and return permanent download URL.
 * Falls back to ImgBB then base64 data URL if Storage is unavailable.
 */
export const uploadToFirebaseStorage = async (file, path) => {
  if (!file) return null;

  try {
    if (isLiveFirebaseConfigured) {
      const storageRef = ref(storage, path);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      return downloadUrl;
    }
  } catch (err) {
    console.warn('Firebase Storage upload failed, trying ImgBB:', err);
  }

  // Fallback to ImgBB
  try {
    const imgbbUrl = await uploadToImgBB(file);
    if (imgbbUrl) return imgbbUrl;
  } catch (_) {}

  // Final fallback: compressed base64
  return compressImage(file, 800, 0.82);
};
