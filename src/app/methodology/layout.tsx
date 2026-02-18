import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Methodology",
  description: "ArkHive's investigative methodology - how we verify sources, document evidence, and ensure accuracy in our investigations.",
  openGraph: {
    title: "Methodology | ArkHive",
    description: "ArkHive's investigative methodology - how we verify sources, document evidence, and ensure accuracy in our investigations.",
  },
};

export default function MethodologyLayout({ children }: { children: ReactNode }) {
  return children;
}
