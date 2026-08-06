import * as React from "react"
import { FileText, Sun, Moon, Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet } from "../ui/sheet"

export function Navbar({ theme, toggleTheme }: { theme: "light" | "dark"; toggleTheme: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <div 
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 cursor-pointer font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="bg-emerald-500 text-black font-black text-xs px-2 py-1 rounded">RT</span>
          <span className="text-sm sm:text-base font-extrabold tracking-wider uppercase">
            Ronanki Tagore <span className="text-emerald-500">.3D</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span onClick={() => scrollTo("about")} className="cursor-pointer hover:text-emerald-400 transition-colors">About</span>
          <span onClick={() => scrollTo("experience")} className="cursor-pointer hover:text-emerald-400 transition-colors">Experience</span>
          <span onClick={() => scrollTo("what-i-do")} className="cursor-pointer hover:text-emerald-400 transition-colors">What I Do</span>
          <span onClick={() => scrollTo("work")} className="cursor-pointer hover:text-emerald-400 transition-colors">Work</span>
          <span onClick={() => scrollTo("skills")} className="cursor-pointer hover:text-emerald-400 transition-colors">Skills</span>
          <span onClick={() => scrollTo("career")} className="cursor-pointer hover:text-emerald-400 transition-colors">Education</span>
          <span onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-emerald-400 transition-colors">Contact</span>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-emerald-400" /> : <Moon className="h-4 w-4" />}
          </Button>

          <a href="/resume.pdf" target="_blank" className="hidden sm:inline-flex">
            <Button variant="outline" size="sm" className="gap-2 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 cursor-pointer text-xs font-bold uppercase tracking-wider">
              <FileText className="h-3.5 w-3.5" />
              Resume PDF
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

      {/* Mobile Drawer */}
      <Sheet open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="flex flex-col gap-4 py-4 text-sm font-semibold uppercase tracking-wider">
          <span className="text-emerald-400 font-bold text-base mb-4">Navigation</span>
          {["hero", "about", "experience", "what-i-do", "work", "skills", "career", "contact"].map((id) => (
            <span
              key={id}
              onClick={() => scrollTo(id)}
              className="cursor-pointer text-muted-foreground hover:text-foreground py-1"
            >
              {id.replace("-", " ")}
            </span>
          ))}
          <a href="/resume.pdf" target="_blank" className="pt-4">
            <Button variant="outline" className="w-full gap-2 justify-center border-emerald-500/30 text-emerald-400">
              <FileText className="h-4 w-4" />
              Resume PDF
            </Button>
          </a>
        </div>
      </Sheet>
    </header>
  )
}
