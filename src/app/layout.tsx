import { Analytics } from "@vercel/analytics/react";
import { Sora } from "next/font/google";
import "./globals.css";

// Import Swiper styles
import { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Providers from "./providers";

const font = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sohanur Rahman (Joy) | Product Designer",
  description:
    "Delivering modern, user-friendly, and innovative design solutions with precision and passion, focused on creating user-centric experiences that prioritize functionality.",
  // description:
  //   "Crafting modern, user-friendly designs with seamless precision, driven by an unwavering passion for my craft, I am dedicated to delivering contemporary, user-centric design while maintaining a profound enthusiasm for my work.",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : `https://uxjoy.info/`
  ),

  openGraph: {
    url: "https://www.uxjoy.info",
    siteName: "Sohanur Rahman (Joy) | Product Designer",
    type: "website",
    images: [
      {
        url: new URL(
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/assets/Meta_Image.jpg"
            : `https://uxjoy.info/assets/Meta_Image.jpg`
        ),
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  },

  authors: [{ name: "Joy" }],

  keywords: [
    "Sohanur Rahman (Joy)",
    "Product Designer",
    "UX Designer",
    "User-Centered Product Designer",
    "User Experience Designer",
    "Human Experience Designer",
    "Problem Solver",
    "Researcher",
    "AR & VR Enthusiast",
    "joy210",
    "_joy",
    "sohanoor",
    "uxjoy",
    "Sohanur Rahman Joy",
    "sohanoor",
    "sohanur",
    "Sohanur Rahman Joy - Product Designer",
    "Dhaka",
    "Bangladesh",
  ],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sohanur Rahman Joy",
  jobTitle: "Senior Product Designer",
  description:
    "I am a multi-disciplinary creative Digital Product Designer and solution provider, boasting nearly 5+ years of extensive experience in the creative industry",
  url: "https://www.uxjoy.info",
  sameAs: [
    "https://www.linkedin.com/in/uxjoy",
    "https://dribbble.com/joy210",
    "https://www.behance.net/_joy",
    "https://github.com/uxjoy",
  ],
  worksFor: {
    "@type": "Organization",
    name: "UXJoy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="next-size-adjust" />
        <meta property="og:locale" content="en_US" />

        <link rel="icon" href="/favicon.svg" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </head>

      <body className={`dark:bg-zinc-950 ${font.className}`}>
        <div className="grain"></div>

        <Providers>{children}</Providers>

        {/* CTA */}
        {/* <BackToTop /> */}

        <Analytics />

        {/* //////////// SEO /////////////// */}
        <div className="seo social-links hidden">
          <div className="h1">
            Welcome to the Portfolio of Sohanur Rahman Joy
          </div>

          <a href="https://dribbble.com/joy210" id="dribbble">
            Dribbble: https://dribbble.com/joy210
          </a>
          <a href="https://www.linkedin.com/in/sohanoor/" id="linkedin">
            LinkedIn: https://www.linkedin.com/in/sohanoor/
          </a>
          <a href="https://www.behance.net/_joy" id="behance">
            Behance: https://www.behance.net/_joy
          </a>
          <a href="https://www.uxjoy.info" id="uxjoy">
            Website: https://www.uxjoy.info
          </a>
        </div>
        {/* //////////// SEO /////////////// */}
      </body>
    </html>
  );
}
