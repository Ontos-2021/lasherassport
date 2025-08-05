module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'las-heras': {
          'green': '#22c55e',
          'dark-green': '#16a34a',
          'black': '#1f2937'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'body': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero/cancha-aerea.jpg')"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
