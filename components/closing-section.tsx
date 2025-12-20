"use client"

import { useRef, useEffect, useState } from "react"
import dynamic from "next/dynamic"

const ClosingCanvas = dynamic(() => import("./closing-canvas").then((mod) => ({ default: mod.ClosingCanvas })), {
  ssr: false,
  loading: () => null,
})

export function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Enhanced 3D Canvas with spotlight and gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {mounted && isVisible && <ClosingCanvas />}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Decorative radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Header */}
        <div
          className={`inline-flex flex-col items-center gap-6 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
            <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">The Vision</p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-10">
          <h2
            className={`text-5xl md:text-7xl lg:text-8xl font-serif font-extralight leading-[1.2] mb-6 transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            RAMA is not
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text text-transparent">
              mass water.
            </span>
          </h2>

          <div
            className={`flex items-center justify-center gap-4 my-10 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <div className="w-2 h-2 rounded-full bg-foreground/30 relative">
              <div className="absolute inset-0 rounded-full bg-foreground/30 animate-ping" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>

          <div
            className={`max-w-2xl mx-auto transition-all duration-1200 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            <p className="text-3xl md:text-4xl font-serif font-light text-muted-foreground/90 mb-3">
              It is presence,
            </p>
            <p className="text-3xl md:text-4xl font-serif font-light text-muted-foreground/90 mb-3">
              simplicity,
            </p>
            <p className="text-3xl md:text-4xl font-serif font-light text-foreground">
              and intention.
            </p>
          </div>
        </div>

        {/* Call to action buttons */}
        <div
          className={`mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <button className="group relative px-12 py-5 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase font-light overflow-hidden hover:px-14 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Request a Pre-Order</span>
          </button>

          <button className="group relative px-12 py-5 border border-border/50 backdrop-blur-sm text-[10px] tracking-[0.3em] uppercase font-light hover:border-foreground/40 hover:bg-muted/20 hover:px-14 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Experience the Can</span>
          </button>
        </div>

        {/* Bottom decorative element */}
        <div
          className={`mt-24 transition-all duration-1200 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-gradient-to-b from-border/50 to-transparent" />
            <div className="text-xs text-muted-foreground/60 tracking-[0.2em] uppercase font-light">Scroll to explore</div>
          </div>
        </div>
      </div>
    </section>
  )
}
