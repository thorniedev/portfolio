import type { Metadata } from 'next';
import { BlogArchive } from '@/components/sections/blog-archive';
import { getDevToArticles } from '@/lib/devto';
import { generateTechArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Articles & Engineering Blog',
  description:
    'Technical deep-dives on systems architecture, web performance, automation, and full-stack engineering written by Abu Said.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Articles & Engineering Blog | Abu Said',
    description:
      'Technical deep-dives on systems architecture, web performance, automation, and full-stack engineering.',
    url: 'https://abusaid.dev/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles & Engineering Blog | Abu Said',
    description:
      'Technical deep-dives on systems architecture, web performance, automation, and full-stack engineering.',
  },
};

export default async function BlogPage() {
  const blogs = await getDevToArticles('said7388');
  const siteUrl = 'https://abusaid.dev';

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Inject TechArticle JSON-LD for first 3 articles */}
      {blogs.slice(0, 3).map((article) => {
        const schema = generateTechArticleSchema(article, siteUrl);
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
