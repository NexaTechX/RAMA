"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { isScrolled } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out will-change-[background-color,backdrop-filter,border-color,box-shadow,padding]",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-black/5 py-4"
          : "bg-gradient-to-b from-black/50 to-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span
            className={cn(
              "text-2xl font-serif tracking-[0.35em] font-light transition-all duration-500",
              isScrolled ? "text-foreground" : "text-white",
              "group-hover:tracking-[0.4em] group-hover:opacity-80",
            )}
          >
            RAMA
          </span>
          <div
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-500",
              isScrolled ? "bg-foreground/60" : "bg-white/60",
              "group-hover:scale-150",
            )}
          />
        </div>

        <div className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.2em] uppercase font-light">
          {["Experience", "Philosophy", "Contact"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "relative transition-all duration-500 hover:tracking-[0.25em]",
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
                "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:transition-all after:duration-500",
                isScrolled ? "after:bg-foreground" : "after:bg-white",
                "hover:after:w-full",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className={cn(
            "group relative px-8 py-3 text-[10px] tracking-[0.25em] uppercase font-light overflow-hidden",
            "transition-all duration-500 hover:tracking-[0.3em] hover:px-10",
            isScrolled
              ? "bg-foreground text-background hover:bg-foreground/90"
              : "bg-white/90 text-black hover:bg-white backdrop-blur-sm",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
            "before:translate-x-[-200%] before:transition-transform before:duration-700",
            "hover:before:translate-x-[200%]",
          )}
        >
          Pre-Order
        </button>
      </div>
    </nav>
  )
}
