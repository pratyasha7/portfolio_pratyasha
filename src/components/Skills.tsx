import React, { useState } from "react";
import { motion } from "motion/react";
import { Server, BrainCircuit, Hammer, Code, LineChart, Globe, Terminal } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Exact skills dataset from resume image
  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code,
      color: "border-emerald-300 text-emerald-700 bg-emerald-50/70",
      accentColor: "bg-emerald-500",
      nodeCode: "SYS_LANG_01",
      skills: ["Python", "C++", "C", "SQL", "JavaScript"]
    },
    {
      id: "backend",
      title: "Backend & Data",
      icon: Server,
      color: "border-sky-300 text-sky-700 bg-sky-50/70",
      accentColor: "bg-sky-500",
      nodeCode: "SYS_BKND_02",
      skills: ["Flask", "REST APIs", "Data Pipelines", "MySQL", "Data Validation & Integrity"]
    },
    {
      id: "ml",
      title: "Machine Learning & Statistics",
      icon: BrainCircuit,
      color: "border-indigo-300 text-indigo-700 bg-indigo-50/70",
      accentColor: "bg-indigo-500",
      nodeCode: "SYS_ML_03",
      skills: [
        "Supervised & Unsupervised Learning",
        "Linear & Logistic Regression",
        "SVM, Random Forest, Decision Trees",
        "Naive Bayes, KNN, K-Means Clustering",
        "Regularization (Ridge & Lasso)",
        "Data Preprocessing",
        "Pandas & NumPy"
      ]
    },
    {
      id: "dataviz",
      title: "Data Visualization",
      icon: LineChart,
      color: "border-rose-300 text-rose-750 bg-rose-50/70",
      accentColor: "bg-rose-500",
      nodeCode: "SYS_VIZ_04",
      skills: ["Matplotlib", "Seaborn", "Chart.js", "Apache Superset (Familiar)"]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: Hammer,
      color: "border-amber-300 text-amber-700 bg-amber-50/70",
      accentColor: "bg-amber-500",
      nodeCode: "SYS_TOOL_05",
      skills: [
        "Git, GitHub, GitLab",
        "CI/CD (basic)",
        "Firebase",
        "Modular Architecture",
        "Advanced Excel (Pivot, VLOOKUP, Data Cleaning)"
      ]
    },
    {
      id: "webtech",
      title: "Web Technologies",
      icon: Globe,
      color: "border-purple-300 text-purple-700 bg-purple-50/70",
      accentColor: "bg-purple-500",
      nodeCode: "SYS_WEB_06",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Streamlit"]
    }
  ];

  return (
    <section id="skills" className="relative py-12 overflow-visible">
      
      {/* Schematic Console Main Frame */}
      <div className="bg-[#ede5dc]/85 border-2 border-[#d3c7b8] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_rgba(138,119,9e,0.4)] relative overflow-hidden">
        
        {/* Soft grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(#e0d1c1_1.2px,transparent_1.2px),linear-gradient(90deg,#e0d1c1_1.2px,transparent_1.2px)] bg-[size:28px_28px] opacity-35 pointer-events-none rounded-3xl" />

        {/* Section title */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 border-b border-[#ebdccd] pb-6 pt-2">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono text-[9px] font-black uppercase text-slate-500 bg-white border border-slate-200 rounded px-2 py-0.5">
                SYSTEMS ARCHITECTURE
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-500 text-[10px] font-mono font-bold">NODE STATUS: CALIBRATED</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 leading-none">
              Skills Console Map<span className="text-indigo-600 font-sans"></span>
            </h2>
            <p className="font-handwritten text-xs font-bold text-slate-400 mt-1.5">
              Interactive technical console mapping programming languages, data pipelines, and machine learning models
            </p>
          </div>
        </div>

        {/* THE GRAPH CONSOLE PLATFORM (Responsive Grid Layout with 6 categories) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          
          {skillCategories.map((cat) => {
            const IconComponent = cat.icon;
            const isHovered = activeCategory === cat.id;
            
            return (
              <motion.div
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
                whileHover={{ scale: 1.01, y: -2 }}
                className={`bg-white p-5 rounded-2xl border-2 transition-all duration-200 relative flex flex-col justify-between overflow-hidden shadow-[2px_2px_4px_rgba(138,119,9e,0.08)] ${
                  isHovered 
                    ? "border-slate-800 shadow-[4px_4px_0px_#18181b]" 
                    : "border-[#e0d3c3] shadow-[3px_3px_0px_rgba(138,119,9e,0.12)]"
                }`}
              >
                {/* Schematic node accent line and background grid */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100" />
                <div className="absolute top-[2.5px] left-0 right-0 h-[2.5px] opacity-75" style={{ backgroundColor: isHovered ? '#1e293b' : 'transparent' }} />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border ${cat.color} shrink-0`}>
                        <IconComponent size={15} />
                      </div>
                      <div>
                        <span className="text-[8px] font-mono font-black text-slate-400 block leading-none mb-1">
                          {cat.nodeCode}
                        </span>
                        <h4 className="font-sans text-xs font-black text-slate-800 uppercase tracking-tight leading-none">
                          {cat.title}
                        </h4>
                      </div>
                    </div>
                    
                    {/* Simulated breadboard LED status */}
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.accentColor} ${isHovered ? "animate-ping" : "opacity-75"}`} />
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.accentColor} opacity-75`} />
                    </div>
                  </div>

                  {/* Skills lists */}
                  <ul className="space-y-2 mt-4 font-sans text-[11px] font-semibold text-slate-600 leading-relaxed">
                    {cat.skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-slate-400 select-none text-[10px] font-black shrink-0 mt-0.5">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simulated connection status footer inside card */}
                <div className="flex justify-between items-center text-[8px] font-mono text-slate-400 mt-5 border-t border-slate-50 pt-3.5 leading-none">
                  <span>INTERFACE_STAT // OPERATIONAL</span>
                  <span className="text-slate-500 font-bold bg-slate-50 px-1 rounded border border-slate-100 uppercase">
                    SYS_OK
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Hovering wiring schema legend / signature sticker */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 border-t border-[#ebdccd] pt-6 relative z-10">
          <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 font-bold max-w-md text-center sm:text-left leading-relaxed">
            * Interactive calibrated skills console linking primary languages, data routing components, and deep statistics parameters directly to output nodes.
          </div>
          
          <div className="font-handwritten text-xs font-black text-slate-800 bg-white shadow-sm border border-[#e0d3c3] rounded-xl p-2 px-4 flex items-center gap-2 transform rotate-[-0.5deg]">
            <span>System fully operational</span>
            <span className="animate-pulse text-indigo-600">⚡</span>
          </div>
        </div>

      </div>

    </section>
  );
}
