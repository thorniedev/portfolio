import type { Metadata, Viewport } from 'next';
import { Poppins, Outfit } from 'next/font/google';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { BackToTop } from '@/components/ui/back-to-top';
import { headerData } from '@/data/header-data';
import { contactsData } from '@/data/contacts-data';
import { socialsData } from '@/data/socials-data';
import { skillsData } from '@/data/skills-data';
import {
  generatePersonSchema,
  generateProfilePageSchema,
  generateWebSiteSchema,
} from '@/lib/schema';
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

// ─── Canonical site URL ───────────────────────────────────────────────────────
const SITE_URL = 'https://chanthorndev.site';

// ─── Root Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Kim Chanthorn (Thornie) | Full-Stack Developer Cambodia | Khmer Dev',
    template: '%s | Kim Chanthorn',
  },

  description:
    'Kim Chanthorn (ThornieDev) — Full-stack software developer based in Cambodia. Khmer dev building high-performance web applications and backend systems with Next.js, TypeScript, Java & Spring Boot.',

  keywords: [
    'Kim Chanthorn',
    'Chanthorn Kim',
    'Thornie',
    'ThornieDev',
    'developer cambodia',
    'Khmer dev',
    'coding khmer chanthorn kim',
    'Cambodian software engineer',
    'full-stack developer Cambodia',
    'full-stack developer Phnom Penh',
    'Next.js developer Cambodia',
    'TypeScript developer Cambodia',
    'Java Spring Boot developer',
    'web developer Phnom Penh',
    'portfolio Cambodia developer',
  ],

  authors: [
    { name: 'Kim Chanthorn', url: SITE_URL },
    { name: 'ThornieDev', url: SITE_URL },
  ],

  creator: 'Kim Chanthorn (ThornieDev)',
  publisher: 'Kim Chanthorn',

  // ── Canonical ───────────────────────────────────────────────────────────────
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'km-KH': '/',
    },
  },

  // ── OpenGraph ───────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Kim Chanthorn — ThornieDev Portfolio',
    title: 'Kim Chanthorn (Thornie) | Full-Stack Developer Cambodia | Khmer Dev',
    description:
      'Kim Chanthorn (ThornieDev) — Full-stack software developer based in Cambodia. Khmer dev building high-performance web applications and backend systems.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Kim Chanthorn (ThornieDev) — Full-Stack Developer Cambodia',
      },
    ],
  },

  // ── Twitter / X ─────────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@thorniedev',
    creator: '@thorniedev',
    title: 'Kim Chanthorn (Thornie) | Full-Stack Developer Cambodia',
    description:
      'Khmer dev building high-performance web apps and backend systems from Cambodia. TypeScript, Next.js, Java, Spring Boot.',
    images: ['/opengraph-image'],
  },

  // ── Robots / Indexing ───────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Verification (add Google/Bing tokens here when you have them) ────────────
  // verification: {
  //   google: 'YOUR_GOOGLE_SITE_VERIFICATION_TOKEN',
  //   yandex: 'YOUR_YANDEX_VERIFICATION',
  // },

  // ── Categorization ──────────────────────────────────────────────────────────
  category: 'technology',

  // ── App / PWA metadata ──────────────────────────────────────────────────────
  applicationName: 'Kim Chanthorn Portfolio',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
};

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [{ color: '#0d1224' }],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Build structured data once at render time
  const personSchema = generatePersonSchema(
    headerData,
    contactsData,
    socialsData,
    skillsData,
    SITE_URL
  );
  const profileSchema = generateProfilePageSchema(SITE_URL, personSchema);
  const websiteSchema = generateWebSiteSchema(SITE_URL);

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* ── Person Schema ───────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* ── ProfilePage Schema ──────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
        />
        {/* ── WebSite Schema (enables Sitelinks Searchbox) ────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.variable} ${outfit.variable} font-sans antialiased`}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <Footer />
        </main>
        <BackToTop />
      </body>
    </html>
  );
}
