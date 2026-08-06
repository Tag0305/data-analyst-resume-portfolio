import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  })

  const words = text.split(" ")

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wIdx) => {
        const chars = word.split("")
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {chars.map((char, cIdx) => {
              const charGlobalIndex = words.slice(0, wIdx).join("").length + cIdx
              const totalChars = text.replace(/\s+/g, "").length
              const start = charGlobalIndex / totalChars
              const end = start + 1 / totalChars

              // Character opacity transforms from 0.2 to 1 based on scroll progress
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

              return (
                <motion.span key={cIdx} style={{ opacity }} className="inline-block">
                  {char}
                </motion.span>
              )
            })}
          </span>
        )
      })}
    </p>
  )
}
