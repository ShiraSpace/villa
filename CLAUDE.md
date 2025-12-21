# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A luxury villa rental website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project uses the Next.js App Router architecture.

**Villa Name**: S̄ạntis̄uk̄h Villa (formerly Mips Grove)
**Type**: Single-page informational website (no booking system)
**Contact**: mailto/tel links (no contact form)

## Development Commands

### Setup

```bash
npm install
```

### Running the Application

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build + start
npm run build
npm start
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Linting & Formatting

```bash
# Run ESLint with auto-fix (includes Prettier formatting)
npm run lint
```

### Build

```bash
npm run build
```

## Code Style Guidelines

### Mandatory Code Standards

1. **Quotes**: Use single quotes throughout
2. **Exports**: Use named exports ONLY (no default exports)
3. **Return Types**: Add explicit return types to ALL functions
4. **Comments**: Do not add comments to code
5. **Component Composition**: Extract to small, focused components when needed

### TypeScript

- All functions must have explicit return types (`JSX.Element`, `void`, `number`, etc.)
- Use strict mode
- Prefer interfaces for props and types

### Testing

- Each component has a dedicated test file
- Use `data-testid` for element selection in tests
- Store test IDs and content in constants file
- Place `render()` in `beforeEach` block
- Use `getByTestId` for element queries
- Mock dependencies appropriately

### Code Formatting

- **Prettier** is configured for automatic code formatting
- Configuration (`.prettierrc`):
  - Single quotes for strings (`singleQuote: true`)
  - Semicolons required (`semi: true`)
  - Tab width: 2 spaces
  - Print width: 100 characters
  - Trailing commas: ES5 style
  - Arrow function parentheses: always
- Integrated with ESLint via `eslint-plugin-prettier`
- Formatting happens automatically when running `npm run lint`
- ESLint will both check and fix code style and formatting issues

## Architecture

### Framework & Routing

- Next.js 15 with App Router (`src/app/` directory)
- TypeScript with strict mode enabled
- React 19 with Server Components by default
- Client Components marked with `'use client'` directive

### Styling

- Tailwind CSS 3.4.1 for styling
- Custom luxury theme with gold, stone, and ocean colors
- Google Fonts: Gentium Plus (serif) and Inter (sans)
- Custom animations: fade-in, slide-up, slide-in-right
- Global styles in `src/app/globals.css`
- PostCSS with autoprefixer

### Testing Stack

- Jest with Next.js integration
- React Testing Library
- @testing-library/user-event for user interactions
- @testing-library/jest-dom for DOM matchers

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header
│   ├── page.tsx            # Home page with Hero
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── navigation/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.test.tsx
│   │   │   └── index.ts
│   │   ├── Logo/
│   │   ├── Menu/
│   │   ├── MenuButton/
│   │   ├── ContactButton/
│   │   ├── types.ts        # Shared interfaces
│   │   ├── constants.ts    # Content and test IDs
│   │   ├── navigation-utils.ts # Shared utilities
│   │   └── navigation-utils.test.ts
│   ├── sections/
│   │   └── Hero/
│   │       ├── Hero.tsx    # Main Hero component
│   │       ├── Hero.test.tsx
│   │       ├── index.ts
│   │       ├── HeroBackground/
│   │       ├── HeroTitle/
│   │       ├── HeroTagline/
│   │       ├── HeroCTA/
│   │       ├── animations.ts  # Framer Motion variants
│   │       └── constants.ts   # Test IDs and content
│   ├── ui/
│   │   └── Button/
│   │       ├── Button.tsx  # Link button for smooth scrolling
│   │       ├── Button.test.tsx
│   │       ├── constants.ts
│   │       └── index.ts
│   └── data/
│       └── villa.ts        # Villa data with interface
└── hooks/
    └── useScrollPosition.ts # Custom hook for scroll tracking
public/
└── images/
    ├── hero/               # 5 hero image options
    ├── gallery/
    └── rooms/
```

**Component Organization:**

- Components with 2+ files (prod + test) are organized in folders
- Each component folder includes an `index.ts` for simplified imports
- Shared utilities and types remain currently at the navigation level

### Component Architecture

#### Navigation System

- **Header**: Orchestrator component with scroll-based styling
  - Transparent when at top
  - White background with shadow when scrolled > 50px
  - Fixed positioning with z-index management
- **Logo**: Button component with villa name
- **Menu**: Desktop navigation (hidden on mobile)
- **MenuButton**: Individual menu items with hover effects
- **ContactButton**: Scrolls to contact section

#### Hero System

- **Hero**: Orchestrator component with Framer Motion animations
  - Full-screen section with stagger animations
  - Coordinates all subcomponents
- **HeroBackground**: Image and overlay layer
  - Next.js Image with priority loading
  - Adjustable gradient overlay
- **HeroTitle**: Villa name with text shadow
- **HeroTagline**: Villa tagline with gold accent
- **HeroCTA**: Call-to-action button
- **animations.ts**: Shared Framer Motion variants
  - Container variants with stagger children
  - Item variants for fade + slide up

#### UI Components

- **Button**: Link button for smooth scrolling to sections
  - Only accepts `href` prop (no onClick)
  - Uses smooth scroll behavior
  - Styled with `.btn-primary` class

#### Data

- **villa.ts**: Central villa data with TypeScript interface
  - Villa name, tagline, description
  - Capacity information
  - Contact details

#### Hooks

- **useScrollPosition**: Tracks window.scrollY for scroll effects
  - Required for client components
  - Returns number representing scroll position

### Key Configurations

- TypeScript target: ES2017
- Module resolution: bundler
- Strict mode enabled
- ESLint extends `next/core-web-vitals`
- `@/*` path alias maps to `./src/*`

## Development Workflow

For each implementation step:

1. Implement → Review → Refactor → Approve
2. Commit changes
3. Add Tests → Review Tests → Run Tests
4. Approve Tests → Commit Tests
5. Move to next step
