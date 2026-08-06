import { FadeIn } from "./FadeIn"
import { ContactButton } from "./ContactButton"
import { BarChart3, Cpu, CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-10 py-24 bg-[#020503] text-[#F4FFF7] overflow-hidden border-t border-b border-[#22C55E]/20">
      <div className="max-w-6xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#39FF88] font-bold">// PROFILE OVERVIEW</span>
            <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(2.5rem,7vw,72px)]">
              About Me
            </h2>
          </div>
        </FadeIn>

        {/* Balanced Grid: Introduction Copy (Left) + 3 Compact Information Blocks (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Clear Paragraphs */}
          <FadeIn delay={0.15} y={20} className="lg:col-span-7 space-y-6 text-[#A8B5AC] text-sm sm:text-base leading-relaxed">
            <p className="text-[#F4FFF7] font-medium text-base sm:text-lg leading-relaxed">
              I am Ronanki Tagore, a Data Analyst, SQL Developer, and Independent AI Benchmark &amp; Evaluation Developer with a B.Tech in Electronics and Communication Engineering from IIIT Manipur.
            </p>
            
            <p>
              My work combines data analysis, SQL development, machine learning, automated data pipelines, Docker, testing, and deterministic benchmark development. I focus on converting complex technical requirements into reliable, reproducible, and well-verified systems.
            </p>

            <p>
              I value clear requirements, accurate analysis, reproducible results, edge-case coverage, and practical technical communication.
            </p>

            <div className="pt-2">
              <ContactButton />
            </div>
          </FadeIn>

          {/* Right Column: 3 Clean Information Blocks */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Block 1 */}
            <FadeIn delay={0.25} y={20}>
              <div className="p-5 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-2 hover:border-[#39FF88]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#39FF88] font-bold text-base">
                  <BarChart3 className="h-5 w-5 text-[#22C55E]" />
                  <h3>Data &amp; Analytics</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A8B5AC] leading-relaxed">
                  SQL analysis, business insights, data cleaning, statistical analysis, cohort retention, dashboards, and reporting.
                </p>
              </div>
            </FadeIn>

            {/* Block 2 */}
            <FadeIn delay={0.35} y={20}>
              <div className="p-5 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-2 hover:border-[#39FF88]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#39FF88] font-bold text-base">
                  <Cpu className="h-5 w-5 text-[#22C55E]" />
                  <h3>Engineering &amp; Evaluation</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A8B5AC] leading-relaxed">
                  Python, Docker, Linux, automated testing, oracle verification, deterministic systems, and AI coding-agent evaluation.
                </p>
              </div>
            </FadeIn>

            {/* Block 3 */}
            <FadeIn delay={0.45} y={20}>
              <div className="p-5 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-2 hover:border-[#39FF88]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#39FF88] font-bold text-base">
                  <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                  <h3>Working Approach</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A8B5AC] leading-relaxed">
                  Research, specification, implementation, testing, verification, documentation, and continuous improvement.
                </p>
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  )
}
