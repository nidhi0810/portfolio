export interface PinItem {
  id: string;
  type: 'project' | 'education' | 'skill' | 'experience' | 'beyond';
  board: 'Projects' | 'Education' | 'Skills Toolbox' | 'Experience' | 'Beyond Code';
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
  id: 'beyond-kathak',
  type: 'beyond',
  board: 'Beyond Code',
  title: 'A Rhythm I Grew Up With',
  shortDescription: 'From kindergarten rehearsals to Madhyama Purna — a lifelong love for Kathak, rhythm, and storytelling.',
  fullDescription: 'Before I learned to code, I learned to count in taal. I have been learning Kathak since kindergarten — growing up with ghungroos, riyaaz, footwork, expressions, and stories told without words. Years later, I completed my Madhyama Purna from Gandharva Mahavidyalaya. Somewhere along the way, Kathak stopped being something I learned and became something I carried with me.',
  image: '/src/assets/images/kathak.jpg',
  aspectRatio: 'aspect-[3/4]',
  linkText: 'riyaaz.and.rhythm',
  tags: ['Kathak', 'Indian Classical Dance', 'Riyaaz', 'Storytelling'],
  date: 'Since Kindergarten',
  savesCount: 0,
  commentsCount: 0,
  featured: true,
  metadata: {
    role: 'Kathak Student & Performer',
    highlights: [
      'Learning Kathak since kindergarten',
      'Completed Madhyama Purna from Gandharva Mahavidyalaya',
      'Years of training in taal, footwork, abhinaya, and classical repertoire',
      'A practice rooted in patience, discipline, expression, and storytelling'
    ]
  }
},

  // 6. Education: Academic Foundation
  {
    id: 'about-engineering',
    type: 'education',
    board: 'Education',
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
    type: 'education',
    board: 'Education',
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
    title: 'Web Developer Intern @Palcoa Solutions Pvt. Ltd.',
    shortDescription: 'Built full-stack web applications, refactored API routes, and developed accessible React UI components.',
    fullDescription: 'Collaborated on end-to-end full-stack web applications, architecting responsive UI modules and writing performant backend API endpoints.',
    image: '/src/assets/images/palcoa.png',
    aspectRatio: 'aspect-[4/3]',
    linkText: 'internship.log',
    showGithub : false,
    showDemo : false,
    tags: ['Software Engineering', 'Bootstrap', 'REST APIs'],
    date: 'Summer 2024',
    savesCount: 0,
    commentsCount: 0,
    metadata: {
      organization: 'Technology Solutions & Product Lab',
      role: 'Full-Stack Engineering Intern',
      highlights: [
         'Engineered a salon management platform to streamline appointment scheduling and operations.',
 'Established role-based access control with secure authentication flows.',
 'Integrated Firebase Authentication to enable reliable and secure user session management and a responsive Bootstrap-based UI, enhancing overall usability and user experience.'

      ]
    }
  },
  // 9. Experience: Software Developer Intern
{
  id: 'exp-sports-reconnect',
  type: 'experience',
  board: 'Experience',
  title: 'Software Developer Intern @Sports Reconnect Pvt. Ltd.',
  shortDescription: 'Built software systems for marathon events, focusing on QR-based participant management and operational efficiency.',
  fullDescription: 'Worked on software solutions for marathon event operations, building features that simplified how participant information was managed and verified. Focused on creating reliable workflows that reduced repetitive manual work while making event-day operations easier to track.',
  image: '/src/assets/images/zemo.png',
  aspectRatio: 'aspect-[4/3]',
  linkText: 'internship.log',
  showGithub: false,
  showDemo: false,
  tags: ['Software Engineering', 'QR Systems', 'Event Technology'],
  date: '2024 – 2025',
  savesCount: 0,
  commentsCount: 0,
  metadata: {
    organization: 'Sports Reconnect Pvt. Ltd.',
    role: 'Software Developer Intern',
    highlights: [
      'Developed a QR-based bib management workflow that connected participant registration with digital identification, making marathon check-in and verification faster and more organized.',
      'Built event tracking and reporting capabilities that transformed operational data into a clearer view of participant activity, reducing reliance on manual verification and record-keeping.'
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


  // 12. Beyond Code: Typography & Visual Aesthetics
{
  id: 'four-years-of-dance',
  type: 'beyond',
  board: 'Beyond Code',
  title: 'Four Years of Dance, Rhythm & Teamwork',
  shortDescription: 'Four years with the VESIT Dance Crew, performing, competing, and creating memories far beyond the classroom.',
  fullDescription: 'For four years of engineering, dance has been my constant outside the world of code. As a member of the VESIT Dance Crew (VDC), I performed at college and intercollegiate competitions, worked through countless rehearsals, and grew alongside a team that made every performance worth the hours behind it. We went on to win several intercollegiate competitions — but the real takeaway was learning how much discipline, trust, and collective energy it takes to make something look effortless on stage.',
  image: '/src/assets/images/vdc.png',
  aspectRatio: 'aspect-[3/4]',
  linkText: 'four.years.of.dance',
  tags: ['VESIT Dance Crew', 'Performance', 'Teamwork', 'Discipline'],
  date: '2013–2027 · VDC',
  savesCount: 0,
  commentsCount: 0,
  metadata: {
    highlights: [
      '4 years as part of the VESIT Dance Crew (VDC)',
      'Performed at multiple college and intercollegiate competitions',
      'Won several intercollegiate dance competitions',
      'Learned the discipline, collaboration, and trust behind every performance'
    ]
  }
}
];

export const BOARDS_LIST = [
  { id: 'All', name: 'All Pins', count: PINS.length },
  { id: 'Projects', name: '📁 Projects', count: PINS.filter(p => p.board === 'Projects').length },
  { id: 'Education', name: '💡 Education', count: PINS.filter(p => p.board === 'Education').length },
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
