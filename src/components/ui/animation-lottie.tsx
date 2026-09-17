'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(
  () =>
    import('lottie-react').then((mod) => {
      const Comp = (mod as any).default || (mod as any).Lottie || mod;
      return Comp as React.ComponentType<any>;
    }),
  {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[260px]" aria-hidden="true" />,
  }
);

interface AnimationLottieProps {
  animationPath: Record<string, unknown> | unknown[];
  width?: string;
}

export default function AnimationLottie({ animationPath, width = '95%' }: AnimationLottieProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center min-h-[260px]">
      {isInView ? (
        <Lottie
          animationData={animationPath}
          loop={true}
          autoplay={true}
          style={{
            width: width || '95%',
          }}
        />
      ) : (
        <div className="w-full h-full min-h-[260px]" aria-hidden="true" />
      )}
    </div>
  );
}

