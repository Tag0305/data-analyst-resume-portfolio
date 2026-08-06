import { FadeIn } from "./FadeIn"
import { Database, Brain, Activity, LineChart, ShieldCheck } from "lucide-react"

const expertiseItems = [
  {
    num: "01",
    title: "Data Analysis & Business Insights",
    icon: LineChart,
    description: "Translating complex database structures into commercial revenue metrics. Performing monthly growth analysis, cohort retention modeling, customer lifetime value tracking, and executive KPI reporting.",
    tags: ["Cohort Retention", "CLV Modeling", "MoM Growth", "Descriptive Analysis"]
  },
  {
    num: "02",
    title: "SQL Development & Database Design",
    icon: Database,
    description: "Designing normalized multi-table relational schemas (PostgreSQL, MySQL, SQLite) with strict constraints. Writing performance-tuned analytical queries using CTEs, window functions (LEAD, LAG, DENSE_RANK), and multi-table self-joins.",
    tags: ["PostgreSQL", "SQLite", "CTEs", "Window Functions", "Schema Design"]
  },
  {
    num: "03",
    title: "Machine Learning & Predictive Modeling",
    icon: Brain,
    description: "Performing exploratory data analysis (EDA), feature engineering, scaling, and training machine learning classification algorithms (Logistic Regression, Random Forest) achieving 88.0% churn prediction accuracy.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Feature Importance"]
  },
  {
    num: "04",
    title: "Data Pipelines & Automation",
    icon: Activity,
    description: "Building automated Python ingestion scripts fetching live REST API market streams, staging local SQLite data warehouses, and executing dbt-style SQL CTE transformations.",
    tags: ["Python Ingestion", "REST APIs", "dbt-style SQL", "ETL/ELT Pipelines"]
  },
  {
    num: "05",
    title: "AI Benchmark & Evaluation Engineering",
    icon: ShieldCheck,
    description: "Designing deterministic coding benchmarks, containerized Docker test suites, oracle solutions, scoring rubrics, and automated verifiers for evaluating advanced AI coding agents.",
    tags: ["Docker", "Python", "Linux", "Bash", "Oracle Verifiers", "Deterministic Testing"]
  }
]

export function CoreExpertiseSection() {
  return (
    <section id="expertise" className="bg-[#FFFFFF] text-[#102017] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 border-t border-[#D7E5DA]">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#16803A] font-bold">
              // TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-[#0B4F2A] font-black uppercase text-center tracking-tight leading-none text-[clamp(2.5rem,8vw,100px)]">
              Core Expertise
            </h2>
          </div>
        </FadeIn>

        {/* 5 Core Expertise Cards */}
        <div className="divide-y divide-[#D7E5DA] border-t border-b border-[#D7E5DA]">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.num} delay={index * 0.08} y={25}>
                <div className="flex flex-col md:flex-row items-start justify-between py-8 sm:py-10 gap-6">
                  {/* Left: Number & Icon */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-black text-[#16803A] leading-none text-[clamp(2.5rem,7vw,90px)] font-mono">
                      {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#EEF7F0] border border-[#D7E5DA] flex items-center justify-center text-[#16803A]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Right: Title, Description, Technology Chips */}
                  <div className="space-y-3 flex-1 md:max-w-2xl">
                    <h3 className="font-bold uppercase text-[#0B4F2A] tracking-tight text-lg sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="font-light text-[#506158] leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-xs font-mono bg-[#EEF7F0] border border-[#D7E5DA] text-[#0B4F2A] px-2.5 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
