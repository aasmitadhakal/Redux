/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      height: {
        '128': '35rem',
        '120': '28rem',
        '84':'26rem',
      },
      colors: {
        'green': '#8abeeb',
       
      },
    },
  },
  plugins: [],
}
