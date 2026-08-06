import { FadeIn } from "./FadeIn"
import { Database, Brain, Activity, LineChart } from "lucide-react"

const expertiseItems = [
  {
    num: "01",
    title: "Data Analytics",
    icon: LineChart,
    description: "Transforming raw datasets into clear insights through exploratory analysis, statistical methods, visualisation, and business KPI reporting.",
    tags: ["Exploratory EDA", "KPI Reporting", "Cohort Retention", "Statistical Methods"]
  },
  {
    num: "02",
    title: "SQL Development",
    icon: Database,
    description: "Building relational databases and advanced analytical queries using joins, CTEs, subqueries, window functions, retention analysis, and query optimisation.",
    tags: ["PostgreSQL", "SQLite", "CTEs", "Window Functions", "Schema Design"]
  },
  {
    num: "03",
    title: "AI Benchmark Evaluation",
    icon: Brain,
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
    <section id="expertise" className="bg-[#FFFFFF] text-[#111827] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 border-t border-[#DCE8DF]">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#159A3A] font-bold">
              // TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-[#08752A] font-black uppercase text-center tracking-tight leading-none text-[clamp(2.5rem,8vw,100px)]">
              Core Expertise
            </h2>
          </div>
        </FadeIn>

        {/* 4 Core Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.num} delay={index * 0.08} y={25}>
                <div className="white-green-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-[#159A3A] leading-none text-3xl font-mono">
                      {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#EAF8EE] border border-[#DCE8DF] flex items-center justify-center text-[#159A3A]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold uppercase text-[#08752A] tracking-tight text-lg sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="font-light text-[#53605A] leading-relaxed text-xs sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-mono bg-[#F4FBF6] border border-[#DCE8DF] text-[#08752A] px-2.5 py-1 rounded-full font-medium"
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
