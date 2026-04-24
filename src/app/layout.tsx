import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL("https://whr-law.com"),
  title: "WHR Law | William H. Russell — Your Site is Ready",
  description: "Your custom law firm website is ready, Billy. Central Texas probate, estate planning, family law & criminal defense — 37+ years. Claim your exclusive discount from Slacked.co.",
  openGraph: {
    title: "WHR Law | William H. Russell — Your Site is Ready",
    description: "Your custom law firm website is ready. Central Texas probate, estate planning, family law & criminal defense — 37+ years.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WHR Law | William H. Russell — Your Site is Ready",
    description: "Your custom law firm website is ready. Central Texas law — 37+ years.",
  },
};

export default function BillyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
