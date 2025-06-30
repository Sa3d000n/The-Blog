import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "The Blog",
  description: "Simple blog viewing impressive tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={` ${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
