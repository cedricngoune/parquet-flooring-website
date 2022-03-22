module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "2em": "2em",
        "4em": "4em",
      },
    },
    fontFamily: {
      body: ["Poppins", "Roboto"],
      sans: ["Helvetica"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
