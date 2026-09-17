import * as React from 'react';
import { cn } from '@/lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        'bg-white/80 border-slate-200/80 shadow-sm backdrop-blur-sm',
        'dark:bg-dark-card/90 dark:border-dark-border dark:shadow-none',
        hoverEffect &&
          'hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-500/40 dark:hover:border-brand-500/50 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
