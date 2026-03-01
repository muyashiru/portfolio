/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d59f2",
        "neo-yellow": "#FFD700",
        "neo-blue": "#0d59f2",
        "neo-black": "#0d121c",
        "neo-white": "#f8f9fc",
        "comic-red": "#FF4D4D",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #0d121c',
        'neo-sm': '2px 2px 0px 0px #0d121c',
        'neo-lg': '8px 8px 0px 0px #0d121c',
        'neo-hover': '2px 2px 0px 0px #0d121c',
      }
    },
  },
  plugins: [],
}
