import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Plus, Edit2, Trash2, Eye, EyeOff, Star, Search, X, Save, Upload, ChevronDown, RefreshCw } from 'lucide-react';
import {
  fetchVillageLocations,
  addVillageLocation,
  updateVillageLocation,
  deleteVillageLocation,
  toggleLocationStatus
} from '../../services/villageMapService';
import { categoryConfig } from '../map/VillageMap';
import { uploadIconOrImage } from '../../services/contentService';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';

const DEFAULT_CENTER = [24.397140, 90.858307];

const EMPTY_FORM = {
  name: '',
  nameEn: '',
  category: 'mosque',
  description: '',
  detailedDescription: '',
  lat: '',
  lng: '',
  address: '',
  image: '',
  phone: '',
  openingHours: '',
  isActive: true,
  isFeatured: false,
  displayOrder: 1
};

// Click handler for admin map click-to-pin
function MapClickHandler({ onMapClick, enabled }) {
  useMapEvents({
    click(e) {
      if (enabled && onMapClick) {
        onMapClick(e.latlng.lat, e.latlng.lng);
      }
    }
  });
  return null;
}

// Admin draggable pin marker icon
const adminPinIcon = L.divIcon({
  className: 'admin-temp-pin',
  html: `<div style="
    width: 34px;
    height: 34px;
    background: #dc2626;
    border: 3px solid white;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 4px 14px rgba(220,38,38,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  "><div style="transform: rotate(45deg); color: white; font-size: 14px;">📍</div></div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -34]
});

const createCategoryIcon = (category) => {
  const cfg = categoryConfig[category] || categoryConfig.other;
  return L.divIcon({
    className: 'cat-pin',
    html: `<div style="
      width: 28px; height: 28px;
      background: ${cfg.color};
      border: 2px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 3px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28]
  });
};

