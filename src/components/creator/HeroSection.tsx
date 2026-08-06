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
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-x-clip bg-[#F7FAF7] text-[#102017]">
      {/* Background Radial Light & Thin Data Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-[#2DBE64]/20 via-[#DDF3E3]/10 to-transparent blur-3xl" />
        <div className="w-full h-full bg-[linear-gradient(to_right,#D7E5DA_1px,transparent_1px),linear-gradient(to_bottom,#D7E5DA_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Sticky Navigation Bar */}
      <FadeIn delay={0} y={-20}>
        <nav className="w-full flex flex-wrap items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#102017] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg gap-4 z-40 relative">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <span className="bg-[#16803A] text-white font-black text-xs px-2 py-0.5 rounded font-mono">TR</span>
            <span className="font-extrabold tracking-widest text-[#0B4F2A]">TAGORE</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[#506158]">
            <span onClick={() => scrollTo("home")} className="cursor-pointer hover:text-[#16803A] transition-colors">Home</span>
            <span onClick={() => scrollTo("about")} className="cursor-pointer hover:text-[#16803A] transition-colors">About</span>
            <span onClick={() => scrollTo("expertise")} className="cursor-pointer hover:text-[#16803A] transition-colors">Expertise</span>
            <span onClick={() => scrollTo("experience")} className="cursor-pointer hover:text-[#16803A] transition-colors">Experience</span>
            <span onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-[#16803A] transition-colors">Projects</span>
            <span onClick={() => scrollTo("skills")} className="cursor-pointer hover:text-[#16803A] transition-colors">Skills</span>
            <span onClick={() => scrollTo("education")} className="cursor-pointer hover:text-[#16803A] transition-colors">Education</span>
            <span onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-[#16803A] transition-colors">Contact</span>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
            <button className="rounded-full border border-[#16803A]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#16803A] bg-[#EEF7F0] hover:bg-[#16803A] hover:text-white transition-colors cursor-pointer">
              Résumé PDF
            </button>
          </a>
        </nav>
      </FadeIn>

      {/* Dominant Display Name: TAGORE */}
      <div className="w-full max-w-full px-2 sm:px-6 my-4 text-center z-10 relative">
        <FadeIn delay={0.1} y={15}>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#16803A] font-extrabold block mb-1">
            PORTFOLIO / DATA + AI
          </span>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <h1 className="hero-name font-black uppercase tracking-tight leading-none">
            TAGORE
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p className="text-xs sm:text-sm md:text-base font-mono font-bold uppercase tracking-widest text-[#16803A] mt-2">
            Data Analyst • SQL Developer • AI Benchmark & Evaluation Developer
          </p>
        </FadeIn>
      </div>

      {/* Hero Portrait in Center (Magnet Wrapping User's Avatar) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-10 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="/avatar.png"
              alt="Ronanki Tagore - Full Body Character Portrait"
              className="w-full h-auto max-h-[66vh] object-contain drop-shadow-[0_15px_30px_rgba(22,128,58,0.15)] pointer-events-auto"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar: Summary Copy & White-Green CTAs */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-30 gap-6">
        <FadeIn delay={0.35} y={20} className="max-w-md space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#16803A] font-bold uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DBE64] animate-ping inline-block" />
            <span>Independent / Freelance • July 2026 – Present</span>
          </div>
          <p className="text-[#506158] font-light uppercase tracking-wide leading-snug text-xs sm:text-sm md:text-base">
            I turn raw data and complex technical requirements into reliable analysis, reproducible systems, and rigorous AI evaluations.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-wrap gap-3 items-center">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-full bg-[#16803A] hover:bg-[#0B4F2A] text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 cursor-pointer shadow-lg shadow-[#16803A]/20 transition-all hover:scale-105"
          >
            View Projects
            <ArrowDownRight className="h-4 w-4" />
          </button>

          <a href="/resume.pdf" download="Ronanki_Tagore_Resume.pdf">
            <button className="inline-flex items-center gap-2 rounded-full border border-[#D7E5DA] bg-[#FFFFFF] hover:border-[#16803A] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#102017] hover:text-[#16803A] transition-colors cursor-pointer shadow-sm">
              <FileText className="h-4 w-4 text-[#16803A]" />
              Download Résumé
            </button>
          </a>

          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
