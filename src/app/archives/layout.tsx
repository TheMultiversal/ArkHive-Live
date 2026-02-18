import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Archives",
  description: "ArkHive archives - historical investigations, concluded cases, and documented evidence from past inquiries.",
  openGraph: {
    title: "Archives | ArkHive",
    description: "ArkHive archives - historical investigations, concluded cases, and documented evidence from past inquiries.",
  },
};

export default function ArchivesLayout({ children }: { children: ReactNode }) {
  return children;
}
