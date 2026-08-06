import * as React from "react"

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
]

export function MarqueeSection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollPos = window.scrollY - (window.scrollY + rect.top) + window.innerHeight
      setOffset(scrollPos * 0.3)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const row1 = marqueeImages.slice(0, 11)
  const row2 = marqueeImages.slice(11)

  const row1Tripled = [...row1, ...row1, ...row1]
  const row2Tripled = [...row2, ...row2, ...row2]

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden space-y-3">
      {/* Row 1 - Moves RIGHT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform"
          }}
        >
          {row1Tripled.map((url, idx) => (
            <img
              key={`r1-${idx}`}
              src={url}
              alt="3D Project Preview"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 border border-[#D7E2EA]/10 shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - Moves LEFT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform"
          }}
        >
          {row2Tripled.map((url, idx) => (
            <img
              key={`r2-${idx}`}
              src={url}
              alt="3D Project Preview"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 border border-[#D7E2EA]/10 shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
