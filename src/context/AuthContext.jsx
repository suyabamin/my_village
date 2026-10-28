import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, isLiveFirebaseConfigured } from '../config/firebase';

const AuthContext = createContext();

const ADMIN_EMAILS = ['admin@alamdipara.gov.bd', 'suyabamins@gmail.com'];
const ALL_ADMIN_ROLES = [
  'super_admin', 
  'game_admin', 
  'education_admin', 
  'mosque_admin', 
  'organization_admin', 
  'cultural_admin', 
  'social_admin', 
  'emergency_admin', 
  'religious_admin'
];

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync user profile from Firestore users collection with auto self-healing
  const fetchUserProfile = async (uid, authUser = null) => {
    try {
      // 1. Check local cache first for instant UI response
      const cached = localStorage.getItem(`alamdipara_profile_${uid}`);
      let fallbackProfile = cached ? JSON.parse(cached) : null;

      if (!isLiveFirebaseConfigured) {
        return fallbackProfile || {
          uid,
          displayName: authUser?.displayName || 'আলমদীপাড়া নাগরিক',
          email: authUser?.email || '',
          phone: '',
          roles: authUser?.email && ADMIN_EMAILS.includes(authUser.email.toLowerCase()) ? ALL_ADMIN_ROLES : ['user']
        };
      }

      // 2. Fetch from Firestore users collection
      const userDocRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        // Check if admin email should have admin roles
        const email = data.email || authUser?.email;
        if (email && ADMIN_EMAILS.includes(email.toLowerCase()) && !data.roles?.includes('super_admin')) {
          data.roles = ALL_ADMIN_ROLES;
        }
        localStorage.setItem(`alamdipara_profile_${uid}`, JSON.stringify(data));
        return data;
      } else {
        // Document doesn't exist yet in Firestore: self-heal and create it
        const isMasterAdmin = authUser?.email && ADMIN_EMAILS.includes(authUser.email.toLowerCase());
        const defaultProfile = {
          uid,
          displayName: authUser?.displayName || authUser?.email?.split('@')[0] || 'আলমদীপাড়া নাগরিক',
          email: authUser?.email || '',
          phone: authUser?.phoneNumber || '',
          photoURL: authUser?.photoURL || '',
          bio: '',
          address: 'আলমদীপাড়া, বাংলাদেশ',
          roles: isMasterAdmin ? ALL_ADMIN_ROLES : ['user'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        // Try writing document to Firestore in background
        setDoc(userDocRef, {
          ...defaultProfile,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }).catch(err => {
          console.warn("Self-heal user Firestore creation notice:", err.message);
        });

        localStorage.setItem(`alamdipara_profile_${uid}`, JSON.stringify(defaultProfile));
        return defaultProfile;
      }
    } catch (err) {
      console.warn("Notice in fetchUserProfile (falling back safely):", err.message);
      // Fallback: construct safe profile from authUser or cache
      const isMasterAdmin = authUser?.email && ADMIN_EMAILS.includes(authUser.email.toLowerCase());
      return {
        uid,
        displayName: authUser?.displayName || authUser?.email?.split('@')[0] || 'আলমদীপাড়া নাগরিক',
        email: authUser?.email || '',
        phone: '',
        photoURL: authUser?.photoURL || '',
        roles: isMasterAdmin ? ALL_ADMIN_ROLES : ['user']
      };
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const profile = await fetchUserProfile(user.uid, user);
        setUserProfile(profile || {
          uid: user.uid,
          displayName: user.displayName || user.email?.split('@')[0] || 'গ্রামবাসী',
          email: user.email,
          roles: ['user']
        });
      } else {
        // Check for local demo user mode
        const demoUser = JSON.parse(localStorage.getItem('alamdipara_demo_user') || 'null');
        if (demoUser) {
          setCurrentUser({ uid: demoUser.uid, email: demoUser.email, displayName: demoUser.displayName });
          setUserProfile(demoUser);
        } else {
          setCurrentUser(null);
          setUserProfile(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Register User
  const register = async (email, password, displayName, phone) => {
    const cleanEmail = email.trim();
    const cleanName = displayName.trim();
    const cleanPhone = (phone || '').trim();
    const isMasterAdmin = ADMIN_EMAILS.includes(cleanEmail.toLowerCase());

    try {
      if (!isLiveFirebaseConfigured) {
        const demoUser = {
          uid: 'demo-user-' + Date.now(),
          displayName: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          roles: isMasterAdmin ? ALL_ADMIN_ROLES : ['user'],
          createdAt: new Date().toISOString()
        };
        localStorage.setItem('alamdipara_demo_user', JSON.stringify(demoUser));
        setCurrentUser({ uid: demoUser.uid, email: cleanEmail, displayName: cleanName });
        setUserProfile(demoUser);
        return demoUser;
      }

      const res = await createUserWithEmailAndPassword(auth, cleanEmail, password);
      
      try {
        await updateProfile(res.user, { displayName: cleanName });
      } catch (e) {
        console.warn("Profile displayName update in Auth:", e);
      }
      
      const newUserData = {
        uid: res.user.uid,
        displayName: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        photoURL: '',
        bio: '',
        address: 'আলমদীপাড়া',
        roles: isMasterAdmin ? ALL_ADMIN_ROLES : ['user'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Write to Firestore with catch so auth succeeds even if Firestore rules lag
      try {
        await setDoc(doc(db, 'users', res.user.uid), {
          ...newUserData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      } catch (err) {
        console.warn("Firestore user document write notice:", err.message);
      }

      localStorage.setItem(`alamdipara_profile_${res.user.uid}`, JSON.stringify(newUserData));
      setUserProfile(newUserData);
      return res.user;
    } catch (error) {
      throw error;
    }
  };

  // Login User
  const login = async (email, password) => {
    const cleanEmail = (email || '').trim();

    if (!isLiveFirebaseConfigured) {
      throw new Error('Firebase সংযোগ সঠিকভাবে কনফিগার করা নেই।');
    }

    const res = await signInWithEmailAndPassword(auth, cleanEmail, password);
    const profile = await fetchUserProfile(res.user.uid, res.user);
    setUserProfile(profile || {
      uid: res.user.uid,
      displayName: res.user.displayName || res.user.email?.split('@')[0] || 'গ্রামবাসী',
      email: res.user.email,
      roles: ADMIN_EMAILS.includes(cleanEmail.toLowerCase()) ? ALL_ADMIN_ROLES : ['user']
    });
    return res.user;
  };

  // Logout
  const logout = async () => {
    if (currentUser?.uid) {
      localStorage.removeItem(`alamdipara_profile_${currentUser.uid}`);
    }
    if (isLiveFirebaseConfigured && auth.currentUser) {
      try {
        await firebaseSignOut(auth);
      } catch (e) {
        console.warn("Sign out notice:", e);
      }
    }
    setCurrentUser(null);
    setUserProfile(null);
  };

  // Update User Profile (persists to Firestore, Auth & local state)
  const updateUserProfile = async (updatedFields) => {
    const uid = currentUser?.uid;
    if (!uid) return;

    const merged = { ...userProfile, ...updatedFields, updatedAt: new Date().toISOString() };
    setUserProfile(merged);
    localStorage.setItem(`alamdipara_profile_${uid}`, JSON.stringify(merged));

    // Update Firebase Auth displayName / photoURL if provided
    if (auth.currentUser) {
      const authUpdates = {};
      if (updatedFields.displayName) authUpdates.displayName = updatedFields.displayName;
      if (updatedFields.photoURL) authUpdates.photoURL = updatedFields.photoURL;
      if (Object.keys(authUpdates).length > 0) {
        updateProfile(auth.currentUser, authUpdates).catch(e => console.warn("Auth updateProfile notice:", e));
      }
    }

    // Persist to Firestore
    if (isLiveFirebaseConfigured) {
      try {
        const userRef = doc(db, 'users', uid);
        await updateDoc(userRef, {
          ...updatedFields,
          updatedAt: serverTimestamp()
        });
      } catch (err) {
        // If doc doesn't exist, use setDoc
        try {
          await setDoc(doc(db, 'users', uid), {
            ...merged,
            updatedAt: serverTimestamp()
          }, { merge: true });
        } catch (e) {
          console.warn("Firestore user profile save notice:", e.message);
        }
      }
    }

    return merged;
  };

  // Password Reset
  const resetPassword = async (email) => {
    if (isLiveFirebaseConfigured) {
      return sendPasswordResetEmail(auth, email.trim());
    }
    return true;
  };

  // Helper to check roles
  const hasRole = (role) => {
    if (!userProfile || !userProfile.roles) return false;
    return userProfile.roles.includes('super_admin') || userProfile.roles.includes(role);
  };

  // Helper to update local user profile state in real-time
  const updateUserProfileState = (updatedFields) => {
    updateUserProfile(updatedFields);
  };

  const value = {
    currentUser,
    userProfile,
    loading,
    register,
    login,
    logout,
    resetPassword,
    updateUserProfile,
    updateUserProfileState,
    hasRole,
    isSuperAdmin: hasRole('super_admin')
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
