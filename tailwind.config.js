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
        1: "#171717",
        2: "#454848",
        3: "#808080",
        4: "#9F9F9F",
        5: "#BFBFBF",
        6: "#DFDFDF",
        7: "#EBE9EC",
        8: "#F0F0F0",
        9: "#FAFAFB",
        10: "#FFFFFF",
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
