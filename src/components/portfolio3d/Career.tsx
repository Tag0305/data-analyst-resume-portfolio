import { Card } from "../ui/card"
import { Award, ArrowUpRight, GraduationCap } from "lucide-react"
import { portfolioData } from "../../data/portfolioData"

export function Career() {
  return (
    <section id="career" className="py-12 border-t border-border/60 scroll-mt-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            // 04. CAREER & EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
            Academic <span className="text-emerald-400">Timeline & Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-emerald-400" />
              Education Milestones
            </h3>

            <div className="relative border-l border-emerald-500/30 pl-6 ml-3 space-y-8 py-2">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="relative space-y-1.5">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-emerald-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-foreground leading-tight">{edu.institution}</h4>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground font-medium">
                    {edu.degree} {edu.field ? `• ${edu.field}` : ""} • {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Award className="h-4 w-4 text-emerald-400" />
              Verified Credentials
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {portfolioData.certifications.map((cert) => (
                <Card key={cert.name} tilt={true} className="p-4 bg-card/40 border border-border/80 hover:border-emerald-500/40 transition-all flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase font-bold text-emerald-400 tracking-wider">
                      {cert.issuer} • {cert.status}
                    </span>
                    <h5 className="text-xs font-bold text-foreground leading-snug">{cert.name}</h5>
                  </div>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 p-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
