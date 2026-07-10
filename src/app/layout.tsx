import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCHA | Fulfilment Infrastructure",
  description: "Premium fulfilment infrastructure for merchants across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[var(--ocha-dark)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
