import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tags",
  description: "Browse investigations by tags - categorized topics and themes across all documented cases.",
  openGraph: {
    title: "Tags | ArkHive",
    description: "Browse investigations by tags - categorized topics and themes across all documented cases.",
  },
};

export default function TagsLayout({ children }: { children: ReactNode }) {
  return children;
}
