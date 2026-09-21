'use client';

import * as React from 'react';
import { projectsData } from '@/data/projects-data';
import { useLanguage } from '@/context/language-context';

function ProjectCard({
  project,
  index,
  t,
}: {
  project: (typeof projectsData)[0];
  index: number;
  t: ReturnType<typeof useLanguage>['t'];
}) {
  const tags = project.tags;
  const localizedItem = t.projects.items.find((item) => item.id === project.id);
  const projectName = localizedItem?.projectName || project.projectName;
  const projectDesc = localizedItem?.projectDesc || project.projectDesc;

  return (
    <div id={`sticky-card-${index + 1}`} className="w-full mx-auto max-w-2xl sticky" style={{ top: `${(index + 1) * 40}px` }}>
      <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
        <div className="code-window from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
          {/* Top border gradient */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>
          {/* Header: window dots + project name */}
          <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
            <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
              <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400" />
              <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400" />
              <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200" />
            </div>
            <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
              {projectName}
            </p>
          </div>
          {/* Code block */}
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div>
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">project</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">&apos;</span>
                <span className="text-amber-300">{projectName}</span>
                <span className="text-gray-400">&apos;,</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">tools:</span>
                <span className="text-gray-400"> [&apos;</span>
                {tags.map((tag, i) => (
                  <span key={tag}>
                    <span className="text-amber-300">{tag}</span>
                    {i < tags.length - 1 && <span className="text-gray-400">&apos;, &apos;</span>}
                  </span>
                ))}
                <span className="text-gray-400">&apos;],</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">Description:</span>
                <span className="text-cyan-400"> {projectDesc}</span>
                <span className="text-gray-400">,</span>
              </div>
              {/* Links */}
              {(project.code || project.demo) && (
                <div className="ml-4 lg:ml-8 mr-2 mt-2 flex gap-4">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Source code for ${projectName}`}
                      className="text-[#16f2b3] hover:underline text-xs font-mono"
                    >
                      {t.projects.sourceCode}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${projectName}`}
                      className="text-violet-400 hover:underline text-xs font-mono"
                    >
                      {t.projects.liveDemo}
                    </a>
                  )}
                </div>
              )}
              <div>
                <span className="text-gray-400">{'};'}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Section heading — left-aligned with line */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30" />
        <div className="flex items-center justify-start relative">
          <h2 className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            {t.projects.sectionTitle}
          </h2>
          <span className="w-full h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Sticky cards */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
