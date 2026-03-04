# Luxury Villa Rental Website - Implementation Plan

## Project Overview

Build an informational showcase website for a single luxury villa with placeholder content. Key features: stunning hero section, photo gallery, amenities showcase, and smooth animations.

**Tech Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Framer Motion

## Architecture Decision: Single-Page Application

A one-page scrolling layout provides the best experience for showcasing a single villa - seamless storytelling, simpler navigation, and better mobile UX.

**Page Structure:**

- `/` - Main landing page with sections: Hero → Overview → Gallery → Amenities → Accommodations → Location → Testimonials → Contact

## Implementation Overview

The plan is organized into **40 incremental steps** across 13 phases. Each step builds a specific component or section that you can review before proceeding.

### Workflow for Each Step:

1. **Implement** - Claude builds the component/feature for the step
2. **Review** - You review the implementation
3. **Refactor** - Claude makes any requested changes based on your feedback
4. **Approve** - You approve the implementation
5. **Commit** - Claude creates a git commit for the implementation
6. **Add Tests** - Claude adds tests for the component/feature
7. **Review Tests** - You review the tests
8. **Run Tests** - Claude runs the tests
9. **Approve Tests** - You approve the tests
10. **Commit Tests** - Claude creates a git commit for the tests
11. **Next Step** - Move to next step only after your approval

**Important:** We work phase-by-phase and step-by-step. No step is started until the previous step is fully completed, tested, and approved by you.

### Step-by-Step Progression:

**Phase 1: Foundation** (Steps 1-5)

- Install dependencies, configure Tailwind, setup styles, download images, create folders

**Phase 2: Navigation** (Steps 6-8)

- Header, Mobile Menu, Footer

**Phase 3: Hero Section** (Steps 9-11)

- Villa data, Hero component, integrate into main page

**Phase 4: Overview Section** (Steps 12-13)

- Overview component, add to main page

**Phase 5: Amenities Section** (Steps 14-16)

- Amenities data, Amenities component, add to main page

**Phase 6: Gallery Section** (Steps 17-19)

- Gallery data, Gallery component with lightbox, add to main page

**Phase 7: Accommodations Section** (Steps 20-21)

- Accommodations component, add to main page

**Phase 8: Location Section** (Steps 22-23)

- Location component with map, add to main page

**Phase 9: Testimonials Section** (Steps 24-26)

- Testimonials data, Testimonials carousel, add to main page

**Phase 10: Contact Section** (Steps 27-28)

- Contact form component with validation, add to main page

**Phase 11: Polish & Optimization** (Steps 29-35)

- Metadata, scroll effects, image optimization, mobile testing, accessibility, performance, SEO

**Phase 12: Final Touches** (Steps 36-38)

- Favicon, cross-browser testing, documentation

**Phase 13: Deployment** (Steps 39-40)

- Production build, deploy to Vercel

## Detailed Implementation Steps

### Phase 1: Foundation Setup ✅ COMPLETED

**Step 1: Install Dependencies** ✅

```bash
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers
npm install -D @tailwindcss/typography @tailwindcss/forms
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest
```

**Status**: Dependencies installed, including testing infrastructure (Jest + React Testing Library)

**Step 2: Configure Tailwind** ✅ - `/Users/Technotronic/Projects/villa/tailwind.config.ts`

