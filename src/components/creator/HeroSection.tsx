import { FadeIn } from "./FadeIn"
import { Magnet } from "./Magnet"
import { ContactButton } from "./ContactButton"
import { FileText, ArrowDownRight } from "lucide-react"

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Sticky Navigation Bar */}
      <FadeIn delay={0} y={-20}>
        <nav className="w-full flex flex-wrap items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg gap-4 z-40 relative">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <span className="bg-emerald-500 text-black font-black text-xs px-2 py-0.5 rounded font-mono">TR</span>
            <span className="font-extrabold tracking-widest text-[#D7E2EA]">TAGORE</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span onClick={() => scrollTo("home")} className="cursor-pointer hover:opacity-70 transition-opacity">Home</span>
            <span onClick={() => scrollTo("about")} className="cursor-pointer hover:opacity-70 transition-opacity">About</span>
            <span onClick={() => scrollTo("experience")} className="cursor-pointer hover:opacity-70 transition-opacity">Experience</span>
            <span onClick={() => scrollTo("projects")} className="cursor-pointer hover:opacity-70 transition-opacity">Projects</span>
            <span onClick={() => scrollTo("skills")} className="cursor-pointer hover:opacity-70 transition-opacity">Skills</span>
            <span onClick={() => scrollTo("education")} className="cursor-pointer hover:opacity-70 transition-opacity">Education</span>
            <span onClick={() => scrollTo("contact")} className="cursor-pointer hover:opacity-70 transition-opacity">Contact</span>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
            <button className="rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-500/10 transition-colors cursor-pointer">
              Résumé PDF
            </button>
          </a>
        </nav>
      </FadeIn>

      {/* Dominant Hero Name Display: TAGORE (100% Visible & Un-cropped) */}
      <div className="w-full max-w-full px-2 sm:px-6 my-4 text-center z-10">
        <FadeIn delay={0.15} y={30}>
          <h1 className="hero-name font-black uppercase tracking-tight leading-none text-[#D7E2EA]">
            TAGORE
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p className="text-xs sm:text-sm md:text-base font-mono font-bold uppercase tracking-widest text-emerald-400 mt-2">
            Data Analyst • SQL Developer • AI Benchmark & Evaluation Developer
          </p>
        </FadeIn>
      </div>

      {/* Hero Portrait in Center (Magnet Wrapping User's Avatar) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-12 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="/avatar.png"
              alt="Ronanki Tagore - Full Body Character Portrait"
              className="w-full h-auto max-h-[68vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] pointer-events-auto"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar: Introductory Copy & CTA Buttons */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-30 gap-6">
        <FadeIn delay={0.35} y={20} className="max-w-md space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Independent / Freelance • July 2026 – Present</span>
          </div>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-xs sm:text-sm md:text-base">
            I turn raw data and complex technical requirements into reliable analysis, reproducible systems, and rigorous AI evaluations.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-wrap gap-3 items-center">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold uppercase tracking-wider text-xs px-6 py-3.5 cursor-pointer shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
          >
            View Projects
            <ArrowDownRight className="h-4 w-4" />
          </button>

          <a href="/resume.pdf" download="Ronanki_Tagore_Resume.pdf">
            <button className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/40 hover:border-emerald-400 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#D7E2EA] hover:text-emerald-400 transition-colors cursor-pointer">
              <FileText className="h-4 w-4 text-emerald-400" />
              Download Résumé
            </button>
          </a>

          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
