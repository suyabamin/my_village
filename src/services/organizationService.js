/**
 * organizationService.js
 * 
 * Dedicated service for:
 * 1. Alamdipara Youth Organization Daily Activities & Schedules (দৈনিক কার্যক্রম ও সময়সূচি)
 * 2. Weekly Village Guard Duty Roster (সাপ্তাহিক গ্রাম পাহারা)
 * 3. Organization & Village Photo Gallery (ফটো গ্যালারি)
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
  where,
  serverTimestamp
} from 'firebase/firestore';
import { db, isLiveFirebaseConfigured } from '../config/firebase';
import { compressImage, uploadFreeImage } from './imageService';

// Collection Names
const PROGRAMS_COLLECTION = 'organization_programs';
const GUARD_COLLECTION = 'village_guard_schedule';
const GALLERY_COLLECTION = 'organization_gallery';

// Local Storage Cache Keys
const PROGRAMS_CACHE_KEY = 'alamdipara_org_programs_cache';
const GUARD_CACHE_KEY = 'alamdipara_village_guard_cache';
const GALLERY_CACHE_KEY = 'alamdipara_org_gallery_cache';

// Dispatch event helpers
const notifyProgramsUpdate = () => {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('organization-programs-updated'));
};
const notifyGuardUpdate = () => {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('village-guard-updated'));
};
const notifyGalleryUpdate = () => {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('organization-gallery-updated'));
};

// 7 Weekdays Definition (Starting from Saturday as standard in Bangladesh)
export const WEEKDAYS = [
  { key: 'saturday', nameBn: 'শনিবার', nameEn: 'Saturday', order: 1 },
  { key: 'sunday', nameBn: 'রবিবার', nameEn: 'Sunday', order: 2 },
  { key: 'monday', nameBn: 'সোমবার', nameEn: 'Monday', order: 3 },
  { key: 'tuesday', nameBn: 'মঙ্গলবার', nameEn: 'Tuesday', order: 4 },
  { key: 'wednesday', nameBn: 'বুধবার', nameEn: 'Wednesday', order: 5 },
  { key: 'thursday', nameBn: 'বৃহস্পতিবার', nameEn: 'Thursday', order: 6 },
  { key: 'friday', nameBn: 'শুক্রবার', nameEn: 'Friday', order: 7 }
];

// Initial Seed Daily Programs
export const DEFAULT_PROGRAMS = [
  {
    id: "prog-1",
    title: "সকালের ফজর পরবর্তী শারীরিক কসরত ও যুব আড্ডা",
    time: "সকাল ৭:০০ AM - ৮:৩০ AM",
    category: "স্বাস্থ্য ও শরীরচর্চা",
    description: "নিয়মিত শারীরিক ব্যায়াম, দৌড় এবং তরুণদের মধ্যে ঐক্য ও সুস্বাস্থ্য সচেতনতা তৈরি।",
    status: "নিয়মিত",
    isPublished: true,
    displayOrder: 1
  },
  {
    id: "prog-2",
    title: "কম্পিউটার ও ডিজিটাল স্কিল ট্রেনিং সেশন (যুব কেন্দ্র)",
    time: "সকাল ১০:০০ AM - ১২:০০ PM",
    category: "ডিজিটাল শিক্ষা",
    description: "গ্রামের শিক্ষার্থীদের বিনামূল্যে বেসিক কম্পিউটার প্রশিক্ষণ ও ফ্রিল্যান্সিং ক্যারিয়ার গাইডলাইন।",
    status: "নিয়মিত",
    isPublished: true,
    displayOrder: 2
  },
  {
    id: "prog-3",
    title: "কেন্দ্রীয় খেলার মাঠে নিয়মিত ফুটবল ও ক্রিকেট অনুশীলন",
    time: "বিকাল ৪:০০ PM - ৬:০০ PM",
    category: "খেলাধুলা",
    description: "মাদকমুক্ত সমাজ বিনির্মাণে তারুণ্যের শক্তিকে ক্রীড়াঙ্গনে যুক্ত রাখার প্রতিদিনের অনুশীলন।",
    status: "নিয়মিত",
    isPublished: true,
    displayOrder: 3
  },
  {
    id: "prog-4",
    title: "মাদকবিরোধী সচেতনতা সভা ও সান্ধ্য পাঠচক্র",
    time: "সন্ধ্যা ৭:০০ PM - ৮:৩০ PM",
    category: "সমাজকল্যাণ",
    description: "গ্রামের নিরাপত্তা বিষয়ক আলোচনা, বই পড়া এবং যুবসংঘের মাসিক কর্মসূচি পর্যালোচনা।",
    status: "নিয়মিত",
    isPublished: true,
    displayOrder: 4
  }
];

// Initial Seed Weekly Guard Duty (Each day with multiple real-world shift templates)
export const DEFAULT_GUARD_SCHEDULE = [
  // Saturday
  {
    id: "guard-sat-1",
    weekday: "saturday",
    guardName: "আব্দুল করিম",
    phone: "01711223344",
    startTime: "07:30 PM",
    endTime: "12:00 AM",
    area: "পূর্বপাড়া ও মাদ্রাসা মোড়",
    note: "টর্চলাইট ও বাঁশি যুব সংঘ কার্যালয় থেকে নিতে হবে।",
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "guard-sat-2",
    weekday: "saturday",
    guardName: "মোঃ রহিম",
    phone: "01722334455",
    startTime: "12:00 AM",
    endTime: "04:00 AM",
    area: "পশ্চিমপাড়া ও বটতলা মোড়",
    note: "মধ্যরাতের প্রধান টহল দল।",
    displayOrder: 2,
    isPublished: true
  },
  {
    id: "guard-sat-3",
    weekday: "saturday",
    guardName: "মোঃ সালাম",
    phone: "01733445566",
    startTime: "04:00 AM",
    endTime: "07:30 AM",
    area: "গ্রামের প্রবেশমুখ ও বাজার সংলগ্ন",
    note: "ফজরের নামাজের সময় মসজিদ প্রাঙ্গণ পরিদর্শন।",
    displayOrder: 3,
    isPublished: true
  },

  // Sunday
  {
    id: "guard-sun-1",
    weekday: "sunday",
    guardName: "সুমন হোসেন",
    phone: "01744556677",
    startTime: "08:00 PM",
    endTime: "01:00 AM",
    area: "দক্ষিণ মাঠ সংলগ্ন রাস্তা",
    note: "কৃষি পাম্প ঘর নজরদারী।",
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "guard-sun-2",
    weekday: "sunday",
    guardName: "আরিফুল ইসলাম",
    phone: "01755667788",
    startTime: "01:00 AM",
    endTime: "06:00 AM",
    area: "বিদ্যালয় সড়ক ও কেন্দ্রীয় খেলার মাঠ",
    note: "সতর্কতা ও নিয়মিত টহল।",
    displayOrder: 2,
    isPublished: true
  },

  // Monday
  {
    id: "guard-mon-1",
    weekday: "monday",
    guardName: "তারেক মাহমুদ",
    phone: "01766778899",
    startTime: "07:30 PM",
    endTime: "12:00 AM",
    area: "উত্তরপাড়া ও চড়ে বন্দ মোড়",
    note: "গ্রামের উত্তর গেটে অবস্থান।",
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "guard-mon-2",
    weekday: "monday",
    guardName: "মাহবুব আলম",
    phone: "01777889900",
    startTime: "12:00 AM",
    endTime: "05:00 AM",
    area: "কেন্দ্রীয় বাজার ও সংলগ্ন দোকানপাট",
    note: "দোকানদার সমিতির সাথে সমন্বয়।",
    displayOrder: 2,
    isPublished: true
  },

  // Tuesday
  {
    id: "guard-tue-1",
    weekday: "tuesday",
    guardName: "কামাল উদ্দিন",
    phone: "01788990011",
    startTime: "08:00 PM",
    endTime: "01:00 AM",
    area: "পূর্বপাড়া জামে মসজিদ এলাকা",
    note: "পাহারা ডিউটি রেজিস্টারে সই করতে হবে।",
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "guard-tue-2",
    weekday: "tuesday",
    guardName: "জাকির হোসেন",
    phone: "01799001122",
    startTime: "01:00 AM",
    endTime: "06:00 AM",
    area: "মাগুড়া বন্দ সংলগ্ন সংযোগ সড়ক",
    note: "জরুরি প্রয়োজনে যুব সংঘ নম্বরে যোগাযোগ।",
    displayOrder: 2,
    isPublished: true
  },

  // Wednesday
  {
    id: "guard-wed-1",
    weekday: "wednesday",
    guardName: "নূর মোহাম্মদ",
    phone: "01811223344",
    startTime: "07:30 PM",
    endTime: "12:30 AM",
    area: "প্রাথমিক বিদ্যালয় ও যুব ক্লাব প্রাঙ্গণ",
    note: "নিয়মিত নিরাপত্তা পরীক্ষা।",
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "guard-wed-2",
    weekday: "wednesday",
    guardName: "শফিকুল ইসলাম",
    phone: "01822334455",
    startTime: "12:30 AM",
    endTime: "05:30 AM",
    area: "পশ্চিমপাড়া ও মাঠের সীমানা",
    note: "রাতের টহল বজায় রাখা।",
    displayOrder: 2,
    isPublished: true
  },

  // Thursday
  {
    id: "guard-thu-1",
    weekday: "thursday",
    guardName: "রফিকুল হাসান",
    phone: "01833445566",
    startTime: "07:30 PM",
    endTime: "12:00 AM",
    area: "বাজার এলাকা ও ইউনিয়ন সড়ক সংযোগ",
    note: "সাপ্তাহিক হাট পরবর্তী নিরাপত্তা।",
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "guard-thu-2",
    weekday: "thursday",
    guardName: "হাসান মাহমুদ",
    phone: "01844556677",
    startTime: "12:00 AM",
    endTime: "05:30 AM",
    area: "পূর্ব ও দক্ষিণ পাড়া সীমানা",
    note: "টহল নিশ্চিতকরণ।",
    displayOrder: 2,
    isPublished: true
  },

  // Friday
  {
    id: "guard-fri-1",
    weekday: "friday",
    guardName: "শাহ আলম",
    phone: "01855667788",
    startTime: "07:30 PM",
    endTime: "12:00 AM",
    area: "কেন্দ্রীয় ঈদগাহ ও মসজিদ সংলগ্ন চত্বর",
    note: "জুমার পরবর্তী রাতের পাহারা।",
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "guard-fri-2",
    weekday: "friday",
    guardName: "আনোয়ার পারভেজ",
    phone: "01866778899",
    startTime: "12:00 AM",
    endTime: "05:00 AM",
    area: "সকল প্রবেশপথ ও সংযোগ মোড়",
    note: "জরুরি ব্যাকআপ টিম প্রস্তুত।",
    displayOrder: 2,
    isPublished: true
  }
];

// Initial Seed Gallery Images
export const DEFAULT_GALLERY = [
  {
    id: "gal-1",
    title: "মাদকবিরোধী যুব র্যালি ২০২৬",
    caption: "আলমদীপাড়া যুবসমাজের উদ্যোগে আয়োজিত গণসচেতনতামূলক মাদকবিরোধী পদযাত্রা।",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    category: "র‍্যালি ও সমাবেশ",
    isFeatured: true,
    displayOrder: 1,
    isPublished: true
  },
  {
    id: "gal-2",
    title: "ফলদ ও বনজ বৃক্ষরোপণ কর্মসূচি",
    caption: "সবুজ আলমদীপাড়া বিনির্মাণে বিভিন্ন সড়কের দুই পাশে দুই শতাধিক চারা রোপণ।",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    category: "বৃক্ষরোপণ",
    isFeatured: true,
    displayOrder: 2,
    isPublished: true
  },
  {
    id: "gal-3",
    title: "বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও চিকিৎসা ক্যাম্প",
    caption: "গ্রামের অসহায় প্রবীণ ও শিশুদের জন্য দিনব্যাপী ফ্রী মেডিকেল পরামর্শ ও রক্তদান।",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    category: "সমাজসেবা",
    isFeatured: true,
    displayOrder: 3,
    isPublished: true
  },
  {
    id: "gal-4",
    title: "বার্ষিক আন্তঃপাড়া ফুটবল টুর্নামেন্ট ফাইনাল",
    caption: "কেন্দ্রীয় খেলার মাঠে হাজারো দর্শকের উপস্থিতিতে অনুষ্ঠিত জমজমাট ফুটবল ফাইনাল ম্যাচ।",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
    category: "ক্রীড়া প্রতিযোগিতা",
    isFeatured: false,
    displayOrder: 4,
    isPublished: true
  },
  {
    id: "gal-5",
    title: "ডিজিটাল পাঠাগার উদ্বোধন ও বই বিতরণ",
    caption: "তরুণ প্রজন্মকে মোবাইল আসক্তি কমিয়ে বইমুখী করতে যুব সংঘের নতুন পাঠাগার।",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
    category: "শিক্ষা ও পাঠাগার",
    isFeatured: false,
    displayOrder: 5,
    isPublished: true
  },
  {
    id: "gal-6",
    title: "রাত্রিকালীন স্বেচ্ছাসেবী গ্রাম পাহারা দল",
    caption: "গ্রামের নিরাপত্তা ও শান্তিশৃঙ্খলা রক্ষায় যুব সংঘের স্বেচ্ছাসেবকদের রাতের টহল কার্যক্রম।",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    category: "গ্রাম পাহারা",
    isFeatured: true,
    displayOrder: 6,
    isPublished: true
  }
];

// ─── BANGLADESH TIME & SHIFT UTILITIES ──────────────────────────────────────

/**
 * Get accurate current date and time info in Bangladesh (Asia/Dhaka) timezone.
 */
