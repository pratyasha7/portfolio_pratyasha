import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Gitlab, ExternalLink, Paperclip, ChevronLeft, ChevronRight, Search, MapPin } from "lucide-react";
import { PROJECTS_DATA } from "../data";

type FilterType = "All" | "Systems/Backend" | "AI/ML";

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("All");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "All") return true;
    if (project.categories) {
      return project.categories.includes(filter);
    }
    return project.category === filter;
  });

  // Calculate and update slider scroll state (bounds & current index)
  const updateScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);

    const firstChild = sliderRef.current.firstElementChild as HTMLElement;
    if (firstChild && firstChild.offsetWidth > 0) {
      const cardWidthWithGap = firstChild.offsetWidth + 32;
      const index = Math.round(scrollLeft / cardWidthWithGap);
      setActiveIndex(Math.min(Math.max(0, index), filteredProjects.length - 1));
    }
  }, [filteredProjects.length]);

  useEffect(() => {
    const timer = setTimeout(updateScrollState, 80);
    const el = sliderRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState);
      return () => {
        clearTimeout(timer);
        el.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
    return () => clearTimeout(timer);
  }, [updateScrollState, filter]);

  // Reset slider position when filter changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    setActiveIndex(0);
  }, [filter]);

  // Scroll one card left or right
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;
    const cardWidthWithGap = firstChild.offsetWidth + 32;
    const targetScroll = direction === "left"
      ? container.scrollLeft - cardWidthWithGap
      : container.scrollLeft + cardWidthWithGap;

    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  // Jump directly to a project by index
  const scrollToProject = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;
    const cardWidthWithGap = firstChild.offsetWidth + 32;
    container.scrollTo({ left: index * cardWidthWithGap, behavior: "smooth" });
  };

  // Unique visual mockups mimicking interactive terminals for each project sheet on the desk
  const getSimulatedScreen = (projectId: string) => {
    switch (projectId) {
      case "project-1":
      case "dart":
        return (
          <div className="bg-[#0b1528] border-2 border-slate-300 rounded-lg p-3 h-28 font-mono text-[9px] relative overflow-hidden flex flex-col justify-between shadow-inner">
            <div className="flex justify-between items-center text-[8px] border-b border-blue-950 pb-1">
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                sensor_stream: TDOA_triangulate
              </span>
              <span className="text-emerald-400 font-bold uppercase animate-pulse">INT8 ACTIVE</span>
            </div>
            <div className="space-y-1 py-1">
              <div className="flex justify-between items-center text-[7.5px] text-slate-300">
                <span>Transient Audio Match:</span>
                <span className="text-cyan-300 font-bold">Gunshot Mel-Spec (98.4%)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-1.5 rounded-full w-[94%]" />
              </div>
            </div>
            <div className="text-[7.5px] text-slate-400 flex justify-between items-center leading-none border-t border-blue-950 pt-1">
              <span>Holochain WASM DHT</span>
              <span className="text-emerald-400 font-bold">&gt;&gt; Cryptoverified</span>
            </div>
          </div>
        );
      case "project-2":
      case "saaya":
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
      case "researchiq":
      case "redrob":
        return (
          <div className="bg-[#140f28] border-2 border-slate-300 rounded-lg p-3 h-28 font-mono text-[9px] relative overflow-hidden flex flex-col justify-between text-indigo-200 shadow-inner">
            <div className="flex items-center justify-between border-b border-indigo-900/60 pb-1 text-[8px]">
              <div className="flex items-center gap-1.5 text-pink-300 font-bold">
                <Search size={8} className="text-pink-400 animate-pulse" />
                <span>q: "LLM" &gt; expanded</span>
              </div>
              <span className="text-emerald-400 font-bold uppercase animate-pulse">RAG Active</span>
            </div>
            <div className="text-[7.5px] space-y-0.5 leading-tight select-none">
              <div className="flex justify-between text-slate-300">
                <span>ChromaDB Hybrid Rerank:</span>
                <span className="text-cyan-300 font-bold">Score: 0.942</span>
              </div>
              <div className="w-full bg-indigo-950 rounded-full h-1 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-400 h-1 rounded-full w-[94%]" />
              </div>
              <p className="text-slate-400 text-[7px] truncate">Gemini 2.5 Flash: Synthesized 5 grounded citations</p>
            </div>
            <div className="flex justify-between items-center text-[7px] border-t border-indigo-900/60 pt-1 text-slate-400">
              <span>ONNX 384d Dense Vectors</span>
              <span className="text-emerald-400 font-bold">&lt;2ms Latency</span>
            </div>
          </div>
        );
      case "project-4":
      case "spotnfix":
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
      case "project-5":
      case "reachinbox":
      default:
        return (
          <div className="border-2 border-slate-300 rounded-lg h-28 relative overflow-hidden shadow-inner group/screen bg-slate-900">
            <img 
              src="/reachinbox.jpg" 
              alt="ReachInbox Outreach Dashboard" 
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/screen:scale-105"
            />
            <div className="absolute top-1 left-1.5 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10 text-[7.5px] font-mono text-pink-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white">ReachInbox</span>
              <span className="text-slate-400">|</span>
              <span className="text-pink-300">Outreach Dashboard</span>
            </div>
            <div className="absolute bottom-1 right-1.5 flex items-center gap-1 bg-slate-900/85 backdrop-blur-xs px-1.5 py-0.5 rounded text-[7px] font-mono text-emerald-300 border border-emerald-500/20 shadow-sm">
              <span>20/hr Throttle Active</span>
            </div>
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
      <div className="bg-[#ede2d6] border-2 border-[#d0c2b2] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_rgba(138,119,9e,0.5)] relative">
        
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 border-b border-[#ebdccd] pb-6 pt-2">
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

          {/* Aesthetic Filter Pills + Header Slider Quick Control */}
          <div className="flex flex-wrap items-center gap-3">
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

            {/* Quick Header Slider Pill (when projects exceed 1) */}
            {filteredProjects.length > 1 && (
              <div className="flex items-center bg-white border-2 border-[#ebdccd] rounded-xl p-0.5 shadow-sm">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous project"
                  title="Previous project"
                  className={`p-1.5 rounded-lg transition-all ${
                    canScrollLeft
                      ? "text-slate-700 hover:bg-[#6366f1] hover:text-white cursor-pointer active:scale-95"
                      : "text-slate-300 cursor-not-allowed opacity-40"
                  }`}
                >
                  <ChevronLeft size={15} />
                </button>
                <span className="font-mono text-[10px] font-bold text-slate-500 px-2 select-none">
                  0{activeIndex + 1} / 0{filteredProjects.length}
                </span>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next project"
                  title="Next project"
                  className={`p-1.5 rounded-lg transition-all ${
                    canScrollRight
                      ? "text-slate-700 hover:bg-[#6366f1] hover:text-white cursor-pointer active:scale-95"
                      : "text-slate-300 cursor-not-allowed opacity-40"
                  }`}
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Paper Cards Slider Container */}
        <div className="relative">
          {/* Floating Navigation Arrows mounted on the boundary wall of the outside box */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous projects"
                title="Previous projects"
                className={`hidden md:flex absolute -left-6 sm:-left-10 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full transition-all ${
                  canScrollLeft
                    ? "bg-white border-2 border-[#d0c2b2] text-slate-700 shadow-[2px_3px_0px_rgba(138,119,9e,0.4)] hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] hover:scale-110 active:scale-95 cursor-pointer"
                    : "bg-white/60 border border-[#e6decb] text-slate-300 opacity-25 cursor-not-allowed pointer-events-none"
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next projects"
                title="Next projects"
                className={`hidden md:flex absolute -right-6 sm:-right-10 translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full transition-all ${
                  canScrollRight
                    ? "bg-white border-2 border-[#d0c2b2] text-slate-700 shadow-[2px_3px_0px_rgba(138,119,9e,0.4)] hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] hover:scale-110 active:scale-95 cursor-pointer animate-pulse hover:animate-none"
                    : "bg-white/60 border border-[#e6decb] text-slate-300 opacity-25 cursor-not-allowed pointer-events-none"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-5 pb-6 px-1 no-scrollbar"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                // Custom styled rotation based on index
                const cardOffsetRotation = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1deg]";
                
                const indexString = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

                return (
                  <div
                    key={project.id}
                    className="shrink-0 snap-start w-full md:w-[calc(50%-16px)] lg:w-[calc((100%-64px)/3)] p-1"
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className={`h-full bg-white p-5 pt-8 rounded-2xl border-2 border-[#e6decb] shadow-[4px_4px_0px_rgba(138,119,9e,0.3)] min-h-[380px] flex flex-col justify-between relative group ${cardOffsetRotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200`}
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
                          <div className="flex flex-wrap items-center gap-1">
                            {(project.categories || [project.category]).map((cat) => (
                              <span
                                key={cat}
                                className={`text-[9px] font-mono font-bold uppercase border rounded px-1.5 py-0.5 leading-none ${
                                  cat === "AI/ML"
                                    ? "bg-[#ffebee] text-rose-800 border-rose-200"
                                    : "bg-[#e8f5e9] text-emerald-800 border-emerald-200"
                                }`}
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
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
                        <div className="flex-shrink-0 flex items-center gap-1.5">
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
                          {project.demoUrl && project.demoUrl !== "#" && (
                            <a 
                              href={project.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 bg-[#fdf2f8] text-[#be185d] hover:bg-[#ec4899] hover:text-white py-1 px-2 border border-pink-200 rounded-md text-[9px] font-mono font-bold transition-all"
                            >
                              <ExternalLink size={9} />
                              <span>live demo</span>
                            </a>
                          )}
                        </div>

                      </div>

                    </motion.div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Bottom Indicator Dots */}
        {filteredProjects.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-[#ebdccd]">
            <span className="font-handwritten text-xs font-bold text-slate-500 mr-1 select-none">
              Project Catalog:
            </span>
            {filteredProjects.map((proj, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => scrollToProject(idx)}
                  aria-label={`Jump to project 0${idx + 1}`}
                  title={`0${idx + 1}: ${proj.title.split("—")[0].trim()}`}
                  className={`group relative transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "w-8 h-2.5 bg-[#6366f1] rounded-full shadow-sm"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full"
                  }`}
                >
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-800 text-white font-mono text-[9px] px-2 py-1 rounded shadow-md whitespace-nowrap z-30 pointer-events-none">
                    0{idx + 1}: {proj.title.split("—")[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Cardboard Card Tear Style signature at bottom of binder */}
        <div className="flex justify-center mt-8">
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
