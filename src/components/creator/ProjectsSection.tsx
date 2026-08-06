import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "./FadeIn"
import { LiveProjectButton } from "./LiveProjectButton"
import { CheckCircle2 } from "lucide-react"

const projectsData = [
  {
    num: "01",
    category: "Docker & Deterministic Testing",
    name: "Deterministic AI Agent Evaluation Benchmarks",
    technology: ["Python", "Go", "Java", "Bash", "Docker", "Linux", "Git"],
    problem: "Evaluating advanced AI coding agents requires reproducible, containerized test suites that prevent hallucinated passes and hardcoded solutions.",
    approach: "Designed offline, self-contained benchmark tasks with public technical contracts, oracle solutions, automated verification, negative controls, and edge-case coverage.",
    result: "Built reproducible verification systems ensuring deterministic evaluation results and state consistency.",
    image: "/images/projects/ai-benchmark-evaluation.png",
    alt: "Abstract AI benchmark verification environment with deterministic testing nodes, isolated systems, and validation controls.",
    githubUrl: "https://github.com/Tag0305"
  },
  {
    num: "02",
    category: "PostgreSQL & SQL Analytics",
    name: "SQL E-Commerce Business Analytics",
    technology: ["PostgreSQL", "SQL"],
    problem: "Unstructured transaction histories required quantitative analysis to identify high-value customer segments and calculate cohort retention.",
    approach: "Designed and loaded a multi-table PostgreSQL database simulating e-commerce transaction histories with custom constraints. Optimised analytical queries using CTEs, LEAD, LAG, DENSE_RANK, window functions, and self-joins.",
    result: "Identified product categories with more than 40% repeat-purchase rates to support marketing and inventory decisions through business KPI models.",
    image: "/images/projects/sql-ecommerce-analytics.png",
    alt: "Technical e-commerce analytics environment showing a relational database, customers, orders, products, and business charts.",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "03",
    category: "Python & Machine Learning",
    name: "Customer Churn Analytics & Predictive Modeling",
    technology: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    problem: "A subscription business faced customer churn without knowing which operational metrics or contract terms were driving cancellations.",
    approach: "Performed exploratory data analysis on a 1,000-customer dataset, engineered and scaled features, and compared Logistic Regression and Random Forest models.",
    result: "Achieved 88.0% prediction accuracy and identified contract terms and subscription tenure as important retention indicators.",
    image: "/images/projects/customer-churn-analytics.png",
    alt: "Machine-learning customer churn analysis showing customer data flowing into retained and churn-risk prediction groups.",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "04",
    category: "Python & Data Engineering",
    name: "End-to-End Cloud Data Pipeline Simulation",
    technology: ["Python", "SQLite", "SQL", "BigQuery-style workflow"],
    problem: "Manual market data collection was prone to errors, lacking real-time stream ingestion, automated transformations, and structured staging.",
    approach: "Built an automated Python pipeline to ingest real-time market asset data through an API. Loaded the data into a SQLite or BigQuery-style warehouse and applied dbt-style CTE transformations.",
    result: "Developed an automated reporting workflow to present current data metrics.",
    image: "/images/projects/cloud-data-pipeline.png",
    alt: "Automated data pipeline showing API ingestion, transformation, database storage, SQL processing, and analytics reporting.",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  }
]

function StickyCard({ project, index, totalCards }: { project: typeof projectsData[0]; index: number; totalCards: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.025
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="sticky h-[88vh] flex items-center justify-center"
      style={{ top: `calc(5rem + ${index * 24}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="project-card w-full p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#22C55E]/20 pb-4 mb-4">
          <div className="flex items-center gap-4">
            <span className="font-black text-[#39FF88] leading-none text-[clamp(2.2rem,5vw,4.5rem)] font-mono">
              {project.num}
            </span>
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase text-[#22C55E] block tracking-widest font-bold">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl font-bold uppercase tracking-tight text-[#F4FFF7]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.githubUrl} label="View Repository" />
        </div>

        {/* Card Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center overflow-y-auto">
          {/* Left Column: Project Media Area */}
          <div className="md:col-span-6 h-full flex items-center justify-center">
            <div className="project-media">
              <img
                src={project.image}
                alt={project.alt}
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="md:col-span-6 space-y-3 text-xs sm:text-sm">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A9B8AE] font-bold block mb-1">Context / Problem</span>
              <p className="text-[#F4FFF7]/90 leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A9B8AE] font-bold block mb-1">Approach</span>
              <p className="text-[#F4FFF7]/90 leading-relaxed">{project.approach}</p>
            </div>

            <div className="p-3 rounded-xl bg-[#071009] border border-[#22C55E]/30">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#39FF88] font-bold block mb-1">Verified Result</span>
              <p className="text-[#86EFAC] font-semibold flex items-start gap-1.5 leading-relaxed">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#22C55E]" />
                {project.result}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technology.map((t) => (
                <span key={t} className="text-[10px] font-mono bg-[#071009] border border-[#22C55E]/30 px-2.5 py-1 rounded-full text-[#39FF88] font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#030604] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 pb-32">
      <div className="max-w-6xl mx-auto space-y-14">
        <FadeIn delay={0} y={30}>
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#39FF88] font-bold">// SELECTED CASE STUDIES</span>
            <h2 className="hero-heading font-black uppercase text-center tracking-tight leading-none text-[clamp(2.5rem,8vw,100px)]">
              Projects
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-10 relative">
          {projectsData.map((project, index) => (
            <StickyCard
              key={project.num}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
