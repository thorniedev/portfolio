'use client';

import * as React from 'react';
import Image from 'next/image';
import { BsPersonWorkspace } from 'react-icons/bs';
import AnimationLottie from '@/components/ui/animation-lottie';
import { useLanguage } from '@/context/language-context';

export function Education() {
  const { t } = useLanguage();

  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt=""
        aria-hidden="true"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Gradient separator */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">{t.education.sectionTitle}</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* LEFT: Lottie Animation */}
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4 flex items-center justify-center">
              <AnimationLottie animationType="study" />
            </div>
          </div>

          {/* RIGHT: Education Cards */}
          <div>
            <div className="flex flex-col gap-6">
              {t.education.items.map((edu) => (
                <article
                  key={edu.id}
                  className="glow-card h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full overflow-hidden"
                >
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt=""
                      aria-hidden="true"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {edu.period}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">{edu.course}</p>
                        <p className="text-sm sm:text-base text-gray-300">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
