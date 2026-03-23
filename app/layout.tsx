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
  title: "Tracy — Deploy Your Own AI Agent. Your Server. Your Rules.",
  description:
    "Open-source AI agent framework. Self-hosted, end-to-end encrypted, model agnostic. Zero data leaks.",
  keywords: [
    "self-hosted AI agent",
    "private AI framework",
    "deploy AI agent",
    "knowledge base AI",
    "secure LLM",
    "RAG self-hosted",
    "air-gapped AI",
    "Tracy framework",
  ],
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
