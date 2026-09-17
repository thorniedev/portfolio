'use client';

import * as React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { cn } from '@/lib/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200',
        'border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 hover:text-brand-500',
        'dark:border-dark-border dark:bg-dark-card/80 dark:text-dark-text dark:hover:bg-dark-surface dark:hover:text-brand-400',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-200 rotate-0 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-200 -rotate-12 hover:rotate-0 text-slate-700" />
      )}
    </button>
  );
}
