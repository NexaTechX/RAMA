"use client"

import { useEffect, useState } from "react"
import { useScrollOpacity } from "@/hooks/use-scroll"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const opacity = useScrollOpacity(600)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
          aria-label="RAMA luxury canned water product showcase video"
        >
          <source src="/video/Shinaayomi holding RAMA Can.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center max-w-4xl px-6 pointer-events-none" style={{ opacity }}>
        <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight tracking-tight text-balance text-white mb-4">
          RAMA
        </h1>
        <p className="text-xs tracking-[0.4em] uppercase text-white/80 mb-8">Luxury Canned Water for Refined Moments</p>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light" itemProp="description">
          Where design meets daily ritual. Where intention elevates every occasion.
        </p>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
          Be among the first to experience RAMA. Pre-order our limited inaugural release for your home, your carry, or your next curated event.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <button className="px-8 py-4 bg-white text-black text-xs tracking-widest uppercase hover:bg-white/90 transition-all">
            PRE-ORDER FOR MY HOME
          </button>
          <button className="px-8 py-4 border border-white/50 text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-all">
            PRE-ORDER FOR AN EVENT
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">Scroll</span>
        <div className="w-px h-12 bg-white/30 overflow-hidden">
          <div className="w-full h-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
