/* Funciones auxiliares compartidas por las plantillas. */
function fullName(character) {
  return `${character.firstName} ${character.lastName}`;
}

function targetAttribute(target) {
  return `data-target="${target}"`;
}

function backgroundImageStyle(src) {
  return src ? `style="background-image:url('${src}')"` : "";
}

function renderFigure({ src, caption = "" }) {
  const captionHtml = caption ? `<figcaption>${caption}</figcaption>` : "";
  return `<figure class="figure"><img src="${src}" alt="${caption}" loading="lazy">${captionHtml}</figure>`;
}

function renderFigures(figures = []) {
  return figures.map(renderFigure).join("");
}
