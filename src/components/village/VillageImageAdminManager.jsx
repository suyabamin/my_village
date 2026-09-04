import React, { useState, useEffect } from 'react';
import {
  fetchAllVillageImages,
  addVillageCommonImage,
  updateVillageCommonImage,
  deleteVillageCommonImage,
  toggleVillageImageActive,
  updateVillageImageOrder
} from '../../services/villageCommonImageService';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Upload, 
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react';

export default function VillageImageAdminManager({ currentUser }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState(null); // null for add, object for edit
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Form inputs
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');
  const [displayOrder, setDisplayOrder] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const loadAllImages = async () => {
    setLoading(true);
    try {
      const data = await fetchAllVillageImages();
      const sorted = (data || []).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      setImages(sorted);
    } catch (err) {
      console.warn('Error loading village images for admin:', err);
      setError('গ্রামের ছবি লোড করতে ব্যর্থ হয়েছে।');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllImages();
  }, []);

  const openAddModal = () => {
    setEditingImage(null);
    setTitle('');
    setCaption('');
    setDescription('');
    setDisplayOrder(images.length > 0 ? images.length + 1 : 1);
    setIsActive(true);
    setImageFile(null);
    setPreviewUrl('');
    setError('');
    setIsModalOpen(true);
  };

  const openEditModal = (img) => {
    setEditingImage(img);
    setTitle(img.title || '');
    setCaption(img.caption || '');
    setDescription(img.description || '');
    setDisplayOrder(img.displayOrder || 1);
    setIsActive(img.isActive !== false);
    setImageFile(null);
    setPreviewUrl(img.imageUrl || '');
    setError('');
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('কেবলমাত্র ছবি ফাইল (JPG, PNG, WebP) আপলোড করা সম্ভব।');
        return;
      }
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!editingImage && !imageFile && !previewUrl) {
      setError('অনুগ্রহ করে একটি ছবি নির্বাচন করুন।');
      return;
    }

    if (!title.trim()) {
      setError('শিরোনাম প্রদান করুন।');
      return;
    }

    setSaving(true);
    try {
      const payload = {
        title,
        caption,
        description,
        displayOrder: Number(displayOrder) || 1,
        isActive,
        imageUrl: previewUrl
      };

      if (editingImage) {
        await updateVillageCommonImage(editingImage.id, imageFile, payload);
        setSuccess('ছবি সফলভাবে আপডেট করা হয়েছে!');
      } else {
        await addVillageCommonImage(imageFile, payload, currentUser?.uid);
        setSuccess('নতুন গ্রামের ছবি সফলভাবে যোগ করা হয়েছে!');
      }

      setIsModalOpen(false);
      await loadAllImages();
    } catch (err) {
      console.error('Save image error:', err);
      setError(err.message || 'সংরক্ষণে সমস্যা দেখা দিয়েছে।');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (imageId) => {
    setSaving(true);
    try {
      await deleteVillageCommonImage(imageId);
      setSuccess('ছবি সফলভাবে মুছে ফেলা হয়েছে!');
      setDeleteConfirmId(null);
      await loadAllImages();
    } catch (err) {
      console.error('Delete image error:', err);
      setError('ছবি মুছতে ব্যর্থ হয়েছে।');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (img) => {
    try {
      await toggleVillageImageActive(img.id, img.isActive);
      await loadAllImages();
    } catch (err) {
      console.error('Toggle active error:', err);
    }
  };

  const handleMoveOrder = async (imgIndex, direction) => {
    const targetIndex = direction === 'up' ? imgIndex - 1 : imgIndex + 1;
    if (targetIndex < 0 || targetIndex >= images.length) return;

    const currentImg = images[imgIndex];
    const targetImg = images[targetIndex];

    const currentOrder = currentImg.displayOrder || (imgIndex + 1);
    const targetOrder = targetImg.displayOrder || (targetIndex + 1);

    try {
      await updateVillageImageOrder(currentImg.id, targetOrder);
      await updateVillageImageOrder(targetImg.id, currentOrder);
      await loadAllImages();
    } catch (err) {
      console.error('Reorder error:', err);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header section */}
      <div style={styles.headerRow}>
        <div>
          <h3 style={styles.title}>📸 গ্রামের কমন ছবি গ্যালারি ব্যবস্থাপনা</h3>
          <p style={styles.subtitle}>
            প্রধান ড্যাশবোর্ডে প্রদর্শিত গ্রামের ছবি যোগ, সম্পাদনা ও পর্যায়ক্রম সাজান। (আনলিমিটেড ছবি সমর্থিত)
          </p>
        </div>
        <button onClick={openAddModal} style={styles.addBtn}>
          <Plus size={18} />
          নতুন ছবি যোগ করুন
        </button>
      </div>

      {/* Alert Messages */}
      {success && (
        <div style={styles.successAlert}>
          <CheckCircle size={18} />
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div style={styles.errorAlert}>
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {/* Images List Table / Cards */}
      {loading ? (
        <div style={styles.loadingBox}>ছবি লোড হচ্ছে...</div>
      ) : images.length === 0 ? (
        <div style={styles.emptyBox}>
          🌾 কোনো গ্রামের ছবি পাওয়া যায়নি। উপরের বোতাম চেপে ছবি যোগ করুন।
        </div>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.thRow}>
                <th style={styles.th}>ক্রম</th>
                <th style={styles.th}>ছবি</th>
                <th style={styles.th}>শিরোনাম ও ক্যাপশন</th>
                <th style={styles.th}>অবস্থা</th>
                <th style={styles.th}>অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {images.map((img, idx) => (
                <tr key={img.id} style={styles.tr}>
                  {/* Order column */}
                  <td style={styles.td}>
                    <div style={styles.orderControls}>
                      <span style={styles.orderBadge}>{img.displayOrder || idx + 1}</span>
                      <div style={styles.arrowBox}>
                        <button
                          disabled={idx === 0}
                          onClick={() => handleMoveOrder(idx, 'up')}
                          style={styles.arrowBtn}
                          title="উপরে তুলুন"
                        >
                          <ArrowUp size={14} />
                        </button>
                        <button
                          disabled={idx === images.length - 1}
                          onClick={() => handleMoveOrder(idx, 'down')}
                          style={styles.arrowBtn}
                          title="নিচে নামান"
                        >
                          <ArrowDown size={14} />
                        </button>
                      </div>
                    </div>
                  </td>

                  {/* Thumbnail column */}
                  <td style={styles.td}>
                    <img 
                      src={img.imageUrl} 
                      alt={img.title} 
                      style={styles.thumbnail}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />
                  </td>

                  {/* Title & Caption */}
                  <td style={styles.td}>
                    <div style={styles.itemTitle}>{img.title || 'শিরোনামহীন'}</div>
                    {img.caption && <div style={styles.itemCaption}>{img.caption}</div>}
                  </td>

                  {/* Status Toggle */}
                  <td style={styles.td}>
                    <button
                      onClick={() => handleToggleActive(img)}
                      style={{
                        ...styles.statusBtn,
                        backgroundColor: img.isActive ? '#dcfce7' : '#f1f5f9',
                        color: img.isActive ? '#15803d' : '#64748b',
                      }}
                    >
                      {img.isActive ? <Eye size={14} /> : <EyeOff size={14} />}
                      <span>{img.isActive ? 'সক্রিয়' : 'লুকানো'}</span>
                    </button>
                  </td>

                  {/* Action buttons */}
                  <td style={styles.td}>
                    <div style={styles.actionRow}>
                      <button 
                        onClick={() => openEditModal(img)} 
                        style={styles.editBtn}
                        title="সম্পাদনা"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button 
                        onClick={() => setDeleteConfirmId(img.id)} 
                        style={styles.deleteBtn}
                        title="মুছে ফেলুন"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div style={styles.modalOverlay}>
          <div style={styles.confirmBox}>
            <h4>আপনি কি নিশ্চিত যে এই ছবিটি মুছে ফেলতে চান?</h4>
            <p>এই প্রক্রিয়াটি বাতিল করা যাবে না।</p>
            <div style={styles.confirmActions}>
              <button 
                onClick={() => setDeleteConfirmId(null)} 
                style={styles.cancelBtn}
                disabled={saving}
              >
                বাতিল
              </button>
              <button 
                onClick={() => handleDelete(deleteConfirmId)} 
                style={styles.confirmDeleteBtn}
                disabled={saving}
              >
                {saving ? 'মুছছে...' : 'হ্যাঁ, মুছে ফেলুন'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Form Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <div style={styles.modalHeader}>
              <h4>{editingImage ? 'গ্রামের ছবি সম্পাদনা করুন' : 'নতুন গ্রামের ছবি যোগ করুন'}</h4>
              <button onClick={() => setIsModalOpen(false)} style={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              {/* Image Input / Preview */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>ছবি নির্বাচন করুন *</label>
                <div style={styles.uploadArea}>
                  {previewUrl ? (
                    <div style={styles.previewContainer}>
                      <img src={previewUrl} alt="Preview" style={styles.previewImg} />
                      <label htmlFor="modal-image-file" style={styles.changeImgBtn}>
                        <Upload size={14} /> ছবি পরিবর্তন
                      </label>
                    </div>
                  ) : (
                    <label htmlFor="modal-image-file" style={styles.fileLabel}>
                      <ImageIcon size={32} color="#94a3b8" />
                      <span>গ্যালারি থেকে ছবি ফাইল বেছে নিন</span>
                      <small>JPG, PNG, WebP (স্বয়ংক্রিয় কম্প্রেসড)</small>
                    </label>
                  )}
                  <input
                    id="modal-image-file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              {/* Title */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>শিরোনাম *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="যেমন: আলমদীপাড়া কেন্দ্রীয় খেলার মাঠ"
                  required
                  style={styles.input}
                />
              </div>

              {/* Caption */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>ক্যাপশন (সংক্ষিপ্ত)</label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="যেমন: বার্ষিক ফুটবল টুর্নামেন্টের ফাইনাল ম্যাচ"
                  style={styles.input}
                />
              </div>

              {/* Description */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>বিস্তারিত বিবরণ (ঐচ্ছিক)</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="ছবি সম্পর্কিত অতিরিক্ত তথ্য..."
                  rows={3}
                  style={styles.textarea}
                />
              </div>

              {/* Display Order & Active Checkbox */}
              <div style={styles.rowTwoCols}>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>প্রদর্শন ক্রম (Order Number)</label>
                  <input
                    type="number"
                    min="1"
                    value={displayOrder}
                    onChange={(e) => setDisplayOrder(e.target.value)}
                    style={styles.input}
                  />
                </div>

                <div style={styles.fieldGroupCheck}>
                  <label style={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={(e) => setIsActive(e.target.checked)}
                      style={styles.checkbox}
                    />
                    <span>পাবলিক স্লাইডারে প্রদর্শন করুন (সক্রিয়)</span>
                  </label>
                </div>
              </div>

              {/* Modal Buttons */}
              <div style={styles.modalFooter}>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  style={styles.cancelBtn}
                  disabled={saving}
                >
                  বাতিল
                </button>
                <button 
                  type="submit" 
                  style={styles.saveBtn}
                  disabled={saving}
                >
                  {saving ? 'সংরক্ষণ হচ্ছে...' : editingImage ? 'আপডেট করুন' : 'সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'var(--card-bg, #ffffff)',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid var(--border-color, #e2e8f0)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  headerRow: {
    display: 'flex',
    justify: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-color, #0f172a)',
    margin: '0 0 4px 0',
  },
  subtitle: {
    fontSize: '0.88rem',
    color: 'var(--text-muted, #64748b)',
    margin: 0,
  },
  addBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.6rem 1.2rem',
    backgroundColor: 'var(--primary-color, #16a34a)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  successAlert: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0.75rem 1rem',
    backgroundColor: '#dcfce7',
    color: '#15803d',
    borderRadius: '8px',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  errorAlert: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0.75rem 1rem',
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    borderRadius: '8px',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  th: {
    padding: '0.75rem 1rem',
    backgroundColor: 'var(--table-head-bg, #f8fafc)',
    borderBottom: '2px solid var(--border-color, #e2e8f0)',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-color, #334155)',
  },
  tr: {
    borderBottom: '1px solid var(--border-color, #e2e8f0)',
  },
  td: {
    padding: '0.85rem 1rem',
    verticalAlign: 'middle',
    fontSize: '0.9rem',
  },
  orderControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  orderBadge: {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '12px',
    backgroundColor: '#e2e8f0',
    fontSize: '0.85rem',
    fontWeight: '700',
  },
  arrowBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  arrowBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px',
    color: '#64748b',
  },
  thumbnail: {
    width: '70px',
    height: '46px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  itemTitle: {
    fontWeight: '600',
    color: 'var(--text-color, #1e293b)',
  },
  itemCaption: {
    fontSize: '0.8rem',
    color: 'var(--text-muted, #64748b)',
  },
  statusBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 10px',
    borderRadius: '16px',
    border: 'none',
    fontSize: '0.8rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  actionRow: {
    display: 'flex',
    gap: '6px',
  },
  editBtn: {
    padding: '6px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    cursor: 'pointer',
  },
  deleteBtn: {
    padding: '6px',
    borderRadius: '6px',
    border: '1px solid #fca5a5',
    backgroundColor: '#fff1f2',
    color: '#e11d48',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1rem',
  },
  modalBox: {
    backgroundColor: 'var(--card-bg, #ffffff)',
    borderRadius: '14px',
    width: '100%',
    maxWidth: '540px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
    padding: '1.5rem',
  },
  modalHeader: {
    display: 'flex',
    justify: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#64748b',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-color, #1e293b)',
  },
  input: {
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color, #cbd5e1)',
    fontSize: '0.9rem',
    outline: 'none',
  },
  textarea: {
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color, #cbd5e1)',
    fontSize: '0.9rem',
    outline: 'none',
    resize: 'vertical',
  },
  rowTwoCols: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    alignItems: 'center',
  },
  fieldGroupCheck: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '1.2rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    cursor: 'pointer',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    accentColor: 'var(--primary-color, #16a34a)',
  },
  uploadArea: {
    border: '2px dashed var(--border-color, #cbd5e1)',
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: 'var(--bg-secondary, #f8fafc)',
  },
  fileLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    color: '#475569',
  },
  previewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  previewImg: {
    width: '100%',
    maxHeight: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  changeImgBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.82rem',
    color: 'var(--primary-color, #16a34a)',
    fontWeight: '600',
    cursor: 'pointer',
  },
  modalFooter: {
    display: 'flex',
    justify: 'flex-end',
    gap: '0.75rem',
    marginTop: '1rem',
  },
  cancelBtn: {
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    color: '#475569',
    fontWeight: '600',
    cursor: 'pointer',
  },
  saveBtn: {
    padding: '0.6rem 1.4rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'var(--primary-color, #16a34a)',
    color: '#ffffff',
    fontWeight: '600',
    cursor: 'pointer',
  },
  confirmBox: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '12px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  confirmActions: {
    display: 'flex',
    justify: 'center',
    gap: '1rem',
    marginTop: '1.25rem',
  },
  confirmDeleteBtn: {
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#dc2626',
    color: '#ffffff',
    fontWeight: '600',
    cursor: 'pointer',
  },
  loadingBox: {
    padding: '2rem',
    textAlign: 'center',
    color: '#64748b',
  },
  emptyBox: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    color: '#64748b',
  }
};
