import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const RoleGuard = ({ requiredRole, children }) => {
  const { hasRole, loading, currentUser } = useAuth();

  if (loading) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <div className="skeleton" style={{ width: '100%', height: '100px' }} />
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (!hasRole(requiredRole)) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem', textAlign: 'center' }}>
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto', borderColor: 'var(--color-accent-red)' }}>
          <h2 style={{ color: 'var(--color-accent-red)', marginBottom: '1rem' }}>অনুমতি নেই (Access Denied)</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            আপনার অ্যাকাউন্টে এই এডমিন মডিউলটিতে প্রবেশের প্রয়োজনীয় অনুমতি নেই।
          </p>
          <a href="/dashboard" className="btn btn-primary">আমার ড্যাশবোর্ডে ফিরুন</a>
        </div>
      </div>
    );
  }

  return children;
};
