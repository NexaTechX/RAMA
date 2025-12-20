import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StructuredData } from "./structured-data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ramawater.com"
const siteName = "RAMA Water"
const siteDescription =
  "RAMA reimagines water as an object of intention. Purified drinking water sealed in minimalist aluminum cans — plastic-free, elegant, and designed for premium events."
const defaultImage = `${siteUrl}/images/Shinaayomi%20Rama.jpeg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RAMA | Luxury Canned Water for Refined Moments",
    template: "%s | RAMA Water",
  },
  description: siteDescription,
  keywords: [
    "luxury water",
    "canned water",
    "premium water",
    "sustainable water",
    "aluminum canned water",
    "premium events",
    "luxury beverages",
    "eco-friendly water",
    "plastic-free water",
    "refined moments",
    "premium drinking water",
    "luxury hydration",
    "sustainable beverages",
    "aluminum cans",
    "premium water brand",
  ],
  authors: [{ name: "RAMA Water" }],
  creator: "RAMA Water",
  publisher: "RAMA Water",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "RAMA | Luxury Canned Water for Refined Moments",
    description: siteDescription,
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "RAMA Premium Aluminum Canned Water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAMA | Luxury Canned Water for Refined Moments",
    description: siteDescription,
    images: [defaultImage],
    creator: "@ramawater",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Luxury Beverages",
  classification: "Premium Water Brand",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "RAMA",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#f7f6f4",
    "theme-color": "#f7f6f4",
  },
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
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://ramawater.com"} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>
      <body className={`font-sans antialiased ${_playfair.variable}`} suppressHydrationWarning>
        {children}
        <StructuredData />
        <Analytics />
      </body>
    </html>
  )
}
