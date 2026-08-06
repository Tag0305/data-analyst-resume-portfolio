import { FadeIn } from "./FadeIn"
import { CheckCircle2, ArrowUpRight } from "lucide-react"

const featuredProjects = [
  {
    num: "01",
    title: "Deterministic AI Agent Evaluation Benchmarks",
    technology: ["Python", "Go", "Java", "Bash", "Docker", "Linux", "Git"],
    description: "Designed offline, self-contained benchmark tasks with public technical contracts, oracle solutions, automated verification, negative controls, edge-case coverage, deterministic reruns, and reproducible packaging.",
    result: "Built reproducible verification systems ensuring deterministic evaluation results and state consistency.",
    image: "/images/projects/ai-benchmark-evaluation.png",
    alt: "AI benchmark evaluation dashboard showing deterministic testing workflow, containerized execution environment, oracle verification, and validation controls.",
    githubUrl: "https://github.com/Tag0305"
  },
  {
    num: "02",
    title: "SQL E-Commerce Business Analytics",
    technology: ["PostgreSQL", "SQL"],
    description: "Designed and loaded a multi-table PostgreSQL database simulating e-commerce transaction histories with custom constraints. Optimized analytical queries using CTEs, LEAD, LAG, DENSE_RANK, window functions, and self-joins to study monthly growth and cohort retention.",
    result: "Identified product categories with more than 40% repeat-purchase rates to support business KPI decisions.",
    image: "/images/projects/sql-ecommerce-analytics.png",
    alt: "Relational database schema and SQL e-commerce business analytics dashboard showing tables, orders, products, cohort retention, and analytical charts.",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "03",
    title: "Customer Churn Analytics & Predictive Modeling",
    technology: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    description: "Performed exploratory data analysis on a 1,000-customer dataset, engineered and scaled features, and compared Logistic Regression and Random Forest models.",
    result: "Achieved 88.0% prediction accuracy and found contract terms and subscription tenure to be strong retention indicators.",
    image: "/images/projects/customer-churn-analytics.png",
    alt: "Machine learning customer churn predictive modeling dashboard showing dataset distribution, Random Forest accuracy comparison, feature importance, and customer retention indicators.",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "04",
    title: "End-to-End Cloud Data Pipeline Simulation",
    technology: ["Python", "SQLite", "SQL", "BigQuery-style workflow"],
    description: "Built an automated Python pipeline to ingest data through an API, store it in a warehouse-style setup, transform it with SQL logic, and generate reporting outputs.",
    result: "Developed an automated reporting workflow to present current data metrics.",
    image: "/images/projects/cloud-data-pipeline.png",
    alt: "End-to-end cloud data pipeline engineering architecture showing REST API ingestion, SQLite warehouse staging, dbt SQL transformations, and automated reporting workflow.",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  }
]

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="py-20 bg-[#030604] border-t border-[#22C55E]/20 relative z-20 px-5 sm:px-8 md:px-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading & Subtitle */}
        <FadeIn delay={0} y={30}>
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#39FF88] font-bold">
              // CASE STUDIES &amp; TECHNICAL WORK
            </span>
            <h2 className="hero-heading font-black uppercase text-center tracking-tight leading-none text-[clamp(2.2rem,6vw,80px)]">
              Featured Projects
            </h2>
            <p className="text-[#A9B8AE] text-sm sm:text-base leading-relaxed">
              Work that reflects my skills in SQL, analytics, AI evaluation, and data pipeline engineering.
            </p>
          </div>
        </FadeIn>

        {/* 2x2 Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.num} delay={index * 0.1} y={30}>
              <div className="project-card h-full p-6 flex flex-col justify-between space-y-5 rounded-3xl bg-[#0D1812] border border-[#22C55E]/25 hover:border-[#39FF88]/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all">
                
                {/* Project Media Container - 16:10 Aspect Ratio, Clean Theme Framing */}
                <div className="project-media rounded-2xl overflow-hidden aspect-[16/10] bg-[#071009] border border-[#22C55E]/25 p-2 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                {/* Card Header & Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#39FF88]">
                      {project.num} // PROJECT
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#39FF88] hover:text-white transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#F4FFF7]">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A9B8AE] leading-relaxed">
                  {project.description}
                </p>

                {/* Outcome / Result */}
                <div className="p-3 rounded-xl bg-[#071009] border border-[#22C55E]/25">
                  <span className="text-[10px] font-mono uppercase text-[#39FF88] font-bold block mb-1">Result</span>
                  <p className="text-[#86EFAC] text-xs font-semibold flex items-start gap-1.5 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#22C55E]" />
                    {project.result}
                  </p>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#22C55E]/15">
                  {project.technology.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono bg-[#071009] border border-[#22C55E]/30 px-2.5 py-1 rounded-full text-[#39FF88] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
