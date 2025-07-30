/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage:{
        bgHero: 'linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(./assets/hero.png)',
      },
      colors:{
        bgDegrees: 'rgba(0,15,152,0.3)',
        title: '#212EA0',
        titleH2: '#000F38',
        paragraph: '#676767',
        inputText: '#EBECFE',
        borderTop: '#797979',
        video: 'rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [],
}
