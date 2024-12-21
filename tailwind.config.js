/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#EB6C5D", // Similar pink shade
        },
        background: "#fdf4f2", // Light pinkish background
      },
    },
  },
  plugins: [],
};
