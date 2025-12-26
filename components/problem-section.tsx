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

        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.2] mb-12 transition-all duration-1200 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          Between the Forgettable and the Performative
        </h2>

        <div
          className={`max-w-3xl mx-auto space-y-6 transition-all duration-1200 delay-400 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-light">
            For too long, the choice has been binary: the generic plastic bottle that undermines your taste, or the over-designed "luxury" water that shouts its own name. One is an afterthought. The other, a pretense. Both fail the moment.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-light">
            In boardrooms and living rooms, at weddings and in workout bags, the vessel for our most essential resource should not be an apology or a declaration—it should be a canvas.
          </p>
        </div>
      </div>
    </section>
  )
}
