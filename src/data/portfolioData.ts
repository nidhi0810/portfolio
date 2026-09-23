export interface PinItem {
  id: string;
  type: 'project' | 'about' | 'skill' | 'experience' | 'beyond';
  board: 'Projects' | 'About Me' | 'Skills Toolbox' | 'Experience' | 'Beyond Code';
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  aspectRatio: string;
  linkText?: string;
  showGithub?: boolean;
  showDemo?: boolean;
  externalUrl?: string;
  tags: string[];
  date: string;
  savesCount: number;
  commentsCount: number;
  featured?: boolean;
  metadata?: {
    role?: string;
    metrics?: string;
    organization?: string;
    highlights?: string[];
    skillsList?: { name: string; note?: string }[];
  };
}

export const PROFILE_DATA = {
  name: 'Nidhi Puthran',
  handle: '@nidhi.dev',
  email: 'nidhiputhrannp@gmail.com',
  title: 'IT Engineering Undergrad · Aspiring Software Engineer',
  institution: 'Department of Information Technology',
  graduation: 'Class of 2026',
  avatar: '/src/assets/images/nidhi-pfp.png',
  banner: '/src/assets/images/pinterest_board_banner_1790105479740.jpg',
  bio: 'Information Technology student turning ideas into reality. Focused on full-stack systems, clean architecture, AI reasoning, and green computing · Contemporary dancer & visual designer.',
  stats: {
    monthlyViews: '3.4k',
    boardsCount: 5,
    pinsCount: 16,
    followers: '428'
  },
  socials: {
    github: 'https://github.com/nidhi0810',
    linkedin: 'https://www.linkedin.com/in/nidhi-puthran-2824a9299/',
    email: 'mailto:nidhiputhrannp@gmail.com'
  }
};

export const NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'RoleRadar Project Update',
    message: 'Added NLP parsing benchmarks for job messages (85% accuracy).',
    time: '2 hours ago',
    unread: true
  },
  {
    id: 'notif-2',
    title: 'Hackathon Milestone',
    message: 'Finalist recognition at National Collegiate Innovation Hackathon.',
    time: 'Yesterday',
    unread: true
  },
  {
    id: 'notif-3',
    title: 'New Pin Added to Beyond Code',
    message: 'Choreography & team synchronization board updated.',
    time: '3 days ago',
    unread: false
  }
];

