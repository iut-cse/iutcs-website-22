/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins, sans-serif",
      secondary: "Nunito, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "6rem",
      },
    },
    extend: {
      colors: {
        dark: "#1E1E1E",
        navyBlue: "#060D20",
        navyBlueLight: "#0B1838",
        darkBlue: "#030610",
        darkBlueLight: "#22242F",
        lightBlue: "#2B70D5",
        transparent: "transparent",
      },
      backgroundImage: {
        overlay: "url('./src/assets/Gradient.svg')",
        circleBg: "url('./src/assets/circleGradient.png')",
      },
    },
  },
  plugins: [],
};
