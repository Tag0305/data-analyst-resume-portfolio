import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Dialog } from "../ui/dialog"
import { Separator } from "../ui/separator"
import { portfolioData } from "../../data/portfolioData"
import type { Project } from "../../data/portfolioData"
import { CheckCircle2, ArrowUpRight } from "lucide-react"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export function Work() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)

  return (
    <section id="work" className="py-12 border-t border-border/60 scroll-mt-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            // 03. FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
            Selected <span className="text-emerald-400">Projects & Code Repos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <Card key={project.title} tilt={true} className="flex flex-col h-full bg-card/40 border border-border/80 hover:border-emerald-500/50 transition-all">
              <CardHeader className="p-6 flex-none">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold">PROJECT / 0{idx + 1}</span>
                  <Badge variant="outline" className="text-[10px] uppercase font-bold text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    {project.category.split("&")[0]}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold uppercase tracking-tight text-foreground leading-snug">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 pt-0 flex-1 space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">The Business Challenge</span>
                  <p className="text-xs text-foreground/90 leading-relaxed line-clamp-2">{project.problem}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Key Result</span>
                  <p className="text-xs font-semibold text-emerald-400">{project.result}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-secondary/50 border border-border px-2 py-0.5 rounded text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2 border-t border-border/40 mt-auto pt-4 flex-none">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-xs font-bold uppercase tracking-wider cursor-pointer border-border hover:bg-secondary"
                  onClick={() => setSelectedProject(project)}
                >
                  Project Details
                </Button>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-none">
                  <Button variant="outline" size="sm" className="w-9 h-9 p-0 cursor-pointer border-border hover:text-emerald-400" title="GitHub Repository">
                    <GithubIcon />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="text-[10px] uppercase font-bold text-emerald-400 border-emerald-500/30 bg-emerald-500/10 mb-1.5">
                {selectedProject.category}
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground leading-tight">{selectedProject.title}</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Business Problem</h4>
                <p className="text-foreground/90 bg-secondary/20 p-3 rounded-lg border border-border/40 leading-relaxed text-xs sm:text-sm">{selectedProject.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Technical Approach</h4>
                <p className="text-foreground/90 leading-relaxed text-xs sm:text-sm">{selectedProject.approach}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Key Results</h4>
                <p className="text-emerald-400 font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {selectedProject.result}
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Implementation Points</h4>
                <ul className="space-y-2 list-none">
                  {selectedProject.detailedPoints.map((point, index) => (
                    <li key={index} className="flex gap-2.5 text-muted-foreground leading-relaxed text-xs sm:text-sm">
                      <span className="text-emerald-400 font-bold shrink-0">{index + 1}.</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold uppercase tracking-wider text-xs cursor-pointer">
                  <GithubIcon />
                  GitHub Repository
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
              <Button variant="outline" onClick={() => setSelectedProject(null)} className="cursor-pointer text-xs uppercase font-bold">
                Close
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  )
}
