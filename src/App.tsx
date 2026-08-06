import * as React from "react"
import { LoadingScreen } from "./components/layout/LoadingScreen"
import { Navbar } from "./components/portfolio3d/Navbar"
import { HeroSection } from "./components/hero/HeroSection"
import { About } from "./components/portfolio3d/About"
import { WhatIDo } from "./components/portfolio3d/WhatIDo"
import { Work } from "./components/portfolio3d/Work"
import { ProjectPlayground } from "./components/ProjectPlayground"
import { TechStackBallPit } from "./components/3d/TechStackBallPit"
import { Career } from "./components/portfolio3d/Career"
import { ResumeSection } from "./components/resume/ResumeSection"
import { Contact } from "./components/portfolio3d/Contact"
import { portfolioData } from "./data/portfolioData"

export default function App() {
  const [loading, setLoading] = React.useState(true)
  const [theme, setTheme] = React.useState<"light" | "dark">("dark")

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

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-background text-foreground selection:bg-emerald-500 selection:text-black">
        {/* Navigation Bar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main Section */}
        <main className="flex-1 container mx-auto max-w-6xl px-4 sm:px-6 py-6 space-y-16">
          {/* Hero Section with 2.5D Full-Body Avatar Stage */}
          <HeroSection />

          {/* 01. About Me */}
          <About />

          {/* 02. What I Do / Disciplines */}
          <WhatIDo />

          {/* 03. Selected Projects & Repositories */}
          <Work />

          {/* Interactive Project Playgrounds (SQL Lab, Churn Simulator, Pipeline DAG) */}
          <ProjectPlayground />

          {/* 3D Physics Tech Stack Ball Pit */}
          <section id="skills" className="py-12 border-t border-border/60 scroll-mt-20 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                // INTERACTIVE 3D ORBIT
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
                3D Physics <span className="text-emerald-400">Tech Stack Ball Pit</span>
              </h2>
            </div>
            <TechStackBallPit />
          </section>

          {/* 04. Education & Certifications Timeline */}
          <Career />

          {/* Official Resume Preview & Download */}
          <ResumeSection />

          {/* 05. Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-border/60 py-8 bg-secondary/10 mt-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500 text-black font-black text-[10px] px-1.5 py-0.5 rounded">RT</span>
              <span className="font-bold text-foreground">{portfolioData.personalInfo.name}</span>
              <span>• Data Analyst & SQL Developer</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Ronanki Tagore. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
