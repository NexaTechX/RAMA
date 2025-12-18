"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, Preload } from "@react-three/drei"
import { RamaCan } from "./rama-can"

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[-3, 0, 0]} scale={0.6}>
          <RamaCan />
        </group>
      </Float>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[3, 0, 0]} scale={0.6}>
          <RamaCan />
        </group>
      </Float>
      <Environment preset="studio" />
      <Preload all />
    </>
  )
}

export function SolutionCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
