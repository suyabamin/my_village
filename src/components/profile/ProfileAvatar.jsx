import React, { useState } from 'react';
import { User } from 'lucide-react';

/**
 * ProfileAvatar Component
 * 
 * Displays user photoURL / profilePic or fallback SVG user avatar.
 * Handles broken images gracefully without broken image placeholders.
 */
export default function ProfileAvatar({ 
  user, 
  photoURL, 
  name, 
  size = 40, 
  className = '',
  style = {} 
}) {
  const [imgError, setImgError] = useState(false);

  // Extract avatar URL from user object or direct photoURL prop
  const currentPhoto = photoURL || user?.photoURL || user?.profilePic;
  const displayName = name || user?.displayName || user?.name || '';
  const firstLetter = displayName ? displayName.trim().charAt(0).toUpperCase() : '';

  const avatarSizeStyle = {
    width: `${size}px`,
    height: `${size}px`,
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    borderRadius: '50%',
    ...style
  };

  if (currentPhoto && !imgError) {
    return (
      <img
        src={currentPhoto}
        alt={displayName || 'User Avatar'}
        onError={() => setImgError(true)}
        className={className}
        style={{
          ...avatarSizeStyle,
          objectFit: 'cover',
          border: '2px solid var(--primary-color, #16a34a)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      />
    );
  }

  // Fallback state: Initial letter or User Icon
  return (
    <div
      className={className}
      style={{
        ...avatarSizeStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--primary-color-light, #dcfce7)',
        color: 'var(--primary-color, #16a34a)',
        fontWeight: '700',
        fontSize: `${Math.max(14, Math.floor(size * 0.45))}px`,
        border: '2px solid var(--primary-color, #16a34a)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        userSelect: 'none',
      }}
      title={displayName || 'ব্যবহারকারী'}
    >
      {firstLetter ? firstLetter : <User size={Math.floor(size * 0.55)} />}
    </div>
  );
}
