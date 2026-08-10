import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import { Briefcase, CheckCircle2, Calendar, FolderGit2 } from "lucide-react"
import { portfolioData, type Experience } from "../../data/portfolioData"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-t border-border/60 scroll-mt-20 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
          // PROFESSIONAL EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
          Work <span className="text-emerald-400">Experience &amp; Benchmarking</span>
        </h2>
      </div>

      <div className="space-y-6">
        {(portfolioData.experience as Experience[]).map((exp, index) => (
          <Card key={index} tilt={true} className="p-6 sm:p-8 bg-card/40 border border-border/80 hover:border-emerald-500/40 transition-all space-y-6">
            
            {/* Header: Role, Organization & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-emerald-400 shrink-0" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">{exp.title}</h3>
                </div>
                <div className="text-xs font-mono font-semibold text-emerald-400">
                  {exp.company}
                </div>
              </div>

              <Badge variant="outline" className="text-xs font-mono text-emerald-400 border-emerald-500/30 bg-emerald-500/10 px-3 py-1 w-fit flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {exp.period}
              </Badge>
            </div>

            {/* Project Subsections under Airdawgs */}
            {exp.projects && exp.projects.length > 0 ? (
              <div className="space-y-6">
                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-3 p-4 sm:p-5 rounded-2xl bg-secondary/30 border border-border/40 space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-foreground">
                          {proj.name}
                        </h4>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                          proj.status === "CURRENT"
                            ? "border-emerald-400 text-emerald-400 bg-emerald-500/15"
                            : "border-emerald-500/40 text-emerald-400/80 bg-emerald-500/05"
                        }`}
                      >
                        {proj.status === "CURRENT" ? "CURRENT PROJECT" : proj.status}
                      </Badge>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {proj.description}
                    </p>

                    <ul className="space-y-2 list-none pt-1">
                      {proj.responsibilities.map((bullet: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : exp.description ? (
              <ul className="space-y-3 list-none">
                {exp.description.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {/* Technologies */}
            <div className="pt-2 border-t border-border/40 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <span key={tech} className="text-[10px] font-mono bg-secondary/50 border border-border px-2.5 py-1 rounded text-foreground/90 font-medium">
                  {tech}
                </span>
              ))}
            </div>

          </Card>
        ))}
      </div>
    </section>
  )
}
