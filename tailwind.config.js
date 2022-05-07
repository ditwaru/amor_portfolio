module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'righteous': ['Righteous'],
        'bitter': ['Bitter']
      },
      colors: {
        'yankeeBlue': '#485e8c'
      }
    },
  },
  plugins: [],
}