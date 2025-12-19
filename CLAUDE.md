# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A luxury villa rental website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project uses the Next.js App Router architecture.

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

### Linting
```bash
npm run lint
```

### Build
```bash
npm run build
```

## Architecture

### Framework & Routing
- Next.js 15 with App Router (`src/app/` directory)
- TypeScript with strict mode enabled
- React 19 with Server Components by default

### Styling
- Tailwind CSS for styling
- Global styles in `src/app/globals.css`
- PostCSS with autoprefixer
- CSS variables for theme colors (`--background`, `--foreground`)

### Project Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with metadata and HTML structure
  - `page.tsx` - Home page component
  - `globals.css` - Global styles and Tailwind directives
- `@/*` path alias maps to `./src/*`

### Key Configurations
- TypeScript target: ES2017
- Module resolution: bundler
- Strict mode enabled
- ESLint extends `next/core-web-vitals`