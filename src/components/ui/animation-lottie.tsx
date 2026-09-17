'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(
  () => import('lottie-react').then((mod) => mod.Lottie),
  {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[280px]" aria-hidden="true" />,
  }
);

interface AnimationLottieProps {
  animationPath?: any;
  animationType?: 'code' | 'study';
  width?: string;
}

export default function AnimationLottie({
  animationPath,
  animationType = 'code',
  width = '95%',
}: AnimationLottieProps) {
  const src = animationPath || (animationType === 'study' ? '/study.json' : '/code.json');

  return (
    <div className="w-full flex items-center justify-center min-h-[280px]">
      <Lottie
        src={src}
        autoplay={true}
        loop={true}
        style={{
          width: width || '95%',
          height: 'auto',
          maxWidth: '100%',
        }}
      />
    </div>
  );
}



