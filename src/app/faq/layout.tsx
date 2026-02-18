import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ArkHive - learn how the platform works, how to contribute, and how we protect sources.",
  openGraph: {
    title: "FAQ | ArkHive",
    description: "Frequently asked questions about ArkHive - learn how the platform works, how to contribute, and how we protect sources.",
  },
};

export default function FAQLayout({ children }: { children: ReactNode }) {
  return children;
}
