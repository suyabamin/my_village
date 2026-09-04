import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { User, Phone, Mail, Shield, Save } from 'lucide-react';
import ProfileAvatar from '../components/profile/ProfileAvatar';
import ProfileImageUploader from '../components/profile/ProfileImageUploader';

export const Profile = () => {
  const { userProfile, currentUser, updateUserProfileState } = useAuth();
  const { addToast } = useNotification();

  const [displayName, setDisplayName] = useState(userProfile?.displayName || '');
  const [phone, setPhone] = useState(userProfile?.phone || '');
  const [bio, setBio] = useState(userProfile?.bio || '');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (updateUserProfileState) {
      updateUserProfileState({ displayName, phone, bio });
    }
    addToast('প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে!', 'success');
  };

  const handleProfilePhotoUpdated = (newPhotoUrl) => {
    if (updateUserProfileState) {
      updateUserProfileState({ 
        photoURL: newPhotoUrl, 
        profilePic: newPhotoUrl 
      });
    }
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem', maxWidth: '700px' }}>
      <div className="card">
        <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-primary-800)' }}>
          আমার প্রোফাইল
        </h1>

        {/* User Card with Profile Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
          <ProfileAvatar 
            user={userProfile || currentUser} 
            size={64} 
          />
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>{userProfile?.displayName || 'গ্রামবাসী'}</h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>{userProfile?.email}</div>
            <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
              {userProfile?.roles?.map(r => (
                <span key={r} className="badge badge-green">{r}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature B: Profile Picture Upload / Change / Remove Component */}
        <ProfileImageUploader 
          currentUser={userProfile || currentUser}
          onProfileUpdated={handleProfilePhotoUpdated}
        />

        <form onSubmit={handleSaveProfile} style={{ marginTop: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">পূর্ণ নাম</label>
            <input type="text" className="form-input" value={displayName} onChange={e => setDisplayName(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">মোবাইল নম্বর</label>
            <input type="tel" className="form-input" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">আমার পরিচয় / জৈব বিবরণ</label>
            <textarea className="form-textarea" rows="3" value={bio} onChange={e => setBio(e.target.value)} placeholder="আপনার পেশা ও বায়ো লিখুন..." />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            <Save size={18} /> তথ্য সংরক্ষণ করুন
          </button>
        </form>
      </div>
    </div>
  );
};
