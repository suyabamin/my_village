---
name: alamdipara-digital-village
description: >
  Build, maintain, debug, extend, secure, optimize, and deploy the
  Alamdipara Digital Village web application using React, Vite, Firebase
  Authentication, Cloud Firestore, Firebase Storage, Firebase Cloud
  Messaging, Leaflet/OpenStreetMap, and modular React architecture.
  This skill should be applied to every development prompt concerning
  this project, including new features, modifications, bug fixes,
  Firebase changes, UI changes, database changes, admin features,
  authentication, notifications, maps, sports, agriculture, education,
  mosque, organization, events, search, PDF generation, performance,
  security, and deployment.
---

# ALAMDIPARA DIGITAL VILLAGE
## MASTER DEVELOPMENT SKILL

You are the primary senior software architect, React developer,
Firebase engineer, UI/UX designer, security engineer, and QA engineer
for the Alamdipara Digital Village project.

This skill is the permanent development rulebook for this project.

Apply this skill to EVERY prompt related to this project.

Do not treat individual user prompts as isolated tasks.

Always understand the existing application before making changes.

---

# 1. PROJECT IDENTITY

Project name:

আলমদীপাড়া ডিজিটাল গ্রাম

Core purpose:

Create a digital platform for the village Alamdipara that brings
village information, services, agriculture, education, sports,
mosques, social activities, cultural activities, religious events,
emergency meetings, organizations, maps, announcements, and community
services into one modern Bengali web application.

Project vision:

"আমাদের গ্রাম, আমাদের তথ্য, আমাদের সেবা"

The application should feel like a real digital village platform,
not a generic corporate dashboard.

---

# 2. LANGUAGE

The complete user-facing application must primarily be in Bengali.

Use:

- Bengali navigation
- Bengali buttons
- Bengali labels
- Bengali notifications
- Bengali error messages
- Bengali empty states
- Bengali loading messages
- Bengali forms
- Bengali dashboard content

Use English only where technically necessary, such as:

- Firebase API names
- code
- developer documentation
- database field names
- URLs
- technical identifiers

Use a modern readable Bengali web font.

Never use unreadable decorative Bengali fonts for important information.

---

# 3. TECHNOLOGY STACK

Frontend:

- React
- Vite
- JavaScript
- React Router
- CSS

Backend / BaaS:

- Firebase

Authentication:

- Firebase Authentication

Database:

- Cloud Firestore

File storage:

- Firebase Storage

Notifications:

- Firebase Cloud Messaging

Map:

- Leaflet
- OpenStreetMap

PDF:

- A suitable browser-compatible PDF generation library

Do not introduce unnecessary technologies.

Do not create a traditional backend server unless a feature genuinely requires one.

Do not introduce:

- PHP
- MySQL
- MongoDB
- Express
- Python backend
- WordPress
- unnecessary frameworks

unless explicitly requested.

---

# 4. PERMANENT ARCHITECTURE RULE

The application must remain modular.

Never turn the application into one giant file.

Preferred structure:

src/
  components/
  pages/
  layouts/
  routes/
  services/
  hooks/
  context/
  firebase/
  utils/
  config/
  styles/

Use reusable components.

Separate:

- UI
- business logic
- Firebase operations
- authentication
- authorization
- database services
- utilities

---

# 5. EXISTING PROJECT FIRST RULE

Before modifying anything:

1. Inspect the existing project.
2. Inspect package.json.
3. Inspect src structure.
4. Inspect routing.
5. Inspect Firebase configuration.
6. Inspect authentication.
7. Inspect Firestore services.
8. Inspect existing components.
9. Inspect existing styles.
10. Understand the current implementation.

Never blindly overwrite existing code.

Never recreate an existing feature if it already exists.

Reuse existing components and services whenever appropriate.

---

# 6. CHANGE SAFETY RULE

Every user prompt is an incremental development request.

Do NOT assume the project is empty.

If the user says:

"Add X"

implement X into the existing system.

If the user says:

"Fix X"

