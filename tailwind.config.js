/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        128: '512px', 
        144: '1260px', 
        130: '1200px',
        160: '640px', 
      },
    },
  },
  plugins: [],
}