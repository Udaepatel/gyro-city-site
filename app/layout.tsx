import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { playfair, inter } from "@/lib/fonts"

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: "Greek Catering Toronto | Fresh Gyros & Mediterranean Food Delivery | Gyro City",
    template: `%s | Gyro City`,
  },
  description: "Authentic Greek catering in Toronto. Office catering, corporate events & party platters with fresh gyros, souvlaki. Same-day delivery. Call (647) 548-8740 for quote!",
  keywords: [
    "greek catering toronto",
    "office catering toronto",
    "corporate catering toronto",
    "gyro catering",
    "mediterranean food delivery",
    "same day catering toronto",
    "lunch box catering",
    "buffet style trays",
    "toronto catering",
    "authentic greek food",
    "halal catering toronto",
    "party platters toronto",
  ],
  authors: [
    {
      name: "Gyro City",
      url: "https://gyrocity.ca",
    },
  ],
  creator: "Gyro City",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0066FF" },
    { media: "(prefers-color-scheme: dark)", color: "#0066FF" },
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://gyrocity.ca",
    title: "Greek Catering Toronto | Fresh Gyros & Mediterranean Food | Gyro City",
    description: "Authentic Greek catering in Toronto. Office catering, corporate events & party platters with fresh gyros, souvlaki. Same-day delivery available.",
    siteName: "Gyro City",
    images: [
      {
        url: "https://gyrocity.ca/catering-trays.jpg",
        width: 1200,
        height: 630,
        alt: "Greek catering trays with rice, chicken, and falafel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greek Catering Toronto | Gyro City",
    description: "Authentic Greek catering in Toronto. Office catering, corporate events & party platters. Same-day delivery. Call (647) 548-8740",
    images: ["https://gyrocity.ca/catering-trays.jpg"],
    creator: "@gyrocity",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://gyrocity.ca",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Gyro City",
              "image": "https://gyrocity.ca/catering-trays.jpg",
              "logo": "https://gyrocity.ca/gyro-city-logo.png",
              "@id": "https://gyrocity.ca",
              "url": "https://gyrocity.ca",
              "telephone": "+16475488740",
              "email": "info@gyrocity.ca",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.6532,
                "longitude": -79.3832
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "servesCuisine": ["Greek", "Mediterranean", "Middle Eastern"],
              "acceptsReservations": "False",
              "hasMenu": "https://gyrocity.ca/menu",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "23",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.facebook.com/gyrocity",
                "https://www.instagram.com/gyrocity"
              ]
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
