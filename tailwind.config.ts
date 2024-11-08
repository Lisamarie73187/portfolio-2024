import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      margin: {
        '30': "16vw",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        youngSerif: ['Young Serif', 'serif'],
        openSans: ['Open Sans', 'sans-serif'],
        newsCycle: ['News Cycle', 'sans-serif'],
      },
      variants: {
        extend: {
          scale: ['hover'],
        },
      },
    },
  },
  plugins: [],
};
export default config;
