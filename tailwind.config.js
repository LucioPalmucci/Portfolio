/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        40:"40%",
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown25: {
          '0%': { transform: 'translateY(-25%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        show:{
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
      },
      animation: {
        slideDown: 'slideDown 1.5s ease-out',
        slideDown25: 'slideDown25 1.5s ease-out',
        slideLeft: 'slideLeft 1.5s ease-out',
        slideLeft2: 'slideLeft 1.5s ease-out fowards',
        slideRight: 'slideRight 1.5s ease-out',
        show: 'show 3s ease-out',
      },
    },
  },
  plugins: [],
}

