import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, isLiveFirebaseConfigured } from '../config/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync user profile from Firestore users collection
  const fetchUserProfile = async (uid) => {
    try {
      if (!isLiveFirebaseConfigured) {
        // Fallback profile if live Firebase isn't configured
        const localProfile = JSON.parse(localStorage.getItem('alamdipara_demo_user') || 'null');
        return localProfile || {
          uid,
          displayName: 'আলমদীপাড়া নাগরিক',
          email: 'demo@alamdipara.gov.bd',
          phone: '01700000000',
          roles: ['super_admin', 'game_admin', 'education_admin', 'mosque_admin', 'organization_admin', 'cultural_admin', 'social_admin', 'emergency_admin', 'religious_admin']
        };
      }

      const userDocRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
        return userSnap.data();
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
    return null;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const profile = await fetchUserProfile(user.uid);
        setUserProfile(profile || {
          uid: user.uid,
          displayName: user.displayName || 'গ্রামবাসী',
          email: user.email,
          roles: []
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
    try {
      if (!isLiveFirebaseConfigured) {
        const demoUser = {
          uid: 'demo-user-' + Date.now(),
          displayName,
          email,
          phone,
          roles: ['user'],
          createdAt: new Date().toISOString()
        };
        localStorage.setItem('alamdipara_demo_user', JSON.stringify(demoUser));
        setCurrentUser({ uid: demoUser.uid, email, displayName });
        setUserProfile(demoUser);
        return demoUser;
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName });
      
      const newUserData = {
        uid: res.user.uid,
        displayName,
        email,
        phone: phone || '',
        photoURL: '',
        roles: ['user'],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await setDoc(doc(db, 'users', res.user.uid), newUserData);
      setUserProfile(newUserData);
      return res.user;
    } catch (error) {
      throw error;
    }
  };

  // Login User
  const login = async (email, password) => {
    try {
      if (!isLiveFirebaseConfigured) {
        const demoUser = {
          uid: 'demo-admin-id',
          displayName: 'এডমিন (ডেমো)',
          email: email || 'admin@alamdipara.gov.bd',
          phone: '01711223344',
          roles: ['super_admin', 'game_admin', 'education_admin', 'mosque_admin', 'organization_admin', 'cultural_admin', 'social_admin', 'emergency_admin', 'religious_admin'],
          createdAt: new Date().toISOString()
        };
        localStorage.setItem('alamdipara_demo_user', JSON.stringify(demoUser));
        setCurrentUser({ uid: demoUser.uid, email, displayName: demoUser.displayName });
        setUserProfile(demoUser);
        return demoUser;
      }

      const res = await signInWithEmailAndPassword(auth, email, password);
      const profile = await fetchUserProfile(res.user.uid);
      setUserProfile(profile);
      return res.user;
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    localStorage.removeItem('alamdipara_demo_user');
    if (isLiveFirebaseConfigured) {
      await firebaseSignOut(auth);
    }
    setCurrentUser(null);
    setUserProfile(null);
  };

  // Password Reset
  const resetPassword = async (email) => {
    if (isLiveFirebaseConfigured) {
      return sendPasswordResetEmail(auth, email);
    }
    return true;
  };

  // Helper to check roles
  const hasRole = (role) => {
    if (!userProfile || !userProfile.roles) return false;
    return userProfile.roles.includes('super_admin') || userProfile.roles.includes(role);
  };

  // Quick helper for dev mode role switching
  const switchDemoRole = (roleList) => {
    const updated = { ...userProfile, roles: roleList };
    setUserProfile(updated);
    localStorage.setItem('alamdipara_demo_user', JSON.stringify(updated));
  };

  const value = {
    currentUser,
    userProfile,
    loading,
    register,
    login,
    logout,
    resetPassword,
    hasRole,
    switchDemoRole,
    isSuperAdmin: hasRole('super_admin')
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
