import * as React from "react"
import { LoadingScreen } from "./components/layout/LoadingScreen"
import { HeroSection } from "./components/creator/HeroSection"
import { AboutSection } from "./components/creator/AboutSection"
import { ProjectsSection } from "./components/creator/ProjectsSection"
import { CoreExpertiseSection } from "./components/creator/CoreExpertiseSection"
import { ExperienceSection } from "./components/experience/ExperienceSection"
import { Career } from "./components/portfolio3d/Career"
import { Contact } from "./components/portfolio3d/Contact"
import { GoldCursor } from "./components/creator/GoldCursor"
import { portfolioData } from "./data/portfolioData"

export default function App() {
  const [loading, setLoading] = React.useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Gold cursor (desktop only) */}
      <GoldCursor />

      <div
        className="min-h-screen flex flex-col overflow-x-clip"
        style={{
          background: "#FAF9F6",
          color: "#1a1a1a",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          // Ivory text selection
        }}
      >
        {/* 1 & 2. HEADER, NAVIGATION & HERO SECTION */}
        <HeroSection />

        {/* 3. ABOUT ME SECTION */}
        <AboutSection />

        {/* 4. PROJECTS SECTION */}
        <ProjectsSection />

        {/* 5. CORE EXPERTISE SECTION */}
        <CoreExpertiseSection />

        {/* 6. PROFESSIONAL EXPERIENCE */}
        <ExperienceSection />

        {/* 7. ACADEMIC TIMELINE & CERTIFICATIONS */}
        <Career />

        {/* 8. CONTACT SECTION */}
        <Contact />

        {/* 9. Footer */}
        <footer
          style={{
            background: "#1a1a1a",
            borderTop: "1px solid rgba(201,168,76,0.25)"
          }}
          className="py-8"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="font-serif italic text-base font-bold"
                style={{ color: "#C9A84C" }}
              >
                RT
              </span>
              <span
                className="font-sans text-sm font-semibold"
                style={{ color: "#FFFFFF" }}
              >
                {portfolioData.personalInfo.name}
              </span>
              <span
                className="font-mono text-xs"
                style={{ color: "#888" }}
              >
                · Data Analyst &amp; AI Evaluation Developer
              </span>
            </div>
            <span className="font-mono text-xs" style={{ color: "#888" }}>
              © {new Date().getFullYear()} Ronanki Tagore. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}
