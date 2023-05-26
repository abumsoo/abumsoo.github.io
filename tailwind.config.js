/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: { 
      colors: {
        'pg-grey-dark': '#323139',
        'pg-grey-light': '#47464d',
        'pg-pink': '#bb569b',
        'pg-blue': '#3788ae',
      },
    },
  },
  plugins: [],
}

