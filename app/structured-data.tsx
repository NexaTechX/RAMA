"use client"

import { useEffect } from "react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ramawater.com"
const siteDescription =
  "RAMA reimagines water as an object of intention. Purified drinking water sealed in minimalist aluminum cans — plastic-free, elegant, and designed for premium events."

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RAMA Water",
      url: siteUrl,
      logo: `${siteUrl}/images/Shinaayomi Rama.jpeg`,
      description:
        "RAMA reimagines water as an object of intention. Purified drinking water sealed in minimalist aluminum cans — plastic-free, elegant, and designed for premium events.",
      sameAs: [
        // Add your social media URLs here
        // "https://www.instagram.com/ramawater",
        // "https://www.facebook.com/ramawater",
        // "https://twitter.com/ramawater",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        // Add contact information
        // email: "contact@ramawater.com",
      },
      foundingDate: "2025",
      founder: {
        "@type": "Person",
        name: "RAMA Water",
      },
    }

    // Product Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "RAMA Luxury Canned Water",
      image: `${siteUrl}/images/Shinaayomi Rama.jpeg`,
      description:
        "Purified drinking water sealed in minimalist aluminum cans. Plastic-free, elegant, and designed for premium events and refined moments.",
      brand: {
        "@type": "Brand",
        name: "RAMA Water",
      },
      category: "Beverages > Water",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        priceCurrency: "USD",
        // Add pricing when available
        // price: "0.00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        // Add ratings when available
        // ratingValue: "5",
        // reviewCount: "0",
      },
      material: "Aluminum",
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Plastic-Free",
          value: "Yes",
        },
        {
          "@type": "PropertyValue",
          name: "Recyclable",
          value: "Yes",
        },
        {
          "@type": "PropertyValue",
          name: "Sustainable",
          value: "Yes",
        },
      ],
    }

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "RAMA Water",
      url: siteUrl,
      description: siteDescription,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    }

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    }

    // Add all schemas to the page
    const scripts = [
      organizationSchema,
      productSchema,
      websiteSchema,
      breadcrumbSchema,
    ]

    scripts.forEach((schema) => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.text = JSON.stringify(schema)
      script.id = `schema-${schema["@type"]}`
      document.head.appendChild(script)
    })

    return () => {
      // Cleanup on unmount
      scripts.forEach((schema) => {
        const script = document.getElementById(`schema-${schema["@type"]}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}

