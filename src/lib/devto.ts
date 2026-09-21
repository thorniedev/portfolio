import { BlogPost } from '@/types';
import { fallbackBlogData } from '@/data/blog-data';

export async function getDevToArticles(username: string = 'said7388'): Promise<BlogPost[]> {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${username}`, {
      next: { revalidate: 3600 }, // ISR: Cache and revalidate hourly
      signal: AbortSignal.timeout(3000),
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`Dev.to API responded with status ${res.status}. Using fallback articles.`);
      return fallbackBlogData;
    }

    const data: BlogPost[] = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return fallbackBlogData;
    }

    return data;
  } catch (error) {
    console.error('Error fetching Dev.to articles:', error);
    return fallbackBlogData;
  }
}
