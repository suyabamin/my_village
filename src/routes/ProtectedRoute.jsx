import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { currentUser, isEmailVerified, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div className="skeleton" style={{ width: '200px', height: '40px' }} />
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user registered with email/password and hasn't verified email, direct to verification page
  if (!isEmailVerified) {
    return <Navigate to="/verify-email" state={{ from: location }} replace />;
  }

  return children;
};
