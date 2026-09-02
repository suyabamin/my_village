# Role & Permissions System

## User Roles Overview
Alamdipara Digital Village uses a multi-role RBAC (Role-Based Access Control) matrix. A user document contains an array of `roles`.

### Available Roles & Responsibilities

1. `super_admin`:
   - Full authority over system operations.
   - User administration (granting/revoking roles).
   - Website content settings (hero, slogans, notice text).
   - Access to system audit log (`admin_logs`).
   - Ability to edit/delete any content across all modules.

2. `game_admin`:
   - Manage sports tournaments, match schedules, real-time live score updates.
   - Accept or reject team registrations.
   - Manage streaming links.

3. `education_admin`:
   - Manage primary school and educational institution records.
   - Create, edit, and delete educational announcements and event notices.

4. `mosque_admin`:
   - Update prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha, Jummah).
   - Update Eid congregation schedules and duas for local mosques.

5. `organization_admin`:
   - Update information for "আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ".
   - Manage organization daily activity charts, events, and image galleries.

6. `cultural_admin`:
   - Create, edit, and delete cultural events and festivals.

7. `social_admin`:
   - Create, edit, and delete social welfare events.

8. `emergency_admin`:
   - Create and broadcast urgent emergency meeting notices.
   - Trigger push notifications via FCM.

9. `religious_admin`:
   - Create, edit, and delete religious gathering notices and events.

10. Standard Authenticated User:
    - Publish agricultural machinery rental listings.
    - Publish land lease advertisements.
    - Create teams & register players.
    - Submit tournament registration forms.
    - Manage personal profile and own published listings.

11. Public Visitor (Unauthenticated):
    - View all public village information, map markers, listings, prayer times, events, and announcements.
