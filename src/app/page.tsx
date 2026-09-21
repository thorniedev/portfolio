import type { Metadata } from 'next';
import * as React from 'react';
import { Suspense } from 'react';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Education } from '@/components/sections/education';
import { BlogSection } from '@/components/sections/blog-section';
import { Contacts } from '@/components/sections/contacts';
import { GitActivity } from '@/components/sections/git-activity';
import { getDevToArticles } from '@/lib/devto';
import { getGitHubUser, getGitHubRecentEvents, getGitHubRepos } from '@/lib/github';
import { projectsData } from '@/data/projects-data';
import { generateCreativeWorkSchema, generateFAQSchema } from '@/lib/schema';

// ─── Page-level Metadata ─────────────────────────────────────────────────────
// (Merges with root layout metadata via the %s template)
export const metadata: Metadata = {
  title: 'Kim Chanthorn (ThornieDev) — Official Portfolio & Developer',
  description:
    'Kim Chanthorn (ThornieDev) — Full-stack software developer based in Phnom Penh, Cambodia. Khmer dev specializing in Next.js, TypeScript, Java, Spring Boot, and cloud-native systems.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chanthorndev.site',
    siteName: 'Kim Chanthorn — ThornieDev Portfolio',
    title: 'Kim Chanthorn (Thornie) | Full-Stack Developer & Engineer',
    description:
      'Khmer dev building scalable web applications and backend systems from Cambodia. Portfolio of Kim Chanthorn (ThornieDev).',
    images: [
      {
        url: 'https://chanthorndev.site/og-image.png',
        secureUrl: 'https://chanthorndev.site/og-image.png',
        width: 1024,
        height: 572,
        type: 'image/png',
        alt: 'Kim Chanthorn (ThornieDev) — Full-Stack Developer & Engineer',
      },
    ],
  },
};

import { contactsData } from '@/data/contacts-data';

// ─── Async blog feed (streamed via Suspense) ──────────────────────────────────
async function StreamedBlogFeed() {
  const blogs = await getDevToArticles(contactsData.devUsername).catch(() => []);
  return <BlogSection blogs={blogs} />;
}

// ─── Homepage ─────────────────────────────────────────────────────────────────
export default async function HomePage() {
  const SITE_URL = 'https://chanthorndev.site';
  const creativeWorkSchema = generateCreativeWorkSchema(projectsData, SITE_URL);
  const faqSchema = generateFAQSchema(SITE_URL);

  const githubUser = contactsData.githubUsername || 'thorniedev';
  const [gitUser, gitEvents, gitRepos] = await Promise.all([
    getGitHubUser(githubUser),
    getGitHubRecentEvents(githubUser),
    getGitHubRepos(githubUser),
  ]);

  return (
    <>
      {/* ── Structured Data ──────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Visible Sections ────────────────────────────────────────────── */}
      <Hero />

      {/* About — h2 rendered inside the component */}
      <About />

      {/* Experience — "Software Engineering Career" semantic anchor */}
      <section aria-label="Software Engineering Career of Kim Chanthorn">
        <h2 className="sr-only">
          Software Engineering &amp; Coding Experience — Kim Chanthorn (ThornieDev) in Cambodia
        </h2>
        <Experience />
      </section>

      {/* Skills — "Technical Stack" semantic anchor */}
      <section aria-label="Technical Skills of Thornie (Kim Chanthorn)">
        <h2 className="sr-only">
          Technical Stack &amp; Backend Architecture — ThornieDev
        </h2>
        <Skills />
      </section>

      {/* Projects */}
      <section aria-label="Projects by Kim Chanthorn (ThornieDev)">
        <h2 className="sr-only">
          Featured Projects by ThornieDev — Full-Stack Developer Cambodia
        </h2>
        <Projects />
      </section>

      {/* GitHub Activity & Contributions */}
      <section aria-label="GitHub Activity and Open Source Contributions of Kim Chanthorn (ThornieDev)">
        <h2 className="sr-only">
          GitHub Activity, Contribution Heatmap Calendar, and Commits — ThornieDev
        </h2>
        <GitActivity user={gitUser} events={gitEvents} repos={gitRepos} />
      </section>

      {/* Education */}
      <section aria-label="Education of Kim Chanthorn">
        <h2 className="sr-only">Education Background — Kim Chanthorn, IT Student at ISTAD &amp; RUPP (Royal University of Phnom Penh)</h2>
        <Education />
      </section>

      {/* Blog — streamed */}
      <section aria-label="Blog by Kim Chanthorn (ThornieDev)">
        <h2 className="sr-only">
          Technical Blog — Coding &amp; Web Development Articles by Thornie (Kim Chanthorn, Cambodia)
        </h2>
        <Suspense
          fallback={
            <div className="py-20 flex justify-center items-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#16f2b3] border-t-transparent" />
            </div>
          }
        >
          <StreamedBlogFeed />
        </Suspense>
      </section>

      {/* Contact */}
      <Contacts />
    </>
  );
}
