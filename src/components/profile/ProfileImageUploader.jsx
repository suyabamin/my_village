import React, { useState } from 'react';
import { uploadProfileImage, deleteProfileImage } from '../../services/profileImageService';
import ProfileAvatar from './ProfileAvatar';
import { Camera, Trash2, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ProfileImageUploader({ currentUser, onProfileUpdated }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);

  const uid = currentUser?.uid;
  const currentPhoto = currentUser?.photoURL || currentUser?.profilePic;

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError('');
    setSuccess('');

    // 1. File type check
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('কেবলমাত্র JPG, PNG বা WebP ছবি আপলোড করা সম্ভব।');
      return;
    }

    // 2. File size check (e.g. max 10MB before compression)
    if (file.size > 10 * 1024 * 1024) {
      setError('ফাইল সাইজ ১০ মেগাবাইটের কম হতে হবে।');
      return;
    }

    setLoading(true);
    try {
      const newPhotoUrl = await uploadProfileImage(file, uid);
      setSuccess('প্রোফাইল ছবি সফলভাবে আপডেট করা হয়েছে!');
      
      if (onProfileUpdated) {
        onProfileUpdated(newPhotoUrl);
      }
    } catch (err) {
      console.error('Profile image upload error:', err);
      setError(err.message || 'ছবি আপলোড করতে ব্যর্থ হয়েছে।');
    } finally {
      setLoading(false);
      // Reset input value so re-selecting same file triggers onChange
      e.target.value = '';
    }
  };

  const handleDeletePhoto = async () => {
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await deleteProfileImage(uid);
      setSuccess('প্রোফাইল ছবি মুছে ফেলা হয়েছে।');
      setConfirmDelete(false);

      if (onProfileUpdated) {
        onProfileUpdated(null);
      }
    } catch (err) {
      console.error('Profile image delete error:', err);
      setError('ছবি মুছতে ব্যর্থ হয়েছে।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.avatarSection}>
        <div style={styles.avatarWrapper}>
          <ProfileAvatar 
            user={currentUser} 
            size={110} 
          />
          {loading && (
            <div style={styles.loadingOverlay}>
              <Loader2 size={30} style={styles.spinIcon} />
              <span style={styles.uploadingText}>আপলোড হচ্ছে...</span>
            </div>
          )}
        </div>

        <div style={styles.controlsRow}>
          {/* Change / Upload Button */}
          <label htmlFor="profile-pic-input" style={styles.uploadLabel}>
            <Camera size={16} />
            <span>{currentPhoto ? 'ছবি পরিবর্তন করুন' : 'ছবি আপলোড করুন'}</span>
          </label>
          <input
            id="profile-pic-input"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileSelect}
            disabled={loading}
            style={{ display: 'none' }}
          />

          {/* Remove Button */}
          {currentPhoto && (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              disabled={loading}
              style={styles.deleteBtn}
            >
              <Trash2 size={16} />
              <span>ছবি মুছে ফেলুন</span>
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      {success && (
        <div style={styles.successMsg}>
          <CheckCircle2 size={16} />
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div style={styles.errorMsg}>
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div style={styles.modalOverlay}>
          <div style={styles.confirmBox}>
            <h4 style={styles.confirmTitle}>আপনার প্রোফাইল ছবি মুছে ফেলতে চান?</h4>
            <p style={styles.confirmSubtitle}>ছবি মুছে ফেললে ডিফল্ট প্রোফাইল আইকন প্রদর্শিত হবে।</p>
            <div style={styles.modalActions}>
              <button
                onClick={() => setConfirmDelete(false)}
                disabled={loading}
                style={styles.cancelBtn}
              >
                বাতিল
              </button>
              <button
                onClick={handleDeletePhoto}
                disabled={loading}
                style={styles.confirmDeleteBtn}
              >
                {loading ? 'মুছছে...' : 'হ্যাঁ, মুছে ফেলুন'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.25rem',
    backgroundColor: 'var(--card-bg, #ffffff)',
    borderRadius: '12px',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
    margin: '1rem 0',
  },
  avatarSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
  },
  avatarWrapper: {
    position: 'relative',
    borderRadius: '50%',
  },
  loadingOverlay: {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    zIndex: 2,
  },
  spinIcon: {
    animation: 'spin 1s linear infinite',
  },
  uploadingText: {
    fontSize: '0.72rem',
    fontWeight: '600',
    marginTop: '4px',
  },
  controlsRow: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    justify: 'center',
  },
  uploadLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.6rem 1.1rem',
    borderRadius: '8px',
    backgroundColor: 'var(--primary-color, #16a34a)',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '0.88rem',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(22, 163, 74, 0.2)',
    transition: 'all 0.2s',
  },
  deleteBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.6rem 1.1rem',
    borderRadius: '8px',
    backgroundColor: '#fff1f2',
    color: '#e11d48',
    border: '1px solid #fecdd3',
    fontWeight: '600',
    fontSize: '0.88rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  successMsg: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '1rem',
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    backgroundColor: '#dcfce7',
    color: '#15803d',
    fontSize: '0.85rem',
  },
  errorMsg: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '1rem',
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    fontSize: '0.85rem',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(3px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1rem',
  },
  confirmBox: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '12px',
    maxWidth: '380px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
  },
  confirmTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#0f172a',
    margin: '0 0 6px 0',
  },
  confirmSubtitle: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: 0,
  },
  modalActions: {
    display: 'flex',
    justify: 'center',
    gap: '0.75rem',
    marginTop: '1.25rem',
  },
  cancelBtn: {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    color: '#475569',
    fontWeight: '600',
    fontSize: '0.88rem',
    cursor: 'pointer',
  },
  confirmDeleteBtn: {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#dc2626',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '0.88rem',
    cursor: 'pointer',
  }
};
