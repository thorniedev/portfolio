import type { Metadata } from 'next';
import { ProjectArchive } from '@/components/sections/project-archive';
import { projectsData } from '@/data/projects-data';
import { generateCreativeWorkSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'All Projects & Works',
  description:
    'Comprehensive showcase of web applications, full-stack systems, mobile apps, and developer tools built by Abu Said.',
  alternates: {
    canonical: '/project',
  },
  openGraph: {
    title: 'Project Archive | Abu Said',
    description:
      'Explore the complete software engineering portfolio, microservices, and web apps built by Abu Said.',
    url: 'https://abusaid.dev/project',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Archive | Abu Said',
    description:
      'Explore the complete software engineering portfolio, microservices, and web apps built by Abu Said.',
  },
};

export default function ProjectPage() {
  const siteUrl = 'https://abusaid.dev';
  const schema = generateCreativeWorkSchema(projectsData, siteUrl);

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
