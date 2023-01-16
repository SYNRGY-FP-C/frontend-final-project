/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      ...colors,
      primary: {
        1: "#23372B",
        2: "#335346",
        3: "#437167",
      },
      secondary: {
        1: "#538F8D",
        2: "#65B0B6",
        3: "#7BD1E2",
      },
      base: {
        100: "#171717",
        200: "#454848",
        300: "#808080",
        400: "#9F9F9F",
        500: "#BFBFBF",
        600: "#DFDFDF",
        700: "#EBE9EC",
        800: "#F0F0F0",
        900: "#FAFAFB",
      },
      error: {
        DEFAULT: "#F76C64",
      },
      warning: {
        DEFAULT: "#FA962D",
      },
      success: {
        DEFAULT: "#007360",
      },
      info: {
        DEFAULT: "#265C91",
      },
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
};
