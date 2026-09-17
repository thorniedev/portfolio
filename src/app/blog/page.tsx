import type { Metadata } from 'next';
import { BlogArchive } from '@/components/sections/blog-archive';
import { getDevToArticles } from '@/lib/devto';
import { generateTechArticleSchema } from '@/lib/schema';
import { contactsData } from '@/data/contacts-data';

const SITE_URL = 'https://chanthorndev.site';

export const metadata: Metadata = {
  title: 'Technical Blog & Engineering Articles',
  description:
    'Technical deep-dives on full-stack architecture, Next.js, TypeScript, and software engineering written by Kim Chanthorn (ThornieDev) in Cambodia.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Technical Blog & Engineering Articles | Kim Chanthorn',
    description:
      'Technical deep-dives on full-stack architecture, Next.js, TypeScript, and software engineering written by Kim Chanthorn (ThornieDev).',
    url: `${SITE_URL}/blog`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Blog & Engineering Articles | Kim Chanthorn',
    description:
      'Technical deep-dives on full-stack architecture, Next.js, TypeScript, and software engineering written by Kim Chanthorn (ThornieDev).',
  },
};

export default async function BlogPage() {
  const blogs = await getDevToArticles(contactsData.devUsername).catch(() => []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Inject TechArticle JSON-LD for first 3 articles */}
      {blogs.slice(0, 3).map((article) => {
        const schema = generateTechArticleSchema(article, SITE_URL);
        return (
          <script
            key={article.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}

      <BlogArchive initialBlogs={blogs} />
    </div>
  );
}
