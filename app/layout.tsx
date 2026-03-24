import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Caladium Consulting",
    template: "%s | Caladium Consulting"
  },
  description:
    "Caladium Consulting helps African enterprises scale through strategy, organizational design, market entry, and financial advisory.",
  metadataBase: new URL("https://caladiumconsulting.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakarta.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg font-jakarta text-ink antialiased">{children}</body>
    </html>
  );
}
