# Alamdipara Digital Village - System Architecture

## Overview
Alamdipara Digital Village ("আলমদীপাড়া ডিজিটাল গ্রাম") is a modern, mobile-first Bengali web platform designed to serve the information, agricultural, social, educational, religious, and emergency needs of Alamdipara village.

## Technology Stack
- **Frontend**: React 18, Vite, React Router v6, Lucide Icons, Pure Vanilla CSS (Design Tokens, Glassmorphism, Green Palette).
- **Backend / BaaS**: Firebase (Auth, Cloud Firestore, Firebase Storage, Cloud Messaging).
- **Map Integration**: Leaflet.js + OpenStreetMap with custom Bengali markers.
- **PDF Generation**: Browser-compatible PDF rendering with Bengali font support.

## Key Architectural Principles
1. **Bengali First**: All UI strings, validation errors, and public content are in Bengali.
2. **Modular Layout**: Logic decoupled into hooks (`useAuth`, `useFirestore`), services (`authService`, `dbService`), and reusable components.
3. **Role-Based Authorization**: Fine-grained role permissions validated both client-side and via Firestore Security Rules.
4. **Resilient Data Access**: Dynamic fallback layer ensures full functionality even during offline demo or initial configuration state.
5. **Mobile First**: Optimized touch interactions, responsive navigation drawer, dynamic bottom bars on mobile screens.