export default function VillageMapAdminManager() {
  const { currentUser } = useAuth();
  const { addToast } = useNotification();

  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form state
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Admin map pin state
  const [adminPin, setAdminPin] = useState(null); // { lat, lng }
  const [clickToPin, setClickToPin] = useState(false);

  // List filters
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Image upload
  const [imageUploading, setImageUploading] = useState(false);

  const loadLocations = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchVillageLocations(true); // include inactive for admin
      setLocations(data || []);
    } catch (err) {
      addToast('তথ্য লোড করতে সমস্যা হয়েছে।', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLocations();
    const handler = () => loadLocations();
    window.addEventListener('village-map-updated', handler);
    return () => window.removeEventListener('village-map-updated', handler);
  }, [loadLocations]);

  const handleMapClick = (lat, lng) => {
    setAdminPin({ lat, lng });
    setForm(prev => ({ ...prev, lat: lat.toFixed(6), lng: lng.toFixed(6) }));
    setClickToPin(false);
  };

  const handleFormChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageUploading(true);
    try {
      const url = await uploadIconOrImage(file, false);
      handleFormChange('image', url);
      addToast('ছবি আপলোড সফল হয়েছে!', 'success');
    } catch (err) {
      addToast(`ছবি আপলোড ব্যর্থ: ${err.message}`, 'error');
    } finally {
      setImageUploading(false);
    }
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setAdminPin(null);
    setClickToPin(false);
    setShowForm(false);
  };

  const handleEdit = (loc) => {
    setForm({
      name: loc.name || '',
      nameEn: loc.nameEn || '',
      category: loc.category || 'mosque',
      description: loc.description || '',
      detailedDescription: loc.detailedDescription || '',
      lat: loc.lat || '',
      lng: loc.lng || '',
      address: loc.address || '',
      image: loc.image || '',
      phone: loc.phone || '',
      openingHours: loc.openingHours || '',
      isActive: loc.isActive !== false,
      isFeatured: Boolean(loc.isFeatured),
      displayOrder: loc.displayOrder || 1
    });
    setEditingId(loc.id);
    setAdminPin({ lat: loc.lat, lng: loc.lng });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`"${name}" স্থানটি মানচিত্র থেকে স্থায়ীভাবে মুছে ফেলবেন?`)) return;
    try {
      await deleteVillageLocation(id);
      setLocations(prev => prev.filter(l => l.id !== id));
      addToast(`"${name}" সফলভাবে মুছে ফেলা হয়েছে।`, 'success');
    } catch (err) {
      addToast('মুছে ফেলতে সমস্যা হয়েছে।', 'error');
    }
  };

  const handleToggleActive = async (loc) => {
    try {
      await toggleLocationStatus(loc.id, loc.isActive);
      setLocations(prev => prev.map(l => l.id === loc.id ? { ...l, isActive: !l.isActive } : l));
      addToast(`"${loc.name}" ${loc.isActive ? 'নিষ্ক্রিয়' : 'সক্রিয়'} করা হয়েছে।`, 'success');
    } catch (err) {
      addToast('স্ট্যাটাস পরিবর্তন করতে সমস্যা হয়েছে।', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { addToast('স্থানের বাংলা নাম দিন।', 'error'); return; }
    if (!form.lat || !form.lng) { addToast('মানচিত্রে ক্লিক করে অবস্থান নির্বাচন করুন।', 'error'); return; }

    setSaving(true);
    try {
      if (editingId) {
        await updateVillageLocation(editingId, form);
        setLocations(prev => prev.map(l => l.id === editingId ? { ...l, ...form } : l));
        addToast('স্থানের তথ্য সফলভাবে আপডেট হয়েছে!', 'success');
      } else {
        const newLoc = await addVillageLocation(form, currentUser);
        setLocations(prev => [...prev, newLoc]);
        addToast('নতুন স্থান সফলভাবে যোগ করা হয়েছে!', 'success');
      }
      resetForm();
    } catch (err) {
      addToast(`সংরক্ষণে সমস্যা: ${err.message}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  const filteredLocations = locations.filter(loc => {
    const matchesCat = filterCategory === 'all' || loc.category === filterCategory;
    const matchesSearch = !searchTerm.trim() ||
      loc.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.nameEn?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.address?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const cardStyle = {
    background: 'var(--bg-card, #ffffff)',
    border: '1px solid var(--border-color, #e2e8f0)',
    borderRadius: '12px',
    padding: '1.25rem',
    marginBottom: '1.25rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.6rem 0.85rem',
    border: '1.5px solid var(--border-color, #e2e8f0)',
    borderRadius: '8px',
    fontSize: '0.9rem',
    background: 'var(--bg-main, #fff)',
    color: 'var(--text-main, #1e293b)',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text-muted, #64748b)',
    marginBottom: '0.35rem'
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>গ্রাম মানচিত্র ব্যবস্থাপনা</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
            মানচিত্রে ক্লিক করে নতুন স্থান যোগ করুন বা বিদ্যমান স্থান সম্পাদনা করুন।
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={loadLocations} className="btn btn-secondary" title="রিফ্রেশ">
            <RefreshCw size={16} /> রিফ্রেশ
          </button>
          <button
            onClick={() => { resetForm(); setShowForm(true); setClickToPin(true); }}
            className="btn btn-primary"
          >
            <Plus size={16} /> নতুন স্থান যোগ
          </button>
        </div>
      </div>

      {/* Admin Map for Click-to-Pin */}
      <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
        <div style={{
          height: '360px',
          position: 'relative',
          cursor: clickToPin ? 'crosshair' : 'grab'
        }}>
          {clickToPin && (
            <div style={{
              position: 'absolute',
              top: '0.75rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              background: 'rgba(220,38,38,0.92)',
              color: 'white',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: '700',
              pointerEvents: 'none',
              whiteSpace: 'nowrap'
            }}>
              📍 মানচিত্রে ক্লিক করুন — অবস্থান নির্বাচন
            </div>
          )}
          <MapContainer
            center={adminPin ? [adminPin.lat, adminPin.lng] : DEFAULT_CENTER}
            zoom={15}
            scrollWheelZoom
            zoomControl
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP"
              subdomains="abc"
              maxZoom={19}
            />
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
              attribution=""
              subdomains="abcd"
              maxZoom={19}
            />
            <MapClickHandler onMapClick={handleMapClick} enabled={clickToPin} />

            {/* Admin temporary pin */}
            {adminPin && (
              <Marker
                position={[adminPin.lat, adminPin.lng]}
                icon={adminPinIcon}
                draggable
                eventHandlers={{
                  dragend(e) {
                    const ll = e.target.getLatLng();
                    setAdminPin({ lat: ll.lat, lng: ll.lng });
                    setForm(prev => ({ ...prev, lat: ll.lat.toFixed(6), lng: ll.lng.toFixed(6) }));
                  }
                }}
              >
                <Popup><div style={{ fontSize: '0.85rem' }}>📍 {form.name || 'নতুন স্থান'}<br /><small>{Number(adminPin.lat).toFixed(5)}, {Number(adminPin.lng).toFixed(5)}</small></div></Popup>
              </Marker>
            )}

            {/* Existing location markers */}
            {locations.map(loc => (
              <Marker
                key={loc.id}
                position={[Number(loc.lat), Number(loc.lng)]}
                icon={createCategoryIcon(loc.category)}
                opacity={loc.isActive ? 1 : 0.45}
              >
                <Popup>
                  <div style={{ fontSize: '0.85rem', minWidth: '140px' }}>
                    <div style={{ fontWeight: '700', marginBottom: '2px' }}>{loc.name}</div>
                    <div style={{ color: categoryConfig[loc.category]?.color || '#64748b', fontSize: '0.78rem', marginBottom: '4px' }}>
                      {categoryConfig[loc.category]?.label}
                    </div>
                    <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                      <button onClick={() => handleEdit(loc)} style={{ fontSize: '0.72rem', padding: '2px 8px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>✏️ সম্পাদনা</button>
                      <button onClick={() => handleToggleActive(loc)} style={{ fontSize: '0.72rem', padding: '2px 8px', background: loc.isActive ? '#f59e0b' : '#16a34a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                        {loc.isActive ? '🔴 নিষ্ক্রিয়' : '🟢 সক্রিয়'}
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {clickToPin && (
          <div style={{ padding: '0.6rem 1rem', background: '#fef2f2', borderTop: '1px solid #fca5a5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.82rem', color: '#dc2626', fontWeight: '600' }}>মানচিত্রে ক্লিক করুন — অবস্থান নির্বাচন চলছে...</span>
            <button onClick={() => setClickToPin(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626' }}>
              <X size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div style={{ ...cardStyle, borderColor: editingId ? '#2563eb' : '#16a34a', borderWidth: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontWeight: '700', color: editingId ? '#2563eb' : '#16a34a' }}>
              {editingId ? '✏️ স্থানের তথ্য সম্পাদনা' : '➕ নতুন স্থান যোগ'}
            </h3>
            <button onClick={resetForm} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
              {/* Bengali Name */}
              <div>
                <label style={labelStyle}>বাংলা নাম *</label>
                <input style={inputStyle} value={form.name} onChange={e => handleFormChange('name', e.target.value)} placeholder="যেমন: বায়তুল নূর জামে মসজিদ" required />
              </div>
              {/* English Name */}
              <div>
                <label style={labelStyle}>ইংরেজি নাম</label>
                <input style={inputStyle} value={form.nameEn} onChange={e => handleFormChange('nameEn', e.target.value)} placeholder="e.g., Baitun Noor Mosque" />
              </div>
              {/* Category */}
              <div>
                <label style={labelStyle}>বিভাগ *</label>
                <select style={inputStyle} value={form.category} onChange={e => handleFormChange('category', e.target.value)}>
                  {Object.entries(categoryConfig).map(([key, cfg]) => (
                    <option key={key} value={key}>{cfg.label}</option>
                  ))}
                </select>
              </div>
              {/* Latitude */}
              <div>
                <label style={labelStyle}>অক্ষাংশ (Latitude) *</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input style={{ ...inputStyle, flex: 1 }} value={form.lat} onChange={e => handleFormChange('lat', e.target.value)} placeholder="24.3975" type="number" step="0.000001" />
                  <button
                    type="button"
                    onClick={() => setClickToPin(true)}
                    style={{ padding: '0.6rem 0.75rem', background: '#dc2626', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '0.78rem', fontWeight: '600' }}
                    title="মানচিত্রে ক্লিক করে অবস্থান নির্বাচন"
                  >
                    📍 পিন
                  </button>
                </div>
              </div>
              {/* Longitude */}
              <div>
                <label style={labelStyle}>দ্রাঘিমাংশ (Longitude) *</label>
                <input style={inputStyle} value={form.lng} onChange={e => handleFormChange('lng', e.target.value)} placeholder="90.8588" type="number" step="0.000001" />
              </div>
              {/* Address */}
              <div>
                <label style={labelStyle}>ঠিকানা / ল্যান্ডমার্ক</label>
                <input style={inputStyle} value={form.address} onChange={e => handleFormChange('address', e.target.value)} placeholder="পূর্বপাড়া, আলমদীপাড়া" />
              </div>
              {/* Phone */}
              <div>
                <label style={labelStyle}>যোগাযোগ নম্বর</label>
                <input style={inputStyle} value={form.phone} onChange={e => handleFormChange('phone', e.target.value)} placeholder="01XXXXXXXXX" />
              </div>
              {/* Opening Hours */}
              <div>
                <label style={labelStyle}>খোলার সময়</label>
                <input style={inputStyle} value={form.openingHours} onChange={e => handleFormChange('openingHours', e.target.value)} placeholder="ফজর থেকে এশা" />
              </div>
              {/* Display Order */}
              <div>
                <label style={labelStyle}>প্রদর্শন ক্রম</label>
                <input style={inputStyle} value={form.displayOrder} onChange={e => handleFormChange('displayOrder', e.target.value)} type="number" min="1" />
              </div>
            </div>

            {/* Description */}
            <div style={{ marginTop: '0.85rem' }}>
              <label style={labelStyle}>সংক্ষিপ্ত বিবরণ</label>
              <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: '70px' }} value={form.description} onChange={e => handleFormChange('description', e.target.value)} placeholder="স্থান সম্পর্কে সংক্ষিপ্ত বিবরণ দিন..." />
            </div>

            {/* Image */}
            <div style={{ marginTop: '0.85rem' }}>
              <label style={labelStyle}>ছবির URL বা আপলোড</label>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <input style={{ ...inputStyle, flex: 1, minWidth: '180px' }} value={form.image} onChange={e => handleFormChange('image', e.target.value)} placeholder="https://... বা নিচে আপলোড করুন" />
                <label style={{ padding: '0.55rem 0.85rem', background: '#f1f5f9', border: '1.5px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}>
                  <Upload size={14} /> {imageUploading ? 'আপলোড...' : 'ছবি আপলোড'}
                  <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} disabled={imageUploading} />
                </label>
                {form.image && <img src={form.image} alt="preview" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '8px', border: '2px solid #e2e8f0' }} onError={e => e.target.style.display = 'none'} />}
              </div>
            </div>

            {/* Toggles */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600' }}>
                <input type="checkbox" checked={form.isActive} onChange={e => handleFormChange('isActive', e.target.checked)} style={{ accentColor: '#16a34a', width: '16px', height: '16px' }} />
                🟢 সক্রিয় (পাবলিক মানচিত্রে দেখাবে)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600' }}>
                <input type="checkbox" checked={form.isFeatured} onChange={e => handleFormChange('isFeatured', e.target.checked)} style={{ accentColor: '#d97706', width: '16px', height: '16px' }} />
                ⭐ বিশেষভাবে প্রদর্শিত
              </label>
            </div>

            {/* Submit */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                <Save size={16} /> {saving ? 'সংরক্ষণ হচ্ছে...' : (editingId ? 'আপডেট করুন' : 'যোগ করুন')}
              </button>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>বাতিল</button>
            </div>
          </form>
        </div>
      )}

      {/* Location List */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <h3 style={{ margin: 0, fontWeight: '700' }}>সকল স্থানের তালিকা ({filteredLocations.length}টি)</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <Search size={15} style={{ position: 'absolute', left: '0.7rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                style={{ ...inputStyle, width: '180px', paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
                placeholder="স্থান খুঁজুন..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Category Filter */}
            <select style={{ ...inputStyle, width: 'auto' }} value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
              <option value="all">সব বিভাগ</option>
              {Object.entries(categoryConfig).map(([key, cfg]) => (
                <option key={key} value={key}>{cfg.label}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>লোড হচ্ছে...</div>
        ) : filteredLocations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>কোনো স্থান পাওয়া যায়নি।</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.85rem' }}>
            {filteredLocations.map(loc => {
              const cfg = categoryConfig[loc.category] || categoryConfig.other;
              return (
                <div
                  key={loc.id}
                  style={{
                    border: `1.5px solid ${loc.isActive ? cfg.color + '55' : '#e2e8f0'}`,
                    borderRadius: '10px',
                    padding: '0.85rem',
                    background: loc.isActive ? cfg.bgLight + '66' : 'var(--bg-elevated, #f8fafc)',
                    opacity: loc.isActive ? 1 : 0.65,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main, #1e293b)', marginBottom: '2px' }}>{loc.name}</div>
                      <div style={{ fontSize: '0.75rem', color: cfg.color, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={11} /> {cfg.label}
                        {loc.isFeatured && <Star size={11} fill="#d97706" color="#d97706" style={{ marginLeft: '4px' }} />}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      background: loc.isActive ? '#dcfce7' : '#fee2e2',
                      color: loc.isActive ? '#16a34a' : '#dc2626',
                      fontWeight: '700',
                      whiteSpace: 'nowrap'
                    }}>
                      {loc.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                    </span>
                  </div>
                  {loc.address && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>📍 {loc.address}</div>}
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    {Number(loc.lat).toFixed(5)}, {Number(loc.lng).toFixed(5)}
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                    <button onClick={() => handleEdit(loc)} className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', flex: 1 }}>
                      <Edit2 size={12} /> সম্পাদনা
                    </button>
                    <button onClick={() => handleToggleActive(loc)} className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', flex: 1 }}>
                      {loc.isActive ? <EyeOff size={12} /> : <Eye size={12} />} {loc.isActive ? 'লুকান' : 'দেখান'}
                    </button>
                    <button onClick={() => handleDelete(loc.id, loc.name)} style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
