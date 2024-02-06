module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color--primary)",
        secondary: "var(--color--secondary)",
        lightGray: "var(--Base-Gray-Ultra-light)",
        mediumGray: "var(--Base-Gray-Medium)",
      },
      fontFamily: {
        primary: "var(--font--primary)",
        secondary: "var(--font--secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