export const PINS: PinItem[] = [
  // 1. RoleRadar Project
  {
    id: 'roledar',
    type: 'project',
    board: 'Projects',
    title: 'RoleRadar — Job Discovery & Matching Platform',
    shortDescription: 'Extracts and matches tailored opportunities for engineering students from message digests and recruitment announcements.',
    fullDescription: 'RoleRadar eliminates friction in fragmented job search channels. It ingests career announcements, professional community posts, and messaging digests, parsing job metadata (role requirements, experience levels, tech stacks, and compensation) to deliver tailored matches for engineering students and early-career developers.',
    image: '/src/assets/images/project_roledar_1790105017179.jpg',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'roledar.app',
    externalUrl: 'https://github.com',
    tags: ['React', 'Node.js', 'Python NLP', 'PostgreSQL', 'Tailwind CSS'],
    date: '2025',
    savesCount: 0,
    commentsCount: 0,
    featured: true,
    metadata: {
      role: 'Full-Stack Developer & Architect',
      metrics: '85% classification accuracy across 1,200+ raw messages',
      highlights: [
        'Automated parsing engine for unstructured recruitment messages with high precision extraction',
        'Candidate relevance scoring algorithm matching applicant skill matrices with job criteria',
        'Distraction-free Pinterest-inspired cards feed for rapid scanning and bookmarking'
      ]
    }
  },

  // 2. Hangout Project
  {
    id: 'hangout',
    type: 'project',
    board: 'Projects',
    title: 'Hangout — Social Group Availability & Itinerary App',
    shortDescription: 'Coordinates group plans, mutual availability heatmaps, and collaborative activity itineraries without chat chaos.',
    fullDescription: 'Planning group gatherings usually degrades into endlessly fragmented group chats. Hangout streamlines the entire social lifecycle: from proposing activity ideas and voting on destinations to automatic availability heatmaps that pinpoint the ideal hour for everyone to meet without back-and-forth friction.',
    image: '/src/assets/images/project_hangout_1790105032086.jpg',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'hangout.live',
    externalUrl: 'https://github.com',
    tags: ['TypeScript', 'React', 'Express', 'MongoDB', 'WebSockets', 'Tailwind'],
    date: '2025',
    savesCount: 0,
    commentsCount: 0,
    featured: true,
    metadata: {
      role: 'Product Designer & Frontend Lead',
      metrics: 'Reduces group event scheduling coordination time by over 60%',
      highlights: [
        'Interactive time-slot matrix calculating group intersection and availability overlaps in real-time',
        'Collaborative itinerary builder with live polling, split expenses calculation, and location pins',
        'Fluid mobile-first interface optimized for rapid response on touch screens'
      ]
    }
  },

  // 3. CarbonIQ Project
  {
    id: 'carboniq',
    type: 'project',
    board: 'Projects',
    title: 'CarbonIQ — Cloud Workload Carbon Intelligence',
    shortDescription: 'Measures carbon emissions of computing workloads and predicts optimal green execution windows.',
    fullDescription: 'CarbonIQ investigates the environmental footprint of digital workloads. By correlating regional power grid emissions intensity with compute task scheduling, it provides developers and sysadmins with actionable telemetry to shift non-urgent batch tasks to greener hours and lower carbon zones.',
    image: '/src/assets/images/carboniq.png',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'carboniq.dev',
    externalUrl: 'https://github.com/Atharvasp333/CarbonIQ',
    tags: ['Python', 'fastapi', 'agenticai', 'aws', 'aws-cur', 'react', 'codecarbon'],
    date: '2026',
    savesCount: 0,
    commentsCount: 0,
    featured: true,
    metadata: {
      role: 'Systems & Research Developer',
      metrics: 'Identified up to 34% estimated carbon reduction via off-peak execution rescheduling',
      highlights: [
        'Integrated real-time carbon grid intensity APIs to compute dynamic emissions scores per workload',
        'Developed workload rescheduling simulation engine highlighting optimal green execution windows',
        'Visualized multi-region cloud carbon metrics with clear, actionable reduction recommendations'
      ]
    }
  },

  // 4. FinGuard Project
  {
    id: 'finguard',
    type: 'project',
    board: 'Projects',
    title: 'FinGuard — AI-Assisted Financial Intelligence',
    shortDescription: 'Provides contextual expense pattern analysis, anomaly detection, and natural language cashflow summaries.',
    fullDescription: 'FinGuard empowers users with transparent financial intelligence. Moving beyond standard static budgeting spreadsheets, it applies machine learning and generative reasoning to categorize transactions, spot recurring billing spikes, and present plain-English explanations of monthly cashflow trends.',
    image: '/src/assets/images/project_finguard_1790105057391.jpg',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'finguard.ai',
    externalUrl: 'https://github.com',
    tags: ['React', 'Python', 'Scikit-learn', 'Gemini API', 'Tailwind', 'Data Viz'],
    date: '2024',
    savesCount: 0,
    commentsCount: 0,
    featured: true,
    metadata: {
      role: 'AI & Full-Stack Developer',
      metrics: 'Identified 94% of unexpected recurring subscription changes during test benchmarks',
      highlights: [
        'Created pattern-recognition models to cluster recurring expenditures and detect abnormal spending surges',
        'Integrated conversational insight generation synthesizing complex financial statements into clean highlights',
        'Designed privacy-preserving local data processing workflows with zero unnecessary telemetry'
      ]
    }
  },

  // 5. Dance & Movement Board Pin
  {
    id: 'beyond-dance',
    type: 'beyond',
    board: 'Beyond Code',
    title: 'Choreography & Spatial Harmony in Motion',
    shortDescription: 'How collegiate dance choreography shaped my discipline, spatial awareness, and team synchronization.',
    fullDescription: 'Dance is architecture in motion. As lead choreographer and performer in our university cultural troupe, I learned how minute timing, balance, and trust across a team create breathtaking performances — principles that directly enhance software engineering leadership.',
    image: '/src/assets/images/board_dance_creative_1790105068857.jpg',
    aspectRatio: 'aspect-[3/4]',
    linkText: 'dance.performance',
    tags: ['Contemporary Dance', 'Choreography', 'Teamwork', 'Stage Craft'],
    date: '2023 – Present',
    savesCount: 0,
    commentsCount: 0,
    featured: true,
    metadata: {
      role: 'Choreographer & Lead Performer',
      highlights: [
        'Choreographed championship routines for collegiate fests with 1st place regional recognition',
        'Directed troupe rehearsals focusing on synchronized stage geometry and musical timing',
        'Discovered that dance and clean code share the same DNA: balance, timing, and elegance'
      ]
    }
  },

  // 6. About Me: Academic Foundation
  {
    id: 'about-engineering',
    type: 'about',
    board: 'About Me',
    title: 'Information Technology Undergrad',
    shortDescription: 'Turning theoretical computer science foundations into reliable, production-grade web applications.',
    fullDescription: 'Pursuing my Bachelor of Technology in Information Technology (Class of 2027), with a CGPA of 9.0 up to Semester 6. My coursework in Operating Systems, Database Management Systems, Computer Networks, and Software Engineering provides a strong foundation for building fast, resilient applications.',    image: '/src/assets/images/vesit.jpg',
    aspectRatio: 'aspect-[16/9]',
    linkText: 'education.profile',
    showGithub : false,
    showDemo : false,
    tags: ['B.E.', 'InformationTechnology', 'Class of 2027', 'Engineering', '9.0cgpa'],
    date: '2023 – 2027',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      role: 'Undergraduate Student',
      highlights: [
        'Maintained high academic standing while actively building full-stack applications',
        'Deep study of data structures, algorithms, system design, and database normalization',
        'Passionate about hands-on software development alongside theoretical fundamentals'
      ]
    }
  },

    
  {
    id: 'about-iitm',
    type: 'about',
    board: 'About Me',
    title: 'BS in Data Science & Applications',
    shortDescription: 'Exploring data science, statistical learning, and computational thinking to build intelligent, data-driven solutions.',
    fullDescription: 'Pursuing my Bachelor of Science in Data Science and Applications from IIT Madras, alongside my engineering degree. The programme strengthens my foundations in mathematics, statistics, programming, and data analysis, helping me approach real-world problems through data-driven thinking.',
    image: '/src/assets/images/iitmbs.jpg',
    aspectRatio: 'aspect-[16/9]',
    linkText: 'education.iitm',
    showGithub: false,
    showDemo: false,
    tags: ['BS', 'Data Science', 'IIT Madras', 'Statistics', 'Programming'],
    date: 'IIT Madras BS Programme',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      role: 'Undergraduate Student',
      highlights: [
        'Building foundations in programming, mathematics, statistics, and data science',
        'Learning to analyze data and apply computational methods to real-world problems',
        'Combining data science knowledge with software engineering experience to develop practical solutions'
      ]
    }
  },

  // 7. Skills: Backend Development
  {
    id: 'skill-backend',
    type: 'skill',
    board: 'Skills Toolbox',
    title: 'Backend Services & Architecture Toolbox',
    shortDescription: 'Scalable services, RESTful APIs, and asynchronous pipelines built with Node.js, Express, and FastAPI.',
    fullDescription: 'Proficient in designing decoupled backend systems, secure authentication pipelines, and fast API endpoints. Focused on clean architecture, minimal latency, and robust error handling.',
    image: '/src/assets/images/project_carboniq_1790105044945.jpg',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'tech.backend',
    showGithub : false,
    showDemo : false,
    tags: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'JWT', 'Microservices'],
    date: 'Skills Stack',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      skillsList: [
        { name: 'Node.js', note: 'Event loop & servers' },
        { name: 'Express.js', note: 'REST APIs & middlewares' },
        { name: 'FastAPI', note: 'High performance async Python' },
        { name: 'Microservices', note: 'Decoupled services' }
      ]
    }
  },

  // 8. Experience: Software Engineering Intern
  {
    id: 'exp-internship',
    type: 'experience',
    board: 'Experience',
    title: 'Software Engineering Internship Milestone',
    shortDescription: 'Built full-stack web applications, refactored API routes, and developed accessible React UI components.',
    fullDescription: 'Collaborated on end-to-end full-stack web applications, architecting responsive UI modules and writing performant backend API endpoints.',
    image: '/src/assets/images/project_roledar_1790105017179.jpg',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'internship.log',
    showGithub : false,
    showDemo : false,
    tags: ['Software Engineering', 'React', 'REST APIs', 'Testing', 'Agile'],
    date: 'Summer 2024',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      organization: 'Technology Solutions & Product Lab',
      role: 'Full-Stack Engineering Intern',
      highlights: [
        'Refactored legacy REST endpoints, improving query execution time by 28% across high-volume routes',
        'Developed 12+ modular React components aligned with accessibility and design system guidelines',
        'Authored automated test suites and participated in daily code reviews and sprint planning'
      ]
    }
  },

  // 9. Experience: Hackathon Finalist
  {
    id: 'exp-hackathon',
    type: 'experience',
    board: 'Experience',
    title: 'Hackathon Finalist & Top Innovator Sprint',
    shortDescription: 'Spearheaded technical prototype development within 36 hours, ranking in top 5 out of 140+ teams.',
    fullDescription: 'Built an assistive community intelligence platform under intense time constraints, presenting to industry mentors and winning top honors.',
    image: '/src/assets/images/project_hangout_1790105032086.jpg',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'hackathon.showcase',
    tags: ['Hackathon', '36-Hour Sprint', 'Top 5', 'Rapid Prototyping'],
    date: '2024',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      organization: 'National Collegiate Innovation Hackathon',
      role: 'Team Lead & Frontend Architect',
      highlights: [
        'Ranked in top 5 out of 140+ competing engineering teams nationwide',
        'Led the frontend architecture and real-time API integrations within 36 consecutive hours',
        'Pitched the prototype to industry leaders, highlighting technical feasibility and user impact'
      ]
    }
  },

  // 10. Skills: Frontend & Design Systems
  {
    id: 'skill-frontend',
    type: 'skill',
    board: 'Skills Toolbox',
    title: 'Frontend Development & Interface Craft',
    shortDescription: 'Modern responsive web applications crafted with React 19, TypeScript, Tailwind CSS, and fluid motion.',
    fullDescription: 'Crafting accessible, human-friendly web applications with clean visual hierarchies, smooth micro-interactions, and robust state management.',
    image: '/src/assets/images/project_finguard_1790105057391.jpg',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'tech.frontend',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive'],
    date: 'Skills Stack',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      skillsList: [
        { name: 'React 19', note: 'Hooks, suspense & modern architecture' },
        { name: 'TypeScript', note: 'Strongly typed interfaces & contracts' },
        { name: 'Tailwind CSS', note: 'Modular responsive design' },
        { name: 'Performance', note: 'Lighthouse 95+ web vitals' }
      ]
    }
  },

  // 11. Experience: Technical Council Leadership
  {
    id: 'exp-council',
    type: 'experience',
    board: 'Experience',
    title: 'Technical Core Coordinator & Student Outreach',
    shortDescription: 'Organizing developer bootcamps, technical workshops, and peer mentorship reaching 250+ students.',
    fullDescription: 'Serving as Core Technical Coordinator for the Department Information Technology Council. Organizing developer bootcamps, hands-on workshops, and hackathons.',
    image: '/src/assets/images/pinterest_board_banner_1790105479740.jpg',
    aspectRatio: 'aspect-[16/9]',
    linkText: 'council.lead',
    tags: ['Leadership', 'Workshops', 'Mentorship', 'Community Building'],
    date: '2023 – Present',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      organization: 'Department Information Technology Council',
      role: 'Core Technical Coordinator',
      highlights: [
        'Organized 4 hands-on developer workshops on modern web technologies reaching 250+ student participants',
        'Mentored junior students in data structures, git collaboration, and foundational web engineering',
        'Curated hackathon problem statements bridging theoretical curriculum with practical industry challenges'
      ]
    }
  },

  // 12. Beyond Code: Typography & Visual Aesthetics
  {
    id: 'beyond-typography',
    type: 'beyond',
    board: 'Beyond Code',
    title: 'Editorial Typography & Warm Color Palettes',
    shortDescription: 'Exploring editorial grids, serif pairings, warm cream surfaces, and intentional micro-interactions.',
    fullDescription: 'Good software is deeply functional; extraordinary software also treats human perception with care. Exploring typography pairings, tactile physics, and soft muted aesthetics.',
    image: '/src/assets/images/board_dance_creative_1790105068857.jpg',
    aspectRatio: 'aspect-[3/4]',
    linkText: 'design.study',
    tags: ['Typography', 'Editorial Design', 'Color Harmony', 'Micro-interactions'],
    date: 'Creative Study',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      highlights: [
        'Curating warm muted palettes (blush, sage, dusty blue, soft lavender)',
        'Pairing characterful serif display fonts with clean modern geometric sans-serifs',
        'Studying cognitive ergonomics and how subtle visual rhythm reduces cognitive load'
      ]
    }
  }
];

