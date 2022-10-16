/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'phone': '280px',
      'desktop': '710px'
    },
    extend: {
      fontFamily: {
        SourceSansPro: 'Source Sans Pro',
        Poppins : 'Poppins',
        Comfortaa: 'Comforta'
      },
      colors:{
        SPmain: "#171A21",
        SPside: "#414141",
        SPbtn: "#222632"
      },
    },
  },
  plugins: [],
}