export const getBangladeshTimeInfo = () => {
  const now = new Date();
  const dhakaStr = now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  const dhakaDate = new Date(dhakaStr);
  const dayIndex = dhakaDate.getDay(); // 0: Sunday, 1: Mon, ..., 6: Sat

  const dayMap = {
    6: 'saturday',
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday'
  };

  const currentDayKey = dayMap[dayIndex] || 'saturday';
  const hours = dhakaDate.getHours();
  const minutes = dhakaDate.getMinutes();

  return {
    date: dhakaDate,
    currentDayKey,
    hours,
    minutes,
    timeMinutes: hours * 60 + minutes
  };
};

/**
 * Parse time string like "07:30 PM", "12:00 AM", "19:30" to minutes from 00:00
 */
export const parseTimeToMinutes = (timeStr) => {
  if (!timeStr) return 0;
  const cleaned = timeStr.trim().toUpperCase();
  const isPM = cleaned.includes('PM');
  const isAM = cleaned.includes('AM');

  const match = cleaned.match(/(\d+):(\d+)/);
  if (!match) return 0;

  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);

  if (isPM && h < 12) h += 12;
  if (isAM && h === 12) h = 0;

  return h * 60 + m;
};

/**
 * Check if a guard duty shift is active right now (considering overnight shifts).
 */
