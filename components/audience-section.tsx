"use client"

import { useRef, useEffect, useState } from "react"

export function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-border/30 to-transparent" />
      <div className="absolute bottom-20 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-border/30 to-transparent" />

      <div className="relative max-w-7xl w-full">
        <div className="text-center mb-20">
          <div
            className={`inline-flex flex-col items-center gap-4 mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
              <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">
                The Two Canvases of RAMA
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FOR THE DAILY RITUAL */}
          <div
            className={`group relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "300ms" }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl transition-opacity duration-500 ${
                hoveredIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative p-10 lg:p-12 border border-border/40 backdrop-blur-sm bg-background/50 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light mb-4">FOR THE DAILY RITUAL</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-extralight mb-6">The Essential, Perfected.</h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed font-light">
                  Your morning routine. Your focused work desk. Your gym bag. Your weekend refuge. RAMA transforms the simple, essential act of drinking water into a reaffirmation of living well. Its perfectly balanced weight and matte finish feel intentional in your hand—a silent commitment to choosing better in a world of clutter.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <p className="text-sm text-muted-foreground/80 font-light"><span className="text-foreground/90 font-normal">Sustained Purity:</span> Alpine-sourced water protected in light-proof, taste-preserving aluminum.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <p className="text-sm text-muted-foreground/80 font-light"><span className="text-foreground/90 font-normal">Designed for the Hand:</span> Ergonomics that make the everyday feel exceptional.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <p className="text-sm text-muted-foreground/80 font-light"><span className="text-foreground/90 font-normal">Conscious Curation:</span> The first choice in a life dedicated to intentional consumption.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button className="group/btn relative px-8 py-4 border border-border/50 backdrop-blur-sm text-[11px] tracking-[0.3em] uppercase font-light hover:border-foreground/40 hover:bg-muted/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative">PRE-ORDER A PERSONAL RESERVE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOR THE CURATED OCCASION */}
          <div
            className={`group relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "600ms" }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl transition-opacity duration-500 ${
                hoveredIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative p-10 lg:p-12 border border-border/40 backdrop-blur-sm bg-background/50 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light mb-4">FOR THE CURATED OCCASION</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-extralight mb-6">The Distinction, Guaranteed.</h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed font-light">
                  The wedding toast. The corporate gift. The intimate dinner. The product launch. Here, RAMA becomes part of your narrative—a seamless, elegant element that speaks to your discernment without uttering a word. It unifies the guest experience, elevating the moment while eliminating the visual noise of mismatched vessels.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <p className="text-sm text-muted-foreground/80 font-light"><span className="text-foreground/90 font-normal">Aesthetic Cohesion:</span> Minimalist design that complements any tablescape or brand aesthetic.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <p className="text-sm text-muted-foreground/80 font-light"><span className="text-foreground/90 font-normal">Zero-Waste Prestige:</span> Demonstrate commitment to sustainability without compromise.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <p className="text-sm text-muted-foreground/80 font-light"><span className="text-foreground/90 font-normal">Unified Experience:</span> Offer every guest the same impeccable standard of taste and presentation.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button className="group/btn relative px-8 py-4 border border-border/50 backdrop-blur-sm text-[11px] tracking-[0.3em] uppercase font-light hover:border-foreground/40 hover:bg-muted/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative">RESERVE FOR YOUR EVENT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
