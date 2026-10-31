/* PÁGINAS DE PERSONAJES: kiosco, perfil, entrevista y cierre. */
registerPageType("kiosk", {
  section: "kiosk",
  render() {
    const covers = characters.map((character, index) => `
      <div class="cover-link" ${targetAttribute(`character:${index}`)}>
        ${renderCharacterCover(character)}
        <span class="cover-open-label">Abrir →</span>
      </div>`).join("");
    return `
      <div class="page-inner">
        <div class="eyebrow">Edición de aniversario · Kiosco</div>
        <h2>Elige una portada, o <em>simplemente pasa la página.</em></h2>
        <div class="cover-grid">${covers}</div>
      </div>`;
  },
});

registerPageType("character-profile", {
  section: "kiosk",
  render({ characterIndex }) {
    const character = characters[characterIndex];
    const curiosities = character.curiosities.map((text) => `<li>${text}</li>`).join("");
    return `
      <div class="page-inner" style="--accent:${character.color}">
        <div class="profile">
          ${renderCharacterCover(character)}
          <div>
            <div class="eyebrow">${character.role}</div>
            <h2>${character.firstName} <em>${character.lastName}</em></h2>
            <p class="story">${character.story}</p>
            <div class="eyebrow" style="margin-bottom:10px">Curiosidades</div>
            <ul class="facts">${curiosities}</ul>
            ${renderFigures(character.gallery)}
          </div>
        </div>
      </div>`;
  },
});

registerPageType("character-interview", {
  section: "kiosk",
  render({ characterIndex }) {
    const character = characters[characterIndex];
    const items = character.interview.map(({ question, answer }) =>
      `<div class="interview-item"><q>${question}</q><p>“${answer}”</p></div>`).join("");
    return `
      <div class="page-inner" style="--accent:${character.color}">
        <div class="interview">
          <div class="eyebrow">Entrevista breve</div>
          <h2>Tres preguntas a <em>${character.firstName}</em></h2>
          ${items}
        </div>
      </div>`;
  },
});

registerPageType("closing", {
  section: "closing",
  render() {
    return `
      <div class="page-inner">
        <div class="closing">
          <div class="eyebrow">Fin del número</div>
          <h2>Hasta el <em>próximo</em> número</h2>
          <p style="font-style:italic;font-size:22px;max-width:520px">Cada personaje nació de un dibujo, y cada página, de las ganas de verlo contado.</p>
          <button ${targetAttribute("section:kiosk")}>Volver al kiosco</button>
          <button class="closing__secret" data-open-love>Una sorpresa para ti ♡</button>
        </div>
      </div>`;
  },
});
