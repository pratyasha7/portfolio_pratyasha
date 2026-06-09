import React from "react";
import { Github, Linkedin, Mail, Gitlab } from "lucide-react";
import { HERO_DATA } from "../data";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-transparent border-t-2 border-[#ebdccd] pt-12 pb-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#ebdccd]">
          
          {/* Logo Name */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, "#top")}
              className="font-handwritten text-xl font-black text-slate-800 inline-flex items-center gap-1 hover:underline"
            >
              <span>Pratyasha</span>
              <span className="text-[#6366f1]">Basak</span>
            </a>
            <p className="text-[11px] text-slate-500 font-sans mt-2 max-w-xs leading-relaxed font-medium">
              Engineering high-integrity data systems, backend adapters, and predictive ML structures.
            </p>
          </div>

          {/* Minimal Sitemap Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold font-mono text-slate-500 uppercase tracking-tight">
            <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-[#6366f1] transition-all">
              About
            </a>
            <a href="#projects" onClick={(e) => handleScrollTo(e, "#projects")} className="hover:text-[#6366f1] transition-all">
              Projects
            </a>
            <a href="#experience" onClick={(e) => handleScrollTo(e, "#experience")} className="hover:text-[#6366f1] transition-all">
              Experience
            </a>
            <a href="#skills" onClick={(e) => handleScrollTo(e, "#skills")} className="hover:text-[#6366f1] transition-all">
              Skills
            </a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="hover:text-[#6366f1] transition-all">
              Contact
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={HERO_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-white border border-slate-200 text-[#7a6c5f] hover:text-[#553b2e] hover:border-[#7a6555] transition-all shadow-sm"
            >
              <Github size={14} />
            </a>
            <a
              href="https://gitlab.com/project-saaya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab Link"
              className="p-2 rounded-xl bg-white border border-slate-200 text-[#7a6c5f] hover:text-orange-500 hover:border-orange-500 transition-all shadow-sm"
            >
              <Gitlab size={14} />
            </a>
            <a
              href={HERO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-white border border-slate-200 text-[#7a6c5f] hover:text-blue-500 hover:border-blue-500 transition-all shadow-sm"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${HERO_DATA.email}`}
              aria-label="Email Inbox"
              className="p-2 rounded-xl bg-white border border-slate-200 text-[#7a6c5f] hover:text-teal-500 hover:border-teal-500 transition-all shadow-sm"
            >
              <Mail size={14} />
            </a>
          </div>

        </div>

        {/* Lower copyright tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-[10px] font-mono text-slate-400">
          <p>© 2026 Pratyasha Basak. Hand-crafted on the desk-setup platform.</p>
          <div className="flex gap-4 font-bold">
            <span className="hover:text-slate-600 transition-colors cursor-pointer">B.Tech Portfolio</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-slate-600 transition-colors cursor-pointer font-sans">v1.5.0-DESK</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
