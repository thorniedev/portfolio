'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GitHubCalendar } from 'react-github-calendar';
import { BsGithub, BsGit } from 'react-icons/bs';
import { VscRepo, VscGitCommit, VscHistory } from 'react-icons/vsc';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaFire } from 'react-icons/fa';
import { GitHubUser, GitHubActivityEvent, GitHubRepo } from '@/lib/github';
import { useLanguage } from '@/context/language-context';

interface GitActivityProps {
  user: GitHubUser;
  events: GitHubActivityEvent[];
  repos: GitHubRepo[];
}

function timeAgo(dateStr: string): string {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export function GitActivity({ user, events, repos }: GitActivityProps) {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const calendarTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#16f2b3'],
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#16f2b3'],
  };

  return (
    <div id="activity" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background decoration */}
      <Image
        src="/section.svg"
        alt=""
        aria-hidden="true"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 pointer-events-none opacity-40"
      />

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-wider">
            {t.gitActivity.sectionTitle}
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="flex flex-col gap-8 py-4">
        {/* ── Top Profile & Stat Highlights ────────────────────────────── */}
        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] p-6 lg:p-8">
          {/* Top border gradient */}
          <div className="flex flex-row absolute top-0 left-0 right-0 overflow-hidden rounded-t-xl">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left: User Avatar & Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#16f2b3] shadow-[0_0_20px_rgba(22,242,179,0.3)]">
                  <Image
                    src={user.avatar_url}
                    alt={user.name || user.login}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                {/* Active status pulse */}
                <span
                  title="Active on GitHub"
                  className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-[#16f2b3] border-2 border-[#0d1224] flex items-center justify-center"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16f2b3] opacity-75" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {user.name || 'Kim Chanthorn'}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-violet-600/30 text-violet-300 border border-violet-500/30 font-mono">
                    @{user.login}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-md">
                  {user.bio || 'Full-Stack Developer • CS&E from RUPP & Full-Stack at ISTAD'}
                </p>
              </div>
            </div>

            {/* Right: Quick Stats & CTA */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Contributions Card */}
              <div className="flex items-center gap-3 rounded-lg bg-[#10172d] border border-[#252a44] px-4 py-3">
                <div className="p-2 rounded-md bg-[#16f2b3]/10 text-[#16f2b3]">
                  <FaFire className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">1,045+</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">
                    Yearly Commits
                  </div>
                </div>
              </div>

              {/* Repositories Card */}
              <div className="flex items-center gap-3 rounded-lg bg-[#10172d] border border-[#252a44] px-4 py-3">
                <div className="p-2 rounded-md bg-pink-500/10 text-pink-400">
                  <VscRepo className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{user.public_repos}</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">
                    {t.gitActivity.publicRepos}
                  </div>
                </div>
              </div>

              {/* GitHub Link Button */}
              <Link
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:from-pink-500 hover:to-violet-600 shadow-md hover:scale-[1.02]"
                aria-label="View Kim Chanthorn on GitHub"
              >
                <BsGithub className="h-4 w-4" />
                <span>Follow GitHub</span>
                <HiOutlineExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Contribution Heatmap Calendar ────────────────────────────── */}
        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] overflow-hidden">
          {/* Window Header */}
          <div className="px-4 lg:px-6 py-3 border-b border-indigo-950/60 flex items-center justify-between bg-[#0b0e22]">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-gray-400 ml-2">
                contributions.sh &mdash; {user.login}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#16f2b3]">
              <span className="h-2 w-2 rounded-full bg-[#16f2b3] animate-pulse" />
              <span className="font-mono">live sync</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                  <VscGitCommit className="text-[#16f2b3]" />
                  Contributions Heatmap
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Daily code activity and commits across public GitHub repositories over the past year.
                </p>
              </div>
              <span className="text-xs text-gray-500 italic block sm:hidden">
                Swipe horizontally to view full year &rarr;
              </span>
            </div>

            {/* Calendar Heatmap Container with smooth scroll */}
            <div className="overflow-x-auto pb-2 flex justify-center w-full scrollbar-thin scrollbar-thumb-violet-900 scrollbar-track-transparent">
              <div className="min-w-[720px] py-2">
                {mounted ? (
                  <GitHubCalendar
                    username={user.login}
                    colorScheme="dark"
                    theme={calendarTheme}
                    fontSize={12}
                    blockSize={12}
                    blockMargin={4}
                    showWeekdayLabels
                    labels={{
                      totalCount: `{{count}} ${t.gitActivity.contributions}`,
                    }}
                  />
                ) : (
                  /* Loading skeleton */
                  <div className="h-36 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#16f2b3] border-t-transparent" />
                      Loading contribution graph...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Recent Commits & Repositories Grid ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Recent Activity Feed */}
          <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <VscHistory className="text-[#16f2b3]" />
                  {t.gitActivity.recentEvents}
                </h4>
                <span className="text-xs font-mono text-gray-400">
                  {events.length} recent pushes
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {events.map((event) => (
                  <Link
                    key={event.id}
                    href={event.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 p-3 rounded-lg bg-[#10172d]/80 border border-[#222842] hover:border-[#16f2b3]/50 transition-all duration-300 hover:bg-[#121b36]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-violet-600/10 text-violet-400 group-hover:text-[#16f2b3] group-hover:bg-[#16f2b3]/10 transition-colors mt-0.5">
                        <BsGit className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-mono text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white flex items-center gap-1.5">
                          <span>{event.repoName}</span>
                          <HiOutlineExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#16f2b3]" />
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#1e274a] text-pink-400">
                            branch: {event.branch}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] text-gray-400 shrink-0 font-mono">
                      {timeAgo(event.createdAt)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1e274a] flex justify-between items-center text-xs">
              <span className="text-gray-400">Verified GitHub push events</span>
              <Link
                href={`https://github.com/${user.login}?tab=activity`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:underline font-mono inline-flex items-center gap-1"
              >
                All activity &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Active Repositories */}
          <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <VscRepo className="text-[#16f2b3]" />
                  {t.gitActivity.topRepositories}
                </h4>
                <span className="text-xs font-mono text-gray-400">
                  {user.public_repos} total
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {repos.map((repo) => (
                  <Link
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg bg-[#10172d]/80 border border-[#222842] hover:border-violet-500/50 transition-all duration-300 hover:bg-[#121b36] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-[#16f2b3] transition-colors truncate max-w-[170px]">
                          {repo.name}
                        </span>
                        <HiOutlineExternalLink className="h-3 w-3 text-gray-500 group-hover:text-[#16f2b3] transition-colors" />
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1a203a] text-[11px] font-mono text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            repo.language === 'TypeScript'
                              ? 'bg-blue-400'
                              : repo.language === 'Java'
                              ? 'bg-amber-500'
                              : repo.language === 'HTML'
                              ? 'bg-orange-500'
                              : 'bg-emerald-400'
                          }`}
                        />
                        <span>{repo.language}</span>
                      </div>
                      {repo.stars > 0 && <span>★ {repo.stars}</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1e274a] flex justify-between items-center text-xs">
              <span className="text-gray-400">Updated from GitHub</span>
              <Link
                href={`https://github.com/${user.login}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:underline font-mono inline-flex items-center gap-1"
              >
                All repositories &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
