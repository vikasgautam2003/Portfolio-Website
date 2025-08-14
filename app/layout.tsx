import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";

// Create font instance
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikas Portfolio",
  description: "This is my Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
         className={`${inter.className} bg-[#0d001f]  overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
