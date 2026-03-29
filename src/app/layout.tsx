import type { Metadata, Viewport } from"next";
import { Inter } from"next/font/google";
import"./globals.css";
import Providers from"./providers";
import SiteShell from"@/components/layout/SiteShell";

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
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ||"https://arkhive.live"),
 openGraph: {
 type:"website",
 locale:"en_US",
 siteName:"ArkHive",
 title:"ArkHive | Investigative Documentation Platform",
 description:"An investigative archive documenting political corruption, financial crimes, and institutional accountability through court records and verified evidence.",
 images: [
  {
   url:"/og-image.png",
   width: 1200,
   height: 630,
   alt:"ArkHive - Investigative Documentation Platform",
  },
 ],
 },
 twitter: {
 card:"summary_large_image",
 title:"ArkHive | Investigative Documentation Platform",
 description:"Documenting political corruption and institutional accountability.",
 images: ["/og-image.png"],
 },
 robots: {
 index: true,
 follow: true,
 },
 manifest:"/manifest.json",
};

export const viewport: Viewport = {
 themeColor:"#3d3d3d",
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
 {/* Skip to main content link for accessibility - WCAG 2.4.1 */}
 <a
 href="#main-content"
 className="
   sr-only focus:not-sr-only 
   focus:absolute focus:top-4 focus:left-4 focus:z-[200] 
   focus:px-6 focus:py-3 
   focus:bg-zinc-800 focus:border-2 focus:border-zinc-600 
   focus:text-white focus:font-bold focus:text-sm focus:uppercase focus:tracking-wider
   focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black
   focus:shadow-lg focus:shadow-zinc-800/50
 "
 >
 Skip to main content
 </a>

 <SiteShell>
  <Providers>{children}</Providers>
 </SiteShell>
 </body>
 </html>
 );
}
