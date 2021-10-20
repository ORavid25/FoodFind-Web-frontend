module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        beat: 'beat 5s ease-out infinite ',
        bounceSlow:'bounce 3s infinite',
      },
      keyframes:{
        beat:{
          '0%,100%': {transform:'scale(1)'},
          '25%': { transform:'scale(1.2)'}
        },
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
