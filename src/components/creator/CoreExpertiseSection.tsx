import * as React from "react"
import { FadeUp } from "./FadeUp"
import { Database, ShieldCheck, Activity, BarChart3 } from "lucide-react"

const expertiseItems = [
  {
    num: "01",
    title: "Data Analytics",
    icon: BarChart3,
    description: "Transforming raw datasets into clear insights through exploratory analysis, statistical methods, visualization, and business KPI reporting.",
    tags: ["Exploratory EDA", "KPI Reporting", "Cohort Retention", "Statistical Methods"],
    skills: [
      { name: "Data Wrangling", pct: 92 },
      { name: "EDA & Visualization", pct: 88 },
      { name: "BI Reporting", pct: 80 },
    ]
  },
  {
    num: "02",
    title: "SQL Development",
    icon: Database,
    description: "Building relational databases and advanced analytical queries using joins, CTEs, subqueries, window functions, retention analysis, and query optimization.",
    tags: ["PostgreSQL", "SQLite", "CTEs", "Window Functions", "Schema Design"],
    skills: [
      { name: "PostgreSQL", pct: 90 },
      { name: "Window Functions", pct: 85 },
      { name: "Schema Design", pct: 82 },
    ]
  },
  {
    num: "03",
    title: "AI Benchmark & Evaluation",
    icon: ShieldCheck,
    description: "Designing deterministic evaluation tasks, public technical contracts, oracle solutions, automated verifiers, negative controls, and reproducible test environments.",
    tags: ["Docker", "Python", "Oracle Verifiers", "Deterministic Testing", "Linux"],
    skills: [
      { name: "Benchmark Design", pct: 88 },
      { name: "Oracle Verification", pct: 85 },
      { name: "Edge-Case Coverage", pct: 90 },
    ]
  },
  {
    num: "04",
    title: "Data Pipeline Engineering",
    icon: Activity,
    description: "Building automated ingestion, transformation, storage, validation, and reporting workflows using Python, SQL, REST APIs, and relational databases.",
    tags: ["Python Ingestion", "REST APIs", "dbt-style CTEs", "Data Staging"],
    skills: [
      { name: "Python Automation", pct: 86 },
      { name: "ETL/ELT Design", pct: 82 },
      { name: "API Integration", pct: 78 },
    ]
  }
]

function SkillBar({ name, pct, visible }: { name: string; pct: number; visible: boolean }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs" style={{ color: "#888" }}>{name}</span>
        <span className="font-mono text-xs font-semibold" style={{ color: "#C9A84C" }}>{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${pct}%` : "0" }}
        />
      </div>
    </div>
  )
}

export function CoreExpertiseSection() {
  const [visible, setVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="section-ivory-dark relative"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <FadeUp delay={0}>
          <div className="mb-14 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
              // Technical Capabilities
            </span>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              Core{" "}
              <em style={{ color: "#C9A84C" }}>Expertise</em>
            </h2>
          </div>
        </FadeUp>

        {/* 2x2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <FadeUp key={item.num} delay={index * 0.1}>
                <div className="expertise-card group h-full space-y-5">

                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <span
                      className="font-serif text-4xl sm:text-5xl font-bold leading-none"
                      style={{ color: "rgba(201,168,76,0.18)" }}
                    >
                      {item.num}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.25)"
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#C9A84C" }} />
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div className="space-y-2">
                    <h3
                      className="font-serif text-xl sm:text-2xl font-semibold"
                      style={{ color: "#1a1a1a" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Skill Bars */}
                  <div
                    className="space-y-3 pt-4"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
                  >
                    {item.skills.map(skill => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        pct={skill.pct}
                        visible={visible}
                      />
                    ))}
                  </div>

                  {/* Tech pill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>

                </div>
              </FadeUp>
            )
          })}
        </div>

      </div>
    </section>
  )
}
