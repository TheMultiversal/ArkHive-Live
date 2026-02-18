import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Team",
  description: "The ArkHive investigative team - journalists, researchers, and analysts dedicated to exposing institutional crimes.",
  openGraph: {
    title: "Team | ArkHive",
    description: "The ArkHive investigative team - journalists, researchers, and analysts dedicated to exposing institutional crimes.",
  },
};

export default function TeamLayout({ children }: { children: ReactNode }) {
  return children;
}
