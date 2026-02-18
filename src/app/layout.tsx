import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StaticGridBackground from "@/components/effects/StaticGridBackground";
import RandomWordPopups from "@/components/effects/RandomWordPopups";
import { SurveillanceWarning, DataCorruption, TimestampOverlay } from "@/components/effects/ParanoiaEffects";
import BackToTop from "@/components/ui/BackToTop";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Your Government Is Killing You | ArkHive",
    template: "%s | ArkHive",
  },
  description: "An investigative platform exposing the truth about government, corporate, and institutional actions affecting public health and safety.",
  keywords: ["investigation", "government", "transparency", "public health", "corporate accountability"],
  authors: [{ name: "ArkHive Team" }],
  creator: "ArkHive",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ArkHive",
    title: "Your Government Is Killing You | ArkHive",
    description: "An investigative platform exposing the truth about government, corporate, and institutional actions affecting public health and safety.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Government Is Killing You | ArkHive",
    description: "An investigative platform exposing the truth.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col cursor-blood-red">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blood-700 focus:text-white focus:font-bold"
        >
          Skip to main content
        </a>

        {/* Global Effects - Optimized for performance */}
        <StaticGridBackground />
        <RandomWordPopups frequency={12000} />
        <SurveillanceWarning />
        <DataCorruption />
        <TimestampOverlay />
        
        <Header />
        <main id="main-content" className="flex-1 relative z-10">
          <Providers>{children}</Providers>
        </main>
        <Footer />
        
        {/* Back to top button */}
        <BackToTop />
      </body>
    </html>
  );
}
