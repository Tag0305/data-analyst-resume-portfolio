import * as React from "react"
import { FadeUp } from "../creator/FadeUp"
import { portfolioData, type Experience, type ExperienceProject } from "../../data/portfolioData"

export function ExperienceSection() {
  const experiences = portfolioData.experience as Experience[]
  // Build flat list of all tabs: one tab per project under each company
  // For Airdawgs we split into PROJECT TERMINUS + PROJECT SENTINEL
  const tabs: {
    company: string
    companyShort: string
    period: string
    title: string
    project?: ExperienceProject
    technologies: string[]
  }[] = []

  experiences.forEach(exp => {
    if (exp.projects && exp.projects.length > 0) {
      exp.projects.forEach(proj => {
        tabs.push({
          company: exp.company,
          companyShort: proj.name,
          period: exp.period,
          title: exp.title,
          project: proj,
          technologies: exp.technologies,
        })
      })
    } else {
      tabs.push({
        company: exp.company,
        companyShort: exp.company,
        period: exp.period,
        title: exp.title,
        technologies: exp.technologies,
      })
    }
  })

  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <section id="experience" className="section-ivory relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <FadeUp delay={0}>
          <div className="mb-14 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
              // Professional Experience
            </span>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              Work &amp;{" "}
              <em style={{ color: "#C9A84C" }}>Benchmarking</em>
            </h2>
          </div>
        </FadeUp>

        {/* Tabbed layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Left: Tab list */}
          <FadeUp delay={0.1} className="md:col-span-4">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.20)", background: "#FFFFFF" }}
            >
              {/* Company header */}
              <div
                className="px-5 py-4"
                style={{ background: "#FAF9F6", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
              >
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#888" }}>
                  Airdawgs · Freelance
                </p>
                <p
                  className="font-serif italic text-lg font-semibold mt-0.5"
                  style={{ color: "#C9A84C" }}
                >
                  Freelance AI Evaluation & Benchmark Developer
                </p>
                <p className="font-mono text-xs mt-1" style={{ color: "#888" }}>
                  July 2026 – Present
                </p>
              </div>

              {/* Tab items */}
              {tabs.map((tab, i) => (
                <div
                  key={tab.companyShort}
                  className={`exp-tab-item ${activeTab === i ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  <p
                    className="font-mono text-xs uppercase tracking-widest font-bold"
                    style={{ color: activeTab === i ? "#C9A84C" : "#888" }}
                  >
                    {tab.companyShort}
                  </p>
                  {tab.project && (
                    <p className="text-xs mt-0.5" style={{ color: "#1a1a1a" }}>
                      {tab.project.status === "CURRENT" ? "Current Project" : "Completed"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: Panel */}
          <div className="md:col-span-8 relative min-h-[300px]">
            {tabs.map((tab, i) => {
              const isActive = activeTab === i
              const proj = tab.project
              return (
                <div key={tab.companyShort} className={`exp-panel ${isActive ? "active" : ""}`}>
                  {proj && (
                    <div className="space-y-6">
                      {/* Project header */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span
                            className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                            style={{
                              background: proj.status === "CURRENT"
                                ? "rgba(34,197,94,0.12)"
                                : "rgba(201,168,76,0.10)",
                              color: proj.status === "CURRENT" ? "#16a34a" : "#9A7A2A",
                              border: `1px solid ${proj.status === "CURRENT" ? "rgba(34,197,94,0.25)" : "rgba(201,168,76,0.25)"}`
                            }}
                          >
                            {proj.status === "CURRENT" ? "Current" : "Completed"}
                          </span>
                          <span className="font-mono text-xs" style={{ color: "#888" }}>
                            {tab.period}
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
                          <em style={{ color: "#C9A84C" }}>{proj.name}</em>
                        </h3>

                        <div
                          className="my-3"
                          style={{ height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                        />

                        <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                          {proj.description}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
                          Responsibilities
                        </p>
                        <ul className="space-y-2">
                          {proj.responsibilities.map((bullet: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm leading-relaxed"
                              style={{ color: "#555" }}
                            >
                              <span
                                className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                                style={{ background: "#C9A84C" }}
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                        {tab.technologies.map(tech => (
                          <span key={tech} className="skill-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
