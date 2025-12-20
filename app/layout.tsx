import type { Metadata } from "next";
import { Lexend, Lexend_Giga } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const lexend_giga = Lexend_Giga({
  subsets: ["latin"],
  variable: "--font-lexend_giga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Web Developer",
  description:
    "Portfolio showcasing web development projects with focus on modern, performant solutions.",
  openGraph: {
    title: "Your Name | Web Developer",
    description:
      "Portfolio showcasing web development projects with focus on modern, performant solutions.",
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
      <body
        className={`${lexend.variable} ${lexend_giga.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
