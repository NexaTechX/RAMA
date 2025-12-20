"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const features = [
  { value: "100%", label: "Purified", sublabel: "Spring Water", icon: "💧" },
  { value: "0g", label: "Zero", sublabel: "Plastic", icon: "♻️" },
  { value: "330ml", label: "Premium", sublabel: "Aluminum", icon: "✦" },
  { value: "100%", label: "Infinitely", sublabel: "Recyclable", icon: "🌿" },
]

export function ProductShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

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

      <div className="relative max-w-7xl w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <p className="text-[11px] tracking-[0.45em] uppercase text-muted-foreground font-light">The Product</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-extralight">
            Designed for{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              distinction
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Product Display */}
          <div
            className={`relative transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-border/20 rounded-sm" />
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-foreground/20 -translate-x-4 -translate-y-4" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-foreground/20 translate-x-4 -translate-y-4" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-foreground/20 -translate-x-4 translate-y-4" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-foreground/20 translate-x-4 translate-y-4" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl" />

              {/* Product Image */}
              <div className="relative w-full h-full flex items-center justify-center p-12">
                <div className="relative w-full h-full group">
                  <Image
                    src="/images/rama-20thin.png"
                    alt="RAMA Premium Aluminum Canned Water - 330ml luxury purified drinking water in minimalist aluminum can, plastic-free and infinitely recyclable"
                    fill
                    className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    priority
                    itemProp="image"
                  />
                  {/* Floating animation hint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <span className="text-xs text-muted-foreground tracking-wider">Premium Design</span>
                  </div>
                </div>
              </div>

              {/* Product label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 bg-background border border-border/50 backdrop-blur-sm">
                <p className="text-sm tracking-[0.3em] uppercase font-light">330ml Aluminum Can</p>
              </div>
            </div>
          </div>

          {/* Right: Features & CTA */}
          <div
            className={`space-y-8 transition-all duration-1200 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl transition-opacity duration-500 ${
                      hoveredFeature === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Feature Card */}
                  <div className="relative p-8 border border-border/40 backdrop-blur-sm bg-background/50 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group-hover:scale-105 overflow-hidden">
                    {/* Animated gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="relative space-y-1">
                      <p className="text-3xl md:text-4xl font-serif font-light text-foreground/90">
                        {feature.value}
                      </p>
                      <p className="text-sm tracking-[0.2em] uppercase font-light text-muted-foreground">
                        {feature.label}
                      </p>
                      <p className="text-xs text-muted-foreground/70">{feature.sublabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div
              className={`p-8 border border-border/30 backdrop-blur-sm bg-background/30 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg font-light text-muted-foreground/90 leading-relaxed mb-4">
                Each RAMA can is crafted from{" "}
                <span className="text-foreground font-normal">premium aluminum</span>, infinitely recyclable and
                designed to complement refined environments.
              </p>
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>Sleek Design</span>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>Sustainable Choice</span>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group relative flex-1 px-10 py-5 bg-foreground text-background text-[11px] tracking-[0.3em] uppercase font-light overflow-hidden hover:shadow-2xl hover:shadow-black/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Shop RAMA</span>
              </button>

              <button className="group relative flex-1 px-10 py-5 border border-border/50 backdrop-blur-sm text-[11px] tracking-[0.3em] uppercase font-light hover:border-foreground/40 hover:bg-muted/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

