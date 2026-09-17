'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

interface AnimationLottieProps {
  animationPath?: Record<string, unknown> | unknown[];
  animationType?: 'code' | 'study';
  width?: string;
}

export default function AnimationLottie({
  animationPath,
  animationType = 'code',
  width = '95%',
}: AnimationLottieProps) {
  const [LottieComponent, setLottieComponent] = useState<React.ComponentType<any> | null>(null);
  const [data, setData] = useState<any>(animationPath || null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Load lottie-react and json chunk ONLY when user scrolls near this section
          Promise.all([
            import('lottie-react'),
            animationPath
              ? Promise.resolve({ default: animationPath })
              : animationType === 'study'
              ? import('@/assets/lottie/study.json')
              : import('@/assets/lottie/code.json'),
          ])
            .then(([lottieMod, jsonMod]) => {
              const Comp = (lottieMod as any).default || (lottieMod as any).Lottie || lottieMod;
              setLottieComponent(() => Comp);
              setData(jsonMod.default || jsonMod);
            })
            .catch((err) => {
              console.error('Failed to load lottie animation:', err);
            });

          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [animationPath, animationType]);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center min-h-[260px]">
      {LottieComponent && data ? (
        <LottieComponent
          animationData={data}
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


