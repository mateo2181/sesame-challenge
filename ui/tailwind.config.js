/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F8FAFC'
        },
        primary: '#6C63FF'
      }
    },
  },
  plugins: [],
}

