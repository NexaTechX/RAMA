"use client"

import { useRef, useEffect, useState } from "react"

const audiences = [
  { title: "Weddings", description: "Intimate ceremonies and celebrations", icon: "✦" },
  { title: "Corporate Events", description: "Executive meetings and gatherings", icon: "◆" },
  { title: "Premium Lounges", description: "Hospitality and curated spaces", icon: "◇" },
  { title: "Brand Activations", description: "Curated experiences and launches", icon: "✧" },
]

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

      <div className="relative max-w-6xl w-full">
        <div className="text-center mb-24">
          <div
            className={`inline-flex flex-col items-center gap-4 mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
              <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">
                Where RAMA Belongs
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          </div>

          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.3] max-w-4xl mx-auto transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            Created for spaces where
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              details are noticed
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Card */}
              <div className="relative p-10 border border-border/40 backdrop-blur-sm bg-background/50 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5 overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                {/* Icon */}
                <div className="absolute top-8 right-8 text-3xl text-muted-foreground/20 group-hover:text-foreground/30 group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 group-hover:translate-x-2 transition-all duration-500">
                    {item.title}
                  </h3>
                  <div className="h-px w-12 bg-gradient-to-r from-border to-transparent mb-4 group-hover:w-20 transition-all duration-500" />
                  <p className="text-muted-foreground/80 text-sm md:text-base font-light leading-relaxed group-hover:text-muted-foreground transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          className={`mt-24 text-center transition-all duration-1200 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col items-center gap-6">
            <div className="w-px h-16 bg-gradient-to-b from-border/50 to-transparent" />
            <div className="inline-block px-8 py-3 border border-border/30 backdrop-blur-sm">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
                Starting in major urban centers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
