import type { Metadata } from"next";
import type { ReactNode } from"react";

export const metadata: Metadata = {
 title:"Saved Pages",
 description:"Your saved investigations and entities on ArkHive.",
 openGraph: {
 title:"Saved Pages | ArkHive",
 description:"Your saved investigations and entities on ArkHive.",
 },
};

export default function ArchivesLayout({ children }: { children: ReactNode }) {
 return children;
}
