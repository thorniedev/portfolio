'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Drawer({ isOpen, onClose, title = 'Navigation Menu', children }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className={cn(
          'relative z-50 flex h-full w-4/5 max-w-xs flex-col border-r shadow-2xl transition-transform duration-300 ease-out',
          'bg-white/95 border-slate-200 text-slate-900',
          'dark:bg-[#0c0f1d]/95 dark:border-dark-border dark:text-dark-text'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-dark-border">
          <span className="font-bold text-lg text-brand-500 tracking-wide">{title}</span>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-dark-muted dark:hover:bg-dark-card dark:hover:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6" onClick={onClose}>
          {children}
        </div>
      </div>
    </div>
  );
}
