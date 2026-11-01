import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://ashokbaniya.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} | ${personalInfo.role}`,
    template: `%s | ${personalInfo.name}`,
  },
  description:
    "Portfolio of Ashok Baniya, a Full-Stack Developer building modern web and mobile applications.",
  keywords: [
    "Ashok Baniya",
    "Full-Stack Developer",
    "Web Developer",
    "Android Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description:
      "Portfolio of Ashok Baniya, a Full-Stack Developer building modern web and mobile applications.",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description:
      "Portfolio of Ashok Baniya, a Full-Stack Developer building modern web and mobile applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