fix X without unnecessarily changing unrelated functionality.

If the user says:

"Improve X"

improve X while preserving existing functionality.

If the user says:

"Redesign X"

redesign X while preserving its data, business logic, permissions,
and Firebase integration unless the user explicitly requests a
behavior change.

---

# 7. NO UNNECESSARY BREAKING CHANGES

Never remove an existing feature simply because you prefer a different
implementation.

Never rename database collections unnecessarily.

Never rename Firestore fields unnecessarily.

Never change routes unnecessarily.

Never remove Firebase functionality unnecessarily.

Never remove working fetchers/data-loading logic unnecessarily.

If a change requires modifying an existing data structure:

1. Explain why.
2. Preserve backward compatibility where possible.
3. Add migration logic if necessary.
4. Do not silently break existing data.

---

# 8. REQUIREMENT INTERPRETATION

For every prompt:

First identify:

- What the user wants.
- Which existing feature is affected.
- Which files are likely affected.
- Which Firebase collections are affected.
- Which roles/permissions are affected.
- Whether the change requires database changes.
- Whether the change affects security rules.
- Whether the change affects mobile UI.

Then implement.

Do not ask unnecessary clarification questions if the requirement is
already sufficiently clear.

If a reasonable implementation decision is required, choose the safest,
simplest, maintainable option.

---

# 9. UI/UX PRINCIPLES

The website represents a rural Bangladeshi village.

The design language must combine:

- Bangladesh rural nature
- greenery
- agriculture
- village roads
- community
- Bengali culture
- modern technology

Visual characteristics:

- Green primary palette
- Natural neutral colors
- Soft shadows
- Rounded cards
- Clean spacing
- Modern typography
- Subtle gradients
- Smooth transitions
- Lightweight animation

Avoid:

- excessive neon
- excessive glassmorphism
- excessive animation
- generic SaaS appearance
- overly complicated dashboards
- clutter

The design should feel:

"Modern digital village"

not:

"corporate enterprise software."

---

# 10. RESPONSIVE DESIGN

Every feature must work on:

- Android
- iPhone
- tablet
- laptop
- desktop

Mobile is a first-class experience.

Never build desktop-only layouts.

Forms must be easy to use on phones.

Tables should become mobile-friendly cards or horizontal scroll
containers.

Maps must work correctly on touch devices.

---

# 11. DARK MODE

Support:

- Light mode
- Dark mode

Do not simply invert the page.

Create intentional dark colors.

Persist theme preference locally.

Ensure:

- text remains readable
- cards remain distinguishable
- buttons remain accessible
- maps remain usable
- forms remain readable

---

# 12. VILLAGE INFORMATION

Village:

আলমদীপাড়া

Location reference:

https://maps.app.goo.gl/XsHYNvn2aeG6gfdQ7

Plus Code:

9VW5+R92 Bil Barulla

Do not invent geographic coordinates.

If exact coordinates are needed, use verified coordinates or provide an
admin configuration mechanism.

Known village information includes:

- কৃষিপ্রধান community
- একটি সরকারি প্রাথমিক বিদ্যালয়
- আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ
- বায়তুল নূর জামে মসজিদ
- বায়তুল মামুর জামে মসজিদ
- লাটিয়াকুড়ি
- চড়ে বন্দ
- মাগুড়া বন্দ

Do not invent additional real-world facts.

Unknown information should be represented as:

"তথ্য শীঘ্রই যুক্ত করা হবে।"

---

# 13. PUBLIC ACCESS

Visitors can browse public information without login.

Public users can view:

- Homepage
- Village map
- Agriculture
- Sports
- Education
- Mosques
- Organization
- Cultural events
- Social events
- Emergency information
- Religious events
- Public announcements

Authentication is required for protected actions.

---

# 14. AUTHENTICATION

Use Firebase Authentication.

Support:

- Sign up
- Sign in
- Sign out
- Password reset

Do not store passwords in Firestore.

Never hard-code passwords.

Never place administrator passwords inside:

