import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import { Briefcase, CheckCircle2, Calendar } from "lucide-react"
import { portfolioData } from "../../data/portfolioData"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-t border-border/60 scroll-mt-20 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
          // PROFESSIONAL EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
          Work <span className="text-emerald-400">Experience & Benchmarking</span>
        </h2>
      </div>

      <div className="space-y-6">
        {portfolioData.experience.map((exp, index) => (
          <Card key={index} tilt={true} className="p-6 sm:p-8 bg-card/40 border border-border/80 hover:border-emerald-500/40 transition-all space-y-5">
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

            <ul className="space-y-3 list-none">
              {exp.description.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

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
