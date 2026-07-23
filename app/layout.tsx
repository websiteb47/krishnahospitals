import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Krishna Hospitals & Labs – Trusted Healthcare 24/7",
  description:
    "Krishna Hospitals & Labs offers 24/7 hospital care, wholesale & retail medical shop with 22% discount, and full-service diagnostic labs with free home sample collection.",
  keywords:
    "Krishna Hospitals, Krishna Labs, medical shop, wholesale medicine, lab tests, home sample collection, 24/7 hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
