import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat, Farsan } from "next/font/google";
import localFont from "next/font/local";

const STIX = localFont({
  src: "./static-fonts/STIXTwoText-Regular.ttf",
  variable: "--font-STIX",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const farsan = Farsan({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-farsan",
});

export const metadata: Metadata = {
  title: "CHOEXA",
  description: "Empowering Seamless Clinical Documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative h-full antialiased ${montserrat.variable} ${farsan.variable}`}>
        <main className="realtive flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
