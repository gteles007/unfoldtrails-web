import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unfold Trails — Walk, Ride, Explore.",
  description:
    "Your ultimate companion for the Camino de Santiago and trail adventures. GPS-triggered challenges, digital credencial, scavenger hunts, and more.",
  keywords: [
    "Camino de Santiago",
    "trail app",
    "hiking app",
    "pilgrimage",
    "GPS trails",
    "scavenger hunts",
    "digital credencial",
  ],
  openGraph: {
    title: "Unfold Trails — Walk, Ride, Explore.",
    description:
      "Your ultimate companion for the Camino de Santiago and trail adventures.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
