import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ocha.africa"),
  title: {
    default: "OCHA | Fulfilment Infrastructure for Modern Merchants",
    template: "%s | OCHA",
  },
  description:
    "Premium warehousing, fulfilment, and delivery infrastructure for modern merchants building across Africa.",
  applicationName: "OCHA",
  authors: [{ name: "OCHA" }],
  creator: "OCHA",
  publisher: "OCHA",
  openGraph: {
    title: "OCHA | Fulfilment Infrastructure for Modern Merchants",
    description:
      "Warehousing, fulfilment, and delivery with real-time inventory transparency from shelf to customer.",
    url: "https://ocha.africa",
    siteName: "OCHA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OCHA | Fulfilment Infrastructure for Modern Merchants",
    description:
      "Warehousing, fulfilment, and delivery with real-time inventory transparency from shelf to customer.",
  },
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
