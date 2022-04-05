const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/shared/components/"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
    },
  },
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
