/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nunito': 'Nunito'
      },
      colors:{
        '_grey': '#323232',
        '_darkgrey': '#212121',
        '_blue': '#1ebcfa',
        '_pink': '#ef629f'
      }
    },
  },
  plugins: [],
}