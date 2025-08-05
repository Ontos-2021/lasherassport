# Las Heras Sports · Landing Page

![Las Heras Sports](https://img.shields.io/badge/Las%20Heras%20Sports-Landing%20Page-green)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4.0-blue)

Landing page estática para el club Las Heras Sports, desarrollada con HTML, CSS, JavaScript y Tailwind CSS. Optimizada para GitHub Pages.

## 🌐 Ver sitio en vivo

**� [https://ontos-2021.github.io/lasherassport/](https://ontos-2021.github.io/lasherassport/)**

## �🚀 Stack Tecnológico

- **HTML5** - Estructura semántica
- **CSS3** + **Tailwind CSS** - Estilos y diseño responsive
- **JavaScript ES6+** - Interactividad y animaciones
- **GitHub Pages** - Hosting gratuito
- **GitHub Actions** - CI/CD automático

## ✨ Características

- 📱 **Diseño completamente responsive**
- ⚡ **Animaciones y efectos visuales modernos**
- 🧭 **Navegación inteligente con navbar flotante**
- 📊 **Contadores animados y estadísticas**
- 💬 **Integración directa con WhatsApp**
- 🎨 **Branding consistente verde/negro**
- � **SEO optimizado con Schema.org**
- ♿ **Accesibilidad mejorada**

## �📁 Estructura del Proyecto

```
lasherassport/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── tailwind.css    # Tailwind compilado
│   │   ├── input.css       # Tailwind source
│   │   └── custom.css      # Estilos personalizados
│   ├── js/
│   │   ├── main.js         # JavaScript principal
│   │   ├── components.js   # Componentes modulares
│   │   └── utils.js        # Utilidades
│   └── images/
│       ├── hero/           # Imágenes del hero
│       ├── activities/     # Iconos de actividades
│       └── ...
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions
├── tailwind.config.js      # Configuración Tailwind
├── package.json            # Dependencias
└── README.md
```

## 🛠️ Desarrollo Local

### Prerrequisitos
- Node.js 18+ 
- npm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Ontos-2021/lasherassport.git
   cd lasherassport
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Desarrollar con watch mode**
   ```bash
   npm run dev
   ```

4. **Compilar para producción**
   ```bash
   npm run build
   ```

5. **Servir localmente**
   ```bash
   # Usar Live Server u otro servidor local
   # O simplemente abrir index.html en el navegador
   ```

### Scripts Disponibles

- `npm run dev` — Compila Tailwind en modo watch
- `npm run build` — Compila y minifica Tailwind para producción

## � Deploy Automático

Este proyecto está configurado para hacer deploy automático en GitHub Pages usando GitHub Actions:

1. **Push a la rama `main`** — Activa automáticamente el workflow
2. **GitHub Actions** — Instala dependencias y compila Tailwind
3. **GitHub Pages** — Publica el sitio automáticamente

### Configuración de GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **root**
4. ¡El sitio estará disponible en unos minutos!

## 📞 Información de Contacto

### Las Heras Sports
- **Dirección**: Av. Las Heras 1512, Lomas de Zamora (1832)
- **Teléfono**: +54 11 4288-1188
- **Instagram**: [@lasherassports](https://www.instagram.com/lasherassports/)
- **Facebook**: [facebook.com/lasherassports](https://facebook.com/lasherassports)
- **Horarios**: Lun-Dom 09:00-23:00

### Actividades Disponibles
- ⚽ **Fútbol** (Canchas 5, 7, 8 y 11)
- 🏓 **Pádel** (3 canchas outdoor)
- 🏑 **Hockey** (Escuela femenina)
- 💪 **Gym & CrossFit**
- 🏊 **Pileta / Natación**
- 👨‍👩‍👧‍👦 **Colonia de vacaciones**
- 🎉 **Eventos y salón**
- 🚗 **Estacionamiento gratuito**

## 🤝 Contribuir

Si encuentras algún error o tienes sugerencias:

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está desarrollado para Las Heras Sports. Todos los derechos reservados.

---

**💻 Desarrollado con Tailwind CSS y mucho ⚽ para Las Heras Sports**
