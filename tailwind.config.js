/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#0A0A5B",
        primary: "#152C85",
        secondary: "#2C72D4",
      },
    },
  },
  plugins: [],
};
