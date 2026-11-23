import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, AchievementItem } from './types';

export const HERO_DATA = {
  name: "Pratyasha Basak",
  headline: "Frontend Engineer & Data Specialist | bridging dynamic user interfaces with data science and analytics",
  subheadline: "B.Tech Computer Science student specializing in building responsive frontend systems, interactive data dashboards, and predictive model pipelines.",
  email: "prattub7@gmail.com",
  phone: "+91-6291525486",
  github: "https://github.com/pratyasha7",
  linkedin: "https://www.linkedin.com/in/pratyasha-basak-9787b5291/"
};

export const ABOUT_DATA = {
  bio: "Frontend Engineer & Data Specialist with a strong foundation in Computer Science, bridging dynamic user interfaces with data science and analytics workflows. Analytical problem-solver experienced in transforming complex analytical backends into intuitive frontend systems—from architecting modular UI data layers and geospatial visualizations to integrating predictive ML endpoints and semantic search (RAG) pipelines. Proficient in modern JavaScript/React, Python, SQL, and database management, with a track record of enforcing data integrity, optimizing frontend data ingestion, and delivering scalable applications within Agile and Scrum environments."
};

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 65 },
      { name: "C++", level: 60 },
      { name: "C", level: 60 },
      { name: "JavaScript", level: 75 }
    ]
  },
  {
    title: "Fullstack & Cloud",
    skills: [
      { name: "Firebase (Auth, Firestore, Hosting)", level: 75 },
      { name: "REST APIs", level: 70 },
      { name: "Data Pipelines", level: 65 },
      { name: "MySQL", level: 65 },
      { name: "Data Validation & Integrity", level: 75 }
    ]
  },
  {
    title: "Machine Learning & Statistics",
    skills: [
      { name: "Supervised & Unsupervised Learning", level: 75 },
      { name: "Linear & Logistic Regression", level: 75 },
      { name: "SVM / Random Forest / Decision Trees", level: 75 },
      { name: "Naive Bayes / KNN / K-Means Clustering", level: 75 },
      { name: "Regularization (Ridge & Lasso)", level: 75 },
      { name: "Data Preprocessing (Pandas & NumPy)", level: 85 },
      { name: "Tensorflow (Basic)", level: 50 }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 60 },
      { name: "GitHub / GitLab", level: 65 },
      { name: "Modular Architecture", level: 90 },
      { name: "CI/CD (basic)", level: 60 }
    ]
  },
  {
    title: "Data Visualization & BI",
    skills: [
      { name: "Apache Superset (Familiar)", level: 60 },
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "Chart.js", level: 85 }
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Material-UI (MUI)", level: 80 },
      { name: "React-Leaflet / Leaflet", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Streamlit", level: 90 },
      { name: "HTML5 / CSS3", level: 85 }
    ]
  },
  {
    title: "Generative AI",
    skills: [
      { name: "Gemini", level: 80 },
      { name: "Claude", level: 80 },
      { name: "Google AI Studio", level: 75 },
      { name: "ChatGPT", level: 85 }
    ]
  }
];

