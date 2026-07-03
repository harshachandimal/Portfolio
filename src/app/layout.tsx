import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteUrl = "https://harshachandimal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harsha Chandimal — Full-Stack & AI/ML Engineer",
  description:
    "Computer Science undergraduate building intelligent full-stack systems that think, predict, and explain. Full-stack development with React, Next.js, Laravel, and applied AI/ML with PyTorch and Scikit-learn.",
  keywords: [
    "Harsha Chandimal",
    "Full-Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "React",
    "Next.js",
    "Laravel",
    "PyTorch",
    "University of Westminster",
  ],
  authors: [{ name: "Harsha Chandimal" }],
  openGraph: {
    title: "Harsha Chandimal — Full-Stack & AI/ML Engineer",
    description:
      "I build intelligent full-stack systems that think, predict, and explain.",
    url: siteUrl,
    siteName: "Harsha Chandimal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Chandimal — Full-Stack & AI/ML Engineer",
    description:
      "I build intelligent full-stack systems that think, predict, and explain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}