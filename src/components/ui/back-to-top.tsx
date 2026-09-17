'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-portfolio-cyan/50 bg-portfolio-bg text-portfolio-cyan shadow-cyan-glow hover:bg-portfolio-cyan hover:text-[#0b0c18] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-cyan"
      style={{ '--tw-shadow': '0 0 20px rgba(0, 217, 200, 0.4)' } as React.CSSProperties}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
