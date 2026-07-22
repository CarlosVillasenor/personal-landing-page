import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Villaseñor",
  description: "Personal website of Carlos Villaseñor, a software engineer and web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
