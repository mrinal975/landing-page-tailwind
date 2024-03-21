/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "DM Serif Display",
      secondary: "Jost",
    },
    backgroundColor: {
      hero: "url(/assets/hero/bg.jpg)",
      grid: "url(/assets/grid.png)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF5A5F",
          hover: "#FF7B7F",
        },
        secondary: "#484848",
        accent: {
          DEFAULT: "#00A699",
          secondary: "#FF5A5F",
          hover: "#00C4B3",
        },
      },
    },
  },
  plugins: [],
};
