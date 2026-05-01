import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CYKLOS / CAÇAMBAR MVP",
  description:
    "Circular economy proof infrastructure with a Solana-ready verification layer and CAÇAMBAR as the first operational application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-cyklos-dark font-sans text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
