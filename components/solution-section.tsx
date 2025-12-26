"use client"

import { useRef, useEffect, useState } from "react"
import dynamic from "next/dynamic"

const SolutionCanvas = dynamic(() => import("./solution-canvas").then((mod) => ({ default: mod.SolutionCanvas })), {
  ssr: false,
  loading: () => null,
})

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    let ticking = false

    const updateProgress = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollY(scrollProgress)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const features = [
    { text: "Plastic-Free", icon: "○" },
    { text: "Minimal", icon: "△" },
    { text: "Intentional", icon: "□" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Enhanced 3D Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-15">
          {mounted && isVisible && <SolutionCanvas />}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-muted/30"
          style={{ opacity: 0.8 }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate3d(${scrollY * -30}px, ${scrollY * 20}px, 0)` }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate3d(${scrollY * 40}px, ${scrollY * -25}px, 0)` }}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <div
          className={`inline-block mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light mb-4">Our Answer</p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
        </div>

        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.3] mb-4 transition-all duration-1200 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          The Quiet Icon.
        </h2>
        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.3] bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text text-transparent transition-all duration-1200 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          The Intentional Choice.
        </h2>

        <div
          className={`mt-16 max-w-3xl mx-auto space-y-6 transition-all duration-1200 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed font-light">
            RAMA is engineered for presence. We return to the essence of water—pure, crisp, neutral—and present it through considered design. Our mission is to transform the act of hydration into a moment of quiet intention, whether you're savoring it alone at your desk or toasting with guests at your most important gathering.
          </p>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
            This is water, elevated to its rightful place.
          </p>
        </div>

        {/* Enhanced feature pills */}
        <div
          className={`mt-20 flex flex-wrap items-center justify-center gap-6 transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={feature.text}
              className="group relative"
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="flex items-center gap-4 px-8 py-4 border border-border/50 backdrop-blur-sm rounded-full hover:border-foreground/30 hover:bg-muted/20 transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-light group-hover:text-foreground transition-colors">
                  {feature.text}
                </span>
                <span className="text-muted-foreground/50 text-xs">{feature.icon}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
