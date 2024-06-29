import type { Config } from "tailwindcss";

// Extra Accent Colors (#ff0095 , #8800ff , #6f00ff , #00ffea , #ff00c3, #A14FF3)

// Extra Accent-Color Hover (#6112c9 , #6300e4)

// Extra Light Colors (#e6e6e6 , #cccccc)

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "968px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        list: "#27272c",
        scrollArea: "#232329",
        light: "#c5bebe",
        lightList: "#cccccc",
        lightScrollArea: "#e6e6e6",
        extraLight1: "#ff00c3",

        accent: {
          DEFAULT: "#6f00ff",
          hover: "#6112c9",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
