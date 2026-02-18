import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ArkHive's privacy policy - how we protect your data and maintain source confidentiality for whistleblowers and investigators.",
  openGraph: {
    title: "Privacy Policy | ArkHive",
    description: "ArkHive's privacy policy - how we protect your data and maintain source confidentiality for whistleblowers and investigators.",
  },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
