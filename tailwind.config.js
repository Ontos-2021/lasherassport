module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'las-heras': {
          'green': '#00C896',      // Verde principal del logo
          'dark-green': '#00A67C',  // Verde más oscuro para hover/estados
          'yellow': '#FFB800',      // Amarillo/dorado del balón y texto
          'dark-yellow': '#E6A600', // Amarillo oscuro para hover
          'black': '#0D0D0D',       // Negro profundo del fondo del logo
          'gray-dark': '#1A1A1A'    // Gris oscuro para fondos alternativos
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
