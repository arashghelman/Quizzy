module.exports = {
  // places where tailwind classes are used.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        turquoise: "#90d9c0",
        orange: "#ffa607",
        blue: {
          DEFAULT: "#95bbea",
          1000: "#31426b",
        },
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
