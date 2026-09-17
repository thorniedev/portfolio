import * as React from 'react';
import Link from 'next/link';
import { FileQuestion, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 mb-6">
        <FileQuestion className="h-8 w-8" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-brand-500">404 Error</span>
      <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-dark-text sm:text-4xl">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-dark-muted">
        The page you are looking for does not exist or has been relocated to another path.
      </p>

      <div className="mt-8">
        <Link href="/">
          <Button size="lg" className="gap-2">
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
