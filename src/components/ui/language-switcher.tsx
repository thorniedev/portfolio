'use client';

import * as React from 'react';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/cn';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        'relative inline-flex items-center rounded-full p-1 border transition-all duration-300',
        'border-[#251f58] bg-[#10172d]/80 backdrop-blur-md shadow-inner',
        'dark:border-[#251f58] dark:bg-[#10172d]/80',
        className
      )}
    >
      {/* Khmer Button */}
      <button
        type="button"
        onClick={() => setLanguage('km')}
        aria-pressed={language === 'km'}
        aria-label="ប្តូរទៅភាសាខ្មែរ (Switch to Khmer)"
        className={cn(
          'relative flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16f2b3]',
          language === 'km'
            ? 'bg-[#16f2b3] text-[#0d1224] shadow-md shadow-[#16f2b3]/20 scale-100'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        )}
      >
        <span className="text-sm leading-none" role="img" aria-label="Cambodia flag">🇰🇭</span>
        <span>ខ្មែរ</span>
      </button>

      {/* English Button */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
        className={cn(
          'relative flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16f2b3]',
          language === 'en'
            ? 'bg-[#16f2b3] text-[#0d1224] shadow-md shadow-[#16f2b3]/20 scale-100'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        )}
      >
        <span className="text-sm leading-none" role="img" aria-label="UK flag">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
}
