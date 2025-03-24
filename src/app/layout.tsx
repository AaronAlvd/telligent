"use client"

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { ModalProvider, Modal } from "@/context/modal";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Masthead from "@/components/Masthead";
import Navigation from "@/components/Navigation";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ModalProvider >
          <Modal />
          <Header />
          {(pathname.startsWith("/article") || pathname === "/") && <Masthead />}
          {(pathname.startsWith("/article") || pathname === "/") && <Navigation />}
          {children}
          {!pathname.startsWith("/admin") && <Footer />}
        </ModalProvider >
      </body>
    </html>
  );
}
