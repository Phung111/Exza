/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}", "./index.html"],
  theme: {
    extend: {
      colors: {
        default: "#fff",
        primary: "#06C",
        primary_dark: "#003E7B",
        secondary: "#fff",
        neutral: "#fff",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