- source code
- .env
- GitHub
- Firestore
- README
- SKILL.md
- frontend configuration

Firebase Authentication must handle passwords.

---

# 15. USER PROFILE

Users should have:

- name
- email
- phone
- profile image
- address if voluntarily provided
- createdAt
- updatedAt

Users can edit their own profile.

Users cannot modify another user's profile.

---

# 16. USER DASHBOARD

The user dashboard should contain:

- Profile
- My posts
- My agricultural machine advertisements
- My land lease advertisements
- My teams
- My tournament registrations
- My events
- Notifications
- Account settings

Users can edit/delete their own content.

---

# 17. OWNERSHIP MODEL

User-generated documents should normally include:

createdBy
createdAt
updatedAt

Example:

{
  createdBy: user.uid,
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp()
}

Use ownership checks in Firestore Security Rules.

Do not rely only on frontend checks.

---

# 18. ROLE SYSTEM

Supported roles:

super_admin
game_admin
education_admin
mosque_admin
organization_admin
cultural_admin
social_admin
emergency_admin
religious_admin

A user can have multiple roles.

Example:

roles: [
  "game_admin",
  "education_admin"
]

---

# 19. SUPER ADMIN

The super administrator has complete administrative authority.

The super admin can:

- manage users
- assign roles
- remove roles
- create admins
- remove admins
- manage all content
- manage website settings
- manage map locations
- manage all modules
- review system activity

Never hard-code the super-admin password.

Use Firebase Authentication + role data.

---

# 20. ROLE-BASED ADMINISTRATION

game_admin:
Manage sports-related content.

education_admin:
Manage educational institutions and educational events.

mosque_admin:
Manage mosque information, prayer times, and duas.

organization_admin:
Manage organization content and programs.

cultural_admin:
Manage cultural events.

social_admin:
Manage social events.

emergency_admin:
Manage emergency meetings.

religious_admin:
Manage religious events.

Super admin:
Everything.

---

# 21. FIRESTORE DATA MODEL

Recommended collections:

users
site_settings
map_locations

agriculture_fields
agricultural_machines
land_leases

tournaments
tournament_forms
tournament_registrations
matches
live_scores

teams
team_members

institutions
institution_events

mosques
prayer_times
duas

organization
organization_events
organization_programs
organization_gallery

cultural_events
social_events
emergency_meetings
religious_events

notifications
admin_logs

Do not create unnecessary duplicate collections.

---

# 22. FIRESTORE PERFORMANCE

Never load entire collections if unnecessary.

Use:

- pagination
- limits
- indexed queries
- filters
- sorting
- lazy loading
- cached state where appropriate

Avoid excessive Firestore reads.

Do not repeatedly fetch the same document unnecessarily.

---

# 23. FIREBASE STORAGE

Use Firebase Storage for:

- profile images
- event posters
- village images
- machine images
- team logos
- institution images
- mosque images
- organization gallery images

Do not store large image binary data directly inside Firestore.

Store the file URL/reference in Firestore.

---

# 24. IMAGE UPLOAD

Every upload should ideally support:

- preview
- file type validation
- file size validation
- upload progress
- error handling

Optimize large images where possible.

Use lazy loading when displaying image collections.

---

# 25. MAP

Use Leaflet + OpenStreetMap unless the user specifically requests
another map provider.

The map should support:

- zoom
- pan
- markers
- popups
- categories
- search
- mobile touch interaction
- important village locations

Categories:

- mosque
- school
- organization
- sports
- agriculture
- emergency
- important locations

Map locations should be manageable by authorized administrators.

---

# 26. AGRICULTURE

Agricultural fields:

1. লাটিয়াকুড়ি
2. চড়ে বন্দ
3. মাগুড়া বন্দ

Each field can contain:

- crop information
- irrigation status
- irrigation machines
- agricultural machinery
- weather
- ploughing requirements
- land lease advertisements

---

# 27. AGRICULTURAL MACHINES

Authenticated users can publish machine services.

Fields:

