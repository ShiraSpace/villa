# House of Happiness - Baan Sook Villa

A website for a real rental property in Koh Phangan, Thailand. 
Built with modern frontend architecture using Next.js 15, React 19, and TypeScript — with a focus on component
design, animation, and test coverage.

**Live site**: [House of Happiness](https://house-of-happiness-kp.vercel.app/) &nbsp;·&nbsp; **Deployed on Vercel**

---

## Tech Stack

| Layer         | Technology                                               |
|---------------|----------------------------------------------------------|
| Framework     | Next.js 15 (App Router)                                  |
| UI            | React 19, TypeScript                                     |
| Styling       | Tailwind CSS 3.4, custom design tokens                   |
| Animation     | Framer Motion 12                                         |
| Icons         | Lucide React                                             |
| Testing       | Jest, React Testing Library, @testing-library/user-event |
| Observability | Vercel Analytics, Vercel Speed Insights                  |
| Linting       | ESLint (next/core-web-vitals) + Prettier                 |

---

## Architecture

Single-page application with a scrollable section layout. Each section is an isolated module: its own directory,
animations, constants, and test files. No section knows about another.

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Header, Analytics, SpeedInsights
│   ├── page.tsx            # Composes all sections
│   └── globals.css         # Design tokens, utility classes
├── components/
│   ├── navigation/         # Header, Logo, Menu, MenuButton, ContactButton
│   ├── sections/
│   │   ├── Hero/           # Full-screen hero with stagger animations
│   │   ├── Overview/       # Two-column layout with photo collage
│   │   ├── Details/        # Villa facts grid
│   │   ├── Amenities/      # Icon grid with hover effects
│   │   ├── Gallery/        # Horizontal scroll + lightbox + category filters
│   │   ├── Contact/        # Booking links + contact cards
│   │   └── Footer/
│   └── ui/
│       └── Button/         # Smooth-scroll link button
├── data/
│   └── villa.ts            # Single source of truth for all villa content
└── hooks/
    └── useScrollPosition.ts
```
---

## Testing

Test files covering every component individually. All content strings are centralized in
`constants.ts` per component, so a copy change doesn't touch test code.

```bash
npm test                # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```
---
## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint + Prettier (auto-fix)
```

### Gallery

The gallery section supports category filtering, a horizontal scroll container, and a full-screen lightbox. Images are
organized in `public/images/gallery/` by category (exterior, interior, bedrooms, pool, garden, etc.). Filters update the
visible set without remounting the scroll container.
