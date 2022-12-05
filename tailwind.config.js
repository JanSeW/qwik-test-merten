/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        ginger: ["Ginger"],
        "main-regular": ['"Merriweather"', "regular"],
        "sec-regular": ['"Open Sans"', "regular"],
      },
      colors: {
        lightBlue: {
          DEFAULT: "var(--lightBlue)",
        },
        lightBlueOp: {
          DEFAULT: "var(--lightBlueOp)",
        },
        darkBlue: {
          DEFAULT: "var(--darkBlue)",
        },
        midGray: {
          DEFAULT: "var(--midGray)",
        },
        cookieTool: {
          DEFAULT: "var(--cookieTool)",
        },
        lightBlue: { DEFAULT: "var(--lightBlue)" },
        darkBlue: { DEFAULT: "var(--darkBlue)" },
        green: { DEFAULT: "var(--green)" },
        orange: { DEFAULT: "var(--orange)" },
        gray: { DEFAULT: "var(--gray)" },
        darkGray: { DEFAULT: "var(--darkGray)" },
        lightGray: { DEFAULT: "var(--lightGray)" },
        white: { DEFAULT: "var(--white)" },
      },
      screens: {
        c1: "1366px",
        c2: "1440px",
        c3: "1536px",
        c4: "1600px",
        c5: "1920px",
        c6: "2560px",
        c7: "3440px",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
