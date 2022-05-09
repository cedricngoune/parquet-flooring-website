module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-cover": "url('/src/assets/images/banner.jpg')",
      },
      margin: {
        "2em": "2em",
        "4em": "4em",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Helvetica: ["Helvetica", "sans-serif"],
      Lato: ["Lato"],
      Karla: ["Karla"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
