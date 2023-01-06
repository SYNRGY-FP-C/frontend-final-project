/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      ...colors,
      blind: {
        DEFAULT: "#454848",
        100: "#303030",
      },
    },
  },
};
