import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ArkHive securely - submit tips, report issues, or reach our investigative team through encrypted channels.",
  openGraph: {
    title: "Contact | ArkHive",
    description: "Contact ArkHive securely - submit tips, report issues, or reach our investigative team through encrypted channels.",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