export const BOARDS_LIST = [
  { id: 'All', name: 'All Pins', count: PINS.length },
  { id: 'Projects', name: '📁 Projects', count: PINS.filter(p => p.board === 'Projects').length },
  { id: 'About Me', name: '💡 About Me', count: PINS.filter(p => p.board === 'About Me').length },
  { id: 'Skills Toolbox', name: '⚡ Skills Toolbox', count: PINS.filter(p => p.board === 'Skills Toolbox').length },
  { id: 'Experience', name: '🏆 Experience', count: PINS.filter(p => p.board === 'Experience').length },
  { id: 'Beyond Code', name: '🩰 Beyond Code', count: PINS.filter(p => p.board === 'Beyond Code').length }
];

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  year: string;
  tags: string[];
}

export const PROJECTS = PINS.filter(p => p.type === 'project').map(p => ({
  id: p.id,
  title: p.title,
  shortDescription: p.shortDescription,
  year: p.date,
  tags: p.tags
}));

export const EXPERIENCES = PINS.filter(p => p.type === 'experience').map(p => ({
  id: p.id,
  title: p.title,
  organization: p.metadata?.organization || 'Engineering Organization',
  period: p.date,
  description: p.shortDescription
}));

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [{ name: 'Python' }, { name: 'TypeScript' }, { name: 'Java' }, { name: 'C++' }, { name: 'SQL' }]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [{ name: 'Node.js' }, { name: 'Express' }, { name: 'FastAPI' }, { name: 'REST APIs' }]
  }
];
