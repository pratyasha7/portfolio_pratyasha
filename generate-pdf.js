import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

// Ensure public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'Pratyasha_Basak_Resume.pdf');

function generatePdf() {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: {
        top: 40,
        bottom: 40,
        left: 45,
        right: 45
      }
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    stream.on('finish', () => {
      resolve();
    });

    stream.on('error', (err) => {
      reject(err);
    });

    // Helper to write Section Headers
    function writeSectionHeader(title) {
      doc.moveDown(1);
      doc.x = 45;
      doc.fontSize(11).font('Helvetica-Bold').fillColor('#0284c7').text(title.toUpperCase());
      doc.moveDown(0.3);
    }

    // Helper to write Dash Bullets (like in Experience, Projects)
    function writeDashBullet(text) {
      const currentY = doc.y;
      doc.fontSize(9).font('Helvetica').fillColor('#374151');
      doc.text('-', 55, currentY);
      doc.text(text, 65, currentY, { align: 'justify', lineGap: 2.2, width: 485 });
      doc.moveDown(0.25);
    }

    // Helper to write Dot Bullets (like in Certifications, Achievements)
    function writeDotBullet(text) {
      const currentY = doc.y;
      doc.fontSize(9).font('Helvetica').fillColor('#374151');
      doc.text('•', 55, currentY);
      doc.text(text, 65, currentY, { align: 'justify', lineGap: 2.2, width: 485 });
      doc.moveDown(0.25);
    }

    // Helper for technical skill rendering
    function writeSkillLine(label, list) {
      doc.x = 45;
      const currentY = doc.y;
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text(label + ': ', 45, currentY, { continued: true });
      doc.font('Helvetica').fillColor('#374151').text(list, { lineGap: 2.2 });
      doc.moveDown(0.15);
    }

    // PAGE 1: HEADER & PRIMARY INFO
    doc.fontSize(22).font('Helvetica-Bold').fillColor('#000000').text('PRATYASHA BASAK', { align: 'center' });
    doc.moveDown(0.4);

    const yHeader = doc.y;
    // Row 1
    doc.fontSize(9.5).font('Helvetica').fillColor('#000000').text('Email: ', 45, yHeader, { continued: true });
    doc.fillColor('#0284c7').text('prattub7@gmail.com');

    doc.y = yHeader;
    doc.fillColor('#000000').text('Ph-No: +91-6291525486', 45, yHeader, { align: 'right', width: 505.28 });

    // Row 2
    const yHeader2 = yHeader + 15;
    doc.y = yHeader2;
    doc.fillColor('#000000').text('Github: ', 45, yHeader2, { continued: true });
    doc.fillColor('#0284c7').text('pratyasha7');

    doc.y = yHeader2;
    const linkedinText = 'PRATYASHA BASAK';
    const linkedinLabel = 'Linkedin: ';
    const labelWidth = doc.widthOfString(linkedinLabel);
    const valueWidth = doc.widthOfString(linkedinText);
    const rightColX = 550.28 - labelWidth - valueWidth;
    doc.fillColor('#000000').text(linkedinLabel, rightColX, yHeader2, { continued: true });
    doc.fillColor('#0284c7').text(linkedinText, { continued: false });
    doc.x = 45;
    doc.moveDown(0.8);

    // PROFILE SUMMARY
    writeSectionHeader('Profile Summary');
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica').fillColor('#374151').text(
      'Software Engineer with a strong foundation in Computer Science, focused on building scalable backend systems, data pipelines, and mathematically-grounded ML applications. Experienced in end-to-end system design — from API-based data ingestion and abstraction layers to predictive algorithm implementation and model integration — with a strict focus on data integrity and system reliability. Proficient in Python, SQL, and modern software engineering practices including version control, modular architecture, and collaborative development. Proactive problem-solver with a track record of delivering measurable engineering impact in production-facing environments.',
      { align: 'justify', lineGap: 3 }
    );

    // TECHNICAL SKILLS
    writeSectionHeader('Technical Skills');
    writeSkillLine('Programming Languages', 'Python, C++, C, SQL, JavaScript');
    writeSkillLine('Backend & Data', 'Flask, REST APIs, Data Pipelines, MySQL, Data Validation & Integrity');
    writeSkillLine('Machine Learning & Statistics', 'Supervised & Unsupervised Learning, Linear & Logistic Regression, SVM, Random Forest, Decision Trees, Naive Bayes, KNN, K-Means Clustering, Regularization (Ridge & Lasso), Data Preprocessing, Pandas & NumPy');
    writeSkillLine('Data Visualization', 'Matplotlib, Seaborn, Chart.js, Apache Superset (Familiar)');
    writeSkillLine('Tools & Platforms', 'Git, GitHub, GitLab, CI/CD (basic), Firebase, Modular Architecture, Advanced Excel (Pivot Tables, VLOOKUP, Data Cleaning)');
    writeSkillLine('Web Technologies', 'HTML5, CSS3, Tailwind CSS, Streamlit');

    // EDUCATION
    writeSectionHeader('Education');
    
    // Item 1
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('B.Tech in Computer Science and Engineering ', { continued: true });
    doc.font('Helvetica').text('— Adamas University, Kolkata | 2023 – 2027');
    doc.x = 45;
    doc.fontSize(9).font('Helvetica').text('CGPA: ', { continued: true });
    doc.font('Helvetica-Bold').text('8.65');
    doc.moveDown(0.3);

    // Item 2
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('Class XII (CBSE) ', { continued: true });
    doc.font('Helvetica').text('— Kalyani Public School | 2023');
    doc.x = 45;
    doc.fontSize(9).font('Helvetica').text('Score: ', { continued: true });
    doc.font('Helvetica-Bold').text('83.4%');
    doc.moveDown(0.3);

    // Item 3
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('Class X (CBSE) ', { continued: true });
    doc.font('Helvetica').text('— Adamas World School | 2021');
    doc.x = 45;
    doc.fontSize(9).font('Helvetica').text('Score: ', { continued: true });
    doc.font('Helvetica-Bold').text('93.8%');
    doc.moveDown(0.5);

    // EXPERIENCE (Start on Page 1)
    writeSectionHeader('Experience');
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('Artificial Intelligence Trainee ', { continued: true });
    doc.font('Helvetica').text('— ', { continued: true });
    doc.font('Helvetica-Oblique').text('Infosys Springboard ', { continued: true });
    doc.font('Helvetica').text('| Oct 2025 – Dec 2025');
    doc.moveDown(0.2);

    writeDashBullet('Implemented Python-based AI and ML workflows covering search algorithms, heuristic problem-solving, and data preprocessing pipelines, strengthening foundations in algorithmic thinking and scalable logic design.');
    writeDashBullet('Applied structured data handling and modular workflow design to build end-to-end ML pipelines, reinforcing understanding of feature engineering, model evaluation, and data integrity validation.');
    writeDashBullet('Collaborated on code reviews and version control workflows using Git, applying software engineering best practices to maintain code quality and system reliability across iterative development cycles.');

    // PAGE BREAK: Transition to Page 2
    doc.addPage();

    // PAGE 2: EXPERIENCE CONTINUED & PROJECTS
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('Software Development Intern ', { continued: true });
    doc.font('Helvetica').text('— ', { continued: true });
    doc.font('Helvetica-Oblique').text('Harit Vikas Technologies Pvt. Ltd. ', { continued: true });
    doc.font('Helvetica').text('| Jan 2026 – Present');

    // Subtitle
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Oblique').fillColor('#000000').text('Saaya MRV Platform ( Ongoing Opensource Project)');
    doc.moveDown(0.25);

    writeDashBullet('Refactored the platform’s core architecture to introduce a modular, extensible component model, reducing feature integration overhead and improving maintainability across a 15+ module codebase');
    writeDashBullet('Designed and implemented a unified Source Adapter layer abstracting data ingestion from heterogeneous sources — Google Firestore, REST APIs, and GeoTIFF satellite imagery — enforcing a consistent data validation interface and reducing new-source integration time by ~60%.');
    writeDashBullet('Engineered a geospatial batch-placement algorithm to auto-generate and persist 500+ location markers from coordinate datasets, reducing manual data entry overhead by 90% and eliminating user-input errors through schema-level data validation.');
    writeDashBullet('Built a satellite-driven NDVI data pipeline to ingest, process, and visualize plant health time series data, enabling scalable environmental monitoring across multiple project sites.');
    writeDashBullet('Integrated bulk data ingestion via Excel/CSV upload and implemented cluster-level delete operations, enabling users to manage thousands of geospatial data points with enforced data integrity constraints.');
    writeDashBullet('Improved platform reliability by diagnosing and resolving critical dependency conflicts and implementing regression-safe update practices, ensuring system stability across iterative releases.');
    doc.moveDown(0.4);

    // IEEE experience
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('Research Intern ', { continued: true });
    doc.font('Helvetica').text('— ', { continued: true });
    doc.font('Helvetica-Oblique').text('IEEE SMC Student Branch Chapter, KGEC (In collaboration with IEEE SMC Kolkata Chapter & IEEE Kolkata Section) ', { continued: true });
    doc.font('Helvetica').text('| May 2026 – August 2026');
    doc.moveDown(0.25);

    writeDashBullet('Selected for the highly competitive Data Science and Intelligent Analytics track (Rank 16/80; 21.05% acceptance rate from 380+ applicants nationwide); conducting research in data-driven pattern analysis and intelligent systems under IEEE SMC supervision.');
    doc.moveDown(0.5);

    // PROJECTS
    writeSectionHeader('Projects');

    // Project 1
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('AI-Based Research Paper Discovery System with Query Disambiguation (Ongoing)');
    doc.moveDown(0.25);

    writeDashBullet('Developing a scalable NLP-based information retrieval system to query, rank, and surface scientific research papers from open-access sources (arXiv API), ordered by recency and relevance score');
    writeDashBullet('Implementing text preprocessing and concept extraction using SpaCy and regex');
    writeDashBullet('Designing an abbreviation disambiguation module to resolve ambiguous queries (e.g., “POP”) via user-guided selection');
    writeDashBullet('Building a context-aware search pipeline with query-to-concept mapping and NLP driven concept extraction, enabling low-latency resolution of ambiguous user queries through an abbreviation disambiguation module');

    // Tech line
    const yTech = doc.y;
    doc.fontSize(9).font('Helvetica-Bold').fillColor('#000000').text('Tech: ', 45, yTech, { continued: true });
    doc.font('Helvetica').fillColor('#374151').text('Python, SpaCy, Regex, arXiv API');
    doc.moveDown(0.6);

    // Project 2
    doc.x = 45;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#000000').text('SpotNFix — Crowdsourced Civic Issue Reporting Platform');
    doc.moveDown(0.25);

    writeDashBullet('Built a web-based system for reporting civic issues using HTML, CSS, JavaScript, and Firebase.');
    writeDashBullet('Integrated Google Maps API for auto-location and issue visualization.');
    writeDashBullet('Implemented an image classification pipeline by integrating pre-trained image classification endpoints for automated content verification., duplicate detection, and issue categorization — reducing invalid report submissions and improving data integrity of the crowdsourced dataset.');

    // PAGE BREAK: Transition to Page 3
    doc.addPage();

    // PAGE 3: CERTIFICATIONS & ACHIEVEMENTS
    writeSectionHeader('Certifications');
    writeDotBullet('C Programming — Great Learning Academy');
    writeDotBullet('Fundamentals of Python Programming — Infosys');
    writeDotBullet('The Joy of Computing with Python — NPTEL');
    writeDotBullet('Artificial Intelligence: Search Methods for Problem Solving — NPTEL');
    doc.moveDown(0.5);

    writeSectionHeader('Achievements');
    writeDotBullet('5 star Gold Badge in C Programming on HackerRank');
    writeDotBullet('Qualifier — Smart India Hackathon (Internal) 2025');
    writeDotBullet('Clash of Coders — 2nd Round Qualifier');

    doc.end();
  });
}

generatePdf()
  .then(() => {
    console.log('PDF Resume successfully synthesized at:', outputPath);
  })
  .catch((err) => {
    console.error('Error synthesizing PDF:', err);
    process.exit(1);
  });
