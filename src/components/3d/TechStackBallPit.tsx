import * as React from "react"
import * as THREE from "three"

const techSkills = [
  { name: "Python", color: 0x38bdf8 },
  { name: "SQL", color: 0x10b981 },
  { name: "PostgreSQL", color: 0x6366f1 },
  { name: "Pandas", color: 0xf59e0b },
  { name: "Scikit-Learn", color: 0xec4899 },
  { name: "Power BI", color: 0xeab308 },
  { name: "Tableau", color: 0x06b6d4 },
  { name: "Excel", color: 0x22c55e },
  { name: "Git", color: 0xef4444 },
  { name: "pgAdmin", color: 0x8b5cf6 },
  { name: "SQLite", color: 0x14b8a6 },
  { name: "Seaborn", color: 0x3b82f6 }
]

function createTextTexture(text: string) {
  const canvas = document.createElement("canvas")
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  // Background circle fill
  ctx.fillStyle = "#18181b"
  ctx.beginPath()
  ctx.arc(128, 128, 120, 0, Math.PI * 2)
  ctx.fill()

  // Border ring
  ctx.strokeStyle = "#10b981"
  ctx.lineWidth = 8
  ctx.stroke()

  // Text
  ctx.fillStyle = "#ffffff"
  ctx.font = "bold 28px -apple-system, sans-serif"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(text, 128, 128)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function TechStackBallPit() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. Scene setup
    const scene = new THREE.Scene()

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 8.5

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 4. Create Spheres with 3D Orbital Physics
    const sphereGeometry = new THREE.SphereGeometry(0.65, 32, 32)
    const spheres: { mesh: THREE.Mesh; velocity: THREE.Vector3; initialPos: THREE.Vector3 }[] = []

    techSkills.forEach((tech, i) => {
      const texture = createTextTexture(tech.name)
      const material = new THREE.MeshStandardMaterial({
        map: texture || undefined,
        color: tech.color,
        roughness: 0.3,
        metalness: 0.5,
        bumpScale: 0.05
      })

      const mesh = new THREE.Mesh(sphereGeometry, material)
      
      // Distribute spheres randomly in a 3D volume
      const phi = Math.acos(-1 + (2 * i) / techSkills.length)
      const theta = Math.sqrt(techSkills.length * Math.PI) * phi
      const radius = 3.2

      mesh.position.x = radius * Math.cos(theta) * Math.sin(phi)
      mesh.position.y = radius * Math.sin(theta) * Math.sin(phi)
      mesh.position.z = (Math.random() - 0.5) * 2

      scene.add(mesh)

      spheres.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
        initialPos: mesh.position.clone()
      })
    })

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0x10b981, 2)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)

    // 6. Mouse Rotation / Drag Controls
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      }

      scene.rotation.y += deltaMove.x * 0.008
      scene.rotation.x += deltaMove.y * 0.008

      previousMousePosition = { x: e.clientX, y: e.clientY }
    }

    const onMouseUp = () => {
      isDragging = false
    }

    const domEl = renderer.domElement
    domEl.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    // 7. Physics Animation Loop
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Auto rotation when not dragging
      if (!isDragging) {
        scene.rotation.y += 0.003
      }

      // Sphere floating physics
      spheres.forEach((s) => {
        s.mesh.position.add(s.velocity)
        s.mesh.rotation.y += 0.01

        // Bounce back if drifting too far
        if (s.mesh.position.distanceTo(s.initialPos) > 1.2) {
          s.velocity.negate()
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      domEl.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      sphereGeometry.dispose()
    }
  }, [])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
        <span className="font-semibold text-foreground flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Interactive 3D Skill Sphere Orbit (Drag mouse to rotate 360°)
        </span>
        <span className="font-mono text-[10px] text-accent border border-accent/20 px-2 py-0.5 rounded-full bg-accent/5">WebGL 3D Physics</span>
      </div>
      <div 
        ref={containerRef} 
        className="w-full h-[360px] sm:h-[420px] rounded-xl border border-border/80 bg-black/40 backdrop-blur-md relative flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden shadow-xl"
      />
    </div>
  )
}
