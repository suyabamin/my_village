import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  sendEmailVerification,
  signOut as firebaseSignOut, 
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider, isLiveFirebaseConfigured } from '../config/firebase';

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
        // Document doesn't exist yet in Firestore: create default profile safely
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
    // Process redirect result if signInWithRedirect was used
    if (isLiveFirebaseConfigured) {
      getRedirectResult(auth)
        .then(async (result) => {
          if (result?.user) {
            setCurrentUser(result.user);
            const profile = await fetchUserProfile(result.user.uid, result.user);
            setUserProfile(profile);
          }
        })
        .catch((err) => {
          if (err.code !== 'auth/credential-already-in-use') {
            console.warn("Redirect result notice:", err.message);
          }
        });
    }

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
        setCurrentUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 1. Google Sign-In
  const signInWithGoogle = async () => {
    if (!isLiveFirebaseConfigured) {
      throw new Error('Firebase সংযোগ সঠিকভাবে কনফিগার করা নেই।');
    }

    try {
      googleProvider.setCustomParameters({ prompt: 'select_account' });
      let res;
      try {
        res = await signInWithPopup(auth, googleProvider);
      } catch (popupErr) {
        // Fallback to redirect if popup is blocked by browser/mobile
        if (popupErr.code === 'auth/popup-blocked') {
          await signInWithRedirect(auth, googleProvider);
          return null;
        }
        throw popupErr;
      }

      if (res?.user) {
        const user = res.user;
        const profile = await fetchUserProfile(user.uid, user);
        setUserProfile(profile);
        setCurrentUser(user);
        return user;
      }
      return null;
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      throw err;
    }
  };

  // 2. Register with Email, Password & Send Verification Email
  const register = async (email, password, displayName, phone) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = displayName.trim();
    const cleanPhone = (phone || '').trim();
    const isMasterAdmin = ADMIN_EMAILS.includes(cleanEmail);

    if (!isLiveFirebaseConfigured) {
      throw new Error('Firebase সংযোগ সঠিকভাবে কনফিগার করা নেই।');
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
      address: 'আলমদীপাড়া, বাংলাদেশ',
      roles: isMasterAdmin ? ALL_ADMIN_ROLES : ['user'],
      authProvider: 'password',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Write to Firestore users collection
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
    try {
      localStorage.setItem('alamdipara_registered_email', cleanEmail);
    } catch (_) {}
    setUserProfile(newUserData);
    setCurrentUser(res.user);

    // Send verification email link directly without restrictive continue URL
    try {
      await sendEmailVerification(res.user);
    } catch (vErr) {
      console.warn("sendEmailVerification notice:", vErr.message);
    }

    return res.user;
  };

  // 3. Resend Verification Email Link
  const sendVerificationEmail = async () => {
    if (!auth.currentUser) {
      throw new Error('কোনো অ্যাকাউন্ট লগইন করা নেই। অনুগ্রহ করে পুনরায় লগইন করুন।');
    }
    await sendEmailVerification(auth.currentUser);
  };

  // 4. Refresh Verification Status
  const refreshVerificationStatus = async () => {
    if (!auth.currentUser) return false;
    try {
      await auth.currentUser.reload();
      const refreshed = auth.currentUser;
      // Trigger React state refresh with a cloned user object
      setCurrentUser(Object.assign(Object.create(Object.getPrototypeOf(refreshed)), refreshed));
      return Boolean(refreshed.emailVerified);
    } catch (err) {
      console.warn("refreshVerificationStatus notice:", err.message);
      return false;
    }
  };

  // Login User
  const login = async (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!isLiveFirebaseConfigured) {
      throw new Error('Firebase সংযোগ সঠিকভাবে কনফিগার করা নেই।');
    }

    const res = await signInWithEmailAndPassword(auth, cleanEmail, password);
    const profile = await fetchUserProfile(res.user.uid, res.user);
    setUserProfile(profile || {
      uid: res.user.uid,
      displayName: res.user.displayName || res.user.email?.split('@')[0] || 'গ্রামবাসী',
      email: res.user.email,
      roles: ADMIN_EMAILS.includes(cleanEmail) ? ALL_ADMIN_ROLES : ['user']
    });
    setCurrentUser(res.user);
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

  // Google sign-in users are verified by Google; password users need emailVerified === true
  const isGoogleUser = Boolean(
    currentUser?.providerData?.some(p => p.providerId === 'google.com')
  );
  const isEmailVerified = Boolean(currentUser?.emailVerified || isGoogleUser);

  const value = {
    currentUser,
    userProfile,
    loading,
    register,
    login,
    signInWithGoogle,
    sendVerificationEmail,
    refreshVerificationStatus,
    isEmailVerified,
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
