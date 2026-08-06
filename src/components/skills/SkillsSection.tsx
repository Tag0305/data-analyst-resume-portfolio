import * as React from "react"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import { Search, Database, Code, BarChart3, Wrench, Brain, Sparkles, CheckCircle2 } from "lucide-react"

interface SkillItem {
  name: string
  category: "db" | "python" | "bi" | "tools" | "concepts"
  description: string
  projectRelation?: string
  icon: string
}

const skillsList: SkillItem[] = [
  // Databases & SQL
  { name: "PostgreSQL", category: "db", description: "Relational DB, CTEs, Window Functions (LEAD/LAG)", projectRelation: "SQL E-Commerce Analytics", icon: "🐘" },
  { name: "SQL (Advanced)", category: "db", description: "Self-joins, DENSE_RANK, group aggregates, subqueries", projectRelation: "HackerRank Verified", icon: "🗄️" },
  { name: "SQLite", category: "db", description: "Local warehouse staging and lightweight streaming storage", projectRelation: "Cloud Pipeline Simulation", icon: "⚡" },
  { name: "MySQL", category: "db", description: "Schema normalization, primary/foreign keys, indexing", projectRelation: "Relational Database Design", icon: "🐬" },

  // Python & Analytics
  { name: "Python", category: "python", description: "Data wrangling, script automation, machine learning", projectRelation: "Customer Churn Project", icon: "🐍" },
  { name: "Pandas & NumPy", category: "python", description: "DataFrame manipulations, matrix operations, missing data imputation", projectRelation: "1,000-Customer Dataset", icon: "🐼" },
  { name: "Scikit-Learn", category: "python", description: "Classification models, Random Forests, train-test splits", projectRelation: "88% Accuracy Model", icon: "🤖" },
  { name: "Seaborn & Matplotlib", category: "python", description: "Exploratory Data Analysis (EDA), distribution plots", projectRelation: "Churn Feature Importances", icon: "📊" },

  // Business Intelligence
  { name: "Power BI", category: "bi", description: "Interactive executive dashboards, DAX measures, data modeling", projectRelation: "KPI Visualization", icon: "📈" },
  { name: "Tableau", category: "bi", description: "Visual story points, cohort maps, trend dashboards", projectRelation: "Business Analytics", icon: "🎨" },
  { name: "Microsoft Excel", category: "bi", description: "Pivot Tables, VLOOKUP, INDEX/MATCH, financial summary sheets", projectRelation: "Data Operations", icon: "📗" },

  // Tools & Platforms
  { name: "Git & GitHub", category: "tools", description: "Version control, code commits, branch workflow", projectRelation: "github.com/Tag0305", icon: "🐙" },
  { name: "pgAdmin", category: "tools", description: "PostgreSQL server administration and visual query plan analysis", projectRelation: "Database Admin", icon: "⚙️" },
  { name: "Jupyter Notebook", category: "tools", description: "Iterative exploratory analysis and model prototyping", projectRelation: "ML Environment", icon: "📓" },
  { name: "VS Code", category: "tools", description: "IDE development, Python script execution, Vite workspace", projectRelation: "Development Environment", icon: "💻" },

  // Concepts
  { name: "Cohort Retention Analysis", category: "concepts", description: "Tracking user return rates across monthly purchase periods", projectRelation: "Product Repeat Rate (>40%)", icon: "🔄" },
  { name: "ETL & ELT Pipelines", category: "concepts", description: "Extract, Transform, Load workflows & dbt-style SQL CTE modeling", projectRelation: "API Ingestion Script", icon: "🛠️" },
  { name: "Predictive Modelling", category: "concepts", description: "Supervised classification, feature scaling, model precision/recall", projectRelation: "Random Forest Classifier", icon: "🔮" },
  { name: "Business KPI Formulation", category: "concepts", description: "Translating database structures into commercial revenue metrics", projectRelation: "Executive Reporting", icon: "💡" }
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const filteredSkills = skillsList.filter((s) => {
    const matchesCategory = activeCategory === "all" || s.category === activeCategory
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="skills" className="py-12 border-t border-border/60 scroll-mt-20 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
          // 02. TECHNICAL TOOLKIT
        </span>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
          Skills & <span className="text-emerald-400">Data Analytics Capabilities</span>
        </h2>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-secondary/30 border border-border/80 rounded-xl">
          {[
            { id: "all", label: "All Skills", icon: Sparkles },
            { id: "db", label: "SQL & Databases", icon: Database },
            { id: "python", label: "Python & ML", icon: Code },
            { id: "bi", label: "BI & Dashboards", icon: BarChart3 },
            { id: "tools", label: "Tools", icon: Wrench },
            { id: "concepts", label: "Concepts", icon: Brain }
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search skills (e.g. SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <Card
            key={skill.name}
            tilt={true}
            className="p-5 bg-card/40 border border-border/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                {skill.projectRelation && (
                  <Badge variant="outline" className="text-[9px] font-mono text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    {skill.projectRelation}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>

            <div className="pt-2 border-t border-border/40 flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
              <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
              <span>Production Verified Skill</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
