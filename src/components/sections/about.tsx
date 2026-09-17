import * as React from 'react';
import Image from 'next/image';
import { aboutData } from '@/data/about-data';
import { headerData } from '@/data/header-data';

export function About() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Side label — top right (elevated z-30 so it remains 100% visible on hover) */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-6 xl:-right-8 z-30 select-none pointer-events-none">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-xl border border-[#2a2e5a]/60">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LEFT: Text */}
        <div className="order-2 lg:order-1">
          <h2 className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Who I am?</h2>
          <p className="text-gray-200 text-sm lg:text-lg">
            {aboutData.description1}
          </p>
          {aboutData.description2 && (
            <p className="text-gray-200 text-sm lg:text-lg mt-4">
              {aboutData.description2}
            </p>
          )}
        </div>

        {/* RIGHT: Profile Photo (with spacing & max-width constraint so hover scaling never collides with ABOUT ME) */}
        <div className="flex justify-center items-center order-1 lg:order-2 lg:pr-10 xl:pr-6">
          <div className="relative">
            <Image
              alt="Kim Chanthorn (ThornieDev) — Full-Stack Developer Cambodia"
              loading="lazy"
              width={350}
              height={273}
              sizes="(max-width: 768px) 100vw, 350px"
              className="max-w-[300px] sm:max-w-[340px] lg:max-w-[330px] xl:max-w-[360px] w-auto h-auto rounded-xl shadow-2xl transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer border border-[#2a2e5a]"
              src={headerData.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
