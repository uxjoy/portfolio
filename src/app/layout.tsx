import "@splidejs/react-splide/css";
import { Analytics } from "@vercel/analytics/react";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Import Swiper styles
import Clarity from "@microsoft/clarity";
import { Metadata } from "next";
import Script from "next/script";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BackToTop from "../../components/BackToTop";
import ClarityProvider from "../../components/ClarityProvider";
import Providers from "./providers";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

// Make sure to add your actual project id instead of "yourProjectId".
const projectId = "v058hsuwuu";
Clarity.init(projectId);

export const metadata: Metadata = {
  title: "Sohanur Rahman (Joy) | Product Designer",
  description:
    "Delivering modern, user-friendly, and innovative design solutions with precision and passion, focused on creating user-centric experiences that prioritize functionality.",
  // description:
  //   "Crafting modern, user-friendly designs with seamless precision, driven by an unwavering passion for my craft, I am dedicated to delivering contemporary, user-centric design while maintaining a profound enthusiasm for my work.",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : `https://uxjoy.dev/`,
  ),

  openGraph: {
    url: "https://www.uxjoy.dev",
    siteName: "Sohanur Rahman (Joy) | Product Designer",
    type: "website",
    images: [
      {
        url: new URL(
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/assets/Meta_Image.jpg"
            : `https://uxjoy.dev/assets/Meta_Image.jpg`,
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
  url: "https://www.uxjoy.dev",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>

      <body
        className={`dark:bg-bgColor ${font.className}`}
        suppressHydrationWarning
      >
        <Providers>
          <ClarityProvider />
          {children}
        </Providers>

        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        >
          {JSON.stringify(person)}
        </Script>

        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55RHZQ55');
          `}
        </Script>

        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
