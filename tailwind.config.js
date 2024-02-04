/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ], 
  theme: {
    extend: {
      colors:{
        'iconYube': '#ed1212',
        'base': '#C7C8CC',
        'hoverbase': '#B4B4B8',
      }
    },
  },
  plugins: [
    
  ],
}

