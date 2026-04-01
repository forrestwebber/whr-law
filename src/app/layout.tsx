import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "William H. Russell | Austin & Georgetown Attorney | WHR Law",
  description:
    "Experienced Texas attorney William H. Russell provides trusted legal counsel in Probate, Family Law, Estate Planning, and Criminal Defense. Serving Williamson and Travis counties for 37+ years. Free consultation.",
  keywords:
    "Austin attorney, Georgetown lawyer, probate attorney Texas, family law lawyer Austin, estate planning Georgetown, criminal defense Williamson County, WHR Law, William Russell attorney",
  openGraph: {
    title: "William H. Russell | Austin & Georgetown Attorney | WHR Law",
    description:
      "Fourth-generation Texan. 37+ years of trusted legal counsel in Probate, Family Law, Estate Planning & Criminal Defense. Free consultation.",
    type: "website",
    locale: "en_US",
    url: "https://whr-law.com",
    siteName: "WHR Law",
  },
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
