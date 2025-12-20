"use client"

import { useEffect, useState, useRef, ReactNode } from "react"

interface LazyCanvasProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
}

/**
 * Lazy loads canvas components only when they enter the viewport
 * Significantly improves initial page load performance
 */
export function LazyCanvas({ children, fallback = null, threshold = 0.1, rootMargin = "100px" }: LazyCanvasProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Only render after a small delay to avoid blocking the main thread
          requestAnimationFrame(() => {
            setShouldRender(true)
          })
        }
      },
      { threshold, rootMargin },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [threshold, rootMargin])

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldRender ? children : fallback}
    </div>
  )
}

