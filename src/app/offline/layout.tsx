import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Offline",
  description: "You are currently offline - limited functionality available until connection is restored.",
  openGraph: {
    title: "Offline | ArkHive",
    description: "You are currently offline - limited functionality available until connection is restored.",
  },
};

export default function OfflineLayout({ children }: { children: ReactNode }) {
  return children;
}
