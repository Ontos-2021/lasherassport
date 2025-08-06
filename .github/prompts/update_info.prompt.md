---
mode: edit
---
Define the task to achieve, including specific requirements, constraints, and success criteria.### 🗒️ “Playbook” para que un agente de IA actualice **index.html**

*(sin romper el diseño original, solo enriqueciendo el contenido)*

---

## 1. Objetivo en una línea

> **Agregar todas las escuelas/actividades alojadas en el predio + la nueva sección “Alquiler a Colegios”, manteniendo la estructura visual existente.**

---

## 2. Principios de actualización

| # | Principio                   | Detalle práctico                                                                                                                                                                             |
| - | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Cero refactor de layout** | No tocar hojas de estilo ni clases Tailwind; se reutilizan las cards `<article class="card">` y el grid ya presente.                                                                         |
| 2 | **One source of truth**     | Teléfono madre y teléfonos de referentes se centralizan en variables al inicio del script para evitar duplicación.                                                                           |
| 3 | **Enlaces claros**          | Cada tarjeta lleva un `<a>` externo (`target="_blank"`) al IG / web oficial de la escuela o actividad. Si aún no existe link, dejar `href="#"` y marcar `TODO`.                              |
| 4 | **Accesibilidad intacta**   | Mantener `alt`, `aria-label` y contraste AA; agregar `aria-expanded` al toggle de “Otros teléfonos”.                                                                                         |
| 5 | **SEO local**               | No cambiar `<title>` ni `<meta name="description">`, pero actualizar `<script type="application/ld+json">` si se añaden nuevas actividades relevantes (schema LocalBusiness → “makesOffer”). |

---

## 3. Datos que debe inyectar el agente

```json
{
  "tel_predio": "+54 11 58407270",
  "activities": [
    {
      "slug": "canchas-bar",
      "nombre": "Canchas & Bar",
      "descripcion": "Predio Las Heras Sports: Alquiler de canchas de Fútbol y Hockey - Bar y Parrilla.",
      "tel": "wa.me/5491158407270",
      "url": "#"
    },
    {
      "slug": "padel-lomas",
      "nombre": "Pádel Lomas",
      "descripcion": "Alquiler de canchas, escuela de Padel, torneos y cancha abierta.",
      "tel": "wa.me/5491130059225",
    },
    {
      "slug": "hockey",
      "nombre": "Hockey",
      "descripcion": "Escuela femenina de hockey sobre césped para mayores y menores.",
      "tel": "wa.me/5491134131188",
      "responsable": "Ale Gulla",
      "url": "https://instagram.com/alegullalasherashockey"
    },
    {
      "slug": "gym-pileta",
      "nombre": "Catapumba Gym & Pileta",
      "descripcion": "Gimnasio, natación, crossfit y funcional",
      "tel": "wa.me/5491123572169",
      "responsable": "Referente Catapumba",
      "url": "#"
    },
    {
      "slug": "colonia",
      "nombre": "Colonia",
      "descripcion": "Vacaciones de invierno/verano.",
      "tel": "wa.me/5491134131188",
      "responsable": "Ale Gulla",
      "url": "https://instagram.com/veranolasheras"
    },
    {
      "slug": "area-verde",
      "nombre": "Área Verde Multiespacio",
      "descripcion": "Salón de eventos: Cumples, fiestas y eventos corporativos. Entrada independiente por Estrada.",
      "tel": "wa.me/5491125344549",
      "responsable": "Referente Área Verde",
      "url": "https://instagram.com/areaverdemultiespacio"
    },
    {
      "slug": "river-lomas",
      "nombre": "Escuela River Lomas",
      "descripcion": "Fútbol formativo Oficial River Plate.",
      "tel": "wa.me/5491168440278",
      "responsable": "Referente River",
      "url": "https://instagram.com/escuelariverlomas"
    },
    {
      "slug": "colegios",
      "nombre": "Alquiler a Colegios",
      "descripcion": "Jornadas deportivas o programa anual.",
      "tel": "wa.me/5491142881188",
      "responsable": "Predio",
      "tel": "wa.me/5491158407270",
      "url": "#colegios"
    }
  ]
}
```

---

## 4. Pasos de edición que debe seguir el agente

1. **Clonar repo**

   ```bash
   git clone https://github.com/ontos-2021/lasherassport.git && cd lasherassport
   ```

2. **Parsear `index.html`**

   * Usar un parser DOM (p. ej. `cheerio` o Python `BeautifulSoup`).
   * Localizar `<section id="actividades">`.

3. **Generar/actualizar tarjetas**

   * Para cada objeto `activities[]` crear/actualizar un `<article class="card" id="{slug}">` con:

     ```html
     <h3>{nombre}</h3>
     <p>{descripcion}</p>
     <p class="text-sm">
       {responsable}: <a href="tel:{tel_clean}">{tel}</a>
     </p>
     <a href="{url}" target="_blank" rel="noopener" class="link">Ver más</a>
     ```
   * Orden de tarjetas: el listado del JSON.
   * Mantener grid existente (`md:grid-cols-3`).

4. **Insertar “Alquiler a Colegios”**

   * Ya viene en el JSON como una tarjeta más, pero además:

     * Crear ancla `<section id="colegios">` debajo de Actividades con copy breve + botón “Solicitar propuesta”.
     * Botón `mailto:` con asunto pre-llenado: `?subject=Consulta colegios – Las Heras Sports`.

5. **Actualizar contacto principal**

   * Asegurarse de que el teléfono madre se imprime una sola vez y se actualiza si cambia el JSON.
   * En la lista plegable “Otros teléfonos” listar cada actividad cuyo `tel ≠ tel_predio`.

6. **Validar accesibilidad**

   * Ejecutar `npx @axe-core/cli https://ontos-2021.github.io/lasherassport/` tras el build.

7. **Commit & PR**

   ```bash
   git checkout -b feat/content-refresh
   git add index.html
   git commit -m "content: añade escuelas y alquiler a colegios"
   git push origin feat/content-refresh
   ```

   * Crear Pull Request, revisar visualmente y mergear a `gh-pages`.

---

## 5. Plantilla de tarjeta (para referencia rápida)

```html
<article class="card" id="river-lomas">
  <h3>Escuela River Lomas</h3>
  <p>Fútbol formativo oficial River Plate.</p>
  <p class="text-sm">
    Referente River:
    <a href="tel:+5411XXXXXXX">xxx-xxxx</a>
  </p>
  <a href="https://instagram.com/escuelariverlomas" target="_blank" rel="noopener" class="link">
    Ver más
  </a>
</article>
```

*(El agente solo reemplaza los valores entre llaves con los del JSON.)*

---

## 6. Checklist final para el agente 🤖✅

* [ ] Todas las 9 actividades figuran con link y teléfono.
* [ ] Se agregó la sección “Alquiler a Colegios” con su propio ancla.
* [ ] Tel. madre visible; teléfonos extra ocultos tras toggle.
* [ ] No se añadió ni se quitó ninguna clase Tailwind.
* [ ] Lighthouse móvil ≥ 90 y sin nuevos warnings de accesibilidad.

Con este playbook, cualquier agente puede actualizar el contenido sin moverle ni un píxel al diseño. ¡Listo para producción!
