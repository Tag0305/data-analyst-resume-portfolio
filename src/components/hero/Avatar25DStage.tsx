import * as React from "react"
import { Database, TrendingUp, Code2, Brain } from "lucide-react"

export function Avatar25DStage() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [transform, setTransform] = React.useState({ rotateX: 0, rotateY: 0, mouseX: 0, mouseY: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((centerY - y) / centerY) * 12
    const rotateY = ((x - centerX) / centerX) * 12

    setTransform({
      rotateX,
      rotateY,
      mouseX: (x - centerX) / 15,
      mouseY: (y - centerY) / 15
    })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, mouseX: 0, mouseY: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] h-[520px] sm:h-[600px] flex items-center justify-center cursor-pointer select-none py-4"
      style={{ perspective: "1000px" }}
    >
      {/* Background Atmospheric Glow Ring */}
      <div 
        className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/10 blur-3xl pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate(${transform.mouseX * 0.5}px, ${transform.mouseY * 0.5}px)`
        }}
      />

      {/* Outer 2.5D Parallax Stage Container */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Floating Data Badge 1: SQL Query (Top Left) */}
        <div
          className="absolute -top-1 left-0 sm:-left-4 z-20 bg-background/90 backdrop-blur-md border border-emerald-500/30 shadow-xl p-3 rounded-xl font-mono text-[10px] sm:text-xs text-emerald-400 space-y-1 transition-transform duration-300"
          style={{
            transform: `translateZ(40px) translate(${transform.mouseX * -0.6}px, ${transform.mouseY * -0.6}px)`
          }}
        >
          <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground uppercase font-bold border-b border-border/40 pb-1">
            <Database className="h-3 w-3 text-emerald-400" />
            <span>PostgreSQL Query</span>
          </div>
          <div>SELECT cohort, churn_rate</div>
          <div className="text-white/80">FROM retention_model</div>
          <div className="text-emerald-300">WHERE repeat_rate &gt; 0.40;</div>
        </div>

        {/* Floating Data Badge 2: Churn Accuracy KPI (Top Right) */}
        <div
          className="absolute top-12 right-0 sm:-right-4 z-20 bg-background/90 backdrop-blur-md border border-teal-500/30 shadow-xl p-3 rounded-xl space-y-1 transition-transform duration-300"
          style={{
            transform: `translateZ(50px) translate(${transform.mouseX * 0.8}px, ${transform.mouseY * 0.8}px)`
          }}
        >
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground uppercase font-bold">
            <TrendingUp className="h-3.5 w-3.5 text-teal-400" />
            <span>Random Forest</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-teal-400">88.0% <span className="text-[10px] text-muted-foreground font-normal">Accuracy</span></div>
        </div>

        {/* Floating Data Badge 3: Python Script (Bottom Left) */}
        <div
          className="absolute bottom-16 left-0 sm:-left-6 z-20 bg-background/90 backdrop-blur-md border border-cyan-500/30 shadow-xl p-2.5 rounded-xl font-mono text-[10px] text-cyan-400 flex items-center gap-2 transition-transform duration-300"
          style={{
            transform: `translateZ(35px) translate(${transform.mouseX * -0.4}px, ${transform.mouseY * -0.4}px)`
          }}
        >
          <Code2 className="h-4 w-4 text-cyan-400 shrink-0" />
          <span>df.groupby('tier').mean()</span>
        </div>

        {/* Floating Data Badge 4: Business Intelligence (Bottom Right) */}
        <div
          className="absolute bottom-24 right-0 sm:-right-6 z-20 bg-background/90 backdrop-blur-md border border-emerald-500/30 shadow-xl p-2.5 rounded-xl text-xs text-foreground font-bold flex items-center gap-2 transition-transform duration-300"
          style={{
            transform: `translateZ(45px) translate(${transform.mouseX * 0.5}px, ${transform.mouseY * 0.5}px)`
          }}
        >
          <Brain className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>Power BI & Tableau</span>
        </div>

        {/* Main Transparent Character Avatar */}
        <div className="relative z-10 w-auto h-full max-h-[460px] sm:max-h-[540px] flex items-center justify-center animate-float">
          <img
            src="/avatar.png"
            alt="Ronanki Tagore - Full Body 3D Avatar"
            className="h-full w-auto object-contain drop-shadow-[0_20px_35px_rgba(16,185,129,0.25)] transition-all duration-300"
            style={{
              transform: "translateZ(20px)"
            }}
          />
        </div>

        {/* Floor Shadow Under Sneakers */}
        <div 
          className="absolute bottom-2 w-[180px] h-[16px] rounded-full bg-black/60 blur-md pointer-events-none"
          style={{
            transform: `scale(${1 - Math.abs(transform.mouseY) * 0.01})`
          }}
        />
      </div>

      {/* Float CSS Keyframe Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
