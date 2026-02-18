import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Drafts",
  description: "Your draft investigations and submissions - work in progress awaiting completion.",
  openGraph: {
    title: "Drafts | ArkHive",
    description: "Your draft investigations and submissions - work in progress awaiting completion.",
  },
};

export default function DraftsLayout({ children }: { children: ReactNode }) {
  return children;
}
