"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { LoadingScreen } from "@/components/loading-screen"
import { Navigation } from "@/components/navigation"
import { ProblemSection } from "@/components/problem-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { AudienceSection } from "@/components/audience-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { Footer } from "@/components/footer"

const HeroSection = dynamic(() => import("@/components/hero-section").then((mod) => ({ default: mod.HeroSection })), {
  ssr: false,
})
const SolutionSection = dynamic(
  () => import("@/components/solution-section").then((mod) => ({ default: mod.SolutionSection })),
  { ssr: false },
)
const InteractiveSection = dynamic(
  () => import("@/components/interactive-section").then((mod) => ({ default: mod.InteractiveSection })),
  { ssr: false },
)
const ClosingSection = dynamic(
  () => import("@/components/closing-section").then((mod) => ({ default: mod.ClosingSection })),
  { ssr: false },
)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return <LoadingScreen isVisible={true} />
  }

  return (
    <main className="bg-background text-foreground">
      <LoadingScreen isVisible={isLoading} />
      <div className={`transition-opacity duration-700 ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Navigation />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductShowcaseSection />
        <InteractiveSection />
        <AudienceSection />
        <PhilosophySection />
        <ClosingSection />
        <Footer />
      </div>
    </main>
  )
}
