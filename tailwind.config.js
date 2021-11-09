module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          light: '#414141'
        },
        gray: {
          DEFAULT: '#ebebeb',
          dark: '#757575',
          'semi-dark': '#757575b0'
        },
        pink: {
          hot: '#e93d7c'
        }
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
      },
      spacing: {
        '120': '30rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
