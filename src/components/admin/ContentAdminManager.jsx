import React, { useState, useEffect, useCallback } from 'react';
import { Save, Upload, RefreshCw, Edit2, X, Eye, EyeOff, Type, Image as ImageIcon, Star } from 'lucide-react';
import {
  fetchSiteContent,
  updateSiteContent,
  fetchServiceCards,
  updateServiceCard,
  uploadIconOrImage,
  DEFAULT_SITE_CONTENT,
  DEFAULT_SERVICE_CARDS
} from '../../services/contentService';
import { useNotification } from '../../context/NotificationContext';

export default function ContentAdminManager() {
  const { addToast } = useNotification();

  const [activeSection, setActiveSection] = useState('general'); // 'general' | 'cards'

  // ── Site Content State ──
  const [content, setContent] = useState(DEFAULT_SITE_CONTENT);
  const [contentLoading, setContentLoading] = useState(true);
  const [contentSaving, setContentSaving] = useState(false);

  // ── Service Cards State ──
  const [cards, setCards] = useState(DEFAULT_SERVICE_CARDS);
  const [cardsLoading, setCardsLoading] = useState(false);
  const [editingCard, setEditingCard] = useState(null); // holds card object being edited
  const [cardSaving, setCardSaving] = useState(false);
  const [iconUploading, setIconUploading] = useState(false);
  const [bgUploading, setBgUploading] = useState(false);

  // Load all data
  const loadAll = useCallback(async () => {
    setContentLoading(true);
    setCardsLoading(true);
    try {
      const [siteContent, serviceCards] = await Promise.all([
        fetchSiteContent(),
        fetchServiceCards(true)
      ]);
      setContent(siteContent);
      setCards(serviceCards || DEFAULT_SERVICE_CARDS);
    } catch (err) {
      addToast('তথ্য লোড করতে সমস্যা।', 'error');
    } finally {
      setContentLoading(false);
      setCardsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
    const handler = () => loadAll();
    window.addEventListener('site-content-updated', handler);
    return () => window.removeEventListener('site-content-updated', handler);
  }, [loadAll]);

  // ── Content Handlers ──
  const handleContentChange = (field, value) => {
    setContent(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveContent = async (e) => {
    e.preventDefault();
    setContentSaving(true);
    try {
      await updateSiteContent(content);
      addToast('ওয়েবসাইট কন্টেন্ট সফলভাবে আপডেট হয়েছে!', 'success');
    } catch (err) {
      addToast(`সংরক্ষণে সমস্যা: ${err.message}`, 'error');
    } finally {
      setContentSaving(false);
    }
  };

  // ── Card Handlers ──
  const handleEditCard = (card) => {
    setEditingCard({ ...card });
  };

  const handleCardChange = (field, value) => {
    setEditingCard(prev => ({ ...prev, [field]: value }));
  };

  const handleIconUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !editingCard) return;
    setIconUploading(true);
    try {
      const url = await uploadIconOrImage(file, true, editingCard.id);
      if (!url) throw new Error('URL পাওয়া যায়নি');
      handleCardChange('iconUrl', url);
      addToast('আইকন আপলোড সফল!', 'success');
    } catch (err) {
      addToast(`আইকন আপলোড ব্যর্থ: ${err.message}`, 'error');
    } finally {
      setIconUploading(false);
      e.target.value = ''; // Reset so same file can be re-selected
    }
  };

  const handleBgUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !editingCard) return;
    setBgUploading(true);
    try {
      const url = await uploadIconOrImage(file, false, editingCard.id);
      if (!url) throw new Error('URL পাওয়া যায়নি');
      handleCardChange('bgImageUrl', url);
      addToast('ব্যাকগ্রাউন্ড ছবি আপলোড সফল!', 'success');
    } catch (err) {
      addToast(`ব্যাকগ্রাউন্ড ছবি আপলোড ব্যর্থ: ${err.message}`, 'error');
    } finally {
      setBgUploading(false);
      e.target.value = ''; // Reset so same file can be re-selected
    }
  };

  const handleSaveCard = async (e) => {
    e.preventDefault();
    if (!editingCard) return;
    setCardSaving(true);
    try {
      await updateServiceCard(editingCard.id, editingCard);
      setCards(prev => prev.map(c => c.id === editingCard.id ? { ...c, ...editingCard } : c));
      addToast(`"${editingCard.title}" কার্ড সফলভাবে আপডেট হয়েছে!`, 'success');
      setEditingCard(null);
    } catch (err) {
      addToast(`কার্ড সংরক্ষণে সমস্যা: ${err.message}`, 'error');
    } finally {
      setCardSaving(false);
    }
  };

  const handleToggleCard = async (card) => {
    try {
      const updated = { ...card, isActive: !card.isActive };
      await updateServiceCard(card.id, updated);
      setCards(prev => prev.map(c => c.id === card.id ? updated : c));
      addToast(`"${card.title}" ${card.isActive ? 'লুকানো' : 'দেখানো'} হয়েছে।`, 'success');
    } catch (err) {
      addToast('স্ট্যাটাস পরিবর্তন করতে সমস্যা।', 'error');
    }
  };

  // Shared styles
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
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.79rem',
    fontWeight: '600',
    color: 'var(--text-muted, #64748b)',
    marginBottom: '0.3rem'
  };

  const sectionGroupStyle = {
    borderBottom: '1px solid var(--border-color, #e2e8f0)',
    paddingBottom: '1rem',
    marginBottom: '1rem'
  };

  const tabBtnStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.88rem',
    background: isActive ? 'var(--primary-color, #16a34a)' : 'var(--bg-elevated, #f1f5f9)',
    color: isActive ? '#ffffff' : 'var(--text-main, #1e293b)',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem'
  });

  const FIELD_GROUPS = [
    {
      title: 'সাইট পরিচিতি',
      fields: [
        { key: 'siteTitle', label: 'ওয়েবসাইট শিরোনাম' },
        { key: 'tagline', label: 'ট্যাগলাইন' },
        { key: 'slogan', label: 'স্লোগান' }
      ]
    },
    {
      title: 'হোমপেজ হিরো সেকশন',
      fields: [
        { key: 'heroTitle', label: 'হিরো শিরোনাম' },
        { key: 'heroSubtitle', label: 'হিরো সাবটাইটেল' },
        { key: 'heroDesc', label: 'হিরো বিবরণ' },
        { key: 'heroLocation', label: 'অবস্থানের নাম' }
      ]
    },
    {
      title: 'সেকশন শিরোনাম',
      fields: [
        { key: 'servicesTitle', label: 'সেবা সেকশন শিরোনাম' },
        { key: 'servicesSubtitle', label: 'সেবা সেকশন সাবটাইটেল' },
        { key: 'mapTitle', label: 'মানচিত্র সেকশন শিরোনাম' },
        { key: 'mapSubtitle', label: 'মানচিত্র সেকশন সাবটাইটেল' },
        { key: 'eventsTitle', label: 'ঘটনা সেকশন শিরোনাম' },
        { key: 'weatherTitle', label: 'আবহাওয়া সেকশন শিরোনাম' },
        { key: 'noticesTitle', label: 'নোটিশ সেকশন শিরোনাম' }
      ]
    },
    {
      title: 'ফুটার',
      fields: [
        { key: 'footerText', label: 'ফুটার কপিরাইট লেখা' },
        { key: 'footerSlogan', label: 'ফুটার স্লোগান' }
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>ওয়েবসাইট কন্টেন্ট ম্যানেজমেন্ট</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
            কোড ছাড়াই ওয়েবসাইটের সকল টেক্সট, সার্ভিস কার্ড ও আইকন পরিবর্তন করুন।
          </p>
        </div>
        <button onClick={loadAll} className="btn btn-secondary">
          <RefreshCw size={16} /> রিফ্রেশ
        </button>
      </div>

      {/* Section Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <button style={tabBtnStyle(activeSection === 'general')} onClick={() => setActiveSection('general')}>
          <Type size={16} /> সাধারণ কন্টেন্ট
        </button>
        <button style={tabBtnStyle(activeSection === 'cards')} onClick={() => setActiveSection('cards')}>
          <Star size={16} /> সার্ভিস কার্ড
        </button>
      </div>

      {/* ── GENERAL CONTENT ── */}
      {activeSection === 'general' && (
        <div style={cardStyle}>
          {contentLoading ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>লোড হচ্ছে...</div>
          ) : (
            <form onSubmit={handleSaveContent}>
              {FIELD_GROUPS.map(group => (
                <div key={group.title} style={sectionGroupStyle}>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--primary-color, #16a34a)', marginBottom: '0.75rem' }}>
                    {group.title}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                    {group.fields.map(field => (
                      <div key={field.key}>
                        <label style={labelStyle}>{field.label}</label>
                        {field.key.includes('Desc') || field.key.includes('Subtitle') || field.key.includes('slogan') ? (
                          <textarea
                            style={{ ...inputStyle, resize: 'vertical', minHeight: '60px' }}
                            value={content[field.key] || ''}
                            onChange={e => handleContentChange(field.key, e.target.value)}
                            placeholder={DEFAULT_SITE_CONTENT[field.key] || ''}
                          />
                        ) : (
                          <input
                            style={inputStyle}
                            value={content[field.key] || ''}
                            onChange={e => handleContentChange(field.key, e.target.value)}
                            placeholder={DEFAULT_SITE_CONTENT[field.key] || ''}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button type="submit" className="btn btn-primary" disabled={contentSaving}>
                <Save size={16} /> {contentSaving ? 'সংরক্ষণ হচ্ছে...' : 'সব পরিবর্তন সংরক্ষণ করুন'}
              </button>
            </form>
          )}
        </div>
      )}

      {/* ── SERVICE CARDS ── */}
      {activeSection === 'cards' && (
        <div>
          {/* Card edit form */}
          {editingCard && (
            <div style={{ ...cardStyle, borderColor: '#2563eb', borderWidth: '2px', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontWeight: '700', color: '#2563eb' }}>✏️ কার্ড সম্পাদনা: {editingCard.title}</h3>
                <button onClick={() => setEditingCard(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
              </div>
              <form onSubmit={handleSaveCard}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                  <div>
                    <label style={labelStyle}>কার্ড শিরোনাম (বাংলা)</label>
                    <input style={inputStyle} value={editingCard.title} onChange={e => handleCardChange('title', e.target.value)} required />
                  </div>
                  <div>
                    <label style={labelStyle}>বিবরণ</label>
                    <input style={inputStyle} value={editingCard.description || ''} onChange={e => handleCardChange('description', e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>লিংক (Route)</label>
                    <input style={inputStyle} value={editingCard.link || ''} onChange={e => handleCardChange('link', e.target.value)} placeholder="/agriculture" />
                  </div>
                  <div>
                    <label style={labelStyle}>ইমোজি আইকন (ডিফল্ট)</label>
                    <input style={inputStyle} value={editingCard.iconEmoji || ''} onChange={e => handleCardChange('iconEmoji', e.target.value)} placeholder="🌱" />
                  </div>
                  <div>
                    <label style={labelStyle}>প্রদর্শন ক্রম</label>
                    <input type="number" style={inputStyle} value={editingCard.displayOrder || 1} onChange={e => handleCardChange('displayOrder', Number(e.target.value))} min="1" />
                  </div>
                </div>

                {/* Custom Icon Upload */}
                <div style={{ marginTop: '0.85rem' }}>
                  <label style={labelStyle}>কাস্টম আইকন (PNG/WebP — ট্রান্সপেরেন্ট সাপোর্টেড)</label>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <input style={{ ...inputStyle, flex: 1, minWidth: '180px' }} value={editingCard.iconUrl || ''} onChange={e => handleCardChange('iconUrl', e.target.value)} placeholder="আইকনের URL বা নিচে আপলোড করুন" />
                    <label style={{ padding: '0.55rem 0.85rem', background: '#f1f5f9', border: '1.5px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}>
                      <Upload size={14} /> {iconUploading ? 'আপলোড...' : 'আইকন আপলোড'}
                      <input type="file" accept="image/png,image/webp,image/svg+xml" style={{ display: 'none' }} onChange={handleIconUpload} disabled={iconUploading} />
                    </label>
                    {editingCard.iconUrl && (
                      <img src={editingCard.iconUrl} alt="icon preview" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '6px', border: '1px solid #e2e8f0', background: '#f8fafc' }} onError={e => e.target.style.display = 'none'} />
                    )}
                  </div>
                </div>

                {/* Background Image Upload */}
                <div style={{ marginTop: '0.85rem' }}>
                  <label style={labelStyle}>ব্যাকগ্রাউন্ড ছবি (ঐচ্ছিক)</label>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <input style={{ ...inputStyle, flex: 1, minWidth: '180px' }} value={editingCard.bgImageUrl || ''} onChange={e => handleCardChange('bgImageUrl', e.target.value)} placeholder="ব্যাকগ্রাউন্ড ছবির URL" />
                    <label style={{ padding: '0.55rem 0.85rem', background: '#f1f5f9', border: '1.5px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}>
                      <ImageIcon size={14} /> {bgUploading ? 'আপলোড...' : 'ছবি আপলোড'}
                      <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleBgUpload} disabled={bgUploading} />
                    </label>
                    {editingCard.bgImageUrl && (
                      <img src={editingCard.bgImageUrl} alt="bg preview" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #e2e8f0' }} onError={e => e.target.style.display = 'none'} />
                    )}
                  </div>
                </div>

                {/* Active Toggle */}
                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600' }}>
                    <input type="checkbox" checked={editingCard.isActive !== false} onChange={e => handleCardChange('isActive', e.target.checked)} style={{ accentColor: '#16a34a', width: '16px', height: '16px' }} />
                    🟢 সক্রিয় (হোমপেজে দেখাবে)
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                  <button type="submit" className="btn btn-primary" disabled={cardSaving}>
                    <Save size={16} /> {cardSaving ? 'সংরক্ষণ হচ্ছে...' : 'কার্ড আপডেট করুন'}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => setEditingCard(null)}>বাতিল</button>
                </div>
              </form>
            </div>
          )}

          {/* Cards Grid */}
          <div style={cardStyle}>
            <div style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1rem' }}>
              সার্ভিস কার্ডসমূহ ({cards.length}টি) — ক্লিক করে সম্পাদনা করুন
            </div>
            {cardsLoading ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>লোড হচ্ছে...</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.85rem' }}>
                {cards.map(card => (
                  <div
                    key={card.id}
                    style={{
                      border: '1.5px solid var(--border-color, #e2e8f0)',
                      borderRadius: '10px',
                      padding: '0.85rem',
                      background: 'var(--bg-elevated, #f8fafc)',
                      opacity: card.isActive !== false ? 1 : 0.6,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {card.iconUrl ? (
                        <img src={card.iconUrl} alt={card.title} style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '6px', background: '#f1f5f9', padding: '4px' }} onError={e => { e.target.style.display = 'none'; }} />
                      ) : (
                        <div style={{ fontSize: '1.8rem', lineHeight: 1 }}>{card.iconEmoji}</div>
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{card.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{card.link}</div>
                      </div>
                      <span style={{
                        fontSize: '0.68rem',
                        padding: '2px 7px',
                        borderRadius: '10px',
                        background: card.isActive !== false ? '#dcfce7' : '#fee2e2',
                        color: card.isActive !== false ? '#16a34a' : '#dc2626',
                        fontWeight: '700'
                      }}>
                        {card.isActive !== false ? 'সক্রিয়' : 'লুকানো'}
                      </span>
                    </div>
                    {card.description && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{card.description}</div>
                    )}
                    <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.25rem' }}>
                      <button onClick={() => handleEditCard(card)} className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', flex: 1 }}>
                        <Edit2 size={12} /> সম্পাদনা
                      </button>
                      <button onClick={() => handleToggleCard(card)} className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem' }}>
                        {card.isActive !== false ? <EyeOff size={12} /> : <Eye size={12} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
