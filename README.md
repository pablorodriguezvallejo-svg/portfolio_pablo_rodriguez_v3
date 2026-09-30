# Pablo Rodríguez — Graphic Design Portfolio

Portfolio personal de Pablo Rodríguez, diseñador gráfico ubicado en Madrid.

## Dirección visual

La interfaz combina una base editorial/minimalista con detalles de estética cibersigilista muy sutiles: líneas técnicas, estructuras geométricas, acentos ácido y microinteracciones.

## Estructura

- `index.html` — Home, proyectos, About preview y Contact.
- `about.html` — Página About me.
- `project-carousel.html` — Plantilla de proyecto con carrusel automático, flechas y swipe.
- `project-gallery.html` — Plantilla de proyecto con galería + proximity effect + lightbox.
- `css/styles.css` — Todos los estilos.
- `js/main.js` — Interacciones, animaciones, traducciones y preferencias.
- `js/theme-init.js` — Inicialización rápida de tema e idioma para evitar parpadeos al cargar.
- `assets/` — Imágenes, iconos y recursos.

## Animaciones principales

- Nombre del hero con movimiento magnético por letras y scramble sutil.
- Slideshow automático en el hero.
- Logo grande que visualmente se desplaza hacia el navbar al comenzar el scroll.
- Projects en scroll horizontal controlado exclusivamente por el scroll vertical.
- Tarjetas de proyectos con zoom y microinteracción.
- Retrato About con tilt y halo interactivo.
- Proximity effect en la galería.
- Carrusel con autoplay, flechas, teclado y swipe.
- Lightbox navegable con flechas y teclado.
- Light / Dark mode con preferencia persistente.
- Español / English con cambio de idioma persistente y actualización de títulos/meta.

## Scroll horizontal de Projects

La sección `Projects` no utiliza un carrusel horizontal independiente. El usuario sigue haciendo scroll vertical normalmente; la sección permanece `sticky` mientras ese recorrido vertical se convierte en `translateX()` del track horizontal. Al terminar el recorrido, la página continúa hacia las siguientes secciones.

## Publicación en GitHub Pages

1. Sube el contenido del proyecto a un repositorio.
2. Ve a `Settings → Pages`.
3. Selecciona `Deploy from a branch`.
4. Elige `main` y `/ (root)`.
5. Comprueba la URL de GitHub Pages.

## Derechos y licencias

- Código: `LICENSE.txt` — MIT.
- Diseños, ilustraciones, fotografías y demás obras creativas: `COPYRIGHT.txt`.
- Recursos de terceros: `CREDITS.txt`.

Antes de publicar assets reales, revisa las licencias de tipografías, mockups, fotografías, música, modelos 3D y trabajos de clientes o colaboradores.

## Sustituir placeholders

Las imágenes SVG de `assets/images/` son placeholders para mantener el prototipo funcional. Sustitúyelas por los trabajos definitivos antes de publicar.

## Contacto

Actualiza en `index.html` los enlaces de Instagram y LinkedIn y el correo de contacto definitivo.

## Dónde cambiar cosas

La estructura está pensada para que puedas personalizar el portfolio sin tener que entender todo el JavaScript:

- **Tus textos en español/inglés:** `js/main.js` → objeto `translations`.
- **Títulos y descripciones SEO:** `js/main.js` → objeto `pageCopy`.
- **Colores Dark Mode:** `css/styles.css` → bloque `:root`.
- **Colores Light Mode:** `css/styles.css` → `html[data-theme="light"]`.
- **Tus trabajos e imágenes:** `assets/images/` + las rutas `<img src="...">` de los HTML.
- **Nombre, email y redes:** `index.html` y los encabezados/footer de las demás páginas.
- **Número de proyectos:** duplica/elimina un `.project-card` en `index.html`; para la galería, duplica un `.gallery-item`.
- **Velocidad del carrusel:** `data-autoplay="4800"` en `project-carousel.html` (4800 = 4,8 segundos).
- **Intensidad del efecto proximity:** `js/main.js` → bloque `Gallery proximity effect`; el `360` controla el radio y `.055` la escala.
- **Scroll vertical → horizontal:** `js/main.js` → `measureHorizontal()` / `updateHorizontal()` y `css/styles.css` → altura de `.projects`.

Los comentarios `EDITA AQUÍ` dentro de los archivos señalan estas zonas directamente.


## Project structure

The portfolio currently contains six projects: four carousel projects followed by two vertical-card gallery projects. The last two galleries use card-shaped placeholders (`63/88`) so the replacement artwork keeps the intended format.

- 01 — 3D Animation
- 02 — Brand Identity / Cybersigilism
- 03 — Article Visual Design
- 04 — Illustrations for Starbucks
- 05 — Bug Brawl
- 06 — Personal Illustrations
