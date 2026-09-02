# Firestore Database Schema

## Collections & Documents

### 1. `users`
- Document ID: `{uid}` (Firebase Auth UID)
- Fields:
  - `uid`: string
  - `displayName`: string
  - `email`: string
  - `phone`: string
  - `photoURL`: string
  - `roles`: array of strings (`["super_admin", "game_admin", ...]`)
  - `bio`: string
  - `address`: string
  - `createdAt`: timestamp
  - `updatedAt`: timestamp

### 2. `site_settings`
- Document ID: `general`
- Fields:
  - `siteTitle`: string ("আলমদীপাড়া ডিজিটাল গ্রাম")
  - `heroTitle`: string ("আমাদের আলমদীপাড়া")
  - `heroSubtitle`: string ("তথ্য, সেবা ও ঐতিহ্যে একটি ডিজিটাল গ্রাম")
  - `slogan`: string ("আমাদের গ্রাম, আমাদের তথ্য, আমাদের সেবা")
  - `announcements`: array of strings
  - `updatedAt`: timestamp

### 3. `map_locations`
- Document ID: auto-generated
- Fields:
  - `name`: string
  - `category`: string (`mosque`, `school`, `agriculture`, `sports`, `organization`, `emergency`, `other`)
  - `lat`: number
  - `lng`: number
  - `image`: string (URL)
  - `description`: string
  - `phone`: string
  - `createdBy`: string (UID)
  - `createdAt`: timestamp
  - `updatedAt`: timestamp

### 4. `agriculture_fields`
- Document ID: `{fieldSlug}` (e.g. `latiyakuri`, `chore-bondo`, `magura-bondo`)
- Fields:
  - `name`: string ("লাটিয়াকুড়ি", "চড়ে বন্দ", "মাগুড়া বন্দ")
  - `cropInfo`: string
  - `irrigationStatus`: string
  - `irrigationMachines`: string
  - `machinery`: string
  - `weatherNote`: string
  - `updatedAt`: timestamp

### 5. `agricultural_machines`
- Document ID: auto-generated
- Fields:
  - `name`: string
  - `category`: string (ট্রাক্টর, পাওয়ার টিলার, হারভেস্টার, সেচ পাম্প)
  - `model`: string
  - `image`: string
  - `description`: string
  - `performance`: string
  - `price`: number
  - `priceUnit`: string (টাকা/ঘণ্টা, টাকা/বিঘা)
  - `availableDate`: string
  - `availableTime`: string
  - `serviceArea`: string
  - `ownerId`: string
  - `ownerName`: string
  - `phone`: string
  - `status`: string (`published`, `archived`)
  - `createdBy`: string
  - `createdAt`: timestamp

### 6. `land_leases`
- Document ID: auto-generated
- Fields:
  - `fieldSlug`: string
  - `location`: string
  - `landAmount`: string (e.g. "২ বিঘা")
  - `crops`: string
  - `duration`: string (e.g. "১ বছর")
  - `price`: number
  - `phone`: string
  - `ownerId`: string
  - `ownerName`: string
  - `images`: array of strings
  - `description`: string
  - `status`: string
  - `createdBy`: string
  - `createdAt`: timestamp

### 7. `tournaments`
- Document ID: auto-generated
- Fields:
  - `name`: string
  - `sport`: string (`football`, `cricket`, `other`)
  - `description`: string
  - `poster`: string
  - `venue`: string
  - `startDate`: string
  - `endDate`: string
  - `registrationDeadline`: string
  - `rules`: string
  - `contactPhone`: string
  - `customFields`: array of objects `[{ label, type, required }]`
  - `status`: string (`upcoming`, `active`, `completed`)
  - `createdBy`: string
  - `createdAt`: timestamp

### 8. `tournament_registrations`
- Document ID: auto-generated
- Fields:
  - `tournamentId`: string
  - `teamName`: string
  - `captainName`: string
  - `captainPhone`: string
  - `formData`: map
  - `status`: string (`pending`, `accepted`, `rejected`)
  - `pdfUrl`: string
  - `createdBy`: string
  - `createdAt`: timestamp

### 9. `matches`
- Document ID: auto-generated
- Fields:
  - `tournamentId`: string
  - `teamA`: string
  - `teamB`: string
  - `sport`: string
  - `status`: string (`upcoming`, `live`, `completed`)
  - `score`: map (runs, wickets, overs, goals, timer, etc.)
  - `liveStreamUrl`: string
  - `updatedAt`: timestamp

### 10. `teams`
- Document ID: auto-generated
- Fields:
  - `name`: string
  - `logo`: string
  - `description`: string
  - `captainId`: string
  - `contactPhone`: string
  - `members`: array of objects `[{ name, photo, position, jerseyNumber, status }]`
  - `createdBy`: string
  - `createdAt`: timestamp

### 11. `institutions`
- Document ID: auto-generated
- Fields:
  - `name`: string
  - `category`: string (`primary`, `high`, `madrasa`, `other`)
  - `image`: string
  - `description`: string
  - `address`: string
  - `contactPhone`: string
  - `createdBy`: string
  - `createdAt`: timestamp

### 12. `institution_events`
- Document ID: auto-generated
- Fields:
  - `institutionId`: string
  - `title`: string
  - `category`: string (`admission`, `books`, `sports`, `exams`, `meetings`, `other`)
  - `date`: string
  - `description`: string
  - `createdBy`: string
  - `createdAt`: timestamp

### 13. `mosques`
- Document ID: auto-generated
- Fields:
  - `name`: string ("বায়তুল নূর জামে মসজিদ", "বায়তুল মামুর জামে মসজিদ")
  - `image`: string
  - `address`: string
  - `description`: string
  - `prayerTimes`: map (`fajr`, `dhuhr`, `asr`, `maghrib`, `isha`, `jummah`)
  - `eidTimes`: map (`fitr`, `adha`)
  - `duas`: array of objects `[{ title, arabic, translation, reference }]`
  - `updatedAt`: timestamp

### 14. `organization`
- Document ID: `main`
- Fields:
  - `name`: string ("আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ")
  - `slogan`: string
  - `mission`: string
  - `committee`: array of objects
  - `updatedAt`: timestamp

### 15. `organization_events`, `organization_programs`, `organization_gallery`
- Sub-collections / related collections for youth association events, daily routine charts, and image sliders.

### 16. Categorized Community Events (`cultural_events`, `social_events`, `emergency_meetings`, `religious_events`)
- Document ID: auto-generated
- Fields:
  - `title`: string
  - `description`: string
  - `date`: string
  - `time`: string
  - `location`: string
  - `poster`: string
  - `instructions`: string (for emergency)
  - `createdBy`: string
  - `createdAt`: timestamp

### 17. `notifications`
- Document ID: auto-generated
- Fields:
  - `userId`: string
  - `title`: string
  - `message`: string
  - `type`: string (`emergency`, `tournament`, `event`, `system`)
  - `read`: boolean
  - `createdAt`: timestamp

### 18. `admin_logs`
- Document ID: auto-generated
- Fields:
  - `adminId`: string
  - `adminName`: string
  - `action`: string
  - `targetCollection`: string
  - `targetDocId`: string
  - `details`: string
  - `timestamp`: timestamp
