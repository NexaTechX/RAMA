import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "RAMA | Luxury Canned Water for Refined Moments",
  description:
    "RAMA reimagines water as an object of intention. Purified drinking water sealed in minimalist aluminum cans — plastic-free, elegant, and designed for premium events.",
  keywords: ["luxury water", "canned water", "premium events", "sustainable water", "aluminum cans"],
  authors: [{ name: "RAMA Water" }],
  openGraph: {
    title: "RAMA | Luxury Canned Water for Refined Moments",
    description:
      "RAMA reimagines water as an object of intention. Plastic-free, elegant, and designed for premium events.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#f7f6f4",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
