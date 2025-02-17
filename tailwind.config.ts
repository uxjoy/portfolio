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
        bgColor: "#0D1D17",

        brand0: "#874BF6",
        brand1: "#5DBD25",
        brand2: "#1882FF",
        brand3: "#FFC60A ",
        brand4: "#38BDF8",

        primary: {
          default: "#9AE66E",

          "50": "#F0FCE9",
          "100": "#DEF8CF",
          "200": "#C1F1A5",
          "300": "#9AE66E",
          "400": "#7AD744",
          "500": "#5DBD25",
          "600": "#479719",
          "700": "#397318",
          "800": "#315B19",
          "900": "#2C4E19",
          "950": "#19300B",
        },

        secondary: {
          default: "#0ea5e9",

          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "950": "#082f49",
        },

        whiteAlpha: {
          "2": "rgba(255, 255, 255, 0.02)",
          "4": "rgba(255, 255, 255, 0.04)",
          "6": "rgba(255, 255, 255, 0.06)",
          "8": "rgba(255, 255, 255, 0.08)",
          "10": "rgba(255, 255, 255, 0.10)",
          "12": "rgba(255, 255, 255, 0.12)",
          "56": "rgba(255, 255, 255, 0.56)",
          "64": "rgba(255, 255, 255, 0.64)",
          "72": "rgba(255, 255, 255, 0.72)",
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

        screens: {
          // mobile: "600px",
          // tablet: "900px",
          desktop: "1300px",
        },
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

      animation: {
        mousePointer: "mousePointer 2s ease-in-out infinite",
      },

      keyframes: {
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
