import * as React from "react"
import * as THREE from "three"

export function Hero3DCanvas() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. Scene setup
    const scene = new THREE.Scene()

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 4. Create 3D Objects (Geometric Data Mesh & Particles)
    // Core Mesh: TorusKnot
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 100, 16)
    const material = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Emerald green accent
      wireframe: true,
      emissive: 0x064e3b,
      roughness: 0.2,
      metalness: 0.8
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Secondary Ring Mesh
    const ringGeo = new THREE.RingGeometry(2.0, 2.05, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.rotation.x = Math.PI / 3
    scene.add(ringMesh)

    // Floating 3D Starfield / Data Particles
    const particlesCount = 300
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
    }
    const particlesGeo = new THREE.BufferGeometry()
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x6ee7b7,
      transparent: true,
      opacity: 0.7
    })
    const particleSystem = new THREE.Points(particlesGeo, particlesMat)
    scene.add(particleSystem)

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x10b981, 3, 10)
    pointLight.position.set(2, 3, 4)
    scene.add(pointLight)

    // 6. Interactive Mouse Movement
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / container.clientWidth - 0.5) * 2
      mouseY = ((event.clientY - rect.top) / container.clientHeight - 0.5) * 2
    }

    window.addEventListener("mousemove", handleMouseMove)

    // 7. Animation Loop
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth camera easing
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      mesh.rotation.x += 0.006
      mesh.rotation.y += 0.008

      ringMesh.rotation.z -= 0.004

      particleSystem.rotation.y += 0.001

      // Subtle 3D tilt towards mouse
      scene.rotation.y = targetX * 0.5
      scene.rotation.x = -targetY * 0.5

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
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      particlesGeo.dispose()
      particlesMat.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[320px] sm:h-[400px] relative flex items-center justify-center cursor-grab active:cursor-grabbing" 
    />
  )
}
