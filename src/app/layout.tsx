import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const font = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sohanur Rahman (Joy) | Product Designer",
  description:
    "Crafting modern, user-friendly designs with seamless precision, driven by an unwavering passion for my craft, I am dedicated to delivering contemporary, user-centric design while maintaining a profound enthusiasm for my work.",
  metadataBase: new URL("/assets/Meta_Image.jpg"),
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sohanur Rahman Joy",
  jobTitle: "Digital Product Designer",
  description:
    "I am a multi-disciplinary creative Digital Product Designer and solution provider, boasting nearly 5+ years of extensive experience in the creative industry",
  url: "https://www.uxjoy.info",
  sameAs: [
    "https://www.linkedin.com/in/sohanoor/",
    "https://dribbble.com/joy210",
    "https://www.behance.net/_joy",
    "https://github.com/Joy210",
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
        {/* <meta
          property="og:title"
          content="Explore the Creative Universe of Sohanur Rahman (Joy) | UX/UI Design Portfolio"
        />
        <meta
          property="og:description"
          content="I am Sohanur Rahman (Joy), Product Designer. I derive immense satisfaction from crafting experiences that prioritize users, infusing them with delight and a genuine human touch. My mission is to propel society forward by forging a seamless connection between individuals and technology, fostering understanding and innovation."
        /> */}
        <meta name="next-size-adjust" />
        <meta property="og:title" content="Sohanur Rahman (Joy) | UXJoy" />
        <meta
          property="og:description"
          content="Crafting modern, user-friendly designs with seamless precision, driven by an unwavering passion for my craft, I am dedicated to delivering contemporary, user-centric design while maintaining a profound enthusiasm for my work."
        />
        <meta property="og:url" content="https://www.uxjoy.info" />
        <meta property="og:image" content="/assets/Meta_Image.jpg" />
        <meta property="og:site_name" content="Sohanur Rahman (Joy) | UXJoy" />
        <meta
          property="og:keywords"
          content="Sohanur Rahman (Joy), Product Designer, UX Designer, User Centered Product Designer, User Experience Designer, Human Experience Designer, Problem Solver, Researcher, AR & VR Enthusiast, joy210, _joy, sohanoor, uxjoy, Sohanur Rahman Joy, sohanoor, sohanur, Sohanur Rahman Joy - Product Designer, Dhaka, Bangladesh"
        />
        <meta property="og:type" content="website" />

        <meta
          name="keywords"
          content="Sohanur Rahman (Joy), Product Designer, UX Designer, User Centered Product Designer, User Experience Designer, Human Experience Designer, Problem Solver, Researcher, AR & VR Enthusiast, joy210, _joy, sohanoor, uxjoy, Sohanur Rahman Joy, sohanoor, sohanur, Sohanur Rahman Joy - Product Designer, Dhaka, Bangladesh"
        />

        <link rel="icon" href="/favicon.svg" sizes="any" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </head>

      <body className={font.className}>
        <img src="" alt="" />
        {children}
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
