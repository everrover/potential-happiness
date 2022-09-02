/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '320px',
        'xl2': '1440px',
      },
      colors: {
        'tag-blue': '#bfdbfe',
        'tag-green': '#bbf7d0',
        'tag-indigo': '#c7d2fe',
        'tag-purple': '#e9d5ff',
        'tag-yellow': '#fef08a',
        'tag-pink': '#fbcfe8',
        'tag-red': '#fecaca',
        'zinc':{
          '400': "#b1b1bb",
          '900': '#0c111a',
          '1000': '#010712'
        },
        'code-block':'#00090c'
      },
      fontFamily: {
        'sans': ['Roboto', 'Ubuntu', "Helvetica Neue", 'sans-serif'],
        'heading': ['Outfit', 'sans-serif'],
        'heading-one': ['Sanchez', 'serif'],
        'code': ['Fira code', 'monospace']
      }
    },
  },
  plugins: [],
}