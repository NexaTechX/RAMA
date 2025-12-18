"use client"

import { useRef, useEffect, useState } from "react"

const philosophyPoints = [
  { text: "Event-driven pre-orders", detail: "Precision over speculation" },
  { text: "No excess production", detail: "Intentional volume" },
  { text: "Upfront confirmation before production", detail: "Commitment first" },
  { text: "High-margin, low-volume by design", detail: "Quality, not quantity" },
]

export function PhilosophySection() {
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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-foreground text-background"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-background to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-background rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl w-full">
        {/* Header */}
        <div className="mb-20">
          <div
            className={`inline-flex items-center gap-4 mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-1 h-1 rounded-full bg-background/40" />
            <p className="text-[11px] tracking-[0.45em] uppercase text-background/60 font-light">How RAMA Operates</p>
            <div className="h-px w-20 bg-gradient-to-r from-background/40 to-transparent" />
          </div>

          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.25] max-w-4xl transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            We do not produce in excess.
            <br />
            <span className="text-background/70">We do not chase volume.</span>
          </h2>
        </div>

        {/* Philosophy points grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {philosophyPoints.map((point, index) => (
            <div
              key={point.text}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-background/5 blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Card */}
              <div className="relative p-8 border border-background/20 backdrop-blur-sm hover:border-background/40 hover:bg-background/5 transition-all duration-500 overflow-hidden group-hover:translate-x-2">
                {/* Animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                {/* Number indicator */}
                <div className="absolute top-4 right-6 text-5xl font-serif text-background/10 font-light group-hover:text-background/20 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-2 h-2 rounded-full bg-background/40 group-hover:bg-background/70 group-hover:scale-125 transition-all duration-500" />
                    <div className="h-px flex-1 bg-gradient-to-r from-background/20 to-transparent" />
                  </div>
                  <p className="text-xl md:text-2xl text-background/90 font-light mb-2 leading-tight">
                    {point.text}
                  </p>
                  <p className="text-sm text-background/50 font-light italic group-hover:text-background/70 transition-colors duration-500">
                    {point.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className={`text-center transition-all duration-1200 delay-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          <div className="inline-flex flex-col items-center gap-6">
            <div className="w-px h-20 bg-gradient-to-b from-background/20 via-background/40 to-transparent" />
            <div className="relative inline-block px-16 py-8 group cursor-default">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-background/20 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-background/20 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-background/20 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-background/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

              <p className="text-3xl md:text-4xl font-serif italic text-background/80 font-light tracking-wide relative">
                Intentional in every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
