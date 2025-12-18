"use client"

import { useRef, useEffect, useState } from "react"

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

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
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
        setScrollY(scrollProgress)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--background)) 50%, hsl(var(--muted) / 0.2) 100%)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: `translate(${scrollY * 50}px, ${scrollY * -30}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: `translate(${scrollY * -40}px, ${scrollY * 40}px)` }}
        />
      </div>

      <div className="relative max-w-4xl text-center">
        <p
          className={`text-[11px] tracking-[0.45em] uppercase text-muted-foreground mb-10 font-light transition-all duration-1200 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          The Quiet Problem
        </p>

        <div className="space-y-6">
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.2] transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            Events spend heavily on
          </h2>
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.2] bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent transition-all duration-1200 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            lighting, florals, tableware
          </h2>
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.2] transition-all duration-1200 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            and ambience.
          </h2>
        </div>

        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
          <p className="text-xl md:text-2xl text-muted-foreground/90 font-light italic">
            Yet one object is often overlooked
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* Animated divider */}
        <div className="relative my-20">
          <div
            className={`w-px h-28 bg-gradient-to-b from-transparent via-border to-transparent mx-auto transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground/20 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-foreground/30 animate-ping" />
          </div>
        </div>

        <p
          className={`text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1200 delay-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          Generic plastic bottled water sits on premium tables — visually loud, environmentally careless, and
          <span className="italic font-serif text-foreground/90"> out of place</span>.
        </p>

        <div
          className={`mt-16 inline-block px-12 py-6 border border-border/50 backdrop-blur-sm rounded-sm transition-all duration-1200 delay-1200 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0 scale-100" : "opacity-0 translate-y-12 blur-sm scale-95"
          }`}
        >
          <p className="text-2xl md:text-4xl font-serif italic text-foreground/90 font-light tracking-wide">
            The experience fractures.
          </p>
        </div>
      </div>
    </section>
  )
}
