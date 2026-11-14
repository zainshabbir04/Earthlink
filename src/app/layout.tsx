import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND_INFO } from "@/data/siteData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND_INFO.companyName} | Carrier-Grade Optical Fiber & Enterprise Connectivity`,
    template: `%s | ${BRAND_INFO.companyName}`,
  },
  description:
    "EARTH I Broadband (Pvt.) Ltd. delivers 1:1 symmetrical Dedicated Internet Access (DIA), Point-to-Point optical connectivity, MPLS VPNs, Cloud & Managed IT over a 1,200+ km subterranean armored metro fiber network.",
  keywords: [
    "EARTH I Broadband",
    "Enterprise Fiber Internet Pakistan",
    "Dedicated Internet Access DIA Lahore",
    "MPLS VPN Connectivity",
    "Point to Point Optical Fiber",
    "100G Metro Core Network",
    "Corporate Broadband ISP",
  ],
  openGraph: {
    title: `${BRAND_INFO.companyName} — Connecting Businesses. Empowering Possibilities.`,
    description:
      "Carrier-grade subterranean optical fiber, 1:1 symmetrical DIA, multi-branch MPLS rings, and 24/7/365 NOC-managed enterprise connectivity.",
    type: "website",
    locale: "en_US",
    siteName: BRAND_INFO.companyName,
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
      className={`dark scroll-smooth ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-black-gradient font-sans antialiased text-white min-h-screen flex flex-col selection:bg-brand_cyan selection:text-black overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
