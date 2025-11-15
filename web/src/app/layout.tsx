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
  title: "Fjalë të Abdullah ibn al-Mubarak",
  description:
    "Përzgjedhje thëniesh dhe transmetimesh të Imam Abdullah ibn al-Mubarak rreth lotit dhe qarjes nga frika e Allahut.",
  metadataBase: new URL("https://agentic-bbacd1bf.vercel.app"),
  openGraph: {
    title: "Fjalë të Abdullah ibn al-Mubarak",
    description:
      "Zgjidhje fjalësh të Imam Abdullah ibn al-Mubarak që nxisin sinqeritet, pendim dhe lot në adhurim.",
    url: "https://agentic-bbacd1bf.vercel.app",
    siteName: "Fjalë të Abdullah ibn al-Mubarak",
    locale: "sq_AL",
    type: "website",
  },
  alternates: {
    canonical: "https://agentic-bbacd1bf.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
