import * as React from 'react';
import Image from 'next/image';
import { aboutData } from '@/data/about-data';
import { headerData } from '@/data/header-data';

export function About() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Side label — top right */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* LEFT: Text */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Who I am?</p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {aboutData.description1}
          </p>
          {aboutData.description2 && (
            <p className="text-gray-200 text-sm lg:text-lg mt-4">
              {aboutData.description2}
            </p>
          )}
        </div>

        {/* RIGHT: Profile Photo */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            alt={headerData.name}
            loading="lazy"
            width={280}
            height={280}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            style={{ width: 'auto', height: 'auto' }}
            src={headerData.image}
          />
        </div>
      </div>
    </div>
  );
}
