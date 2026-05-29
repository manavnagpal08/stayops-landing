import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MouseGlow } from "@/components/ui/MouseGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayOps.ai | Unified Enterprise AI Ecosystem",
  description: "Deploy Chat AI, Voice AI, and Video AI agents to completely automate your business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#050505] text-slate-50 min-h-screen flex flex-col antialiased selection:bg-gold-500/30`}>
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
