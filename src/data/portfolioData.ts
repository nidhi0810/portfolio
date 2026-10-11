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
  avatar: '/src/assets/images/pfp.jpeg',
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

export const NOTIFICATIONS = [];

export const PINS: PinItem[] = [

// 3. CarbonIQ Project
{
  id: 'carboniq',
  type: 'project',
  board: 'Projects',
  title: 'CarbonIQ — Cloud Workload Carbon Intelligence',
  shortDescription: 'An agentic carbon intelligence platform that helps developers measure, analyze, and schedule cloud workloads for lower-carbon execution.',
  fullDescription: 'CarbonIQ is our Final Year Project focused on making cloud computing more environmentally aware. The platform combines workload-level carbon measurement with regional grid carbon intensity and carbon-aware scheduling to help developers understand not only how much carbon their workloads produce, but also when and where those workloads can be executed more sustainably. My primary contribution was building the CarbonIQ CLI, which acts as the bridge between CodeCarbon and Microsoft Carbon Aware SDK. The CLI allows users to run workloads, collect their emissions data through CodeCarbon, retrieve carbon-intensity and forecast data through Carbon Aware, and analyze the results to identify greener execution windows. I also worked on packaging and structuring the CLI so that the CarbonIQ tooling can be installed and used as a standalone developer tool, along with integrating the underlying carbon-aware services and preparing the project for deployment.',
  image: '/src/assets/images/carboniq.png',
  aspectRatio: 'aspect-[4/3]',
  linkText: 'carboniq.dev',
  externalUrl: 'https://github.com/Atharvasp333/CarbonIQ',
  tags: ['Python', 'CLI', 'CodeCarbon', 'CarbonAware', 'AWS', 'FastAPI', 'React', 'Agentic AI'],
  date: '2026',
  savesCount: 0,
  commentsCount: 0,
  featured: true,
  metadata: {
    role: 'Final Year Project · CLI & Carbon Intelligence Developer',
    metrics: 'Built a developer-facing CLI integrating workload emissions measurement with carbon-aware scheduling data',
    highlights: [
      'Built the CarbonIQ CLI to connect CodeCarbon workload emissions measurements with Microsoft Carbon Aware carbon-intensity and forecast data',
      'Implemented CLI workflows for running workloads, analyzing emissions, generating carbon-aware forecasts, and maintaining execution history',
      'Integrated and packaged the carbon-aware components so users can interact with the system through a single developer-friendly CLI',
      'Worked on deployment and infrastructure setup for the CarbonIQ services, including Docker-based integration and cloud components',
      'Designed the CLI as the foundation for the wider CarbonIQ platform, enabling the dashboard and agentic layer to turn raw carbon data into actionable recommendations'
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

// 9. Experience: First Open Source Contribution
{
  id: 'exp-open-source-piranha',
  type: 'experience',
  board: 'Experience',
  title: 'My First Open Source Contribution @Piranha CMS',
  shortDescription: 'A first attempt at contributing to open source, and a lot more confusing than I expected.',
  fullDescription: 'I wanted to make my first open-source contribution, but I knew I had to start somewhere that wouldn’t completely overwhelm me. I initially looked at bigger projects like OrchardCore, but they felt like way too much for a first contribution, so I settled on Piranha CMS. And even then, opening the repository for the first time was intimidating. I remember looking at the code and thinking, “Okay... where am I even supposed to start?” I had to understand a codebase I hadn’t written, figure out how the different pieces connected, and then make sense of an issue that involved concepts I wasn’t completely comfortable with yet. There were quite a few moments where I felt like I was just staring at code and hoping it would eventually make sense. What helped was slowing down and actually following the code instead of trying to understand the entire repository at once. It took much longer than I expected, and I definitely doubted myself a few times, but eventually I understood enough to make my contribution and open my first PR. It wasn’t some massive contribution, but seeing that PR there felt like a small “okay, I can actually do this” moment for me. More than anything, it made open source feel less like this intimidating thing that experienced developers do and more like something I could slowly learn to be a part of.',
  image: '/src/assets/images/piranha.png',
  aspectRatio: 'aspect-[4/3]',
  linkText: 'first-pr.log',
  showGithub: true,
  showDemo: false,
  tags: ['Open Source', '.NET', 'C#', 'GitHub'],
  date: '2026',
  savesCount: 0,
  commentsCount: 0,
  metadata: {
    organization: 'Piranha CMS',
    role: 'Open Source Contributor',
    highlights: [
      'Made my first open-source contribution to a real-world .NET project.',
      'Worked through an unfamiliar codebase and a complex issue involving existing project architecture.',
      'Submitted my first contribution and pull request through GitHub.'
    ]
  }
},


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
