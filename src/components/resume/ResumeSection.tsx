import { FileText, Download, ExternalLink, Eye, CheckCircle2 } from "lucide-react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

export function ResumeSection() {
  return (
    <section id="resume" className="py-12 border-t border-border/60 scroll-mt-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            // RESUME & CURRICULUM VITAE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
            Official <span className="text-emerald-400">Resume PDF</span>
          </h2>
        </div>

        <Card tilt={true} className="bg-card/40 border border-border/80 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Ronanki Tagore — Data Analyst Resume</h3>
                  <span className="text-xs font-mono text-muted-foreground">PDF Document • 1 Page • Updated August 2026</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Contains complete educational background (IIIT Manipur B.Tech ECE), hands-on technical skills (SQL, Python, PostgreSQL, Pandas, Scikit-learn, Power BI), and documented data analytics project outcomes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground font-medium pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Targeted for Data Analyst & BI Roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>ATS-Optimized Formatting</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold uppercase text-xs cursor-pointer">
                  <Eye className="h-4 w-4" />
                  View Resume
                </Button>
              </a>

              <a href="/resume.pdf" download="Ronanki_Tagore_Data_Analyst.pdf" className="w-full">
                <Button variant="outline" className="w-full gap-2 border-border text-foreground hover:bg-secondary text-xs font-bold uppercase cursor-pointer">
                  <Download className="h-4 w-4 text-emerald-400" />
                  Download PDF
                </Button>
              </a>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="ghost" className="w-full gap-2 text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open in New Tab
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
