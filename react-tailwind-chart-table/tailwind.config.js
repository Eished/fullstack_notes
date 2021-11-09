module.exports = {
  // purge: {
  //   layers: ['components', 'utilities'],
  //   content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
  // },
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
