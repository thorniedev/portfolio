'use client';

import * as React from 'react';
import { useEffect } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled route error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500 mb-6">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <h1 className="font-heading text-3xl font-bold text-slate-900 dark:text-dark-text sm:text-4xl">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-dark-muted">
        An unexpected error occurred while processing this request. You can attempt to reload the component or return home.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button onClick={() => reset()} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          <span>Try Again</span>
        </Button>

        <Link href="/">
          <Button variant="outline" className="gap-2">
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
