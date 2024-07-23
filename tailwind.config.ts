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
      height: {
        '48': '12rem',
        '60': '15rem',
        '72': '18rem',
      },
      maxWidth: {
        '3xl': '48rem',
        '4xl': '56rem',
      },
      colors: {
        mygray: {
          50: '#08090f',
          100: '#161c23'
        },
    },
    keyframes:{
      gradient:{
        "0%": { backgroundPosition: "0% 50%"},
        "100%": { backgroundPosition: "100% 50%"}
      }
    },
    animation:{
      gradient: "gradient 3s linear infinite"
    }
    },
  },
  plugins: [],
};
export default config;
