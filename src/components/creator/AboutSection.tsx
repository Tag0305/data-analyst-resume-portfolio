import { FadeIn } from "./FadeIn"
import { AnimatedText } from "./AnimatedText"
import { ContactButton } from "./ContactButton"
import { Card } from "../ui/card"

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* 4 Decorative Corner 3D Graphics */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none opacity-80">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Decorative Moon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none opacity-80">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Decorative Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none opacity-80">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Decorative Lego"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none opacity-80">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Decorative Shapes"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10 sm:space-y-14 md:space-y-16">
        <FadeIn delay={0} y={40}>
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">// ABOUT THE DEVELOPER</span>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,140px)]">
              About Me
            </h2>
          </div>
        </FadeIn>

        {/* Paragraph 1 with character-by-character scroll animation */}
        <AnimatedText
          text="I am Ronanki Tagore, a data and AI evaluation professional with a B.Tech in Electronics and Communication Engineering from IIIT Manipur. I work across data analysis, SQL development, predictive modeling, reproducible pipelines, and deterministic evaluation systems for advanced AI coding agents."
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px] text-[clamp(1rem,2vw,1.35rem)] text-center"
        />

        {/* Paragraph 2 */}
        <FadeIn delay={0.2} y={20}>
          <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed max-w-xl mx-auto">
            My approach focuses on clear requirements, reliable data, reproducible results, edge-case coverage, and practical technical communication. I enjoy turning ambiguous problems into structured workflows that can be tested and trusted.
          </p>
        </FadeIn>

        {/* Concise Truthful Summary Cards */}
        <FadeIn delay={0.3} y={20} className="w-full max-w-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <Card tilt={true} className="p-4 bg-card/60 border border-[#D7E2EA]/15 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">Education</span>
              <div className="mt-2">
                <span className="text-xl sm:text-2xl font-black text-emerald-400">IIIT Manipur</span>
                <span className="text-[10px] text-muted-foreground block">B.Tech ECE (2022-2026)</span>
              </div>
            </Card>

            <Card tilt={true} className="p-4 bg-card/60 border border-[#D7E2EA]/15 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">Graduation</span>
              <div className="mt-2">
                <span className="text-xl sm:text-2xl font-black text-emerald-400">May 2026</span>
                <span className="text-[10px] text-muted-foreground block">Senapati, Manipur</span>
              </div>
            </Card>

            <Card tilt={true} className="p-4 bg-card/60 border border-[#D7E2EA]/15 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">Accuracy</span>
              <div className="mt-2">
                <span className="text-xl sm:text-2xl font-black text-emerald-400">88.0%</span>
                <span className="text-[10px] text-muted-foreground block">Churn Model Accuracy</span>
              </div>
            </Card>

            <Card tilt={true} className="p-4 bg-card/60 border border-[#D7E2EA]/15 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">Core Focus</span>
              <div className="mt-2">
                <span className="text-xl sm:text-2xl font-black text-emerald-400">SQL & AI</span>
                <span className="text-[10px] text-muted-foreground block">Data & Evaluation</span>
              </div>
            </Card>
          </div>
        </FadeIn>

        <div className="pt-4">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
