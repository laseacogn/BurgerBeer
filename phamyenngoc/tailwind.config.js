/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), flowbite.plugin(),
function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.fill-available': {
          width: '-webkit-fill-available',
        },
      };
      addUtilities(newUtilities);
    },],
}
