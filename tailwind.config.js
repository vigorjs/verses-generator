import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animasiBintang: {
          '0%': {
            transform: "translate(0px, 0px) rotate(-45deg)"
          },
          '100%': {
            transform: "translate(-750px, 100vh) rotate(-45deg)",
            opacity: "0"
          }
        },
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        moveCircles: {
          '0%': { transform: "translate(-50%, -50%)"},
          '50%': { transform: "translate(50%, 50%)"},
          '100%': { transform: "translate(-50%, -50%)"},
        },
        moveInCircle1: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(30px, -50px)' },
          '50%': { transform: 'translate(-60px, 30px)' },
          '75%': { transform: 'translate(30px, 60px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveInCircle2: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-50px, 30px)' },
          '50%': { transform: 'translate(60px, -30px)' },
          '75%': { transform: 'translate(-30px, -60px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveInCircle3: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, 40px)' },
          '50%': { transform: 'translate(-40px, -20px)' },
          '75%': { transform: 'translate(40px, -40px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveInCircle4: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-60px, 40px)' },
          '50%': { transform: 'translate(40px, -40px)' },
          '75%': { transform: 'translate(-40px, 60px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        gradient: 'gradientAnimation 15s ease infinite',
        moveInCircle1: 'moveInCircle1 20s ease-in-out infinite alternate',
        moveInCircle2: 'moveInCircle2 25s ease-in-out infinite alternate-reverse',
        moveInCircle3: 'moveInCircle3 30s ease-in-out infinite alternate',
        moveInCircle4: 'moveInCircle4 35s ease-in-out infinite alternate-reverse',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(120deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1, #fad0c4)',
      },
      boxShadow: {
        'custom-circle': '0px 0px 92px 6px rgba(162,0,255,0.35)',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      ),
      addUtilities({
        '.circle': {
          position: 'absolute',
          borderRadius: '100%',
        },
        '.circle1': {
          width: '550px',
          height: '550px',
          top: '30%',
          left: '36%',
          background: 'linear-gradient(90deg, rgba(107,7,217,1) 0%, rgba(126,15,142,1) 100%)',
          boxShadow: '0px 0px 92px 6px rgba(162,0,255,0.35)',
          animation: 'moveInCircle1 20s ease-in-out infinite alternate',
        },
        '.circle2': {
          width: '250px',
          height: '250px',
          top: '60%',
          left: '20%',
          background: 'linear-gradient(90deg, rgba(107,7,217,1) 0%, rgba(126,15,142,1) 100%)',
          boxShadow: '0px 0px 92px 6px rgba(162,0,255,0.35)',
          animation: 'moveInCircle2 25s ease-in-out infinite alternate-reverse',
        },
        '.circle3': {
          width: '100px',
          height: '100px',
          top: '40%',
          left: '70%',
          background: 'linear-gradient(90deg, rgba(107,7,217,1) 0%, rgba(126,15,142,1) 100%)',
          boxShadow: '0px 0px 92px 6px rgba(162,0,255,0.35)',
          animation: 'moveInCircle3 30s ease-in-out infinite alternate',
        },
        '.circle4': {
          width: '200px',
          height: '200px',
          top: '85%',
          left: '50%',
          background: 'linear-gradient(90deg, rgba(107,7,217,1) 0%, rgba(126,15,142,1) 100%)',
          boxShadow: '0px 0px 92px 6px rgba(162,0,255,0.35)',
          animation: 'moveInCircle4 35s ease-in-out infinite alternate-reverse',
        },
      });
    }),
  ],
}