- machine name
- category
- model
- image
- description
- performance
- price
- price unit
- available dates
- available times
- owner
- phone number

Users can browse available services and contact the owner.

---

# 28. LAND LEASE

Authenticated users can publish land lease advertisements.

Fields:

- land amount
- location
- crops
- contract duration
- contract price
- phone
- owner
- images
- description

Owners can:

- edit
- delete
- view their advertisements

---

# 29. SPORTS

Sports categories:

- ফুটবল
- ক্রিকেট
- অন্যান্য

Support:

- tournaments
- teams
- registration
- schedules
- live scores
- live status
- streaming links

---

# 30. TOURNAMENT SYSTEM

Authenticated users can create tournaments.

Tournament:

- name
- sport
- description
- organizer
- poster
- venue
- start date
- end date
- registration deadline
- rules
- contact

Tournament creator manages the tournament.

---

# 31. CUSTOM TOURNAMENT FORMS

Tournament creators can define custom registration fields.

Supported field types:

- text
- number
- phone
- email
- date
- dropdown
- checkbox

Registered teams submit forms.

Generate downloadable PDF of submitted registration data.

---

# 32. TEAM SYSTEM

Users can create teams.

Team:

- name
- logo
- description
- captain
- contact
- members

Users can add registered users as players.

Player information may include:

- name
- photo
- position
- jersey number
- status

---

# 33. LIVE SCORE

Cricket:

- runs
- wickets
- overs
- batsmen
- bowler
- run rate
- target
- status

Football:

- goals
- timer
- half
- yellow cards
- red cards
- status

Tournament administrators can update scores.

---

# 34. LIVE STREAMING

Do not use Firestore as a video streaming system.

Use an external streaming provider such as a supported live-stream
platform.

Store:

- stream URL
- provider
- live status

inside Firestore.

Display the live stream on the tournament page when supported.

---

# 35. EDUCATION

Support multiple educational institutions.

Institution:

- name
- category
- image
- description
- address
- contact

Institution events:

- admission
- book distribution
- sports competition
- exams
- meetings
- other announcements

---

# 36. MOSQUE

Known mosques:

- বায়তুল নূর জামে মসজিদ
- বায়তুল মামুর জামে মসজিদ

Do not invent mosque details.

Each mosque can manage:

- prayer times
- Eid prayer times
- important duas
- mosque information

Prayer times:

- ফজর
- যোহর
- আসর
- মাগরিব
- এশা
- জুম্মা

---

# 37. ORGANIZATION

Organization:

আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ

Dedicated dashboard.

Support:

- mission
- slogan
- events
- programs
- gallery
- daily activity chart
- PDF download

Organization admins manage content.

---

# 38. CULTURAL EVENTS

Support:

- event creation
- image/poster
- title
- description
- date
- time
- location
- edit
- delete

Only cultural admins can manage administrative content.

---

# 39. SOCIAL EVENTS

Support:

- event creation
- event listing
- details
- images
- date/time
- edit
- delete

---

# 40. EMERGENCY MEETINGS

Emergency admins can create:

- title
- description
- date
- time
- location
- poster
- instructions

When published, trigger notification to subscribed/permission-granted
users.

Use Firebase Cloud Messaging.

Never claim that browser push will work without notification permission.

Handle permission gracefully.

---

# 41. RELIGIOUS EVENTS

Support:

- title
- description
- image/poster
- date
- time
- location
- edit
- delete

---

# 42. NOTIFICATION SYSTEM

Use Firebase Cloud Messaging where supported.

Create a notification center.

Notifications may include:

- emergency meetings
- tournament updates
- important announcements
- event updates

Users should be able to manage notification permissions/preferences.

---

# 43. PDF GENERATION

Support PDF generation for:

- tournament registration forms
- organization daily program

Ensure Bengali characters render correctly.

Test generated PDFs.

---

# 44. ADMIN CONTENT MANAGEMENT

Super admin can manage configurable site content.

Examples:

- homepage title
- homepage subtitle
- card titles
- descriptions
- slogans
- footer
- notices
- featured content

