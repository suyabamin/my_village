import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { RoleGuard } from './RoleGuard';

// Lazy loaded page components for optimal performance
const Home = lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const MapPage = lazy(() => import('../pages/MapPage').then(m => ({ default: m.MapPage })));
const Agriculture = lazy(() => import('../pages/Agriculture').then(m => ({ default: m.Agriculture })));
const FieldDetail = lazy(() => import('../pages/FieldDetail').then(m => ({ default: m.FieldDetail })));
const Sports = lazy(() => import('../pages/Sports').then(m => ({ default: m.Sports })));
const TournamentDetail = lazy(() => import('../pages/TournamentDetail').then(m => ({ default: m.TournamentDetail })));
const TournamentManagement = lazy(() => import('../pages/TournamentManagement').then(m => ({ default: m.TournamentManagement })));
const LiveMatchPage = lazy(() => import('../pages/LiveMatchPage').then(m => ({ default: m.LiveMatchPage })));
const Education = lazy(() => import('../pages/Education').then(m => ({ default: m.Education })));
const InstitutionDetail = lazy(() => import('../pages/InstitutionDetail').then(m => ({ default: m.InstitutionDetail })));
const Mosques = lazy(() => import('../pages/Mosques').then(m => ({ default: m.Mosques })));
const MosqueDetail = lazy(() => import('../pages/MosqueDetail').then(m => ({ default: m.MosqueDetail })));
const Organization = lazy(() => import('../pages/Organization').then(m => ({ default: m.Organization })));
const Culture = lazy(() => import('../pages/Culture').then(m => ({ default: m.Culture })));
const Social = lazy(() => import('../pages/Social').then(m => ({ default: m.Social })));
const Emergency = lazy(() => import('../pages/Emergency').then(m => ({ default: m.Emergency })));
const ReligiousEvents = lazy(() => import('../pages/ReligiousEvents').then(m => ({ default: m.ReligiousEvents })));
const WeatherPage = lazy(() => import('../pages/WeatherPage'));
const Login = lazy(() => import('../pages/Login').then(m => ({ default: m.Login })));
const Register = lazy(() => import('../pages/Register').then(m => ({ default: m.Register })));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword').then(m => ({ default: m.ForgotPassword })));
const Profile = lazy(() => import('../pages/Profile').then(m => ({ default: m.Profile })));
const Dashboard = lazy(() => import('../pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Admin = lazy(() => import('../pages/Admin').then(m => ({ default: m.Admin })));

const PageLoader = () => (
  <div style={{ padding: '4rem 1.25rem', textAlign: 'center' }} className="container">
    <div className="skeleton" style={{ width: '100%', height: '220px', borderRadius: '16px' }} />
  </div>
);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<MapPage />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="agriculture/:fieldId" element={<FieldDetail />} />
          <Route path="sports" element={<Sports />} />
          <Route path="tournament/:id" element={<TournamentDetail />} />
          <Route 
            path="tournament/:id/manage" 
            element={
              <ProtectedRoute>
                <TournamentManagement />
              </ProtectedRoute>
            } 
          />
          <Route path="match/:id" element={<LiveMatchPage />} />
          <Route path="education" element={<Education />} />
          <Route path="education/:id" element={<InstitutionDetail />} />
          <Route path="mosques" element={<Mosques />} />
          <Route path="mosques/:id" element={<MosqueDetail />} />
          <Route path="organization" element={<Organization />} />
          <Route path="culture" element={<Culture />} />
          <Route path="social" element={<Social />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="religious-events" element={<ReligiousEvents />} />
          <Route path="weather" element={<WeatherPage />} />
          
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route 
            path="profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="admin" 
            element={
              <RoleGuard requiredRole="super_admin">
                <Admin />
              </RoleGuard>
            } 
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
