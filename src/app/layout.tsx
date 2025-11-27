import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/Theme-provider";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import TestFooter from "@/components/layout/TestFooter";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NextGen Shop | Smart Shopping for Electronics & Lifestyle",
    template: "%s | NextGen Shop",
  },

  description:
    "Shop the latest electronics, gadgets, fashion and home essentials at NextGen Shop. Enjoy fast delivery, secure checkout, and unbeatable prices.",

  keywords: [
    "nextgen shop",
    "online shopping",
    "electronics",
    "gadgets",
    "fashion",
    "ecommerce",
    "best deals",
    "tech products",
    "shopping cambodia",
  ],

  metadataBase: new URL("https://next-gen-shop-cplw.vercel.app"),

  openGraph: {
    title: "NextGen Shop",
    description:
      "Discover trending electronics, gadgets, fashion, and more — only at NextGen Shop.",
    url: "https://next-gen-shop-cplw.vercel.app",
    siteName: "NextGen Shop",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/metadatax.png", // IMPORTANT: this must exist in /public
        width: 1200,
        height: 630,
        alt: "NextGen Shop Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGen Shop",
    description:
      "Explore the best electronics, gadgets & lifestyle items at amazing prices.",
    images: ["/metadatax.png"], // same image for consistency
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <TestFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
