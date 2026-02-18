import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Your ArkHive notifications - updates on investigations, workspace activity, and system alerts.",
  openGraph: {
    title: "Notifications | ArkHive",
    description: "Your ArkHive notifications - updates on investigations, workspace activity, and system alerts.",
  },
};

export default function NotificationsLayout({ children }: { children: ReactNode }) {
  return children;
}
