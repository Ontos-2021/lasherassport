# Las Heras Sports - AI Coding Assistant Instructions

## Project Overview
Static landing page for Las Heras Sports club in Lomas de Zamora, built with HTML5, Tailwind CSS, and vanilla JavaScript. Deployed on GitHub Pages with automated CI/CD.

## Architecture & Key Components

### Design System
- **Brand Colors**: Custom Tailwind palette in `tailwind.config.js`
  - `las-heras.green`: `#00C896` (primary)
  - `las-heras.yellow`: `#FFB800` (accent, matching logo)
  - `las-heras.black`: `#0D0D0D` (brand black)
- **CSS Variables**: Defined in `assets/css/custom.css` `:root` for consistent theming
- **Component Pattern**: Cards use `.card-shadow` + hover effects (scale, shine, float animations)

### JavaScript Architecture
- **Main Class**: `LasHerasApp` in `assets/js/main.js` - single entry point with modular methods
- **Key Features**:
  - Smart navbar: auto-hide/show on scroll, active section highlighting
  - Mobile menu with proper state management (`isMenuOpen` flag)
  - Intersection Observer for scroll animations and counter effects
  - Ripple effects on CTA buttons with dynamic DOM manipulation

### Development Workflow
```bash
npm run dev    # Tailwind watch mode for development
npm run build  # Minified production build
```

### Styling Conventions
- **Responsive-first**: Mobile breakpoints using Tailwind's `sm:`, `md:`, `lg:`
- **Animation Delays**: Staggered card animations using inline `style="animation-delay: 0.2s"`
- **Custom Classes**:
  - `.btn-main`: Primary buttons with hover scale + shadow effects
  - `.float-animation`: 3s infinite floating effect for cards
  - `.shine-effect`: Hover shimmer effect using `::after` pseudo-element

### Content Structure
- **Activities Grid**: 3x3 responsive layout with color-coded categories
- **Real Images**: Use `assets/images/catapumba.jpeg` for actual facility photos (not SVG icons)
- **Contact Integration**: WhatsApp floating button + Instagram bot CTA in hero

### Key Files
- `index.html`: Single-page structure with semantic sections
- `tailwind.config.js`: Brand colors and custom utilities
- `assets/css/custom.css`: Advanced animations and component styles
- `assets/js/main.js`: All interactivity in one cohesive class
- `.github/workflows/`: Automated Tailwind compilation and GitHub Pages deployment

### Business Context
Las Heras Sports offers: Football (multiple sizes), Padel, Hockey, Gym/CrossFit, Swimming, Colonies, Events. Located at Av. Las Heras 1512, Lomas de Zamora. Phone: +54 11 4288-1188.

## Development Patterns
- Use `semantic_search` for component patterns before creating new ones
- Maintain the single-class JavaScript architecture - add methods to `LasHerasApp`
- Keep brand consistency with the green/yellow/black color scheme from the logo
- Test responsive behavior at mobile, tablet, and desktop breakpoints
- Leverage Intersection Observer for performance-optimized scroll effects
