'use client';

import * as React from 'react';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ProjectArchive({ initialProjects }: { initialProjects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    initialProjects.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet).sort();
  }, [initialProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch =
        project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.projectDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [initialProjects, searchQuery, selectedTag]);

  return (
    <div className="py-12">
      {/* Return Home Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-500 dark:text-dark-muted dark:hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded p-1"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-dark-text">
          Project Archive
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-dark-muted">
          A comprehensive showcase of open-source contributions, commercial client applications, and distributed software systems.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search projects or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-dark-border dark:bg-dark-card dark:text-dark-text dark:placeholder:text-dark-muted"
            aria-label="Search projects"
          />
        </div>

        {/* Tag Pills */}
        <div className="flex w-full flex-wrap items-center gap-1.5 sm:w-auto">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              selectedTag === null
                ? 'bg-brand-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-dark-card dark:text-dark-muted dark:hover:bg-dark-surface'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                selectedTag === tag
                  ? 'bg-brand-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-dark-card dark:text-dark-muted dark:hover:bg-dark-surface'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-6 text-xs text-slate-500 dark:text-dark-muted">
        Showing {filteredProjects.length} of {initialProjects.length} projects
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-dark-surface/80 flex items-center justify-center p-6 border-b border-slate-100 dark:border-dark-border">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.projectName} preview`}
                    width={400}
                    height={225}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-slate-400 font-medium text-sm">Preview Unavailable</div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-dark-text group-hover:text-brand-500 transition-colors">
                    {project.projectName}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted line-clamp-3 leading-relaxed">
                    {project.projectDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border/60 flex items-center justify-between">
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-brand-500 dark:text-dark-muted dark:hover:text-brand-400 transition-colors"
                      aria-label={`View ${project.projectName} source on GitHub`}
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  ) : <span />}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-brand-600 dark:text-brand-400 transition-colors"
                      aria-label={`View live demo of ${project.projectName}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-dashed border-slate-200 dark:border-dark-border">
          <p className="text-base font-semibold text-slate-700 dark:text-dark-text">No matching projects found</p>
          <p className="text-sm text-slate-500 dark:text-dark-muted mt-1">Try refining your search query or selecting a different tag filter.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedTag(null);
            }}
            className="mt-4"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
