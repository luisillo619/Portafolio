/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 

   
  ],
  theme: {
    extend: {
      screens: {
        "xs": "350px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
