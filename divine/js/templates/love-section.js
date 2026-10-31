/* PLANTILLAS de la sección romántica: candado, sección y visor de fotos. */
const memoryTilts = [-3, 2, -1.5, 3];

function renderPasscodeModal() {
  const dots = "<i></i>".repeat(loveSection.accessCode.length);
  const digitKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `<button data-digit="${n}">${n}</button>`).join("");
  return `
    <div class="passcode" id="passcode" role="dialog" aria-label="Clave de acceso">
      <div class="passcode__card">
        <div class="eyebrow">Zona privada</div>
        <h3>Clave de acceso</h3>
        <div class="passcode__dots">${dots}</div>
        <p class="passcode__message" id="passcode-message"></p>
        <div class="passcode__keys">
          ${digitKeys}
          <button data-close-passcode aria-label="Cancelar">✕</button>
          <button data-digit="0">0</button>
          <button data-delete aria-label="Borrar">⌫</button>
        </div>
      </div>
    </div>`;
}

function renderMemory(memory, index) {
  const tilt = memoryTilts[index % memoryTilts.length];
  const emptyClass = memory.image ? "" : "is-empty";
  const caption = memory.caption || "";
  const dateHtml = memory.date ? `<small>${memory.date}</small>` : "";
  return `
    <figure class="memory memory--${memory.shape || "polaroid"}" style="--tilt:${tilt}deg" data-image="${memory.image || ""}" data-caption="${caption}">
      <span class="memory__tape"></span>
      <div class="memory__photo ${emptyClass}" ${backgroundImageStyle(memory.image)}></div>
      <figcaption>${caption}${dateHtml}</figcaption>
    </figure>`;
}

function renderLoveSection() {
  const { letter } = loveSection;
  const paragraphs = letter.paragraphs.map((text) => `<p>${text}</p>`).join("");
  return `
    <section class="love" id="love" aria-label="Sección especial">
      <div class="love__hearts" id="love-hearts"></div>
      <button class="love__close" data-close-love aria-label="Volver a la revista">✕</button>
      <header class="love__hero love__reveal">
        <p class="love__eyebrow">${loveSection.eyebrow}</p>
        <h2>${loveSection.title}</h2>
        <p class="love__subtitle">${loveSection.subtitle}</p>
        <span class="love__scroll">↓</span>
      </header>
      <article class="love__letter love__reveal">
        <p class="love__greeting">${letter.greeting}</p>
        ${paragraphs}
        <p class="love__signature">${letter.signature}</p>
      </article>
      <section class="love__memories">
        <h3 class="love__reveal">${loveSection.memoriesTitle}</h3>
        <div class="love__gallery">${loveSection.memories.map(renderMemory).join("")}</div>
      </section>
      <footer class="love__finale love__reveal">
        <p>${loveSection.finale}</p>
        <span class="love__big-heart">♥</span>
        <button class="love__back" data-close-love>Volver a la revista</button>
      </footer>
    </section>`;
}

function renderLightbox() {
  return `<div class="love-lightbox" id="love-lightbox"><figure><img id="lightbox-image" alt=""><figcaption id="lightbox-caption"></figcaption></figure></div>`;
}
