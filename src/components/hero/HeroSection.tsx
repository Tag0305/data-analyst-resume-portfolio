import * as React from "react"
import { ArrowDownRight, FileText, MapPin, Mail } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { portfolioData } from "../../data/portfolioData"
import { Avatar25DStage } from "./Avatar25DStage"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export function HeroSection() {
  const [roleIndex, setRoleIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personalInfo.roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Hero Content & CTA */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-2.5 items-center">
            <Badge variant="outline" className="text-xs bg-emerald-500/10 border-emerald-500/30 text-emerald-400 py-1 px-3 rounded-full font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2 inline-block" />
              Open to Entry-Level Opportunities
            </Badge>
            <Badge variant="outline" className="text-xs py-1 px-3 rounded-full border-border text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1 text-emerald-400" />
              {portfolioData.personalInfo.location}
            </Badge>
          </div>

          <div className="space-y-2">
            <span className="text-sm font-mono uppercase tracking-widest text-emerald-400 block font-semibold">
              Hello, I’m
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground uppercase leading-none">
              {portfolioData.personalInfo.name}
            </h1>
            <div className="h-8 flex items-center">
              <span className="text-lg sm:text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                &gt; {portfolioData.personalInfo.roles[roleIndex]}
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed pt-2">
              I transform raw data into meaningful insights using SQL, Python, predictive modelling and business intelligence tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              onClick={() => scrollTo("projects")}
              className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold uppercase tracking-wider text-xs px-6 py-5 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Explore My Work
              <ArrowDownRight className="h-4 w-4" />
            </Button>

            <a href="/resume.pdf" download="Ronanki_Tagore_Data_Analyst.pdf">
              <Button variant="outline" className="gap-2 border-border hover:bg-secondary text-foreground text-xs font-bold uppercase tracking-wider px-6 py-5 cursor-pointer">
                <FileText className="h-4 w-4 text-emerald-400" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-3 pt-2">
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 text-xs font-mono border-border hover:text-emerald-400 cursor-pointer">
                <GithubIcon />
                GitHub
              </Button>
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 text-xs font-mono border-border hover:text-emerald-400 cursor-pointer">
                <LinkedinIcon />
                LinkedIn
              </Button>
            </a>
            <a href={`mailto:${portfolioData.personalInfo.email}`}>
              <Button variant="outline" size="sm" className="gap-2 text-xs font-mono border-border hover:text-emerald-400 cursor-pointer">
                <Mail className="h-3.5 w-3.5" />
                Email
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: 2.5D Full Body Avatar Stage */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <Avatar25DStage />
        </div>
      </div>
    </section>
  )
}
