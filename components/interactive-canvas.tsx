"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, ContactShadows, Preload } from "@react-three/drei"
import { RamaCan } from "./rama-can"

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <RamaCan interactive />

      <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={5} blur={2.5} />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        zoomSpeed={0.5}
        makeDefault
      />

      <Environment preset="studio" />
      <Preload all />
    </>
  )
}

export function InteractiveCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ 
        background: "transparent",
        touchAction: "pan-y pinch-zoom"
      }}
      onPointerMissed={() => {
        // Allow scrolling when not directly interacting with the 3D object
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
