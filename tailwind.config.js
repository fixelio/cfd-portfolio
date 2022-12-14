/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
