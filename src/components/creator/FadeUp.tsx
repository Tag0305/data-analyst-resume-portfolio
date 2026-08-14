import * as React from "react"

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay * 1000)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  )
}
