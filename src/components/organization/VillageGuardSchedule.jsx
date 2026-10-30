import React, { useState, useEffect, useMemo } from 'react';
import { 
  Shield, 
  Clock, 
  Phone, 
  MapPin, 
  Plus, 
  Edit2, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  RefreshCw,
  Info,
  X,
  Save,
  UserCheck,
  Search,
  User
} from 'lucide-react';
import { 
  WEEKDAYS, 
  fetchGuardSchedule, 
  addGuardEntry,
  assignGuardToDays,
  updateGuardEntry, 
  deleteGuardEntry,
  fetchRegisteredUsers,
  getBangladeshTimeInfo,
  isShiftCurrentlyActive
} from '../../services/organizationService';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';

export const VillageGuardSchedule = () => {
  const { hasRole, isSuperAdmin, currentUser } = useAuth();
  const { addToast } = useNotification();
  const canManage = hasRole('organization_admin') || isSuperAdmin;

  const [scheduleList, setScheduleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState('saturday');
  const [bangladeshTime, setBangladeshTime] = useState(getBangladeshTimeInfo());

  // Modal / Form state for Admin
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    weekday: 'saturday',
    guardName: '',
    phone: '',
    startTime: '07:30 PM',
    endTime: '12:00 AM',
    area: '',
    note: '',
    displayOrder: 1,
    isPublished: true
  });

  // Registered user search state (for admin modal)
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedProfileImageUrl, setSelectedProfileImageUrl] = useState('');
  const [assignMultiDays, setAssignMultiDays] = useState(false);
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);

  // Load schedule
  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchGuardSchedule(canManage);
      setScheduleList(data || []);
    } catch (err) {
      console.warn("Guard schedule load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const handler = () => loadData();
    window.addEventListener('village-guard-updated', handler);

    // Initial Bangladesh day select
    const bdTime = getBangladeshTimeInfo();
    setBangladeshTime(bdTime);
    setSelectedDay(bdTime.currentDayKey);

    // Update Bangladesh time check every minute
    const timer = setInterval(() => {
      setBangladeshTime(getBangladeshTimeInfo());
    }, 60000);

    return () => {
      window.removeEventListener('village-guard-updated', handler);
      clearInterval(timer);
    };
  }, [canManage]);

  // Filter entries for currently selected day
  const dayEntries = useMemo(() => {
    return scheduleList
      .filter(item => item.weekday === selectedDay)
      .sort((a, b) => (a.displayOrder || 1) - (b.displayOrder || 1));
  }, [scheduleList, selectedDay]);

  // Current active guard across the village right now
  const activeGuardsNow = useMemo(() => {
    return scheduleList.filter(item => 
      item.isPublished !== false && 
      isShiftCurrentlyActive(item.startTime, item.endTime, item.weekday)
    );
  }, [scheduleList, bangladeshTime]);

  const handleOpenAdd = (dayKey) => {
    setEditingId(null);
    setSelectedUserId('');
    setSelectedProfileImageUrl('');
    setUserSearchTerm('');
    setAssignMultiDays(false);
    setSelectedWeekdays([dayKey || selectedDay]);
    setForm({
      weekday: dayKey || selectedDay,
      guardName: '',
      phone: '',
      startTime: '07:30 PM',
      endTime: '12:00 AM',
      area: '',
      note: '',
      displayOrder: dayEntries.length + 1,
      isPublished: true
    });
    // Load registered users for admin picker
    if (canManage && registeredUsers.length === 0) {
      setLoadingUsers(true);
      fetchRegisteredUsers().then(users => {
        setRegisteredUsers(users || []);
        setLoadingUsers(false);
      }).catch(() => setLoadingUsers(false));
    }
    setShowModal(true);
  };

  const handleOpenEdit = (entry) => {
    setEditingId(entry.id);
    setSelectedUserId(entry.userId || '');
    setSelectedProfileImageUrl(entry.profileImageUrl || '');
    setUserSearchTerm('');
    setAssignMultiDays(false);
    setSelectedWeekdays([entry.weekday]);
    setForm({
      weekday: entry.weekday,
      guardName: entry.guardName || '',
      phone: entry.phone || '',
      startTime: entry.startTime || '07:30 PM',
      endTime: entry.endTime || '12:00 AM',
      area: entry.area || '',
      note: entry.note || '',
      displayOrder: entry.displayOrder || 1,
      isPublished: entry.isPublished !== false
    });
    if (canManage && registeredUsers.length === 0) {
      setLoadingUsers(true);
      fetchRegisteredUsers().then(users => {
        setRegisteredUsers(users || []);
        setLoadingUsers(false);
      }).catch(() => setLoadingUsers(false));
    }
    setShowModal(true);
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`আপনি কি "${name}" এর পাহারা ডিউটি রেকর্ড মুছে ফেলতে চান?`)) return;
    try {
      await deleteGuardEntry(id);
      setScheduleList(prev => prev.filter(item => item.id !== id));
      addToast('পাহারা ডিউটি রেকর্ড সফলভাবে মুছে ফেলা হয়েছে।', 'success');
    } catch (err) {
      addToast('মুছে ফেলতে সমস্যা হয়েছে।', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.guardName.trim()) {
      addToast('পাহারাদারের নাম লিখুন।', 'error');
      return;
    }

    setSaving(true);
    try {
      const entryData = {
        ...form,
        userId: selectedUserId || '',
        profileImageUrl: selectedProfileImageUrl || ''
      };

      if (editingId) {
        await updateGuardEntry(editingId, entryData);
        setScheduleList(prev => prev.map(item => item.id === editingId ? { ...item, ...entryData } : item));
        addToast('পাহারা ডিউটি তথ্য সফলভাবে আপডেট হয়েছে!', 'success');
      } else if (!editingId && assignMultiDays && selectedWeekdays.length > 1) {
        // Multi-day assignment
        const created = await assignGuardToDays({ ...entryData, weekdays: selectedWeekdays }, currentUser);
        setScheduleList(prev => [...prev, ...created]);
        addToast(`${selectedWeekdays.length}টি দিনে পাহারা শিফট সফলভাবে যোগ করা হয়েছে!`, 'success');
      } else {
        const newEntry = await addGuardEntry({ ...entryData, weekday: selectedWeekdays[0] || form.weekday }, currentUser);
        setScheduleList(prev => [...prev, newEntry]);
        addToast('নতুন পাহারা ডিউটি সফলভাবে যোগ করা হয়েছে!', 'success');
      }
      setShowModal(false);
    } catch (err) {
      addToast('সংরক্ষণ ব্যর্থ হয়েছে।', 'error');
    } finally {
      setSaving(false);
    }
  };

  const selectedWeekdayObj = WEEKDAYS.find(w => w.key === selectedDay) || WEEKDAYS[0];

  return (
    <div style={{ marginTop: '0.5rem' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #14532d 0%, #15803d 100%)',
        borderRadius: '16px',
        padding: 'clamp(1.2rem, 3.5vw, 1.8rem)',
        color: '#ffffff',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 24px rgba(21, 128, 61, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.18)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.65rem' }}>
            <Shield size={14} /> গ্রামীণ নিরাপত্তা উইং
          </div>
          <h2 style={{ fontSize: 'clamp(1.3rem, 3.8vw, 1.85rem)', fontWeight: '800', margin: '0 0 0.4rem 0' }}>
            সাপ্তাহিক রাত্রিকালীন গ্রাম পাহারা কর্মসূচি
          </h2>
          <p style={{ margin: 0, fontSize: '0.88rem', opacity: 0.92, maxWidth: '650px', lineHeight: 1.5 }}>
            আলমদীপাড়া যুব সমাজের উদ্যোগে গ্রামের শান্তি-শৃঙ্খলা ও চুরি-ডাকাতি রোধে ৭ দিনের ধারাবাহিক স্বেচ্ছাসেবক পাহারা দল।
          </p>

          {/* Active duty status badge */}
          {activeGuardsNow.length > 0 && (
            <div style={{
              marginTop: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              color: '#15803d',
              padding: '6px 14px',
              borderRadius: '24px',
              fontSize: '0.82rem',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulseDot 1.5s infinite' }}></span>
              <span>বর্তমানে দায়িত্বে আছেন: {activeGuardsNow.map(g => g.guardName).join(', ')} ({activeGuardsNow[0].startTime} - {activeGuardsNow[0].endTime})</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }
      `}</style>

      {/* 7 Days Navigation Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '1.25rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '4px',
          WebkitOverflowScrolling: 'touch',
          flex: 1
        }}>
          {WEEKDAYS.map(day => {
            const isToday = bangladeshTime.currentDayKey === day.key;
            const isSelected = selectedDay === day.key;
            const count = scheduleList.filter(s => s.weekday === day.key && s.isPublished !== false).length;

            return (
              <button
                key={day.key}
                type="button"
                onClick={() => setSelectedDay(day.key)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '12px',
                  border: isSelected ? '2px solid #16a34a' : '1px solid var(--border-color, #e2e8f0)',
                  backgroundColor: isSelected ? '#16a34a' : 'var(--bg-card, #ffffff)',
                  color: isSelected ? '#ffffff' : 'var(--text-main, #1e293b)',
                  fontWeight: isSelected ? '800' : '600',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.18s ease'
                }}
              >
                <span>{day.nameBn}</span>
                {isToday && (
                  <span style={{
                    fontSize: '0.68rem',
                    padding: '1px 6px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? '#ffffff' : '#dcfce7',
                    color: isSelected ? '#15803d' : '#16a34a',
                    fontWeight: '800'
                  }}>
                    আজ
                  </span>
                )}
                <span style={{
                  fontSize: '0.72rem',
                  opacity: 0.85,
                  padding: '1px 5px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? 'rgba(255,255,255,0.25)' : 'var(--bg-elevated, #f1f5f9)'
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Admin Action Button */}
        {canManage && (
          <button
            type="button"
            onClick={() => handleOpenAdd(selectedDay)}
            className="btn btn-primary"
            style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            <Plus size={16} /> নতুন পাহারাদার যোগ
          </button>
        )}
      </div>

      {/* Selected Day Content */}
      <div style={{
        background: 'var(--bg-card, #ffffff)',
        border: '1px solid var(--border-color, #e2e8f0)',
        borderRadius: '14px',
        padding: 'clamp(1rem, 3vw, 1.5rem)',
        marginBottom: '1.5rem'
      }}>
        {/* Day Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color, #e2e8f0)', paddingBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} />
              {selectedWeekdayObj.nameBn}-এর পাহারা রোস্টার
              {bangladeshTime.currentDayKey === selectedDay && (
                <span style={{ fontSize: '0.72rem', background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontWeight: '700' }}>
                  চলতি দিন
                </span>
              )}
            </h3>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.82rem', color: 'var(--text-muted, #64748b)' }}>
              মোট শিফট সংখ্যা: {dayEntries.length}টি
            </p>
          </div>

          <button onClick={loadData} className="btn btn-secondary btn-sm" title="রিফ্রেশ করুন">
            <RefreshCw size={14} /> রিফ্রেশ
          </button>
        </div>

        {/* Loading state */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            পাহারা তালিকা লোড হচ্ছে...
          </div>
        ) : dayEntries.length === 0 ? (
          /* Empty state */
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem', background: 'var(--bg-elevated, #f8fafc)', borderRadius: '12px' }}>
            <AlertCircle size={36} color="#94a3b8" style={{ marginBottom: '0.5rem' }} />
            <h4 style={{ margin: '0 0 0.35rem 0', fontWeight: '700', fontSize: '1rem' }}>
              {selectedWeekdayObj.nameBn} কোনো পাহারাদার নির্ধারিত নেই
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {canManage 
                ? 'উপরের "নতুন পাহারাদার যোগ" বোতামে ক্লিক করে নতুন শিফট নির্ধারণ করুন।' 
                : 'যুব সংঘ কর্তৃক এই দিনের পাহারা তালিকা শিগগিরই হালনাগাদ করা হবে।'}
            </p>
            {canManage && (
              <button
                onClick={() => handleOpenAdd(selectedDay)}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                <Plus size={14} /> এই দিনে পাহারাদার যোগ করুন
              </button>
            )}
          </div>
        ) : (
          /* Shift Entries List */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {dayEntries.map((entry, index) => {
              const isCurrentShift = isShiftCurrentlyActive(entry.startTime, entry.endTime, entry.weekday);

              return (
                <div
                  key={entry.id}
                  style={{
                    background: isCurrentShift ? '#f0fdf4' : 'var(--bg-elevated, #f8fafc)',
                    border: isCurrentShift ? '2px solid #16a34a' : '1px solid var(--border-color, #e2e8f0)',
                    borderRadius: '12px',
                    padding: '1rem',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    boxShadow: isCurrentShift ? '0 4px 14px rgba(22, 163, 74, 0.15)' : 'none'
                  }}
                >
                  {/* Active badge */}
                  {isCurrentShift && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: '#16a34a',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      padding: '3px 8px',
                      borderRadius: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff' }}></span>
                      চলমান শিফট
                    </div>
                  )}

                  {/* Header: Guard Name & Order */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                    {/* Profile photo or fallback avatar */}
                    {entry.profileImageUrl ? (
                      <img
                        src={entry.profileImageUrl}
                        alt={entry.guardName}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: isCurrentShift ? '2px solid #16a34a' : '2px solid #cbd5e1',
                          flexShrink: 0
                        }}
                        onError={e => { e.target.style.display = 'none'; }}
                      />
                    ) : (
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: isCurrentShift ? '#16a34a' : '#2563eb',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        flexShrink: 0
                      }}>
                        {(entry.guardName || '?').charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '800', color: 'var(--text-main, #0f172a)' }}>
                        {entry.guardName}
                      </h4>
                      {entry.area && (
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted, #64748b)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={12} /> {entry.area}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Duty Timing */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: isCurrentShift ? '#dcfce7' : 'var(--bg-card, #ffffff)',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: isCurrentShift ? '#15803d' : '#0284c7',
                    marginBottom: '0.6rem'
                  }}>
                    <Clock size={15} />
                    <span>{entry.startTime} – {entry.endTime}</span>
                  </div>

                  {/* Note / Phone */}
                  {entry.note && (
                    <p style={{ margin: '0 0 0.6rem 0', fontSize: '0.82rem', color: 'var(--text-muted, #475569)', lineHeight: 1.4 }}>
                      📝 {entry.note}
                    </p>
                  )}

                  {/* Footer & Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color, #e2e8f0)', marginTop: '0.4rem' }}>
                    {/* Admin can see phone; public sees nothing to protect privacy */}
                    {canManage && entry.phone ? (
                      <a
                        href={`tel:${entry.phone}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          color: '#16a34a',
                          fontWeight: '700',
                          fontSize: '0.8rem',
                          textDecoration: 'none'
                        }}
                      >
                        <Phone size={13} /> {entry.phone}
                      </a>
                    ) : <span />}

                    {/* Admin Actions */}
                    {canManage && (
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(entry)}
                          style={{
                            padding: '4px 8px',
                            background: '#e0f2fe',
                            color: '#0284c7',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px'
                          }}
                        >
                          <Edit2 size={12} /> সম্পাদনা
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(entry.id, entry.guardName)}
                          style={{
                            padding: '4px 8px',
                            background: '#fee2e2',
                            color: '#dc2626',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.75rem'
                          }}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Admin Add/Edit Modal */}
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
            overflowY: 'auto',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ margin: 0, fontWeight: '800', color: '#16a34a', fontSize: '1.2rem' }}>
                {editingId ? '✏️ পাহারা শিফট সম্পাদনা' : '➕ নতুন পাহারা শিফট যোগ'}
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

              {/* ── Registered User Search Panel (admin only, add mode) ── */}
              <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '10px', padding: '0.85rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '800', marginBottom: '0.5rem', color: '#15803d' }}>
                  👤 নিবন্ধিত ব্যবহারকারী থেকে পাহারাদার নির্বাচন করুন
                </label>
                {selectedUserId && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#dcfce7', borderRadius: '8px', padding: '6px 10px', marginBottom: '0.5rem' }}>
                    {selectedProfileImageUrl ? (
                      <img src={selectedProfileImageUrl} alt="" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} onError={e => { e.target.style.display='none'; }} />
                    ) : (
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#16a34a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: '800' }}>
                        {(form.guardName || '?').charAt(0)}
                      </div>
                    )}
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#15803d', flex: 1 }}>{form.guardName}</span>
                    <button type="button" onClick={() => { setSelectedUserId(''); setSelectedProfileImageUrl(''); setForm(prev => ({ ...prev, guardName: '' })); }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', padding: '0' }}>
                      <X size={14} />
                    </button>
                  </div>
                )}
                <div style={{ position: 'relative' }}>
                  <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  <input
                    type="text"
                    placeholder="নাম, ইমেইল বা ফোন দিয়ে খুঁজুন..."
                    value={userSearchTerm}
                    onChange={e => setUserSearchTerm(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem 0.75rem 0.5rem 2rem', borderRadius: '7px', border: '1.5px solid #86efac', background: '#fff', fontSize: '0.85rem', boxSizing: 'border-box' }}
                  />
                </div>
                {loadingUsers && (
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.4rem', textAlign: 'center' }}>ব্যবহারকারী লোড হচ্ছে...</div>
                )}
                {!loadingUsers && userSearchTerm.trim().length >= 1 && (
                  <div style={{ marginTop: '0.4rem', maxHeight: '140px', overflowY: 'auto', borderRadius: '7px', border: '1px solid #bbf7d0', background: '#fff' }}>
                    {registeredUsers
                      .filter(u => {
                        const q = userSearchTerm.toLowerCase();
                        return (
                          (u.displayName || '').toLowerCase().includes(q) ||
                          (u.email || '').toLowerCase().includes(q) ||
                          (u.phone || '').includes(q)
                        );
                      })
                      .slice(0, 10)
                      .map(u => (
                        <button
                          key={u.uid}
                          type="button"
                          onClick={() => {
                            setSelectedUserId(u.uid);
                            setSelectedProfileImageUrl(u.photoURL || '');
                            setForm(prev => ({ ...prev, guardName: u.displayName }));
                            setUserSearchTerm('');
                          }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            width: '100%', padding: '6px 10px', border: 'none',
                            background: selectedUserId === u.uid ? '#dcfce7' : 'transparent',
                            cursor: 'pointer', textAlign: 'left',
                            borderBottom: '1px solid #f0fdf4'
                          }}
                        >
                          {u.photoURL ? (
                            <img src={u.photoURL} alt="" style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }} onError={e => { e.target.style.display='none'; }} />
                          ) : (
                            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: '800', flexShrink: 0 }}>
                              {(u.displayName || '?').charAt(0)}
                            </div>
                          )}
                          <div>
                            <div style={{ fontSize: '0.83rem', fontWeight: '700', color: '#0f172a' }}>{u.displayName}</div>
                            <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{u.email}</div>
                          </div>
                        </button>
                      ))
                    }
                    {registeredUsers.filter(u => {
                      const q = userSearchTerm.toLowerCase();
                      return (u.displayName || '').toLowerCase().includes(q) || (u.email || '').toLowerCase().includes(q) || (u.phone || '').includes(q);
                    }).length === 0 && (
                      <div style={{ fontSize: '0.8rem', color: '#64748b', padding: '8px 12px' }}>কোনো ব্যবহারকারী পাওয়া যায়নি।</div>
                    )}
                  </div>
                )}
              </div>

              {/* Multi-day assignment toggle (add mode only) */}
              {!editingId && (
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '700' }}>
                  <input
                    type="checkbox"
                    checked={assignMultiDays}
                    onChange={e => setAssignMultiDays(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#16a34a' }}
                  />
                  একাধিক দিনে একসাথে নিয়োগ করুন
                </label>
              )}

              {/* Weekday Selection */}
              {!assignMultiDays || editingId ? (
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>বার (Weekday) *</label>
                  <select
                    value={form.weekday}
                    onChange={e => {
                      setForm(prev => ({ ...prev, weekday: e.target.value }));
                      setSelectedWeekdays([e.target.value]);
                    }}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem' }}
                  >
                    {WEEKDAYS.map(w => (
                      <option key={w.key} value={w.key}>{w.nameBn}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.5rem' }}>বার নির্বাচন করুন (একাধিক) *</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {WEEKDAYS.map(w => (
                      <label key={w.key} style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '0.83rem', fontWeight: '600',
                        background: selectedWeekdays.includes(w.key) ? '#dcfce7' : 'var(--bg-elevated, #f1f5f9)',
                        border: selectedWeekdays.includes(w.key) ? '1.5px solid #16a34a' : '1.5px solid var(--border-color)',
                        borderRadius: '8px', padding: '4px 10px' }}>
                        <input
                          type="checkbox"
                          checked={selectedWeekdays.includes(w.key)}
                          onChange={e => {
                            setSelectedWeekdays(prev =>
                              e.target.checked ? [...prev, w.key] : prev.filter(d => d !== w.key)
                            );
                          }}
                          style={{ accentColor: '#16a34a' }}
                        />
                        {w.nameBn}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Guard Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>পাহারাদারের নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: মোঃ আব্দুল করিম"
                  value={form.guardName}
                  onChange={e => setForm(prev => ({ ...prev, guardName: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              {/* Time Range */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>দায়িত্ব শুরু *</label>
                  <input
                    type="text"
                    required
                    placeholder="07:30 PM"
                    value={form.startTime}
                    onChange={e => setForm(prev => ({ ...prev, startTime: e.target.value }))}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>দায়িত্ব শেষ *</label>
                  <input
                    type="text"
                    required
                    placeholder="12:00 AM"
                    value={form.endTime}
                    onChange={e => setForm(prev => ({ ...prev, endTime: e.target.value }))}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Duty Area / Point */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>পাহারার এলাকা / পয়েন্ট</label>
                <input
                  type="text"
                  placeholder="যেমন: পূর্বপাড়া ও বটতলা মোড়"
                  value={form.area}
                  onChange={e => setForm(prev => ({ ...prev, area: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>মোবাইল নম্বর (ঐচ্ছিক)</label>
                <input
                  type="text"
                  placeholder="01XXXXXXXXX"
                  value={form.phone}
                  onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              {/* Note / Instructions */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>বিশেষ নির্দেশনা বা নোট</label>
                <textarea
                  rows="2"
                  placeholder="যেমন: বাঁশি ও লাইট যুব সংঘ অফিস থেকে সংগ্রহ করবেন..."
                  value={form.note}
                  onChange={e => setForm(prev => ({ ...prev, note: e.target.value }))}
                  style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1.5px solid var(--border-color, #cbd5e1)', background: 'var(--bg-main, #fff)', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              {/* Order & Published */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginTop: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.35rem' }}>শিফট ক্রম</label>
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

              {/* Submit Buttons */}
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

export default VillageGuardSchedule;
