# DIVINE — revista digital

Abre `index.html` (doble clic o Live Server). No requiere instalar nada.

## Estructura
- `css/` — estilos por tema: base, entrada, libro y navegación, portadas, páginas interiores.
- `js/content/` — **todo el texto y las rutas de imágenes** (`site.js`, `characters.js`, `features.js`).
- `js/templates/` — cómo se dibuja cada tipo de página.
- `js/registry.js`, `js/pages.js` — registro de tipos de página y orden de la revista.
- `js/navigation.js`, `js/entrance.js`, `js/main.js` — comportamiento.
- `assets/images/` — tus dibujos y portadas.

## Tareas habituales
- **Poner una imagen:** guárdala en `assets/images/` y escribe `image: "assets/images/aurelia.jpg"`.
  Más imágenes: añade `gallery` (personajes) o `figures` (artículos) con `{ src, caption }`.
- **Nuevo personaje o artículo:** copia un objeto en `characters.js` o `features.js`.
- **Nueva estructura de página:** crea un archivo en `js/templates/`, regístralo con `registerPageType(...)`,
  añade su `<script>` en `index.html` y su descriptor en `buildPageList()` (`js/pages.js`).
- **Destinos de enlaces:** `data-target="section:kiosk"`, `character:2`, `feature:1`.

## Sección romántica (clave de acceso)
- El botón "Una sorpresa para ti ♡" está en la última página y pide una clave.
- Clave, mensaje, fotos y textos: `js/content/love.js` (campo `accessCode`).
- Cada recuerdo es `{ image, caption, date, shape }`; `shape` puede ser `polaroid`, `oval` o `arch`. Añade tantos como quieras.
- Estética propia en `css/love.css`; comportamiento en `js/love.js`.
- Nota: la clave vive en el código, así que es un candado "de sorpresa", no seguridad real.
