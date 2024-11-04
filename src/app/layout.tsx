import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Source_Serif_4, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif", 
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Alex Dubljevic",
  description: "My personal site to showcase my developer work and opinions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased",
          sourceSerif.variable,
          baskerville.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
