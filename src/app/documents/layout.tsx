import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documents",
  description: "Document library - FOIA releases, court filings, leaked documents, and verified evidence files.",
  openGraph: {
    title: "Documents | ArkHive",
    description: "Document library - FOIA releases, court filings, leaked documents, and verified evidence files.",
  },
};

export default function DocumentsLayout({ children }: { children: ReactNode }) {
  return children;
}
