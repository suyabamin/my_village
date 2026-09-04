/**
 * profileImageService.js
 * 
 * NEW isolated service for User Profile Picture management.
 * Independent of existing fetchers in dbService.js.
 * 
 * Functions:
 * - uploadProfileImage(file, uid)
 * - deleteProfileImage(uid)
 */

import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, isLiveFirebaseConfigured } from '../config/firebase';
import { uploadFreeImage } from './imageService';

const USERS_COLLECTION = 'users';

/**
 * Upload a profile picture for a given user and update their user document in Firestore.
 * @param {File} file - Image file object selected by user
 * @param {string} uid - User ID
 * @returns {Promise<string>} Download URL / WebP Data URL of uploaded image
 */
export const uploadProfileImage = async (file, uid) => {
  if (!file) {
    throw new Error('কোনো ফাইল নির্বাচন করা হয়নি।');
  }

  // 1. Upload & compress image via lightweight image service
  const imageUrl = await uploadFreeImage(file);
  if (!imageUrl) {
    throw new Error('ছবি আপলোড করতে ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।');
  }

  // 2. Update Firestore user document if live Firebase configured
  if (isLiveFirebaseConfigured && uid) {
    try {
      const userRef = doc(db, USERS_COLLECTION, uid);
      await updateDoc(userRef, {
        photoURL: imageUrl,
        profilePic: imageUrl,
        updatedAt: serverTimestamp()
      });
    } catch (err) {
      console.warn('Firestore photoURL update failed:', err);
    }
  }

  // 3. Sync to local user cache in localStorage if present
  try {
    const cachedUserStr = localStorage.getItem('user');
    if (cachedUserStr) {
      const cachedUser = JSON.parse(cachedUserStr);
      if (cachedUser.uid === uid) {
        cachedUser.photoURL = imageUrl;
        cachedUser.profilePic = imageUrl;
        localStorage.setItem('user', JSON.stringify(cachedUser));
      }
    }
  } catch (e) {
    console.warn('Local storage cache update failed:', e);
  }

  return imageUrl;
};

/**
 * Remove/clear profile picture for a given user.
 * @param {string} uid - User ID
 * @returns {Promise<boolean>}
 */
export const deleteProfileImage = async (uid) => {
  if (isLiveFirebaseConfigured && uid) {
    try {
      const userRef = doc(db, USERS_COLLECTION, uid);
      await updateDoc(userRef, {
        photoURL: null,
        profilePic: null,
        updatedAt: serverTimestamp()
      });
    } catch (err) {
      console.warn('Firestore delete profile picture error:', err);
      throw err;
    }
  }

  // Clear local user cache
  try {
    const cachedUserStr = localStorage.getItem('user');
    if (cachedUserStr) {
      const cachedUser = JSON.parse(cachedUserStr);
      if (cachedUser.uid === uid) {
        delete cachedUser.photoURL;
        delete cachedUser.profilePic;
        localStorage.setItem('user', JSON.stringify(cachedUser));
      }
    }
  } catch (e) {
    console.warn('Local storage cache update error:', e);
  }

  return true;
};
