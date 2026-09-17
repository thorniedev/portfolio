'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// ── Theme definitions ─────────────────────────────────────────────────────────
export type ThemeId = 'dark' | 'light' | 'aqua' | 'retro';

export interface ThemeDef {
  id: ThemeId;
  label: string;
  /** 4 representative swatches shown in the picker */
  swatches: string[];
  /** CSS class applied to <html> for Tailwind dark: utilities */
  htmlClass?: 'dark';
}

export const THEMES: ThemeDef[] = [
  {
    id: 'light',
    label: 'Light',
    swatches: ['#1a1443', '#d1d5db', '#1b2e4b', '#7c3aed'],
  },
  {
    id: 'dark',
    label: 'Dark',
    swatches: ['#6b7280', '#4b3f72', '#4f7aff', '#16f2b3'],
    htmlClass: 'dark',
  },
  {
    id: 'aqua',
    label: 'Aqua',
    swatches: ['#005f5f', '#00c8c8', '#003a3a', '#ff6b6b'],
  },
  {
    id: 'retro',
    label: 'Retro',
    swatches: ['#3b2a1a', '#f4a533', '#2e1b0e', '#d97706'],
  },
];

// ── Context ───────────────────────────────────────────────────────────────────
interface ThemeContextType {
  theme: ThemeId;
  /** Legacy convenience for components that only care about dark/light */
  isDark: boolean;
  setTheme: (id: ThemeId) => void;
  /** Kept for backward-compat with ThemeToggle */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme';

function applyTheme(id: ThemeId) {
  const html = document.documentElement;
  // Remove all theme classes
  html.removeAttribute('data-theme');
  html.classList.remove('dark');
  // Set new theme
  html.setAttribute('data-theme', id);
  if (id === 'dark') html.classList.add('dark');
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const initial: ThemeId = saved ?? 'dark';
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = (id: ThemeId) => {
    setThemeState(id);
    localStorage.setItem(STORAGE_KEY, id);
    applyTheme(id);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    // Render children immediately; theme flicker is suppressed by suppressHydrationWarning
    return (
      <ThemeContext.Provider value={{ theme: 'dark', isDark: true, setTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: 'dark' as ThemeId,
      isDark: true,
      setTheme: (_: ThemeId) => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
