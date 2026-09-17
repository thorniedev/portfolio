'use client';

import dynamic from 'next/dynamic';
import * as React from 'react';

const Lottie = dynamic(
  () =>
    import('lottie-react').then((mod) => {
      const Comp = (mod as any).default || (mod as any).Lottie || mod;
      return Comp as React.ComponentType<any>;
    }),
  { ssr: false }
);

interface AnimationLottieProps {
  animationPath: Record<string, unknown> | unknown[];
  width?: string;
}

export default function AnimationLottie({ animationPath, width = '95%' }: AnimationLottieProps) {
  return (
    <Lottie
      src={animationPath}
      loop={true}
      autoplay={true}
      style={{
        width: width || '95%',
      }}
    />
  );
}
