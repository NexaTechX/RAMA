"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, ContactShadows, Preload } from "@react-three/drei"
import { RamaCan } from "./rama-can"

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <RamaCan />
      </Float>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={8} blur={2} />
      <Environment preset="studio" />
      <Preload all />
    </>
  )
}

export function ClosingCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      dpr={[1, 2]} // Limit pixel ratio for better performance
      performance={{ min: 0.5 }} // Lower quality when FPS drops
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
