import type { Metadata } from"next";
import type { ReactNode } from"react";

export const metadata: Metadata = {
 title:"Offline Access",
 description:"Coming soon: access the entire ArkHive investigation archive offline. Download dossiers, browse investigations, and hold power accountable without an internet connection.",
 openGraph: {
 title:"Offline Access | ArkHive",
 description:"Coming soon: access the entire ArkHive investigation archive offline. Download dossiers, browse investigations, and hold power accountable without an internet connection.",
 },
};

export default function OfflineLayout({ children }: { children: ReactNode }) {
 return children;
}
