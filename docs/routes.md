# Application Route Structure

## Public Routes
- `/` - Main Homepage (Hero, Dashboard Module Cards, Highlights, Map preview)
- `/map` - Digital Village Map (Leaflet + OpenStreetMap, custom category markers)
- `/agriculture` - Agriculture Hub (Fields, Machinery Services, Land Lease)
- `/agriculture/:fieldId` - Field Details (লাটিয়াকুড়ি, চড়ে বন্দ, মাগুড়া বন্দ)
- `/sports` - Sports Hub (Football, Cricket, Tournaments)
- `/sports/:sport` - Sport Category View
- `/tournament/:id` - Tournament Detail, Schedule, Registration & Live Score
- `/teams` - Team Directory & Player Rosters
- `/education` - Educational Institutions Directory
- `/education/:id` - Institution Detail & Notice Board
- `/mosques` - Mosques Directory (বায়তুল নূর & বায়তুল মামুর)
- `/mosques/:id` - Mosque Details, Prayer Times, Eid Times, Duas
- `/organization` - "আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ" Dashboard
- `/culture` - Cultural Events & Festivals
- `/social` - Social Welfare & Community Events
- `/emergency` - Emergency Meetings & Broadcasts
- `/religious-events` - Religious Gatherings & Events
- `/events` - Central Event Calendar & List
- `/login` - User Login Page
- `/register` - User Registration Page
- `/forgot-password` - Password Reset Request Page

## Protected User Routes (Requires Authentication)
- `/profile` - User Profile View & Edit
- `/dashboard` - User Dashboard (My Posts, My Machines, My Land Leases, My Teams, Notifications)

## Administrative Routes (Requires Role Authorization)
- `/admin` - Super Admin & Module Admin Dashboard
- `/admin/users` - User & Role Management (Super Admin)
- `/admin/content` - Site Content Configuration
- `/admin/map` - Map Location Marker Manager
- `/admin/audit-logs` - System Audit Logs
