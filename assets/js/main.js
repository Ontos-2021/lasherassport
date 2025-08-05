// main.js - JS principal para Las Heras Sports
class LasHerasApp {
  constructor() {
    this.initializeComponents();
    this.bindEvents();
    this.setupScrollEffects();
    this.setupNavbar();
  }

  initializeComponents() {
    this.setupMobileMenu();
    this.setupCTAButtons();
    this.setupParallax();
  }

  bindEvents() {
    // Scroll suave para enlaces internos con offset para el navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if(target) {
          e.preventDefault();
          
          // Calcular offset para el navbar flotante
          const navbarHeight = 80; // altura del navbar + padding
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Tracking del enlace clickeado
          console.log('Navigation link clicked:', targetId);
        }
      });
    });

    // Tracking de eventos para analytics
    this.trackEvents();
  }

  setupNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    let lastScrollY = window.scrollY;
    let isMenuOpen = false;

    // Función para mostrar/ocultar navbar basado en scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
        
        if (currentScrollY < lastScrollY && !isMenuOpen) {
          // Scrolling up - mostrar navbar
          navbar.style.transform = 'translateY(0)';
        } else if (currentScrollY > lastScrollY && !isMenuOpen) {
          // Scrolling down - ocultar navbar
          navbar.style.transform = 'translateY(-100%)';
        }
      } else {
        // En la parte superior de la página - ocultar navbar
        navbar.style.transform = 'translateY(-100%)';
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-visible');
      }
      
      lastScrollY = currentScrollY;
    };

    // Event listener para scroll con throttle
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Toggle del menú móvil
    const toggleMobileMenu = () => {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        mobileMenu.classList.add('active');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        // Forzar que el navbar se mantenga visible cuando el menú está abierto
        navbar.style.transform = 'translateY(0)';
      } else {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    };

    // Event listener para el botón del menú móvil
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
      });
    }

    // Cerrar menú móvil al hacer click en un enlace
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', () => {
        if (isMenuOpen) {
          toggleMobileMenu();
        }
      });
    });

    // Cerrar menú móvil al hacer click fuera
    document.addEventListener('click', (e) => {
      if (isMenuOpen && !navbar.contains(e.target)) {
        toggleMobileMenu();
      }
    });

    // Prevenir que el menú se cierre al hacer click dentro del navbar
    navbar?.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Asegurar que el menú se cierre en cambios de tamaño de ventana
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        toggleMobileMenu();
      }
    });

    // Función para destacar el enlace activo basado en la sección visible
    const highlightActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === currentSection) {
          link.classList.add('text-green-600', 'font-semibold');
          link.classList.remove('text-gray-700');
        } else {
          link.classList.remove('text-green-600', 'font-semibold');
          link.classList.add('text-gray-700');
        }
      });
    };

    // Event listener para destacar sección activa
    window.addEventListener('scroll', highlightActiveSection);
    
    // Ejecutar una vez al cargar
    highlightActiveSection();
  }

  setupScrollEffects() {
    // Animaciones de entrada usando Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar secciones para animaciones
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Contador animado para números
    this.animateCounters();
  }

  animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const start = performance.now();
            
            const animate = (currentTime) => {
              const elapsed = currentTime - start;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(progress * target);
              
              counter.textContent = current;
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
            observer.unobserve(counter);
          }
        });
      });
      
      observer.observe(counter);
    });
  }

  setupParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  setupMobileMenu() {
    // Esta función ahora está integrada en setupNavbar()
    // para mejor coordinación entre funcionalidades
    console.log('Mobile menu functionality integrated in setupNavbar');
  }

  setupCTAButtons() {
    // Rastrear clicks en botones principales
    document.querySelectorAll('.btn-main').forEach(button => {
      button.addEventListener('click', function() {
        console.log('CTA clicked:', this.textContent.trim());
        
        // Añadir efecto ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  trackEvents() {
    // Google Analytics events (placeholder)
    document.querySelector('a[href*="wa.me"]')?.addEventListener('click', () => {
      console.log('WhatsApp clicked');
      // gtag('event', 'click', { event_category: 'contact', event_label: 'whatsapp' });
    });

    document.querySelector('a[href*="instagram"]')?.addEventListener('click', () => {
      console.log('Instagram bot clicked');
      // gtag('event', 'click', { event_category: 'contact', event_label: 'instagram_bot' });
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new LasHerasApp();
  setupOtrosTelefonosToggle();
});

// Función para toggle de otros teléfonos
function setupOtrosTelefonosToggle() {
  const toggleButton = document.getElementById('toggle-otros-telefonos');
  const otrosTelefonos = document.getElementById('otros-telefonos');
  const toggleIcon = document.getElementById('toggle-icon');

  if (toggleButton && otrosTelefonos && toggleIcon) {
    toggleButton.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle visibility
      otrosTelefonos.classList.toggle('hidden');
      
      // Update aria-expanded
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Rotate icon
      if (isExpanded) {
        toggleIcon.style.transform = 'rotate(0deg)';
      } else {
        toggleIcon.style.transform = 'rotate(180deg)';
      }
      
      // Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'toggle_otros_telefonos', {
          event_category: 'contacto',
          event_label: isExpanded ? 'cerrar' : 'abrir'
        });
      }
    });
  }
}

// CSS adicional para animaciones
const style = document.createElement('style');
style.textContent = `
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: rippleEffect 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes rippleEffect {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }

  .counter {
    font-weight: bold;
    color: #22c55e;
  }
`;
document.head.appendChild(style);

// Función global para abrir Google Maps
window.abrirGoogleMaps = function() {
  const direccion = "Av. Las Heras 1512, Lomas de Zamora, Buenos Aires, Argentina";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccion)}`;
  
  // Abrir en una nueva pestaña
  window.open(googleMapsUrl, '_blank');
  
  // Enviar evento de analytics si Google Analytics está disponible
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click_map', {
      event_category: 'mapa',
      event_label: 'abrir_google_maps'
    });
  }
};
