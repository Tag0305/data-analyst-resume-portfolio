import * as React from "react"
import { LoadingScreen } from "./components/layout/LoadingScreen"
import { HeroSection } from "./components/creator/HeroSection"
import { MarqueeSection } from "./components/creator/MarqueeSection"
import { AboutSection } from "./components/creator/AboutSection"
import { CoreExpertiseSection } from "./components/creator/CoreExpertiseSection"
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

      <div className="min-h-screen flex flex-col font-sans bg-[#F7FAF7] text-[#102017] overflow-x-clip selection:bg-[#16803A] selection:text-white">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. MARQUEE SECTION */}
        <MarqueeSection />

        {/* 3. ABOUT SECTION */}
        <AboutSection />

        {/* 4. CORE EXPERTISE SECTION (REPLACES OLD SERVICES BLOCK) */}
        <CoreExpertiseSection />

        {/* 5. PROJECTS SECTION (Sticky Stacking Cards with White/Green Frames) */}
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

          {/* Contact Section (Deep Green Contrast Surface) */}
          <Contact />
        </main>

        {/* Deep Green Footer */}
        <footer className="border-t border-[#16803A]/30 py-8 bg-[#0D2416] text-white relative z-30 mt-12">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#DDF3E3]/80">
            <div className="flex items-center gap-2">
              <span className="bg-[#16803A] text-white font-black text-[10px] px-2 py-0.5 rounded font-mono">TR</span>
              <span className="font-bold text-white">{portfolioData.personalInfo.name}</span>
              <span>• Data Analyst & AI Evaluation Developer</span>
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
