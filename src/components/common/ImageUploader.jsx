import React, { useState } from 'react';
import { UploadCloud, Image as ImageIcon, X, CheckCircle2, Loader2 } from 'lucide-react';
import { uploadFreeImage } from '../../services/imageService';

export const ImageUploader = ({ value, onChange, label = 'ছবি আপলোড করুন' }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError('');
    setUploading(true);

    try {
      const url = await uploadFreeImage(file);
      onChange(url);
    } catch (err) {
      setError(err.message || 'ছবি আপলোড করতে ব্যর্থ হয়েছে।');
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    onChange('');
    setError('');
  };

  return (
    <div className="form-group">
      <label className="form-label">{label}</label>

      {value ? (
        <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <img src={value} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button
            type="button"
            onClick={handleRemove}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
          <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', backgroundColor: 'rgba(22, 163, 74, 0.9)', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <CheckCircle2 size={14} /> ছবি প্রস্তুত (ফ্রি হোস্ট)
          </div>
        </div>
      ) : (
        <label style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          border: '2px dashed var(--border-hover)',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-elevated)',
          cursor: uploading ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          textAlign: 'center'
        }}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            disabled={uploading}
            style={{ display: 'none' }} 
          />

          {uploading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-600)' }}>
              <Loader2 size={28} className="animate-spin" />
              <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>ছবি কম্প্রেস ও ফ্রি আপলোড হচ্ছে...</span>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <UploadCloud size={32} color="var(--color-primary-600)" />
              <span style={{ fontSize: '0.92rem', fontWeight: '600' }}>কম্পিউটার বা গ্যাজেট থেকে ছবি নির্বাচন করুন</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>১০০% বিনামূল্যে (JPG, PNG, WebP)</span>
            </div>
          )}
        </label>
      )}

      {error && (
        <div style={{ color: 'var(--color-accent-red)', fontSize: '0.82rem', marginTop: '0.35rem' }}>
          {error}
        </div>
      )}
    </div>
  );
};
