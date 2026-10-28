import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Check, X, Loader2 } from 'lucide-react';
import { useEditMode } from '../../context/EditModeContext';
import { useNotification } from '../../context/NotificationContext';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';

/**
 * EditableText — enables Super Admin to click a pencil icon on any text or title
 * to edit inline and save directly and permanently to Firestore database.
 */
export const EditableText = ({
  value,
  collection = 'site_settings',
  docId = 'general',
  field,
  as: Tag = 'span',
  className = '',
  style = {},
  multiline = false,
  onSaved,
  children,
  ...rest
}) => {
  const { editModeEnabled } = useEditMode();
  const { addToast } = useNotification?.() || { addToast: () => {} };

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value !== undefined ? value : '');
  const [saving, setSaving] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (value !== undefined) {
      setDraft(value);
    }
  }, [value]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select?.();
    }
  }, [editing]);

  const handleSave = async (e) => {
    e?.stopPropagation?.();
    if (!field) {
      setEditing(false);
      return;
    }

    setSaving(true);
    try {
      const docRef = doc(db, collection, docId);
      await setDoc(
        docRef,
        {
          [field]: draft,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );

      onSaved?.(draft);
      addToast('তথ্য সফলভাবে ডাটাবেজে স্থায়ীভাবে সংরক্ষিত হয়েছে!', 'success');
      setEditing(false);
    } catch (err) {
      console.error('EditableText save error:', err);
      addToast('সংরক্ষণে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = (e) => {
    e?.stopPropagation?.();
    setDraft(value !== undefined ? value : '');
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  // If edit mode is off, render pure component normally
  if (!editModeEnabled) {
    return (
      <Tag className={className} style={style} {...rest}>
        {children ?? value}
      </Tag>
    );
  }

  // Active inline editing input
  if (editing) {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
          verticalAlign: 'middle',
          position: 'relative',
          zIndex: 10
        }}
        onClick={e => e.stopPropagation()}
      >
        {multiline ? (
          <textarea
            ref={inputRef}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            style={{
              fontSize: '0.95rem',
              fontFamily: 'inherit',
              fontWeight: 'normal',
              color: 'var(--text-main, #1e293b)',
              background: 'var(--bg-card, #ffffff)',
              border: '2px solid #16a34a',
              borderRadius: '8px',
              padding: '6px 10px',
              minWidth: '220px',
              maxWidth: '100%',
              boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)'
            }}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              fontSize: 'inherit',
              fontFamily: 'inherit',
              fontWeight: 'inherit',
              color: 'var(--text-main, #1e293b)',
              background: 'var(--bg-card, #ffffff)',
              border: '2px solid #16a34a',
              borderRadius: '6px',
              padding: '2px 8px',
              minWidth: '140px',
              maxWidth: '100%',
              boxShadow: '0 2px 8px rgba(22, 163, 74, 0.2)'
            }}
          />
        )}
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          title="সংরক্ষণ করুন"
          style={{
            background: '#16a34a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 8px',
            cursor: saving ? 'not-allowed' : 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px'
          }}
        >
          {saving ? <Loader2 size={13} className="animate-spin" /> : <Check size={13} strokeWidth={3} />}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={saving}
          title="বাতিল করুন"
          style={{
            background: '#ef4444',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 8px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px'
          }}
        >
          <X size={13} strokeWidth={3} />
        </button>
      </span>
    );
  }

  // Edit Mode view: show tag + pencil badge
  return (
    <Tag
      className={`${className} editable-text-active`}
      style={{
        ...style,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        outline: '1px dashed rgba(22, 163, 74, 0.45)',
        borderRadius: '4px',
        padding: '0 3px'
      }}
      {...rest}
    >
      <span>{children ?? value}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setEditing(true);
        }}
        title="সুপার এডমিন: টেক্সট সম্পাদনা করুন"
        aria-label="টেক্সট সম্পাদনা"
        style={{
          background: '#16a34a',
          color: '#ffffff',
          border: 'none',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          padding: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        <Pencil size={11} strokeWidth={2.5} />
      </button>
    </Tag>
  );
};

export default EditableText;
