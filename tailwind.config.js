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
        'base': '#e9eaec',
        'hoverbase': '#d8d8da',
      }
    },
  },
  plugins: [
    
  ],
}

