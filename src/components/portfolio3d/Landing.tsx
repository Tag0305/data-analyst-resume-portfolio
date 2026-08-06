import { ArrowDownRight, FileText, MapPin, Sparkles } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Hero3DCanvas } from "../3d/Hero3DCanvas"

export function Landing() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative pt-8 pb-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Title & Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-2.5 items-center">
            <Badge variant="outline" className="text-xs bg-emerald-500/10 border-emerald-500/30 text-emerald-400 py-1 px-3 rounded-full font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2 inline-block" />
              Open For Hire
            </Badge>
            <Badge variant="outline" className="text-xs py-1 px-3 rounded-full border-border text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1 text-emerald-400" />
              Palasa, AP, India
            </Badge>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block font-semibold">
              // Creative 3D Portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.05]">
              Data Analyst <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                & SQL Developer
              </span>
            </h1>
            <p className="text-base sm:text-lg font-medium text-muted-foreground max-w-xl leading-relaxed pt-2">
              Electronics & Communication Engineering student at <strong className="text-foreground">IIIT Manipur</strong> (2026). Transforming complex datasets into clear, actionable business recommendations through SQL query pipelines, Python statistical models, and 3D visual analytics.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              onClick={() => scrollTo("work")}
              className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold uppercase tracking-wider text-xs px-6 py-5 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Explore Work
              <ArrowDownRight className="h-4 w-4" />
            </Button>

            <a href="/resume.pdf" download="Ronanki_Tagore_Data_Analyst.pdf">
              <Button variant="outline" className="gap-2 border-border hover:bg-secondary text-foreground text-xs font-bold uppercase tracking-wider px-6 py-5 cursor-pointer">
                <FileText className="h-4 w-4 text-emerald-400" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Interactive Torus Canvas */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full relative bg-gradient-to-b from-emerald-500/5 to-transparent rounded-2xl border border-emerald-500/20 p-2 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-emerald-400" />
                WebGL 3D Interactive Model
              </span>
              <span>Rotate & Hover</span>
            </div>
            <Hero3DCanvas />
          </div>
        </div>
      </div>
    </section>
  )
}
