import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../(main)/globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt App",
  description: "A website for creating and sharing Prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="main">
          <div className="gradient" />
        </div>
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Prompt App</p>
        </Link>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
