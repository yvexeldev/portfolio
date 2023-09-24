/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js,html,tsx,jsx}"
  ],
  theme: {
    extend: {
      container: {

        center: true
      },
      fontFamily: {
        biotif: ["Biotif"],
        neuzerit: ["Neuzerit Grotesk"]
      }
    },
  },
  plugins: [],
}

