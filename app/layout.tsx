import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "This is Yunz",
  description: "Welcome to my website! Hi, I’m Yunus. I’m a backend engineer fascinated by what happens under the hood. I build reliable, high-performance systems using Go, Python, and Rust, with a focus on distributed architecture. I spend much of my free time exploring lower-level systems topics such as operating systems, concurrency, and performance internals - currently working on my own implementation of EGOS-2000 (Cornell). I also volunteer within student engineering communities, helping run technical workshops, mentoring peers, and contributing to open-source projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
