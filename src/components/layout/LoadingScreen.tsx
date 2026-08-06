import * as React from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = React.useState(0)
  const [fadeOut, setFadeOut] = React.useState(false)

  React.useEffect(() => {
    // Check if user already saw loader this session
    const hasLoaded = sessionStorage.getItem("rt_loaded")
    if (hasLoaded) {
      onComplete()
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setFadeOut(true)
          sessionStorage.setItem("rt_loaded", "true")
          setTimeout(() => {
            onComplete()
          }, 400)
          return 100
        }
        return prev + 10
      })
    }, 40)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6 max-w-xs text-center px-4">
        {/* Brand Initial Badge */}
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/10 animate-pulse">
          <span className="text-xl font-black text-emerald-400 font-mono">RT</span>
        </div>

        {/* Title & Status */}
        <div className="space-y-1">
          <h2 className="text-sm font-bold tracking-widest uppercase text-foreground">Ronanki Tagore</h2>
          <p className="text-[10px] font-mono text-muted-foreground uppercase">Data Analytics • 3D Workspace</p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 space-y-2">
          <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground">
            <span>Loading assets...</span>
            <span className="text-emerald-400 font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
