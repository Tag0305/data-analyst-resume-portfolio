import { FadeIn } from "./FadeIn"
import { Database, ShieldCheck, Activity, BarChart3 } from "lucide-react"

const expertiseItems = [
  {
    num: "01",
    title: "Data Analytics",
    icon: BarChart3,
    description: "Transforming raw datasets into clear insights through exploratory analysis, statistical methods, visualization, and business KPI reporting.",
    tags: ["Exploratory EDA", "KPI Reporting", "Cohort Retention", "Statistical Methods"]
  },
  {
    num: "02",
    title: "SQL Development",
    icon: Database,
    description: "Building relational databases and advanced analytical queries using joins, CTEs, subqueries, window functions, retention analysis, and query optimization.",
    tags: ["PostgreSQL", "SQLite", "CTEs", "Window Functions", "Schema Design"]
  },
  {
    num: "03",
    title: "AI Benchmark & Evaluation",
    icon: ShieldCheck,
    description: "Designing deterministic evaluation tasks, public technical contracts, oracle solutions, automated verifiers, negative controls, and reproducible test environments.",
    tags: ["Docker", "Python", "Oracle Verifiers", "Deterministic Testing", "Linux"]
  },
  {
    num: "04",
    title: "Data Pipeline Engineering",
    icon: Activity,
    description: "Building automated ingestion, transformation, storage, validation, and reporting workflows using Python, SQL, APIs, and relational databases.",
    tags: ["Python Ingestion", "REST APIs", "dbt-style CTEs", "Data Staging"]
  }
]

export function CoreExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative z-20 bg-[#020503] text-[#F4FFF7] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 border-t border-[#22C55E]/20 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.08), transparent 38%), #020503"
      }}
    >
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-16">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#39FF88] font-bold">
              // TECHNICAL CAPABILITIES
            </span>
            <h2 className="hero-heading font-black uppercase text-center tracking-tight leading-none text-[clamp(2.5rem,7vw,80px)]">
              Core Expertise
            </h2>
          </div>
        </FadeIn>

        {/* 4 Core Expertise Capability Cards (Dark Technical Dashboard Surface) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.num} delay={index * 0.08} y={25}>
                <div className="expertise-card group rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 bg-[#071009] border border-[#22C55E]/24 hover:border-[#39FF88]/58 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.38),0_0_34px_rgba(34,197,94,0.08)] transition-all duration-300 relative overflow-hidden">
                  
                  {/* Card Header: Number + Line Icon Container */}
                  <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-4">
                    <span className="font-mono font-bold text-[#39FF88] text-2xl sm:text-3xl">
                      {item.num}
                    </span>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#071009] border border-[#22C55E]/30 flex items-center justify-center text-[#39FF88] group-hover:border-[#39FF88]/60 group-hover:bg-[#22C55E]/10 transition-all">
                      <Icon className="h-6 w-6 text-[#39FF88]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="font-extrabold uppercase text-[#F4FFF7] tracking-tight text-xl sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-[#A8B5AC] font-light leading-relaxed text-xs sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Dark Technology Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#22C55E]/20">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-mono bg-[#22C55E]/06 border border-[#22C55E]/30 text-[#86EFAC] px-3 py-1 rounded-full font-medium transition-colors hover:bg-[#22C55E]/12 hover:border-[#39FF88]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
