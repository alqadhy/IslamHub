// Metadata
import type { Metadata } from "next";

// Google Fonts
import { Inter, Cairo, Amiri } from "next/font/google";

// Main CSS File
import "../styles/index.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "IslamHub",
  description:
    "IslamHub is a platform where users can read Quran, browse and read authentic Hadith, find Qibla direction, and determine prayer times.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cairo.variable} ${amiri.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
