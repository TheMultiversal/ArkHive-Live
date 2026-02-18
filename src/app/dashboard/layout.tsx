import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your ArkHive dashboard - track investigations, manage evidence, and collaborate with your team.",
  openGraph: {
    title: "Dashboard | ArkHive",
    description: "Your ArkHive dashboard - track investigations, manage evidence, and collaborate with your team.",
  },
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return children;
}
