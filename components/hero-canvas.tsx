"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, Preload } from "@react-three/drei"
import { RamaCan } from "./rama-can"

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.4} />
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.25}>
        <RamaCan />
      </Float>
      <Environment preset="studio" />
      <Preload all />
    </>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
      <meshStandardMaterial color="#e0e0e0" />
    </mesh>
  )
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
