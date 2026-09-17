import { HeaderData, Project, BlogPost, ContactsData, SocialsData } from '@/types';

export function generatePersonSchema(
  header: HeaderData,
  contacts: ContactsData,
  socials: SocialsData,
  skills: string[],
  siteUrl: string
) {
  const sameAs = [
    socials.github,
    socials.linkedIn,
    socials.twitter,
    socials.facebook,
    contacts.devUsername ? `https://dev.to/${contacts.devUsername}` : null,
    socials.medium,
    socials.stackOverflow,
    siteUrl,
  ].filter(Boolean) as string[];

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Kim Chanthorn',
    alternateName: ['Thornie', 'ThornieDev', 'Chanthorn Kim', 'គីម ចាន់ថន', 'ចាន់ថន គីម'],
    givenName: 'Chanthorn',
    familyName: 'Kim',
    jobTitle: 'Full-Stack Developer',
    description: header.description,
    image: `${siteUrl}/profile.png`,
    url: siteUrl,
    email: contacts.email,
    nationality: {
      '@type': 'Country',
      name: 'Cambodia',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phnom Penh',
      addressCountry: 'KH',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Institute of Science and Technology Advanced Development (ISTAD)',
        alternateName: 'CSTAD',
        url: 'https://www.cstad.edu.kh',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Royal University of Phnom Penh (RUPP)',
        alternateName: 'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ',
        url: 'https://www.rupp.edu.kh',
      },
    ],
    sameAs,
    knowsAbout: [
      'Web Development',
      'Computer Science',
      'Information Technology',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'React',
      'Java',
      'Spring Boot',
      'Full-Stack Development',
      'Backend Architecture',
      'Docker',
      'PostgreSQL',
      'AWS',
      'Node.js',
      'NestJS',
      ...skills,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Self-Employed',
    },
  };
}

export function generateProfilePageSchema(siteUrl: string, personSchema: object) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/#profile`,
    url: siteUrl,
    name: 'Kim Chanthorn (ThornieDev) — Full-Stack Developer Cambodia | Khmer Dev Portfolio',
    description:
      'Portfolio of Kim Chanthorn, a full-stack software developer based in Phnom Penh, Cambodia. Specializing in Next.js, TypeScript, Java, and Spring Boot.',
    mainEntity: personSchema,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
      ],
    },
  };
}

export function generateWebSiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Kim Chanthorn — ThornieDev Portfolio',
    description:
      'Personal portfolio of Kim Chanthorn (Thornie / ThornieDev), a full-stack developer and Khmer dev based in Cambodia.',
    author: {
      '@id': `${siteUrl}/#person`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateCreativeWorkSchema(projects: Project[], siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Kim Chanthorn's Projects — ThornieDev",
    description: 'Featured projects and open-source work by Kim Chanthorn (ThornieDev), Cambodian full-stack developer.',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.projectName,
        description: project.projectDesc,
        keywords: project.tags.join(', '),
        url: project.demo || project.code || siteUrl,
        author: {
          '@type': 'Person',
          name: 'Kim Chanthorn',
          alternateName: 'ThornieDev',
        },
      },
    })),
  };
}

export function generateTechArticleSchema(article: BlogPost, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.description,
    datePublished: article.published_at || article.date,
    url: article.canonical_url || article.url || `${siteUrl}/blog`,
    image: article.cover_image || article.image,
    author: {
      '@type': 'Person',
      name: 'Kim Chanthorn',
      alternateName: ['Thornie', 'ThornieDev'],
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Kim Chanthorn',
      url: siteUrl,
    },
  };
}
