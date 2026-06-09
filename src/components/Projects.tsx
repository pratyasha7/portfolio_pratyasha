import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Gitlab, ExternalLink, Paperclip, ChevronRight, Search, MapPin } from "lucide-react";
import { PROJECTS_DATA } from "../data";

type FilterType = "All" | "Systems/Backend" | "AI/ML";

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  // Unique visual mockups mimicking interactive terminals for each project sheet on the desk
  const getSimulatedScreen = (projectId: string) => {
    switch (projectId) {
      case "project-1":
        return (
          <div className="bg-[#140f28] border-2 border-slate-300 rounded-lg p-3.5 h-28 font-mono text-[9px] flex flex-col justify-between text-indigo-200 shadow-inner">
            <div className="flex items-center gap-1.5 bg-[#1d143c] p-1 rounded-md border border-[#ff4e88]/20">
              <Search size={9} className="text-[#ff4e88] animate-pulse" />
              <span className="text-[#a855f7] font-semibold text-[8px]">q: "POP" (Power Optimization)</span>
            </div>
            <div className="text-[8px] space-y-1 overflow-hidden select-none leading-normal">
              <p className="text-green-400 font-bold">&gt;&gt; Disambiguating...</p>
              <p className="text-gray-400">1. POP (Post Office Protocol) - 3 papers</p>
              <p className="text-purple-300 font-bold">2. POP (Predictive Operations) - 12 papers [Active]</p>
            </div>
            <div className="flex justify-between items-center text-[7.5px] border-t border-[#1d143c] pt-1">
              <span className="text-gray-400">NLP Concept Mapping</span>
              <span className="text-green-400 font-bold">99.8% precision</span>
            </div>
          </div>
        );
      case "project-2":
        return (
          <div className="bg-[#0f172a] border-2 border-slate-300 rounded-lg p-3 h-28 font-mono text-[9px] relative overflow-hidden flex flex-col justify-between shadow-inner">
            <div className="flex justify-between items-center text-[8px] border-b border-slate-800 pb-1">
              <span className="text-[#38bdf8] font-bold">satellite_TCI_10m.tif</span>
              <span className="text-emerald-400 font-bold uppercase animate-pulse">NDVI Active</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-1 font-sans">
              <div className="h-5 rounded bg-emerald-900/80 border border-emerald-500/30 flex items-center justify-center text-[6.5px] text-emerald-200">0.82</div>
              <div className="h-5 rounded bg-emerald-800/80 border border-emerald-450/30 flex items-center justify-center text-[6.5px] text-emerald-200">0.71</div>
              <div className="h-5 rounded bg-emerald-950/80 border border-emerald-600/30 flex items-center justify-center text-[6.5px] text-emerald-300">0.89</div>
              <div className="h-5 rounded bg-slate-900 border border-slate-750 flex items-center justify-center text-[6.5px] text-red-400">0.15</div>
            </div>
            <div className="text-[7.5px] text-gray-400 flex justify-between items-center leading-none">
              <span>Raster Matrix Grid</span>
              <span className="text-[#38bdf8] font-bold">~60% speed increase</span>
            </div>
          </div>
        );
      case "project-3":
      default:
        return (
          <div className="bg-[#111827] border-2 border-slate-300 rounded-lg p-3 h-28 font-mono text-[9px] flex flex-col justify-between shadow-inner">
            <div className="flex items-center gap-1.5 bg-[#1f2937] p-1 rounded-md text-rose-300 border border-[#f43f5e]/25">
              <MapPin size={9} className="text-rose-500 animate-pulse animate-bounce" />
              <span className="text-[8px] font-bold">Kolkata Civic Point ID: 814A</span>
            </div>
            <div className="text-[8px] space-y-1">
              <div className="flex justify-between items-center bg-[#111827] px-1 py-0.5 rounded border border-slate-800">
                <span className="text-slate-400">Confidence Match:</span>
                <span className="text-[#f43f5e] font-bold">96% Accuracy</span>
              </div>
            </div>
            <p className="text-[7px] text-slate-500 leading-tight">
              Model output: duplicate coordinates pruned. Validated submission safely in Google Firestore.
            </p>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-12 overflow-visible">
      
      {/* Decorative Pencil accessory lying on the desk margins */}
      <div className="absolute left-[-20px] top-[-10px] w-48 h-8 opacity-25 pointer-events-none hidden xl:block select-none transform rotate-[-15deg]">
        <svg viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-900">
          <path d="M5 2 L90 2 L95 5 L90 8 L5 8 Z" fill="currentColor" opacity="0.8" />
          <path d="M0 5 L5 2 L5 8 Z" fill="gold" />
          <circle cx="91" cy="5" r="1.5" fill="pink" />
        </svg>
      </div>

      {/* Main Binder container */}
      <div className="bg-[#ede2d6] border-2 border-[#d0c2b2] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_rgba(138,119,9e,0.5)] relative overflow-hidden">
        
        {/* Binder metal rings design of physical notebook folder (the spine holes) */}
        <div className="absolute top-0 left-10 right-10 h-6 flex justify-around pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Spine notch hole */}
              <div className="w-3.5 h-3 bg-slate-900 rounded-full border-t border-slate-950 shadow-inner" />
              {/* Metallic loop clip */}
              <div className="absolute top-[-8px] w-2.5 h-6.5 border-r border-[#94a3b8] border-t border-t-[#cbd5e0] opacity-80 rounded-full" />
            </div>
          ))}
        </div>

        {/* Header Folder tab label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 border-b border-[#ebdccd] pb-6 pt-2">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="font-mono text-[9px] font-black uppercase text-slate-500 bg-white border border-slate-200 rounded px-2 py-0.5">
                FOLDER: ARCHIVE
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-slate-800 leading-none">
              Project Index Board<span className="text-[#6366f1]"></span>
            </h2>
            <p className="font-handwritten text-xs font-bold text-slate-400 mt-1">
              Clipped academic research and pipeline systems lying on the catalog
            </p>
          </div>

          {/* Aesthetic Filter Pills for active sheets */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Systems/Backend", "AI/ML"] as FilterType[]).map((catName) => {
              const isActive = filter === catName;
              return (
                <button
                  key={catName}
                  onClick={() => setFilter(catName)}
                  className={`px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase font-mono tracking-tight transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#6366f1] text-white border-2 border-[#6366f1] shadow-sm font-black"
                      : "bg-white border-2 border-[#ebdccd] text-slate-500 hover:border-slate-400"
                  }`}
                >
                  {catName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Paper Cards layout matching clipped notebook design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Custom styled elements based on index
              const cardOffsetRotation = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1deg]";
              
              const indexString = `0${index + 1}`;
              const badgeTheme = project.category === "AI/ML" 
                ? "bg-[#ffebee] text-rose-800 border-rose-200" 
                : "bg-[#e8f5e9] text-emerald-800 border-emerald-200";

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white p-5 pt-8 rounded-2xl border-2 border-[#e6decb] shadow-[4px_4px_0px_rgba(138,119,9e,0.3)] min-h-[380px] flex flex-col justify-between relative group ${cardOffsetRotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200`}
                >
                  
                  {/* ABSOLUTE METAL PAPERCLIP ON TOP: Exact to provided reference image */}
                  <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-8 h-12 pointer-events-none select-none z-10">
                    <svg viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 drop-shadow-[1px_2px_1.5px_rgba(0,0,0,0.15)]">
                      {/* Paperclip wire loops */}
                      <path d="M10,25 L10,50 C10,58 30,58 30,50 L30,15 C30,7 13,7 13,15 L13,44 C13,49 24,49 24,44 L24,25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* ID index and Category badge Header */}
                  <div>
                    <div className="flex items-center justify-between pointer-events-none select-none mb-3">
                      <span className="font-handwritten text-lg font-black text-[#5c3e35]/35">
                        {indexString}
                      </span>
                      <span className={`text-[9px] font-mono font-bold uppercase border rounded px-1.5 py-0.5 leading-none ${badgeTheme}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Integrated Simulated Terminal Graphics screen */}
                    <div className="mb-4">
                      {getSimulatedScreen(project.id)}
                    </div>

                    {/* Title and descriptions */}
                    <h3 className="font-sans text-sm font-black text-slate-800 leading-snug tracking-tight mb-2 group-hover:text-[#6366f1] transition-colors duration-150">
                      {project.title}
                    </h3>
                    
                    <p className="font-sans text-[11px] font-medium text-slate-500 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Bullets lists */}
                    <ul className="space-y-1.5 border-t border-slate-100 pt-3.5 mb-4 font-sans text-[10px] text-slate-600 leading-normal font-medium">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#6366f1] select-none shrink-0 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badge Repository link system */}
                  <div className="border-t border-slate-100 pt-3 flex flex-wrap items-center justify-between gap-2.5">
                    
                    {/* Tech tag highlights */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-slate-100 text-[8.5px] font-mono font-bold text-slate-400 px-1 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Code Link badge sticker */}
                    <div className="flex-shrink-0">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-[#18112c] text-white hover:bg-[#6366f1] py-1 px-2 border border-[#18112c] rounded-md text-[9px] font-mono font-bold transition-all"
                        >
                          <Github size={9} />
                          <span>github</span>
                        </a>
                      )}
                      {project.gitlabUrl && (
                        <a 
                          href={project.gitlabUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 hover:bg-[#ff9800] hover:text-white py-1 px-2 border border-amber-250 rounded-md text-[9px] font-mono font-bold transition-all"
                        >
                          <Gitlab size={9} strokeWidth={2.5} />
                          <span>gitlab</span>
                        </a>
                      )}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Cardboard Card Tear Style signature at bottom of binder */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/pratyasha7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-handwritten text-xs font-black text-indigo-900 inline-flex items-center gap-1.5 bg-[#fdfbf7] p-2 px-4 rounded-xl border border-slate-300 hover:border-indigo-950/45 shadow-sm hover:shadow transition-all"
          >
            <span>View my full GitHub archive</span>
            <ChevronRight size={13} className="text-[#6366f1] animate-bounce" />
          </a>
        </div>

      </div>

    </section>
  );
}
