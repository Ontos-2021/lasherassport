---
applyTo: '**'
---

# Las Heras Sports · Guía de Desarrollo Frontend
*Guidelines técnicas para el equipo de desarrollo - Página web estática con GitHub Pages*

## 🎯 Objetivo del Proyecto

Desarrollar una landing page moderna y responsive para **Las Heras Sports** utilizando únicamente tecnologías frontend estáticas, optimizada para conversión y SEO local.

---

## 🛠️ Stack Tecnológico Obligatorio

### Tecnologías Base
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript ES6+** - Interactividad y funcionalidad
- **Tailwind CSS** - Framework de utilidades CSS

### Hosting y Deployment
- **GitHub Pages** - Hosting gratuito y automático
- **GitHub Actions** - CI/CD para builds automáticos

### Herramientas de Desarrollo
- **Tailwind CLI** - Para compilar CSS
- **Live Server** - Desarrollo local
- **Prettier** - Formateo de código
- **ESLint** - Linting de JavaScript

---

## 📁 Estructura de Proyecto

```
lasherassport/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── tailwind.css    # Tailwind compilado
│   │   └── custom.css      # Estilos personalizados
│   ├── js/
│   │   ├── main.js         # JavaScript principal
│   │   ├── components/     # Componentes JS modulares
│   │   └── utils/          # Utilidades y helpers
│   ├── images/
│   │   ├── hero/           # Imágenes del hero
│   │   ├── activities/     # Iconos de actividades
│   │   ├── gallery/        # Galería de fotos
│   │   └── logos/          # Logos y branding
│   └── icons/              # Iconos SVG
├── tailwind.config.js      # Configuración Tailwind
├── package.json            # Dependencias de desarrollo
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions
└── README.md
```

---

## 🎨 Guía de Diseño y UI

### Paleta de Colores (basada en branding)
```css
:root {
  --primary-green: #22c55e;    /* Verde principal Las Heras */
  --dark-green: #16a34a;       /* Verde oscuro */
  --accent-black: #1f2937;     /* Negro corporativo */
  --light-gray: #f3f4f6;       /* Fondo claro */
  --white: #ffffff;            /* Blanco puro */
  --text-gray: #4b5563;        /* Texto secundario */
}
```

### Tipografía
- **Principal**: Inter (Google Fonts)
- **Secundaria**: Roboto (para contenido)
- **Tamaños**: Sistema de escala Tailwind (text-sm, text-base, text-lg, etc.)

### Breakpoints (Tailwind default)
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 📱 Secciones Obligatorias

### 1. Hero Section
```html
<!-- Estructura básica -->
<section class="relative h-screen bg-cover bg-center" 
         style="background-image: url('assets/images/hero/cancha-aerea.jpg')">
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative z-10 flex items-center justify-center h-full text-center text-white">
    <div class="max-w-4xl px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Todo el deporte en un solo lugar
      </h1>
      <p class="text-xl md:text-2xl mb-8">
        Fútbol • Pádel • Hockey • Gym • Pileta
      </p>
      <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
        <button class="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold">
          Chateá con nuestro bot
        </button>
        <button class="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold">
          Reservá tu cancha
        </button>
      </div>
    </div>
  </div>
</section>
```

### 2. Actividades (Cards responsivas)
```html
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Nuestras Actividades</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <!-- Card ejemplo -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
        <div class="p-6 text-center">
          <i class="fas fa-futbol text-4xl text-green-500 mb-4"></i>
          <h3 class="text-xl font-semibold mb-2">Fútbol</h3>
          <p class="text-gray-600">Canchas 5, 7, 8 y 11. Escuela infantil y torneos internos.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. Otras secciones requeridas
- **Sobre Nosotros** - Historia y valores
- **Horarios y Tarifas** - Tabla responsive
- **Ubicación** - Mapa embebido de Google Maps
- **Contacto** - Formulario y datos de contacto

---

## ⚡ JavaScript - Funcionalidades Requeridas

### Componentes Interactivos
```javascript
// main.js estructura básica
class LasHerasApp {
  constructor() {
    this.initializeComponents();
    this.bindEvents();
  }

