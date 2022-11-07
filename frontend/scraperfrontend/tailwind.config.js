module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
  theme: {
    extend: {      
      colors: {
        teal: {
        900: '#164e63',

    },

  }}},
  plugins: [require('@tailwindcss/forms')],
}


