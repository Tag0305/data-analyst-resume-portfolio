import * as React from "react"
import { RoleTicker } from "./RoleTicker"
import { ArrowDownRight, FileText, Mail } from "lucide-react"

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Expertise", id: "expertise" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "career" },
  { label: "Contact", id: "contact" },
]

export function HeroSection() {
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    const ids = ["home", ...NAV_LINKS.map(l => l.id)]
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-x-clip bg-[#FAF9F6]"
    >
      {/* Gold gradient bars */}
      <div className="hero-gold-bar-top" />
      <div className="hero-gold-bar-bottom" />

      {/* ── NAVIGATION ── */}
      <nav
        className={`w-full flex items-center justify-between px-6 md:px-10 py-5 z-40 relative sticky top-0 transition-all duration-300 ${
          scrolled ? "nav-frosted shadow-sm" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span
            className="font-serif italic text-xl font-bold"
            style={{ color: "#C9A84C" }}
          >
            RT
          </span>
          <span
            className="font-sans font-semibold text-sm tracking-widest uppercase"
            style={{ color: "#1a1a1a" }}
          >
            Tagore
          </span>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <span
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link${activeSection === link.id ? " active" : ""}`}
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-outline text-xs hidden sm:inline-flex"
        >
          Résumé PDF
        </a>
      </nav>

      {/* ── HERO MAIN ── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 my-auto relative z-10">
        <div className="hero-main">
          {/* Left: Name + Ticker + Description */}
          <div
            className="hero-name-wrap space-y-5"
            style={{ animation: "heroFadeIn 0.9s ease forwards" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2" style={{ opacity: 0, animation: "heroFadeIn 0.6s ease 0.1s forwards" }}>
              <span
                className="font-mono text-xs uppercase tracking-widest font-semibold"
                style={{ color: "#C9A84C" }}
              >
                // Data & AI Developer
              </span>
            </div>

            {/* Name */}
            <div style={{ opacity: 0, animation: "heroFadeIn 0.8s ease 0.2s forwards" }}>
              <h1 className="hero-name">
                Ronanki
              </h1>
              <h1 className="hero-name hero-name-gold italic">
                Tagore
              </h1>
            </div>

            {/* Role Ticker */}
            <div
              className="flex items-center gap-3"
              style={{ opacity: 0, animation: "heroFadeIn 0.8s ease 0.35s forwards" }}
            >
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "#888" }}
              >
                Currently —
              </span>
              <RoleTicker />
            </div>

            {/* Description with gold left border */}
            <div
              className="border-l-2 pl-4 max-w-md"
              style={{
                borderColor: "#C9A84C",
                opacity: 0,
                animation: "heroFadeIn 0.8s ease 0.5s forwards"
              }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                I transform raw data and complex technical requirements into{" "}
                <strong style={{ color: "#1a1a1a" }}>reliable analysis</strong>,{" "}
                <strong style={{ color: "#1a1a1a" }}>reproducible systems</strong>, and{" "}
                <strong style={{ color: "#1a1a1a" }}>rigorous AI evaluations</strong>.
                Freelance AI Evaluation & Benchmark Developer at{" "}
                <strong style={{ color: "#C9A84C" }}>Airdawgs</strong>.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 items-center"
              style={{ opacity: 0, animation: "heroFadeIn 0.8s ease 0.65s forwards" }}
            >
              <button onClick={() => scrollTo("projects")} className="btn-gold">
                View Projects
                <ArrowDownRight className="h-4 w-4" />
              </button>
              <a href="/resume.pdf" download="Ronanki_Tagore_Resume.pdf" className="btn-gold-outline">
                <FileText className="h-4 w-4" />
                Download Résumé
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-gold-outline"
              >
                <Mail className="h-4 w-4" />
                Hire Me
              </button>
            </div>
          </div>

          {/* Right: Avatar */}
          <div
            className="hero-avatar-wrap"
            style={{ opacity: 0, animation: "heroFadeIn 0.9s ease 0.3s forwards" }}
          >
            <img
              src="/avatar.png"
              alt="Illustrated avatar of Ronanki Tagore"
              className="hero-avatar"
            />
          </div>
        </div>
      </div>

      {/* ── BOTTOM STATUS BADGE ── */}
      <div
        className="w-full flex items-center justify-between px-6 md:px-10 pb-8 relative z-10"
        style={{ opacity: 0, animation: "heroFadeIn 0.8s ease 0.8s forwards" }}
      >
        <div className="flex items-center gap-2">
          <div className="avail-dot" />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#555" }}>
            Airdawgs · Freelance &nbsp;•&nbsp; July 2026 – Present
          </span>
        </div>
        <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>
          tagore-ronanki.netlify.app
        </span>
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
