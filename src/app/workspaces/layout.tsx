import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Workspaces",
  description: "Collaborative investigation workspaces - coordinate with your team on evidence analysis and documentation.",
  openGraph: {
    title: "Workspaces | ArkHive",
    description: "Collaborative investigation workspaces - coordinate with your team on evidence analysis and documentation.",
  },
};

export default function WorkspacesLayout({ children }: { children: ReactNode }) {
  return children;
}
