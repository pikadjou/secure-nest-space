# Tutorial Pages Design — 2026-06-05

## Goal

Add a `/tutorials` section to the secure-nest-space vitrine (React/TailwindCSS) that documents how to use the bailo.front Angular app. Each tutorial covers one user flow, with step-by-step instructions, fields/actions list, tips, and screenshot placeholders that automatically become real images once the file is dropped in place.

## Architecture

**Approach:** Standalone React pages following existing patterns (`HowItWorks.tsx`, `FAQ.tsx`).

### Files to create

```
src/
├── components/
│   └── TutorialScreenshot.tsx
├── pages/
│   ├── Tutorials.tsx
│   └── tutorials/
│       ├── TutorialProfile.tsx
│       ├── TutorialOwnerProfile.tsx
│       ├── TutorialTenantProfile.tsx
│       ├── TutorialCreateEstate.tsx
│       ├── TutorialCreateApplication.tsx
│       ├── TutorialValidateApplication.tsx
│       ├── TutorialManageApplication.tsx
│       └── TutorialReviews.tsx
└── assets/
    └── tutorials/
        ├── profile/
        ├── owner-profile/
        ├── tenant-profile/
        ├── estate/
        ├── application-create/
        ├── application-validate/
        ├── application-manage/
        └── reviews/
```

### Routes (App.tsx)

```
/tutorials
/tutorials/profile
/tutorials/owner-profile
/tutorials/tenant-profile
/tutorials/create-estate
/tutorials/create-application
/tutorials/validate-application
/tutorials/manage-application
/tutorials/reviews
```

## Component: TutorialScreenshot

Props: `src: string`, `alt: string`, `caption?: string`

Renders a browser-chrome frame containing:
- A title bar with 3 colored dots + a fake URL bar (`app.bailo.be/...`)
- If the image file exists at `src` → renders `<img>`
- If not → grey placeholder zone with image icon + "Screenshot à ajouter" text + the path displayed so the user knows exactly where to drop the file

Image paths follow the convention: `src/assets/tutorials/<section>/<step-name>.png`

## Page structure (each tutorial)

```
Navbar
Hero: title + short description + breadcrumb (Home > Tutorials > [Title])
Numbered steps:
  - Step number + title
  - Description (what this screen does)
  - Fields / actions list (bullet points)
  - Tip box (colored callout)
  - TutorialScreenshot
CTA footer → link to app
Footer
```

## Tutorial pages and steps

### 1. Profile (`/tutorials/profile`)
- Step 1: Basic information (first name, last name, phone, birth date)
- Step 2: Choose your role (tenant toggle card / owner toggle card)
- Step 3: KYC verification (itsme® or Veriff)

### 2. Owner profile (`/tutorials/owner-profile`)
- Step 1: Owner-specific information (bio, IBAN)
- Step 2: Profile visibility settings

### 3. Tenant profile (`/tutorials/tenant-profile`)
- Step 1: Tenant-specific information (professional situation, income, guarantor)
- Step 2: Profile visibility settings

### 4. Create an estate (`/tutorials/create-estate`)
- Step 1: Estate basic info (address, type, surface)
- Step 2: Characteristics (rooms, amenities, extra information cards)
- Step 3: Availability and rental price

### 5. Create a tenant application (`/tutorials/create-application`)
- Step 1: Select an estate (estate cards grid)
- Step 2: Fill lease details (dates, rent amount, charges)
- Step 3: Add tenants (search by name or invite by email)

### 6. Validate a tenant application (`/tutorials/validate-application`)
- Step 1: Review the parties (owner card, tenant cards, estate card)
- Step 2: Lease details card
- Step 3: Validate or reject (action card with buttons)

### 7. Manage a tenant application & documents (`/tutorials/manage-application`)
- Step 1: Overview stats (owner, tenants, address, rent)
- Step 2: Navigate tabs (informations / bail / inventaire / documents / avis)
- Step 3: Upload a document (modal form with file + category)

### 8. Reviews (`/tutorials/reviews`)
- Step 1: Create a tenant review (form with rating + comment, per tenant tab)
- Step 2: Create an owner review
- Step 3: Create an estate review
- Step 4: Consult reviews (review detail page)

## Translations

Namespace `tutorials.*` added to `fr.json` and `en.json`.

Structure per step:
```json
"tutorials.<page>.stepN.title": "...",
"tutorials.<page>.stepN.desc": "...",
"tutorials.<page>.stepN.fields": "...",
"tutorials.<page>.stepN.tip": "..."
```

Plus shared keys:
```json
"tutorials.index.title", "tutorials.index.subtitle",
"tutorials.screenshot.placeholder", "tutorials.screenshot.path",
"tutorials.nav.back", "tutorials.cta.button"
```

## Screenshot placeholder paths

Convention: `src/assets/tutorials/<section>/<step>.png`

Examples:
- `src/assets/tutorials/profile/basic-info.png`
- `src/assets/tutorials/profile/role-selection.png`
- `src/assets/tutorials/profile/kyc-verification.png`
- `src/assets/tutorials/estate/basic-info.png`
- etc.

The `TutorialScreenshot` component displays the path in the placeholder so the user can drop the image directly.
