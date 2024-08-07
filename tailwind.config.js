/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //0d1b53 color letras oscuras
        "gray-20": "#e7e8ea", //fondo
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#808BB5",
        "primary-100": "#0D1B53", //header
        "primary-300": "#808BB5",
        "primary-500": "#00CE7C",
        "secondary-400": "#00CE7C", 
        "secondary-500": "#00CE7C",//Botones
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/TuMejor.webp')",
        abstractwaves: "url('./assets/AbstractWaves.webp')",
        sparkles: "url('./assets/Sparkles.webp')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
