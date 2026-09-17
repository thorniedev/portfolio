# Modern Developer Portfolio

A modern, production-grade developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, optimized for speed, accessibility, clean architecture, and search engines.

---

## Features

- **Next.js App Router & Server Components:** Streamed UI with React 19 Server Components, `Suspense`, and instant transitions.
- **Strict TypeScript:** Type safety across all portfolio data, components, API clients, and schemas.
- **Tailwind CSS & Design System:** Curated dark/light theme tokens, accessible focus rings, and WCAG AA contrast compliance.
- **Search Engine Optimization (SEO):**
  - Next.js dynamic `Metadata` objects.
  - Complete OpenGraph and Twitter cards.
  - Dynamic OpenGraph image generation via `next/og` (`ImageResponse`).
  - Automated `robots.ts` and `sitemap.ts` generation.
  - Rich JSON-LD schemas (`Person`, `ProfilePage`, `CreativeWork`, `TechArticle`).
- **Core Web Vitals Optimized:**
  - `next/font` for zero layout shifts (CLS) and FOIT/FOUT elimination.
  - `next/image` with responsive `sizes` and LCP candidate prioritization.
  - Pure GPU-accelerated CSS infinite marquee for skills ticker (zero JavaScript runtime overhead).
- **Interactive Capabilities:**
  - Dedicated `/project` archive with instant live search and tag filtering.
  - Dedicated `/blog` archive with keyword search and Dev.to live API integration.
  - Accessible mobile drawer with focus trap and keyboard navigation (`Escape` key support).
  - Accessible contact form with validation and feedback alerts.

---

## Project Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx            # Blog archive with live search & filtering
│   │   └── opengraph-image.tsx # Dynamic OG image for blog
│   ├── project/
│   │   ├── page.tsx            # Projects archive with tag filters
│   │   └── opengraph-image.tsx # Dynamic OG image for projects
│   ├── opengraph-image.tsx     # Dynamic root OpenGraph image generator
│   ├── robots.ts               # Dynamic robots.txt
│   ├── sitemap.ts              # Dynamic sitemap.xml with Dev.to articles
│   ├── loading.tsx             # Streaming loading skeleton
│   ├── error.tsx               # Client error boundary
│   ├── not-found.tsx           # Semantic 404 page
│   ├── layout.tsx              # Root layout with fonts, metadataBase, and JSON-LD
│   └── page.tsx                # Homepage Server Component
├── components/
│   ├── ui/                     # Reusable UI primitives (Button, Card, Badge, Drawer, etc.)
│   └── sections/               # Portfolio sections (Navbar, Hero, About, Skills, etc.)
├── data/                       # Typed portfolio data sources
├── lib/                        # Helpers (cn, schema, devto fetcher, theme provider)
├── styles/
│   └── globals.css             # Tailwind layers, CSS variables & marquee keyframes
└── types/                      # Strict TypeScript interfaces
```

---

## Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm (Node Package Manager)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```
