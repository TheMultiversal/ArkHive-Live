import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Search",
  description: "Search ArkHive investigations, entities, documents, and evidence across all documented cases.",
  openGraph: {
    title: "Search | ArkHive",
    description: "Search ArkHive investigations, entities, documents, and evidence across all documented cases.",
  },
};

export default function SearchLayout({ children }: { children: ReactNode }) {
  return children;
}
