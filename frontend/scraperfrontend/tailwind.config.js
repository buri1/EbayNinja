module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/Listings/Listings.js",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    './*/*.html', 

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


