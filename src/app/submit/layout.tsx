import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Submit",
  description: "Submit tips, evidence, or documents to ArkHive securely and anonymously through our encrypted submission system.",
  openGraph: {
    title: "Submit | ArkHive",
    description: "Submit tips, evidence, or documents to ArkHive securely and anonymously through our encrypted submission system.",
  },
};

export default function SubmitLayout({ children }: { children: ReactNode }) {
  return children;
}
