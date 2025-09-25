import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Nav from "@/components/Nav";
import { NavProvider } from "@/app/context/NavContext";
import { UnitProvider } from "@/app/context/UnitContext";
import { ThemeProvider } from "@/app/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rq_weather",
  description: "An overly complicated weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black text-white" lang="en">
      <ThemeProvider>
        <UnitProvider>
          <NavProvider>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased p-1`}
            >
              <Nav />
              {children}
            </body>
          </NavProvider>
        </UnitProvider>
      </ThemeProvider>
    </html>
  );
}
