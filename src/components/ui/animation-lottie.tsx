'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Lottie } from 'lottie-react';

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const src = animationPath || (animationType === 'study' ? '/study.json' : '/code.json');

  if (!isMounted) {
    return <div className="w-full h-full min-h-[280px]" aria-hidden="true" />;
  }

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