// INTEGRATED EXPERIENCE DATA (Exactly as requested)
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    company: "Harit Vikas Technologies Pvt. Ltd.",
    period: "Jan 2026 – Present",
    linkedinUrl: "https://www.linkedin.com/company/harit-vikas/posts/?feedView=all",
    bullets: [
      "Saaya MRV Platform: Reorganized the platform’s core React frontend to use reusable, modular components, simplifying feature integration and maintainability across 15+ modules.",
      "Built a unified data adapter layer in TypeScript connecting the frontend directly to Google Firestore, REST APIs, and satellite imagery—validating data and reducing source integration time by ~60%.",
      "Created an interactive 24-hour timeline player on a React-Leaflet map for smooth, step-by-step coordinate tracking of tracking pointers.",
      "Developed interactive charts and map overlays displaying satellite-based plant health (NDVI) data over time to monitor environmental changes.",
      "Created an automated map placement tool generating 500+ location markers from coordinate datasets (cutting down manual entry by 90%) and built bulk CSV upload with Leaflet marker cluster group deletions.",
      "Resolved critical package and compiler conflicts (including Webpack and TypeScript targets) to ensure platform stability across updates."
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
      "Implemented Python-based AI and ML workflows covering search algorithms, heuristic problem-solving, and data preprocessing pipelines.",
      "Applied structured data handling and modular workflow design to build end-to-end ML pipelines, reinforcing feature engineering, model evaluation, and data validation.",
      "Collaborated on code reviews and version control workflows using Git to maintain code quality and system reliability across iterative development cycles."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    title: "DART — Decentralized Triangulation System",
    category: "Systems & AI/ML",
    categories: ["Systems/Backend", "AI/ML"],
    description: "Edge-computed acoustic surveillance engine designed to classify gunshot transients against ambient environmental noise and perform decentralized triangulation.",
    bullets: [
      "Developed an edge-computed acoustic surveillance engine using an INT8 quantized TensorFlow Lite deep neural network to classify gunshot transients against ambient environmental noise from sliding-window Mel spectrograms.",
      "Implemented real-time digital signal processing (DSP) workflows in Python, applying bandpass filtering, dynamic energy thresholding, and continuous spectrogram frame buffering.",
      "Integrated local edge inference with a Holochain peer-to-peer Distributed Hash Table (DHT) network by constructing custom Message Pack-encoded WebSocket RPC clients.",
      "Built decentralized consensus and validation zomes compiled to WebAssembly (WASM) to cryptographically verify multi-sensor acoustic time-difference-of-arrival (TDOA) claims against speed-of-sound constraints before DHT commitment.",
      "Simulated multi-node Kitsune gossip synchronization across isolated sandbox conductors to validate fault-tolerant acoustic event logging without a centralized backend."
    ],
    technologies: ["TensorFlow Lite", "WebAssembly (WASM)", "Holochain", "Python", "WebSockets", "DSP", "P2P", "INT8 Quantization"],
    githubUrl: "https://github.com/pratyasha7",
    demoUrl: "#"
  },
  {
    id: "project-2",
    title: "Saaya MRV Platform (Opensource Project)",
    category: "Systems/Backend",
    description: "Production architecture for automated environmental reporting with satellite pipelines, featuring a unified source adapter layer and automated georeferenced data management.",
    bullets: [
      "Reorganized the platform’s core React frontend to use reusable, modular components, simplifying feature integration and maintainability across 15+ modules.",
      "Built a unified data adapter layer in TypeScript connecting frontend to Google Firestore, REST APIs, and satellite imagery, reducing data source integration time by ~60%.",
      "Created an interactive 24-hour timeline player on a React-Leaflet map for smooth, step-by-step coordinate tracking of tracking pointers.",
      "Developed interactive charts and map overlays displaying satellite-based plant health (NDVI) data over time to monitor environmental changes.",
      "Created an automated map placement tool generating 500+ location markers from coordinate datasets and built bulk CSV upload with Leaflet marker clusters."
    ],
    technologies: ["React", "TypeScript", "Firestore", "REST APIs", "Leaflet", "GeoTIFF"],
    gitlabUrl: "https://gitlab.com/project-saaya/saaya/-/tree/feature/poi-marker-update?ref_type=heads",
    demoUrl: "#"
  },
  {
    id: "project-3",
    title: "ResearchIQ — AI Scientific Paper Knowledge Engine",
    category: "AI/ML",
    description: "AI-powered scientific paper knowledge engine and literature workspace featuring hybrid semantic search, ChromaDB vector RAG retrieval, and real-time generative research synthesis.",
    bullets: [
      "Engineered a dual-arm hybrid search pipeline blending lexical keyword matching with ChromaDB vector similarity, scientific acronym expansion (LLM, GNN, NERF), and a 5-factor weighted reranking algorithm.",
      "Integrated an embedded AI Literature Assistant utilizing Google Gemini 2.5 Flash with ChromaDB RAG context injection across a 5,000-paper catalog, featuring deterministic grounded fallback.",
      "Implemented <2ms semantic paper recommendations using 3,000 precomputed nearest-neighbor relationship edges, dynamic vector embedding fallback, and multi-format citation export (BibTeX, APA, MLA, RIS).",
      "Built collaborative research workspaces in Next.js 15 (React 19) and FastAPI with Kanban task pipelines, markdown notes, personal libraries, and 34,700+ discipline taxonomy filters."
    ],
    technologies: ["FastAPI", "Python", "Next.js 15", "ChromaDB", "Gemini 2.5 Flash", "ONNX", "SQLite", "RAG", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/pratyasha7/AI-Scientific-Paper-Knowledge-Engine",
    demoUrl: "#"
  },
  {
    id: "project-4",
    title: "SpotNFix — Crowdsourced Civic Issue Reporting Platform",
    category: "Systems/Backend",
    description: "Web-based system for reporting civic issues using HTML, CSS, JavaScript, and Firebase, featuring interactive map integration and on-device intelligent content validation.",
    bullets: [
      "Built a web-based system for reporting civic issues with robust frontend flows using HTML, CSS, and vanilla JavaScript.",
      "Integrated Google Maps API for auto-location and interactive issue visualization directly on high-contrast overlays.",
      "Implemented an image classification pipeline by integrating pre-trained image classification endpoints for automated content verification, duplicate detection, and issue categorization to reduce invalid report submissions."
    ],
    technologies: ["JavaScript", "Firebase", "Google Maps API", "Python", "Image Classification"],
    githubUrl: "https://github.com/pratyasha7/spot-n-fix",
    demoUrl: "#"
  },
  {
    id: "project-5",
    title: "ReachInbox — Distributed Outbound Email Dispatcher",
    category: "Systems/Backend",
    description: "Full-stack outbound cold email scheduler and automation platform engineered for delayed multi-recipient dispatches, hourly provider rate-limiting, and live observability.",
    bullets: [
      "Engineered a resilient distributed queue pipeline with BullMQ & Redis, executing non-blocking delayed email batches with configurable per-recipient intervals (2–5s) and DB idempotency checks.",
      "Implemented sliding-window provider rate limiting (20/hr cap) using atomic Redis Sorted Sets (ZCOUNT/ZADD) with automated job rescheduling and real-time Slack webhook alerts.",
      "Built a real-time outreach dashboard in Next.js (App Router, React 19) featuring 0ms in-memory search decoupled from silent 3-second background status syncing.",
      "Integrated Google OAuth 2.0 with session persistence, modal sequence editor with CSV lead ingestion, and Prisma ORM on Neon PostgreSQL synced with Elasticsearch."
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Redis (BullMQ)", "PostgreSQL", "Prisma", "Elasticsearch", "Tailwind CSS"],
    githubUrl: "https://github.com/pratyasha7/reachinbox",
    demoUrl: "https://reachinbox-delta-three.vercel.app"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Adamas University, Kolkata",
    period: "2023 – 2027",
    score: "CGPA: 8.66"
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
    title: "Qualifier — Smart India Hackathon (Internal) 2025 and 2026",
    description: "Qualified internal college selection round comprising rigorous architectural assessment.",
    metric: "SIH",
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