  initializeComponents() {
    this.navbar = new NavigationComponent();
    this.hero = new HeroComponent();
    this.activities = new ActivitiesComponent();
    this.contact = new ContactComponent();
  }

  bindEvents() {
    // Event listeners globales
    this.setupScrollEffects();
    this.setupMobileMenu();
    this.setupCTAButtons();
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new LasHerasApp();
});
```

### Funcionalidades Obligatorias
1. **Navegación móvil** - Hamburger menu responsive
2. **Scroll suave** - Entre secciones
3. **Animaciones de entrada** - Intersection Observer
4. **Formulario de contacto** - Validación frontend
5. **WhatsApp flotante** - Botón fijo
6. **Google Analytics** - Tracking de eventos
7. **Lazy loading** - Para imágenes

---

## 🚀 Configuración de Tailwind

### tailwind.config.js
```javascript
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
```

### Scripts de Build
```json
{
  "scripts": {
    "dev": "tailwindcss -i ./assets/css/input.css -o ./assets/css/tailwind.css --watch",
    "build": "tailwindcss -i ./assets/css/input.css -o ./assets/css/tailwind.css --minify",
    "serve": "live-server --port=3000"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "live-server": "^1.2.2"
  }
}
```

---

## 📊 SEO y Performance

### Meta Tags Obligatorios
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Las Heras Sports - Fútbol, Pádel y Gym en Lomas de Zamora</title>
  <meta name="description" content="Club deportivo en Lomas de Zamora. Fútbol, pádel, hockey, gimnasio y pileta. Av. Las Heras 1512. ☎️ 4288-1188">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Las Heras Sports - Todo el deporte en un lugar">
  <meta property="og:description" content="Club deportivo completo en Lomas de Zamora">
  <meta property="og:image" content="./assets/images/og-image.jpg">
  <meta property="og:url" content="https://lasherassports.github.io">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Las Heras Sports",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Las Heras 1512",
      "addressLocality": "Lomas de Zamora",
      "postalCode": "1832"
    },
    "telephone": "+54-11-4288-1188"
  }
  </script>
</head>
```

### Optimizaciones de Performance
- **Imágenes**: WebP con fallback a JPEG
- **Critical CSS**: Inline en el `<head>`
- **JavaScript**: Defer/async según necesidad
- **Lazy loading**: Para contenido below-the-fold
- **Minificación**: CSS y JS para producción

---

## 🔧 GitHub Actions - Deploy Automático

### .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build Tailwind CSS
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

---

## ✅ Checklist de Desarrollo

### Pre-desarrollo
- [ ] Configurar repositorio en GitHub
- [ ] Instalar dependencias de desarrollo
- [ ] Configurar Tailwind CSS
- [ ] Preparar assets (imágenes optimizadas)

### Durante desarrollo
- [ ] Estructura HTML semántica
- [ ] Responsive design (mobile-first)
- [ ] Accesibilidad (ARIA labels, contraste)
- [ ] Performance (lazy loading, optimización)
- [ ] SEO local (meta tags, schema)

### Pre-deploy
- [ ] Validar HTML (W3C Validator)
- [ ] Test responsive en múltiples dispositivos
- [ ] Verificar velocidad (PageSpeed Insights)
- [ ] Test de enlaces y formularios
- [ ] Configurar Google Analytics

### Post-deploy
- [ ] Verificar funcionamiento en GitHub Pages
- [ ] Test SEO (Google Search Console)
- [ ] Monitoreo de métricas Core Web Vitals

---

## 📞 Datos de Contacto para Integración

| Campo | Valor |
|-------|-------|
| **Dirección** | Av. Las Heras 1512, Lomas de Zamora (1832) |
| **Teléfono** | +54 11 4288-1188 |
| **Instagram** | @lasherassports |
| **Facebook** | facebook.com/lasherassports |
| **Horarios** | Lun-Dom 09:00-23:00 |

---

**¡Importante!** Mantener siempre la consistencia con la identidad visual verde/negro y asegurar que todos los CTAs dirijan correctamente al bot de Instagram y sistema de reservas.