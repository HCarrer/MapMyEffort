/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      colors: {
        'navy-blue': '#101539',
        'light-blue': '#3BC6F3',
        'darker-blue': '#040610',
        'off-white': '#F1F1F1',
      },
    },
  },
  plugins: [],
}
