import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
// import { Suspense } from "next/navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Build a DAO Ethiopia - Building Africa's Decentralized Future",
  description:
    "Community-first, student-led organization equipping Africa's youth with Web3 skills through bootcamps, hackathons, and internships.",
  generator: "v0.app",
  openGraph: {
    title: "Build a DAO Ethiopia – Building Africa's Decentralized Future",
    description:
      "Community-first, student-led organization equipping Africa's youth with Web3 skills through bootcamps, hackathons, and internships.",
    images: ["/preview.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build a DAO Ethiopia – Building Africa's Decentralized Future",
    description:
      "Community-first, student-led organization equipping Africa's youth with Web3 skills through bootcamps, hackathons, and internships.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-slate-900 text-slate-200">
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          {children}
          <Analytics />
        {/* </Suspense> */}
      </body>
    </html>
  );
}
