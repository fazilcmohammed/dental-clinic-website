/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkblue : '#011632',
        bodytext : '#3C4959',
        lightblue : '#E6F6FE',
        skyblue : '#25B4F8',
        midblue : '#1376F8'
      }
    },
  },
  plugins: [],
}