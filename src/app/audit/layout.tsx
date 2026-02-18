import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Audit Log",
  description: "Security audit log - track all actions and changes for transparency and accountability.",
  openGraph: {
    title: "Audit Log | ArkHive",
    description: "Security audit log - track all actions and changes for transparency and accountability.",
  },
};

export default function AuditLayout({ children }: { children: ReactNode }) {
  return children;
}
