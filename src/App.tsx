import * as React from "react"
import { 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Moon, 
  Sun, 
  Menu, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  Send,
  Award
} from "lucide-react"

import { Button } from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
import { Tooltip } from "./components/ui/tooltip"
import { Sheet } from "./components/ui/sheet"
import { Separator } from "./components/ui/separator"
import { Dialog } from "./components/ui/dialog"
import { portfolioData } from "./data/portfolioData"
import type { Project } from "./data/portfolioData"
import { ProjectPlayground } from "./components/ProjectPlayground"

// Custom inline brand SVGs to replace missing Lucide brand icons in v4
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

export default function App() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  
  // Form State
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" })
  const [formErrors, setFormErrors] = React.useState({ name: "", email: "", subject: "", message: "" })
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  // Active Section for Sticky Navigation
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.add("light")
      root.classList.remove("dark")
    }
  }, [theme])

  // Scroll spy to highlight current nav section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    let isValid = true
    const errors = { name: "", email: "", subject: "", message: "" }

    if (!formData.name.trim()) {
      errors.name = "Name is required"
      isValid = false
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email"
      isValid = false
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
      isValid = false
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Simulate form submission
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 5000)
    }
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const data = portfolioData

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 no-print">
        <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <span 
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 cursor-pointer font-bold tracking-tight text-foreground transition-all hover:opacity-80"
            >
              <span className="bg-primary text-primary-foreground rounded-md px-1.5 py-0.5 text-sm font-black">RT</span>
              <span>Tagore<span className="text-accent font-black">.</span></span>
            </span>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {["about", "skills", "projects", "education", "certifications", "contact"].map((item) => (
                <span
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`cursor-pointer transition-colors hover:text-foreground/80 capitalize ${
                    activeSection === item ? "text-accent font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <a href="/resume.pdf" target="_blank" className="hidden sm:inline-flex">
              <Button variant="outline" size="sm" className="gap-1.5 cursor-pointer">
                <FileText className="h-3.5 w-3.5" />
                Resume
              </Button>
            </a>

            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <Sheet open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="flex flex-col gap-4 py-4">
          <span className="font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-md px-1.5 py-0.5 text-xs font-black">RT</span>
            Navigation
          </span>
          {["home", "about", "skills", "projects", "education", "certifications", "contact"].map((item) => (
            <span
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer text-lg font-medium text-muted-foreground hover:text-foreground py-1 capitalize"
            >
              {item}
            </span>
          ))}
          <Separator className="my-4" />
          <a href="/resume.pdf" target="_blank" className="w-full">
            <Button variant="outline" className="w-full gap-2 justify-center cursor-pointer">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 container mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-12 space-y-20 sm:space-y-32">
        
        {/* Hero Section */}
        <section id="home" className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center pt-4 sm:pt-8 min-h-[60vh]">
          <div className="md:col-span-3 space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs bg-secondary/50 py-1 px-3 rounded-full border-border">
                <MapPin className="h-3 w-3 mr-1 text-accent" />
                {data.personalInfo.location.split(",")[0]}, India
              </Badge>
              <Badge variant="success" className="text-xs py-1 px-3 rounded-full">
                Open to Entry-Level Opportunities
              </Badge>
            </div>
            
            <div className="space-y-2">
              <span className="text-sm font-medium text-accent tracking-wide uppercase">Hello, I'm</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground sm:leading-none">
                {data.personalInfo.name}
              </h1>
              <p className="text-lg font-medium text-muted-foreground max-w-md pt-2">
                {data.personalInfo.title}
              </p>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
              {data.personalInfo.introduction}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button onClick={() => scrollToSection("projects")} className="gap-2 cursor-pointer">
                View Projects
                <ChevronRight className="h-4 w-4" />
              </Button>
              <a href="/resume.pdf" download="Ronanki_Tagore_Data_Analyst.pdf">
                <Button variant="outline" className="gap-2 cursor-pointer">
                  Download Resume
                </Button>
              </a>
              <div className="flex items-center gap-1.5 ml-0 sm:ml-2">
                <Tooltip content="GitHub Profile">
                  <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground cursor-pointer">
                      <GithubIcon />
                    </Button>
                  </a>
                </Tooltip>
                <Tooltip content="LinkedIn Profile">
                  <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground cursor-pointer">
                      <LinkedinIcon />
                    </Button>
                  </a>
                </Tooltip>
                <Tooltip content="Send Email">
                  <a href={`mailto:${data.personalInfo.email}`}>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground cursor-pointer">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* E-commerce Mock KPI Visual Widget (shadcn/ui zinc layout) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <Card tilt={true} className="w-full max-w-[340px] border border-border bg-card shadow-lg rounded-xl overflow-hidden transition-all">
              <CardHeader className="bg-secondary/20 p-4 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">kpi_metrics_dashboard.sql</span>
                </div>
              </CardHeader>
              <CardContent className="p-5 space-y-4 font-sans">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border border-border/80 bg-secondary/10 rounded-lg">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">Cohort size</span>
                    <span className="text-lg font-bold text-foreground">12 Buyers</span>
                    <span className="text-[9px] text-emerald-500 font-medium block mt-0.5">Database Total</span>
                  </div>
                  <div className="p-3 border border-border/80 bg-secondary/10 rounded-lg">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">Churn Accuracy</span>
                    <span className="text-lg font-bold text-foreground">88.0%</span>
                    <span className="text-[9px] text-emerald-500 font-medium block mt-0.5">Random Forest</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>E-Commerce Sales Growth</span>
                    <span className="font-semibold text-emerald-500 flex items-center gap-0.5">
                      <TrendingUp className="h-3 w-3" />
                      +42.5%
                    </span>
                  </div>
                  <div className="flex gap-1.5 h-24 items-end pt-2 border-b border-l border-border px-2">
                    <div className="flex-1 bg-muted rounded-t-sm hover:bg-accent transition-colors cursor-pointer" style={{ height: "40%" }} />
                    <div className="flex-1 bg-muted rounded-t-sm hover:bg-accent transition-colors cursor-pointer" style={{ height: "65%" }} />
                    <div className="flex-1 bg-muted rounded-t-sm hover:bg-accent transition-colors cursor-pointer" style={{ height: "55%" }} />
                    <div className="flex-1 bg-accent rounded-t-sm" style={{ height: "88%" }} />
                    <div className="flex-1 bg-muted rounded-t-sm hover:bg-accent transition-colors cursor-pointer" style={{ height: "70%" }} />
                  </div>
                  <div className="flex justify-between text-[9px] text-muted-foreground px-1 font-mono pt-1">
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-6 scroll-mt-20">
          <div className="space-y-2 border-l-2 border-accent pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">About Me</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Academic Background & Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                I am currently a Bachelor of Technology student in <strong>Electronics and Communication Engineering</strong> at the <strong>Indian Institute of Information Technology (IIIT) Manipur</strong>, graduating in May 2026.
              </p>
              <p>
                My rigorous engineering education has instilled in me a deep appreciation for quantitative reasoning, systems thinking, and structural problem-solving. Throughout my courses, I found myself drawn to coding and data analytics—realizing that ECE systems principles translate directly into database design, pipeline modeling, and statistical workflows.
              </p>
              <p>
                I specialize in writing performance-tuned SQL databases, cleaning structured and unstructured datasets with Python libraries, and building interactive visual reports. I focus on developing clean, well-documented, and business-focused projects that prove hands-on technical capacity.
              </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="flex flex-col justify-between p-4 bg-secondary/15">
                <span className="text-muted-foreground text-xs font-semibold block">Projects</span>
                <span className="text-2xl font-black text-foreground mt-2">3</span>
                <span className="text-[10px] text-muted-foreground block mt-1">Structured portfolios</span>
              </Card>
              <Card className="flex flex-col justify-between p-4 bg-secondary/15">
                <span className="text-muted-foreground text-xs font-semibold block">Tools</span>
                <span className="text-2xl font-black text-foreground mt-2">10+</span>
                <span className="text-[10px] text-muted-foreground block mt-1">Analytics technologies</span>
              </Card>
              <Card className="flex flex-col justify-between p-4 bg-secondary/15">
                <span className="text-muted-foreground text-xs font-semibold block">Churn Accuracy</span>
                <span className="text-2xl font-black text-foreground mt-2">88%</span>
                <span className="text-[10px] text-muted-foreground block mt-1">Supervised model</span>
              </Card>
              <Card className="flex flex-col justify-between p-4 bg-secondary/15">
                <span className="text-muted-foreground text-xs font-semibold block">Graduation</span>
                <span className="text-2xl font-black text-foreground mt-2">2026</span>
                <span className="text-[10px] text-muted-foreground block mt-1">IIIT Manipur candidate</span>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6 scroll-mt-20">
          <div className="space-y-2 border-l-2 border-accent pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Skills Toolkit</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Languages, Libraries & Concepts</p>
          </div>

          <Tabs defaultValue="Programming and Databases" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1 border-b border-border bg-transparent p-0 rounded-none w-full justify-start overflow-x-auto">
              {data.skills.map((group) => (
                <TabsTrigger 
                  key={group.category} 
                  value={group.category}
                  className="rounded-t-md rounded-b-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-4 py-2 text-xs sm:text-sm font-medium cursor-pointer"
                >
                  {group.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {data.skills.map((group) => (
              <TabsContent key={group.category} value={group.category} className="pt-6">
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="px-3.5 py-1.5 text-sm font-medium bg-card hover:bg-secondary/40 transition-colors border-border/80 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-6 scroll-mt-20">
          <div className="space-y-2 border-l-2 border-accent pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Featured Projects</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Practical Analytics & Pipeline Scenarios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.projects.map((project) => (
              <Card key={project.title} tilt={true} className="flex flex-col h-full bg-card/40 border border-border transition-all">
                <CardHeader className="p-5 flex-none">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold tracking-wider mb-2 text-accent border-accent/20 bg-accent/5">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-base sm:text-lg leading-snug">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="p-5 pt-0 flex-1 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">The Problem</span>
                    <p className="text-xs text-foreground/90 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Key Result</span>
                    <p className="text-xs text-foreground/90 font-medium">{project.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-[9px] px-1 py-0.5 text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0 flex gap-2 border-t border-border/30 mt-auto pt-4 flex-none">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-none">
                    <Button variant="outline" size="sm" className="w-9 h-8 p-0 cursor-pointer" title="GitHub Repository">
                      <GithubIcon />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Details Modal (Dialog component) */}
        <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)}>
          {selectedProject && (
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="text-[10px] uppercase font-bold text-accent border-accent/20 bg-accent/5 mb-1.5">
                  {selectedProject.category}
                </Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{selectedProject.title}</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Business Problem</h4>
                  <p className="text-foreground/90 bg-secondary/10 p-3 rounded-lg border border-border/40 leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Technical Approach</h4>
                  <p className="text-foreground/90 leading-relaxed">{selectedProject.approach}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Project Results & Metrics</h4>
                  <p className="text-foreground font-semibold text-emerald-500 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {selectedProject.result}
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Key Implementation Steps</h4>
                  <ul className="space-y-2 list-none">
                    {selectedProject.detailedPoints.map((point, index) => (
                      <li key={index} className="flex gap-2.5 text-muted-foreground leading-relaxed text-xs sm:text-sm">
                        <span className="text-accent font-bold shrink-0">{index + 1}.</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Technology Badges</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2.5 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full gap-2 cursor-pointer">
                    <GithubIcon />
                    GitHub Repository
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <Button variant="outline" onClick={() => setSelectedProject(null)} className="cursor-pointer">
                  Close
                </Button>
              </div>
            </div>
          )}
        </Dialog>

        {/* Interactive Playgrounds Dashboard */}
        <ProjectPlayground />

        {/* Education Timeline */}
        <section id="education" className="space-y-6 scroll-mt-20">
          <div className="space-y-2 border-l-2 border-accent pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Education</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Academic Milestones</p>
          </div>

          <div className="relative border-l border-border pl-6 ml-3 space-y-8 py-2">
            {data.education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                      {edu.institution}
                    </h3>
                    <span className="text-xs font-semibold text-accent shrink-0 bg-accent/5 px-2.5 py-0.5 border border-accent/20 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                    <span>{edu.degree}</span>
                    {edu.field && <span>&bull; {edu.field}</span>}
                    <span>&bull; {edu.location}</span>
                  </div>
                  {edu.details && (
                    <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pt-1.5">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="space-y-6 scroll-mt-20">
          <div className="space-y-2 border-l-2 border-accent pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Certifications</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Industry & Academic Verifications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.certifications.map((cert) => (
              <Card key={cert.name} className="flex flex-col justify-between bg-card border border-border p-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Badge variant={cert.status === "Completed" ? "outline" : "secondary"} className="text-[9px] uppercase tracking-wide">
                      {cert.status}
                    </Badge>
                    <Award className="h-4 w-4 text-accent/70" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground leading-snug">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">Issuer: {cert.issuer}</p>
                </div>
                {cert.link && (
                  <div className="pt-3 border-t border-border/30 mt-3">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      Verify Credential
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Resume Viewer / Summary Section */}
        <section className="space-y-6">
          <div className="space-y-2 border-l-2 border-accent pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Resume</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Paper Document Download</p>
          </div>

          <Card className="border border-border bg-secondary/5 rounded-xl overflow-hidden p-6 max-w-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div className="space-y-2 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-foreground">ATS-Optimized Professional Resume</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Looking for the traditional, single-page PDF document? My resume is formatted to be fully readable by Applicant Tracking Systems (ATS) and hiring teams.
                </p>
              </div>
              <div className="flex flex-row sm:flex-col gap-2.5 w-full sm:w-auto shrink-0">
                <a href="/resume.pdf" target="_blank" className="flex-1 sm:w-full">
                  <Button variant="outline" className="w-full gap-1.5 cursor-pointer">
                    <FileText className="h-4 w-4" />
                    View PDF
                  </Button>
                </a>
                <a href="/resume.pdf" download="Ronanki_Tagore_Data_Analyst.pdf" className="flex-1 sm:w-full">
                  <Button className="w-full gap-1.5 cursor-pointer">
                    Download
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 scroll-mt-20">
          <div className="space-y-2 border-l-2 border-accent pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Get In Touch</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Collaboration & Job Leads</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                I am actively seeking entry-level opportunities in Data Analytics, Business Intelligence, or Junior Data Science. Let's connect if you have openings or want to collaborate!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">Email</span>
                    <a href={`mailto:${data.personalInfo.email}`} className="text-sm hover:underline font-semibold text-foreground">
                      {data.personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">Phone</span>
                    <span className="text-sm font-semibold text-foreground">{data.personalInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">Location</span>
                    <span className="text-sm font-semibold text-foreground">{data.personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card className="border border-border p-6 bg-card">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 space-y-3 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Message Sent Successfully!</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
                      Thank you for reaching out. I'll get back to you at {formData.email || "your email"} as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-foreground">Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="Your name"
                        />
                        {formErrors.name && <span className="text-[10px] text-destructive block">{formErrors.name}</span>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-foreground">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="Your email"
                        />
                        {formErrors.email && <span className="text-[10px] text-destructive block">{formErrors.email}</span>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-foreground">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Project lead, job opening, etc."
                      />
                      {formErrors.subject && <span className="text-[10px] text-destructive block">{formErrors.subject}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-foreground">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-all focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Write your message details..."
                      />
                      {formErrors.message && <span className="text-[10px] text-destructive block">{formErrors.message}</span>}
                    </div>

                    <Button type="submit" className="w-full gap-2 justify-center cursor-pointer">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/15 py-8 mt-16 no-print">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <span className="font-bold text-foreground text-sm flex items-center justify-center md:justify-start gap-1.5">
              <span className="bg-primary text-primary-foreground rounded px-1 py-0.5 text-xs font-black">RT</span>
              {data.personalInfo.name}
            </span>
            <p className="text-xs text-muted-foreground">{data.personalInfo.tagline}</p>
          </div>
          <div className="flex gap-4 text-xs font-medium text-muted-foreground">
            <span onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-foreground">About</span>
            <span onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-foreground">Projects</span>
            <span onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-foreground">Contact</span>
            <a href="/resume.pdf" target="_blank" className="hover:text-foreground">Resume</a>
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Ronanki Tagore
          </div>
        </div>
      </footer>

    </div>
  )
}
