import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Download, 
  Plus, 
  Edit2, 
  Trash2, 
  Tag, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Save, 
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { 
  fetchOrganizationPrograms, 
  addOrganizationProgram, 
  updateOrganizationProgram, 
  deleteOrganizationProgram 
} from '../../services/organizationService';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';

export const DailyActivitiesSection = () => {
  const { hasRole, isSuperAdmin, currentUser } = useAuth();
  const { addToast } = useNotification();
  const canManage = hasRole('organization_admin') || isSuperAdmin;

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  // Admin Modal
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: '',
    time: 'সকাল ১০:০০ AM - ১২:০০ PM',
    category: 'ডিজিটাল শিক্ষা',
    description: '',
    status: 'নিয়মিত',
    displayOrder: 1,
    isPublished: true
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchOrganizationPrograms(canManage);
      setPrograms(data || []);
    } catch (err) {
      console.warn("Activities load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const handler = () => loadData();
    window.addEventListener('organization-programs-updated', handler);
    return () => window.removeEventListener('organization-programs-updated', handler);
  }, [canManage]);

  const handleDownloadPDF = () => {
    const element = document.getElementById('organization-routine-pdf');
    if (!element) return;
    setDownloading(true);

    const opt = {
      margin: 10,
      filename: 'Alamdipara-Youth-Association-Routine.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).save().then(() => {
      setDownloading(false);
      addToast('রুটিন PDF সফলভাবে ডাউনলোড হয়েছে!', 'success');
    }).catch(() => {
      setDownloading(false);
    });
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setForm({
      title: '',
      time: 'সকাল ১০:০০ AM - ১২:০০ PM',
      category: 'ডিজিটাল শিক্ষা',
      description: '',
      status: 'নিয়মিত',
      displayOrder: programs.length + 1,
      isPublished: true
    });
    setShowModal(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id);
    setForm({
      title: item.title || '',
      time: item.time || '',
      category: item.category || 'অন্যান্য',
      description: item.description || '',
      status: item.status || 'নিয়মিত',
      displayOrder: item.displayOrder || 1,
      isPublished: item.isPublished !== false
    });
    setShowModal(true);
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`আপনি কি "${title}" কার্যক্রমটি মুছে ফেলতে চান?`)) return;
    try {
      await deleteOrganizationProgram(id);
      setPrograms(prev => prev.filter(p => p.id !== id));
      addToast('কার্যক্রম সফলভাবে মুছে ফেলা হয়েছে।', 'success');
    } catch (err) {
      addToast('মুছে ফেলতে সমস্যা হয়েছে।', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      addToast('কার্যক্রমের শিরোনাম দিন।', 'error');
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        await updateOrganizationProgram(editingId, form);
        setPrograms(prev => prev.map(p => p.id === editingId ? { ...p, ...form } : p));
        addToast('কার্যক্রম সফলভাবে আপডেট হয়েছে!', 'success');
      } else {
        const newProg = await addOrganizationProgram(form, currentUser);
        setPrograms(prev => [...prev, newProg]);
        addToast('নতুন কার্যক্রম সফলভাবে যোগ হয়েছে!', 'success');
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
      {/* Top Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: '800', margin: '0 0 0.25rem 0' }}>
            দৈনিক কার্যক্রম ও সময়সূচি
          </h2>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            যুব সমাজের নিয়মিত প্রশিক্ষণ, স্বাস্থ্যচর্চা, সামাজিক সেবা ও পাঠচক্র রুটিন।
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {canManage && (
            <button onClick={handleOpenAdd} className="btn btn-primary btn-sm">
              <Plus size={15} /> নতুন কার্যক্রম যোগ
            </button>
          )}
          <button onClick={handleDownloadPDF} disabled={downloading} className="btn btn-secondary btn-sm">
            <Download size={15} /> {downloading ? 'PDF তৈরি হচ্ছে...' : 'সময়সূচি PDF'}
          </button>
        </div>
      </div>

      {/* Routine Container (Also captured for PDF export) */}
      <div id="organization-routine-pdf" style={{
        background: 'var(--bg-card, #ffffff)',
        border: '1px solid var(--border-color, #e2e8f0)',
        borderRadius: '16px',
        padding: 'clamp(1rem, 3.5vw, 1.75rem)',
        boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
      }}>
        {/* PDF Header Section */}
        <div style={{ textAlign: 'center', borderBottom: '2px solid #16a34a', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#16a34a', margin: 0, fontWeight: '800' }}>
            আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0.25rem 0 0' }}>
            অফিসিয়াল দৈনিক কার্যক্রম ও সময়সূচি পঞ্জিকা (নিয়মিত আপডেটকৃত)
          </p>
        </div>

        {/* Loading state */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
            কার্যক্রম তালিকা লোড হচ্ছে...
          </div>
        ) : programs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
            বর্তমানে কোনো কার্যক্রম প্রকাশিত নেই।
          </div>
        ) : (
          /* Programs List */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {programs.map((prog, idx) => (
              <div
                key={prog.id || idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-elevated, #f8faf9)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #16a34a',
                  border: '1px solid var(--border-color, #e2e8f0)',
                  borderLeftWidth: '4px',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                      <span style={{
                        background: '#dcfce7',
                        color: '#15803d',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '2px 8px',
                        borderRadius: '12px'
                      }}>
                        {prog.category || 'কার্যক্রম'}
                      </span>
                      <span style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        padding: '2px 8px',
                        borderRadius: '12px'
                      }}>
                        {prog.status || 'নিয়মিত'}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: '800', margin: 0, color: 'var(--text-main, #0f172a)' }}>
                      {prog.title}
                    </h3>
                  </div>

                  {/* Time Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#16a34a',
                    color: '#ffffff',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    whiteSpace: 'nowrap'
                  }}>
                    <Clock size={13} />
                    <span>{prog.time}</span>
                  </div>
                </div>

                {prog.description && (
                  <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted, #475569)', lineHeight: 1.5 }}>
                    {prog.description}
                  </p>
                )}

                {/* Admin Actions */}
                {canManage && (
                  <div style={{ display: 'flex', gap: '6px', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color, #e2e8f0)' }}>
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(prog)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.75rem', padding: '3px 8px' }}
                    >
                      <Edit2 size={12} /> সম্পাদনা
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(prog.id, prog.title)}
                      className="btn btn-sm"
                      style={{ fontSize: '0.75rem', padding: '3px 8px', background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' }}
                    >
                      <Trash2 size={12} /> মুছুন
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Admin Modal */}
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
            maxWidth: '500px',
            padding: '1.5rem',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ margin: 0, fontWeight: '800', color: '#16a34a', fontSize: '1.2rem' }}>
                {editingId ? '✏️ কার্যক্রম সম্পাদনা' : '➕ নতুন কার্যক্রম যোগ'}
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
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>কার্যক্রমের নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: কম্পিউটার ও ডিজিটাল স্কিল ট্রেনিং"
                  value={form.title}
                  onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>সময়সূচি *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: সকাল ১০:০০ AM - ১২:০০ PM"
                  value={form.time}
                  onChange={e => setForm(prev => ({ ...prev, time: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>বিভাগ (Category)</label>
                  <select
                    value={form.category}
                    onChange={e => setForm(prev => ({ ...prev, category: e.target.value }))}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.88rem' }}
                  >
                    <option value="ডিজিটাল শিক্ষা">ডিজিটাল শিক্ষা</option>
                    <option value="স্বাস্থ্য ও শরীরচর্চা">স্বাস্থ্য ও শরীরচর্চা</option>
                    <option value="খেলাধুলা">খেলাধুলা</option>
                    <option value="সমাজকল্যাণ">সমাজকল্যাণ</option>
                    <option value="নিরাপত্তা ও পাহারা">নিরাপত্তা ও পাহারা</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>স্ট্যাটাস</label>
                  <select
                    value={form.status}
                    onChange={e => setForm(prev => ({ ...prev, status: e.target.value }))}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.88rem' }}
                  >
                    <option value="নিয়মিত">নিয়মিত</option>
                    <option value="আসন্ন">আসন্ন</option>
                    <option value="সম্পন্ন">সম্পন্ন</option>
                    <option value="স্থগিত">স্থগিত</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>বিবরণ</label>
                <textarea
                  rows="3"
                  placeholder="কার্যক্রমের বিস্তারিত উদ্দেশ্য ও অংশগ্রহণকারীদের তথ্য..."
                  value={form.description}
                  onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginTop: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>ক্রম (Order)</label>
                  <input
                    type="number"
                    min="1"
                    value={form.displayOrder}
                    onChange={e => setForm(prev => ({ ...prev, displayOrder: e.target.value }))}
                    style={{ width: '100%', padding: '0.55rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)' }}
                  />
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '700', marginTop: '1.2rem' }}>
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={e => setForm(prev => ({ ...prev, isPublished: e.target.checked }))}
                    style={{ width: '16px', height: '16px', accentColor: '#16a34a' }}
                  />
                  প্রকাশিত
                </label>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary" disabled={saving} style={{ flex: 1, justifyContent: 'center' }}>
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

export default DailyActivitiesSection;
