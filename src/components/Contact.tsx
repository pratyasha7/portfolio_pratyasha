
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, CheckCircle, AlertCircle, Award, Terminal, Globe, Code, Check } from "lucide-react";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormFields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required. (o_o)";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required. (u_u)";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please specify a valid email. (._.)";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message content is required. (x_x)";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Write a little bit more! (>_<)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Transmission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-12 overflow-visible space-y-16">
      
      {/* =========================================================================
          TOP DRAWER: MY TROPHY ROOM DESK SHELF (Warm Elegant Board Layout)
          ========================================================================= */}
      <div id="trophy-room" className="scroll-mt-24 bg-[#ede2d6] border-2 border-[#d0c2b2] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_rgba(138,119,9e,0.5)] relative overflow-hidden">
        
        {/* Engineering grid lines inside the woodframe board */}
        <div className="absolute inset-0 bg-[linear-gradient(#ebdccd_1.2px,transparent_1.2px),linear-gradient(90deg,#ebdccd_1.2px,transparent_1.2px)] bg-[size:24px_24px] opacity-35 pointer-events-none rounded-3xl" />
        
        <div className="relative z-10 border-b border-[#ebdccd] pb-8 mb-8">
          <div className="flex items-center gap-1.5 mb-1.5 text-slate-500 font-mono text-[9px] font-black uppercase tracking-wider">
            <span className="bg-white border border-slate-200 rounded px-2 py-0.5">FOLDER: CREDENTIALS</span>
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight leading-none">
            My Trophy Room <span className="inline-block animate-bounce text-[28px] sm:text-[36px]" style={{ animationDuration: "3s" }}>🏆</span>
          </h2>
          <p className="font-handwritten text-xs font-bold text-slate-400 mt-2">
            Verified academic milestones, technical certifications, and problem solving files
          </p>
        </div>

        {/* Dynamic 2-column Layout exactly as shown in screenshot */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* COLUMN 1: MILESTONE ACCOMPLISHMENTS */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs sm:text-sm font-black text-slate-700 flex items-center gap-2 border-b border-[#ebdccd] pb-3 uppercase tracking-wider font-mono">
              <span className="text-amber-500 text-sm">★</span> Milestone Accomplishments
            </h3>

            {/* Folder Sheet 1: HackerRank */}
            <div className="bg-white border-2 border-[#e6decb] rounded-2xl overflow-hidden hover:border-slate-400 transition-colors duration-200 shadow-[2px_2px_0px_rgba(138,119,9e,0.15)]">
              <div className="bg-[#fff9db] px-3.5 py-1.5 flex justify-between items-center text-[10px] font-mono font-bold text-[#713f12] border-b border-[#ebdccd]">
                <span>hackerrank_problem_solving.sh</span>
                <span className="text-amber-600 bg-amber-50 px-1.5 border border-amber-200 rounded text-[8.5px] font-black">[★ ACTIVE]</span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-12 h-12 rounded-xl bg-[#fff9db] border border-[#fef08a] flex items-center justify-center shrink-0 shadow-inner">
                  <Code size={18} className="text-[#b45309]" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                    <h4 className="font-sans text-xs sm:text-sm font-black text-slate-800 leading-snug">
                      HackerRank Problem Solving &amp; C
                    </h4>
                    <span className="text-[8.5px] font-mono font-black text-[#b45309] bg-[#fff9db] px-2 py-0.5 rounded border border-[#fef08a] whitespace-nowrap leading-none tracking-tight">
                      5★ GOLD BADGE
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-semibold">
                    Attained elite status representation. Validated full problem-solving competency in complex C language data structures &amp; memory allocations.
                  </p>
                </div>
              </div>
            </div>

            {/* Folder Sheet 2: SIH */}
            <div className="bg-white border-2 border-[#e6decb] rounded-2xl overflow-hidden hover:border-slate-400 transition-colors duration-200 shadow-[2px_2px_0px_rgba(138,119,9e,0.15)]">
              <div className="bg-[#e8f5e9] px-3.5 py-1.5 flex justify-between items-center text-[10px] font-mono font-bold text-[#1b5e20] border-b border-[#ebdccd]">
                <span>smart_india_hackathon_stage.bat</span>
                <span className="text-emerald-700 bg-emerald-50 px-1.5 border border-emerald-250 rounded text-[8.5px] font-black">[SECURED]</span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] border border-[#a5d6a7] flex items-center justify-center shrink-0 shadow-inner">
                  <Globe size={18} className="text-[#2e7d32]" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                    <h4 className="font-sans text-xs sm:text-sm font-black text-slate-800 leading-snug">
                      Smart India Hackathon Qualifier
                    </h4>
                    <span className="text-[8.5px] font-mono font-black text-[#2e7d32] bg-[#e8f5e9] px-2 py-0.5 rounded border border-[#a5d6a7] whitespace-nowrap leading-none tracking-tight">
                      SIH 2025
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-semibold">
                    Internal campus selection nominee presenting high-efficiency modular analytics to mitigate resource allocation congestion indicators.
                  </p>
                </div>
              </div>
            </div>

            {/* Folder Sheet 3: Clash of Coders */}
            <div className="bg-white border-2 border-[#e6decb] rounded-2xl overflow-hidden hover:border-slate-400 transition-colors duration-200 shadow-[2px_2px_0px_rgba(138,119,9e,0.15)]">
              <div className="bg-[#fdf2f8] px-3.5 py-1.5 flex justify-between items-center text-[10px] font-mono font-bold text-[#831843] border-b border-[#ebdccd]">
                <span>clash_of_coders_stage.bin</span>
                <span className="text-pink-700 bg-pink-50 px-1.5 border border-pink-200 rounded text-[8.5px] font-black">[COMPLETED]</span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-12 h-12 rounded-xl bg-[#fdf2f8] border border-[#fbcfe8] flex items-center justify-center shrink-0 shadow-inner">
                  <Terminal size={18} className="text-[#db2777]" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                    <h4 className="font-sans text-xs sm:text-sm font-black text-slate-800 leading-snug">
                      Clash of Coders Qualifier
                    </h4>
                    <span className="text-[8.5px] font-mono font-black text-[#db2777] bg-[#fdf2f8] px-2 py-0.5 rounded border border-[#fbcfe8] whitespace-nowrap leading-none tracking-tight">
                      ROUND 2
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-semibold">
                    Competed in high-speed algorithmic challenges and successfully reached the second round of campus assessments.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMN 2: VERIFIED CREDENTIALS FILES */}
          <div className="space-y-5">
            <h3 className="font-sans text-xs sm:text-sm font-black text-slate-700 flex items-center gap-2 border-b border-[#ebdccd] pb-3 uppercase tracking-wider font-mono">
              <span className="text-[#6366f1] text-sm">🎖️</span> Verified Credentials Files
            </h3>

            {/* List Item 1: IIT Roorkee */}
            <div className="bg-[#f0f9f6] border-2 border-[#b5eade]/90 p-3.5 rounded-2xl flex items-center justify-between gap-3.5 shadow-[2px_2px_0px_rgba(138,119,9e,0.1)] transform hover:scale-[1.01] transition-all duration-150">
              <div className="flex items-center gap-3 w-[70%] bg-transparent">
                <div className="w-6 h-6 rounded border-2 border-teal-800 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Check size={12} strokeWidth={3} className="text-teal-700" />
                </div>
                <div className="truncate">
                  <h4 className="font-sans text-[11px] sm:text-xs font-black text-teal-950 leading-tight truncate">
                    Data Analytics with Python
                  </h4>
                  <p className="text-[9.5px] font-mono font-bold text-teal-800/60 leading-none mt-1 truncate">
                    IIT Roorkee / NPTEL
                  </p>
                </div>
              </div>
              <div className="text-[7.5px] font-mono font-extrabold tracking-wide uppercase text-teal-800 bg-white border border-[#b5eade] py-1 px-2 rounded-md leading-none whitespace-nowrap shrink-0 shadow-sm select-none">
                VERIFIED ✓
              </div>
            </div>

            {/* List Item 2: IIT Madras */}
            <div className="bg-[#fffbeb] border-2 border-[#fcd34d]/60 p-3.5 rounded-2xl flex items-center justify-between gap-3.5 shadow-[2px_2px_0px_rgba(138,119,9e,0.1)] transform hover:scale-[1.01] transition-all duration-150">
              <div className="flex items-center gap-3 w-[70%] bg-transparent">
                <div className="w-6 h-6 rounded border-2 border-[#854d0e] flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Check size={12} strokeWidth={3} className="text-[#854d0e]" />
                </div>
                <div className="truncate">
                  <h4 className="font-sans text-[11px] sm:text-xs font-black text-amber-950 leading-tight truncate">
                    Artificial Intelligence: Search Methods for Problem Solving
                  </h4>
                  <p className="text-[9.5px] font-mono font-bold text-[#854d0e]/60 leading-none mt-1 truncate">
                    IIT Madras / NPTEL
                  </p>
                </div>
              </div>
              <div className="text-[7.5px] font-mono font-extrabold tracking-wide uppercase text-[#854d0e] bg-white border border-[#fcd34d] py-1 px-2 rounded-md leading-none whitespace-nowrap shrink-0 shadow-sm select-none">
                VERIFIED ✓
              </div>
            </div>

            {/* List Item 3: IIT Ropar */}
            <div className="bg-[#f0f9f6] border-2 border-[#b5eade]/90 p-3.5 rounded-2xl flex items-center justify-between gap-3.5 shadow-[2px_2px_0px_rgba(138,119,9e,0.1)] transform hover:scale-[1.01] transition-all duration-150">
              <div className="flex items-center gap-3 w-[70%] bg-transparent">
                <div className="w-6 h-6 rounded border-2 border-teal-800 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Check size={12} strokeWidth={3} className="text-teal-700" />
                </div>
                <div className="truncate">
                  <h4 className="font-sans text-[11px] sm:text-xs font-black text-teal-950 leading-tight truncate">
                    The Joy of Computing with Python
                  </h4>
                  <p className="text-[9.5px] font-mono font-bold text-teal-800/60 leading-none mt-1 truncate">
                    IIT Ropar / NPTEL
                  </p>
                </div>
              </div>
              <div className="text-[7.5px] font-mono font-extrabold tracking-wide uppercase text-teal-800 bg-white border border-[#b5eade] py-1 px-2 rounded-md leading-none whitespace-nowrap shrink-0 shadow-sm select-none">
                VERIFIED ✓
              </div>
            </div>

            {/* List Item 4: Infosys Springboard */}
            <div className="bg-[#fffbeb] border-2 border-[#fcd34d]/60 p-3.5 rounded-2xl flex items-center justify-between gap-3.5 shadow-[2px_2px_0px_rgba(138,119,9e,0.1)] transform hover:scale-[1.01] transition-all duration-150">
              <div className="flex items-center gap-3 w-[70%] bg-transparent">
                <div className="w-6 h-6 rounded border-2 border-[#854d0e] flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Check size={12} strokeWidth={3} className="text-[#854d0e]" />
                </div>
                <div className="truncate">
                  <h4 className="font-sans text-[11px] sm:text-xs font-black text-amber-950 leading-tight truncate">
                    Fundamentals of Python Programming
                  </h4>
                  <p className="text-[9.5px] font-mono font-bold text-[#854d0e]/60 leading-none mt-1 truncate">
                    Infosys Springboard
                  </p>
                </div>
              </div>
              <div className="text-[7.5px] font-mono font-extrabold tracking-wide uppercase text-[#854d0e] bg-white border border-[#fcd34d] py-1 px-2 rounded-md leading-none whitespace-nowrap shrink-0 shadow-sm select-none">
                VERIFIED ✓
              </div>
            </div>

            {/* List Item 5: Great Learning */}
            <div className="bg-[#f0f9f6] border-2 border-[#b5eade]/90 p-3.5 rounded-2xl flex items-center justify-between gap-3.5 shadow-[2px_2px_0px_rgba(138,119,9e,0.1)] transform hover:scale-[1.01] transition-all duration-150">
              <div className="flex items-center gap-3 w-[70%] bg-transparent">
                <div className="w-6 h-6 rounded border-2 border-teal-800 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Check size={12} strokeWidth={3} className="text-teal-700" />
                </div>
                <div className="truncate">
                  <h4 className="font-sans text-[11px] sm:text-xs font-black text-teal-950 leading-tight truncate">
                    C Programming
                  </h4>
                  <p className="text-[9.5px] font-mono font-bold text-teal-800/60 leading-none mt-1 truncate">
                    Great Learning Academy
                  </p>
                </div>
              </div>
              <div className="text-[7.5px] font-mono font-extrabold tracking-wide uppercase text-teal-800 bg-white border border-[#b5eade] py-1 px-2 rounded-md leading-none whitespace-nowrap shrink-0 shadow-sm select-none">
                VERIFIED ✓
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM DRAWER: WIDESCREEN ENVELOPE SAY HELLO! (Letter sitting under the cabinet)
          ========================================================================= */}
      <div id="contact" className="scroll-mt-24 max-w-4xl mx-auto">
        <motion.div
          id="say-hello-postcard"
          initial={{ rotate: 1 }}
          whileHover={{ rotate: 0 }}
          className="bg-[#fbfcfa] border-2 border-[#e6decb] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_rgba(138,119,9e,0.45)] relative overflow-hidden"
        >
          {/* Lined notebook/craft paper background pattern overlays */}
          <div className="absolute inset-x-0 top-0 h-4 bg-rose-450/20 border-b border-dashed border-white/50 pattern-grid-lg pointer-events-none" />
          <div className="absolute inset-0 bg-[#fbfcfa] opacity-90 pattern-grid-lg pointer-events-none" />

          {/* Simulated Vintage Postal stamp print sticker ornament */}
          <div className="absolute top-6 right-6 w-16 h-18 bg-[#fff3ec] border-2 border-dashed border-orange-300 rounded flex flex-col justify-around items-center opacity-85 hover:opacity-100 transition-opacity duration-150 pointer-events-none rotate-3">
            <span className="text-[20px] leading-none mb-0.5 select-none">✉️</span>
            <span className="font-mono text-[7px] text-amber-800 leading-none tracking-widest font-black uppercase">
              INBOX: PB
            </span>
          </div>

          {/* Letter top greeting label */}
          <div className="border-b border-slate-150 pb-6 mb-8 mt-4 relative z-10">
            <span className="font-mono text-[9px] font-black uppercase text-slate-800 bg-white border border-slate-300 rounded px-2 py-0.5">
              ENVELOPE: MESSAGE
            </span>
            <h2 className="font-serif text-3xl font-black text-black leading-none mt-2.5 mb-1">
              Say Hello!
            </h2>
            <p className="font-handwritten text-xs font-bold text-slate-800 mt-1">
              Inquire or send feedback through the mailbox
            </p>
          </div>

          {/* Handwriting input form template lines in widescreen layout */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider mb-2">
                  Sender Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ada Lovelace"
                  className={`w-full px-4 py-2.5 bg-[#fdfdfc] border-2 rounded-xl text-slate-800 text-xs font-mono focus:outline-none focus:border-indigo-600 transition-all placeholder:text-gray-400 font-medium ${
                    errors.name ? "border-rose-400" : "border-slate-200"
                  }`}
                />
                {errors.name && (
                  <span className="text-rose-500 text-[10px] font-mono mt-1.5 flex items-center gap-1.5 font-bold">
                    <AlertCircle size={11} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider mb-2">
                  Sender Email Address:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. sender@inbox.net"
                  className={`w-full px-4 py-2.5 bg-[#fdfdfc] border-2 rounded-xl text-slate-800 text-xs font-mono focus:outline-none focus:border-indigo-600 transition-all placeholder:text-gray-400 font-medium ${
                    errors.email ? "border-rose-400" : "border-slate-200"
                  }`}
                />
                {errors.email && (
                  <span className="text-rose-500 text-[10px] font-mono mt-1.5 flex items-center gap-1.5 font-bold">
                    <AlertCircle size={11} /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Message Ingestion Area */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider mb-2">
                Message Content:
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me regarding backend architecture opportunities, research partnerships, or statistics pipelines..."
                className={`w-full px-4 py-2.5 bg-[#fdfdfc] border-2 rounded-xl text-slate-800 text-xs font-mono focus:outline-none focus:border-indigo-600 transition-all placeholder:text-gray-400 resize-none font-medium leading-relaxed ${
                  errors.message ? "border-rose-400" : "border-slate-200"
                }`}
              />
              {errors.message && (
                <span className="text-rose-500 text-[10px] font-mono mt-1.5 flex items-center gap-1.5 font-bold">
                  <AlertCircle size={11} /> {errors.message}
                </span>
              )}
            </div>

            {/* Success validation overlay */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3.5 rounded-xl border border-emerald-300 bg-[#e8f5e9] text-emerald-800 text-[10px] font-mono flex items-center gap-2 font-bold"
                >
                  <CheckCircle size={14} className="text-emerald-600" /> Letter transmitted successfully! I will correspond back soon! (^-^)/
                </motion.div>
              )}
            </AnimatePresence>

            {/* Transmit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-2xl font-bold font-handwritten text-xs bg-[#18112c] text-white hover:bg-[#6366f1] transition-all flex items-center justify-center gap-2 relative leading-none border-0 shadow-sm cursor-pointer ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span>Transmitting Letter...</span>
                </>
              ) : (
                <>
                  <span>Transmit Message Letter</span>
                  {/* <span className="text-amber-300 text-[14px]">★</span> */}
                </>
              )}
            </button>

          </form>
        </motion.div>
      </div>

    </section>
  );
}