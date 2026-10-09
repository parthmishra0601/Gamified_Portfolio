export const profile = {
  name: 'Parth Mishra',
  role: 'Software Engineer',
  focus: 'Backend systems, cloud infrastructure, and full-stack development',
  summary: 'I build fault-tolerant, high-performance systems across the software development lifecycle, from Go infrastructure and Kubernetes to React.js applications, Python APIs, and Java/Spring Boot services on AWS.',
  currentTitle: 'SDE Intern',
  currentCompany: 'Tally Solutions',
  degree: 'B.Tech, Computer Science and Engineering',
  institution: 'SRM Institute of Science and Technology',
  cgpa: '8.5 / 10',
  email: 'mishra.parth04@gmail.com',
  phone: '+91 9971546328',
  resume: 'https://drive.google.com/file/d/1qwcJ3EsonK7YD57cKV4ICNJ_AzDv1dBm/view?usp=sharing',
  github: 'https://github.com/parthmishra0601',
  linkedin: 'https://www.linkedin.com/in/parthmishra06/',
}

export const experience = [
  {
    role: 'SDE Intern',
    company: 'Tally Solutions',
    meta: 'Bangalore, India · May – August 2026',
    summary: 'Built an in-house Go streaming platform for TallyPrime (64-bit, Windows-only), replacing paid third-party tools.',
    details: [
      'Developed Go streaming and TCP server infrastructure for TallyPrime.',
      'Used Docker and Kubernetes to build fault-tolerant, high-performance systems.',
      'Applied CI/CD, quality assurance, OOP, and data structures and algorithms across the software development lifecycle.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Zummit Infolabs',
    meta: 'April – August 2024',
    summary: 'Built full-stack applications with React.js frontends and Python REST APIs.',
    details: [
      'Contributed throughout the software development lifecycle, applying OOP, data structures and algorithms, CI/CD, and QA.',
      'Improved matching accuracy by 85%.',
    ],
  },
]

export const projects = [
  {
    name: 'PolyGlot',
    subtitle: 'Multi-database enterprise backend',
    stack: 'Java 21 · Spring Boot 3.2.x · Python 3.13 · AWS',
    link: 'https://github.com/parthmishra0601/PolyGlot',
    details: [
      'Built a Python core engine with SQLite and a Java/Spring Boot REST API.',
      'Supports SQL Server, Oracle, PostgreSQL, and MySQL, plus CSV, TSV, JSON, PDF, DOCX, and XLSX ingestion.',
    ],
  },
  {
    name: 'CodeGuard',
    subtitle: 'Zero-command code review and GitHub automation',
    stack: 'Python · GitHub CLI · Flask · Black · Pylint · Pre-commit',
    link: 'https://github.com/parthmishra0601/GithubPush-20260823-213848920747',
    details: [
      'Runs automated review checks before GitHub push and blocks submissions that violate configured quality thresholds.',
      'Creates GitHub repositories, installs pre-commit hooks, and streamlines deployment through a local CLI and dashboard.',
      'Provides a web dashboard, native client, and background monitor for repository automation without manual commands.',
    ],
  },
  {
    name: 'BookBot',
    subtitle: 'Digital library system',
    stack: 'React · Node.js · Express.js · MySQL · Firebase',
    details: [
      'Designed a normalized MySQL schema for authentication, inventory, rentals, and notifications; indexing improved query performance by 25%.',
      'Optimized search and recommendation queries, reducing transaction failures by 20% and average response time by 30%.',
    ],
  },
  {
    name: 'TaskAutomator',
    subtitle: 'Real-time system resource optimizer',
    stack: 'Python · FastAPI · Windows APIs',
    link: 'https://github.com/parthmishra0601/TaskAutomator/tree/codeguard/20260829-183132296305',
    details: [
      'Monitors CPU, RAM, disk, and per-process usage at sub-second intervals.',
      'Provides live metrics, alert thresholds, and task controls; stress testing reduced memory usage by more than 50%.',
    ],
  },
]

export const skillGroups = [
  { name: 'Languages', skills: 'C · C++ · Java · Python · SQL · JavaScript · HTML · CSS' },
  { name: 'Backend & frameworks', skills: 'Spring Boot · Node.js · Express.js · FastAPI · React.js · Next.js · RESTful APIs · MERN stack' },
  { name: 'Cloud & DevOps', skills: 'AWS · Docker · Kubernetes · CI/CD' },
  { name: 'Databases & security', skills: 'Oracle · MySQL · MongoDB · PostgreSQL · SQLite · Redis · Firebase · OAuth/JWT' },
  { name: 'Quality & reliability', skills: 'Unit testing · API testing · Observability · Automation & QA · Risk management · System monitoring' },
  { name: 'Engineering practices', skills: 'SOLID · OOP · API design · Data structures & algorithms' },
]

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  specialization: 'Cloud Computing',
  institution: 'SRM Institute of Science and Technology',
  location: 'Chennai, India',
  dates: 'September 2022 – September 2026',
  cgpa: '8.5 / 10',
  coursework: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management Systems'],
}

export const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2026 Certified Architect Associate',
    issuer: 'Oracle',
    issued: 'Jul 2026',
    expires: 'Jul 2028',
    credentialUrl: 'https://drive.google.com/file/d/1Q5ET7ZA0Z5Bf9432p0AsUzbbC5cDmBsA/view?usp=sharing',
  },
  { name: 'Programming in Java', issuer: 'NPTEL' },
  { name: 'Computer Architecture', issuer: 'NPTEL' },
]

export const achievements = [
  { name: 'CodeChef', detail: '250+ problems solved · Silver badge' },
  { name: 'LeetCode', detail: '574 submissions in the past year · SQL 50' },
  { name: 'Matching accuracy', detail: 'Improved by 85% during software development work' },
]
