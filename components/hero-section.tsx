"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [opacity, setOpacity] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollY / 600)
      setOpacity(newOpacity)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/Shinaayomi holding RAMA Can.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center max-w-4xl px-6 pointer-events-none" style={{ opacity }}>
        <p className="text-xs tracking-[0.4em] uppercase text-white/80 mb-6">Luxury Canned Water</p>
        <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight tracking-tight text-balance text-white">
          For Refined Moments
        </h1>
        <p className="mt-8 text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
          RAMA is not about quenching thirst. It is about presence.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <button className="px-8 py-4 bg-white text-black text-xs tracking-widest uppercase hover:bg-white/90 transition-all">
            Request a Pre-Order
          </button>
          <a
            href="#experience"
            className="px-8 py-4 border border-white/50 text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-all"
          >
            Experience the Can
          </a>
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
