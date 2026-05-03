import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Nomesh Singh",
  description: "Full Stack Developer | Building real life & AI-powered projects.",
  icons: { icon: "/rr.jpeg" },
  openGraph: {
    title: "Nomesh Singh Portfolio",
    description: "Full Stack Developer | Building real life & AI-powered projects.",
    url: "https://nomeshportfoliowebsite.vercel.app",
    type: "website",
    images: [
      {
        url: "https://nomeshportfoliowebsite.vercel.app/11.PNG",
        width: 1200,
        height: 630,
        alt: "Nomesh Singh Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/rr.jpeg" sizes="any" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${GeistSans.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
