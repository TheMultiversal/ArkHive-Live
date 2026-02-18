import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Your saved investigations and evidence - quick access to bookmarked content.",
  openGraph: {
    title: "Bookmarks | ArkHive",
    description: "Your saved investigations and evidence - quick access to bookmarked content.",
  },
};

export default function BookmarksLayout({ children }: { children: ReactNode }) {
  return children;
}
