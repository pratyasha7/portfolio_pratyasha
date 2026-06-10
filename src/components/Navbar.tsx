import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Book, Laptop, FlaskConical, Terminal, Trophy, Mail, Github, Linkedin, HelpCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  theme: "dark" | "light";
}

const NAV_ITEMS = [
  { label: "Notebook", sub: "About Me", href: "#about", icon: Book },
  { label: "Laptop", sub: "Projects", href: "#projects", icon: Laptop },
  { label: "Research Lab", sub: "Experience", href: "#experience", icon: FlaskConical },
  { label: "Data Console", sub: "Skills", href: "#skills", icon: Terminal },
  { label: "Trophy Room", sub: "Credentials", href: "#trophy-room", icon: Trophy },
  { label: "Letter", sub: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar({ theme }: NavbarProps) {
  const [activeSegment, setActiveSegment] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: item.href.slice(1),
            offset: Math.abs(rect.top),
          };
        }
        return null;
      }).filter(Boolean) as { id: string; offset: number }[];

      if (sections.length > 0) {
        const closest = sections.reduce((min, cur) => (cur.offset < min.offset ? cur : min), sections[0]);
        setActiveSegment(closest.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Header Banner */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#fcf9f5] border-b border-[#e5dcd3] z-50 px-5 py-4 flex items-center justify-between shadow-sm">
        <a href="#" className="font-handwritten text-2xl font-black text-[#5c3e35]">
          PB<span className="text-rose-500">.</span>
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-700 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Floating Panel for Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-[280px] bg-[#fcf9f5] border-r-2 border-[#e5dcd3] z-40 px-6 pt-24 pb-8 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto mobile-scrollbar"
          >
            <div className="space-y-6">
              <div className="text-[10px] font-mono font-bold uppercase text-[#a39485] tracking-widest px-2">
                Navigation
              </div>

              <div className="space-y-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSegment === item.href.slice(1);
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all ${
                        isActive
                          ? "bg-white border-[#8c6d58] text-[#5c3e35] shadow-[2px_2px_0px_rgba(140,109,88,0.2)] font-bold"
                          : "bg-transparent border-transparent text-[#7a6a5d] hover:bg-[#f5ece3]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-[#a88f7d]" />
                        <div>
                          <div className="text-sm font-semibold leading-tight">{item.label}</div>
                          <div className="text-[10px] font-handwritten text-gray-500 mt-0.5">{item.sub}</div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Tip sticky note on mobile */}
            <div className="p-4 bg-[#fdfaf2] border-2 border-dashed border-amber-300 rounded-2xl relative text-xs text-amber-900 font-sans shadow-sm rotate-1 mt-6">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <HelpCircle size={14} className="text-amber-600 shrink-0" />
                <span>Site Tip</span>
              </div>
              <p className="text-[11px] leading-relaxed opacity-90">
                Explore my desk! Each item opens a new part of my world.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desk Sidebar Navigation (Desktop Mode) */}
      <aside className="hidden md:flex flex-col justify-between w-[280px] h-screen bg-[#faf6f0] border-r-2 border-[#e6decb] px-7 py-10 sticky top-0 left-0 z-30 flex-shrink-0 overflow-y-auto desk-scrollbar">
        
        {/* Core Identity Brand Header */}
        <div>
          <div className="font-handwritten text-4xl font-black text-[#402a23] tracking-wide mb-10 pl-2">
            PB<span className="text-rose-500 text-3xl">.</span>
          </div>

          <div className="text-[10px] font-mono font-bold uppercase text-[#8a7a6c] tracking-widest mb-6 pl-2">
            Navigation
          </div>

          {/* List of Navigation index items mapped directly from the layout */}
          <nav className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSegment === item.href.slice(1);
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl border-2 transition-all relative group ${
                    isActive
                      ? "bg-white border-[#7a6555] text-[#553b2e] shadow-[3px_3px_0px_#7a6555] font-bold"
                      : "bg-transparent border-transparent text-[#7a6c5f] hover:bg-[#f3eadc]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-1 rounded bg-slate-100 group-hover:bg-slate-200 transition-colors">
                      <Icon size={16} className="text-[#8c7a6b]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight uppercase font-mono">{item.label}</div>
                      <div className="text-[10px] font-handwritten text-slate-500 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer System: Tip Sticky note, Socials, Copyright */}
        <div className="space-y-6">
          
          {/* Site Tip post-it board tape styled envelope */}
          <div className="p-5 bg-[#fffdf0] text-amber-950 border-2 border-[#e6dab8] rounded-2xl shadow-sm text-xs relative transform rotate-[-1deg] before:absolute before:content-[''] before:top-[-10px] before:left-1/3 before:w-16 before:h-5 before:bg-pink-400/30 before:border-x before:border-dashed before:border-white/40 before:rotate-[-2deg]">
            <div className="flex items-center gap-1.5 font-bold mb-1.5 text-amber-900 mt-1">
              <HelpCircle size={14} className="text-amber-700 shrink-0" />
              <span className="uppercase text-[10px] tracking-wide font-mono">Site Tip 💡</span>
            </div>
            <p className="text-[11px] leading-relaxed text-amber-900/80 font-handwritten">
              Explore my desk! Each card and item corresponds to a milestone. Have fun checking out my workspace.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 pl-2">
            <a 
              href="https://github.com/pratyasha7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white border border-slate-200 hover:border-[#7a6555] text-[#7a6c5f] hover:text-[#553b2e] hover:shadow-sm transition-all"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pratyasha-basak-9787b5291/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white border border-slate-200 hover:border-[#7a6555] text-[#7a6c5f] hover:text-[#553b2e] hover:shadow-sm transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="mailto:prattub7@gmail.com" 
              className="p-2 rounded-full bg-white border border-slate-200 hover:border-[#7a6555] text-[#7a6c5f] hover:text-[#553b2e] hover:shadow-sm transition-all"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright description line */}
          <p className="text-[10px] text-[#a39485] font-mono leading-tight pl-2">
            © 2026 Pratyasha Basak<br />All rights reserved.
          </p>

        </div>
      </aside>
    </>
  );
}