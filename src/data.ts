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
    title: "Redrob Nexus — AI-Native Research Operating System (Ongoing)",
    category: "AI/ML",
    description: "Architecting an AI-native research operating system and professional network designed to consolidate paper discovery, collaborative writing, and social research sharing into a unified ecosystem.",
    bullets: [
      "Designing a hybrid semantic search and retrieval pipeline (combining BM25 keyword matching with dense vector embeddings and rerankers) to facilitate context-aware, natural language queries across open-source scientific APIs.",
      "Architecting an agentic orchestration system utilizing a multi-agent planning framework—incorporating specialized Copilot, Retrieval, Synthesis, and Knowledge Graph agents—to automate complex analytical workflows.",
      "Developing a researcher-exclusive social media layer allowing peers to publish paper links, host AI-generated summaries, and interact through comments, likes, and professional connection maps.",
      "Implementing multi-author collaborative writing environments alongside private workspaces equipped with dynamic tools to organize, categorize, and draft scientific research papers.",
      "Integrating a structured RAG (Retrieval-Augmented Generation) pipeline paired with Neo4j graph databases to securely feed factual context into collaborative documents and verify citations."
    ],
    technologies: ["Python", "FastAPI", "LLMs (GPT-4o/Claude)", "Pinecone/Weaviate", "Neo4j Graph DB", "WebSockets", "RAG", "Multi-Agent Systems", "TypeScript", "BM25"],
    githubUrl: "https://github.com/pratyasha7/AI-Scientific-Paper-Knowledge-Engine",
    demoUrl: "#"
  },
  {
    id: "project-2",
    title: "DART — Decentralized Triangulation System",
    category: "Systems/Backend",
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
    id: "project-3",
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