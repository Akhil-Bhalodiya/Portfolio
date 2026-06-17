import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Akhil Bhalodiya | Frontend Developer",
  description: "Frontend Developer specializing in React & Next.js — building fast, interactive, high-performance web applications.",
  keywords: ["Akhil Bhalodiya", "Frontend Developer", "React", "Next.js", "JavaScript", "Portfolio"],
  authors: [{ name: "Akhil Bhalodiya" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