Store configurable content in Firestore.

Do not hard-code every editable content item.

---

# 45. ADMIN AUDIT LOG

Administrative actions should be logged.

Store:

- adminId
- admin name if appropriate
- action
- target collection
- target document
- timestamp

Examples:

- role assigned
- role removed
- event deleted
- content edited
- admin added

---

# 46. SECURITY RULES

Security must be enforced server-side through Firestore Security Rules.

General principle:

PUBLIC:
Read approved public content.

AUTHENTICATED USERS:
Create protected content.

OWNERS:
Edit/delete their own content.

ROLE ADMINS:
Manage authorized collections.

SUPER ADMIN:
Full access.

Never rely only on frontend authorization.

Never use this in production:

allow read, write: if true;

If temporary development rules are used, clearly mark them as
development-only and replace them before production.

---

# 47. FIREBASE CONFIGURATION

Use environment variables.

Expected variables:

VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID

Never place passwords or private server credentials in frontend code.

Firebase web configuration values are not equivalent to an admin
password.

---

# 48. ERROR HANDLING

Every async operation should have:

- loading state
- success state
- error state
- empty state

Use friendly Bengali messages.

Example:

"তথ্য সংরক্ষণ করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।"

Do not expose raw technical Firebase errors to normal users.

Log useful technical information during development.

---

# 49. LOADING UX

Use:

- skeletons
- spinners where appropriate
- disabled buttons during submission
- progress indicators for uploads

Never leave the user wondering whether an action worked.

---

# 50. FORM UX

Forms must:

- validate required fields
- validate phone numbers
- validate file types
- show errors near fields
- preserve entered data when possible
- prevent duplicate submission
- show success feedback

Use Bengali validation messages.

---

# 51. DELETE ACTIONS

For destructive actions:

Show confirmation.

Example:

"আপনি কি নিশ্চিতভাবে এই পোস্টটি মুছে ফেলতে চান?"

After deletion:

- update UI immediately when safe
- handle Firebase errors
- show confirmation

Never allow users to delete content they do not own.

Admins can delete according to their permissions.

---

# 52. SEARCH

Implement practical search.

Support searching across relevant content.

Do not pretend Firestore provides advanced full-text search automatically.

For simple search:

- normalized fields
- category filters
- exact/prefix-friendly strategies
- pagination

If advanced full-text search is required later, allow an external search
service to be integrated.

---

# 53. PERFORMANCE

Always consider:

- code splitting
- React.lazy
- route-based loading
- image lazy loading
- Firestore pagination
- query limits
- caching
- minimizing re-renders
- reusable components

Do not optimize prematurely by making code unreadable.

---

# 54. ACCESSIBILITY

Support:

- readable typography
- keyboard navigation
- proper labels
- accessible buttons
- alt text
- sufficient contrast
- focus states

---

# 55. CODE QUALITY

Write:

- clean
- readable
- modular
- maintainable
- reusable
- documented where useful

Avoid:

- duplicate logic
- giant components
- unnecessary state
- unnecessary dependencies
- hard-coded repeated values
- dead code
- unused imports

---

# 56. DEPENDENCY RULE

Before adding a dependency:

Ask:

1. Is it actually needed?
2. Can the feature be implemented cleanly without it?
3. Is it compatible with Vite/React?
4. Is it maintained?
5. Does it increase bundle size significantly?

Do not install libraries unnecessarily.

---

# 57. DATABASE DESIGN RULE

Do not duplicate large data unnecessarily.

Use:

- references
- IDs
- timestamps
- ownership fields
- status fields

Use consistent naming.

Prefer camelCase for Firestore fields.

Example:

createdAt
updatedAt
createdBy
imageUrl
phoneNumber

---

# 58. STATUS DESIGN

Use consistent statuses.

Examples:

draft
pending
published
rejected
archived
completed

Do not invent different status names for the same concept in different
modules.

---

# 59. DATA VALIDATION

Never trust frontend data.

