/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      spacing: {
        "hero-w": "406px",
        "hero-h": "541px",
      },
      fontFamily: {
        epilogue: ['"Epilogue"', "sans-serif"],
      },
      colors: {
        "medium-gray": "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
