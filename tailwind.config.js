const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {
  //     screens: {
  //       'xsm': '1600px',
  //     },
  //   },
  // },
  theme: {
    screens: {
      xs: "280px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
