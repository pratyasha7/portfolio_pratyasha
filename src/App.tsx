import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [theme] = useState<"light">("light");

  useEffect(() => {
    // Set theme parameters to force light, beautiful workbench tones
    const root = window.document.documentElement;
    root.classList.add("light");
    root.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#eae0d5]/85 selection:bg-[#ff4e88]/20 text-[#301c1c] font-sans flex flex-col md:flex-row overflow-hidden">
      
      {/* Anchor identifier for Back To Top */}
      <div id="top" className="absolute top-0 left-0 w-full h-1" />

      {/* LEFT NAVIGATION SYSTEM (Notebook, Laptop, Experience Board, etc) */}
      <Navbar theme={theme} />

      {/* RIGHT WORKBENCH WORKSPACE (Textured Craft/Wooden workspace platform) */}
      <div className="flex-1 overflow-y-auto h-screen relative scroll-smooth px-4 md:px-8 lg:px-12 py-12 md:py-20 bg-[radial-gradient(#d3c6b8_1.5px,transparent_1.5px)] bg-[size:32px_32px]">
        
        {/* Glowing study desk ambient lamp spotlight effect overlay */}
        <div className="pointer-events-none absolute top-[-100px] left-1/4 w-[600px] height-[600px] bg-[#fffbf2] opacity-35 filter blur-[150px] z-0 rounded-full" />
        
        <main className="max-w-6xl mx-auto space-y-24 relative z-10 pt-10 md:pt-0 pb-32">
          
          {/* Section 1: Notebook / About Me and Greetings */}
          <Hero />

          {/* Section 2: Laptop / Project Archive binder */}
          <Projects />

          {/* Section 3: Research Lab / Experience cork-board */}
          <Experience />

          {/* Section 4: Data Console / Skills schematic mapping blueprint */}
          <Skills />

          {/* Section 5: Letter / Contact envelope and verified certifications drawer */}
          <Contact />

          {/* Footer System */}
          <Footer />

        </main>

        {/* Utilities */}
        <BackToTop />
        
      </div>
      
    </div>
  );
}
