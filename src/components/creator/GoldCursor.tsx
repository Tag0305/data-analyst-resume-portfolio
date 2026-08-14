import * as React from "react"

export function GoldCursor() {
  const dotRef = React.useRef<HTMLDivElement>(null)
  const ringRef = React.useRef<HTMLDivElement>(null)
  const ringPos = React.useRef({ x: 0, y: 0 })
  const mousePos = React.useRef({ x: 0, y: 0 })
  const rafId = React.useRef<number>(0)

  React.useEffect(() => {
    const isMobile = () => window.innerWidth < 900
    if (isMobile()) return

    const moveDot = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px"
        dotRef.current.style.top = e.clientY + "px"
      }
    }

    const animateRing = () => {
      const lerp = 0.12
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px"
        ringRef.current.style.top = ringPos.current.y + "px"
      }
      rafId.current = requestAnimationFrame(animateRing)
    }

    const onEnter = () => ringRef.current?.classList.add("expanded")
    const onLeave = () => ringRef.current?.classList.remove("expanded")

    document.addEventListener("mousemove", moveDot)
    rafId.current = requestAnimationFrame(animateRing)

    const interactables = document.querySelectorAll(
      "a, button, [role='button'], .project-row, .exp-tab-item, .contact-card, .nav-link, .expertise-card"
    )
    interactables.forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      document.removeEventListener("mousemove", moveDot)
      cancelAnimationFrame(rafId.current)
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="gold-cursor-dot" />
      <div ref={ringRef} className="gold-cursor-ring" />
    </>
  )
}
