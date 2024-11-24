import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bgwhite': "url('/background-white.png')",
        'bgdark': "url('/background-dark.png')",
      },
      backdropContrast: {
        85: ".85"
      },
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
        notosans: ['"Noto Sans"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
        kanit: ['"Kanit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;