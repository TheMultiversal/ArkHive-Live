import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Corporations",
  description: "Corporations documented in ArkHive investigations - companies and business entities with links to institutional crimes.",
  openGraph: {
    title: "Corporations | ArkHive",
    description: "Corporations documented in ArkHive investigations - companies and business entities with links to institutional crimes.",
  },
};

export default function CorporationsLayout({ children }: { children: ReactNode }) {
  return children;
}
