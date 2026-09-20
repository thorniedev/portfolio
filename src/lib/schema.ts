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
    alternateName: ['Thornie', 'ThornieDev', 'Chanthorn Kim', 'Kim Chanthorn ThornieDev', 'គីម ចាន់ថន', 'ចាន់ថន គីម'],
    givenName: 'Chanthorn',
    familyName: 'Kim',
    honorificPrefix: 'Mr.',
    jobTitle: 'Full-Stack Software Developer',
    description: 'Kim Chanthorn (ThornieDev) is a full-stack software developer and engineer from Phnom Penh, Cambodia, specializing in Next.js, TypeScript, Java, and Spring Boot. ISTAD ITE Generation 3 student and RUPP graduate. Known online as Thornie and ThornieDev.',
    image: [
      {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#personImage`,
        url: `${siteUrl}/thornie.webp`,
        width: 350,
        height: 350,
        caption: 'Kim Chanthorn (ThornieDev) — Full-Stack Developer & Engineer, Cambodia',
        representativeOfPage: true,
      },
      {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-image.png`,
        width: 1024,
        height: 572,
        caption: 'Kim Chanthorn (ThornieDev) — Full-Stack Developer & Engineer',
      },
    ],
    url: siteUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
      name: 'Kim Chanthorn (ThornieDev) — Official Portfolio',
      url: siteUrl,
    },
    email: contacts.email,
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'GitHub',
        value: 'thorniedev',
        url: 'https://github.com/thorniedev',
      },
      {
        '@type': 'PropertyValue',
        name: 'LinkedIn',
        value: 'kim-chanthorn',
        url: 'https://www.linkedin.com/in/kim-chanthorn',
      },
      {
        '@type': 'PropertyValue',
        name: 'dev.to',
        value: 'thorniedev',
        url: 'https://dev.to/thorniedev',
      },
    ],
    nationality: {
      '@type': 'Country',
      name: 'Cambodia',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phnom Penh',
      addressRegion: 'Phnom Penh',
      addressCountry: 'KH',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Institute of Science and Technology Advanced Development (ISTAD)',
        alternateName: ['CSTAD', 'ISTAD Cambodia'],
        url: 'https://www.cstad.edu.kh',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Royal University of Phnom Penh (RUPP)',
        alternateName: ['RUPP', 'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ'],
        url: 'https://www.rupp.edu.kh',
      },
    ],
    sameAs,
    knowsAbout: [
      'Web Development',
      'Full-Stack Development',
      'Backend Architecture',
      'Software Engineering',
      'Computer Science',
      'Information Technology',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'React',
      'Java',
      'Spring Boot',
      'Node.js',
      'NestJS',
      'Docker',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Microservices',
      'REST API',
      'CI/CD',
      'DevOps',
      ...skills,
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full-Stack Software Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Cambodia',
      },
      estimatedSalary: null,
      skills: skills.join(', '),
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Self-Employed',
    },
    award: 'ISTAD ITE Generation 3 Student',
    memberOf: {
      '@type': 'Organization',
      name: 'ISTAD ITE Generation 3',
      url: 'https://www.cstad.edu.kh',
    },
  };
}

export function generateProfilePageSchema(siteUrl: string, personSchema: object) {
  const now = new Date().toISOString();
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/#profile`,
    url: siteUrl,
    name: 'Kim Chanthorn (ThornieDev) — Full-Stack Developer Cambodia | Khmer Dev Portfolio',
    description:
      'Portfolio of Kim Chanthorn, a full-stack software developer based in Phnom Penh, Cambodia. Specializing in Next.js, TypeScript, Java, and Spring Boot.',
    datePublished: '2024-01-01',
    dateModified: now,
    inLanguage: ['en-US', 'km'],
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${siteUrl}/og-image.png`,
      width: 1024,
      height: 572,
      caption: 'Kim Chanthorn (ThornieDev) — Full-Stack Developer & Engineer',
    },
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
    alternateName: 'chanthorndev.site',
    description:
      'Personal portfolio of Kim Chanthorn (Thornie / ThornieDev), a full-stack developer and Khmer dev based in Phnom Penh, Cambodia.',
    inLanguage: ['en-US', 'km'],
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
    description:
      'Featured projects and open-source work by Kim Chanthorn (ThornieDev), Cambodian full-stack developer.',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.projectName,
        description: project.projectDesc,
        programmingLanguage: project.tags,
        keywords: project.tags.join(', '),
        url: project.demo || project.code || siteUrl,
        codeRepository: project.code || null,
        author: {
          '@type': 'Person',
          name: 'Kim Chanthorn',
          alternateName: 'ThornieDev',
          url: siteUrl,
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
    dateModified: article.published_at || article.date,
    url: article.canonical_url || article.url || `${siteUrl}/blog`,
    image: article.cover_image || article.image,
    inLanguage: 'en-US',
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.canonical_url || `${siteUrl}/blog`,
    },
  };
}

/** FAQ rich snippet for homepage — boosts "People also ask" appearance */
export function generateFAQSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Kim Chanthorn (ThornieDev)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kim Chanthorn, also known as Thornie or ThornieDev, is a full-stack software developer based in Phnom Penh, Cambodia. He specializes in Next.js, TypeScript, Java, and Spring Boot, and is a student at ISTAD (Institute of Science and Technology Advanced Development) and RUPP (Royal University of Phnom Penh).',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Kim Chanthorn use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kim Chanthorn (ThornieDev) specializes in Next.js, React, TypeScript, JavaScript, Java, Spring Boot, Node.js, NestJS, PostgreSQL, MongoDB, Docker, and AWS. He builds high-performance full-stack web applications and cloud-native backend systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Kim Chanthorn located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kim Chanthorn (Thornie / ThornieDev) is based in Phnom Penh, Cambodia. He is a Khmer developer actively building web applications and backend systems from Southeast Asia.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Kim Chanthorn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can reach Kim Chanthorn (ThornieDev) through his portfolio at ${siteUrl}, on GitHub, LinkedIn, or Twitter @thorniedev.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What is chanthorndev.site?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'chanthorndev.site is the personal developer portfolio of Kim Chanthorn (ThornieDev), a full-stack software developer from Cambodia. It showcases his projects, technical skills, blog articles, and work experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Kim Chanthorn (ThornieDev) the same as Chanthorn KIM on LinkedIn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kim Chanthorn (ThornieDev) — the developer behind chanthorndev.site — is a full-stack software developer and student at ISTAD and RUPP, Phnom Penh, Cambodia, known by the username ThornieDev. His LinkedIn profile is linkedin.com/in/kim-chanthorn.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Kim Chanthorn ThornieDev known for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kim Chanthorn, known as ThornieDev, is a software developer from Cambodia specializing in full-stack web development. He is an ITE Generation 3 student at ISTAD and a Computer Science student at RUPP, building web applications and backend systems using Next.js, TypeScript, Java, and Spring Boot. His portfolio is at chanthorndev.site.',
        },
      },
    ],
  };
}
