import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  updateDoc,
  doc,
  writeBatch,
  serverTimestamp
} from 'firebase/firestore';
import { db, isLiveFirebaseConfigured } from '../config/firebase';

const NotificationContext = createContext();

// Static village-wide notices (always shown; fetched from Firestore if available)
const STATIC_NOTIFICATIONS = [
  {
    id: 'static-1',
    title: 'মাদকবিরোধী সচেতনতা সভা অনুষ্ঠিত হবে',
    message: 'আগামী শুক্রবার বিকাল ৪টায় যুব সংঘ মাঠে।',
    type: 'emergency',
    read: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'static-2',
    title: 'বিদ্যালয় বার্ষিক ক্রীড়া প্রতিযোগিতা',
    message: 'আগামীকাল সকাল ১০টায় প্রাথমিক বিদ্যালয় মাঠে।',
    type: 'event',
    read: false,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'static-3',
    title: 'গ্রামে বৃক্ষরোপণ কর্মসূচি',
    message: 'পরশু সকালে সকলকে সাথে আনতে হবে একটি চারা।',
    type: 'event',
    read: false,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const NotificationProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [notifications, setNotifications] = useState(STATIC_NOTIFICATIONS);
  const [unreadCount, setUnreadCount] = useState(STATIC_NOTIFICATIONS.filter(n => !n.read).length);
  const [firestoreUid, setFirestoreUid] = useState(null);

  // Subscribe to real Firestore notifications for logged-in user
  useEffect(() => {
    if (!isLiveFirebaseConfigured || !firestoreUid) {
      setNotifications(STATIC_NOTIFICATIONS);
      setUnreadCount(STATIC_NOTIFICATIONS.filter(n => !n.read).length);
      return;
    }

    try {
      const q = query(
        collection(db, 'notifications'),
        where('userId', 'in', [firestoreUid, 'all']),
        orderBy('createdAt', 'desc'),
        limit(20)
      );

      const unsub = onSnapshot(q, (snap) => {
        if (snap.empty) {
          setNotifications(STATIC_NOTIFICATIONS);
          setUnreadCount(STATIC_NOTIFICATIONS.filter(n => !n.read).length);
          return;
        }
        const liveNotifs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setNotifications(liveNotifs);
        setUnreadCount(liveNotifs.filter(n => !n.read).length);
      }, (err) => {
        // Silently fall back to static on permission/network error
        console.warn('Notification listener notice:', err.message);
        setNotifications(STATIC_NOTIFICATIONS);
        setUnreadCount(STATIC_NOTIFICATIONS.filter(n => !n.read).length);
      });

      return () => unsub();
    } catch (err) {
      console.warn('Notification setup notice:', err);
    }
  }, [firestoreUid]);

  // Call this after user logs in
  const setNotificationUser = useCallback((uid) => {
    setFirestoreUid(uid);
  }, []);

  // Mark a single notification as read
  const markRead = useCallback(async (notifId) => {
    setNotifications(prev =>
      prev.map(n => n.id === notifId ? { ...n, read: true } : n)
    );
    setUnreadCount(prev => Math.max(0, prev - 1));

    if (isLiveFirebaseConfigured && !notifId.startsWith('static-')) {
      try {
        await updateDoc(doc(db, 'notifications', notifId), {
          read: true,
          readAt: serverTimestamp()
        });
      } catch (e) {
        // Ignore if permission denied (static notification)
      }
    }
  }, []);

  // Mark all as read
  const markAllRead = useCallback(async () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);

    if (isLiveFirebaseConfigured && firestoreUid) {
      try {
        const unread = notifications.filter(n => !n.read && !n.id.startsWith('static-'));
        if (unread.length > 0) {
          const batch = writeBatch(db);
          unread.forEach(n => {
            batch.update(doc(db, 'notifications', n.id), { read: true, readAt: serverTimestamp() });
          });
          await batch.commit();
        }
      } catch (e) {
        console.warn('Mark all read notice:', e);
      }
    }
  }, [notifications, firestoreUid]);

  // ── Toast Helpers ──────────────────────────────────────────────────────────
  const addToast = useCallback((message, type = 'info', duration = 4500) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{
      // Toast API (unchanged for all existing consumers)
      toasts,
      addToast,
      removeToast,
      // Notification bell API (Header)
      notifications,
      unreadCount,
      markRead,
      markAllRead,
      setNotificationUser,
    }}>
      {children}

      {/* Toast Floating Container */}
      <div
        aria-live="polite"
        aria-atomic="false"
        role="status"
        style={{
          position: 'fixed',
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
          right: '1rem',
          left: '1rem',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          pointerEvents: 'none',
          maxWidth: '420px',
          marginLeft: 'auto',
        }}
      >
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="animate-fade-in"
            style={{
              pointerEvents: 'auto',
              padding: '0.875rem 1.1rem',
              borderRadius: '12px',
              backgroundColor:
                toast.type === 'error'   ? '#ef4444' :
                toast.type === 'success' ? '#16a34a' :
                toast.type === 'warning' ? '#f59e0b' : '#1e293b',
              color: '#fff',
              boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              fontSize: '0.92rem',
              fontWeight: '500',
              lineHeight: '1.4',
            }}
          >
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                opacity: 0.85,
                fontSize: '1rem',
                padding: '0 2px',
                flexShrink: 0,
              }}
              aria-label="বন্ধ করুন"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
