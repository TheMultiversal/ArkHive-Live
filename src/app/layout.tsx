import type { Metadata, Viewport } from"next";
import { Inter } from"next/font/google";
import"./globals.css";
import Header from"@/components/layout/Header";
import Footer from"@/components/layout/Footer";
import SumerianMatrixRain from"@/components/effects/SumerianMatrixRain";
import RandomWordPopups from"@/components/effects/RandomWordPopups";
import { SurveillanceWarning, DataCorruption, TimestampOverlay } from"@/components/effects/ParanoiaEffects";
import BackToTop from"@/components/ui/BackToTop";
import Providers from"./providers";
import AuthGate from"@/components/AuthGate";

const inter = Inter({
 subsets: ["latin"],
 display:"swap",
 variable:"--font-inter",
});

export const metadata: Metadata = {
 title: {
 default:"ArkHive | Investigative Documentation Platform",
 template:"%s | ArkHive",
 },
 description:"An investigative archive documenting political corruption, financial crimes, and institutional accountability through court records, primary sources, and verified evidence.",
 keywords: ["investigation","corruption","court records","political crimes","financial fraud","accountability","documentation"],
 authors: [{ name:"ArkHive Team"}],
 creator:"ArkHive",
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ||"http://localhost:3000"),
 openGraph: {
 type:"website",
 locale:"en_US",
 siteName:"ArkHive",
 title:"ArkHive | Investigative Documentation Platform",
 description:"An investigative archive documenting political corruption, financial crimes, and institutional accountability through court records and verified evidence.",
 },
 twitter: {
 card:"summary_large_image",
 title:"ArkHive | Investigative Documentation Platform",
 description:"Documenting political corruption and institutional accountability.",
 },
 robots: {
 index: true,
 follow: true,
 },
 manifest:"/manifest.json",
};

export const viewport: Viewport = {
 themeColor:"#dc2626",
 width:"device-width",
 initialScale: 1,
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en"className={inter.variable}>
 <body className="antialiased min-h-screen flex flex-col cursor-blood-red">
 {/* Skip to main content link for accessibility */}
 <a
 href="#main-content"
 className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blood-700 focus:text-white focus:font-bold"
 >
 Skip to main content
 </a>

 {/* AuthGate: on /enter shows only the page, otherwise full site */}
 <AuthGate
 header={
 <>
 <SumerianMatrixRain />
 <RandomWordPopups frequency={12000} />
 <SurveillanceWarning />
 <DataCorruption />
 <TimestampOverlay />
 <Header />
 </>
 }
 footer={
 <>
 <Footer />
 <BackToTop />
 </>
 }
 >
 <main id="main-content"className="flex-1 relative z-10">
 <div className="glass-panel mx-4 my-6 p-6 sm:mx-6 lg:mx-8">
 <Providers>{children}</Providers>
 </div>
 </main>
 </AuthGate>
 </body>
 </html>
 );
}
