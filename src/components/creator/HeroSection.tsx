import { FadeIn } from "./FadeIn"
import { Magnet } from "./Magnet"
import { ContactButton } from "./ContactButton"
import { FileText, ArrowDownRight, Terminal } from "lucide-react"

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-x-clip bg-[#020503] text-[#F4FFF7]">
      {/* Background Radial Glow & Thin Data Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-[#22C55E]/20 via-[#071009]/10 to-transparent blur-3xl" />
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Sticky Translucent Navigation Bar */}
      <FadeIn delay={0} y={-20}>
        <nav className="w-full flex flex-wrap items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#F4FFF7] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg gap-4 z-40 relative">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <span className="bg-[#22C55E] text-[#021006] font-black text-xs px-2 py-0.5 rounded font-mono">TR</span>
            <span className="font-extrabold tracking-widest text-[#39FF88]">TAGORE</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[#A8B5AC]">
            <span onClick={() => scrollTo("home")} className="cursor-pointer hover:text-[#39FF88] transition-colors">Home</span>
            <span onClick={() => scrollTo("about")} className="cursor-pointer hover:text-[#39FF88] transition-colors">About</span>
            <span onClick={() => scrollTo("expertise")} className="cursor-pointer hover:text-[#39FF88] transition-colors">Expertise</span>
            <span onClick={() => scrollTo("experience")} className="cursor-pointer hover:text-[#39FF88] transition-colors">Experience</span>
            <span onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-[#39FF88] transition-colors">Projects</span>
            <span onClick={() => scrollTo("skills")} className="cursor-pointer hover:text-[#39FF88] transition-colors">Skills</span>
            <span onClick={() => scrollTo("education")} className="cursor-pointer hover:text-[#39FF88] transition-colors">Education</span>
            <span onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-[#39FF88] transition-colors">Contact</span>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
            <button className="rounded-full border border-[#22C55E]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#39FF88] bg-[#071009] hover:bg-[#22C55E] hover:text-[#021006] transition-colors cursor-pointer">
              Résumé PDF
            </button>
          </a>
        </nav>
      </FadeIn>

      {/* Dominant Display Name: TAGORE */}
      <div className="w-full max-w-full px-2 sm:px-6 my-4 text-center z-10 relative">
        <FadeIn delay={0.15} y={30}>
          <h1 className="hero-name font-black uppercase tracking-tight leading-none">
            TAGORE
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p className="text-xs sm:text-sm md:text-base font-mono font-bold uppercase tracking-widest text-[#39FF88] mt-2">
            Data Analyst • SQL Developer • AI Benchmark &amp; Evaluation Developer
          </p>
        </FadeIn>
      </div>

      {/* Central Interactive Technical Command Module (NO AVATARS / NO HUMANS) */}
      <div className="relative z-20 w-full max-w-xl mx-auto px-4 my-2">
        <FadeIn delay={0.4} y={20}>
          <Magnet padding={120} strength={4}>
            <div className="p-5 rounded-3xl bg-[#071009] border border-[#22C55E]/30 shadow-2xl space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[#39FF88]" />
                  <span className="text-xs font-bold text-[#F4FFF7]">DATA &amp; EVALUATION ENGINE</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#39FF88]">
                  <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-ping" />
                  <span>DETERMINISTIC VERIFIED</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
                  <span className="text-[#748078] block">Dataset Analyzed</span>
                  <span className="text-[#39FF88] font-bold text-xs">1,000 Customers</span>
                </div>
                <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
                  <span className="text-[#748078] block">Predictive Accuracy</span>
                  <span className="text-[#39FF88] font-bold text-xs">88.0% Random Forest</span>
                </div>
                <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
                  <span className="text-[#748078] block">SQL Repeat Rate</span>
                  <span className="text-[#39FF88] font-bold text-xs">40%+ Categories</span>
                </div>
                <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
                  <span className="text-[#748078] block">AI Benchmarking</span>
                  <span className="text-[#39FF88] font-bold text-xs">July 2026 – Present</span>
                </div>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar: Introductory Copy & Green Accent Buttons */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-30 gap-6">
        <FadeIn delay={0.35} y={20} className="max-w-md space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#39FF88] font-bold uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39FF88] animate-ping inline-block" />
            <span>Independent / Freelance • July 2026 – Present</span>
          </div>
          <p className="text-[#A8B5AC] font-light uppercase tracking-wide leading-snug text-xs sm:text-sm md:text-base">
            I transform raw data and complex technical requirements into reliable analysis, reproducible systems, and rigorous AI evaluations.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-wrap gap-3 items-center">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] hover:bg-[#39FF88] text-[#021006] font-bold uppercase tracking-wider text-xs px-6 py-3.5 cursor-pointer shadow-lg shadow-[#22C55E]/30 transition-all hover:scale-105"
          >
            View Projects
            <ArrowDownRight className="h-4 w-4" />
          </button>

          <a href="/resume.pdf" download="Ronanki_Tagore_Resume.pdf">
            <button className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/40 bg-[#071009] hover:border-[#39FF88] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F4FFF7] hover:text-[#39FF88] transition-colors cursor-pointer">
              <FileText className="h-4 w-4 text-[#39FF88]" />
              Download Résumé
            </button>
          </a>

          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
