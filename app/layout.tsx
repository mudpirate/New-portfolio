import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx
export const metadata: Metadata = {
  title: "Nomesh Singh Portfolio",
  description:
    "Full Stack Developer | Building real life & AI-powered projects.",
  openGraph: {
    title: "Nomesh Singh Portfolio",
    description:
      "Full Stack Developer | Building real life & AI-powered projects.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/r.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
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
