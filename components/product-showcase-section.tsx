"use client"

import { useRef, useEffect, useState } from "react"

export function ProductShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl w-full space-y-32">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">The Product</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-extralight">
            Elements of{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              RAMA
            </span>
          </h2>
        </div>

        {/* Pure Alpine Spring Water Section */}
        <div className="space-y-8">
          <div
            className={`text-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl md:text-5xl font-serif font-extralight mb-6">
              Pure Alpine Spring Water
            </h3>
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
              <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">The Crisp, Neutral Canvas</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
            </div>
          </div>
          <div
            className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-light text-center">
              Sourced from protected alpine springs, our water is naturally filtered over decades through mineral-rich geology. The result is a clean, neutral profile with a crisp finish—a palate that complements, never competes. It is the perfect foundation, whether you're savoring it alone or pairing it with the finest cuisine.
            </p>
          </div>
        </div>

        {/* The Canvas Section */}
        <div className="space-y-8">
          <div
            className={`text-center transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl md:text-5xl font-serif font-extralight mb-6">
              The Canvas
            </h3>
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
              <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">Infinitely Recyclable. Perfectly Balanced.</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
            </div>
          </div>
          <div
            className={`max-w-3xl mx-auto space-y-6 transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-light text-center">
              Our 330ml premium aluminum can is a study in intentionality. We chose aluminum not for trends, but for truth: it is completely inert, protecting the water's taste from light and plastic leaching, and it is the world's most recyclable material. The matte finish, satisfying pull-tab, and chilled weight are all calibrated for a single purpose—to make the act of drinking water feel like a considered choice.
            </p>
            <div className="pt-8 space-y-4">
              <p className="text-base font-light text-foreground/90 text-center mb-6">Why The Can?</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border border-border/30 backdrop-blur-sm bg-background/30">
                  <p className="text-sm font-light text-foreground/90 mb-2">Superior Protection</p>
                  <p className="text-xs text-muted-foreground/70">Blocks all light, prevents flavor transfer, maintains perfect temperature.</p>
                </div>
                <div className="p-6 border border-border/30 backdrop-blur-sm bg-background/30">
                  <p className="text-sm font-light text-foreground/90 mb-2">True Sustainability</p>
                  <p className="text-xs text-muted-foreground/70">Can be recycled infinitely without quality loss.</p>
                </div>
                <div className="p-6 border border-border/30 backdrop-blur-sm bg-background/30">
                  <p className="text-sm font-light text-foreground/90 mb-2">Tactile Experience</p>
                  <p className="text-xs text-muted-foreground/70">The weight, the chill, the sound—every sensory detail is designed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

