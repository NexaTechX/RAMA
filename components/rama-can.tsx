"use client"

import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

export function RamaCan({ interactive = false }: { interactive?: boolean }) {
  const canRef = useRef<THREE.Group>(null)

  const texture = useLoader(THREE.TextureLoader, "/images/rama-20thin.png")

  useFrame(() => {
    if (canRef.current && !interactive) {
      canRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={canRef} scale={1.2}>
      {/* Main can body with texture */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 2.4, 64]} />
        <meshStandardMaterial map={texture} metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Top dome/rim */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.45, 0.55, 0.15, 64]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Top face */}
      <mesh position={[0, 1.33, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.45, 64]} />
        <meshStandardMaterial color="#c8c8c8" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Pull tab ring */}
      <mesh position={[0, 1.34, 0.12]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.04, 0.08, 32]} />
        <meshStandardMaterial color="#a0a0a0" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Pull tab lever */}
      <mesh position={[0, 1.34, 0.18]} rotation={[-Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.02, 0.08, 8, 16]} />
        <meshStandardMaterial color="#b0b0b0" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Bottom rim */}
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[0.53, 0.53, 0.1, 64]} />
        <meshStandardMaterial color="#a8a8a8" metalness={0.85} roughness={0.2} />
      </mesh>
    </group>
  )
}
