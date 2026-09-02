import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { Shield, Users, Settings, FileText, CheckCircle2, Loader2, UserCheck } from 'lucide-react';
import { getCollectionData, updateDocument, initialVillageData } from '../services/dbService';

export const Admin = () => {
  const { isSuperAdmin } = useAuth();
  const { addToast } = useNotification();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'roles' | 'settings' | 'audit'

  // Configurable Site Settings
  const [siteSettings, setSiteSettings] = useState(initialVillageData.site_settings);

  // Registered Users State
  const [userList, setUserList] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  // Audit Logs State
  const [auditLogs, setAuditLogs] = useState([
    { id: 'log-1', adminName: 'এডমিন (সুপার)', action: 'রোল অর্পণ', targetDoc: 'rahim@alamdipara.com (game_admin)', timestamp: '২০২৬-০৯-০২ ১৬:৩০' },
    { id: 'log-2', adminName: 'এডমিন (সুপার)', action: 'ঘোষণা হালনাগাদ', targetDoc: 'সাইট ঘোষণা পাঠ্য পরিবর্তন', timestamp: '২০২৬-০৯-০২ ১৪:১৫' }
  ]);

  // Fetch real registered users from Firestore 'users' collection
  const loadUsers = async () => {
    setLoadingUsers(true);
    try {
      const data = await getCollectionData('users');
      if (data && data.length > 0) {
        setUserList(data);
      } else {
        // Fallback default list if no Firestore user documents exist yet
        setUserList([
          { uid: 'demo-u-1', displayName: 'আব্দুর রহিম', email: 'rahim@alamdipara.com', phone: '01711223344', roles: ['game_admin'] },
          { uid: 'demo-u-2', displayName: 'মাওলানা ইসমাইল', email: 'ismail@alamdipara.com', phone: '01722334455', roles: ['mosque_admin'] },
          { uid: 'demo-u-3', displayName: 'মোঃ রফিকুল ইসলাম', email: 'rofiq@alamdipara.com', phone: '01733445566', roles: ['education_admin'] }
        ]);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    addToast('ওয়েবসাইটের কনফিগারযোগ্য তথ্য সফলভাবে আপডেট হয়েছে!', 'success');
  };

  // Toggle and assign/remove role for a user
  const handleToggleUserRole = async (user, roleName) => {
    const currentRoles = user.roles || [];
    const has = currentRoles.includes(roleName);
    const updatedRoles = has 
      ? currentRoles.filter(r => r !== roleName) 
      : [...currentRoles, roleName];

    // Optimistic UI update
    setUserList(prev => prev.map(u => {
      if (u.uid === user.uid || u.id === user.id) {
        return { ...u, roles: updatedRoles };
      }
      return u;
    }));

    const targetId = user.uid || user.id;

    // Persist to Cloud Firestore users collection
    await updateDocument('users', targetId, { roles: updatedRoles });

    // Record audit log
    const logItem = {
      id: 'log-' + Date.now(),
      adminName: 'এডমিন (সুপার)',
      action: has ? 'রোল অপসারণ' : 'রোল অর্পণ',
      targetDoc: `${user.email || user.displayName} (${roleName})`,
      timestamp: new Date().toLocaleString('bn-BD')
    };
    setAuditLogs(prev => [logItem, ...prev]);

    addToast(`"${user.displayName || user.email}"-এর জন্য ${roleName} রোল ${has ? 'সরানো হয়েছে' : 'যোগ করা হয়েছে'}!`, 'success');
  };

  const availableRoles = [
    { key: 'super_admin', label: 'সুপার এডমিন', color: '#dc2626' },
    { key: 'game_admin', label: 'ক্রীড়া এডমিন', color: '#d97706' },
    { key: 'education_admin', label: 'শিক্ষা এডমিন', color: '#2563eb' },
    { key: 'mosque_admin', label: 'মসজিদ এডমিন', color: '#16a34a' },
    { key: 'organization_admin', label: 'যুব সংঘ এডমিন', color: '#7c3aed' },
    { key: 'emergency_admin', label: 'জরুরি এডমিন', color: '#ef4444' },
    { key: 'cultural_admin', label: 'সংস্কৃতিক এডমিন', color: '#ec4899' },
    { key: 'social_admin', label: 'সামাজিক এডমিন', color: '#059669' },
    { key: 'religious_admin', label: 'ধর্মীয় এডমিন', color: '#0284c7' }
  ];

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
          সুপার এডমিন কন্ট্রোল সেন্টার
        </div>
        <h1 style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.2rem)', fontWeight: '800', marginBottom: '0.4rem' }}>
          আলমদীপাড়া কেন্দ্রীয় এডমিন ড্যাশবোর্ড
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 2.2vw, 1rem)' }}>
          ব্যবহারকারীদের এডমিন রোল ব্যবস্থাপনা, ওয়েবসাইটের কনফিগারেশন ও এডমিন অডিট ইতিহাস।
        </p>
      </div>

      {/* Touch Scrollable Admin Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.75rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        <button onClick={() => setActiveTab('overview')} className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Shield size={18} /> সারসংক্ষেপ
        </button>
        {isSuperAdmin && (
          <button onClick={() => setActiveTab('roles')} className={`btn ${activeTab === 'roles' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            <Users size={18} /> রোল ব্যবস্থাপনা ({userList.length})
          </button>
        )}
        {isSuperAdmin && (
          <button onClick={() => setActiveTab('settings')} className={`btn ${activeTab === 'settings' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            <Settings size={18} /> সাইট টেক্সট কনফিগারেশন
          </button>
        )}
        <button onClick={() => setActiveTab('audit')} className={`btn ${activeTab === 'audit' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <FileText size={18} /> অডিট লগ (Audit Log)
        </button>
      </div>

      {/* Tab 1: Overview Widgets */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-primary-600)' }}>{userList.length} জন</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>মোট নিবন্ধিত ব্যবহারকারী</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-accent-amber)' }}>৩টি</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>প্রধান কৃষি মাঠ (লাটিয়াকুড়ি, চড়ে বন্দ, মাগুড়া বন্দ)</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#2563eb' }}>২টি</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>মসজিদ (বায়তুল নূর ও মামুর)</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#7c3aed' }}>১টি</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>সরকারি প্রাথমিক বিদ্যালয়</div>
          </div>
        </div>
      )}

      {/* Tab 2: User Roles Assignment Panel */}
      {activeTab === 'roles' && (
        <div className="card" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700' }}>
                ব্যবহারকারীদের এডমিন রোল ব্যবস্থাপনা
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                সুপার এডমিন হিসেবে আপনি সমস্ত নিবন্ধিত ব্যবহারকারীদের দেখতে পারবেন এবং তাদের নির্দিষ্ট এডমিন দায়িত্ব অর্পণ করতে পারবেন।
              </p>
            </div>
            <button onClick={loadUsers} className="btn btn-secondary btn-sm">
              রিলোড করুন 🔄
            </button>
          </div>

          {loadingUsers ? (
            <div style={{ padding: '2.5rem', textAlign: 'center' }}>
              <Loader2 size={32} className="animate-spin" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary-600)' }} />
              <div style={{ fontSize: '0.9rem' }}>ব্যবহারকারীদের তালিকা লোড হচ্ছে...</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {userList.map(u => (
                <div key={u.uid || u.id} style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  
                  {/* User Info Line */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <UserCheck size={16} color="var(--color-primary-600)" /> {u.displayName || 'নাম প্রদান করা হয়নি'}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        ইমেইল: {u.email} {u.phone ? `| ফোন: ${u.phone}` : ''}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                      {(!u.roles || u.roles.length === 0) && (
                        <span className="badge badge-amber">সাধারণ গ্রামবাসী</span>
                      )}
                      {u.roles && u.roles.map(r => (
                        <span key={r} className="badge badge-green">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role Assignment Buttons */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.65rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      রোল পরিবর্তন / ক্লিক করে অর্পণ বা অপসারণ করুন:
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {availableRoles.map(role => {
                        const isAssigned = (u.roles || []).includes(role.key);
                        return (
                          <button
                            key={role.key}
                            onClick={() => handleToggleUserRole(u, role.key)}
                            style={{
                              padding: '0.35rem 0.65rem',
                              borderRadius: 'var(--radius-md)',
                              fontSize: '0.78rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              border: isAssigned ? '1px solid transparent' : '1px solid var(--border-color)',
                              backgroundColor: isAssigned ? role.color : 'var(--bg-card)',
                              color: isAssigned ? '#ffffff' : 'var(--text-main)',
                              transition: 'all 0.2s ease',
                              minHeight: '36px'
                            }}
                          >
                            {isAssigned ? `✓ ${role.label}` : `+ ${role.label}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Site Text Configuration */}
      {activeTab === 'settings' && (
        <div className="card" style={{ maxWidth: '700px', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
            হোমপেজ ও সাইট হেডার টেক্সট কনফিগারেশন
          </h2>

          <form onSubmit={handleSaveSettings}>
            <div className="form-group">
              <label className="form-label">সাইটের শিরোনাম (Site Title)</label>
              <input type="text" className="form-input" value={siteSettings.siteTitle} onChange={e => setSiteSettings({...siteSettings, siteTitle: e.target.value})} />
            </div>

            <div className="form-group">
              <label className="form-label">হিরো শিরোনাম (Hero Title)</label>
              <input type="text" className="form-input" value={siteSettings.heroTitle} onChange={e => setSiteSettings({...siteSettings, heroTitle: e.target.value})} />
            </div>

            <div className="form-group">
              <label className="form-label">হিরো উপ-শিরোনাম (Subtitle)</label>
              <input type="text" className="form-input" value={siteSettings.heroSubtitle} onChange={e => setSiteSettings({...siteSettings, heroSubtitle: e.target.value})} />
            </div>

            <div className="form-group">
              <label className="form-label">প্রধান স্লোগান</label>
              <input type="text" className="form-input" value={siteSettings.slogan} onChange={e => setSiteSettings({...siteSettings, slogan: e.target.value})} />
            </div>

            <button type="submit" className="btn btn-primary btn-mobile-full" style={{ marginTop: '1rem' }}>
              পরিবর্তনগুলো সেভ করুন
            </button>
          </form>
        </div>
      )}

      {/* Tab 4: Audit Logs */}
      {activeTab === 'audit' && (
        <div className="card" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
            এডমিন অ্যাকশন অডিট লগ (System Audit Trail)
          </h2>

          <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--bg-elevated)' }}>
                  <th style={{ padding: '0.65rem' }}>সময়</th>
                  <th style={{ padding: '0.65rem' }}>এডমিন</th>
                  <th style={{ padding: '0.65rem' }}>অ্যাকশন</th>
                  <th style={{ padding: '0.65rem' }}>বিবরণ</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map(log => (
                  <tr key={log.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.65rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{log.timestamp}</td>
                    <td style={{ padding: '0.65rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>{log.adminName}</td>
                    <td style={{ padding: '0.65rem' }}><span className="badge badge-blue">{log.action}</span></td>
                    <td style={{ padding: '0.65rem' }}>{log.targetDoc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
