import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ComingSoonModal } from "@/components/coming-soon-modal";

import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wealthconomy | Smart Wealth Management",
  description: "Wealthconomy is your structured ecosystem for automated savings, financial discipline and lasting legacy. Empowering Africans to build community-driven wealth.",
  openGraph: {
    title: "Wealthconomy | Smart Wealth Management",
    description: "Wealthconomy is your structured ecosystem for automated savings, financial discipline and lasting legacy.",
    url: "https://wealthconomy.com",
    siteName: "Wealthconomy",
    images: [
      {
        url: "/og-image.jpg", // We will assume there is an og-image
        width: 1200,
        height: 630,
        alt: "Wealthconomy Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealthconomy | Smart Wealth Management",
    description: "Empowering Africans to build community-driven wealth.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png?v=2" },
      { url: "/favicon.ico?v=2" },
    ],
    apple: "/apple-icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ComingSoonModal />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
