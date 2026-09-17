import * as React from 'react';

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 animate-pulse">
      {/* Hero skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-4">
          <div className="h-6 w-48 rounded-full bg-slate-200 dark:bg-dark-card" />
          <div className="h-12 w-3/4 rounded-xl bg-slate-200 dark:bg-dark-card" />
          <div className="h-6 w-1/2 rounded-lg bg-slate-200 dark:bg-dark-card" />
          <div className="h-20 w-full rounded-xl bg-slate-200 dark:bg-dark-card" />
          <div className="flex gap-4 mt-4">
            <div className="h-11 w-36 rounded-full bg-slate-200 dark:bg-dark-card" />
            <div className="h-11 w-36 rounded-full bg-slate-200 dark:bg-dark-card" />
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <div className="h-72 w-72 rounded-full bg-slate-200 dark:bg-dark-card" />
        </div>
      </div>
    </div>
  );
}
