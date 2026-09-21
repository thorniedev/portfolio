'use client';

import * as React from 'react';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, Clock, ExternalLink, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export function BlogArchive({ initialBlogs }: { initialBlogs: BlogPost[] }) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const q = searchQuery.toLowerCase();
      const inTitle = blog.title.toLowerCase().includes(q);
      const inDesc = blog.description.toLowerCase().includes(q);
      const inTags = blog.tag_list ? blog.tag_list.some((t) => t.toLowerCase().includes(q)) : false;
      return inTitle || inDesc || inTags;
    });
  }, [initialBlogs, searchQuery]);

  return (
    <div className="py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-500 dark:text-dark-muted dark:hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded p-1"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t.blogs.backToHome}</span>
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-dark-text">
          {t.blogs.articlesHeading}
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-dark-muted">
          {t.blogs.articlesSubtitle}
        </p>
      </div>

      {/* Search Bar */}
      <div className="mt-8 max-w-md">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder={t.blogs.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-dark-border dark:bg-dark-card dark:text-dark-text dark:placeholder:text-dark-muted"
            aria-label="Search articles"
          />
        </div>
      </div>

      {/* Results Counter */}
      <div className="mt-6 text-xs text-slate-500 dark:text-dark-muted">
        Showing {filteredBlogs.length} of {initialBlogs.length} articles
      </div>

      {/* Blog Cards Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => {
            const articleUrl = blog.canonical_url || blog.url || `/blog#article-${blog.id}`;
            const imageUrl = blog.cover_image || blog.image;
            const formattedDate = blog.published_at
              ? new Date(blog.published_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : blog.date || 'Recent';

            return (
              <Card key={blog.id} className="flex flex-col overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-dark-surface/80">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={blog.title}
                      width={400}
                      height={200}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-slate-400 text-sm font-medium">
                      Article Thumbnail
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-dark-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-brand-500" />
                        <span>{formattedDate}</span>
                      </span>
                      {blog.reading_time_minutes && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-brand-500" />
                          <span>{blog.reading_time_minutes} min read</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-dark-text group-hover:text-brand-500 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted line-clamp-3 leading-relaxed">
                      {blog.description}
                    </p>

                    {blog.tag_list && blog.tag_list.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {blog.tag_list.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border/60">
                    <a
                      href={articleUrl}
                      target={articleUrl.startsWith('http') ? '_blank' : '_self'}
                      rel={articleUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600 dark:text-brand-400 transition-colors"
                      aria-label={`Read article: ${blog.title}`}
                    >
                      <span>Read Full Article</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-dashed border-slate-200 dark:border-dark-border">
          <p className="text-base font-semibold text-slate-700 dark:text-dark-text">No articles found</p>
          <p className="text-sm text-slate-500 dark:text-dark-muted mt-1">Try searching for a different keyword.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSearchQuery('')}
            className="mt-4"
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}
