/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        seconday: {
          100: "E2E2D5",
          200: "888883",
        },
      },
    },
  },
  plugins: [],
};
