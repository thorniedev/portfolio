import * as React from 'react';
import { cn } from '@/lib/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95';

    const variants = {
      primary:
        'bg-brand-500 text-white shadow-md hover:bg-brand-600 hover:shadow-lg shadow-brand-500/20',
      outline:
        'border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white dark:hover:text-slate-900',
      secondary:
        'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-dark-border dark:text-dark-text dark:hover:bg-slate-700',
      ghost:
        'text-slate-700 hover:bg-slate-100 hover:text-brand-500 dark:text-dark-text dark:hover:bg-dark-surface dark:hover:text-brand-400',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs',
      md: 'h-11 px-6 text-sm',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