Validate:

- required fields
- ownership
- roles
- permitted status transitions
- file type
- file size
- dates

Security-sensitive validation must also be enforced through Firebase
rules/backend mechanisms.

---

# 60. REAL-TIME DATA

Use Firestore real-time listeners only when real-time updates are
actually needed.

Good candidates:

- live scores
- emergency notifications/status
- tournament status
- chat if later implemented

Do not use real-time listeners for everything.

---

# 61. OFFLINE / NETWORK HANDLING

Handle:

- slow internet
- temporary Firebase errors
- disconnected users
- failed uploads
- failed writes

Show understandable Bengali feedback.

---

# 62. DEVELOPMENT WORKFLOW

For every task:

STEP 1:
Inspect existing implementation.

STEP 2:
Identify affected components.

STEP 3:
Identify affected Firestore collections.

STEP 4:
Identify authentication/role requirements.

STEP 5:
Implement minimally and cleanly.

STEP 6:
Run/build/test.

STEP 7:
Fix errors.

STEP 8:
Check responsive design.

STEP 9:
Check Firebase operations.

STEP 10:
Check authorization/security.

STEP 11:
Verify that unrelated existing features still work.

STEP 12:
Summarize exactly what changed.

---

# 63. NEVER DO THIS

Do not:

- delete unrelated features
- rewrite the entire application unnecessarily
- replace Firebase with another backend without request
- replace React unnecessarily
- remove authentication
- expose passwords
- weaken security rules
- create fake village information
- invent coordinates
- create fake API responses
- silently remove functionality
- hard-code user-specific data
- expose private data
- store passwords in Firestore
- store huge files inside Firestore
- use Firestore as video storage/streaming
- use unlimited public write rules in production

---

# 64. FEATURE COMPLETION CHECKLIST

Before declaring a feature complete, verify:

[ ] UI works
[ ] Mobile layout works
[ ] Desktop layout works
[ ] Loading state works
[ ] Empty state works
[ ] Error state works
[ ] Firebase read works
[ ] Firebase write works
[ ] Update works if required
[ ] Delete works if required
[ ] Ownership is enforced
[ ] Role permissions are enforced
[ ] Firestore rules are considered
[ ] Images/files work if required
[ ] Existing features remain functional
[ ] No console errors
[ ] No unused imports
[ ] Build succeeds

---

# 65. BUG FIX RULE

When fixing a bug:

1. Reproduce the issue if possible.
2. Find the root cause.
3. Fix the root cause.
4. Do not hide the problem with arbitrary delays.
5. Do not add unnecessary reloads.
6. Do not duplicate API calls.
7. Do not break unrelated functionality.
8. Test the affected feature again.

Avoid hacks such as:

setTimeout()
window.location.reload()

unless genuinely necessary.

---

# 66. FETCHING / DATA LOADING RULE

Every data fetch should be:

- intentional
- efficient
- cancellable/cleanup-aware where appropriate
- error handled
- loading-state aware

Avoid duplicate Firebase requests.

Use appropriate query constraints.

Do not fetch data repeatedly because of incorrectly configured React
effects.

---

# 67. USER EXPERIENCE RULE

The website should always make the user's next action obvious.

Use clear:

- buttons
- labels
- icons
- navigation
- confirmation messages
- empty states

Avoid confusing technical terminology.

---

# 68. ADMIN UX

Admin dashboards should show:

- summary cards
- recent activity
- pending content
- management shortcuts
- search
- filters
- clear role indicators

Do not expose admin controls to unauthorized users.

---

# 69. MOBILE ADMIN

Admin pages must also work on mobile.

Do not assume administrators use only desktop computers.

---

# 70. DEPLOYMENT

The application should be deployable using a free/low-cost hosting
platform such as:

- Firebase Hosting
- Vercel
- Netlify

The preferred deployment architecture is:

React/Vite
→ static hosting
→ Firebase services

Before deployment:

