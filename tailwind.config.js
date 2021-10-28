module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        beat: 'beat 5s ease-out infinite ',
        bounceSlow:'bounce 1s  ',
        animateModal:'animateModal 0.5s ease-out forwards'
      },
      keyframes:{
        beat:{
          '0%,100%': {transform:'scale(1)'},
          '25%': { transform:'scale(1.2)'}
        },
        animateModal :{
          '0%': {
            top: '-100px'
          },
          '100%': {
            top:'380px',
        
          }
        },
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
