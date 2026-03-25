import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ZAAB",
  description: "Personal Portfolio Website",
};

import Navbar from "@/components/Navbar";
import BackgroundMusic from "@/components/BackgroundMusic";
import FireBorder from "@/components/FireBorder";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#121212] text-white `}>
        {/* <BackgroundMusic /> */}
        {/* <FireBorder /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