export const isShiftCurrentlyActive = (startTimeStr, endTimeStr, weekdayKey) => {
  const { currentDayKey, timeMinutes } = getBangladeshTimeInfo();
  if (currentDayKey !== weekdayKey) return false;

  const startMin = parseTimeToMinutes(startTimeStr);
  let endMin = parseTimeToMinutes(endTimeStr);

  // If shift crosses midnight (e.g., 07:30 PM [1170] to 04:00 AM [240])
  if (endMin <= startMin) {
    return timeMinutes >= startMin || timeMinutes < endMin;
  }

  return timeMinutes >= startMin && timeMinutes < endMin;
};

// ─── 1. DAILY ACTIVITIES & SCHEDULES (organization_programs) ─────────────────

export const fetchOrganizationPrograms = async (includeUnpublished = false) => {
  let list = [];

  try {
    if (isLiveFirebaseConfigured) {
      const q = query(collection(db, PROGRAMS_COLLECTION), orderBy('displayOrder', 'asc'));
      const snap = await getDocs(q);
      if (!snap.empty) {
        list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn("fetchOrganizationPrograms fallback:", err.message);
  }

  if (!list || list.length === 0) {
    try {
      const cached = localStorage.getItem(PROGRAMS_CACHE_KEY);
      list = cached ? JSON.parse(cached) : DEFAULT_PROGRAMS;
    } catch (_) {
      list = DEFAULT_PROGRAMS;
    }
  }

  if (!includeUnpublished) {
    return list.filter(p => p.isPublished !== false);
  }
  return list;
};

export const addOrganizationProgram = async (programData, currentUser) => {
  const newProg = {
    ...programData,
    displayOrder: Number(programData.displayOrder || 1),
    isPublished: programData.isPublished !== false,
    createdBy: currentUser?.uid || 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, PROGRAMS_COLLECTION), {
        ...newProg,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      newProg.id = docRef.id;
    } else {
      newProg.id = `prog-${Date.now()}`;
    }
  } catch (err) {
    newProg.id = `prog-${Date.now()}`;
  }

  try {
    const cached = await fetchOrganizationPrograms(true);
    const updated = [...cached, newProg].sort((a, b) => a.displayOrder - b.displayOrder);
    localStorage.setItem(PROGRAMS_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyProgramsUpdate();
  return newProg;
};

export const updateOrganizationProgram = async (id, updatedFields) => {
  const cleaned = {
    ...updatedFields,
    displayOrder: Number(updatedFields.displayOrder || 1),
    isPublished: updatedFields.isPublished !== false,
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      await updateDoc(doc(db, PROGRAMS_COLLECTION, id), {
        ...cleaned,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn("updateOrganizationProgram error:", err);
  }

  try {
    const cached = await fetchOrganizationPrograms(true);
    const updated = cached.map(p => p.id === id ? { ...p, ...cleaned } : p);
    localStorage.setItem(PROGRAMS_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyProgramsUpdate();
  return cleaned;
};

export const deleteOrganizationProgram = async (id) => {
  try {
    if (isLiveFirebaseConfigured) {
      await deleteDoc(doc(db, PROGRAMS_COLLECTION, id));
    }
  } catch (err) {
    console.warn("deleteOrganizationProgram error:", err);
  }

  try {
    const cached = await fetchOrganizationPrograms(true);
    const updated = cached.filter(p => p.id !== id);
    localStorage.setItem(PROGRAMS_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyProgramsUpdate();
  return true;
};

// ─── 2. WEEKLY VILLAGE GUARD SCHEDULE (village_guard_schedule) ───────────────

/**
 * Fetch Registered Users from Firebase 'users' collection for Guard Assignment.
 */
export const fetchRegisteredUsers = async () => {
  let list = [];
  try {
    if (isLiveFirebaseConfigured) {
      const snap = await getDocs(collection(db, 'users'));
      if (!snap.empty) {
        list = snap.docs.map(d => {
          const data = d.data();
          return {
            uid: d.id,
            id: d.id,
            displayName: data.displayName || data.name || data.fullName || 'নামবিহীন ব্যবহারকারী',
            email: data.email || '',
            phone: data.phone || data.phoneNumber || '',
            photoURL: data.photoURL || data.profileImage || '',
            roles: data.roles || []
          };
        });
      }
    }
  } catch (err) {
    console.warn("fetchRegisteredUsers fallback:", err.message);
  }

  // Fallback to local cache if Firestore is offline
  if (!list || list.length === 0) {
    try {
      const cached = localStorage.getItem('alamdipara_registered_users_cache');
      if (cached) list = JSON.parse(cached);
    } catch (_) {}
  } else {
    try {
      localStorage.setItem('alamdipara_registered_users_cache', JSON.stringify(list));
    } catch (_) {}
  }

  return list;
};

export const fetchGuardSchedule = async (includeUnpublished = false) => {
  let list = [];

  try {
    if (isLiveFirebaseConfigured) {
      const q = query(collection(db, GUARD_COLLECTION), orderBy('displayOrder', 'asc'));
      const snap = await getDocs(q);
      if (!snap.empty) {
        list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn("fetchGuardSchedule fallback:", err.message);
  }

  if (!list || list.length === 0) {
    try {
      const cached = localStorage.getItem(GUARD_CACHE_KEY);
      list = cached ? JSON.parse(cached) : DEFAULT_GUARD_SCHEDULE;
    } catch (_) {
      list = DEFAULT_GUARD_SCHEDULE;
    }
  }

  if (!includeUnpublished) {
    return list.filter(g => g.isPublished !== false);
  }
  return list;
};

export const addGuardEntry = async (entryData, currentUser) => {
  const newEntry = {
    ...entryData,
    userId: entryData.userId || '',
    guardName: entryData.guardName || '',
    profileImageUrl: entryData.profileImageUrl || '',
    displayOrder: Number(entryData.displayOrder || 1),
    isPublished: entryData.isPublished !== false,
    assignedBy: currentUser?.uid || 'admin',
    createdBy: currentUser?.uid || 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, GUARD_COLLECTION), {
        ...newEntry,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      newEntry.id = docRef.id;
    } else {
      newEntry.id = `guard-${Date.now()}`;
    }
  } catch (err) {
    newEntry.id = `guard-${Date.now()}`;
  }

  try {
    const cached = await fetchGuardSchedule(true);
    const updated = [...cached, newEntry].sort((a, b) => a.displayOrder - b.displayOrder);
    localStorage.setItem(GUARD_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyGuardUpdate();
  return newEntry;
};

/**
 * Assign a registered user to multiple weekdays at once.
 */
export const assignGuardToDays = async (assignmentData, currentUser) => {
  const { weekdays = [], ...baseData } = assignmentData;
  const createdEntries = [];

  for (const day of weekdays) {
    const entry = await addGuardEntry({
      ...baseData,
      weekday: day
    }, currentUser);
    createdEntries.push(entry);
  }

  return createdEntries;
};

export const updateGuardEntry = async (id, updatedFields) => {
  const cleaned = {
    ...updatedFields,
    displayOrder: Number(updatedFields.displayOrder || 1),
    isPublished: updatedFields.isPublished !== false,
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      await updateDoc(doc(db, GUARD_COLLECTION, id), {
        ...cleaned,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn("updateGuardEntry error:", err);
  }

  try {
    const cached = await fetchGuardSchedule(true);
    const updated = cached.map(g => g.id === id ? { ...g, ...cleaned } : g);
    localStorage.setItem(GUARD_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyGuardUpdate();
  return cleaned;
};

export const deleteGuardEntry = async (id) => {
  try {
    if (isLiveFirebaseConfigured) {
      await deleteDoc(doc(db, GUARD_COLLECTION, id));
    }
  } catch (err) {
    console.warn("deleteGuardEntry error:", err);
  }

  try {
    const cached = await fetchGuardSchedule(true);
    const updated = cached.filter(g => g.id !== id);
    localStorage.setItem(GUARD_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyGuardUpdate();
  return true;
};

// ─── 3. PHOTO GALLERY (organization_gallery) ─────────────────────────────────

export const fetchGalleryImages = async (includeUnpublished = false) => {
  let list = [];

  try {
    if (isLiveFirebaseConfigured) {
      const q = query(collection(db, GALLERY_COLLECTION), orderBy('displayOrder', 'asc'));
      const snap = await getDocs(q);
      if (!snap.empty) {
        list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn("fetchGalleryImages fallback:", err.message);
  }

  if (!list || list.length === 0) {
    try {
      const cached = localStorage.getItem(GALLERY_CACHE_KEY);
      list = cached ? JSON.parse(cached) : DEFAULT_GALLERY;
    } catch (_) {
      list = DEFAULT_GALLERY;
    }
  }

  if (!includeUnpublished) {
    return list.filter(img => img.isPublished !== false);
  }
  return list;
};

export const addGalleryImage = async (imageData, currentUser) => {
  const newImg = {
    ...imageData,
    displayOrder: Number(imageData.displayOrder || 1),
    isFeatured: Boolean(imageData.isFeatured),
    isPublished: imageData.isPublished !== false,
    createdBy: currentUser?.uid || 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      const docRef = await addDoc(collection(db, GALLERY_COLLECTION), {
        ...newImg,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      newImg.id = docRef.id;
    } else {
      newImg.id = `gal-${Date.now()}`;
    }
  } catch (err) {
    newImg.id = `gal-${Date.now()}`;
  }

  try {
    const cached = await fetchGalleryImages(true);
    const updated = [...cached, newImg].sort((a, b) => a.displayOrder - b.displayOrder);
    localStorage.setItem(GALLERY_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyGalleryUpdate();
  return newImg;
};

export const updateGalleryImage = async (id, updatedFields) => {
  const cleaned = {
    ...updatedFields,
    displayOrder: Number(updatedFields.displayOrder || 1),
    isFeatured: Boolean(updatedFields.isFeatured),
    isPublished: updatedFields.isPublished !== false,
    updatedAt: new Date().toISOString()
  };

  try {
    if (isLiveFirebaseConfigured) {
      await updateDoc(doc(db, GALLERY_COLLECTION, id), {
        ...cleaned,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn("updateGalleryImage error:", err);
  }

  try {
    const cached = await fetchGalleryImages(true);
    const updated = cached.map(img => img.id === id ? { ...img, ...cleaned } : img);
    localStorage.setItem(GALLERY_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyGalleryUpdate();
  return cleaned;
};

export const deleteGalleryImage = async (id) => {
  try {
    if (isLiveFirebaseConfigured) {
      await deleteDoc(doc(db, GALLERY_COLLECTION, id));
    }
  } catch (err) {
    console.warn("deleteGalleryImage error:", err);
  }

  try {
    const cached = await fetchGalleryImages(true);
    const updated = cached.filter(img => img.id !== id);
    localStorage.setItem(GALLERY_CACHE_KEY, JSON.stringify(updated));
  } catch (_) {}

  notifyGalleryUpdate();
  return true;
};
