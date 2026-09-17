import type { MetadataRoute } from 'next';
import { fallbackBlogData } from '@/data/blog-data';
import { getDevToArticles } from '@/lib/devto';

/**
 * sitemap.ts — dynamically generated sitemap for chanthorndev.site.
 * Combines static routes with dynamic blog article URLs fetched from Dev.to.
 *
 * Priority guide:
 *  1.0 → Homepage (most important — Kim Chanthorn brand page)
 *  0.9 → Projects page (showcases work)
 *  0.8 → Blog listing (regularly updated)
 *  0.7 → Individual blog articles
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = 'https://chanthorndev.site';

  // Fetch live blog articles; fall back to static data if offline/error
  let articles = fallbackBlogData;
  try {
    const fetched = await getDevToArticles('thornie');
    if (fetched.length > 0) articles = fetched;
  } catch {
    // silently fall back to static data
  }

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/project`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: article.canonical_url || `${SITE_URL}/blog#article-${article.id}`,
    lastModified: article.published_at ? new Date(article.published_at) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
