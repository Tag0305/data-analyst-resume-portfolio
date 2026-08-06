import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Database, Brain, Activity } from "lucide-react"

export function WhatIDo() {
  const services = [
    {
      num: "01",
      title: "SQL & Database Querying",
      icon: Database,
      description: "Designing normalized relational schemas (PostgreSQL, MySQL, SQLite) with strict constraints. Writing performance-tuned analytical queries using CTEs, window functions (LEAD, LAG, DENSE_RANK), and multi-table joins to calculate customer cohorts and MoM growth.",
      tags: ["PostgreSQL", "SQL CTEs", "Window Functions", "Schema Design"]
    },
    {
      num: "02",
      title: "Python & Predictive Analytics",
      icon: Brain,
      description: "Performing exploratory data analysis (EDA) using Pandas, Seaborn, and Matplotlib. Preprocessing datasets, engineering features, and training machine learning classification algorithms (Logistic Regression, Random Forests) to predict customer churn risks.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Feature Importance"]
    },
    {
      num: "03",
      title: "Data Pipelines & Automation",
      icon: Activity,
      description: "Building automated Python data ingestion workflows polling real-time web APIs. Loading staging databases, executing dbt-style SQL transformations, and calculating live market indicators for executive dashboard views.",
      tags: ["dbt-style SQL", "APIs", "Pipeline Automation", "ELT Schemas"]
    }
  ]

  return (
    <section id="what-i-do" className="py-12 border-t border-border/60 scroll-mt-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            // 02. WHAT I DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
            Specialized <span className="text-emerald-400">Data Disciplines</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Card 
                key={s.num} 
                tilt={true}
                className="bg-card/40 border border-border/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <CardHeader className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      {s.num}
                    </span>
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl font-bold uppercase tracking-tight text-foreground">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono bg-secondary/50 border border-border px-2 py-0.5 rounded text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
