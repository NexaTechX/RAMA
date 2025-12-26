"use client"

import { useState } from "react"

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = ["Privacy", "Terms", "Contact"]

  return (
    <footer className="relative border-t border-border/50 backdrop-blur-sm overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-muted/10" />

      {/* Decorative top line animation */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          {/* Brand section */}
          <div className="text-center md:text-left group">
            <div className="inline-flex items-center gap-3 mb-4 cursor-default">
              <span className="text-2xl font-serif tracking-[0.35em] font-light group-hover:tracking-[0.4em] transition-all duration-500">
                RAMA
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:scale-150 transition-transform duration-500" />
            </div>
            <p className="text-sm text-muted-foreground/80 font-light leading-relaxed max-w-xs">
              Water, Designed for Presence.
            </p>
            <div className="mt-4 h-px w-32 bg-gradient-to-r from-border to-transparent mx-auto md:mx-0" />
          </div>

          {/* Values section */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/80 font-light">
              <div className="group cursor-default">
                <span className="group-hover:text-foreground transition-colors duration-500">Plastic-Free</span>
                <div className="h-px w-0 bg-foreground group-hover:w-full transition-all duration-500" />
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <div className="group cursor-default">
                <span className="group-hover:text-foreground transition-colors duration-500">Minimal</span>
                <div className="h-px w-0 bg-foreground group-hover:w-full transition-all duration-500" />
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <div className="group cursor-default">
                <span className="group-hover:text-foreground transition-colors duration-500">Intentional</span>
                <div className="h-px w-0 bg-foreground group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Decorative element */}
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-muted-foreground/20 hover:bg-foreground/40 transition-colors duration-300 cursor-default" />
              <div className="w-1 h-1 rounded-full bg-muted-foreground/20 hover:bg-foreground/40 transition-colors duration-300 cursor-default" />
              <div className="w-1 h-1 rounded-full bg-muted-foreground/20 hover:bg-foreground/40 transition-colors duration-300 cursor-default" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-background border border-border/50" />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground/70">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="font-light tracking-wider">© 2025 RAMA Water. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@rama-water.com" className="relative tracking-wider font-light hover:text-foreground transition-colors duration-500">
                hello@rama-water.com
              </a>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <a href="https://instagram.com/ramawater" target="_blank" rel="noopener noreferrer" className="relative tracking-wider font-light hover:text-foreground transition-colors duration-500">
                @ramawater
              </a>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="relative tracking-wider font-light hover:text-foreground transition-colors duration-500"
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="relative z-10">{link}</span>
                <div
                  className={`absolute bottom-0 left-0 h-px bg-foreground transition-all duration-500 ${
                    hoveredLink === link ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Made with care indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 font-light">
            <div className="w-6 h-px bg-gradient-to-r from-transparent to-border/30" />
            <span>Crafted with intention</span>
            <div className="w-6 h-px bg-gradient-to-l from-transparent to-border/30" />
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
    </footer>
  )
}