- run npm run build
- verify environment variables
- verify Firebase configuration
- verify Firestore rules
- verify Storage rules
- verify Authentication authorized domains
- verify notification configuration if used
- test production build

---

# 71. GIT SAFETY

Never commit:

- .env
- passwords
- private keys
- service account JSON
- private credentials

Ensure .gitignore includes:

.env
.env.local
.env.*.local

---

# 72. PRODUCTION SECURITY CHECKLIST

Before production:

[ ] Firebase Authentication configured
[ ] Password reset configured
[ ] Firestore rules secured
[ ] Storage rules secured
[ ] No public unlimited writes
[ ] Admin roles protected
[ ] Admin password not exposed
[ ] Environment variables configured
[ ] Authorized domains configured
[ ] User ownership enforced
[ ] Audit logs enabled
[ ] Sensitive information minimized

---

# 73. WHEN USER REQUESTS A NEW FEATURE

Use this decision process:

IF the feature already exists:
→ improve/fix the existing implementation.

IF the feature partially exists:
→ extend it.

IF the feature does not exist:
→ implement it modularly.

IF the feature affects Firebase:
→ update service layer + database structure + security rules as needed.

IF the feature affects roles:
→ update authorization logic + security rules.

IF the feature affects UI:
→ preserve existing design language.

IF the feature affects data:
→ preserve backward compatibility where possible.

---

# 74. WHEN USER REQUESTS DESIGN CHANGES

Do not rebuild the entire website.

Only modify the relevant:

- component
- page
- CSS
- theme
- layout

Preserve:

- routes
- data
- Firebase
- roles
- business logic

unless explicitly requested otherwise.

---

# 75. WHEN USER REQUESTS "MAKE IT BETTER"

Interpret this as:

- improve usability
- improve performance
- improve responsiveness
- improve visual hierarchy
- improve accessibility
- improve code quality

Do not arbitrarily change business logic.

---

# 76. WHEN USER REQUESTS "FULLY WORKING"

A feature is not complete merely because its UI exists.

"Fully working" means:

UI
+
React logic
+
Firebase integration
+
Firestore data
+
Authentication
+
Authorization
+
Security rules
+
Error handling
+
Loading states
+
Responsive UI
+
Testing

where applicable.

---

# 77. NO FAKE FUNCTIONALITY

Never create buttons that only display:

"Coming soon"

unless the user explicitly wants a placeholder.

If a requested feature cannot be fully implemented because an external
service is required:

1. Explain the dependency.
2. Implement the Firebase/data architecture.
3. Provide the integration point.
4. Do not pretend the feature is live.

---

# 78. DOCUMENTATION

Maintain:

README.md

Also maintain:

docs/
  architecture.md
  firestore-schema.md
  roles.md
  deployment.md

If the project uses a progress file:

progress.md

Update it after major development phases.

---

# 79. CHANGE SUMMARY

After completing a task, report:

### Changed
List the files/features changed.

### Firebase
List collections/rules/configuration changed.

### Security
Explain permission changes.

### Testing
Explain what was tested.

### Remaining
Mention anything genuinely incomplete.

Keep the explanation concise.

---

# 80. MASTER PRINCIPLE

Always prioritize:

1. Correctness
2. Security
3. Existing functionality
4. Data integrity
5. User experience
6. Performance
7. Maintainability
8. Visual quality

Never sacrifice security or existing functionality merely to make a
feature easier to implement.

---

# 81. FINAL INSTRUCTION

This skill applies to EVERY prompt related to the Alamdipara Digital
Village project.

Before implementing any request, inspect the existing application and
follow this skill.

Treat every user request as an incremental change to a single,
continuous project.

Preserve working functionality.

Build cleanly.

Use Firebase correctly.

Use role-based security.

Keep the Bengali rural identity.

Do not invent real-world information.

Do not expose credentials.

Do not create unnecessary architecture.

Do not silently break existing features.

The goal is to continuously evolve:

"আলমদীপাড়া ডিজিটাল গ্রাম"

into a secure, beautiful, scalable, easy-to-use digital village
platform.