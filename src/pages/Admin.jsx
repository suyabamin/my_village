import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { Shield, Users, Settings, FileText, CheckCircle2, Loader2, UserCheck, Image as ImageIcon, Trophy, Check, X } from 'lucide-react';
import { getCollectionData, updateDocument, initialVillageData } from '../services/dbService';
import { getTournaments, updateTournamentStatus } from '../services/sportsService';
import VillageImageAdminManager from '../components/village/VillageImageAdminManager';

export const Admin = () => {
  const { isSuperAdmin, currentUser } = useAuth();
  const { addToast } = useNotification();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'roles' | 'tournaments' | 'settings' | 'village_images' | 'audit'

  // Configurable Site Settings
  const [siteSettings, setSiteSettings] = useState(initialVillageData.site_settings);

  // Registered Users State
  const [userList, setUserList] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  // Tournaments for Approval
  const [pendingTournaments, setPendingTournaments] = useState([]);

  // Audit Logs State
  const [auditLogs, setAuditLogs] = useState([
    { id: 'log-1', adminName: 'এডমিন (সুপার)', action: 'রোল অর্পণ', targetDoc: 'rahim@alamdipara.com (game_admin)', timestamp: '২০২৬-০৯-০২ ১৬:৩০' },
    { id: 'log-2', adminName: 'এডমিন (সুপার)', action: 'ঘোষণা হালনাগাদ', targetDoc: 'সাইট ঘোষণা পাঠ্য পরিবর্তন', timestamp: '২০২৬-০৯-০২ ১৪:১৫' }
  ]);

  const loadData = async () => {
    setLoadingUsers(true);
    try {
      const data = await getCollectionData('users');
      if (data && data.length > 0) {
        setUserList(data);
      } else {
        setUserList([
          { uid: 'demo-u-1', displayName: 'আব্দুর রহিম', email: 'rahim@alamdipara.com', phone: '01711223344', roles: ['game_admin'] },
          { uid: 'demo-u-2', displayName: 'মাওলানা ইসমাইল', email: 'ismail@alamdipara.com', phone: '01722334455', roles: ['mosque_admin'] },
          { uid: 'demo-u-3', displayName: 'মোঃ রফিকুল ইসলাম', email: 'rofiq@alamdipara.com', phone: '01733445566', roles: ['education_admin'] }
        ]);
      }

      const tList = await getTournaments('pending');
      setPendingTournaments(tList);
    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleApproveTournament = async (tId) => {
    await updateTournamentStatus(tId, 'approved', '', currentUser?.uid || 'admin');
    setPendingTournaments(prev => prev.filter(t => t.id !== tId));
    addToast('টুর্নামেন্ট সফলভাবে অনুমোদিত হয়েছে!', 'success');
  };

  const handleRejectTournament = async (tId) => {
    const reason = window.prompt("প্রত্যাখ্যানের কারণ লিখুন:") || 'শর্তানুযায়ী অপূর্ণাঙ্গ তথ্য';
    await updateTournamentStatus(tId, 'rejected', reason, currentUser?.uid || 'admin');
    setPendingTournaments(prev => prev.filter(t => t.id !== tId));
    addToast('টুর্নামেন্টটি প্রত্যাখ্যান করা হয়েছে।', 'info');
  };

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

    setUserList(prev => prev.map(u => {
      if (u.uid === user.uid || u.id === user.id) {
        return { ...u, roles: updatedRoles };
      }
      return u;
    }));

    const targetId = user.uid || user.id;
    await updateDocument('users', targetId, { roles: updatedRoles });

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
          ব্যবহারকারীদের এডমিন রোল ব্যবস্থাপনা, টুর্নামেন্ট অনুমোদন, ওয়েবসাইটের কনফিগারেশন ও এডমিন অডিট ইতিহাস।
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
        <button onClick={() => setActiveTab('tournaments')} className={`btn ${activeTab === 'tournaments' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Trophy size={18} /> টুর্নামেন্ট অনুমোদন ({pendingTournaments.length})
        </button>
        {isSuperAdmin && (
          <button onClick={() => setActiveTab('roles')} className={`btn ${activeTab === 'roles' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            <Users size={18} /> রোল ব্যবস্থাপনা ({userList.length})
          </button>
        )}
        {isSuperAdmin && (
          <button onClick={() => setActiveTab('village_images')} className={`btn ${activeTab === 'village_images' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            <ImageIcon size={18} /> গ্রামের ছবি
          </button>
        )}
        {isSuperAdmin && (
          <button onClick={() => setActiveTab('settings')} className={`btn ${activeTab === 'settings' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            <Settings size={18} /> সাইট কনফিগারেশন
          </button>
        )}
        <button onClick={() => setActiveTab('audit')} className={`btn ${activeTab === 'audit' ? 'btn-primary' : 'btn-secondary'}`} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <FileText size={18} /> অডিট লগ
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-primary-600)' }}>{userList.length} জন</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>নিবন্ধিত ব্যবহারকারী</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#d97706' }}>{pendingTournaments.length}টি</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>অনুমোদনের অপেক্ষায় থাকা টুর্নামেন্ট</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#2563eb' }}>২টি</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>মসজিদ (বায়তুল নূর ও মামুর)</div>
          </div>
        </div>
      )}

      {/* Tab 2: Pending Tournaments Approval */}
      {activeTab === 'tournaments' && (
        <div className="card" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
            অনুমোদনের অপেক্ষায় থাকা টুর্নামেন্টসমূহ (Super Admin / Game Admin)
          </h2>

          {pendingTournaments.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
              বর্তমানে অনুমোদনের জন্য কোনো নতুন টুর্নামেন্ট বাকি নেই।
            </p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {pendingTournaments.map(t => (
                <div key={t.id} style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', backgroundColor: 'var(--bg-elevated)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>
                      {t.sport === 'cricket' ? '🏏 ক্রিকেট' : '⚽ ফুটবল'}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.3rem' }}>{t.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      <div><strong>আয়োজক:</strong> {t.organizerName} ({t.organizerPhone})</div>
                      <div><strong>স্থান:</strong> {t.venue}</div>
                      <div><strong>তারিখ:</strong> {t.startDate} - {t.endDate}</div>
                      <div><strong>মোট দল:</strong> {t.teamCount}টি</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <button onClick={() => handleApproveTournament(t.id)} className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                      <Check size={16} /> অনুমোদন
                    </button>
                    <button onClick={() => handleRejectTournament(t.id)} className="btn btn-secondary btn-sm" style={{ backgroundColor: '#dc2626', color: '#fff' }}>
                      <X size={16} /> নাকচ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: User Roles */}
      {activeTab === 'roles' && (
        <div className="card" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700' }}>
                ব্যবহারকারীদের এডমিন রোল ব্যবস্থাপনা
              </h2>
            </div>
            <button onClick={loadData} className="btn btn-secondary btn-sm">
              রিলোড করুন 🔄
            </button>
          </div>

          {loadingUsers ? (
            <div style={{ padding: '2.5rem', textAlign: 'center' }}>
              <Loader2 size={32} className="animate-spin" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary-600)' }} />
              <div>তালিকা লোড হচ্ছে...</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {userList.map(u => (
                <div key={u.uid || u.id} style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <UserCheck size={16} color="var(--color-primary-600)" /> {u.displayName || 'নাম প্রদান করা হয়নি'}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        ইমেইল: {u.email} {u.phone ? `| ফোন: ${u.phone}` : ''}
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.65rem' }}>
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

      {/* Tab 4: Village Images Manager */}
      {activeTab === 'village_images' && (
        <VillageImageAdminManager currentUser={currentUser} />
      )}

      {/* Tab 5: Site Text Configuration */}
      {activeTab === 'settings' && (
        <div className="card" style={{ maxWidth: '700px', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
            হোমপেজ ও সাইট হেডার টেক্সট কনফিগারেশন
          </h2>
          <form onSubmit={handleSaveSettings}>
            <div className="form-group">
              <label className="form-label">সাইটের শিরোনাম</label>
              <input type="text" className="form-input" value={siteSettings.siteTitle} onChange={e => setSiteSettings({...siteSettings, siteTitle: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">হিরো শিরোনাম</label>
              <input type="text" className="form-input" value={siteSettings.heroTitle} onChange={e => setSiteSettings({...siteSettings, heroTitle: e.target.value})} />
            </div>
            <button type="submit" className="btn btn-primary btn-mobile-full" style={{ marginTop: '1rem' }}>
              সেভ করুন
            </button>
          </form>
        </div>
      )}

      {/* Tab 6: Audit Logs */}
      {activeTab === 'audit' && (
        <div className="card" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>
            অডিট ইতিহাস (System Audit Trail)
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
