module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1.5s ease-out",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontSize: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [],
};
