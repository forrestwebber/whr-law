import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL("https://whr-law.com"),
  title: "WHR Law | William H. Russell, Attorney at Law",
  description: "William H. Russell — Central Texas attorney with 37+ years of experience in probate, estate planning, family law, and criminal defense. Free consultation.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4PMR69HLH2" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-4PMR69HLH2');` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
