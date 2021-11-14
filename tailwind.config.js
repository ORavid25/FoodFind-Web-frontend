module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        beat: 'beat 5s ease-out infinite ',
        bounceSlow:'bounce 1s  ',
        animateModal:'animateModal 0.5s ease-out forwards',
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      keyframes:{
        beat:{
          '0%,100%': {transform:'scale(1)'},
          '25%': { transform:'scale(1.2)'}
        },
        animateModal :{
          '0%': {
            top: '-20px'
          },
          '100%': {
            top:'200px',
        
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
