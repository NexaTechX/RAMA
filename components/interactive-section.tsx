"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export function InteractiveSection() {
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
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, hsl(var(--secondary) / 0.3) 0%, hsl(var(--background)) 50%, hsl(var(--secondary) / 0.2) 100%)`,
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-muted/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`space-y-8 transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-border" />
              <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">
                Designed to Be Seen
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-border" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.2]">
              Experience the Form
            </h2>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground/90 font-light leading-relaxed">
                Every detail of the RAMA can speaks to{" "}
                <span className="text-foreground font-normal">intentional design</span>.
              </p>

              <div className="space-y-4 pl-6 border-l-2 border-border/30">
                {[
                  { label: "Premium Aluminum", detail: "Sleek, durable, infinitely recyclable" },
                  { label: "Minimalist Aesthetic", detail: "Clean lines that complement any setting" },
                  { label: "Ergonomic Design", detail: "Perfect weight and balance in hand" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <p className="text-lg font-light text-foreground/90">{item.label}</p>
                    <p className="text-sm text-muted-foreground/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div
              className={`mt-12 inline-block relative px-10 py-6 group cursor-default transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="absolute inset-0 border border-border/30 group-hover:border-foreground/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <p className="text-xl md:text-2xl font-serif italic text-muted-foreground/90 relative">
                Luxury lives in what is{" "}
                <span className="text-foreground font-normal not-italic">not</span> added.
              </p>
            </div>
          </div>

          {/* Right: Product Image */}
          <div
            className={`relative transition-all duration-1200 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-square">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-foreground/20 -translate-x-4 -translate-y-4 pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-foreground/20 translate-x-4 -translate-y-4 pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-foreground/20 -translate-x-4 translate-y-4 pointer-events-none z-10" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-foreground/20 translate-x-4 translate-y-4 pointer-events-none z-10" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

              {/* Image Container */}
              <div className="relative w-full h-full backdrop-blur-sm bg-background/5 border border-border/20 rounded-sm overflow-hidden shadow-2xl group">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/Shinaayomi Rama.jpeg"
                    alt="RAMA Premium Aluminum Can - Shinaayomi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-12">
                  <div className="text-center">
                    <p className="text-lg text-foreground/90 font-light tracking-[0.3em] uppercase mb-1">RAMA</p>
                    <p className="text-sm text-muted-foreground font-light">Pure Alpine Spring Water</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
