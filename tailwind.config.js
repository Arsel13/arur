/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fiexen: ["Studio Feixen Sans", "sans-serif"],
      },
      borderRadius: {
        fullest: "100%",
      },
      backgroundImage: {
        banner: 'url("/public/images/banner.webp")',
      },
      backgroundColor: {
        themeOrange: "#FF745A",
        themeOrange2: "#FCCDC4",
      },
      colors: {
        themeOrange: "#FF745A",
        themeOrange2: "#FCCDC4",
      },
    },
  },
  plugins: [],
};
