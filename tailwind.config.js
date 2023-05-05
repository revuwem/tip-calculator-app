/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          dark: "hsl(183, 100%, 15%)",
          strong: "hsl(172, 67%, 45%)",
          light: "hsl(173, 61%, 77%)",
          "dark-grayish": "hsl(186, 14%, 43%)",
          grayish: "hsl(184, 14%, 56%)",
          "light-grayish": "hsl(185, 41%, 84%)",
          "very-light-grayish": "hsl(189, 41%, 97%)",
        },
      },
    },
  },
  plugins: [],
};
