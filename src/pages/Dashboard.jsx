import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { LayoutDashboard, Wrench, FileText, Shield, Trash2, Plus } from 'lucide-react';
import { initialVillageData } from '../services/dbService';

export const Dashboard = () => {
  const { userProfile, switchDemoRole } = useAuth();
  const { addToast } = useNotification();

  const [myMachines, setMyMachines] = useState(initialVillageData.agricultural_machines);
  const [myLeases, setMyLeases] = useState(initialVillageData.land_leases);
  const [deleteModalItem, setDeleteModalItem] = useState(null);

  const handleDeleteConfirm = () => {
    if (!deleteModalItem) return;
    if (deleteModalItem.type === 'machine') {
      setMyMachines(prev => prev.filter(m => m.id !== deleteModalItem.id));
    } else if (deleteModalItem.type === 'lease') {
      setMyLeases(prev => prev.filter(l => l.id !== deleteModalItem.id));
    }
    addToast('পোস্টটি সফলভাবে মুছে ফেলা হয়েছে।', 'success');
    setDeleteModalItem(null);
  };

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)' }}>
      
      {/* Dashboard Top Header */}
      <div className="card" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-primary-50)', borderColor: 'var(--color-primary-300)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.85rem' }}>
          <div>
            <span className="badge badge-green">ব্যক্তিগত পোর্টাল</span>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: '800', marginTop: '0.25rem', color: 'var(--color-primary-900)' }}>
              স্বাগতম, {userProfile?.displayName || 'গ্রামবাসী'}!
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-primary-800)' }}>
              আপনার দেওয়া সকল বিজ্ঞাপন, টুর্নামেন্ট রেজিস্ট্রেশন ও প্রোফাইল ব্যবস্থাপনা করুন।
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', width: '100%', maxWidth: '320px' }}>
            <Link to="/profile" className="btn btn-secondary btn-sm style-mobile-btn">প্রোফাইল সম্পাদন</Link>
            {userProfile?.roles?.length > 0 && (
              <Link to="/admin" className="btn btn-primary btn-sm style-mobile-btn">এডমিন প্যানেলে প্রবেশ</Link>
            )}
          </div>
        </div>
      </div>

      {/* Dev Demo Role Selector Bar */}
      <div className="card" style={{ marginBottom: '1.5rem', padding: '0.85rem', backgroundColor: 'var(--bg-elevated)' }}>
        <div style={{ fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Shield size={16} color="var(--color-primary-600)" /> ডেমো টেস্ট মোড (এডমিন রোল পরিবর্তন করুন):
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          <button onClick={() => { switchDemoRole(['super_admin']); addToast('সুপার এডমিন রোল সক্রিয়!', 'info'); }} className="btn btn-secondary btn-sm">সুপার এডমিন</button>
          <button onClick={() => { switchDemoRole(['game_admin']); addToast('খেলাধুলা এডমিন রোল সক্রিয়!', 'info'); }} className="btn btn-secondary btn-sm">ক্রীড়া এডমিন</button>
          <button onClick={() => { switchDemoRole(['education_admin']); addToast('শিক্ষা এডমিন রোল সক্রিয়!', 'info'); }} className="btn btn-secondary btn-sm">শিক্ষা এডমিন</button>
          <button onClick={() => { switchDemoRole(['mosque_admin']); addToast('মসজিদ এডমিন রোল সক্রিয়!', 'info'); }} className="btn btn-secondary btn-sm">মসজিদ এডমিন</button>
          <button onClick={() => { switchDemoRole(['organization_admin']); addToast('যুব সংঘ এডমিন রোল সক্রিয়!', 'info'); }} className="btn btn-secondary btn-sm">যুব সংঘ এডমিন</button>
          <button onClick={() => { switchDemoRole(['emergency_admin']); addToast('জরুরি সভা এডমিন রোল সক্রিয়!', 'info'); }} className="btn btn-secondary btn-sm">জরুরি এডমিন</button>
        </div>
      </div>

      {/* Grid Content: My Machines & My Leases */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        
        {/* Section 1: My Machines */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Wrench size={18} color="var(--color-primary-600)" /> আমার পোস্টকৃত কৃষিযন্ত্রপাতি ({myMachines.length})
            </h2>
            <Link to="/agriculture" className="btn btn-primary btn-sm"><Plus size={14} /> নতুন</Link>
          </div>

          {myMachines.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              আপনি এখনো কোনো কৃষিযন্ত্রের সেবা পোস্ট করেননি।
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {myMachines.map(m => (
                <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0.85rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{m.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>৳{m.price} / {m.priceUnit}</div>
                  </div>
                  <button onClick={() => setDeleteModalItem({ id: m.id, type: 'machine', name: m.name })} className="btn btn-danger btn-sm" style={{ padding: '0.3rem 0.6rem' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: My Land Leases */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FileText size={18} color="var(--color-primary-600)" /> আমার পোস্টকৃত জমি লিজ ({myLeases.length})
            </h2>
            <Link to="/agriculture" className="btn btn-primary btn-sm"><Plus size={14} /> নতুন</Link>
          </div>

          {myLeases.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              আপনি এখনো কোনো জমি লিজের বিজ্ঞাপন পোস্ট করেননি।
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {myLeases.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0.85rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{l.location} ({l.landAmount})</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>৳{l.price.toLocaleString()}</div>
                  </div>
                  <button onClick={() => setDeleteModalItem({ id: l.id, type: 'lease', name: l.location })} className="btn btn-danger btn-sm" style={{ padding: '0.3rem 0.6rem' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Delete Confirmation Safety Modal */}
      {deleteModalItem && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.85rem' }}>
          <div className="card" style={{ width: 'min(420px, 92vw)', textAlign: 'center', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.65rem', color: 'var(--color-accent-red)' }}>
              মুছে ফেলার নিশ্চিতকরণ
            </h3>
            <p style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              আপনি কি নিশ্চিতভাবে <strong>"{deleteModalItem.name}"</strong> পোস্টটি মুছে ফেলতে চান?
            </p>
            <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center' }}>
              <button onClick={() => setDeleteModalItem(null)} className="btn btn-secondary">বাতিল</button>
              <button onClick={handleDeleteConfirm} className="btn btn-danger">হ্যাঁ, মুছে ফেলুন</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
