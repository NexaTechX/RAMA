"use client"

interface LoadingScreenProps {
  isVisible: boolean
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 bg-background flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <span className="text-2xl font-serif tracking-[0.5em]">RAMA</span>
        <div className="mt-4 w-24 h-px bg-border mx-auto overflow-hidden">
          <div className="w-full h-full bg-foreground animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}
