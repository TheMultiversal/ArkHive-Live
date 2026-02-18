import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for using ArkHive - the investigative journalism platform for documenting institutional crimes.",
  openGraph: {
    title: "Terms of Service | ArkHive",
    description: "Terms of service for using ArkHive - the investigative journalism platform for documenting institutional crimes.",
  },
};

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}
