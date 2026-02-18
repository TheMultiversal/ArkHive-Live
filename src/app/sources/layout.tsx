import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sources",
  description: "ArkHive's verified sources - government databases, court records, FOIA documents, and trusted whistleblower submissions.",
  openGraph: {
    title: "Sources | ArkHive",
    description: "ArkHive's verified sources - government databases, court records, FOIA documents, and trusted whistleblower submissions.",
  },
};

export default function SourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
