import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const InstitutionDetail = () => {
  const { id } = useParams();

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem', maxWidth: '850px' }}>
      <Link to="/education" className="btn btn-secondary btn-sm" style={{ marginBottom: '1.5rem' }}>
        <ArrowLeft size={16} /> শিক্ষা পোর্টালে ফিরুন
      </Link>

      <div className="card">
        <span className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>
          সরকারি প্রাতিষ্ঠানিক তথ্য
        </span>

        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-primary-800)' }}>
          আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয়
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <MapPin size={16} /> মধ্য পাড়া, আলমদীপাড়া | <Phone size={16} /> 01733005566
        </div>

        <img 
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
          alt="школа" 
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }} 
        />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.75rem' }}>
          বিদ্যালয়ের মূল বৈশিষ্ট্য ও পরিচিতি
        </h2>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয় গ্রামের শিশুদের মেধা বিকাশ ও সঠিক শিক্ষা দিতে বদ্ধপরিকর। প্রতিটি শ্রেণিকক্ষে পর্যাপ্ত আলোর ব্যবস্থা ও ডিজিটাল কনটেন্টের সাহায্যে পাঠদান করানো হয়। 
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
            <strong style={{ color: 'var(--color-primary-600)' }}>বিনামূল্যে পাঠ্যবই</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>বছরের প্রথম দিনেই শতভাগ বিনামূল্যে নতুন বই বিতরণ।</p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
            <strong style={{ color: 'var(--color-primary-600)' }}>বিস্কুট ও উপবৃত্তি</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>সরকারি উপবৃত্তি সুবিধা ও পুষ্টিকর বিস্কুট প্রদান।</p>
          </div>
        </div>

        <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary-50)', borderRadius: 'var(--radius-md)', color: 'var(--color-primary-900)' }}>
          <strong>ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি বিদ্যালয় চলাকালীন অফিসে যোগাযোগ করুন।</strong>
        </div>
      </div>
    </div>
  );
};
