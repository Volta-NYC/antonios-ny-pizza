import "./globals.css"
import type { Metadata } from "next"
import { Fraunces, Hanken_Grotesk } from "next/font/google"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { business } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  servesCuisine: "Pizza",
  description:
    "An electrifying pizza place in Brooklyn, NY. Incredible food made with the freshest ingredients.",
  telephone: business.phone,
  url: "https://www.antoniosnypizza.com",
  image: "https://www.antoniosnypizza.com/images/hero.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11238",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "21:50",
  },
}

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antoniosnypizza.com"),
  title: {
    default: `${business.name} — ${business.tagline}`,
    template: `%s · ${business.name}`,
  },
  description:
    "Antonio's Pizza is an electrifying pizza place in Brooklyn, NY — incredible food made with the freshest ingredients and a friendly atmosphere. 318 Flatbush Ave.",
  keywords: [
    "Antonio's Pizza",
    "Brooklyn pizza",
    "Flatbush Ave pizza",
    "NY pizza",
    "Prospect Heights pizzeria",
  ],
  openGraph: {
    title: `${business.name} — ${business.tagline}`,
    description:
      "An electrifying pizza place in Brooklyn, NY. Freshest ingredients, friendly atmosphere.",
    url: "/",
    siteName: business.name,
    images: ["/images/hero.webp"],
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
