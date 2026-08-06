import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "./FadeIn"
import { LiveProjectButton } from "./LiveProjectButton"

const projectsData = [
  {
    num: "01",
    category: "PostgreSQL & SQL",
    name: "SQL E-Commerce Business Analytics",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "02",
    category: "Python & Scikit-Learn",
    name: "Customer Churn Predictive Modeling",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  },
  {
    num: "03",
    category: "Python & SQLite",
    name: "Cloud Data Pipeline Simulation",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio"
  }
]

function StickyCard({ project, index, totalCards }: { project: typeof projectsData[0]; index: number; totalCards: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="sticky h-[85vh] flex items-center justify-center"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top Row: Number, Category, Title, Live Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4 mb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] leading-none text-[clamp(2.5rem,6vw,5rem)]">
              {project.num}
            </span>
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase text-[#D7E2EA]/60 block tracking-widest">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl font-bold uppercase tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.githubUrl} label="Live Project" />
        </div>

        {/* Bottom Row: 2-Column Image Grid */}
        <div className="grid grid-cols-12 gap-4 flex-1 items-center">
          {/* Left Column (40% width): 2 Stacked Images */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <img
              src={project.col1Img1}
              alt={`${project.name} preview 1`}
              className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover border border-[#D7E2EA]/20"
            />
            <img
              src={project.col1Img2}
              alt={`${project.name} preview 2`}
              className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover border border-[#D7E2EA]/20"
            />
          </div>

          {/* Right Column (60% width): 1 Tall Image */}
          <div className="col-span-12 md:col-span-7 h-full">
            <img
              src={project.col2Img}
              alt={`${project.name} main view`}
              className="w-full h-full max-h-[580px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover border border-[#D7E2EA]/20"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 pb-32">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center tracking-tight leading-none text-[clamp(3rem,12vw,160px)]">
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Project Cards */}
        <div className="space-y-10 relative">
          {projectsData.map((project, index) => (
            <StickyCard
              key={project.num}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
