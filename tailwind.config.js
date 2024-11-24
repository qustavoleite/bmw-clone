/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        128: '512px', 
        144: '1100px', 
        160: '640px', 
      },
    },
  },
  plugins: [],
}