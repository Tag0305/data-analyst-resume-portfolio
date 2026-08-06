import { FadeIn } from "./FadeIn"
import { Magnet } from "./Magnet"
import { ContactButton } from "./ContactButton"

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <span onClick={() => scrollTo("about")} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">About</span>
          <span onClick={() => scrollTo("services")} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">Services</span>
          <span onClick={() => scrollTo("projects")} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">Projects</span>
          <span onClick={() => scrollTo("contact")} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">Contact</span>
        </nav>
      </FadeIn>

      {/* Massive Gradient Hero Heading */}
      <div className="w-full overflow-hidden mt-6 sm:mt-4 md:-mt-5 text-center sm:text-left px-2 sm:px-6">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            hi, i&apos;m tagore
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait in Center (Magnet Wrapping User's Avatar) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="/avatar.png"
              alt="Ronanki Tagore - Full Body Character Portrait"
              className="w-full h-auto max-h-[75vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-auto"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar: Floating Description (Left) & Contact Button (Right) */}
      <div className="w-full flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a 3d creator & data analyst driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
