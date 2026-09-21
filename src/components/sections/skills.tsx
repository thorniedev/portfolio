import * as React from 'react';
import Image from 'next/image';
import { skillsData } from '@/data/skills-data';

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 w-[140px] min-w-[140px] h-[130px] rounded-xl cursor-pointer transition-all duration-300 bg-[#10172d] border border-[#1f223c] hover:border-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:-translate-y-1">
      <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Image
          src={icon}
          alt={`${name} icon`}
          width={48}
          height={48}
          className="object-contain drop-shadow-md max-w-[48px] max-h-[48px]"
        />
      </div>
      <span className="text-sm font-medium text-white transition-colors duration-300 text-center tracking-wide px-1">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Violet blur glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 pointer-events-none" />

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
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Skills</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Single line marquee with stop/pause on hover */}
      <div className="w-full my-12 overflow-hidden marquee-wrapper group">
        <div className="flex w-max items-center gap-4 py-4 animate-marquee marquee-track group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
          {[...skillsData, ...skillsData].map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
