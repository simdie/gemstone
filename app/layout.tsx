import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Glen Gemstone | Expert in Natural Coloured Gemstones",
  description:
    "30 years of experience in the international gemstone trade. Certified natural gemstones & crystals from around the world.",
  keywords:
    "Glen Gemstone, Coloured Gemstones, Natural Gemstones, Gemstone Trade, Crystals, Gemstone Certification",
  authors: [{ name: "Glen Gemstone" }],
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
