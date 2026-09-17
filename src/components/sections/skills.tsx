import * as React from 'react';
import Image from 'next/image';
import { skillsData } from '@/data/skills-data';

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 w-[130px] min-w-[130px] h-[120px] rounded-xl cursor-pointer transition-all duration-300 bg-[#10172d] border border-[#1f223c] hover:border-violet-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]">
      <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={icon}
          alt={`${name} icon`}
          fill
          sizes="48px"
          className="object-contain drop-shadow-md"
        />
      </div>
      <span className="text-xs font-medium text-gray-300 group-hover:text-violet-400 transition-colors duration-300 text-center px-1 leading-tight">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  const half = Math.ceil(skillsData.length / 2);
  const row1 = skillsData.slice(0, half);
  const row2 = skillsData.slice(half);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Violet blur glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20" />

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

      {/* Skills marquee */}
      <div className="w-full my-12 overflow-hidden">
        {/* Row 1 — scrolls left */}
        <div className="flex items-center gap-4 py-3 overflow-hidden">
          <div className="flex animate-marquee gap-4">
            {[...row1, ...row1].map((skill, i) => (
              <SkillCard key={`r1-${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex items-center gap-4 py-3 overflow-hidden">
          <div className="flex animate-marquee-reverse gap-4">
            {[...row2, ...row2].map((skill, i) => (
              <SkillCard key={`r2-${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
