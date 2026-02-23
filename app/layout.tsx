import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <body className={`${inter.className} min-h-screen flex flex-col text-white antialiased`}>
        <div className="bg-rays" />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <FooterLinkArray />
      </body>
    </html>
  );
}
