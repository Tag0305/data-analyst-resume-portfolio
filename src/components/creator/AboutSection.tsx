import * as React from "react"
import { FadeUp } from "./FadeUp"

export function AboutSection() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      id="about"
      className="section-ivory-dark relative"
    >
      {/* Subtle grid detail */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,168,76,0.06) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section heading */}
        <FadeUp delay={0}>
          <div className="mb-14 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
              // About the Developer
            </span>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              Introduction &amp;{" "}
              <em style={{ color: "#C9A84C" }}>Background</em>
            </h2>
          </div>
        </FadeUp>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left column: About paragraphs */}
          <div className="space-y-8">
            <FadeUp delay={0.08}>
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest font-medium" style={{ color: "#9A7A2A" }}>
                  01 — Who I Am
                </span>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#555" }}>
                  I am <strong style={{ color: "#1a1a1a" }}>Ronanki Tagore</strong>, a Data Analyst, SQL Developer, and
                  Freelance AI Evaluation & Benchmark Developer working with{" "}
                  <strong style={{ color: "#C9A84C" }}>Airdawgs</strong>, with a B.Tech in{" "}
                  <strong style={{ color: "#1a1a1a" }}>Electronics and Communication Engineering</strong> from IIIT Manipur.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest font-medium" style={{ color: "#9A7A2A" }}>
                  02 — Technical Focus
                </span>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#555" }}>
                  My technical work spans <strong style={{ color: "#1a1a1a" }}>SQL analytics</strong>,{" "}
                  <strong style={{ color: "#1a1a1a" }}>Python-based machine learning</strong>, and{" "}
                  <strong style={{ color: "#1a1a1a" }}>deterministic AI benchmark engineering</strong>. I build
                  reproducible systems, design oracle verifiers, and author rigorous
                  evaluation tasks for coding and machine-learning agents.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest font-medium" style={{ color: "#9A7A2A" }}>
                  03 — Working Values
                </span>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#555" }}>
                  I believe in <strong style={{ color: "#1a1a1a" }}>clarity over complexity</strong>,{" "}
                  <strong style={{ color: "#1a1a1a" }}>reproducibility over speed</strong>, and{" "}
                  <strong style={{ color: "#1a1a1a" }}>precision over assumption</strong>. Every deliverable
                  is documented, tested, and traceable.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.32}>
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest font-medium" style={{ color: "#9A7A2A" }}>
                  04 — Approach
                </span>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#555" }}>
                  I approach every challenge by first understanding the problem deeply,
                  then designing solutions that are <strong style={{ color: "#1a1a1a" }}>scalable</strong>,{" "}
                  <strong style={{ color: "#1a1a1a" }}>maintainable</strong>, and{" "}
                  <strong style={{ color: "#1a1a1a" }}>auditable</strong>.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right column: Working Approach facts */}
          <FadeUp delay={0.2} className="h-fit">
            <div
              className="rounded-2xl p-8 space-y-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(201,168,76,0.25)",
                borderTop: "3px solid #C9A84C"
              }}
            >
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
                  Working <em style={{ color: "#C9A84C" }}>Approach</em>
                </h3>
              </div>
              {[
                {
                  label: "Reproducibility First",
                  desc: "Every system, benchmark, and analysis is built to produce consistent results across environments and runs."
                },
                {
                  label: "Documentation Driven",
                  desc: "Clear contracts, structured outputs, and explicit assumptions are non-negotiable in all deliverables."
                },
                {
                  label: "Edge-Case Coverage",
                  desc: "Invalid inputs, recovery paths, and boundary conditions are treated as primary concerns, not afterthoughts."
                },
                {
                  label: "Business-Aligned",
                  desc: "Every technical decision traces back to a measurable business outcome or evaluation criterion."
                }
              ].map((fact, i) => (
                <div
                  key={fact.label}
                  className="pb-4 border-b last:border-b-0 group cursor-default transition-all"
                  style={{ borderColor: "rgba(201,168,76,0.15)" }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="font-mono text-xs font-bold mt-0.5"
                      style={{ color: "#C9A84C" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        className="font-semibold text-sm mb-1 group-hover:translate-x-1 transition-transform"
                        style={{ color: "#1a1a1a" }}
                      >
                        {fact.label}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
                        {fact.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
