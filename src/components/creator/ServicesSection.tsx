import { FadeIn } from "./FadeIn"

const servicesData = [
  {
    num: "01",
    name: "SQL & Database Querying",
    description: "Designing normalized relational schemas (PostgreSQL, MySQL, SQLite) with strict constraints. Writing performance-tuned analytical queries using CTEs, window functions (LEAD, LAG, DENSE_RANK), and multi-table joins to calculate customer cohort retention."
  },
  {
    num: "02",
    name: "Predictive Analytics & ML",
    description: "Exploratory data analysis using Pandas and Seaborn. Feature engineering, scaling, and training machine learning classification algorithms (Logistic Regression, Random Forest) achieving 88.0% churn prediction accuracy."
  },
  {
    num: "03",
    name: "Data Pipeline Automation",
    description: "Building automated Python ingestion scripts fetching live REST API market streams, staging SQLite data warehouses, and executing dbt-style SQL CTE transformations."
  },
  {
    num: "04",
    name: "Business Intelligence & BI",
    description: "Crafting executive reporting systems, cohort analysis dashboards, and financial models using Power BI, Tableau, and Microsoft Excel."
  },
  {
    num: "05",
    name: "AI Agent Evaluation & Benchmarking",
    description: "Designing deterministic coding benchmarks, containerized Docker test suites, oracle solutions, and scoring rubrics for evaluating advanced AI agents."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 md:space-y-28">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center tracking-tight leading-none text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of 5 Services */}
        <div className="divide-y divide-[rgba(12,12,12,0.15)] border-t border-b border-[rgba(12,12,12,0.15)]">
          {servicesData.map((s, index) => (
            <FadeIn key={s.num} delay={index * 0.1} y={30}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 sm:py-10 md:py-12 gap-4 md:gap-8">
                {/* Number on left */}
                <span className="font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)] shrink-0">
                  {s.num}
                </span>

                {/* Name + Description on right */}
                <div className="space-y-2 flex-1 md:max-w-2xl">
                  <h3 className="font-medium uppercase text-[#0C0C0C] tracking-tight text-[clamp(1rem,2.2vw,2.1rem)]">
                    {s.name}
                  </h3>
                  <p className="font-light text-[#0C0C0C] opacity-60 leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {s.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
