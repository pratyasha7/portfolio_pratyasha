import React from "react";
import { motion } from "motion/react";
import { Linkedin, Calendar, ExternalLink, Map, Compass } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-12 overflow-visible">
      
      {/* Woodenframed Pinboard container exactly replicating Experience Cork-board layout */}
      <div className="bg-[#dacab5] border-4 border-[#82664b] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_rgba(90,70,50,0.6)] relative overflow-hidden">
        
        {/* Cork surface pattern grid subtle overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#bba68d_1.8px,transparent_1.8px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
        
        {/* Red Thread SVG Connection overlay - links coordinates map to work sheets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0 opacity-80" viewBox="0 0 1000 700">
          {/* Thread 1: Map Pin (240, 190) -> Harit Vikas Card Pin (560, 175) */}
          <motion.path
            d="M 230 180 Q 395 140, 560 175"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3.5"
            strokeDasharray="6 3"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Thread 2: Map Pin (230, 200) -> IEEE Intern Pin (560, 420) */}
          <motion.path
            d="M 230 180 Q 380 320, 560 420"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3.5"
            strokeDasharray="6 3"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Thread 3: Map Pin (230, 210) -> Infosys Card Pin (180, 490) */}
          <motion.path
            d="M 230 180 Q 200 340, 180 490"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3.5"
            strokeDasharray="6 3"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Board title block */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 border-b border-[#c8b7a2] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[9px] font-black uppercase text-[#fffdf2] bg-[#a855f7] px-2 py-0.5 rounded border border-[#a855f7]/30">
                BOARD: TIMELINE
              </span>
              <span className="text-yellow-100 text-xs font-mono">Count: 3 Pinned Documents</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#503b2c] leading-none">
              Experience Board<span className="text-[#a855f7]"></span>
            </h2>
            <p className="font-handwritten text-xs font-bold text-[#735e4e] mt-1.5">
              Professional milestones and research publications synced with red string threads
            </p>
          </div>
        </div>

        {/* Board Main Grid Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SIDE MEMBER: Polaroid Map and Coordinates Index Lying Pinned on Left */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <motion.div
              initial={{ rotate: -2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#fafafa] p-4 pb-6 rounded-md shadow-lg border border-slate-200/80 max-w-[260px] w-full relative"
            >
              {/* TOP RED PINS BRACE */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-600 rounded-full border border-red-750 shadow-md flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-red-200 rounded-full" />
              </div>

              {/* Map grid representation */}
              <div className="relative aspect-square w-full bg-[#e8eef3] rounded border border-slate-300 overflow-hidden flex flex-col justify-between p-2 mt-2">
                <div className="absolute inset-0 bg-[#e2e8f0] opacity-45 pattern-grid-lg" />
                
                {/* SVG vector representing geographical coordinates (Saaya coordinates) */}
                <svg className="absolute inset-0 w-full h-full text-slate-400" viewBox="0 0 100 100">
                  <path d="M10 20 Q50 80, 90 20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M20 90 L50 20 L80 90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Pinned Marker coordinates connecting */}
                  <circle cx="50" cy="50" r="2.5" fill="#f43f5e" className="animate-pulse" />
                  <circle cx="50" cy="50" r="5" fill="none" stroke="#f43f5e" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />
                  
                  <circle cx="20" cy="30" r="2" fill="#6366f1" />
                  <circle cx="78" cy="65" r="2" fill="#10b981" />
                </svg>

                <div className="relative z-10 font-mono text-[8px] text-slate-500 font-bold uppercase leading-none">
                  georeg_mrv_v1.0
                </div>

                <div className="relative z-10 bg-white/90 border border-slate-200 p-1.5 rounded text-[7.5px] font-mono leading-tight shadow-sm">
                  <span className="text-[#f43f5e] font-black block">📍 KO-500_MARKER_MAP:</span>
                  <span>500+ auto-generated coordinate targets verified</span>
                </div>
              </div>

              <div className="mt-4 text-center font-handwritten text-[#503b2c] text-xs font-bold leading-snug">
                Coordinates System Index
              </div>
            </motion.div>
          </div>

          {/* MAIN COLUMN: Pushpin-pinned Documents */}
          <div className="lg:col-span-8 space-y-10">
            {EXPERIENCE_DATA.map((item, index) => {
              // Alternate tilt for natural layout
              const cardRotation = index === 0 ? "rotate-[-0.5deg]" : index === 1 ? "rotate-[1deg]" : "rotate-[-1deg]";
              
              // Color schemes resembling index papers lying on table
              const styleSet = index === 0 
                ? "bg-[#fffdf2] border-[#e6decb] shadow-[4px_4px_0px_rgba(90,70,50,0.3)]" 
                : index === 1 
                ? "bg-[#e8f5e9] border-[#c8e6c9] shadow-[4px_4px_0px_rgba(40,80,50,0.2)]" 
                : "bg-[#fffafa] border-[#ffcdd2] shadow-[4px_4px_0px_rgba(100,50,50,0.15)]";

              const pinColor = index === 0 ? "bg-red-500 border-red-750" : index === 1 ? "bg-red-500 border-red-750" : "bg-red-500 border-red-750";

              return (
                <motion.div
                  key={item.company + item.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 pt-9 border-2 rounded-2xl relative ${styleSet} ${cardRotation}`}
                >
                  
                  {/* Push Pin Header Graphic */}
                  <div className={`absolute top-2.5 left-6 w-4.5 h-4.5 rounded-full border shadow-md flex items-center justify-center ${pinColor}`}>
                    <span className="w-1.5 h-1.5 bg-red-200 rounded-full" />
                  </div>

                  {/* LinkedIn action icon */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5">
                    {item.linkedinUrl && (
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 px-1.5 rounded bg-slate-100 hover:bg-[#0077b5] text-slate-400 hover:text-white border border-slate-200 leading-none text-[8.5px] font-mono font-bold transition-colors duration-150 flex items-center gap-1.5"
                      >
                        <Linkedin size={9} strokeWidth={2.5} />
                        <span>linkedin</span>
                      </a>
                    )}
                  </div>

                  {/* Mobile-only time flag indicator */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200/50 border border-slate-350/50 mb-3 text-[9px] font-mono leading-none tracking-tight">
                    <Calendar size={10} />
                    <span>{item.period}</span>
                  </div>

                  {/* Period tag shown styled cleanly for desktop inline layout */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3.5">
                    <h3 className="font-sans text-sm sm:text-base font-black text-slate-800 leading-snug">
                      {item.role}
                    </h3>
                    <span className="hidden sm:inline-block text-[11px] font-mono font-bold text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-handwritten text-xs font-black text-indigo-900 mb-4 leading-none">
                    @ {item.company}
                  </div>

                  <div className="w-12 h-0.5 bg-slate-200 rounded-full mb-3.5" />

                  {/* Points bullets lists */}
                  <ul className="space-y-2.5 font-sans text-[11px] font-medium text-slate-600 leading-relaxed">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#a855f7] select-none shrink-0 font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
