import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import { AppProvider } from "@/context/AppContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Xplore The Dreams',
    default: 'Xplore The Dreams | Curated High-Altitude Expeditions',
  },
  description: 'Experience curated high-altitude expeditions and premium mountaineering. We redefine the adventure with raw wilderness and uncompromising safety.',
  keywords: ['Himalayas', 'Trekking', 'Mountaineering', 'Expeditions', 'High Altitude', 'Adventure Travel', 'India Treks'],
  authors: [{ name: 'Xplore The Dreams Team' }],
  creator: 'Xplore The Dreams',
  metadataBase: new URL('https://xplorethedreams.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xplorethedreams.com',
    title: 'Xplore The Dreams | Curated High-Altitude Expeditions',
    description: 'Experience curated high-altitude expeditions and premium mountaineering. We redefine the adventure with raw wilderness and uncompromising safety.',
    siteName: 'Xplore The Dreams',
    images: [{
      url: 'https://images.unsplash.com/photo-1513689125086-6c432170e843?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Xplore The Dreams Hero Image',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xplore The Dreams | Curated Expeditions',
    description: 'Experience curated high-altitude expeditions and premium mountaineering.',
    images: ['https://images.unsplash.com/photo-1513689125086-6c432170e843?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#F0EFEA] text-[#0D0D0D] min-h-screen flex flex-col font-sans selection:bg-[#FFC000] selection:text-black relative`}
      >
        <div className="noise-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.03]"></div>
        <AppProvider>
          <SmoothScrolling>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScrolling>
        </AppProvider>
      </body>
    </html>
  );
}
