import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'We are looking for an experienced Frontend Developer to join our dynamic team and help build cutting-edge web applications.',
    requirements: [
      '5+ years of experience with React.js',
      'Strong knowledge of TypeScript',
      'Experience with modern CSS frameworks',
      'Understanding of responsive design principles',
      'Excellent problem-solving skills'
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with design and backend teams',
      'Write clean, maintainable code',
      'Participate in code reviews',
      'Mentor junior developers'
    ],
    benefits: [
      'Health insurance',
      'Remote work options',
      '401(k) matching',
      'Professional development budget',
      'Flexible PTO'
    ],
    postedDate: '2024-01-15',
    category: 'Engineering',
    experience: 'Senior',
    logo: '💼'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateLab',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    description: 'Join our product team to drive innovation and deliver exceptional user experiences.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical skills',
      'Experience with Agile methodologies',
      'Excellent communication skills',
      'Technical background preferred'
    ],
    responsibilities: [
      'Define product vision and strategy',
      'Work with cross-functional teams',
      'Prioritize feature development',
      'Analyze user data and feedback',
      'Drive product launches'
    ],
    benefits: [
      'Comprehensive health coverage',
      'Stock options',
      'Commuter benefits',
      'Team building events',
      'Learning stipend'
    ],
    postedDate: '2024-01-18',
    category: 'Product',
    experience: 'Mid-level',
    logo: '🚀'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Create beautiful, intuitive user experiences for our suite of products.',
    requirements: [
      '4+ years of UX/UI design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio demonstrating design skills',
      'Understanding of user research methodologies',
      'Knowledge of design systems'
    ],
    responsibilities: [
      'Create wireframes and prototypes',
      'Conduct user research',
      'Design intuitive interfaces',
      'Collaborate with developers',
      'Maintain design systems'
    ],
    benefits: [
      'Health and dental insurance',
      'Remote-first culture',
      'Equipment allowance',
      'Unlimited PTO',
      'Conference attendance'
    ],
    postedDate: '2024-01-20',
    category: 'Design',
    experience: 'Mid-level',
    logo: '🎨'
  },
  {
    id: '4',
    title: 'Backend Engineer',
    company: 'CloudScale Inc',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    description: 'Build scalable backend systems that power millions of users worldwide.',
    requirements: [
      '5+ years of backend development experience',
      'Strong knowledge of Node.js or Python',
      'Experience with cloud platforms (AWS/GCP)',
      'Database design expertise',
      'Understanding of microservices architecture'
    ],
    responsibilities: [
      'Design and implement APIs',
      'Optimize database performance',
      'Ensure system reliability',
      'Write technical documentation',
      'Participate in on-call rotation'
    ],
    benefits: [
      'Competitive salary',
      'Equity package',
      'Health benefits',
      'Remote work flexibility',
      'Professional growth opportunities'
    ],
    postedDate: '2024-01-22',
    category: 'Engineering',
    experience: 'Senior',
    logo: '⚙️'
  },
  {
    id: '5',
    title: 'Data Analyst',
    company: 'DataDriven Co',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$80,000 - $110,000',
    description: 'Turn data into actionable insights that drive business decisions.',
    requirements: [
      '3+ years of data analysis experience',
      'Proficiency in SQL and Python',
      'Experience with BI tools (Tableau, Power BI)',
      'Strong statistical knowledge',
      'Excellent presentation skills'
    ],
    responsibilities: [
      'Analyze complex datasets',
      'Create reports and dashboards',
      'Identify trends and patterns',
      'Present findings to stakeholders',
      'Collaborate with business teams'
    ],
    benefits: [
      'Health insurance',
      'Hybrid work model',
      'Professional development',
      '401(k) plan',
      'Wellness programs'
    ],
    postedDate: '2024-01-25',
    category: 'Data',
    experience: 'Mid-level',
    logo: '📊'
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'Infrastructure Pro',
    location: 'Remote',
    type: 'Full-time',
    salary: '$115,000 - $145,000',
    description: 'Streamline our deployment processes and maintain robust infrastructure.',
    requirements: [
      '4+ years of DevOps experience',
      'Strong knowledge of Docker and Kubernetes',
      'Experience with CI/CD pipelines',
      'Proficiency in scripting languages',
      'Cloud platform expertise'
    ],
    responsibilities: [
      'Manage cloud infrastructure',
      'Automate deployment processes',
      'Monitor system performance',
      'Implement security best practices',
      'Troubleshoot production issues'
    ],
    benefits: [
      'Fully remote position',
      'Competitive compensation',
      'Health and wellness benefits',
      'Home office setup',
      'Flexible schedule'
    ],
    postedDate: '2024-01-28',
    category: 'Engineering',
    experience: 'Mid-level',
    logo: '🔧'
  },
  {
    id: '7',
    title: 'Marketing Manager',
    company: 'BrandBoost',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$95,000 - $130,000',
    description: 'Lead marketing initiatives and grow our brand presence.',
    requirements: [
      '5+ years of marketing experience',
      'Strong understanding of digital marketing',
      'Experience with marketing automation tools',
      'Excellent writing and communication skills',
      'Data-driven mindset'
    ],
    responsibilities: [
      'Develop marketing strategies',
      'Manage marketing campaigns',
      'Analyze campaign performance',
      'Collaborate with sales team',
      'Manage marketing budget'
    ],
    benefits: [
      'Health benefits',
      'Performance bonuses',
      'Flexible work arrangements',
      'Professional development',
      'Team retreats'
    ],
    postedDate: '2024-02-01',
    category: 'Marketing',
    experience: 'Senior',
    logo: '📢'
  },
  {
    id: '8',
    title: 'Junior Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Denver, CO',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Kickstart your career with a fast-growing startup building innovative products.',
    requirements: [
      '1-2 years of development experience',
      'Knowledge of JavaScript/TypeScript',
      'Familiarity with React and Node.js',
      'Basic understanding of databases',
      'Eagerness to learn'
    ],
    responsibilities: [
      'Build features across the stack',
      'Write tests for your code',
      'Participate in team meetings',
      'Learn from senior developers',
      'Contribute to code reviews'
    ],
    benefits: [
      'Startup equity',
      'Health insurance',
      'Learning budget',
      'Casual work environment',
      'Growth opportunities'
    ],
    postedDate: '2024-02-03',
    category: 'Engineering',
    experience: 'Junior',
    logo: '👨‍💻'
  },
  {
    id: '9',
    title: 'HR Manager',
    company: 'PeopleFirst Inc',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$85,000 - $115,000',
    description: 'Shape our company culture and support our growing team.',
    requirements: [
      '5+ years of HR experience',
      'Knowledge of employment laws',
      'Experience with HRIS systems',
      'Strong interpersonal skills',
      'Conflict resolution expertise'
    ],
    responsibilities: [
      'Manage recruitment processes',
      'Handle employee relations',
      'Develop HR policies',
      'Conduct performance reviews',
      'Organize training programs'
    ],
    benefits: [
      'Comprehensive benefits package',
      'Work-life balance',
      'Professional certifications support',
      'Collaborative environment',
      'Career advancement'
    ],
    postedDate: '2024-02-05',
    category: 'Human Resources',
    experience: 'Senior',
    logo: '👥'
  },
  {
    id: '10',
    title: 'Sales Representative',
    company: 'SalesForce Pro',
    location: 'Miami, FL',
    type: 'Full-time',
    salary: '$60,000 - $90,000 + Commission',
    description: 'Drive revenue growth by building relationships with clients.',
    requirements: [
      '2+ years of B2B sales experience',
      'Excellent communication skills',
      'CRM experience (Salesforce preferred)',
      'Self-motivated and goal-oriented',
      'Strong negotiation skills'
    ],
    responsibilities: [
      'Generate and qualify leads',
      'Conduct product demonstrations',
      'Close deals and meet quotas',
      'Maintain customer relationships',
      'Track sales activities in CRM'
    ],
    benefits: [
      'Uncapped commission',
      'Health benefits',
      'Sales contests and incentives',
      'Career progression',
      'Training and mentorship'
    ],
    postedDate: '2024-02-07',
    category: 'Sales',
    experience: 'Mid-level',
    logo: '💰'
  },
  {
    id: '11',
    title: 'Mobile App Developer',
    company: 'AppMakers Studio',
    location: 'Portland, OR',
    type: 'Contract',
    salary: '$95,000 - $125,000',
    description: 'Build native mobile applications for iOS and Android platforms.',
    requirements: [
      '4+ years of mobile development experience',
      'Proficiency in Swift and Kotlin',
      'Experience with React Native or Flutter',
      'Understanding of mobile UI/UX principles',
      'App Store deployment experience'
    ],
    responsibilities: [
      'Develop mobile applications',
      'Optimize app performance',
      'Implement new features',
      'Fix bugs and issues',
      'Collaborate with designers'
    ],
    benefits: [
      'Flexible contract terms',
      'Remote work option',
      'Competitive hourly rate',
      'Interesting projects',
      'Professional network'
    ],
    postedDate: '2024-02-08',
    category: 'Engineering',
    experience: 'Mid-level',
    logo: '📱'
  },
  {
    id: '12',
    title: 'Content Writer',
    company: 'ContentCraft',
    location: 'Remote',
    type: 'Part-time',
    salary: '$45,000 - $65,000',
    description: 'Create engaging content that resonates with our audience.',
    requirements: [
      '3+ years of content writing experience',
      'Excellent grammar and writing skills',
      'SEO knowledge',
      'Research skills',
      'Portfolio of published work'
    ],
    responsibilities: [
      'Write blog posts and articles',
      'Create social media content',
      'Optimize content for SEO',
      'Edit and proofread content',
      'Collaborate with marketing team'
    ],
    benefits: [
      'Work from anywhere',
      'Flexible hours',
      'Health stipend',
      'Professional development',
      'Creative freedom'
    ],
    postedDate: '2024-02-10',
    category: 'Marketing',
    experience: 'Mid-level',
    logo: '✍️'
  }
];
