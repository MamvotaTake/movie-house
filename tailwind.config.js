/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins'
    },
    extend: {
      gridTemplateColumns: {
        'layout': '20px minmax(900px,1fr)',
      }

    },
  },
  plugins: [],
}

