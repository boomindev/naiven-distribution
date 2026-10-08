import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naivendistribution.com"),
  title: {
    default: "NAIVEN DISTRIBUTION | Boutique Digital Music Distribution",
    template: "%s | NAIVEN DISTRIBUTION",
  },
  description:
    "Independent boutique digital music distribution. Direct delivery to global streaming platforms, artist profile management, and release strategy.",
  keywords: [
    "music distribution",
    "independent artists",
    "digital distribution",
    "Spotify delivery",
    "Apple Music distribution",
    "boutique distributor",
  ],
  authors: [{ name: "Naiven Distribution" }],
  creator: "Naiven Distribution",
  publisher: "Naiven Distribution",
  alternates: {
    canonical: "https://naivendistribution.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    url: "https://naivendistribution.com",
    title: "NAIVEN DISTRIBUTION | Boutique Digital Music Distribution",
    description:
      "Precision music distribution tailored for independent sound. Direct delivery, artist profile verification, and release planning.",
    siteName: "NAIVEN DISTRIBUTION",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAIVEN DISTRIBUTION",
    description: "Boutique digital music distribution for independent creators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans bg-[#080808] text-neutral-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-black">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-24 pb-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
