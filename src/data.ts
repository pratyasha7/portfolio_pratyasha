import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, AchievementItem } from './types';

export const HERO_DATA = {
  name: "Pratyasha Basak",
  headline: "Engineering Scalable Backend Systems & Mathematically-Grounded ML Applications",
  subheadline: "B.Tech Computer Science student specializing in end-to-end system design, high-performance data pipelines, and predictive model development.",
  email: "prattub7@gmail.com",
  phone: "+91-6291525486",
  github: "https://github.com/pratyasha7",
  linkedin: "https://www.linkedin.com/in/pratyasha-basak-9787b5291/"
};

export const ABOUT_DATA = {
  bio: "Software Engineer with a strong foundation in Computer Science, focused on building scalable backend systems, data pipelines, and mathematically-grounded ML applications. Experienced in end-to-end system design — from API-based data ingestion and abstraction layers to predictive algorithm implementation and model integration — with a strict focus on data integrity and system reliability. Proficient in Python, SQL, and modern software engineering practices including version control, modular architecture, and collaborative development. Proactive problem-solver with a track record of delivering measurable engineering impact in production-facing environments."
};

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 }
    ]
  },
  {
    title: "Backend & Data Engineering",
    skills: [
      { name: "REST APIs", level: 92 },
      { name: "Data Pipelines", level: 90 },
      { name: "Flask", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "Data Validation & Integrity", level: 94 }
    ]
  },
  {
    title: "Machine Learning & Statistics",
    skills: [
      { name: "Supervised & Unsupervised Learning", level: 92 },
      { name: "Linear & Logistic Regression", level: 90 },
      { name: "SVM / Random Forest / Decision Trees", level: 88 },
      { name: "Naive Bayes / KNN / K-Means", level: 85 },
      { name: "Regularization (Ridge & Lasso)", level: 88 },
      { name: "Data Preprocessing (Pandas & NumPy)", level: 94 }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub / GitLab", level: 92 },
      { name: "Modular Architecture", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "CI/CD (basic)", level: 75 },
      { name: "Advanced Excel (VLOOKUP, Pivot)", level: 85 }
    ]
  },
  {
    title: "Data Visualization & BI",
    skills: [
      { name: "Apache Superset (Familiar)", level: 70 },
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "Chart.js", level: 85 }
    ]
  },
  {
    title: "Web Technologies (Basic)",
    skills: [
      { name: "Streamlit", level: 90 },
      { name: "HTML5 / CSS3", level: 85 },
      { name: "Tailwind CSS", level: 90 }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    company: "Harit Vikas Technologies Pvt. Ltd.",
    period: "Jan 2026 – Present",
    linkedinUrl: "https://www.linkedin.com/company/harit-vikas/posts/?feedView=all",
    bullets: [
      "Developing Saaya, an open-source, map-first climate platform designed to visualize environmental data and create digital shadows of real-world places, supporting academic research. Reorganized the core React/TypeScript frontend and integrated client-side Firebase data adapters, reducing database integration overhead by 60%. Engineered an interactive 24-hour Leaflet timeline player for smooth coordinate tracking , integrated satellite NDVI overlays , and built bulk Excel/CSV ingestion tools, while resolving Webpack conflicts to ensure robust platform stability."
    ]
  },
  {
    role: "Research Intern",
    company: "IEEE SMC Student Branch Chapter, KGEC",
    period: "May 2026 – August 2026",
    linkedinUrl: "https://www.linkedin.com/company/ieee-smc-sbc-kgec/posts/?feedView=all",
    bullets: [
      "Selected for the highly competitive Data Science and Intelligent Analytics track (Rank 16/80; 21.05% acceptance rate from 380+ applicants nationwide); conducting research in data-driven pattern analysis and intelligent systems under IEEE SMC supervision."
    ]
  },
  {
    role: "Artificial Intelligence Trainee",
    company: "Infosys Springboard",
    period: "Oct 2025 – Dec 2025",
    bullets: [
      "Implemented Python-based AI and ML workflows covering search algorithms, heuristic problem-solving, and data preprocessing pipelines, strengthening foundations in algorithmic thinking and scalable logic design.",
      "Applied structured data handling and modular workflow design to build end-to-end ML pipelines, reinforcing understanding of feature engineering, model evaluation, and data integrity validation.",
      "Collaborated on code reviews and version control workflows using Git, applying software engineering best practices to maintain code quality and system reliability across iterative development cycles."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    title: "AI-Based Research Paper Discovery System with Query Disambiguation (Ongoing)",
    category: "AI/ML",
    description: "Developing a scalable NLP-based information retrieval system to query, rank, and surface scientific research papers from open-access sources (arXiv API), ordered by recency and relevance score.",
    bullets: [
      "Implementing text preprocessing and concept extraction using SpaCy and regex.",
      "Designing an abbreviation disambiguation module to resolve ambiguous queries (e.g., “POP”) via user-guided selection.",
      "Building a context-aware search pipeline with query-to-concept mapping and NLP-driven concept extraction, enabling low-latency resolution of ambiguous user queries through an abbreviation disambiguation module."
    ],
    technologies: ["Python", "SpaCy", "Regex", "arXiv API", "NLP"],
    githubUrl: "https://github.com/pratyasha7/AI-Scientific-Paper-Knowledge-Engine",
    demoUrl: "#"
  },
  {
    id: "project-2",
    title: "Saaya MRV Platform (Ongoing Opensource Project)",
    category: "Systems/Backend",
    description: "Production architecture for automated environmental reporting with satellite pipelines, featuring a unified source adapter layer and automated georeferenced data management.",
    bullets: [
      "Reorganized the platform’s core React frontend to use reusable, modular components, which simplified adding new features and made the 15+ module codebase easier to maintain.",
      "Built a unified data adapter layer in TypeScript that connects the frontend directly to Google Firestore, REST APIs, and satellite imagery . This validated incoming data and reduced the time to integrate new data sources by ~60%.",
      "Created an interactive 24-hour timeline player on a React-Leaflet map. Users can play, pause, or scrub through the timeline to see smooth, step-by-step movements of tracking pointers (such as livestock) on the map. ",
      "Developed interactive charts and map overlays that display satellite-based plant health (NDVI) data over time, helping users monitor environmental changes",
      "Created an automated map placement tool that automatically generates over 500 location markers on the map from coordinate datasets. This cut down manual data entry time by 90% and prevented input errors by validating data formats.",
      "Built a feature to upload bulk map data from Excel/CSV files and implemented group-deletion tools using Leaflet marker clusters, letting users manage thousands of map points at once while validating data for errors.",
      "Fixed critical package and compiler conflicts (including Webpack and TypeScript configuration targets), which improved the platform's stability and ensured updates do not break existing features."
    ],
    technologies: ["Python", "Firestore", "REST APIs", "GeoTIFF", "NDVI Pipeline"],
    gitlabUrl: "https://gitlab.com/project-saaya/saaya/-/tree/feature/poi-marker-update?ref_type=heads",
    demoUrl: "#"
  },
  {
    id: "project-3",
    title: "SpotNFix — Crowdsourced Civic Issue Reporting Platform",
    category: "AI/ML",
    description: "Web-based system for reporting civic issues using HTML, CSS, JavaScript, and Firebase, featuring interactive map integration and on-device intelligent content validation.",
    bullets: [
      "Built a web-based system for reporting civic issues with robust frontend flows.",
      "Integrated Google Maps API for auto-location and interactive issue visualization directly on high-contrast overlays.",
      "Implemented an image classification pipeline by integrating pre-trained image classification endpoints for automated content verification, duplicate detection, and issue categorization to reduce invalid report submissions."
    ],
    technologies: ["JavaScript", "Firebase", "Google Maps API", "Python", "Image Classification"],
    githubUrl: "https://github.com/pratyasha7/spot-n-fix",
    demoUrl: "#"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Adamas University, Kolkata",
    period: "2023 – 2027",
    score: "CGPA: 8.65"
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Kalyani Public School",
    period: "2023",
    score: "Score: 83.4%"
  },
  {
    degree: "Class X (CBSE)",
    institution: "Adamas World School",
    period: "2021",
    score: "Score: 93.8%"
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  { name: "Data Analytics with Python", provider: "IIT Roorkee / NPTEL" },
  { name: "Artificial Intelligence: Search Methods for Problem Solving", provider: "IIT Madras / NPTEL" },
  { name: "The Joy of Computing with Python", provider: "IIT Ropar / NPTEL" },
  { name: "Fundamentals of Python Programming", provider: "Infosys Springboard" },
  { name: "C Programming", provider: "Great Learning Academy" }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "5 star Gold Badge in C Programming on HackerRank",
    description: "Reflected elite proficiency in logical problem solving & multi-paradigm C Programming.",
    metric: "5★ GOLD",
    iconName: "Award"
  },
  {
    id: "ach-2",
    title: "Qualifier — Smart India Hackathon (Internal) 2025",
    description: "Qualified internal college selection round comprising rigorous architectural assessment.",
    metric: "SIH-25",
    iconName: "Zap"
  },
  {
    id: "ach-3",
    title: "Clash of Coders — 2nd Round Qualifier",
    description: "Competed in high-speed algorithmic challenges and successfully reached the 2nd round.",
    metric: "ROUND 2",
    iconName: "Code"
  }
];
