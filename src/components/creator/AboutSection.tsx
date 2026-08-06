import * as React from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ContactButton } from "./ContactButton"
import { BarChart3, Cpu, CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Desktop Scroll Reveal Threshold Transforms (0 to 1 progress mapping)
  const headingOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1])
  const headingY = useTransform(scrollYProgress, [0, 0.12], [28, 0])

  const p1Opacity = useTransform(scrollYProgress, [0.12, 0.35], [0.3, 1])
  const p1Y = useTransform(scrollYProgress, [0.12, 0.35], [20, 0])

  const p2Opacity = useTransform(scrollYProgress, [0.35, 0.58], [0.3, 1])
  const p2Y = useTransform(scrollYProgress, [0.35, 0.58], [20, 0])

  const p3Opacity = useTransform(scrollYProgress, [0.58, 0.72], [0.3, 1])
  const p3Y = useTransform(scrollYProgress, [0.58, 0.72], [20, 0])

  const block1Opacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 1])
  const block1Y = useTransform(scrollYProgress, [0.72, 0.82], [24, 0])

  const block2Opacity = useTransform(scrollYProgress, [0.82, 0.91], [0, 1])
  const block2Y = useTransform(scrollYProgress, [0.82, 0.91], [24, 0])

  const block3Opacity = useTransform(scrollYProgress, [0.91, 1.0], [0, 1])
  const block3Y = useTransform(scrollYProgress, [0.91, 1.0], [24, 0])

  // Progress Stage Counter text
  const currentStage = useTransform(scrollYProgress, [0, 0.35, 0.72, 0.9], ["01 — Introduction", "02 — Technical Focus", "03 — Working Values", "04 — Expertise"])

  return (
    <section ref={containerRef} id="about" className="relative bg-[#020503] text-[#F4FFF7] border-t border-b border-[#22C55E]/20">
      
      {/* Desktop Sticky Scroll Presentation (220vh outer container, 100vh inner sticky container) */}
      <div className="hidden md:block min-h-[200vh] relative">
        <div className="sticky top-0 min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 overflow-hidden">
          
          {/* Subtle Aesthetic Data Grid & Progress Indicator */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="max-w-6xl mx-auto w-full space-y-8 relative z-10">
            
            {/* Scroll Progress Bar & Counter Header */}
            <div className="flex items-center justify-between border-b border-[#22C55E]/20 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#39FF88] font-bold">// ABOUT THE DEVELOPER</span>
                <motion.span className="text-[10px] font-mono text-[#86EFAC] bg-[#071009] px-2.5 py-0.5 rounded-full border border-[#22C55E]/30">
                  {currentStage}
                </motion.span>
              </div>

              {/* Progress Line */}
              <div className="w-32 h-1 bg-[#071009] rounded-full overflow-hidden border border-[#22C55E]/30">
                <motion.div
                  className="h-full bg-[#39FF88]"
                  style={{ scaleX: shouldReduceMotion ? 1 : scrollYProgress, transformOrigin: "left" }}
                />
              </div>
            </div>

            {/* Section Heading */}
            <motion.div style={shouldReduceMotion ? {} : { opacity: headingOpacity, y: headingY }}>
              <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(3.4rem,8vw,8rem)]">
                About Me
              </h2>
            </motion.div>

            {/* Content Grid: Progressive Text Reveal (Left) + Staggered Cards (Right) */}
            <div className="grid grid-cols-12 gap-8 items-start">
              
              {/* Paragraphs */}
              <div className="col-span-7 space-y-5 text-base sm:text-lg leading-relaxed font-sans">
                <motion.p style={shouldReduceMotion ? {} : { opacity: p1Opacity, y: p1Y }} className="text-[#F4FFF7] font-medium">
                  I am Ronanki Tagore, a Data Analyst, SQL Developer, and Independent AI Benchmark &amp; Evaluation Developer with a B.Tech in Electronics and Communication Engineering from IIIT Manipur.
                </motion.p>

                <motion.p style={shouldReduceMotion ? {} : { opacity: p2Opacity, y: p2Y }} className="text-[#A8B5AC]">
                  My work combines data analysis, SQL development, machine learning, automated data pipelines, Docker, testing, and deterministic benchmark development. I focus on converting complex technical requirements into reliable, reproducible, and well-verified systems.
                </motion.p>

                <motion.p style={shouldReduceMotion ? {} : { opacity: p3Opacity, y: p3Y }} className="text-[#A8B5AC]">
                  I value clear requirements, accurate analysis, reproducible results, edge-case coverage, and practical technical communication.
                </motion.p>

                <div className="pt-2">
                  <ContactButton />
                </div>
              </div>

              {/* 3 Information Cards */}
              <div className="col-span-5 space-y-3.5">
                
                {/* Block 1 */}
                <motion.div style={shouldReduceMotion ? {} : { opacity: block1Opacity, y: block1Y }}>
                  <div className="p-4 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-1.5 hover:border-[#39FF88]/40 transition-colors">
                    <div className="flex items-center justify-between text-[#39FF88] font-bold text-sm">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-[#22C55E]" />
                        <h3>Data &amp; Analytics</h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#748078]">01</span>
                    </div>
                    <p className="text-xs text-[#A8B5AC] leading-relaxed">
                      SQL analysis, business insights, data cleaning, statistical analysis, cohort retention, dashboards, and reporting.
                    </p>
                  </div>
                </motion.div>

                {/* Block 2 */}
                <motion.div style={shouldReduceMotion ? {} : { opacity: block2Opacity, y: block2Y }}>
                  <div className="p-4 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-1.5 hover:border-[#39FF88]/40 transition-colors">
                    <div className="flex items-center justify-between text-[#39FF88] font-bold text-sm">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-[#22C55E]" />
                        <h3>Engineering &amp; Evaluation</h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#748078]">02</span>
                    </div>
                    <p className="text-xs text-[#A8B5AC] leading-relaxed">
                      Python, Docker, Linux, automated testing, oracle verification, deterministic systems, and AI coding-agent evaluation.
                    </p>
                  </div>
                </motion.div>

                {/* Block 3 */}
                <motion.div style={shouldReduceMotion ? {} : { opacity: block3Opacity, y: block3Y }}>
                  <div className="p-4 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-1.5 hover:border-[#39FF88]/40 transition-colors">
                    <div className="flex items-center justify-between text-[#39FF88] font-bold text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                        <h3>Working Approach</h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#748078]">03</span>
                    </div>
                    <p className="text-xs text-[#A8B5AC] leading-relaxed">
                      Research, specification, implementation, testing, verification, documentation, and continuous improvement.
                    </p>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Mobile Flow (below 768px): Natural Vertical Viewport Reveal */}
      <div className="block md:hidden px-5 py-16 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#39FF88] font-bold">// ABOUT THE DEVELOPER</span>
          <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(2.5rem,8vw,56px)]">
            About Me
          </h2>
        </div>

        <div className="space-y-4 text-sm text-[#A8B5AC] leading-relaxed">
          <p className="text-[#F4FFF7] font-medium text-base">
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
        </div>

        <div className="space-y-3 pt-4 border-t border-[#22C55E]/20">
          <div className="p-4 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-1">
            <h3 className="text-sm font-bold text-[#39FF88] flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-[#22C55E]" />
              Data &amp; Analytics
            </h3>
            <p className="text-xs text-[#A8B5AC]">
              SQL analysis, business insights, data cleaning, statistical analysis, cohort retention, dashboards, and reporting.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-1">
            <h3 className="text-sm font-bold text-[#39FF88] flex items-center gap-2">
              <Cpu className="h-4 w-4 text-[#22C55E]" />
              Engineering &amp; Evaluation
            </h3>
            <p className="text-xs text-[#A8B5AC]">
              Python, Docker, Linux, automated testing, oracle verification, deterministic systems, and AI coding-agent evaluation.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B1710] border border-[#22C55E]/25 space-y-1">
            <h3 className="text-sm font-bold text-[#39FF88] flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
              Working Approach
            </h3>
            <p className="text-xs text-[#A8B5AC]">
              Research, specification, implementation, testing, verification, documentation, and continuous improvement.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
