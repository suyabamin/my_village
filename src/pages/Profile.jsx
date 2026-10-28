import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { User, Phone, Mail, Shield, Save, MapPin, Loader2 } from 'lucide-react';
import ProfileAvatar from '../components/profile/ProfileAvatar';
import ProfileImageUploader from '../components/profile/ProfileImageUploader';

const ROLE_LABELS = {
  super_admin: 'সুপার এডমিন',
  game_admin: 'খেলাধুলা এডমিন',
  education_admin: 'শিক্ষা প্রতিষ্ঠান এডমিন',
  mosque_admin: 'মসজিদ এডমিন',
  organization_admin: 'যুব সংঘ এডমিন',
  cultural_admin: 'সাংস্কৃতিক এডমিন',
  social_admin: 'সামাজিক সেবা এডমিন',
  emergency_admin: 'জরুরি সেবা এডমিন',
  religious_admin: 'ধর্মীয় বিষয়াদি এডমিন',
  user: 'গ্রামের সাধারণ নাগরিক'
};

export const Profile = () => {
  const { userProfile, currentUser, updateUserProfile, loading } = useAuth();
  const { addToast } = useNotification();

  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [saving, setSaving] = useState(false);

  // Synchronize inputs whenever userProfile or currentUser loads / updates
  useEffect(() => {
    if (userProfile) {
      setDisplayName(userProfile.displayName || currentUser?.displayName || '');
      setPhone(userProfile.phone || currentUser?.phoneNumber || '');
      setBio(userProfile.bio || '');
      setAddress(userProfile.address || 'আলমদীপাড়া, বাংলাদেশ');
    } else if (currentUser) {
      setDisplayName(currentUser.displayName || currentUser.email?.split('@')[0] || '');
      setPhone(currentUser.phoneNumber || '');
      setBio('');
      setAddress('আলমদীপাড়া, বাংলাদেশ');
    }
  }, [userProfile, currentUser]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (updateUserProfile) {
        await updateUserProfile({
          displayName: displayName.trim(),
          phone: phone.trim(),
          bio: bio.trim(),
          address: address.trim()
        });
      }
      addToast('প্রোফাইল তথ্য সফলভাবে ডেটাবেজে সংরক্ষিত হয়েছে!', 'success');
    } catch (err) {
      console.error('Profile save error:', err);
      addToast('তথ্য সংরক্ষণ করতে সমস্যা হয়েছে।', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleProfilePhotoUpdated = async (newPhotoUrl) => {
    if (updateUserProfile) {
      await updateUserProfile({ 
        photoURL: newPhotoUrl, 
        profilePic: newPhotoUrl 
      });
      addToast('প্রোফাইল ছবি সফলভাবে আপডেট করা হয়েছে!', 'success');
    }
  };

  const roles = userProfile?.roles || (currentUser ? ['user'] : []);

  return (
    <div className="container" style={{ paddingTop: 'clamp(1.5rem, 4vw, 2.5rem)', paddingBottom: 'clamp(1.5rem, 4vw, 2.5rem)', maxWidth: '720px' }}>
      <div className="card animate-fade-in" style={{ padding: 'clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: 'clamp(1.4rem, 4.5vw, 1.8rem)', fontWeight: '800', margin: 0, color: 'var(--color-primary-800)' }}>
            আমার প্রোফাইল
          </h1>
          {loading && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <Loader2 size={16} className="animate-spin" /> প্রোফাইল লোড হচ্ছে...
            </span>
          )}
        </div>

        {/* User Card with Profile Avatar */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          marginBottom: '1.5rem', 
          padding: 'clamp(0.85rem, 3vw, 1.25rem)', 
          backgroundColor: 'var(--bg-elevated, #f8faf8)', 
          borderRadius: 'var(--radius-md, 12px)',
          border: '1px solid var(--border-color, #e2ece2)'
        }}>
          <ProfileAvatar 
            user={userProfile || currentUser} 
            size={68} 
          />
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: 'var(--text-dark, #1f2937)' }}>
              {userProfile?.displayName || currentUser?.displayName || 'আলমদীপাড়া নাগরিক'}
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #6b7280)', marginTop: '2px' }}>
              {userProfile?.email || currentUser?.email || 'demo@alamdipara.gov.bd'}
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              {roles.map(r => (
                <span 
                  key={r} 
                  className={`badge ${r.includes('admin') ? 'badge-green' : 'badge-gray'}`}
                  style={{ fontSize: '0.75rem', padding: '3px 8px' }}
                >
                  <Shield size={11} style={{ marginRight: '3px' }} />
                  {ROLE_LABELS[r] || r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature B: Profile Picture Upload / Change / Remove Component */}
        <ProfileImageUploader 
          currentUser={userProfile || currentUser}
          onProfileUpdated={handleProfilePhotoUpdated}
        />

        <form onSubmit={handleSaveProfile} style={{ marginTop: '1.75rem' }}>
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: '700' }}>পূর্ণ নাম</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                className="form-input" 
                style={{ paddingLeft: '2.5rem' }}
                required
                value={displayName} 
                onChange={e => setDisplayName(e.target.value)} 
                placeholder="আপনার পূর্ণ নাম লিখুন"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ fontWeight: '700' }}>ইমেইল ঠিকানা (পরিবর্তনযোগ্য নয়)</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="email" 
                className="form-input" 
                style={{ paddingLeft: '2.5rem', backgroundColor: 'var(--bg-elevated, #f3f4f6)', cursor: 'not-allowed' }}
                disabled
                value={userProfile?.email || currentUser?.email || ''} 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ fontWeight: '700' }}>মোবাইল নম্বর</label>
            <div style={{ position: 'relative' }}>
              <Phone size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="tel" 
                className="form-input" 
                style={{ paddingLeft: '2.5rem' }}
                value={phone} 
                onChange={e => setPhone(e.target.value)} 
                placeholder="যেমন: 01711223344"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ fontWeight: '700' }}>গ্রামের পাড়া / ঠিকানা</label>
            <div style={{ position: 'relative' }}>
              <MapPin size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                className="form-input" 
                style={{ paddingLeft: '2.5rem' }}
                value={address} 
                onChange={e => setAddress(e.target.value)} 
                placeholder="যেমন: উত্তর পাড়া, আলমদীপাড়া"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ fontWeight: '700' }}>আমার পরিচয় / বায়ো বিবরণ</label>
            <textarea 
              className="form-textarea" 
              rows="3" 
              value={bio} 
              onChange={e => setBio(e.target.value)} 
              placeholder="আপনার পেশা, আগ্রহ ও পরিচয় সংক্ষেপে লিখুন..." 
            />
          </div>

          <button 
            type="submit" 
            disabled={saving}
            className="btn btn-primary btn-lg" 
            style={{ width: '100%', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            {saving ? (
              <>
                <Loader2 size={18} className="animate-spin" /> তথ্য সংরক্ষণ হচ্ছে...
              </>
            ) : (
              <>
                <Save size={18} /> প্রোফাইল তথ্য সংরক্ষণ করুন
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
