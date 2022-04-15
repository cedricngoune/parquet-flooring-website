module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "banner-cover": "url('/src/datas/images/bgCover.jpeg')",
      },
      margin: {
        "2em": "2em",
        "4em": "4em",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Helvetica: ["Helvetica", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
