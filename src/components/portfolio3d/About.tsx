import { Card } from "../ui/card"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-12 border-t border-border/60 scroll-mt-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            // 01. ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
            Engineering Principles <span className="text-emerald-400">Applied To Data</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong className="text-foreground">Bachelor of Technology candidate in Electronics & Communication Engineering</strong> at the Indian Institute of Information Technology (IIIT) Manipur, graduating in May 2026.
            </p>
            <p>
              My academic foundation in systems engineering, signal processing, and quantitative mathematics translates directly into data architecture—giving me a unique perspective on designing efficient relational schemas, building automated ELT data pipelines, and modeling predictive classifiers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Relational Database Query Optimization",
                "Customer Churn & Retention Analytics",
                "Automated ELT Pipeline Simulations",
                "Business KPI Modeling & Dashboarding"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground bg-secondary/30 border border-border/80 px-3 py-2.5 rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <Card tilt={true} className="p-5 bg-card/60 border-emerald-500/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Education</span>
              <div className="mt-3">
                <span className="text-3xl font-black text-emerald-400">2026</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">B.Tech ECE Candidate</span>
              </div>
            </Card>

            <Card tilt={true} className="p-5 bg-card/60 border-emerald-500/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Accuracy</span>
              <div className="mt-3">
                <span className="text-3xl font-black text-emerald-400">88%</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">Churn Classifier Model</span>
              </div>
            </Card>

            <Card tilt={true} className="p-5 bg-card/60 border-emerald-500/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Projects</span>
              <div className="mt-3">
                <span className="text-3xl font-black text-emerald-400">03</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">Full Stack Repositories</span>
              </div>
            </Card>

            <Card tilt={true} className="p-5 bg-card/60 border-emerald-500/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Toolkit</span>
              <div className="mt-3">
                <span className="text-3xl font-black text-emerald-400">10+</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">Languages & BI Tools</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
