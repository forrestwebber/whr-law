import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL("https://whr-law.com"),
  title: {
    default: "William H. Russell, Attorney at Law | Georgetown & Austin TX",
    template: "%s | WHR Law",
  },
  alternates: { canonical: "/" },
  description: "Georgetown and Austin attorney with 37+ years in probate, family law, estate planning and criminal defense. Serving Williamson and Travis counties. Free consultation.",
  openGraph: {
    title: "WHR Law | William H. Russell, Attorney at Law",
    description: "Central Texas attorney — probate, estate planning, family law & criminal defense. 37+ years of experience. Free consultation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WHR Law | William H. Russell, Attorney at Law",
    description: "Central Texas attorney — 37+ years of experience. Free consultation.",
  },
};


const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "The Law Office of William H. Russell",
  alternateName: "WHR Law",
  url: "https://whr-law.com",
  telephone: "+1-512-219-4053",
  email: "contactus@whr-law.com",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Williamson County, Texas" },
    { "@type": "AdministrativeArea", name: "Travis County, Texas" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Georgetown", addressRegion: "TX", addressCountry: "US" },
  founder: { "@type": "Person", name: "William H. Russell", jobTitle: "Attorney at Law" },
  knowsAbout: ["Probate", "Estate Planning", "Family Law", "Criminal Defense"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Practice Areas",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Probate", url: "https://whr-law.com/practice-areas/probate" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Law", url: "https://whr-law.com/practice-areas/family-law" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estate Planning", url: "https://whr-law.com/practice-areas/estate-planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criminal Defense", url: "https://whr-law.com/practice-areas/criminal-defense" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4PMR69HLH2" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-4PMR69HLH2');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
