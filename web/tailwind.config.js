/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#FFA903',
        mydark: '#010D33',
        mypurple: '#57112F'
      }
    },
  },
  plugins: [],
}