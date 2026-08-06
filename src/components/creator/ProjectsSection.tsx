import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "./FadeIn"
import { LiveProjectButton } from "./LiveProjectButton"
import { CheckCircle2 } from "lucide-react"

const projectsData = [
  {
    num: "01",
    category: "PostgreSQL & SQL Analytics",
    name: "SQL E-Commerce Business Analytics",
    technology: ["PostgreSQL", "SQL", "CTEs", "Window Functions"],
    problem: "Unstructured transaction histories required quantitative analysis to identify high-value customer segments and calculate cohort retention.",
    approach: "Designed and loaded a multi-table PostgreSQL database with custom constraints. Optimized analytical queries using CTEs, LEAD, LAG, DENSE_RANK, and self-joins.",
    result: "Identified product categories with >40% repeat purchase rates to support marketing and inventory decisions through business KPI models.",
    image: "/images/projects/sql-ecommerce-analytics.png",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "02",
    category: "Python & Machine Learning",
    name: "Customer Churn Analytics & Predictive Modeling",
    technology: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    problem: "A subscription business faced customer churn without knowing which operational metrics or contract terms were driving cancellations.",
    approach: "Performed exploratory data analysis on a 1,000-customer dataset, engineered and scaled features, and compared Logistic Regression and Random Forest models.",
    result: "Achieved 88.0% prediction accuracy and found contract terms and subscription tenure to be the strongest retention indicators.",
    image: "/images/projects/customer-churn-analytics.png",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "03",
    category: "Python & Data Engineering",
    name: "End-to-End Cloud Data Pipeline Simulation",
    technology: ["Python", "SQLite", "BigQuery-style", "SQL"],
    problem: "Manual market data collection was prone to errors, lacking real-time stream ingestion, automated transformations, and structured staging.",
    approach: "Built an automated Python pipeline to ingest real-time market asset data through an API. Loaded data into a SQLite/BigQuery-style warehouse and applied dbt-style CTE transformations.",
    result: "Developed an automated reporting dashboard script to present live data metrics.",
    image: "/images/projects/cloud-data-pipeline.png",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "04",
    category: "Docker & Deterministic Testing",
    name: "Deterministic AI Benchmark & Evaluation Development",
    technology: ["Python", "Go", "Java", "Bash", "Docker", "Linux", "Git"],
    problem: "Evaluating advanced AI coding agents requires reproducible, containerized test suites that prevent hallucinated passes and hardcoded solutions.",
    approach: "Designed offline, self-contained benchmark tasks with public technical contracts, oracle solutions, automated verification, negative controls, and edge-case coverage.",
    result: "Built reproducible verification systems ensuring deterministic evaluation results and state consistency.",
    image: "/images/projects/ai-benchmark-evaluation.png",
    githubUrl: "https://github.com/Tag0305"
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
        className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E5DA] bg-[#FFFFFF] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#D7E5DA] pb-4 mb-4">
          <div className="flex items-center gap-4">
            <span className="font-black text-[#16803A] leading-none text-[clamp(2.2rem,5vw,4.5rem)] font-mono">
              {project.num}
            </span>
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase text-[#16803A] block tracking-widest font-bold">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl font-bold uppercase tracking-tight text-[#0B4F2A]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.githubUrl} label="View Repository" />
        </div>

        {/* Card Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center overflow-y-auto">
          {/* Left Column: Framed Graphic Asset */}
          <div className="md:col-span-6 h-full flex items-center justify-center p-2 rounded-2xl bg-[#EEF7F0] border border-[#D7E5DA]">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl group border border-[#D7E5DA]">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#16803A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="md:col-span-6 space-y-3 text-xs sm:text-sm">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#506158] font-bold block mb-1">Problem</span>
              <p className="text-[#102017] leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#506158] font-bold block mb-1">Approach</span>
              <p className="text-[#102017] leading-relaxed">{project.approach}</p>
            </div>

            <div className="p-3 rounded-xl bg-[#EEF7F0] border border-[#D7E5DA]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#16803A] font-bold block mb-1">Verified Result</span>
              <p className="text-[#0B4F2A] font-semibold flex items-start gap-1.5 leading-relaxed">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#16803A]" />
                {project.result}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technology.map((t) => (
                <span key={t} className="text-[10px] font-mono bg-[#EEF7F0] border border-[#D7E5DA] px-2.5 py-1 rounded-full text-[#0B4F2A] font-medium">
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
    <section id="projects" className="bg-[#F7FAF7] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 pb-32">
      <div className="max-w-6xl mx-auto space-y-14">
        <FadeIn delay={0} y={30}>
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#16803A] font-bold">// SELECTED CASE STUDIES</span>
            <h2 className="text-[#0B4F2A] font-black uppercase text-center tracking-tight leading-none text-[clamp(2.5rem,8vw,100px)]">
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
