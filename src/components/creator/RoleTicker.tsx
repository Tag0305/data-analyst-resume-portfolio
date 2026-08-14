import * as React from "react"

const roles = [
  "Data Analyst",
  "SQL Developer",
  "AI Evaluation Developer",
  "Benchmark Developer"
]

export function RoleTicker() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="role-ticker-wrap">
      {roles.map((role, i) => (
        <div
          key={role}
          className={`role-ticker-item${i === activeIndex ? " active" : ""}`}
        >
          {role}
        </div>
      ))}
    </div>
  )
}
