import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Activity",
  description: "Recent activity feed - track updates, changes, and new evidence across all ArkHive investigations.",
  openGraph: {
    title: "Activity | ArkHive",
    description: "Recent activity feed - track updates, changes, and new evidence across all ArkHive investigations.",
  },
};

export default function ActivityLayout({ children }: { children: ReactNode }) {
  return children;
}
