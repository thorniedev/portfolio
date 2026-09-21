export type Language = 'en' | 'km';

export const translations = {
  en: {
    nav: {
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      skills: 'SKILLS',
      projects: 'PROJECTS',
      activity: 'ACTIVITY',
      education: 'EDUCATION',
      blogs: 'BLOGS',
    },
    hero: {
      greeting: 'Hello,',
      thisIs: 'This is',
      imA: "I'm a Professional",
      roles: [
        'Full-Stack Developer.',
        'Khmer Dev.',
        'Backend Engineer.',
        'Next.js Specialist.',
      ],
      taglineBefore: 'Full-stack software developer based in',
      taglineLocation: 'Phnom Penh, Cambodia',
      taglineAfter: '— building high-performance web applications and backend systems.',
      contactBtn: 'Contact me',
      resumeBtn: 'Get Resume',
    },
    about: {
      sideTitle: 'ABOUT ME',
      sectionTitle: 'Who I am?',
      description1:
        "My name is Kim Chanthorn — known online as Thornie or ThornieDev. I'm a full-stack software developer based in Phnom Penh, Cambodia, passionate about building robust, scalable web applications and cloud-native backend systems that solve real-world problems.",
      description2:
        "As a Khmer dev, I take pride in representing the growing tech community in Cambodia. My core expertise spans TypeScript, Next.js, React, Java, and Spring Boot, backed by solid knowledge of Docker, PostgreSQL, and AWS. I love architecting clean systems, writing maintainable code, and continuously pushing the boundaries of what Cambodian software engineering can achieve.",
    },
    experience: {
      sectionTitle: 'Experiences',
      items: [
        {
          id: 1,
          jobtitle: 'FULL-STACK DEVELOPER',
          company: 'Self-Employed / Freelance',
          period: '2022 - Present',
          desc: 'Building end-to-end web applications for clients across Southeast Asia. Specializing in Next.js front-ends, Spring Boot microservices, and PostgreSQL data architecture deployed on AWS.',
        },
        {
          id: 2,
          jobtitle: 'THORNIEDEV',
          company: 'Open Source & Side Projects',
          period: '2021 - Present',
          desc: 'Developing and maintaining open-source tools, dev utilities, and portfolio projects that showcase modern full-stack development from Cambodia.',
        },
        {
          id: 3,
          jobtitle: 'INDEPENDENT DEVELOPER',
          company: 'Self-Driven Learning',
          period: '2019 - Present',
          desc: 'Deep exploration of system architecture, cloud computing (AWS/GCP), containerization with Docker, and modern JavaScript/TypeScript ecosystems.',
        },
      ],
    },
    education: {
      sectionTitle: 'Educations',
      items: [
        {
          id: 1,
          course: 'SOFTWARE ENGINEERING & ADVANCED IT DEVELOPMENT',
          institution: 'Institute of Science and Technology Advanced Development (ISTAD)',
          period: '2023 - Present',
        },
        {
          id: 2,
          course: 'COMPUTER SCIENCE & INFORMATION TECHNOLOGY',
          institution: 'Royal University of Phnom Penh (RUPP)',
          period: '2021 - Present',
        },
      ],
    },
    skills: {
      sectionTitle: 'Skills',
    },
    projects: {
      sectionTitle: 'PROJECTS',
      sourceCode: '// source code',
      liveDemo: '// live demo',
      items: [
        {
          id: 1,
          projectName: 'Ayla Networks',
          projectDesc:
            'Enterprise IoT ecosystem simplifying the development of smart home & IoT connectivity solutions.',
        },
        {
          id: 2,
          projectName: 'Jewelry Niche',
          projectDesc:
            'High-converting e-commerce platform for boutique jewelry featuring inventory tracking and secure payment gateways.',
        },
        {
          id: 3,
          projectName: 'Travel Agency CRM',
          projectDesc:
            'Comprehensive travel operations platform managing booking pipelines, dynamic itineraries, and client communications.',
        },
        {
          id: 4,
          projectName: 'Clinical Patient Tracker',
          projectDesc:
            'Cross-platform healthcare mobility application for real-time patient vitals observation and historical medical tracking.',
        },
        {
          id: 5,
          projectName: 'Omni E-Commerce',
          projectDesc:
            'Full-featured mobile commerce store with product catalogs, shopping cart state management, and push alerts.',
        },
        {
          id: 6,
          projectName: 'Urban Ride-Share',
          projectDesc:
            'Real-time transit and ride-hailing client with geolocation mapping, route estimation, and driver matching.',
        },
      ],
    },
    gitActivity: {
      sectionTitle: 'GitHub Activity',
      publicRepos: 'Public Repos',
      followers: 'Followers',
      following: 'Following',
      contributions: 'contributions in the last year',
      recentEvents: 'Recent Events',
      topRepositories: 'Top Repositories',
      stars: 'stars',
      forks: 'forks',
    },
    blogs: {
      sectionTitle: 'Blogs',
      noPosts: 'No posts yet. Check back soon!',
      minRead: 'Min Read',
      readArticle: 'Read article',
      backToHome: 'Back to Portfolio',
      searchPlaceholder: 'Search articles by title or keyword...',
      articlesHeading: 'Articles & Writings',
      articlesSubtitle: 'Practical tutorials, architecture guides, web automation, and engineering reflections.',
    },
    contact: {
      sectionTitle: 'Contact',
      letsConnect: "Let's Connect",
      subtitle: "Have a project or opportunity? I'd love to hear from you.",
      emailLabel: 'Email:',
      phoneLabel: 'Phone:',
      locationLabel: 'Location:',
      nameField: 'Your Name',
      namePlaceholder: 'Jane Doe',
      emailField: 'Email',
      emailPlaceholder: 'jane@example.com',
      messageField: 'Message',
      messagePlaceholder: 'Your message...',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      fillAllFields: 'Please fill all fields.',
      thankYou: 'Thank you! I will get back to you soon.',
    },
    footer: {
      madeWith: 'Made with',
      using: 'using Next.js',
      rights: 'All rights reserved.',
    },
  },
  km: {
    nav: {
      about: 'អំពីខ្ញុំ',
      experience: 'បទពិសោធន៍',
      skills: 'ជំនាញ',
      projects: 'គម្រោង',
      activity: 'សកម្មភាព',
      education: 'ការអប់រំ',
      blogs: 'អត្ថបទ',
    },
    hero: {
      greeting: 'សួស្តី,',
      thisIs: 'ខ្ញុំគឺ',
      imA: 'ខ្ញុំជាអ្នកជំនាញ',
      roles: [
        'អ្នកអភិវឌ្ឍន៍ Full-Stack.',
        'Khmer Dev (អ្នកបង្កើតកម្មវិធីខ្មែរ).',
        'វិស្វករ Backend.',
        'អ្នកឯកទេស Next.js.',
      ],
      taglineBefore: 'អ្នកអភិវឌ្ឍន៍កម្មវិធី Full-Stack មានមូលដ្ឋាននៅ',
      taglineLocation: 'រាជធានីភ្នំពេញ កម្ពុជា 🇰🇭',
      taglineAfter: '— បង្កើតគេហទំព័រ និងប្រព័ន្ធ Backend ប្រកបដោយប្រសិទ្ធភាព និងសុវត្ថិភាពខ្ពស់។',
      contactBtn: 'ទាក់ទងខ្ញុំ',
      resumeBtn: 'ទាញយកប្រវត្តិរូប',
    },
    about: {
      sideTitle: 'អំពីខ្ញុំ',
      sectionTitle: 'តើខ្ញុំជានរណា?',
      description1:
        'ខ្ញុំឈ្មោះ គីម ចាន់ថន — ត្រូវបានគេស្គាល់លើអ៊ីនធឺណិតថា Thornie ឬ ThornieDev។ ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធី Full-Stack នៅរាជធានីភ្នំពេញ ប្រទេសកម្ពុជា ដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រទំនើប និងប្រព័ន្ធ Cloud-native Backend ដោះស្រាយបញ្ហាជាក់ស្តែងក្នុងសង្គម។',
      description2:
        'ក្នុងនាមជាអ្នកអភិវឌ្ឍន៍ខ្មែរមួយរូប (Khmer Dev) ខ្ញុំមានមោទនភាពក្នុងការរួមចំណែកអភិវឌ្ឍវិស័យបច្ចេកវិទ្យានៅកម្ពុជា។ ជំនាញស្នូលរបស់ខ្ញុំរួមមាន TypeScript, Next.js, React, Java, និង Spring Boot ព្រមទាំងការប្រើប្រាស់ Docker, PostgreSQL, និង AWS។ ខ្ញុំចូលចិត្តរៀបចំស្ថាបត្យកម្មប្រព័ន្ធកូដស្អាត ងាយស្រួលថែទាំ និងបន្តរុញច្រានសមត្ថភាពវិស្វកម្មសូហ្វវែរកម្ពុជាឱ្យកាន់តែរីកចម្រើន។',
    },
    experience: {
      sectionTitle: 'បទពិសោធន៍',
      items: [
        {
          id: 1,
          jobtitle: 'អ្នកអភិវឌ្ឍន៍ FULL-STACK',
          company: 'ការងារផ្ទាល់ខ្លួន / ឯករាជ្យ (Freelance)',
          period: '២០២២ - បច្ចុប្បន្ន',
          desc: 'បង្កើតកម្មវិធីគេហទំព័រពេញលេញសម្រាប់អតិថិជនទូទាំងតំបន់អាស៊ីអាគ្នេយ៍។ ផ្តោតលើ Next.js ផ្នែកខាងមុខ, Spring Boot Microservices និងរចនាសម្ព័ន្ធទិន្នន័យ PostgreSQL លើ Cloud AWS។',
        },
        {
          id: 2,
          jobtitle: 'THORNIEDEV',
          company: 'គម្រោងបើកចំហ (Open Source) & គម្រោងផ្ទាល់ខ្លួន',
          period: '២០២១ - បច្ចុប្បន្ន',
          desc: 'អភិវឌ្ឍ និងថែទាំឧបករណ៍ Open-source និងគម្រោង Portfolio បង្ហាញពីការអភិវឌ្ឍន៍កម្មវិធីទំនើបៗពីកម្ពុជា។',
        },
        {
          id: 3,
          jobtitle: 'អ្នកអភិវឌ្ឍន៍ស្វ័យសិក្សា',
          company: 'ការស្រាវជ្រាវ និងសិក្សាដោយខ្លួនឯង',
          period: '២០១៩ - បច្ចុប្បន្ន',
          desc: 'ស្រាវជ្រាវស៊ីជម្រៅលើស្ថាបត្យកម្មប្រព័ន្ធ, Cloud Computing (AWS/GCP), Containerization ជាមួយ Docker, និងប្រព័ន្ធអេកូឡូស៊ី JavaScript/TypeScript ទំនើប។',
        },
      ],
    },
    education: {
      sectionTitle: 'ការអប់រំ',
      items: [
        {
          id: 1,
          course: 'វិស្វកម្មសូហ្វវែរ និងការអភិវឌ្ឍន៍ព័ត៌មានវិទ្យាកម្រិតខ្ពស់',
          institution: 'វិទ្យាស្ថានបច្ចេកវិទ្យា និងនវានុវត្តន៍ឌីជីថល (ISTAD)',
          period: '២០២៣ - បច្ចុប្បន្ន',
        },
        {
          id: 2,
          course: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ និងព័ត៌មានវិទ្យា',
          institution: 'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)',
          period: '២០២១ - បច្ចុប្បន្ន',
        },
      ],
    },
    skills: {
      sectionTitle: 'ជំនាញបច្ចេកវិទ្យា',
    },
    projects: {
      sectionTitle: 'គម្រោងការងារ',
      sourceCode: '// កូដប្រភព',
      liveDemo: '// សាកល្បងផ្ទាល់',
      items: [
        {
          id: 1,
          projectName: 'Ayla Networks',
          projectDesc:
            'ប្រព័ន្ធអេកូឡូស៊ី IoT សម្រាប់សហគ្រាស ជួយសម្រួលដល់ការតភ្ជាប់ឧបករណ៍ Smart Home និងដំណោះស្រាយ IoT ឆ្លាតវៃ។',
        },
        {
          id: 2,
          projectName: 'Jewelry Niche',
          projectDesc:
            'គេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិចលក់គ្រឿងអលង្ការទំនើប ជាមួយប្រព័ន្ធតាមដានទំនិញ និងទូទាត់ប្រាក់ប្រកបដោយសុវត្ថិភាព។',
        },
        {
          id: 3,
          projectName: 'Travel Agency CRM',
          projectDesc:
            'ប្រព័ន្ធគ្រប់គ្រងប្រតិបត្តិការទេសចរណ៍ គ្រប់គ្រងការកក់សំបុត្រ កាលវិភាគធ្វើដំណើរ និងទំនាក់ទំនងជាមួយអតិថិជន។',
        },
        {
          id: 4,
          projectName: 'Clinical Patient Tracker',
          projectDesc:
            'កម្មវិធីទូរស័ព្ទសុខាភិបាលតាមដានសុខភាពអ្នកជំងឺក្នុងពេលជាក់ស្តែង និងប្រវត្តិព្យាបាលវេជ្ជសាស្ត្រ។',
        },
        {
          id: 5,
          projectName: 'Omni E-Commerce',
          projectDesc:
            'ហាងទំនិញតាមទូរស័ព្ទដៃ មានមុខងារពេញលេញក្នុងការស្វែងរកទំនិញ រទេះទំនិញ និងការជូនដំណឹងរហ័ស។',
        },
        {
          id: 6,
          projectName: 'Urban Ride-Share',
          projectDesc:
            'កម្មវិធីហៅយានជំនិះ និងធ្វើដំណើរក្នុងទីក្រុងជាមួយប្រព័ន្ធផែនទី GPS តាមដានពេលវេលាជាក់ស្តែង។',
        },
      ],
    },
    gitActivity: {
      sectionTitle: 'សកម្មភាព GitHub',
      publicRepos: 'ឃ្លាំងកូដសាធារណៈ',
      followers: 'អ្នកតាមដាន',
      following: 'កំពុងតាមដាន',
      contributions: 'ការរួមចំណែកកូដក្នុងឆ្នាំកន្លងទៅ',
      recentEvents: 'ព្រឹត្តិការណ៍ថ្មីៗ',
      topRepositories: 'ឃ្លាំងកូដឆ្នើមៗ',
      stars: 'ផ្កាយ',
      forks: 'ចម្លង (Forks)',
    },
    blogs: {
      sectionTitle: 'អត្ថបទបច្ចេកវិទ្យា',
      noPosts: 'មិនទាន់មានអត្ថបទនៅឡើយទេ។ សូមត្រលប់មកវិញឆាប់ៗ!',
      minRead: 'នាទីអាន',
      readArticle: 'អានអត្ថបទ',
      backToHome: 'ត្រលប់ទៅទំព័រដើម',
      searchPlaceholder: 'ស្វែងរកអត្ថបទតាមចំណងជើង ឬពាក្យគន្លឹះ...',
      articlesHeading: 'អត្ថបទ និងការចែករំលែកបច្ចេកវិទ្យា',
      articlesSubtitle: 'មេរៀនអនុវត្តជាក់ស្តែង ស្ថាបត្យកម្មប្រព័ន្ធ និងបទពិសោធន៍វិស្វកម្មសូហ្វវែរ។',
    },
    contact: {
      sectionTitle: 'ទំនាក់ទំនង',
      letsConnect: 'តោះបង្កើតទំនាក់ទំនង',
      subtitle: 'មានគម្រោងការងារ ឬឱកាសសហការ? ខ្ញុំរីករាយស្វាគមន៍ជានិច្ច។',
      emailLabel: 'អ៊ីមែល:',
      phoneLabel: 'ទូរស័ព្ទ:',
      locationLabel: 'ទីតាំង:',
      nameField: 'ឈ្មោះរបស់អ្នក',
      namePlaceholder: 'ឈ្មោះពេញ...',
      emailField: 'អ៊ីមែលរបស់អ្នក',
      emailPlaceholder: 'youremail@example.com',
      messageField: 'សាររបស់អ្នក',
      messagePlaceholder: 'សូមសរសេរសារនៅទីនេះ...',
      sendBtn: 'ផ្ញើសារ',
      sendingBtn: 'កំពុងផ្ញើ...',
      fillAllFields: 'សូមបំពេញគ្រប់ប្រអប់។',
      thankYou: 'សូមអរគុណ! ខ្ញុំនឹងឆ្លើយតបទៅកាន់អ្នកវិញក្នុងពេលឆាប់ៗ។',
    },
    footer: {
      madeWith: 'បង្កើតឡើងដោយ',
      using: 'ដោយប្រើប្រាស់ Next.js',
      rights: 'រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    },
  },
} as const;
