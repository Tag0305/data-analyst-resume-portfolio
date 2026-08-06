import * as React from "react"
import { LoadingScreen } from "./components/layout/LoadingScreen"
import { HeroSection } from "./components/creator/HeroSection"
import { MarqueeSection } from "./components/creator/MarqueeSection"
import { AboutSection } from "./components/creator/AboutSection"
import { ServicesSection } from "./components/creator/ServicesSection"
import { ProjectsSection } from "./components/creator/ProjectsSection"
import { ProjectPlayground } from "./components/ProjectPlayground"
import { SkillsSection } from "./components/skills/SkillsSection"
import { ExperienceSection } from "./components/experience/ExperienceSection"
import { Career } from "./components/portfolio3d/Career"
import { ResumeSection } from "./components/resume/ResumeSection"
import { Contact } from "./components/portfolio3d/Contact"
import { portfolioData } from "./data/portfolioData"

export default function App() {
  const [loading, setLoading] = React.useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className="min-h-screen flex flex-col font-sans bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip selection:bg-emerald-500 selection:text-black">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. MARQUEE SECTION */}
        <MarqueeSection />

        {/* 3. ABOUT SECTION */}
        <AboutSection />

        {/* 4. SERVICES SECTION */}
        <ServicesSection />

        {/* 5. PROJECTS SECTION (Sticky Stacking Cards) */}
        <ProjectsSection />

        <main className="container mx-auto max-w-6xl px-4 sm:px-6 py-6 space-y-16 relative z-30">
          {/* Interactive Project Playgrounds (SQL Lab, Churn Simulator, Pipeline DAG) */}
          <ProjectPlayground />

          {/* Interactive Bento Skills Grid */}
          <SkillsSection />

          {/* Professional Experience (Independent AI Benchmark Developer) */}
          <ExperienceSection />

          {/* Academic Timeline & Certifications */}
          <Career />

          {/* Official Resume Preview & Download */}
          <ResumeSection />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-[#D7E2EA]/10 py-8 bg-[#0C0C0C] mt-20 relative z-30">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500 text-black font-black text-[10px] px-1.5 py-0.5 rounded">RT</span>
              <span className="font-bold text-[#D7E2EA]">{portfolioData.personalInfo.name}</span>
              <span>• 3D Creator & Data Analyst</span>
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