- Add luxury color palette (gold: #d4984d, stone grays, ocean blues)
- Configure custom fonts (Playfair Display serif for headings, Inter sans for body)
- Add custom animations (fade-in, slide-up, slide-in-right)
- Add custom spacing, shadows, and gradients
- Configure Tailwind plugins: @tailwindcss/typography, @tailwindcss/forms
  **Status**: Complete with luxury theme configured

**Step 3: Setup Global Styles** ✅ - `/Users/Technotronic/Projects/villa/src/app/globals.css`

- Import Google Fonts (Playfair Display + Inter)
- Update CSS variables for luxury theme
- Add custom utility classes (.section-padding, .container-custom, .btn-primary, .heading-display)
- Set smooth scroll behavior
- Apply font-serif to headings
  **Status**: Complete with custom utilities

**Step 4: Download Placeholder Images** ✅

- Source 30-50 high-quality villa images from Unsplash/Pexels
- Organize in `/public/images/`:
  - `hero/` - 1-3 hero images (1920x1080)
  - `gallery/` - Gallery images organized by: exterior/, interior/, bedrooms/, pool/, views/
  - `amenities/` - Icon-style images
  - `rooms/` - Room-specific photos
    **Status**: 18 placeholder images downloaded and organized

**Step 5: Create Folder Structure** ✅

```bash
mkdir -p src/components/{navigation,sections,ui,animations,layout}
mkdir -p src/{lib,data,hooks}
```

**Status**: Skipped - creating folders on demand as components are built

### Phase 2: Navigation (IN PROGRESS)

**Step 6: Build Header Component** ✅ - `/src/components/navigation/Header.tsx`

- Sticky header with scroll effect (transparent → solid background)
- Logo/branding text
- Desktop navigation menu with smooth scroll links
- Mobile hamburger menu toggle
- "Contact Us" CTA button
- Create supporting components as needed:
  - `/src/hooks/useScrollPosition.ts` (for scroll effect)

**Implementation Details**:

- Created Header.tsx with scroll-based styling (transparent when at top, white with shadow when scrolled > 50px)
- Created Logo.tsx - Button component with villa name
- Created Menu.tsx - Desktop navigation (hidden on mobile) with 7 menu items
- Created MenuButton.tsx - Individual menu item with hover effects
- Created ContactButton.tsx - Contact Us button
- Created useScrollPosition.ts - Custom hook for tracking scroll position
- Created navigation-utils.ts - Shared utility functions (handleLinkClick)
- Created types.ts - MenuItem interface
- Created constants.ts - TEST_IDs and HEADER_CONTENT
- **Tests**: Complete test coverage
  - Header.test.tsx - Tests scroll behavior and component composition
  - Logo.test.tsx - Tests logo rendering and click behavior
  - Menu.test.tsx - Tests menu items and responsive classes
  - MenuButton.test.tsx - Tests individual menu button
  - ContactButton.test.tsx - Tests contact button
  - navigation-utils.test.ts - Tests utility functions
- Updated layout.tsx to include Header component
  **Status**: ✅ COMPLETE with tests

**Step 7: Build Mobile Menu** - `/src/components/navigation/MobileMenu.tsx`

- Slide-out drawer with Framer Motion
- Navigation links with smooth scroll
- Close button
- Overlay backdrop

**Step 8: Build Footer Component** - `/src/components/layout/Footer.tsx`

- Social media links
- Copyright information
- Quick links (optional)

### Phase 3: Hero Section ✅ COMPLETED

**Step 9: Create Villa Data** ✅ - `/src/data/villa.ts`

- Villa name, tagline, description
- Capacity (guests, bedrooms, bathrooms)
- Contact information (email, phone)
- Interface defined in same file (VillaData)
  **Status**: Complete with villa data structure

**Step 10: Build Hero Section** ✅ - `/src/components/sections/Hero/`

- Full-screen background image using Next.js Image with priority loading
- Adjustable gradient overlay for text readability (from-black/60 via-black/20 to-black/60)
- Animated headline, subtitle, CTA button (Framer Motion stagger)
- Text shadow for readability (0 2px 4px rgba(0,0,0,0.4))
- Responsive typography (4xl → 6xl → hero)
- 5 hero image options downloaded (hero-1.jpg through hero-5.jpg with pool villas and palms)
- Component structure (following Header pattern):
  - `Hero.tsx` - Orchestrator component with animations
  - `HeroBackground/` - Image and overlay
  - `HeroTitle/` - Villa name
  - `HeroTagline/` - Villa tagline
  - `HeroCTA/` - Call-to-action button
  - `animations.ts` - Shared Framer Motion variants
  - `constants.ts` - Test IDs and content (CTA_TEXT, IMAGE_ALT)
- Supporting components:
  - `/src/components/ui/Button/` - Link button for smooth scrolling (href only, no onClick)
  - `/src/data/villa.ts` - Villa data with TypeScript interface
- **Tests**: Complete test coverage
  **Status**: Complete with Framer Motion animations, refactored into focused components, full test coverage

**Step 11: Update Main Page with Hero** ✅ - `/src/app/page.tsx`

- Imported Hero section
- Made page a Client Component ('use client')
- Hero displays with animations
- All tests passing
  **Status**: Complete and visually verified

### Phase 4: Overview Section ✅ COMPLETED

**Step 12: Build Overview Section** ✅ - `/src/components/sections/Overview/`

- Two-column layout: text content (left) + photo collage (right)
- Subtitle with gold accent ("Welcome to Paradise")
- Title with serif bold font ("Your Private Sanctuary in Koh Phangan")
- Description paragraph with luxury copy
- 4-photo collage grid (2x2) with hover zoom effects
- Framer Motion scroll-triggered animations with stagger
- Component structure (following Hero pattern):
  - `Overview.tsx` - Orchestrator component
  - `OverviewSubtitle/` - Gold accent subtitle
  - `OverviewTitle/` - Section heading
  - `OverviewDescription/` - Description text
  - `OverviewCollage/` - 4-photo grid with hover effects
  - `animations.ts` - Shared Framer Motion variants
  - `constants.ts` - Test IDs and content
- **Tests**: Complete test coverage (21 tests)
  - Overview.test.tsx - Tests section composition
  - OverviewSubtitle.test.tsx - Tests subtitle rendering
  - OverviewTitle.test.tsx - Tests title rendering
  - OverviewDescription.test.tsx - Tests description rendering
  - OverviewCollage.test.tsx - Tests image grid and sources
  **Status**: Complete with Framer Motion animations, full test coverage

**Step 13: Add Overview to Main Page** ✅ - `/src/app/page.tsx`

- Imported Overview section
- Overview displays below Hero with animations
- Section ID (#overview) for navigation
- All tests passing (21 Overview tests + 68 total)
  **Status**: Complete and visually verified

### Phase 5: Amenities Section

**Design**: Compact, elegant flat icon grid — no categories, no card borders. Mockup at `mockups/amenities-mockup.html`.

**Component Structure**:
```
src/components/sections/Amenities/
├── Amenities.tsx              # Orchestrator
├── Amenities.test.tsx         # Integration test
├── index.ts                   # Named export
├── animations.ts              # Framer Motion variants
├── constants.ts               # AMENITIES_CONTENT + TEST_ID
├── AmenitiesHeader/           # Subtitle + two-tone title
│   ├── AmenitiesHeader.tsx
│   ├── AmenitiesHeader.test.tsx
│   └── index.ts
├── AmenitiesGrid/             # Flat grid of all amenity items
│   ├── AmenitiesGrid.tsx
│   ├── AmenitiesGrid.test.tsx
│   └── index.ts
└── AmenityItem/               # Single icon + label
    ├── AmenityItem.tsx
    ├── AmenityItem.test.tsx
    └── index.ts
```

**Visual Design**:
- Background: `bg-stone-50`, Container: `max-w-5xl`
- Header: Gold subtitle "Amenities" + two-tone title: "Designed for" (stone-900) + "Comfortable Living" (gold-500 #D4984D)
- Grid: `grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6`, `gap-y-8 gap-x-4`
- Each item: icon (28px, stroke 1.5, gold) + label (stone-600, text-xs/sm), hover turns gold
- No cards, no borders — minimal and elegant

**Step 14: Create amenities-draft.md for user to edit**

- Create template file with example amenities in `- Name | LucideIconName` format
- User fills in actual amenities before coding starts
- All content stored in `constants.ts` (no separate data file)

**Step 15: Build Amenities Section** - `/src/components/sections/Amenities/`

- Build constants.ts (AMENITIES_CONTENT with SUBTITLE, TITLE, TITLE_ACCENT, AMENITIES array + TEST_ID)
- Build animations.ts (containerVariants with stagger, itemVariants with fade+slide)
- Build AmenityItem (icon from lucide-react via iconMap + label, hover effect)
- Build AmenitiesGrid (maps AMENITIES_CONTENT.AMENITIES → AmenityItem, motion.div with stagger)
- Build AmenitiesHeader (gold subtitle + two-tone title with span for accent)
- Build Amenities orchestrator (section with id="amenities", bg-stone-50, section-padding)
- Add tests for all components (mock framer-motion + lucide-react)

**Step 16: Add Amenities to Main Page** - `/src/app/page.tsx`

- Import Amenities, place after `<Details />`
- Add section ID (#amenities)
- Run full test suite, lint, build
- Clean up: delete amenities-draft.md and mockup

### Phase 6: Gallery Section

**Step 17: Create Gallery Data** - `/src/data/gallery.ts`

- Image metadata (paths, categories, alt text)
- Category definitions

**Step 18: Build Gallery Section** - `/src/components/sections/Gallery.tsx`

- Responsive grid layout (1 col mobile, 2 col tablet, 3-4 col desktop)
- Next.js Image with blur placeholders
- Category filter buttons
- Click to open lightbox
- Create supporting components:
  - `/src/components/ui/Modal.tsx` (lightbox)
  - `/src/components/ui/ImageWithPlaceholder.tsx` (optimized images)

**Step 19: Add Gallery to Main Page** - `/src/app/page.tsx`

- Import and add Gallery section
- Add section ID (#gallery)
- Test lightbox functionality

### Phase 7: Accommodations Section

**Step 20: Build Accommodations Section** - `/src/components/sections/Accommodations.tsx`

- Room-by-room breakdown (Master Suite, Guest Bedrooms, etc.)
- Each room card with image, title, description, features list
- Alternating layout pattern (image left/right)

**Step 21: Add Accommodations to Main Page** - `/src/app/page.tsx`

- Import and add Accommodations section
- Add section ID (#accommodations)
- Test alternating layout

### Phase 8: Location Section

**Step 22: Build Location Section** - `/src/components/sections/Location.tsx`

- Embedded Google Map or static map image with pin
- "Nearby Attractions" grid with distances
- Icons for beach, restaurants, airport, etc.

**Step 23: Add Location to Main Page** - `/src/app/page.tsx`

- Import and add Location section
- Add section ID (#location)
- Test map display

### Phase 9: Testimonials Section

**Step 24: Create Testimonials Data** - `/src/data/testimonials.ts`

- Guest reviews with names, ratings, comments

**Step 25: Build Testimonials Section** - `/src/components/sections/Testimonials.tsx`

- Carousel of guest reviews using Framer Motion
- Star ratings (Lucide icons)
- Guest name, date, review text
- Auto-play with manual controls

**Step 26: Add Testimonials to Main Page** - `/src/app/page.tsx`

- Import and add Testimonials section
- Add section ID (#testimonials)
- Test carousel functionality

### Phase 10: Contact Section

**Step 27: Build Contact Section** - `/src/components/sections/Contact.tsx`

- Contact information display (email, phone, address)
- mailto: links for email
- tel: links for phone
- Optional: Simple contact card with icons
- No form needed - guests use their email client to contact

**Step 28: Add Contact to Main Page** - `/src/app/page.tsx`

- Import and add Contact section
- Add section ID (#contact)
- Test mailto and tel links work correctly

### Phase 11: Polish & Optimization

**Step 29: Enhance Layout Metadata** - `/src/app/layout.tsx`

- Add Open Graph tags for social sharing
- Add Twitter Card metadata
- Add JSON-LD structured data for vacation rental
- Configure font optimization

**Step 30: Implement Scroll Effects**

- Update Header with scroll-based background opacity
- Add active section highlighting in navigation
- Create `/src/hooks/useIntersectionObserver.ts` for scroll animations

**Step 31: Optimize Images**

- Ensure all images use Next.js Image component
- Set `priority={true}` only for hero image
- Configure responsive `sizes` attribute
- Add blur placeholders where needed

**Step 32: Mobile Responsiveness Testing**

- Test all breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- Verify gallery works on mobile
- Test navigation hamburger menu
- Ensure touch targets are minimum 44x44px

**Step 33: Accessibility Improvements**

- Add ARIA labels on interactive elements
- Test keyboard navigation (Tab, Enter, Esc)
- Ensure focus visible states on all interactive elements
- Verify all images have descriptive alt text
- Check color contrast ratio 4.5:1 minimum (WCAG AA)

**Step 34: Performance Optimization**

- Run Lighthouse audit (target 90+ scores)
- Code-split heavy components (Modal, Map) with dynamic imports
- Check bundle size with `npm run build`
- Optimize font loading with font-display: swap

**Step 35: SEO Enhancements**

- Verify meta description and title
- Add robots.txt and sitemap.xml
- Test Core Web Vitals performance

### Phase 12: Final Touches

**Step 36: Add Favicon**

- Create favicon.ico in `/public`
- Add apple-touch-icon.png

**Step 37: Cross-Browser Testing**

- Test in Chrome, Firefox, Safari, Edge
- Test on mobile devices (iOS Safari, Chrome Android)
- Verify form submission works
- Ensure all animations are smooth (60fps)

**Step 38: Documentation**

- Update CLAUDE.md with project specifics
- Create README.md with setup instructions

### Phase 13: Deployment

**Step 39: Production Build Test**

- Run `npm run build`
- Fix any build errors or warnings
- Configure next.config.ts if needed (image domains)

**Step 40: Deploy to Vercel**

- Connect GitHub repository to Vercel
- Deploy and test production site
- Set up custom domain (optional)

## Critical Files

**Priority order for implementation:**

1. **`/Users/Technotronic/Projects/villa/tailwind.config.ts`** - Foundation for all styling; must be configured first
2. **`/Users/Technotronic/Projects/villa/src/app/globals.css`** - Global typography and theme setup
3. **`/Users/Technotronic/Projects/villa/package.json`** - Dependencies must be installed before component development
4. **`/Users/Technotronic/Projects/villa/src/data/villa.ts`** - Central data source referenced by all sections
5. **`/Users/Technotronic/Projects/villa/src/components/animations/FadeInView.tsx`** - Reusable animation wrapper used throughout
6. **`/Users/Technotronic/Projects/villa/src/components/sections/Hero.tsx`** - First impression; sets visual tone
7. **`/Users/Technotronic/Projects/villa/src/components/sections/Gallery.tsx`** - Most complex component; requires careful planning
8. **`/Users/Technotronic/Projects/villa/src/app/page.tsx`** - Orchestrates all sections into final experience

## Key Technology Choices

| Area           | Technology               | Rationale                                                         |
| -------------- | ------------------------ | ----------------------------------------------------------------- |
| **Animations** | Framer Motion            | React-first, declarative, best performance for complex animations |
| **Forms**      | React Hook Form + Zod    | Type-safe validation (if needed for future features)              |
| **Contact**    | mailto/tel links         | Simple, no backend needed, uses guest's email client              |
| **Icons**      | Lucide React             | Consistent style, tree-shakeable, actively maintained             |
| **Images**     | Next.js Image + Unsplash | Built-in optimization, automatic WebP conversion, free photos     |
| **Typography** | Playfair Display + Inter | Classic luxury serif + modern readable sans                       |

## Design Specifications

**Color Palette:**

- Primary Gold: `#d4984d` (luxury accent)
- Neutral Stone: `#78716c` to `#1c1917` (text, backgrounds)
- Ocean Blue: `#0ea5e9` (secondary accent)

**Typography Scale:**

- Display: 5rem (80px) - Hero headline
- Hero: 3.5rem (56px) - Section headlines
- Body: 1rem (16px) base with 1.5 line-height

**Spacing:**

- Section padding: py-16 md:py-24 lg:py-32 (64px → 96px → 128px)
- Container: max-w-7xl (1280px) with px-4 sm:px-6 lg:px-8

**Animations:**

- Transition duration: 300ms for interactions, 600ms for reveals
- Easing: ease-out for entrances, ease-in-out for bi-directional
- Stagger delay: 0.1-0.2s between elements

## Expected Outcome

A polished, professional luxury villa showcase website featuring:

- ✅ Stunning full-screen hero with animations
- ✅ High-quality photo gallery with lightbox
- ✅ Comprehensive amenities showcase
- ✅ Smooth scroll-triggered animations throughout
- ✅ Fully responsive (mobile-first design)
- ✅ Fast performance (90+ Lighthouse scores)
- ✅ SEO optimized
- ✅ Accessible (WCAG AA compliant)
- ✅ Contact section with mailto/tel links for easy communication

Ready for content replacement with actual villa photos and information.
