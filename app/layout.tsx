// /app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import FooterLinkArray from "@/components/FooterLinkArray";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrayWithGod",
  description: "A spiritual space for prayer and reflection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} relative min-h-screen flex flex-col bg-white text-black antialiased`}
        >
          <div className="bg-sunrise" aria-hidden="true" />

          <div className="relative z-20">
            <SiteHeader />
          </div>

          <div className="relative z-10 flex-grow">
            {children}
          </div>

          <div className="relative z-10">
            <FooterLinkArray />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}