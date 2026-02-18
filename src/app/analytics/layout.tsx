import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Platform analytics and statistics - investigation trends, entity tracking, and document insights.",
  openGraph: {
    title: "Analytics | ArkHive",
    description: "Platform analytics and statistics - investigation trends, entity tracking, and document insights.",
  },
};

export default function AnalyticsLayout({ children }: { children: ReactNode }) {
  return children;
}
