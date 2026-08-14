import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { FadeUp } from "./FadeUp"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

interface ProjectItem {
  num: string
  category: string
  name: string
  technology: string[]
  problem: string
  approach: string
  result: string
  image?: string
  isPrivate: boolean
  githubUrl: string
}

const projectsData: ProjectItem[] = [
  {
    num: "01",
    category: "Docker & Deterministic Testing",
    name: "Deterministic AI Agent Evaluation Benchmarks",
    technology: ["Python", "Go", "Java", "Bash", "Docker", "Linux", "Git"],
    problem: "Evaluating advanced AI coding agents requires reproducible, containerized test suites that prevent hallucinated passes and hardcoded solutions.",
    approach: "Designed offline, self-contained benchmark tasks with public technical contracts, oracle solutions, automated verification, negative controls, and edge-case coverage.",
    result: "Built reproducible verification systems ensuring deterministic evaluation results and state consistency.",
    image: "/images/projects/ai_benchmark_evaluation_dashboard.png",
    isPrivate: true,
    githubUrl: ""
  },
  {
    num: "02",
    category: "PostgreSQL & SQL Analytics",
    name: "SQL E-Commerce Business Analytics",
    technology: ["PostgreSQL", "SQL", "CTEs", "Window Functions", "Schema Design"],
    problem: "Unstructured transaction histories required quantitative analysis to identify high-value customer segments and calculate cohort retention.",
    approach: "Designed a multi-table PostgreSQL database. Optimized queries using CTEs, LEAD, LAG, DENSE_RANK, and window functions.",
    result: "Identified product categories with >40% repeat-purchase rates to support marketing and inventory decisions.",
    isPrivate: false,
    githubUrl: "https://github.com/Tag0305/sql-ecommerce-analytics"
  },
  {
    num: "03",
    category: "Python & Machine Learning",
    name: "Customer Churn Analytics & Predictive Modeling",
    technology: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    problem: "A subscription business faced customer churn without knowing which operational metrics or contract terms were driving cancellations.",
    approach: "Performed EDA on a 1,000-customer dataset, engineered domain features, and compared Logistic Regression and Random Forest models.",
    result: "Achieved 88.0% prediction accuracy and identified contract terms and subscription tenure as top retention indicators.",
    isPrivate: false,
    githubUrl: "https://github.com/Tag0305/python-customer-churn-prediction"
  },
  {
    num: "04",
    category: "Python & Data Engineering",
    name: "End-to-End Cloud Data Pipeline Simulation",
    technology: ["Python", "SQLite", "SQL", "BigQuery-style workflow"],
    problem: "Manual market data collection was prone to errors, lacking real-time stream ingestion, automated transformations, and structured staging.",
    approach: "Built an automated Python pipeline to ingest real-time market asset data through a REST API, loading into a SQLite warehouse with dbt-style CTE transformations.",
    result: "Automated ingestion of live asset records, calculating volume-to-market-cap ratios and generating automated report outputs.",
    isPrivate: false,
    githubUrl: "https://github.com/Tag0305/cloud-data-pipeline-simulation"
  }
]

export function ProjectsSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section
      id="projects"
      className="section-ivory relative"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <FadeUp delay={0}>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
                // Selected Case Studies
              </span>
              <h2
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold"
                style={{ color: "#1a1a1a" }}
              >
                Projects &amp;{" "}
                <em style={{ color: "#C9A84C" }}>Work</em>
              </h2>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "#888" }}>
              End-to-end analytical projects spanning AI evaluation, SQL analytics, machine learning, and data engineering.
            </p>
          </div>
        </FadeUp>

        {/* Editorial project list */}
        <div>
          {projectsData.map((project, index) => {
            const isOpen = openIndex === index
            return (
              <FadeUp key={project.num} delay={index * 0.08}>
                <div
                  className="project-row"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="project-row-bg" />

                  {/* Main row content */}
                  <div className="relative flex items-start gap-6 sm:gap-8">

                    {/* Number */}
                    <div className="project-num hidden sm:block shrink-0 w-20 text-right leading-none pt-1">
                      {project.num}
                    </div>

                    {/* Main info */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className="sm:hidden font-mono text-xs font-bold"
                          style={{ color: "rgba(201,168,76,0.45)" }}
                        >
                          {project.num}
                        </span>
                        <span
                          className="font-mono text-xs uppercase tracking-widest font-medium"
                          style={{ color: "#C9A84C" }}
                        >
                          {project.category}
                        </span>
                      </div>
                      <h3 className="project-row-title">
                        {project.name}
                      </h3>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technology.map(t => (
                          <span key={t} className="project-tech-pill">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="project-arrow pt-2">
                      <div
                        className="w-8 h-8 rounded-full border flex items-center justify-center transition-all"
                        style={{
                          borderColor: "#C9A84C",
                          background: isOpen ? "#C9A84C" : "transparent",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                        }}
                      >
                        <ArrowUpRight
                          className="h-4 w-4"
                          style={{ color: isOpen ? "#FFFFFF" : "#C9A84C" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <div
                      className="relative mt-6 pl-0 sm:pl-28 grid grid-cols-1 md:grid-cols-3 gap-6"
                      onClick={e => e.stopPropagation()}
                    >
                      {/* Project image (if available) */}
                      {project.image && (
                        <div className="md:col-span-1">
                          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-auto object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      )}

                      {/* Problem / Approach / Result */}
                      <div className={`space-y-5 ${project.image ? "md:col-span-2" : "md:col-span-3 grid md:grid-cols-3 md:gap-6 space-y-0 md:space-y-0"}`}>
                        {!project.image ? (
                          <>
                            <div className="space-y-1">
                              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#9A7A2A" }}>
                                Problem
                              </span>
                              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                                {project.problem}
                              </p>
                            </div>
                            <div className="space-y-1">
                              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#9A7A2A" }}>
                                Approach
                              </span>
                              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                                {project.approach}
                              </p>
                            </div>
                            <div className="space-y-1">
                              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
                                Result
                              </span>
                              <p className="text-sm font-semibold leading-relaxed" style={{ color: "#1a1a1a" }}>
                                {project.result}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="space-y-1">
                              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#9A7A2A" }}>
                                Problem
                              </span>
                              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{project.problem}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#9A7A2A" }}>
                                Approach
                              </span>
                              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{project.approach}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
                                Result
                              </span>
                              <p className="text-sm font-semibold leading-relaxed" style={{ color: "#1a1a1a" }}>{project.result}</p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Link */}
                      <div className={`${project.image ? "md:col-span-3" : "md:col-span-3"} flex`}>
                        {project.isPrivate ? (
                          <span
                            className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full"
                            style={{ background: "rgba(201,168,76,0.10)", color: "#9A7A2A", border: "1px solid rgba(201,168,76,0.25)" }}
                          >
                            Private Repository
                          </span>
                        ) : (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 btn-gold-outline text-xs"
                            onClick={e => e.stopPropagation()}
                          >
                            <GithubIcon />
                            View Repository
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
