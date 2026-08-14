import * as React from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = React.useState(0)
  const [fadeOut, setFadeOut] = React.useState(false)

  React.useEffect(() => {
    // Skip loader on subsequent page visits this session
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
          setTimeout(() => { onComplete() }, 500)
          return 100
        }
        return prev + 10
      })
    }, 40)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAF9F6" }}
    >
      <div className="flex flex-col items-center space-y-6 max-w-xs text-center px-4">
        {/* Gold initials badge */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.35)"
          }}
        >
          <span
            className="font-serif italic text-xl font-bold"
            style={{ color: "#C9A84C" }}
          >
            RT
          </span>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <h2
            className="font-serif text-sm font-bold tracking-widest uppercase"
            style={{ color: "#1a1a1a" }}
          >
            Ronanki Tagore
          </h2>
          <p
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: "#888" }}
          >
            Data Analyst & AI Evaluation Developer
          </p>
        </div>

        {/* Gold progress bar */}
        <div className="w-48 space-y-2">
          <div
            className="h-0.5 w-full rounded-full overflow-hidden"
            style={{ background: "rgba(201,168,76,0.20)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-150 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #C9A84C, #9A7A2A)"
              }}
            />
          </div>
          <div
            className="flex justify-between items-center font-mono text-xs"
            style={{ color: "#888" }}
          >
            <span>Loading...</span>
            <span style={{ color: "#C9A84C", fontWeight: 700 }}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
