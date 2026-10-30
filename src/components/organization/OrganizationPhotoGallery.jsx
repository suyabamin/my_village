import React, { useState, useEffect, useMemo } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  Plus, 
  Edit2, 
  Trash2, 
  Star, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Save, 
  Loader2, 
  RefreshCw,
  Eye,
  Maximize2
} from 'lucide-react';
import { 
  fetchGalleryImages, 
  addGalleryImage, 
  updateGalleryImage, 
  deleteGalleryImage 
} from '../../services/organizationService';
import { uploadIconOrImage } from '../../services/contentService';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';

export const OrganizationPhotoGallery = () => {
  const { hasRole, isSuperAdmin, currentUser } = useAuth();
  const { addToast } = useNotification();
  const canManage = hasRole('organization_admin') || isSuperAdmin;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  // Lightbox Modal
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Admin Upload & Edit Modal
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    caption: '',
    imageUrl: '',
    category: 'র‍্যালি ও সমাবেশ',
    isFeatured: false,
    displayOrder: 1,
    isPublished: true
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchGalleryImages(canManage);
      setImages(data || []);
    } catch (err) {
      console.warn("Gallery load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const handler = () => loadData();
    window.addEventListener('organization-gallery-updated', handler);
    return () => window.removeEventListener('organization-gallery-updated', handler);
  }, [canManage]);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set();
    images.forEach(img => {
      if (img.category) set.add(img.category);
    });
    return ['all', ...Array.from(set)];
  }, [images]);

  // Filter images by active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return images;
    return images.filter(img => img.category === activeCategory);
  }, [images, activeCategory]);

  // Lightbox navigation
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
  };
  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };
  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  // Handle image file upload
  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      // If single file, put into current form
      const url = await uploadIconOrImage(files[0], false);
      setForm(prev => ({ ...prev, imageUrl: url }));
      addToast('ছবি সফলভাবে আপলোড হয়েছে!', 'success');
    } catch (err) {
      addToast(`ছবি আপলোড ব্যর্থ: ${err.message}`, 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setForm({
      title: '',
      caption: '',
      imageUrl: '',
      category: activeCategory !== 'all' ? activeCategory : 'র‍্যালি ও সমাবেশ',
      isFeatured: false,
      displayOrder: images.length + 1,
      isPublished: true
    });
    setShowModal(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id);
    setForm({
      title: item.title || '',
      caption: item.caption || '',
      imageUrl: item.imageUrl || '',
      category: item.category || 'অন্যান্য',
      isFeatured: Boolean(item.isFeatured),
      displayOrder: item.displayOrder || 1,
      isPublished: item.isPublished !== false
    });
    setShowModal(true);
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`আপনি কি "${title}" ছবিটি গ্যালারি থেকে স্থায়ীভাবে মুছে ফেলতে চান?`)) return;
    try {
      await deleteGalleryImage(id);
      setImages(prev => prev.filter(img => img.id !== id));
      addToast('ছবি সফলভাবে মুছে ফেলা হয়েছে।', 'success');
    } catch (err) {
      addToast('মুছে ফেলতে সমস্যা হয়েছে।', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.imageUrl) {
      addToast('অনুগ্রহ করে ছবি নির্বাচন বা আপলোড করুন।', 'error');
      return;
    }
    if (!form.title.trim()) {
      addToast('ছবির শিরোনাম লিখুন।', 'error');
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        await updateGalleryImage(editingId, form);
        setImages(prev => prev.map(img => img.id === editingId ? { ...img, ...form } : img));
        addToast('ছবির তথ্য সফলভাবে আপডেট হয়েছে!', 'success');
      } else {
        const newImg = await addGalleryImage(form, currentUser);
        setImages(prev => [...prev, newImg]);
        addToast('নতুন ছবি গ্যালারিতে যোগ হয়েছে!', 'success');
      }
      setShowModal(false);
    } catch (err) {
      addToast('সংরক্ষণ ব্যর্থ হয়েছে।', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      {/* Gallery Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: '800', margin: '0 0 0.25rem 0' }}>
            যুব সংঘ ও গ্রাম ফটো গ্যালারি
          </h2>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            মাদকবিরোধী পদযাত্রা, সামাজিক সেবা, বৃক্ষরোপণ ও সাংস্কৃতিক উৎসবের স্মারক চিত্রসমূহ।
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {canManage && (
            <button onClick={handleOpenAdd} className="btn btn-primary btn-sm">
              <Plus size={15} /> নতুন ছবি যোগ
            </button>
          )}
          <button onClick={loadData} className="btn btn-secondary btn-sm" title="রিফ্রেশ">
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div style={{
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '1.25rem',
        WebkitOverflowScrolling: 'touch'
      }}>
        {categories.map(cat => {
          const isSelected = activeCategory === cat;
          const count = cat === 'all' ? images.length : images.filter(i => i.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: isSelected ? '1px solid #16a34a' : '1px solid var(--border-color, #e2e8f0)',
                background: isSelected ? '#16a34a' : 'var(--bg-elevated, #f8fafc)',
                color: isSelected ? '#ffffff' : 'var(--text-main, #334155)',
                fontWeight: isSelected ? '700' : '500',
                fontSize: '0.82rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {cat === 'all' ? 'সব ছবি' : cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
          গ্যালারি লোড হচ্ছে...
        </div>
      ) : filteredImages.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--bg-elevated, #f8fafc)', borderRadius: '14px' }}>
          <ImageIcon size={40} color="#94a3b8" style={{ marginBottom: '0.5rem' }} />
          <h4 style={{ margin: '0 0 0.35rem 0', fontWeight: '700' }}>এই অ্যালবামে কোনো ছবি নেই</h4>
          {canManage && (
            <button onClick={handleOpenAdd} className="btn btn-primary btn-sm" style={{ marginTop: '0.75rem' }}>
              <Plus size={14} /> ছবি আপলোড করুন
            </button>
          )}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem'
        }}>
          {filteredImages.map((img, idx) => (
            <div
              key={img.id || idx}
              style={{
                background: 'var(--bg-card, #ffffff)',
                border: '1px solid var(--border-color, #e2e8f0)',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Image Preview Container */}
              <div 
                style={{ 
                  position: 'relative', 
                  height: '200px', 
                  cursor: 'pointer', 
                  overflow: 'hidden',
                  background: '#0f172a'
                }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={e => {
                    e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80';
                  }}
                />

                {/* Category Pill */}
                {img.category && (
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#ffffff',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {img.category}
                  </span>
                )}

                {/* Featured Badge */}
                {img.isFeatured && (
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#f59e0b',
                    color: '#ffffff',
                    padding: '3px 7px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px'
                  }}>
                    <Star size={11} fill="#ffffff" /> ফিচার্ড
                  </span>
                )}

                {/* Hover overlay hint */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.3)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'opacity 0.2s'
                }}
                className="gallery-hover-overlay"
                >
                  <Maximize2 size={24} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: '0.85rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main, #0f172a)' }}>
                    {img.title}
                  </h4>
                  {img.caption && (
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted, #64748b)', lineHeight: 1.4 }}>
                      {img.caption}
                    </p>
                  )}
                </div>

                {/* Admin Controls */}
                {canManage && (
                  <div style={{ display: 'flex', gap: '6px', marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color, #e2e8f0)' }}>
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(img)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.75rem', padding: '3px 8px', flex: 1 }}
                    >
                      <Edit2 size={12} /> সম্পাদনা
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(img.id, img.title)}
                      className="btn btn-sm"
                      style={{ fontSize: '0.75rem', padding: '3px 8px', background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── FULLSCREEN LIGHTBOX MODAL ─── */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.92)',
          zIndex: 100000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backdropFilter: 'blur(8px)'
        }}>
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: '#ffffff',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 100001
            }}
            title="বন্ধ করুন (Esc)"
          >
            <X size={22} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: '#ffffff',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 100001
            }}
            title="পূর্ববর্তী ছবি"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: '#ffffff',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 100001
            }}
            title="পরবর্তী ছবি"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Center Image */}
          <div style={{ maxWidth: '90vw', maxHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={filteredImages[lightboxIndex].imageUrl}
              alt={filteredImages[lightboxIndex].title}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}
            />
          </div>

          {/* Bottom Caption & Counter */}
          <div style={{
            marginTop: '1rem',
            textAlign: 'center',
            color: '#ffffff',
            maxWidth: '650px'
          }}>
            <h3 style={{ margin: '0 0 0.3rem 0', fontSize: '1.15rem', fontWeight: '800' }}>
              {filteredImages[lightboxIndex].title}
            </h3>
            {filteredImages[lightboxIndex].caption && (
              <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.4 }}>
                {filteredImages[lightboxIndex].caption}
              </p>
            )}
            <div style={{ fontSize: '0.78rem', opacity: 0.65 }}>
              ছবি {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      {/* ─── ADMIN UPLOAD & EDIT MODAL ─── */}
      {showModal && canManage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1rem',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'var(--bg-card, #ffffff)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '520px',
            padding: '1.5rem',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ margin: 0, fontWeight: '800', color: '#16a34a', fontSize: '1.2rem' }}>
                {editingId ? '✏️ ছবির বিবরণ সম্পাদনা' : '➕ নতুন ছবি যোগ / আপলোড'}
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Image Upload or URL */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>ছবি আপলোড বা URL *</label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    required
                    placeholder="https://... বা পাশে আপলোড করুন"
                    value={form.imageUrl}
                    onChange={e => setForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                    style={{ flex: 1, minWidth: '180px', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                  <label style={{
                    padding: '0.6rem 0.85rem',
                    background: '#f1f5f9',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    <Upload size={14} /> {uploading ? 'আপলোড হচ্ছে...' : 'ছবি নির্বাচন'}
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/webp"
                      style={{ display: 'none' }}
                      onChange={handleFileUpload}
                      disabled={uploading}
                    />
                  </label>
                </div>

                {/* Preview Thumbnail */}
                {form.imageUrl && (
                  <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                    <img
                      src={form.imageUrl}
                      alt="preview"
                      style={{ height: '110px', borderRadius: '8px', objectFit: 'cover', border: '2px solid #e2e8f0' }}
                      onError={e => e.target.style.display = 'none'}
                    />
                  </div>
                )}
              </div>

              {/* Title */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>ছবির শিরোনাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: মাদকবিরোধী যুব সমাবেশ ২০২৬"
                  value={form.title}
                  onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              {/* Category / Album */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>অ্যালবাম / বিভাগ</label>
                <input
                  type="text"
                  placeholder="যেমন: র‍্যালি ও সমাবেশ, বৃক্ষরোপণ, সমাজসেবা"
                  value={form.category}
                  onChange={e => setForm(prev => ({ ...prev, category: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              {/* Caption */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>ক্যাপশন / বিবরণ (বাংলায়)</label>
                <textarea
                  rows="2"
                  placeholder="ছবির পেছনের ইতিহাস বা কর্মসূচির বিবরণ..."
                  value={form.caption}
                  onChange={e => setForm(prev => ({ ...prev, caption: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              {/* Toggles */}
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '700' }}>
                  <input
                    type="checkbox"
                    checked={form.isFeatured}
                    onChange={e => setForm(prev => ({ ...prev, isFeatured: e.target.checked }))}
                    style={{ width: '16px', height: '16px', accentColor: '#f59e0b' }}
                  />
                  ⭐ ফিচার্ড ছবি
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '700' }}>
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={e => setForm(prev => ({ ...prev, isPublished: e.target.checked }))}
                    style={{ width: '16px', height: '16px', accentColor: '#16a34a' }}
                  />
                  🟢 প্রকাশিত
                </label>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary" disabled={saving || uploading} style={{ flex: 1, justifyContent: 'center' }}>
                  <Save size={16} /> {saving ? 'সংরক্ষণ হচ্ছে...' : (editingId ? 'আপডেট করুন' : 'যোগ করুন')}
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-secondary">
                  বাতিল
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationPhotoGallery;
