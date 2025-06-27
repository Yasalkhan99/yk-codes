import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "../components/Starbackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YKCODES - Full Stack Developer Portfolio",
  description: "Yasal Khan - Full Stack Developer & UI/UX Enthusiast. Explore my projects, skills, and creative solutions in web development.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio", "Web Development"],
  authors: [{ name: "Yasal Khan" }],
  creator: "Yasal Khan",
  openGraph: {
    title: "YKCODES - Full Stack Developer Portfolio",
    description: "Yasal Khan - Full Stack Developer & UI/UX Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden overflow-y-auto`}>
        <div className="relative min-h-screen w-full">
          <StarsCanvas />
          {children}
        </div>
      </body>
    </html>
  );
}
