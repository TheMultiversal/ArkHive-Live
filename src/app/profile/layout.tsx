import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your ArkHive profile - manage your account, preferences, and security settings.",
  openGraph: {
    title: "Profile | ArkHive",
    description: "Your ArkHive profile - manage your account, preferences, and security settings.",
  },
};

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return children;
}
