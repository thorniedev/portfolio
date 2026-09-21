'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations } from '@/data/translations';

type TranslationsType = (typeof translations)['en'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationsType;
  isKhmer: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === 'en' || stored === 'km') {
        setLanguageState(stored);
        document.documentElement.lang = stored;
        document.documentElement.setAttribute('data-lang', stored);
      }
    } catch {
      // localStorage may fail in restricted/private contexts
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('data-lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next: Language = language === 'en' ? 'km' : 'en';
    setLanguage(next);
  };

  const t = translations[language] as TranslationsType;
  const isKhmer = language === 'km';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isKhmer }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
