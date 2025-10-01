/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "cz-orange": "#ff7a2f",
        "cz-pink": "#ff4d7e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
