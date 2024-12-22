import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        facebook: "#316ff6",
        dribbble: "#d85888",
        linkedin: "#0a66c2",
        behance: "#053eff",
        twitter: "#1d9bf0",
        github: "#2b3137",
        whatsapp: "#25d366",

        primary: {
          "50": "#f2fce9",
          "100": "#e1f8cf",
          "200": "#c5f1a5",
          "300": "#9ee66e",
          "400": "#7dd744",
          "500": "#5dbd25",
          "600": "#469719",
          "700": "#377318",
          "800": "#2f5b19",
          "900": "#2a4e19",
          "950": "#122b08",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: "1rem",

        // screens: {
        //   mobile: "600px",
        //   tablet: "900px",
        //   desktop: "1300px",
        // },
      },

      fontSize: {
        "7xl": "5rem",
        "8xl": "5.5rem",
        "9xl": "7.5rem",
        "264": "264px",
        "32": "32px",
      },

      fontWeight: {
        medium: "450",
        semi: "520",
      },

      lineHeight: {
        normal: "1.6",
      },

      space: {
        "120": "120px",
      },

      padding: {
        "120": "120px",
        "100": "100px",
        "46": "11.5rem",
      },

      // Animation
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",

        mousePointer: "mousePointer 2s ease-in-out infinite",

        slidtoleft: "marquee 30s linear infinite",
        slidtoleft2: "marquee2 30s linear infinite",

        slidetoright: "slidetoright 60s linear infinite",
        slidetoright2: "slidetoright2 60s linear infinite",

        imageSlider: "marquee 60s linear infinite",
        imageSlider2: "marquee2 60s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },

        slidetoright: {
          "100%": { transform: "translateX(0%)" },
          "0%": { transform: "translateX(-100%)" },
        },
        slidetoright2: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(0%)" },
        },

        mousePointer: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
