import type { Metadata } from 'next';
import { ProjectArchive } from '@/components/sections/project-archive';
import { projectsData } from '@/data/projects-data';
import { generateCreativeWorkSchema } from '@/lib/schema';

const SITE_URL = 'https://chanthorndev.site';

export const metadata: Metadata = {
  title: 'All Projects & Works',
  description:
    'Comprehensive showcase of web applications, full-stack systems, mobile apps, and developer tools built by Kim Chanthorn (ThornieDev) in Cambodia.',
  alternates: {
    canonical: '/project',
  },
  openGraph: {
    title: 'Project Archive | Kim Chanthorn (ThornieDev)',
    description:
      'Explore the complete software engineering portfolio, microservices, and web apps built by Kim Chanthorn (ThornieDev).',
    url: `${SITE_URL}/project`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Archive | Kim Chanthorn (ThornieDev)',
    description:
      'Explore the complete software engineering portfolio, microservices, and web apps built by Kim Chanthorn (ThornieDev).',
  },
};

export default function ProjectPage() {
  const schema = generateCreativeWorkSchema(projectsData, SITE_URL);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectArchive initialProjects={projectsData} />
    </div>
  );
}
