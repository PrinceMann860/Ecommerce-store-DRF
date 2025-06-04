/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height:{
        '128':'32rem',
        '150': '37,5rem',
        '100': '25rem',
        '120': '30rem',
        '200':'50rem',
        '220':'55rem',
      },
      width:{
        '128':'32rem',
        '150': '37,5rem',
        '160': '40rem',
        '180':'45rem',
        '200':'50rem',
        '220':'55rem',
      },
    },
  },
  plugins: [],
}

