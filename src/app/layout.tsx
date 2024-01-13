import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

// Import Swiper styles
import "swiper/css";

const font = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joy | Product Designer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
