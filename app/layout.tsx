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
  title: "Santosh Dahal — Full Stack Developer | Next.js, React, Node.js",
  description:
    "Full Stack Developer based in Lokanthali, Kathmandu, Nepal with ~2 years experience building scalable web and cross-platform mobile applications in Next.js, React, React Native, Node.js, and TypeScript.",
  keywords: [
    "Santosh Dahal",
    "Full Stack Developer Nepal",
    "Next.js Developer Kathmandu",
    "React Native Developer",
    "Node.js",
    "TypeScript",
    "MysteryHimalaya",
    "Rentisity",
    "Housebuild",
    "HuntGate",
    "HelloTechWorld",
  ],
  authors: [{ name: "Santosh Dahal", url: "https://github.com/Santoshdahal145" }],
  creator: "Santosh Dahal",
  openGraph: {
    title: "Santosh Dahal — Full Stack Developer",
    description:
      "Full Stack Developer based in Lokanthali, Kathmandu, Nepal. Specialized in Next.js, React, React Native, Expo, and Node.js.",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090b10] text-[#f3f4f6] selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
