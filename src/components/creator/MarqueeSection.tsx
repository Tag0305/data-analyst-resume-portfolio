import * as React from "react"
import { ArrowUpRight, Database, Brain, Activity, ShieldCheck, Terminal, GraduationCap, BarChart3, Layers, Cpu } from "lucide-react"

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

  // --- CARD 1: PORTFOLIO OVERVIEW DASHBOARD ---
  const Card1 = (
    <div key="c1" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-6 flex flex-col justify-between shrink-0 shadow-2xl relative overflow-hidden group">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#39FF88] font-bold block">// SYSTEM OVERVIEW</span>
          <h2 className="text-3xl font-black uppercase text-[#39FF88] tracking-tight leading-none font-mono">
            TAGORE
          </h2>
        </div>
        <div className="flex gap-1.5 text-[10px] font-mono bg-[#0B1710] border border-[#22C55E]/30 px-2.5 py-1 rounded-full text-[#86EFAC]">
          <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-ping" />
          <span>ONLINE</span>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-mono font-bold text-[#22C55E] uppercase tracking-wide">
          Data Analyst • SQL Developer • AI Benchmark & Evaluation Developer
        </p>
        <p className="text-xs text-[#A8B5AC] leading-relaxed">
          I transform raw data and complex technical requirements into reliable analysis, reproducible systems, and rigorous AI evaluations.
        </p>
      </div>

      {/* 4 Technical Summary Modules */}
      <div className="grid grid-cols-2 gap-2 my-1">
        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <div className="flex items-center gap-1.5 text-[#39FF88] text-[10px] font-mono font-bold">
            <BarChart3 className="h-3.5 w-3.5 text-[#22C55E]" />
            Data Analytics
          </div>
          <span className="text-[9px] text-[#748078] block mt-0.5">Cohort & KPI Reporting</span>
        </div>
        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <div className="flex items-center gap-1.5 text-[#39FF88] text-[10px] font-mono font-bold">
            <Database className="h-3.5 w-3.5 text-[#22C55E]" />
            SQL Development
          </div>
          <span className="text-[9px] text-[#748078] block mt-0.5">PostgreSQL CTEs & Joins</span>
        </div>
        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <div className="flex items-center gap-1.5 text-[#39FF88] text-[10px] font-mono font-bold">
            <Brain className="h-3.5 w-3.5 text-[#22C55E]" />
            Machine Learning
          </div>
          <span className="text-[9px] text-[#748078] block mt-0.5">88.0% Accuracy Model</span>
        </div>
        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <div className="flex items-center gap-1.5 text-[#39FF88] text-[10px] font-mono font-bold">
            <ShieldCheck className="h-3.5 w-3.5 text-[#22C55E]" />
            AI Evaluation
          </div>
          <span className="text-[9px] text-[#748078] block mt-0.5">Docker Test Suites</span>
        </div>
      </div>

      <div className="flex gap-2 pt-1 border-t border-[#22C55E]/15">
        <button onClick={() => scrollTo("projects")} className="flex-1 py-2 rounded-full bg-[#22C55E] hover:bg-[#39FF88] text-[#021006] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
          View Projects
        </button>
        <a href="/resume.pdf" download="Ronanki_Tagore_Resume.pdf" className="flex-1">
          <button className="w-full py-2 rounded-full border border-[#22C55E]/40 text-[#F4FFF7] text-xs font-bold uppercase tracking-wider hover:bg-[#22C55E]/20 transition-all cursor-pointer">
            Download Résumé
          </button>
        </a>
      </div>
    </div>
  )

  // --- CARD 2: AI BENCHMARK VERIFICATION DASHBOARD ---
  const Card2 = (
    <div key="c2" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block">// QUALITY ENGINEERING</span>
          <h3 className="text-xs font-bold uppercase text-[#F4FFF7]">AI Agent Benchmark Verification</h3>
        </div>
        <ShieldCheck className="h-5 w-5 text-[#39FF88]" />
      </div>

      {/* Verification Status Matrix */}
      <div className="grid grid-cols-2 gap-1.5 my-1">
        <div className="p-1.5 rounded-lg bg-[#09130D] border border-[#22C55E]/20 text-[10px] font-mono">
          <span className="text-[#748078] block">Oracle Verification</span>
          <span className="text-[#39FF88] font-bold">Implemented</span>
        </div>
        <div className="p-1.5 rounded-lg bg-[#09130D] border border-[#22C55E]/20 text-[10px] font-mono">
          <span className="text-[#748078] block">Determinism Check</span>
          <span className="text-[#39FF88] font-bold">Included</span>
        </div>
        <div className="p-1.5 rounded-lg bg-[#09130D] border border-[#22C55E]/20 text-[10px] font-mono">
          <span className="text-[#748078] block">Negative Controls</span>
          <span className="text-[#39FF88] font-bold">Included</span>
        </div>
        <div className="p-1.5 rounded-lg bg-[#09130D] border border-[#22C55E]/20 text-[10px] font-mono">
          <span className="text-[#748078] block">Invalid Input</span>
          <span className="text-[#39FF88] font-bold">Included</span>
        </div>
      </div>

      {/* Terminal Command Window */}
      <div className="p-2.5 rounded-xl bg-[#020503] border border-[#22C55E]/30 font-mono text-[10px] space-y-1">
        <div className="flex items-center gap-1.5 text-[#748078] border-b border-[#22C55E]/15 pb-1">
          <Terminal className="h-3 w-3 text-[#39FF88]" />
          <span>verifier-console.sh</span>
        </div>
        <p className="text-[#39FF88]">$ run-oracle --task=benchmark_suite</p>
        <p className="text-[#86EFAC]">validation workflow executed: deterministic oracle PASS</p>
        <p className="text-[#39FF88]">$ run-verifier --sandbox=docker</p>
        <p className="text-[#86EFAC]">required checks executed: 0 anti-hardcoding flags</p>
      </div>

      <div className="flex flex-wrap gap-1 pt-1">
        {["Python", "Go", "Java", "Bash", "Docker", "Linux", "Git"].map(t => (
          <span key={t} className="text-[9px] font-mono bg-[#0B1710] border border-[#22C55E]/30 px-2 py-0.5 rounded text-[#39FF88]">{t}</span>
        ))}
      </div>
    </div>
  )

  // --- CARD 3: SQL E-COMMERCE ANALYTICS DASHBOARD ---
  const Card3 = (
    <div key="c3" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block">// BUSINESS ANALYTICS</span>
          <h3 className="text-xs font-bold uppercase text-[#F4FFF7]">SQL E-Commerce Business Analytics</h3>
        </div>
        <Database className="h-5 w-5 text-[#39FF88]" />
      </div>

      {/* KPI Highlight & Query Editor */}
      <div className="grid grid-cols-12 gap-2 my-1">
        <div className="col-span-4 p-2.5 rounded-xl bg-[#09130D] border border-[#22C55E]/30 flex flex-col justify-center text-center">
          <span className="text-[9px] font-mono text-[#748078] uppercase block font-bold">Repeat Purchase</span>
          <span className="text-2xl font-black text-[#39FF88] font-mono">40%+</span>
          <span className="text-[8px] text-[#86EFAC]">Verified KPI</span>
        </div>

        <div className="col-span-8 p-2 rounded-xl bg-[#020503] border border-[#22C55E]/30 font-mono text-[9px] text-[#A8B5AC] overflow-x-auto">
          <span className="text-[#39FF88] block font-bold">-- PostgreSQL Analytics Query</span>
          <p className="text-[#86EFAC]">WITH monthly_orders AS (</p>
          <p className="pl-2">SELECT DATE_TRUNC(&apos;month&apos;, order_date) AS m,</p>
          <p className="pl-2 font-bold text-[#39FF88]">COUNT(*) AS orders, DENSE_RANK() OVER(...)</p>
          <p className="pl-2">FROM orders GROUP BY 1)</p>
          <p className="text-[#86EFAC]">SELECT * FROM monthly_orders ORDER BY m;</p>
        </div>
      </div>

      {/* SVG Analytics Bar Chart Interface Preview */}
      <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20 space-y-1">
        <div className="flex justify-between items-center text-[9px] font-mono text-[#748078]">
          <span>Interface Preview • Cohort Retention Bar Chart</span>
          <span className="text-[#39FF88]">PostgreSQL</span>
        </div>
        <svg viewBox="0 0 380 45" className="w-full h-10">
          <rect x="10" y="15" width="40" height="25" fill="#22C55E" rx="3"/>
          <rect x="60" y="10" width="40" height="30" fill="#39FF88" rx="3"/>
          <rect x="110" y="5" width="40" height="35" fill="#22C55E" rx="3"/>
          <rect x="160" y="18" width="40" height="22" fill="#39FF88" rx="3"/>
          <rect x="210" y="8" width="40" height="32" fill="#22C55E" rx="3"/>
          <rect x="260" y="12" width="40" height="28" fill="#39FF88" rx="3"/>
          <rect x="310" y="4" width="40" height="36" fill="#22C55E" rx="3"/>
        </svg>
      </div>

      <div className="flex flex-wrap gap-1 pt-1">
        {["PostgreSQL", "SQL", "CTEs", "LEAD", "LAG", "DENSE_RANK", "Window Functions"].map(t => (
          <span key={t} className="text-[9px] font-mono bg-[#0B1710] border border-[#22C55E]/30 px-2 py-0.5 rounded text-[#39FF88]">{t}</span>
        ))}
      </div>
    </div>
  )

  // --- CARD 4: CUSTOMER CHURN ANALYTICS DASHBOARD ---
  const Card4 = (
    <div key="c4" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block">// MACHINE LEARNING</span>
          <h3 className="text-xs font-bold uppercase text-[#F4FFF7]">Customer Churn Analytics & Modeling</h3>
        </div>
        <Brain className="h-5 w-5 text-[#39FF88]" />
      </div>

      {/* Verified Metrics Cards */}
      <div className="grid grid-cols-2 gap-2 my-1">
        <div className="p-2.5 rounded-xl bg-[#09130D] border border-[#22C55E]/30 text-center">
          <span className="text-[9px] font-mono text-[#748078] uppercase block font-bold">Dataset Size</span>
          <span className="text-xl font-black text-[#39FF88] font-mono">1,000</span>
          <span className="text-[8px] text-[#86EFAC]">Customers</span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#09130D] border border-[#22C55E]/30 text-center">
          <span className="text-[9px] font-mono text-[#748078] uppercase block font-bold">Model Accuracy</span>
          <span className="text-xl font-black text-[#39FF88] font-mono">88.0%</span>
          <span className="text-[8px] text-[#86EFAC]">Random Forest</span>
        </div>
      </div>

      {/* Retention Indicator Breakdown */}
      <div className="p-2.5 rounded-xl bg-[#020503] border border-[#22C55E]/30 text-[10px] space-y-1">
        <span className="text-[#39FF88] font-mono font-bold block">// Key Retention Indicators</span>
        <div className="flex justify-between items-center text-[#A8B5AC]">
          <span>• Contract Term Duration:</span>
          <span className="text-[#39FF88] font-mono">High Importance</span>
        </div>
        <div className="flex justify-between items-center text-[#A8B5AC]">
          <span>• Subscription Tenure:</span>
          <span className="text-[#39FF88] font-mono">High Importance</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 pt-1">
        {["Python", "Pandas", "Scikit-Learn", "Seaborn", "EDA", "Random Forest"].map(t => (
          <span key={t} className="text-[9px] font-mono bg-[#0B1710] border border-[#22C55E]/30 px-2 py-0.5 rounded text-[#39FF88]">{t}</span>
        ))}
      </div>
    </div>
  )

  // --- CARD 5: CLOUD DATA PIPELINE MONITOR ---
  const Card5 = (
    <div key="c5" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block">// DATA ENGINEERING</span>
          <h3 className="text-xs font-bold uppercase text-[#F4FFF7]">End-to-End Cloud Data Pipeline</h3>
        </div>
        <Activity className="h-5 w-5 text-[#39FF88]" />
      </div>

      {/* DAG Workflow Nodes */}
      <div className="flex items-center justify-between p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20 text-[9px] font-mono my-1">
        <div className="text-center">
          <span className="text-[#39FF88] font-bold block">REST API</span>
          <span className="text-[#748078]">Ingest</span>
        </div>
        <span className="text-[#22C55E]">➔</span>
        <div className="text-center">
          <span className="text-[#39FF88] font-bold block">SQLite</span>
          <span className="text-[#748078]">Stage</span>
        </div>
        <span className="text-[#22C55E]">➔</span>
        <div className="text-center">
          <span className="text-[#39FF88] font-bold block">dbt CTE</span>
          <span className="text-[#748078]">Transform</span>
        </div>
        <span className="text-[#22C55E]">➔</span>
        <div className="text-center">
          <span className="text-[#39FF88] font-bold block">BI Report</span>
          <span className="text-[#748078]">Output</span>
        </div>
      </div>

      {/* Terminal Execution Log */}
      <div className="p-2.5 rounded-xl bg-[#020503] border border-[#22C55E]/30 font-mono text-[9.5px] space-y-0.5">
        <p className="text-[#A8B5AC]"><span className="text-[#39FF88]">[INGEST]</span> API response stream received: 200 OK</p>
        <p className="text-[#A8B5AC]"><span className="text-[#39FF88]">[VALIDATE]</span> Schema accepted &amp; normalized</p>
        <p className="text-[#A8B5AC]"><span className="text-[#39FF88]">[TRANSFORM]</span> SQL dbt CTE models executed</p>
        <p className="text-[#A8B5AC]"><span className="text-[#39FF88]">[REPORT]</span> Analytics dashboard dataset updated</p>
      </div>

      <div className="flex flex-wrap gap-1 pt-1">
        {["Python", "REST API", "SQLite", "SQL", "ETL", "Data Validation"].map(t => (
          <span key={t} className="text-[9px] font-mono bg-[#0B1710] border border-[#22C55E]/30 px-2 py-0.5 rounded text-[#39FF88]">{t}</span>
        ))}
      </div>
    </div>
  )

  // --- CARD 6: TECHNICAL SKILLS CONTROL PANEL ---
  const Card6 = (
    <div key="c6" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block">// CONTROL PANEL</span>
          <h3 className="text-xs font-bold uppercase text-[#F4FFF7]">Technical Stack &amp; Tools</h3>
        </div>
        <Cpu className="h-5 w-5 text-[#39FF88]" />
      </div>

      <div className="grid grid-cols-2 gap-2 my-1 text-xs">
        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">Languages</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {["Python", "SQL", "Go", "Java", "Bash"].map(s => (
              <span key={s} className="text-[9px] font-mono bg-[#0B1710] px-1.5 py-0.5 rounded text-[#39FF88]">{s}</span>
            ))}
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">Databases</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {["PostgreSQL", "SQLite", "MySQL"].map(s => (
              <span key={s} className="text-[9px] font-mono bg-[#0B1710] px-1.5 py-0.5 rounded text-[#39FF88]">{s}</span>
            ))}
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">ML &amp; Libraries</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {["Pandas", "Scikit-Learn", "Seaborn"].map(s => (
              <span key={s} className="text-[9px] font-mono bg-[#0B1710] px-1.5 py-0.5 rounded text-[#A8B5AC]">{s}</span>
            ))}
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">Engineering</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {["Docker", "Linux", "Git", "Pytest"].map(s => (
              <span key={s} className="text-[9px] font-mono bg-[#0B1710] px-1.5 py-0.5 rounded text-[#A8B5AC]">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-1 border-t border-[#22C55E]/15 text-[9.5px] font-mono text-[#748078]">
        Grouped technical matrix from resume. Zero fake percentage bars.
      </div>
    </div>
  )

  // --- CARD 7: AI EVALUATION WORKFLOW DASHBOARD ---
  const Card7 = (
    <div key="c7" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block">// WORK EXPERIENCE</span>
          <h3 className="text-xs font-bold uppercase text-[#F4FFF7]">Independent AI Benchmark Developer</h3>
        </div>
        <Layers className="h-5 w-5 text-[#39FF88]" />
      </div>

      <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20 text-[10px] space-y-1">
        <span className="text-[#39FF88] font-mono font-bold">Freelance / Independent • July 2026 – Present</span>
        <div className="grid grid-cols-2 gap-1 text-[9.5px] text-[#A8B5AC] pt-1">
          <span className="p-1 rounded bg-[#020503] border border-[#22C55E]/20 font-mono">Docker Runtime: Checked</span>
          <span className="p-1 rounded bg-[#020503] border border-[#22C55E]/20 font-mono">Invalid Input: Tested</span>
          <span className="p-1 rounded bg-[#020503] border border-[#22C55E]/20 font-mono">State Consistency: Tested</span>
          <span className="p-1 rounded bg-[#020503] border border-[#22C55E]/20 font-mono">Packaging: Validated</span>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-[#020503] border border-[#22C55E]/20 text-[9.5px] font-mono text-[#748078]">
        Workflow: Proposal ➔ Spec ➔ Implementation ➔ Oracle ➔ Verifier ➔ Packaging ➔ Review
      </div>
    </div>
  )

  // --- CARD 8: EDUCATION AND CONTACT CONSOLE ---
  const Card8 = (
    <div key="c8" className="w-[460px] h-[360px] rounded-3xl bg-[#071009] border border-[#22C55E]/30 p-5 flex flex-col justify-between shrink-0 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-2">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block">// EDUCATION &amp; CONTACT</span>
          <h3 className="text-xs font-bold uppercase text-[#F4FFF7]">IIIT Manipur &amp; Direct Details</h3>
        </div>
        <GraduationCap className="h-5 w-5 text-[#39FF88]" />
      </div>

      <div className="space-y-1.5 my-1 text-xs">
        <div className="p-2 rounded-xl bg-[#09130D] border border-[#22C55E]/20">
          <span className="text-[10px] font-mono uppercase text-[#22C55E] font-bold block">Indian Institute of Information Technology Manipur</span>
          <p className="text-xs font-bold text-[#F4FFF7]">B.Tech in Electronics &amp; Communication Engineering</p>
          <span className="text-[9.5px] text-[#748078] block">Nov 2022 – May 2026 • Senapati, Manipur</span>
        </div>

        <div className="p-2 rounded-xl bg-[#020503] border border-[#22C55E]/20 text-[10px] font-mono text-[#A8B5AC] space-y-0.5">
          <p>📧 tagoreronanki77@gmail.com</p>
          <p>📞 +91 9390017456</p>
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
  )

  const row1 = [Card1, Card2, Card3, Card4]
  const row2 = [Card5, Card6, Card7, Card8]

  // Tripled for smooth animation sequence
  const row1Tripled = [...row1, ...row1, ...row1]
  const row2Tripled = [...row2, ...row2, ...row2]

  return (
    <section ref={sectionRef} className="bg-[#020503] pt-16 pb-12 overflow-hidden space-y-4 border-t border-b border-[#22C55E]/20 relative z-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2 mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#39FF88] font-bold">
          // INTERACTIVE DASHBOARD SHOWCASE (ZERO AVATARS • 8 PURE FRONTEND CARDS)
        </span>
        <h2 className="hero-heading font-black uppercase text-center tracking-tight leading-none text-[clamp(2rem,5vw,60px)]">
          Interactive Work Showcase
        </h2>
      </div>

      {/* Row 1 - Moves LEFT */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 w-max px-4"
          style={{
            transform: `translateX(${-offset}px)`,
            willChange: "transform"
          }}
        >
          {row1Tripled.map((card, idx) => (
            <React.Fragment key={`r1-${idx}`}>{card}</React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2 - Moves RIGHT */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 w-max px-4"
          style={{
            transform: `translateX(${offset}px)`,
            willChange: "transform"
          }}
        >
          {row2Tripled.map((card, idx) => (
            <React.Fragment key={`r2-${idx}`}>{card}</React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
