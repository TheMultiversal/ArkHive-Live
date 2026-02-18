import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Investigations",
  description: "All ArkHive investigations - documented institutional crimes, corruption cases, and ongoing inquiries.",
  openGraph: {
    title: "Investigations | ArkHive",
    description: "All ArkHive investigations - documented institutional crimes, corruption cases, and ongoing inquiries.",
  },
};

export default function InvestigationsLayout({ children }: { children: ReactNode }) {
  return children;
}
