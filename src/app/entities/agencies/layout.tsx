import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Government Agencies",
  description: "Government agencies documented in ArkHive investigations - federal, state, and international bodies with links to institutional crimes.",
  openGraph: {
    title: "Government Agencies | ArkHive",
    description: "Government agencies documented in ArkHive investigations - federal, state, and international bodies with links to institutional crimes.",
  },
};

export default function AgenciesLayout({ children }: { children: ReactNode }) {
  return children;
}
