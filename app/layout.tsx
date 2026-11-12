import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAMPHORS SANG | Senior Accountant & Tax Professional",
  description:
    "Senior Accountant & Tax Professional with 6+ years of experience in CIFRS for SMEs, GDT Tax Compliance, ACAR Digital Reporting, and Financial Management in Cambodia.",
  keywords: [
    "Senior Accountant",
    "Tax Professional",
    "Cambodian Taxation",
    "GDT Compliance",
    "ACAR Reporting",
    "CIFRS for SMEs",
    "Samphors Sang",
    "Phnom Penh Accountant",
    "Financial Statements",
    "NSSF",
    "MOC",
  ],
  authors: [{ name: "Samphors Sang" }],
  openGraph: {
    title: "SAMPHORS SANG | Senior Accountant & Tax Professional",
    description:
      "Precision accounting, GDT tax compliance, CIFRS for SMEs, and ACAR reporting portfolio.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#070a12] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
