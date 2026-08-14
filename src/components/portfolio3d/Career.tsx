import { ArrowUpRight, GraduationCap, Award } from "lucide-react"
import { portfolioData } from "../../data/portfolioData"
import { FadeUp } from "../creator/FadeUp"

export function Career() {
  return (
    <section id="career" className="section-ivory-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <FadeUp delay={0}>
          <div className="mb-14 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
              // Career & Credentials
            </span>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              Academic{" "}
              <em style={{ color: "#C9A84C" }}>Timeline & Certifications</em>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── Education Timeline ── */}
          <FadeUp delay={0.1} className="lg:col-span-7">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="h-4 w-4" style={{ color: "#C9A84C" }} />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#888" }}>
                  Education Milestones
                </span>
              </div>

              <div
                className="timeline-line relative pl-8 ml-1 space-y-10 py-2"
                style={{ borderLeft: "2px solid rgba(201,168,76,0.35)" }}
              >
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="relative space-y-1.5">
                    {/* Dot */}
                    <div
                      className="absolute"
                      style={{ left: "-8px", top: "4px" }}
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center"
                        style={{
                          background: "#FFFFFF",
                          border: "2px solid #C9A84C"
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#C9A84C" }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <h4
                        className="font-serif text-base sm:text-lg font-semibold leading-snug"
                        style={{ color: "#1a1a1a" }}
                      >
                        {edu.institution}
                      </h4>
                      <span
                        className="font-mono text-xs font-semibold px-3 py-0.5 rounded-full shrink-0"
                        style={{
                          background: "rgba(201,168,76,0.10)",
                          border: "1px solid rgba(201,168,76,0.30)",
                          color: "#9A7A2A"
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm" style={{ color: "#888" }}>
                      {edu.degree}
                      {edu.field ? ` · ${edu.field}` : ""}
                      {" · "}{edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ── Certifications ── */}
          <FadeUp delay={0.18} className="lg:col-span-5">
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-8">
                <Award className="h-4 w-4" style={{ color: "#C9A84C" }} />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#888" }}>
                  Verified Credentials
                </span>
              </div>

              <div className="space-y-3">
                {portfolioData.certifications.map((cert, i) => (
                  <FadeUp key={cert.name} delay={0.2 + i * 0.06}>
                    <div
                      className="contact-card flex items-center justify-between"
                      style={{ textAlign: "left" }}
                    >
                      <div className="space-y-1">
                        <span
                          className="font-mono text-xs uppercase tracking-widest font-bold block"
                          style={{ color: "#C9A84C" }}
                        >
                          {cert.issuer} · {cert.status}
                        </span>
                        <h5
                          className="font-sans text-sm font-semibold leading-snug"
                          style={{ color: "#1a1a1a" }}
                        >
                          {cert.name}
                        </h5>
                      </div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 ml-3"
                          style={{ color: "#C9A84C" }}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
