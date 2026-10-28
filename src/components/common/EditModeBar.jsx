import React from 'react';
import { useEditMode } from '../../context/EditModeContext';
import { Edit3, CheckCircle, X } from 'lucide-react';

export const EditModeBar = () => {
  const { editModeEnabled, toggleEditMode } = useEditMode();

  if (!editModeEnabled) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: 'linear-gradient(135deg, #15803d, #16a34a)',
        color: '#ffffff',
        padding: '0.65rem 1.25rem',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        fontSize: '0.88rem',
        fontWeight: '600',
        boxShadow: '0 8px 24px rgba(22, 163, 74, 0.45)',
        border: '1.5px solid rgba(255, 255, 255, 0.25)',
        animation: 'fadeInUp 0.25s ease-out',
        maxWidth: '92vw'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Edit3 size={16} />
        <span>সুপার এডমিন এডিট মোড সক্রিয় — পেন্সিল আইকনে ক্লিক করে টেক্সট ও শিরোনাম সম্পাদনা করুন</span>
      </div>
      <button
        type="button"
        onClick={toggleEditMode}
        title="এডিট মোড বন্ধ করুন"
        aria-label="এডিট মোড বন্ধ করুন"
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          border: 'none',
          color: '#ffffff',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: 0,
          flexShrink: 0,
          transition: 'background 0.2s'
        }}
      >
        <X size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default EditModeBar;
