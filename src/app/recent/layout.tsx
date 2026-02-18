import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Recent",
  description: "Recently viewed investigations and entities - quick access to your recent activity.",
  openGraph: {
    title: "Recent | ArkHive",
    description: "Recently viewed investigations and entities - quick access to your recent activity.",
  },
};

export default function RecentLayout({ children }: { children: ReactNode }) {
  return children;
}
