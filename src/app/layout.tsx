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
  title: "Jack Decker | Dallas Personal Injury Attorney",
  description:
    "Injured in Dallas? Attorney Jack Decker fights for maximum compensation. Car accidents, truck wrecks, slip & falls. No fee unless we win. Free consultation.",
  keywords:
    "Dallas personal injury attorney, car accident lawyer Dallas, truck wreck attorney Texas, slip and fall lawyer, Jack Decker attorney",
  openGraph: {
    title: "Jack Decker | Dallas Personal Injury Attorney",
    description:
      "Injured? Jack Decker fights for you. No fee unless we win. Free case review.",
    type: "website",
    locale: "en_US",
    url: "https://rjdeckerlaw.com",
    siteName: "RJ Decker Law",
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
