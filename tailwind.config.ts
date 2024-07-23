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
      move1: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(100px, 100px)' },
      },
      move2: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-100px, 100px)' },
      },
      move3: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(100px, -100px)' },
      },
      move4: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-100px, -100px)' },
      },
      zoomIn: {
        '0%, 100%': { transform: 'scale(0.8)' },
        '50%': { transform: 'scale(1)' },
      },
      gradient:{
        "0%": { backgroundPosition: "0% 50%"},
        "100%": { backgroundPosition: "100% 50%"}
      },
      pulse: {
        '0%, 100%': { borderColor: '#3182ce' }, // Start and end with customBlue
        '25%': { borderColor: '#38a169' }, // Change to customGreen at 25%
        '50%': { borderColor: '#e53e3e', }, // Change to customRed at 50%
        '75%': { borderColor: '#e6d520' }, // Change back to customYellow at 75%
      },
    },
    animation:{
      gradient: "gradient 3s linear infinite",
      move1: 'move1 5s infinite',
      move2: 'move2 5s infinite',
      move3: 'move3 5s infinite',
      move4: 'move4 5s infinite',
      zoomIn: 'zoomIn 6s infinite',
      pulse: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  },
},
  plugins: [],
};
export default config;
