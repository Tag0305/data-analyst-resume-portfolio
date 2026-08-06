import * as React from "react"
import { CheckCircle2, ArrowUpRight, Code2, Terminal, GraduationCap } from "lucide-react"

export function MarqueeSection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollPos = window.scrollY - (window.scrollY + rect.top) + window.innerHeight
      setOffset(scrollPos * 0.25)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  // Row 1 Blocks (Blocks 1 - 4)
  const row1Blocks = [
    // BLOCK 1 — MAIN PORTFOLIO INTRODUCTION
    <div key="b1" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-6 flex flex-col justify-between shrink-0 shadow-2xl relative overflow-hidden group">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#39FF88]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="space-y-2 relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#39FF88] font-bold">// BLOCK 01 • PROFILE</span>
        <h2 className="text-3xl font-black uppercase text-[#39FF88] tracking-tight leading-none font-mono">
          TAGORE
        </h2>
        <p className="text-xs font-mono font-bold text-[#22C55E] uppercase tracking-wide">
          Data Analyst • SQL Developer • AI Evaluation Developer
        </p>
        <p className="text-xs text-[#A7B5AB] leading-relaxed pt-1">
          I transform raw data and complex technical requirements into reliable analysis, reproducible systems, and rigorous AI evaluations.
        </p>
      </div>
      <div className="flex gap-2 pt-2 relative z-10">
        <button onClick={() => scrollTo("projects")} className="px-4 py-2 rounded-full bg-[#22C55E] hover:bg-[#39FF88] text-[#021006] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
          View Projects
        </button>
        <a href="/resume.pdf" download="Ronanki_Tagore_Resume.pdf">
          <button className="px-4 py-2 rounded-full border border-[#22C55E]/40 text-[#F5FFF7] text-xs font-bold uppercase tracking-wider hover:bg-[#22C55E]/20 transition-all cursor-pointer">
            Download Résumé
          </button>
        </a>
      </div>
    </div>,

    // BLOCK 2 — AI BENCHMARK AND EVALUATION WORK
    <div key="b2" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden group">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold">// BLOCK 02 • AI EVALUATION</span>
        <span className="text-[10px] font-mono text-[#22C55E] font-bold">Python / Docker / Go</span>
      </div>
      <div className="project-media w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#071009] border border-[#22C55E]/20 my-2">
        <img
          src="/images/projects/ai-benchmark-evaluation.png"
          alt="Abstract AI benchmark verification environment"
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold uppercase text-[#F5FFF7] tracking-tight">Deterministic AI Agent Evaluation Benchmarks</h3>
        <p className="text-[11px] text-[#A7B5AB] line-clamp-2">
          Offline, self-contained benchmark tasks with technical contracts, oracle solutions, automated verifiers, negative controls, and deterministic reruns.
        </p>
      </div>
    </div>,

    // BLOCK 3 — SQL E-COMMERCE ANALYTICS
    <div key="b3" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden group">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold">// BLOCK 03 • SQL ANALYTICS</span>
        <span className="text-[10px] font-mono text-[#22C55E] font-bold">PostgreSQL / SQL</span>
      </div>
      <div className="project-media w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#071009] border border-[#22C55E]/20 my-2">
        <img
          src="/images/projects/sql-ecommerce-analytics.png"
          alt="Technical e-commerce analytics environment showing relational database"
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold uppercase text-[#F5FFF7] tracking-tight">SQL E-Commerce Business Analytics</h3>
        <p className="text-[11px] text-[#86EFAC] font-semibold flex items-center gap-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E]" />
          Identified product categories with &gt;40% repeat-purchase rates.
        </p>
      </div>
    </div>,

    // BLOCK 4 — CUSTOMER CHURN MACHINE LEARNING
    <div key="b4" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden group">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold">// BLOCK 04 • MACHINE LEARNING</span>
        <span className="text-[10px] font-mono text-[#22C55E] font-bold">Python / Scikit-Learn</span>
      </div>
      <div className="project-media w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#071009] border border-[#22C55E]/20 my-2">
        <img
          src="/images/projects/customer-churn-analytics.png"
          alt="Machine-learning customer churn analysis"
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold uppercase text-[#F5FFF7] tracking-tight">Customer Churn Analytics & Predictive Modeling</h3>
        <p className="text-[11px] text-[#86EFAC] font-semibold flex items-center gap-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E]" />
          Achieved 88.0% prediction accuracy using Random Forest models.
        </p>
      </div>
    </div>
  ]

  // Row 2 Blocks (Blocks 5 - 8)
  const row2Blocks = [
    // BLOCK 5 — CLOUD DATA PIPELINE
    <div key="b5" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden group">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold">// BLOCK 05 • DATA PIPELINE</span>
        <span className="text-[10px] font-mono text-[#22C55E] font-bold">Python / SQLite / APIs</span>
      </div>
      <div className="project-media w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#071009] border border-[#22C55E]/20 my-2">
        <img
          src="/images/projects/cloud-data-pipeline.png"
          alt="Automated data pipeline showing API ingestion and storage"
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold uppercase text-[#F5FFF7] tracking-tight">End-to-End Cloud Data Pipeline Simulation</h3>
        <p className="text-[11px] text-[#A7B5AB] line-clamp-2">
          Automated Python workflow for real-time REST API ingestion, SQLite staging warehouse, and dbt-style SQL CTE transformations.
        </p>
      </div>
    </div>,

    // BLOCK 6 — TECHNICAL SKILLS
    <div key="b6" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold">// BLOCK 06 • TECHNICAL STACK</span>
        <Code2 className="h-4 w-4 text-[#39FF88]" />
      </div>
      <div className="space-y-2 my-1 text-xs">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">Languages & Databases</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {["Python", "SQL", "Go", "Java", "Bash", "PostgreSQL", "SQLite", "MySQL"].map(s => (
              <span key={s} className="text-[10px] font-mono bg-[#0C1810] border border-[#22C55E]/30 px-2 py-0.5 rounded text-[#39FF88]">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">Data & Engineering Tools</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {["Pandas", "Scikit-Learn", "Docker", "Linux", "Git", "Pytest", "Power BI", "Excel"].map(s => (
              <span key={s} className="text-[10px] font-mono bg-[#0C1810] border border-[#22C55E]/30 px-2 py-0.5 rounded text-[#A7B5AB]">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-1 border-t border-[#22C55E]/15 text-[10px] font-mono text-[#748078]">
        Zero fake proficiency percentage bars. Verified skills from resume.
      </div>
    </div>,

    // BLOCK 7 — INDEPENDENT EXPERIENCE
    <div key="b7" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold">// BLOCK 07 • EXPERIENCE</span>
        <Terminal className="h-4 w-4 text-[#39FF88]" />
      </div>
      <div className="space-y-1.5 my-1">
        <h3 className="text-sm font-bold uppercase text-[#F5FFF7]">Independent AI Benchmark Developer</h3>
        <span className="text-[10px] font-mono text-[#22C55E] font-bold block">Freelance / Independent • July 2026 – Present</span>
        <ul className="text-[11px] text-[#A7B5AB] space-y-1 list-disc list-inside pt-1">
          <li>Design deterministic benchmarks for AI agents in Docker environments.</li>
          <li>Build oracle solutions, test suites, and scoring rubrics.</li>
          <li>Verify edge cases, invalid inputs, and state consistency.</li>
        </ul>
      </div>
      <div className="pt-1 border-t border-[#22C55E]/15 text-[10px] font-mono text-[#748078]">
        Confidentiality-safe independent developer profile.
      </div>
    </div>,

    // BLOCK 8 — WORKFLOW, EDUCATION, AND CONTACT
    <div key="b8" className="w-[440px] h-[340px] rounded-3xl bg-[#08110B] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold">// BLOCK 08 • WORKFLOW & EDUCATION</span>
        <GraduationCap className="h-4 w-4 text-[#39FF88]" />
      </div>
      <div className="space-y-2 text-xs my-1">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">Development Workflow</span>
          <p className="text-[10px] font-mono text-[#A7B5AB] pt-0.5">Research ➔ Spec ➔ Implementation ➔ Oracle ➔ Test ➔ Package ➔ Review</p>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">IIIT Manipur</span>
          <p className="text-[11px] font-bold text-[#F5FFF7]">B.Tech ECE (Nov 2022 – May 2026)</p>
        </div>
        <div className="text-[10px] text-[#A7B5AB] space-y-0.5 pt-1 border-t border-[#22C55E]/15">
          <p>📧 tagoreronanki77@gmail.com</p>
          <p>📍 Palasa, Srikakulam, Andhra Pradesh, India</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-[10px] font-mono text-[#39FF88] pt-1 border-t border-[#22C55E]/15">
        <span>GitHub: Tag0305</span>
        <a href="https://linkedin.com/in/tagoreronanki" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
          LinkedIn <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  ]

  // Tripled for seamless horizontal movement
  const row1Tripled = [...row1Blocks, ...row1Blocks, ...row1Blocks]
  const row2Tripled = [...row2Blocks, ...row2Blocks, ...row2Blocks]

  return (
    <section ref={sectionRef} className="bg-[#030604] pt-16 pb-12 overflow-hidden space-y-4 border-t border-b border-[#22C55E]/20 relative z-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2 mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#39FF88] font-bold">
          // PORTFOLIO SHOWCASE GALLERY (EXACT 8 BLOCKS)
        </span>
        <h2 className="hero-heading font-black uppercase text-center tracking-tight leading-none text-[clamp(2rem,5vw,60px)]">
          Interactive Work Showcase
        </h2>
      </div>

      {/* Row 1 - Moves RIGHT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 w-max px-4"
          style={{
            transform: `translateX(${offset - 100}px)`,
            willChange: "transform"
          }}
        >
          {row1Tripled.map((block, idx) => (
            <React.Fragment key={`r1-${idx}`}>{block}</React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2 - Moves LEFT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 w-max px-4"
          style={{
            transform: `translateX(${-(offset - 100)}px)`,
            willChange: "transform"
          }}
        >
          {row2Tripled.map((block, idx) => (
            <React.Fragment key={`r2-${idx}`}>{block}</React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
