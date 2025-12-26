"use client"

import { useRef, useEffect, useState } from "react"

const benefits = [
  { title: "GUARANTEED ALLOCATION", detail: "Secure cans from our numbered first edition, reserved in your name." },
  { title: "PRIORITY ACCESS", detail: "Be the first to receive RAMA and enjoy exclusive access to future releases." },
  { title: "DIRECT PARTNERSHIP", detail: "Founding Members receive direct communication with our team for seamless coordination." },
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

      <div className="relative max-w-6xl w-full">
        {/* Header */}
        <div className="mb-20 text-center">
          <div
            className={`inline-flex items-center gap-4 mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-1 h-1 rounded-full bg-background/40" />
            <p className="text-[11px] tracking-[0.45em] uppercase text-background/60 font-light">Join the Inaugural Release</p>
            <div className="h-px w-20 bg-gradient-to-r from-background/40 to-transparent" />
          </div>

          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-serif font-extralight leading-[1.25] max-w-4xl mx-auto mb-8 transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            Production by Intention.
            <br />
            <span className="text-background/70">Access by Invitation.</span>
          </h2>

          <div
            className={`max-w-3xl mx-auto transition-all duration-1200 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            <p className="text-lg md:text-xl text-background/80 leading-relaxed font-light">
              We do not believe in excess production. Our first run is limited, numbered, and available exclusively through pre-order. By securing your allocation now, you become a Founding Member—ensuring access from our inaugural batch and enabling our precise, zero-waste production model.
            </p>
          </div>
        </div>

        {/* Founding Member Benefits */}
        <div className="mb-16">
          <h3
            className={`text-2xl md:text-3xl font-serif font-light mb-12 text-center transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The Founding Member Benefits:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 bg-background/5 blur-xl transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="relative p-8 border border-background/20 backdrop-blur-sm hover:border-background/40 hover:bg-background/5 transition-all duration-500 overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl font-serif text-background/60 font-light">
                        {String(index + 1)}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-background/20 to-transparent" />
                    </div>
                    <p className="text-lg md:text-xl text-background/90 font-light mb-3 leading-tight">
                      {benefit.title}
                    </p>
                    <p className="text-sm text-background/60 font-light leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery & Timeline */}
        <div
          className={`text-center transition-all duration-1200 delay-1200 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          <div className="inline-block px-8 py-6 border border-background/20 backdrop-blur-sm">
            <p className="text-base text-background/90 font-light mb-2">
              <span className="font-normal">Delivery & Timeline:</span>
            </p>
            <p className="text-sm text-background/70 font-light">
              All Founding Pre-Orders are scheduled for delivery in <span className="text-background/90">Q4 2024 / Q1 2025</span>. Event orders are coordinated to arrive 4-6 weeks prior to your date.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
