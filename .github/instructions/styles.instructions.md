---
applyTo: '**'
---

# Las Heras Sports - Style Guidelines & Design System

## 🎨 Brand Color Palette

### Primary Colors (Updated to match official logo)
```css
--las-heras-green: #00C896      /* Verde principal del logo */
--las-heras-dark-green: #00A67C /* Verde más oscuro para hover/estados */
--las-heras-yellow: #FFB800     /* Amarillo/dorado del balón y texto */
--las-heras-dark-yellow: #E6A600 /* Amarillo oscuro para hover */
--las-heras-black: #0D0D0D      /* Negro profundo del fondo del logo */
--las-heras-gray-dark: #1A1A1A  /* Gris oscuro para fondos alternativos */
```

### Usage Guidelines
- **Green (#00C896)**: Primary CTA buttons, main branding elements, active states
- **Yellow (#FFB800)**: Accent elements, highlights, special badges
- **Black (#0D0D0D)**: Text, backgrounds, high contrast elements
- **Always use brand colors** over generic Tailwind colors for brand consistency

## 🖼️ Visual Identity

### Logo Implementation
- Use `assets/images/las_heras_sports_logo_transparent.png` for navbar
- Logo height: `h-12` (48px) in navbar for optimal visibility
- Always maintain aspect ratio with `w-auto`

### Real Images Over Icons
- **Catapumba**: Use `assets/images/catapumba.jpeg` for gym/pool sections
- Prefer actual facility photos over generic SVG icons when available
- Format: `w-20 h-20 object-cover rounded-full shadow-lg` for photo cards

## 🎯 Component Patterns

### Card System
```css
.card-shadow        /* Custom green-tinted shadow */
.card:hover         /* scale-105 + shine-effect + float-animation */
```

### Animation Strategy
- **Staggered delays**: `style="animation-delay: 0.2s"` increments
- **Triple hover effects**: scale + shine + float combined
- **Intersection Observer**: Performance-optimized scroll animations

### Button Hierarchy
```css
.btn-main           /* Primary: scale hover + shadow + ripple effect */
.btn-ripple         /* Interactive click animation */
.pulse-green        /* Highlight important CTAs */
```

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile-first approach** using Tailwind's responsive prefixes
- Key breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Always test: mobile, tablet, desktop viewports

### Layout Patterns
- **Activities Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Content Containers**: `max-w-4xl mx-auto` for readability
- **Hero Section**: Full height with responsive text scaling

## 🏢 Business Context Integration

### Contact Information
- **Main Phone**: +54 11 4288-1188
- **WhatsApp**: Floating button (bottom-right, green branded)
- **Instagram Bot**: Primary CTA in hero section
- **Address**: Av. Las Heras 1512, Lomas de Zamora (CP 1832)

### Activity Categories
- Fútbol (multiple field sizes), Pádel (3 courts), Hockey (female school)
- Gym/CrossFit, Swimming, Colonies, Events, Parking
- Each activity has specific color coding in cards

## 💻 Technical Conventions

### CSS Architecture
- **Custom CSS**: `assets/css/custom.css` for animations and brand styles
- **Tailwind Config**: `tailwind.config.js` contains brand color definitions
- **CSS Variables**: Use `:root` variables for consistency

### JavaScript Pattern
- **Single Class**: `LasHerasApp` in `assets/js/main.js`
- **Modular Methods**: Each feature as a class method
- **Event Management**: Centralized in constructor and bindEvents()

### Development Workflow
```bash
npm run dev    # Tailwind watch mode for development
npm run build  # Minified production build for deployment
```

## ✨ Animation Guidelines

### Performance Optimization
- Use `Intersection Observer` for scroll-triggered animations
- Leverage `requestAnimationFrame` for smooth performance
- Throttle scroll events to prevent performance issues

### Visual Effects
- **Float Animation**: 3s infinite subtle movement for cards
- **Shine Effect**: Hover shimmer using `::after` pseudo-element
- **Counter Animation**: Number count-up on scroll into view
- **Navbar Behavior**: Auto-hide/show based on scroll direction

## 🎭 Content Guidelines

### Typography
- **Primary Font**: Inter (headings and UI)
- **Body Font**: Roboto (content text)
- **Emoji Usage**: Consistent emoji prefixes for sections (⚽, 📍, etc.)

### Tone & Voice
- **Friendly and approachable**: Use "vos" form (Argentine Spanish)
- **Sports-focused**: Emphasize community and family atmosphere
- **Call-to-action oriented**: Always provide clear next steps

## 🔧 Maintenance Notes

### File Organization
- **Images**: Organized by type (`hero/`, `activities/`, etc.)
- **Brand Assets**: Keep logo files in root images folder
- **Real Photos**: Prefer over generic icons for authenticity

### Quality Assurance
- Test responsive behavior across all breakpoints
- Verify brand color consistency in all components
- Ensure accessibility with proper alt texts and ARIA labels
- Validate contact information and links regularly