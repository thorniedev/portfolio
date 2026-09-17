import type { Metadata, Viewport } from 'next';
import { Poppins, Outfit } from 'next/font/google';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { BackToTop } from '@/components/ui/back-to-top';
import { ThemeProvider } from '@/lib/theme';
import { ThemeSelector } from '@/components/ui/theme-selector';
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
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700'],
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
    // Direct Names & Aliases
    'Kim Chanthorn',
    'Chanthorn Kim',
    'Mr. Kim Chanthorn',
    'Mr. Chanthorn Kim',
    'Mr. thorniedev',
    'Thornie',
    'ThornieDev',
    'Chanthorn',
    'Kim Chanthorn Cambodia',
    'Kim Chanthorn portfolio',
    'chanthorndev.site',
    'thorniedev',

    // Education, University & Student Keywords
    'student at ISTAD',
    'ISTAD student',
    'ISTAD developer',
    'CSTAD',
    'ISTAD Cambodia',
    'ITE gen 3 student',
    'ITE ISTAD 2026',
    'ITE gen 3 ISTAD 2026',
    'Fullstack developer Cambodia',
    'Fullstack developer Cambodia ITE gen 3 ISTAD',
    'Fullstack developer gen 2 ISTAD 2026',
    'Fullstack developer Cambodia ITE gen 3 ISTAD 2026',
    'RUPP student',
    'RUPP IT student',
    'Royal University of Phnom Penh',
    'RUPP Computer Science',
    'RUPP FE',
    'IT student',
    'ITE student',
    'IT student Cambodia',
    'Cambodia IT student',
    'Computer Science student Cambodia',

    // Geographic & Niche Developer Queries
    'developer cambodia',
    'Khmer dev',
    'Khmer developer',
    'Khmer coder',
    'coding khmer',
    'coding khmer chanthorn kim',
    'Cambodian software engineer',
    'Cambodian developer',
    'full-stack developer Cambodia',
    'full-stack developer Phnom Penh',
    'web developer Phnom Penh',
    'web developer Cambodia',
    'portfolio Cambodia developer',

    // Tech Stack & Role Specializations
    'Next.js developer Cambodia',
    'TypeScript developer Cambodia',
    'React developer Cambodia',
    'Java Spring Boot developer',
    'Spring Boot developer Cambodia',
    'backend developer Cambodia',
    'frontend developer Cambodia',

    // Native Khmer Script Keywords (Google Cambodia Indexing)
    'គីម ចាន់ថន',
    'ចាន់ថន គីម',
    'ចាន់ថន',
    'និស្សិត ISTAD',
    'និស្សិត RUPP',
    'និស្សិត IT',
    'និស្សិតកុំព្យូទ័រ',
    'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ',
    'សាកលវិទ្យាស្ថានISTAD',
    'អ្នកអភិវឌ្ឍន៍វេបសាយ',
    'អ្នកសរសេរកូដខ្មែរ',
    'អ្នកសរសេរកម្មវិធី',
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
        <ThemeProvider>
          <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <header>
              <Navbar />
            </header>
            <main id="main-content">
              {children}
            </main>
            <Footer />
          </div>
          <BackToTop />
          <ThemeSelector />
        </ThemeProvider>
      </body>
    </html>
  );
}
