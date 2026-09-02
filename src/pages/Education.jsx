import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Calendar, MapPin, Phone, Award } from 'lucide-react';

export const Education = () => {
  const [institutions] = useState([
    {
      id: 'primary-school',
      name: 'আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয়',
      category: 'সরকারি প্রাথমিক বিদ্যালয়',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
      address: 'মধ্য পাড়া, আলমদীপাড়া',
      description: 'গ্রামের কোমলমতি শিশুদের সুশিক্ষায় আলোকিত করার একমাত্র সরকারি প্রাথমিক শিক্ষা প্রতিষ্ঠান। মনোরম খেলার মাঠ ও ডিজিটালাইজড শ্রেণিকক্ষ।',
      phone: '01733005566',
      events: [
        { title: 'নতুন শিক্ষাবর্ষের বিনামূল্যে বই বিতরণ উৎসব', date: '২০২৬-০১-০১', type: 'বই বিতরণ' },
        { title: 'বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা', date: '২০২৬-০২-২০', type: 'বার্ষিক ক্রীড়া' },
        { title: 'অভিভাবক ও ব্যবস্থাপনা কমিটির মাসিক সাধারণ সভা', date: '২০২৬-০৯-১৫', type: 'সভা' }
      ]
    }
  ]);

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>
          শিক্ষা পোর্টাল
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          আলমদীপাড়া শিক্ষা প্রতিষ্ঠানসমূহ
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          গ্রামের সরকারি প্রাথমিক বিদ্যালয়, ভর্তি তথ্য, বিনামূল্যে বই বিতরণ ও বার্ষিক ক্রীড়া প্রতিযোগিতার নোটিশ।
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {institutions.map(inst => (
          <div key={inst.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <img src={inst.image} alt={inst.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge badge-blue">{inst.category}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={14} /> {inst.address}
                </span>
              </div>

              <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-primary-800)' }}>
                {inst.name}
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {inst.description}
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={18} color="var(--color-primary-600)" /> সাম্প্রতিক নোটিশ ও ইভেন্ট
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {inst.events.map((evt, idx) => (
                  <div key={idx} style={{ padding: '0.75rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem' }}>
                    <div style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.2rem' }}>{evt.title}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                      <span>ধরন: {evt.type}</span>
                      <span>তারিখ: {evt.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a href={`tel:${inst.phone}`} className="btn btn-secondary btn-sm">
                <Phone size={14} /> প্রধান শিক্ষক: {inst.phone}
              </a>
              <Link to={`/education/${inst.id}`} className="btn btn-primary btn-sm">
                বিস্তারিত নোটিশ →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
