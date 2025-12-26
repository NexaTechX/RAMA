"use client"

import { useRef, useEffect, useState } from "react"
import { PERSONAL_RESERVE_FORM_URL, EVENT_ALLOCATION_FORM_URL, COMMERCIAL_RESALE_FORM_URL } from "@/lib/constants"

export function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handlePreOrderClick = (formType: "personal" | "event" | "commercial") => {
    let formUrl = PERSONAL_RESERVE_FORM_URL
    if (formType === "event") formUrl = EVENT_ALLOCATION_FORM_URL
    if (formType === "commercial") formUrl = COMMERCIAL_RESALE_FORM_URL
    window.open(formUrl, "_blank", "noopener,noreferrer")
  }

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
                Where RAMA Belongs
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* FOR PERSONAL USE */}
          <div
            className={`group relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl transition-opacity duration-500 ${
                hoveredIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative p-8 lg:p-10 border border-border/40 backdrop-blur-sm bg-background/50 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="relative space-y-5">
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-light mb-3">FOR PERSONAL USE</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-extralight mb-4">Home & Daily Ritual</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed font-light">
                  Your morning routine. Your focused work desk. Your gym bag. Your weekend refuge. RAMA transforms the simple, essential act of drinking water into a reaffirmation of living well.
                </p>
                <div className="space-y-2 pt-3 text-xs text-muted-foreground/70">
                  <p>• Personal home use</p>
                  <p>• Office & workspace</p>
                  <p>• Daily carry</p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => handlePreOrderClick("personal")}
                    className="group/btn relative w-full px-6 py-3 border border-border/50 backdrop-blur-sm text-[10px] tracking-[0.3em] uppercase font-light hover:border-foreground/40 hover:bg-muted/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative">PRE-ORDER FOR HOME</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOR EVENTS & HOSPITALITY */}
          <div
            className={`group relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl transition-opacity duration-500 ${
                hoveredIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative p-8 lg:p-10 border border-border/40 backdrop-blur-sm bg-background/50 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="relative space-y-5">
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-light mb-3">EVENTS & HOSPITALITY</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-extralight mb-4">Curated Occasions</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed font-light">
                  Weddings, corporate events, intimate dinners, product launches. RAMA becomes part of your narrative—a seamless, elegant element that speaks to your discernment without uttering a word.
                </p>
                <div className="space-y-2 pt-3 text-xs text-muted-foreground/70">
                  <p>• Weddings & celebrations</p>
                  <p>• Hotels & hospitality</p>
                  <p>• Airports & lounges</p>
                  <p>• Corporate events</p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => handlePreOrderClick("event")}
                    className="group/btn relative w-full px-6 py-3 border border-border/50 backdrop-blur-sm text-[10px] tracking-[0.3em] uppercase font-light hover:border-foreground/40 hover:bg-muted/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative">RESERVE FOR EVENT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOR RETAIL & RESALE */}
          <div
            className={`group relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "600ms" }}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl transition-opacity duration-500 ${
                hoveredIndex === 2 ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative p-8 lg:p-10 border border-border/40 backdrop-blur-sm bg-background/50 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="relative space-y-5">
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-light mb-3">RETAIL & RESALE</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-extralight mb-4">Commercial Partners</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed font-light">
                  Elevate your retail offering with RAMA. From gyms to boutiques, airports to hotels, offer your customers a premium hydration experience that aligns with quality and sustainability.
                </p>
                <div className="space-y-2 pt-3 text-xs text-muted-foreground/70">
                  <p>• Gyms & fitness centers</p>
                  <p>• Retail stores & boutiques</p>
                  <p>• Hotels & resorts</p>
                  <p>• Airports & transit hubs</p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => handlePreOrderClick("commercial")}
                    className="group/btn relative w-full px-6 py-3 border border-border/50 backdrop-blur-sm text-[10px] tracking-[0.3em] uppercase font-light hover:border-foreground/40 hover:bg-muted/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative">INQUIRE FOR RESALE</span>
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
