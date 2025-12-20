import { useEffect, useState, useRef } from "react"

/**
 * Optimized scroll hook with throttling for better performance
 * Uses requestAnimationFrame for smooth 60fps updates
 */
export function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollY, isScrolled }
}

/**
 * Hook for scroll-based opacity calculation
 * Optimized with requestAnimationFrame
 */
export function useScrollOpacity(maxScroll: number = 600) {
  const { scrollY } = useScroll()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const newOpacity = Math.max(0, 1 - scrollY / maxScroll)
    setOpacity(newOpacity)
  }, [scrollY, maxScroll])

  return opacity
}

/**
 * Hook for scroll progress within a section
 * Optimized with requestAnimationFrame
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    let ticking = false

    const updateProgress = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setProgress(scrollProgress)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateProgress() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { progress, sectionRef }
}

