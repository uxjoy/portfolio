import { Bricolage_Grotesque, Satisfy } from "next/font/google";
import "./globals.css";

import { Metadata } from "next";
import Providers from "./providers";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy",
});

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Something new is on the way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>

      <body
        className={`dark:bg-bgColor ${font.className} ${satisfy.variable}`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
