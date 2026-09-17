import * as React from 'react';
import { skillsData } from '@/data/skills-data';

// Skills marquee component matching the reference site style
function SkillTag({ name }: { name: string }) {
  return (
    <div className="w-36 min-w-fit h-fit flex items-center justify-center rounded-lg transition-all duration-500 py-2 px-3 text-center group-hover:-translate-y-[4px] cursor-pointer group bg-[#10172d] border border-[#1f223c] hover:border-violet-500">
      <span className="text-sm transition-all duration-500 text-gray-200 group-hover:text-violet-400 font-medium">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  // Split into two rows for the marquee effect
  const half = Math.ceil(skillsData.length / 2);
  const row1 = skillsData.slice(0, half);
  const row2 = skillsData.slice(half);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Violet blur glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20" />

      {/* Gradient separator line */}
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
        {/* Row 1 — left to right */}
        <div className="flex items-center gap-4 py-3 overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-4">
            {[...row1, ...row1].map((skill, i) => (
              <SkillTag key={`r1-${skill}-${i}`} name={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="flex items-center gap-4 py-3 overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite_reverse] gap-4">
            {[...row2, ...row2].map((skill, i) => (
              <SkillTag key={`r2-${skill}-${i}`} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
