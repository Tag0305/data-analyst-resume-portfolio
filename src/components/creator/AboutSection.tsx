import { FadeIn } from "./FadeIn"
import { AnimatedText } from "./AnimatedText"
import { ContactButton } from "./ContactButton"

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* 4 Decorative Corner 3D Graphics */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Graphic"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object Graphic"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Graphic"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Shapes Graphic"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10 sm:space-y-14 md:space-y-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Character by character scroll-reveal text */}
        <AnimatedText
          text="I am an Electronics and Communication Engineering student at IIIT Manipur with hands-on experience in SQL, Python, business analytics, predictive modelling and data pipeline development. I focus on relational database optimization, machine learning models, and executive dashboards. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] text-center"
        />

        <div className="pt-6 sm:pt-10 md:pt-12">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
