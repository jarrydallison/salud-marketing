import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        app: "25rem", // 400px
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: {
        nav: "Titillium Web",
        subheader: "Outfit",
      },
      textColor: {
        nav: "#C6FFD6",
      },
      colors: {
        background: "#41DF09",
        homecard: "rgba(255, 254, 254, 0.72)",
        homeText: "#1C7635",
      },
      maxWidth: {
        app: "68rem", // 1094px
        card: "20rem",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
