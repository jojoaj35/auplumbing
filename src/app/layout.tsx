import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "San Antonio Plumber | A.U Plumbing LLC | 24/7 Emergency Plumbing Services",
  description: "Looking for a plumber in San Antonio? A.U Plumbing LLC is your #1 choice for emergency plumbing, water heater installation, drain cleaning & repairs. Licensed, insured & serving San Antonio, Universal City, Converse & Schertz. Call (210) 627-8141 for 24/7 service!",
  keywords: "San Antonio plumber, plumber San Antonio, emergency plumber San Antonio, San Antonio plumbing services, water heater installation San Antonio, drain cleaning San Antonio, licensed plumber San Antonio, plumbing repair San Antonio, plumbing contractor San Antonio, best plumber San Antonio, affordable plumber San Antonio, residential plumber San Antonio, commercial plumber San Antonio",
  openGraph: {
    title: "San Antonio Plumber | A.U Plumbing LLC | 24/7 Emergency Plumbing",
    description: "Looking for a plumber in San Antonio? A.U Plumbing LLC is your #1 choice for emergency plumbing, water heater installation, drain cleaning & repairs. Licensed, insured & serving San Antonio, Universal City, Converse & Schertz.",
    url: "https://auplumbingllc.com",
    siteName: "A.U Plumbing LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://auplumbingllc.com",
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="San Antonio" />
        <meta name="geo.position" content="29.4241;-98.4936" />
        <meta name="ICBM" content="29.4241, -98.4936" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PlumbingService",
            "name": "A.U Plumbing LLC - San Antonio's Top Rated Plumber",
            "image": "https://auplumbingllc.com/images/logo.png",
            "description": "San Antonio's most trusted plumbing company. 24/7 emergency plumbing services, water heater installation, drain cleaning, and more. Licensed & insured plumbers serving San Antonio, Universal City, Converse, and Schertz.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "PO Box 323",
              "addressLocality": "Converse",
              "addressRegion": "TX",
              "postalCode": "78109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.4241,
              "longitude": -98.4936
            },
            "url": "https://auplumbingllc.com",
            "telephone": "+12106278141",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "San Antonio"
              },
              {
                "@type": "City",
                "name": "Universal City"
              },
              {
                "@type": "City",
                "name": "Converse"
              },
              {
                "@type": "City",
                "name": "Schertz"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drain Cleaning"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/auplumbingllc",
              "https://www.yelp.com/biz/au-plumbing-llc-san-antonio"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            }
          })}
        </script>
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
} 