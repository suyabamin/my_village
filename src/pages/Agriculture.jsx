import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Wrench, FileText, Plus, Phone, Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { getCollectionData, addDocument, initialVillageData } from '../services/dbService';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { ImageUploader } from '../components/common/ImageUploader';

export const Agriculture = () => {
  const { currentUser, userProfile } = useAuth();
  const { addToast } = useNotification();
  
  const [fields, setFields] = useState(initialVillageData.agriculture_fields);
  const [machines, setMachines] = useState(initialVillageData.agricultural_machines);
  const [leases, setLeases] = useState(initialVillageData.land_leases);
  const [activeTab, setActiveTab] = useState('fields'); // 'fields' | 'machines' | 'leases'

  // Machine Modal Form state
  const [showMachineModal, setShowMachineModal] = useState(false);
  const [machineForm, setMachineForm] = useState({
    name: '',
    category: 'পাওয়ার টিলার',
    model: '',
    description: '',
    performance: '',
    price: '',
    priceUnit: 'টাকা/বিঘা',
    availableDate: '',
    availableTime: '',
    serviceArea: '',
    phone: '',
    image: ''
  });

  // Lease Modal Form state
  const [showLeaseModal, setShowLeaseModal] = useState(false);
  const [leaseForm, setLeaseForm] = useState({
    fieldSlug: 'latiyakuri',
    location: '',
    landAmount: '',
    crops: '',
    duration: '',
    price: '',
    phone: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    getCollectionData('agricultural_machines').then(res => {
      if (res && res.length > 0) setMachines(res);
    });
    getCollectionData('land_leases').then(res => {
      if (res && res.length > 0) setLeases(res);
    });
  }, []);

  const handleCreateMachine = async (e) => {
    e.preventDefault();
    if (!machineForm.name || !machineForm.price || !machineForm.phone) {
      addToast('অনুগ্রহ করে প্রয়োজনীয় তথ্যসমূহ প্রদান করুন।', 'error');
      return;
    }

    const newMachine = {
      ...machineForm,
      price: Number(machineForm.price),
      ownerId: currentUser.uid,
      ownerName: userProfile?.displayName || 'গ্রামবাসী',
      image: machineForm.image || 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80',
      status: 'published'
    };

    const res = await addDocument('agricultural_machines', newMachine);
    setMachines(prev => [res, ...prev]);
    setShowMachineModal(false);
    addToast('কৃষিযন্ত্রপাতির সেবা সফলভাবে যোগ করা হয়েছে!', 'success');
  };

  const handleCreateLease = async (e) => {
    e.preventDefault();
    if (!leaseForm.landAmount || !leaseForm.price || !leaseForm.phone) {
      addToast('অনুগ্রহ করে প্রয়োজনীয় ঘরগুলো পূরণ করুন।', 'error');
      return;
    }

    const newLease = {
      ...leaseForm,
      price: Number(leaseForm.price),
      ownerId: currentUser.uid,
      ownerName: userProfile?.displayName || 'গ্রামবাসী',
      images: [leaseForm.image || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'],
      status: 'published'
    };

    const res = await addDocument('land_leases', newLease);
    setLeases(prev => [res, ...prev]);
    setShowLeaseModal(false);
    addToast('জমি লিজের বিজ্ঞাপন সফলভাবে প্রকাশিত হয়েছে!', 'success');
  };

  return (
    <div className="container" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(0.85rem, 3vw, 1.25rem)' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
          কৃষিপ্রধান গ্রাম আলমদীপাড়া
        </div>
        <h1 style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.2rem)', fontWeight: '800', marginBottom: '0.4rem' }}>
          কৃষি সেবা, মাঠ ও জমি লিজ পোর্টাল
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 2.2vw, 1rem)' }}>
          আলমদীপাড়া গ্রামের লাটিয়াকুড়ি, চড়ে বন্দ ও মাগুড়া বন্দ কৃষি মাঠের রিয়েলটাইম অবস্থা এবং কৃষিযন্ত্রপাতি ও জমি লিজের বিজ্ঞাপন।
        </p>
      </div>

      {/* Touch Scrollable Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.75rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        <button
          onClick={() => setActiveTab('fields')}
          className={`btn ${activeTab === 'fields' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <Sprout size={18} /> ৩টি কৃষি মাঠ
        </button>
        <button
          onClick={() => setActiveTab('machines')}
          className={`btn ${activeTab === 'machines' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <Wrench size={18} /> কৃষিযন্ত্রপাতি সেবা ({machines.length})
        </button>
        <button
          onClick={() => setActiveTab('leases')}
          className={`btn ${activeTab === 'leases' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <FileText size={18} /> জমি লিজ বিজ্ঞাপন ({leases.length})
        </button>
      </div>

      {/* Tab 1: 3 Fields */}
      {activeTab === 'fields' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {fields.map(field => (
            <div key={field.id} className="card card-interactive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-primary-700)' }}>
                    {field.name}
                  </h3>
                  <span className="badge badge-green">সচল মাঠ</span>
                </div>

                <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-main)' }}>
                  <div><strong>ফসলের অবস্থা:</strong> {field.cropInfo}</div>
                  <div><strong>সেচ ব্যবস্থা:</strong> {field.irrigationStatus}</div>
                  <div><strong>সেচ পাম্প:</strong> {field.irrigationMachines}</div>
                  <div><strong>যন্ত্রপাতি:</strong> {field.machinery}</div>
                  <div><strong>আবহাওয়ার নোট:</strong> {field.weatherNote}</div>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>আপডেট: {field.updatedAt}</span>
                <Link to={`/agriculture/${field.id}`} className="btn btn-primary btn-sm btn-mobile-full">
                  বিস্তারিত দেখুন →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Machines */}
      {activeTab === 'machines' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', fontWeight: '700' }}>পাওয়ার টিলার, সেচ পাম্প ও কম্বাইন হারভেস্টার</h2>
            {currentUser ? (
              <button onClick={() => setShowMachineModal(true)} className="btn btn-primary btn-mobile-full">
                <Plus size={18} /> আপনার যন্ত্রের সেবা যোগ করুন
              </button>
            ) : (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                যন্ত্রের সেবার বিজ্ঞাপন দিতে <Link to="/login" style={{ textDecoration: 'underline' }}>লগইন করুন</Link>
              </span>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {machines.map(mach => (
              <div key={mach.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img src={mach.image} alt={mach.name} style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '0.85rem' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="badge badge-amber">{mach.category}</span>
                    <span style={{ fontWeight: '700', color: 'var(--color-primary-700)', fontSize: '1.05rem' }}>
                      ৳{mach.price} <span style={{ fontSize: '0.78rem', fontWeight: '400', color: 'var(--text-muted)' }}>/{mach.priceUnit}</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.4rem' }}>{mach.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                    {mach.description}
                  </p>

                  <div style={{ fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', color: 'var(--text-main)', backgroundColor: 'var(--bg-elevated)', padding: '0.65rem', borderRadius: 'var(--radius-sm)' }}>
                    <div><strong>কাজের ক্ষমতা:</strong> {mach.performance}</div>
                    <div><strong>সার্ভিস এলাকা:</strong> {mach.serviceArea}</div>
                    <div><strong>মালিক:</strong> {mach.ownerName}</div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <a href={`tel:${mach.phone}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Phone size={16} /> কল করুন: {mach.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Land Leases */}
      {activeTab === 'leases' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', fontWeight: '700' }}>জমি লিজের বর্তমান বিজ্ঞাপনসমূহ</h2>
            {currentUser ? (
              <button onClick={() => setShowLeaseModal(true)} className="btn btn-primary btn-mobile-full">
                <Plus size={18} /> জমি লিজের বিজ্ঞাপন দিন
              </button>
            ) : (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                বিজ্ঞাপন পোস্ট করতে <Link to="/login" style={{ textDecoration: 'underline' }}>লগইন করুন</Link>
              </span>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {leases.map(lease => (
              <div key={lease.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img src={lease.images[0]} alt="জমি" style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '0.85rem' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="badge badge-green">পরিমাণ: {lease.landAmount}</span>
                    <span style={{ fontWeight: '800', color: 'var(--color-primary-700)', fontSize: '1.15rem' }}>
                      ৳{lease.price.toLocaleString()}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.4rem' }}>
                    {lease.location}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    {lease.description}
                  </p>

                  <div style={{ fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', backgroundColor: 'var(--bg-elevated)', padding: '0.65rem', borderRadius: 'var(--radius-sm)' }}>
                    <div><strong>ফসলসমূহ:</strong> {lease.crops}</div>
                    <div><strong>চুক্তির মেয়াদ:</strong> {lease.duration}</div>
                    <div><strong>জমির মালিক:</strong> {lease.ownerName}</div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <a href={`tel:${lease.phone}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Phone size={16} /> যোগাযোগ: {lease.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Responsive Mobile Modal: Create Machine Service */}
      {showMachineModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem' }}>
          <div className="card" style={{ width: 'min(540px, 94vw)', maxHeight: '90vh', overflowY: 'auto', padding: '1.25rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>নতুন কৃষিযন্ত্রের সেবা যোগ করুন</h2>
            <form onSubmit={handleCreateMachine}>
              <div className="form-group">
                <label className="form-label">যন্ত্রের নাম</label>
                <input type="text" className="form-input" required placeholder="যেমন: ফোর্ড ৭৭৪০ পাওয়ার টিলার" value={machineForm.name} onChange={e => setMachineForm({...machineForm, name: e.target.value})} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">শ্রেণি</label>
                  <select className="form-select" value={machineForm.category} onChange={e => setMachineForm({...machineForm, category: e.target.value})}>
                    <option value="পাওয়ার টিলার">পাওয়ার টিলার</option>
                    <option value="ট্রাক্টর">ট্রাক্টর</option>
                    <option value="সেচ পাম্প">সেচ পাম্প</option>
                    <option value="হারভেস্টার">হারভেস্টার</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">মডেল</label>
                  <input type="text" className="form-input" placeholder="যেমন: ২০২৪ মডেল" value={machineForm.model} onChange={e => setMachineForm({...machineForm, model: e.target.value})} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">ভাড়ার হার (টাকা)</label>
                  <input type="number" className="form-input" required placeholder="১২০০" value={machineForm.price} onChange={e => setMachineForm({...machineForm, price: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">একক</label>
                  <select className="form-select" value={machineForm.priceUnit} onChange={e => setMachineForm({...machineForm, priceUnit: e.target.value})}>
                    <option value="টাকা/বিঘা">টাকা/বিঘা</option>
                    <option value="টাকা/ঘণ্টা">টাকা/ঘণ্টা</option>
                    <option value="টাকা/দিন">টাকা/দিন</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">ফোন নম্বর (যোগাযোগের জন্য)</label>
                <input type="tel" className="form-input" required placeholder="017........" value={machineForm.phone} onChange={e => setMachineForm({...machineForm, phone: e.target.value})} />
              </div>
              <ImageUploader
                label="যন্ত্রের ছবি (ফ্রি আপলোড)"
                value={machineForm.image}
                onChange={url => setMachineForm({...machineForm, image: url})}
              />

              <div className="form-group">
                <label className="form-label">বিস্তারিত বিবরণ ও সার্ভিস এলাকা</label>
                <textarea className="form-textarea" rows="3" placeholder="কাজের গতি ও এলাকার কথা লিখুন" value={machineForm.description} onChange={e => setMachineForm({...machineForm, description: e.target.value})} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button type="button" onClick={() => setShowMachineModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary">প্রকাশ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Responsive Mobile Modal: Create Land Lease */}
      {showLeaseModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem' }}>
          <div className="card" style={{ width: 'min(540px, 94vw)', maxHeight: '90vh', overflowY: 'auto', padding: '1.25rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>নতুন জমি লিজের বিজ্ঞাপন দিন</h2>
            <form onSubmit={handleCreateLease}>
              <div className="form-group">
                <label className="form-label">জমির পরিমাণ</label>
                <input type="text" className="form-input" required placeholder="যেমন: ১.৫ বিঘা" value={leaseForm.landAmount} onChange={e => setLeaseForm({...leaseForm, landAmount: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">অবস্থান (মাঠ ও এলাকা)</label>
                <input type="text" className="form-input" required placeholder="যেমন: লাটিয়াকুড়ি পূর্ব পাড়" value={leaseForm.location} onChange={e => setLeaseForm({...leaseForm, location: e.target.value})} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">চুক্তির টাকা (টাকা)</label>
                  <input type="number" className="form-input" required placeholder="২৫০০০" value={leaseForm.price} onChange={e => setLeaseForm({...leaseForm, price: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">মেয়াদ</label>
                  <input type="text" className="form-input" placeholder="১ বছর" value={leaseForm.duration} onChange={e => setLeaseForm({...leaseForm, duration: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">ফোন নম্বর</label>
                <input type="tel" className="form-input" required placeholder="017........" value={leaseForm.phone} onChange={e => setLeaseForm({...leaseForm, phone: e.target.value})} />
              </div>

              <ImageUploader
                label="জমির ছবি (ফ্রি আপলোড)"
                value={leaseForm.image}
                onChange={url => setLeaseForm({...leaseForm, image: url})}
              />

              <div className="form-group">
                <label className="form-label">বিস্তারিত বিবরণ</label>
                <textarea className="form-textarea" rows="3" placeholder="সেচ সুবিধা ও ফসলের বিবরণ লিখুন" value={leaseForm.description} onChange={e => setLeaseForm({...leaseForm, description: e.target.value})} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button type="button" onClick={() => setShowLeaseModal(false)} className="btn btn-secondary">বাতিল</button>
                <button type="submit" className="btn btn-primary">বিজ্ঞাপন পোস্ট করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
