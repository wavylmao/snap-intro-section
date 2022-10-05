/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['"Epilogue"', 'sans-serif'],
      },
      colors: {
        "medium-gray": "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
