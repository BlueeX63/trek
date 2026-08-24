import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Xplore The Dreams",
  description: "Premium High-Altitude Expeditions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-[#FDFBF7] text-[#0A1910] min-h-screen flex flex-col font-sans`}
      >
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
