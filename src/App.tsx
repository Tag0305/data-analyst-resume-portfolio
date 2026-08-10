import * as React from "react"
import { LoadingScreen } from "./components/layout/LoadingScreen"
import { HeroSection } from "./components/creator/HeroSection"
import { AboutSection } from "./components/creator/AboutSection"
import { ProjectsSection } from "./components/creator/ProjectsSection"
import { CoreExpertiseSection } from "./components/creator/CoreExpertiseSection"
import { ExperienceSection } from "./components/experience/ExperienceSection"
import { Career } from "./components/portfolio3d/Career"
import { Contact } from "./components/portfolio3d/Contact"
import { portfolioData } from "./data/portfolioData"

export default function App() {
  const [loading, setLoading] = React.useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className="min-h-screen flex flex-col font-sans bg-[#030604] text-[#F4FFF7] overflow-x-clip selection:bg-[#22C55E] selection:text-[#021006]">
        {/* 1 & 2. HEADER, NAVIGATION & HERO SECTION */}
        <HeroSection />

        {/* 3. ABOUT ME SECTION */}
        <AboutSection />

        {/* 4. MAIN PROJECTS SECTION (ONE SINGLE PROJECT SECTION WITH CARDS 01, 02, 03, 04) */}
        <ProjectsSection />

        {/* 5. CORE EXPERTISE SECTION */}
        <CoreExpertiseSection />

        {/* 6, 7 & 8. MAIN CONTENT CONTAINER: EXPERIENCE, EDUCATION & CERTIFICATIONS, CONTACT */}
        <main className="container mx-auto max-w-6xl px-4 sm:px-6 py-6 space-y-16 relative z-30">
          {/* 6. Professional Experience (Airdawgs: Terminus & Sentinel) */}
          <ExperienceSection />

          {/* 7. Academic Timeline & Certifications */}
          <Career />

          {/* 8. Contact Section */}
          <Contact />
        </main>

        {/* 9. Footer */}
        <footer className="border-t border-[#22C55E]/30 py-8 bg-[#071009] text-[#F4FFF7] relative z-30 mt-12">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7B5AB]">
            <div className="flex items-center gap-2">
              <span className="bg-[#22C55E] text-[#021006] font-black text-[10px] px-2 py-0.5 rounded font-mono">TR</span>
              <span className="font-bold text-[#F4FFF7]">{portfolioData.personalInfo.name}</span>
              <span>• Data Analyst &amp; AI Evaluation Developer</span>
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
