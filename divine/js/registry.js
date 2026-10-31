/* REGISTRO DE TIPOS DE PÁGINA.
   Para crear una estructura nueva basta con registrarla:
     registerPageType("mi-tipo", { section: "features", render: (page) => `<div class="page-inner">…</div>` });
   y añadir { type: "mi-tipo" } en buildPageList() (js/pages.js). */
const pageTypes = {};

function registerPageType(type, definition) {
  pageTypes[type] = definition;
}

function renderPage(page) {
  return pageTypes[page.type].render(page);
}

function sectionOfPage(page) {
  return pageTypes[page.type].section;
}
