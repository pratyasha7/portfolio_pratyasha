import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, GraduationCap, Star, Coffee, FileText, ArrowDown, HelpCircle, Percent } from "lucide-react";
import { RESUME_BASE64 } from "../resume-base64";

export default function Hero() {
  const [steamArr] = useState([0, 1, 2]);

  const handleDownloadResume = () => {
    try {
      const binaryString = window.atob(RESUME_BASE64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Pratyasha_Basak_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error("Error generating local PDF copy:", error);
    }
  };

  return (
    <section id="about" className="relative pt-12 pb-16 overflow-visible">
      
      {/* BACKGROUND ACCESSORY 1: Realistic Camera Lens on Top Right Desk Margin */}
      <div className="absolute right-[-40px] top-[-30px] w-48 h-48 opacity-15 hover:opacity-25 transition-opacity duration-300 pointer-events-none hidden lg:block select-none transform rotate-12">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-800">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" />
          <path d="M45 10 h10 v5 h-10 z" fill="currentColor" />
          <path d="M12 40 l10-5 l5 8 l-10 8 z" fill="currentColor" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* LEFT COLUMN: Main Typography and Education Index Cards */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Greeting & Slogans directly from screenshot */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-handwritten text-lg font-bold text-slate-500 mb-1"
            >
              Hi, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-4"
            >
              Pratyasha<br className="sm:hidden" /> Basak<span className="text-[#6366f1]"></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-handwritten text-md sm:text-xl font-bold text-[#6366f1] leading-relaxed mb-4"
            >
              Software Engineer &amp; Research Intern
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-sm sm:text-base md:text-md text-slate-700 max-w-xl leading-relaxed font-medium mb-3"
            >
              I build reliable systems, data pipelines, and intelligent applications that turn complex information into real-world impact.
            </motion.p>

            {/* Handwritten stamp with handdrawn Star */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-1.5 font-handwritten text-xs font-black text-rose-500 bg-[#fff0f3] border border-rose-200/55 rounded-full px-3.5 py-1.5 rotate-[-1deg]"
            >
              <span>Curiosity drives everything I build</span>
              {/* <span className="text-amber-400 text-[14px] animate-pulse">✦</span> */}
            </motion.div>
          </div>

          {/* EDUCATION POST-IT INDEX CARDS: Styled exact to the screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Card 1: B.Tech Degree Details */}
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              className="bg-white p-5 rounded-2xl border-2 border-[#e6decb] shadow-[4px_4px_0px_#8a7f6e] flex flex-col justify-between min-h-[140px] relative overflow-hidden"
            >
              {/* Decorative binder pushpin */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 bg-slate-400 rounded-full border border-slate-500 shadow-sm flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              <div className="pt-2">
                <GraduationCap size={20} className="text-[#6366f1] mb-2.5" />
                <h3 className="font-sans text-xs font-bold leading-tight text-slate-800">B.Tech CSE</h3>
                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-1">2023 – 2027</p>
              </div>
              <p className="text-[10px] font-mono text-slate-400 mt-2">Adamas University</p>
            </motion.div>

            {/* Card 2: Location Map Coordinates */}
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              className="bg-white p-5 rounded-2xl border-2 border-[#e6decb] shadow-[4px_4px_0px_#8a7f6e] flex flex-col justify-between min-h-[140px] relative overflow-hidden"
            >
              {/* Decorative binder pushpin */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 bg-teal-400 rounded-full border border-teal-500 shadow-sm flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              <div className="pt-2">
                <MapPin size={20} className="text-emerald-500 mb-2.5" />
                <h3 className="font-sans text-xs font-bold leading-tight text-slate-800">Kolkata, WB</h3>
                <p className="text-[11px] text-slate-500 font-medium mt-1">India</p>
              </div>
              {/* <p className="text-[10px] font-mono text-slate-400 mt-2">Home Base 📍</p> */}
            </motion.div>

            {/* Card 3: Academic CGPA Score */}
            {/* Card 3: Academic CGPA Score */}
<motion.div
  whileHover={{ y: -3, scale: 1.01 }}
  className="bg-white p-5 rounded-2xl border-2 border-[#e6decb] shadow-[4px_4px_0px_#8a7f6e] flex flex-col justify-between min-h-[140px] relative overflow-hidden"
>
  {/* Decorative binder pushpin */}
  <div className="absolute top-2 left-2 w-3.5 h-3.5 bg-rose-400 rounded-full border border-rose-500 shadow-sm flex items-center justify-center">
    <div className="w-1 h-1 bg-white rounded-full" />
  </div>
  <div className="pt-2">
    {/* Swapped in Percent icon with high-contrast bold stroke styling */}
    <Percent size={20} strokeWidth={2.5} className="text-amber-500 mb-2.5" />
    <h3 className="font-sans text-xs font-bold leading-tight text-slate-800">CGPA</h3>
    <p className="font-handwritten text-md font-black text-rose-600 mt-0.5">8.65 / 10</p>
  </div>
  <p className="text-[10px] font-mono text-slate-400 mt-2">Cumulative score</p>
</motion.div>
          </div>

          {/* DECISION FLOW SKETCH PAPER stacked at bottom of column */}
          <div className="bg-[#fbfcfa] border border-[#e6decb] rounded-2xl p-6 shadow-sm relative overflow-hidden">
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(#f0ebe1_1px,transparent_1px),linear-gradient(90deg,#f0ebe1_1px,transparent_1px)] bg-[size:14px_14px] opacity-25 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="font-handwritten text-sm font-black text-indigo-900 leading-none mb-1">
                  How I Build Systems
                </h4>
                <p className="text-[11px] font-sans font-medium text-slate-400">The software engineering workflow</p>
              </div>

              {/* Mapped Flow Diagram exactly replicating sketch columns */}
              <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono font-bold">
                <div className="px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-lg text-slate-700">
                  Raw Data
                </div>
                <span className="text-slate-400">➜</span>
                <div className="px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-lg text-slate-700">
                  Process
                </div>
                <span className="text-slate-400">➜</span>
                <div className="px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-lg text-slate-700">
                  Insights
                </div>
                <span className="text-slate-400">➜</span>
                <div className="px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-lg text-slate-700">
                  Models
                </div>
                <span className="text-slate-400">➜</span>
                <div className="px-3 py-1 bg-[#6366f1] text-white shadow-sm rounded-lg border border-[#6366f1]">
                  Impact
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Pinned Polaroids, Sticky Notes and Floating Desk Accessories (Coffee!) */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full max-w-sm mx-auto lg:max-w-none relative">
          
          {/* POLAROID CORNER CODER PORTRAIT */}
          <motion.div
            initial={{ rotate: -3 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="bg-white p-4 pb-8 border border-slate-200 rounded-sm shadow-[8px_8px_0px_#73685e] relative max-w-[280px] mx-auto w-full group transform rotate-[-4deg]"
          >
            {/* Pinned washi tape top of polaroid */}
            <div className="absolute top-[-10px] left-1/3 w-20 h-5.5 bg-[#cbd5e1]/40 border-x border-dashed border-white/50 rotate-3 z-10" />
            
            {/* Polaroid Camera image viewport with embedded live-drawing */}
            <div className="relative aspect-square w-full bg-[#18112c] rounded overflow-hidden flex items-center justify-center p-3 text-white border border-slate-300 shadow-inner">
              <div className="absolute inset-0 bg-[#160f2d] opacity-20 pattern-grid-lg" />
              
             <img 
             
  src="/pfp pic.png" 
  alt="Pratyasha Basak" 
  className="w-full h-full object-cover rounded-2xl" 
/>
</div>
            <div className="mt-4 text-center">
              <p className="font-handwritten text-slate-800 font-bold text-xs tracking-tight">
                Scroll to explore 👇
              </p>
              <p className="text-[9px] font-mono text-slate-400 mt-1">
                pfp pic.png
              </p>
            </div>
          </motion.div>

          {/* CURRENTLY POST-IT STICKER NOTE (Green Paper) */}
          <motion.div
            initial={{ rotate: -1.5 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="p-5 bg-[#e8f5e9] text-emerald-950 border-2 border-[#c8e6c9] rounded-2xl shadow-sm relative max-w-[280px] mx-auto w-full"
          >
            {/* binder pushpin red head */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-red-500 rounded-full border border-red-650 shadow-md flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-red-200 rounded-full" />
            </div>
            
            <div className="font-mono text-[10px] font-black uppercase text-emerald-700 tracking-wider mb-2.5 mt-2 flex items-center justify-between pb-1 border-b border-emerald-200/50">
              <span>Currently</span>
              <span>💼</span>
            </div>

            <ul className="text-xs font-handwritten font-bold space-y-2 mt-1">
              <li className="flex items-start gap-1.5 leading-snug">
                <span className="text-emerald-600 font-sans">•</span>
                <span>Harit Vikas Technologies - Software Development Intern</span>
              </li>
              <li className="flex items-start gap-1.5 leading-snug">
                <span className="text-emerald-600 font-sans">•</span>
                <span>IEEE SMC KGEC Student Branch Chapter -Research Intern</span>
              </li>
            </ul>
          </motion.div>

          {/* MOTTO STICKER NOTE (Pink Paper) */}
          <motion.div
            initial={{ rotate: 1.5 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
            className="p-5 bg-[#ffebee] text-rose-950 border-2 border-[#ffcdd2] rounded-2xl shadow-sm relative max-w-[280px] mx-auto w-full rotate-2"
          >
            {/* binder pushpin silver head */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full border border-slate-500 shadow-md flex items-center justify-center">
              <span className="w-1 h-1 bg-white rounded-full" />
            </div>

            <div className="font-mono text-[10px] font-black uppercase text-rose-700 tracking-wider mb-2 mt-2">
              Motto 💡
            </div>
            <p className="font-handwritten text-sm md:text-md font-bold text-rose-900 mt-1.5 leading-snug italic text-center">
              Collect ➜ Process ➜<br />Understand ➜ Impact
            </p>
          </motion.div>

          {/* BACKGROUND ACCESSORY 2: Hot Coffee Mug sitting on Coaster with Animated Steam */}
          <div className="absolute bottom-[-18px] right-[-35px] w-36 h-36 flex flex-col justify-end items-center select-none pointer-events-none hidden lg:flex">
            
            {/* Steam animation paths escaping cup */}
            <div className="flex gap-2.5 mb-1.5 justify-center pl-4">
              {steamArr.map((idx) => (
                <motion.div
                  key={idx}
                  className="w-1 h-5.5 bg-orange-400/20 rounded-full"
                  animate={{ 
                    y: [-4, -20],
                    opacity: [0, 0.45, 0],
                    rotate: [idx % 2 === 0 ? 5 : -5, idx % 2 === 0 ? -10 : 10]
                  }}
                  transition={{
                    duration: 2 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.45
                  }}
                />
              ))}
            </div>

            {/* Coffee Mug block container */}
            <div className="relative">
              {/* Wooden cork board round coaster underneath */}
              <div className="absolute bottom-[-4px] left-[-6px] w-[92px] h-[15px] bg-[#bf9d7a] rounded-full border border-[#ad855e] opacity-95 shadow-sm transform rotate-[-2deg]" />

              {/* Ceramic Mug Body */}
              <div className="w-[80px] h-[75px] bg-[#ffffff] border-2 border-slate-300 rounded-b-2xl relative shadow-md">
                
                {/* Coffee liquid surface ring showing slightly */}
                <div className="absolute top-0 left-0 w-full h-[14px] bg-[#ece2d3] border-b border-slate-300 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                  <div className="w-[84%] h-[74%] bg-[#5c4033] rounded-full" />
                </div>

                {/* Handle on right */}
                <div className="absolute top-[16px] right-[-14px] w-[20px] h-[34px] border-2 border-l-0 border-slate-300 bg-[#ffffff] rounded-r-full shadow-inner" />

                {/* Text print logo */}
                <div className="absolute bottom-4 left-4 font-mono text-[8px] tracking-widest font-black text-rose-500 max-w-full truncate pl-2 opacity-60 flex items-center gap-0.5">
                  ☕ :3
                </div>
              </div>
            </div>
          </div>

          {/* REGULAR RESUME PDF BUTTON badge-styled */}
          <motion.div className="flex justify-center max-w-[280px] mx-auto w-full">
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4.5 rounded-2xl border-2 border-[#b59f7b] bg-[#fbf9f5] hover:bg-white text-slate-800 shadow-[3px_3px_0px_#8f7e63] font-handwritten font-bold text-xs leading-none transition-all cursor-pointer"
            >
              <FileText size={15} className="text-[#6366f1]" /> Download Resume PDF 💾
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
