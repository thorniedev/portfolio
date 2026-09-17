import type { MetadataRoute } from 'next';

/**
 * robots.ts — generated at build time by Next.js App Router.
 * Allows all crawlers to index all pages and points to the canonical sitemap.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block API routes from indexing, allow all page assets
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://chanthorndev.site/sitemap.xml',
    host: 'https://chanthorndev.site',
  };
}
