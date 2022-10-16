/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Nunito: 'Nunito'
    },
    colors:{
      csmain: "#212121",
      csside: "#323232",
      csblue: "#1EBCFA",
      cspink: "#EF629F",
    },
    extend: {},
  },
  plugins: [],
}