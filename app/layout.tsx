import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import FooterLinkArray from "@/components/FooterLinkArray";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrayWithGod.ai",
  description: "A spiritual space for prayer and reflection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen flex flex-col bg-white text-black antialiased`}
      >
        {/* Global sunrise background */}
        <div className="bg-sunrise" aria-hidden="true" />

        {/* Global Header */}
        <div className="relative z-20">
          <SiteHeader />
        </div>

        {/* Page Content */}
        <div className="relative z-10 flex-grow">
          {children}
        </div>

        {/* Global Footer */}
        <div className="relative z-10">
          <FooterLinkArray />
        </div>
      </body>
    </html>
  );
}