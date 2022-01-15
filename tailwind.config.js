module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    screens : {
      'sm': {'max': '575.98px'},
      'md': {'min': '576px', 'max': '767.98px'},
      'lg': {'min': '768px', 'max': '991.98px'},
      'xl': {'min': '992px', 'max': '1199.98px'},
      '2xl': {'min': '1200px'},
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
      margin: ['hover', 'focus'],
    },
  },
  plugins: [],
};
