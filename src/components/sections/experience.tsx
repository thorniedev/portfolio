'use client';

import * as React from 'react';
import Image from 'next/image';
import { BsPersonWorkspace } from 'react-icons/bs';
import AnimationLottie from '@/components/ui/animation-lottie';
import { useLanguage } from '@/context/language-context';

export function Experience() {
  const { t } = useLanguage();

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt=""
        aria-hidden="true"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">{t.experience.sectionTitle}</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* LEFT: Lottie animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full flex items-center justify-center">
              <AnimationLottie animationType="code" />
            </div>
          </div>

          {/* RIGHT: Experience Cards */}
          <div>
            <div className="flex flex-col gap-6">
              {t.experience.items.map((exp) => (
                <article
                  key={exp.id}
                  className="glow-card h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full overflow-hidden"
                >
                  <div className="p-4 relative">
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
                        {exp.period}
                      </p>
                    </div>
                    <div className="flex items-start gap-x-6 px-3 py-4">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125 pt-1">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div className="flex-1">
                        <p className="text-base sm:text-xl mb-1 font-medium uppercase">{exp.jobtitle}</p>
                        <p className="text-sm sm:text-base text-gray-300">{exp.company}</p>
                        {exp.desc && (
                          <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">{exp.desc}</p>
                        )}
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
