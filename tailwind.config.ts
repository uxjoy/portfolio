import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      container: {
        screens: {
          mobile: "600px",
          tablet: "900px",
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

      // Animation
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        mousePointer: "mousePointer 2s ease-in-out infinite",
        slider: "slider 25s linear infinite",
        slider2: "slider2 25s linear infinite",
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

        slider: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slider2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
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
