import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Individuals",
  description: "Key individuals documented in ArkHive investigations - officials, executives, and persons of interest with links to institutional crimes.",
  openGraph: {
    title: "Individuals | ArkHive",
    description: "Key individuals documented in ArkHive investigations - officials, executives, and persons of interest with links to institutional crimes.",
  },
};

export default function IndividualsLayout({ children }: { children: ReactNode }) {
  return children;
}
