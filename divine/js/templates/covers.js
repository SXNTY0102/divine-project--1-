/* PORTADAS: la de cada personaje y la portada principal de la revista. */
function renderCharacterCover(character) {
  const hasArtwork = Boolean(character.image);
  const templateHeader = hasArtwork ? "" : `
      <div class="cover-masthead">${siteSettings.name}</div>
      <div class="cover-meta">${siteSettings.issueLabel} · ${character.role}</div>`;
  return `
    <div class="cover" style="--accent:${character.color}">
      <div class="cover-art ${hasArtwork ? "" : "is-placeholder"}" ${backgroundImageStyle(character.image)}></div>${templateHeader}
      <div class="cover-name">${character.firstName}<br>${character.lastName}</div>
      <div class="cover-lines">${character.coverLines.join(" · ")}</div>
    </div>`;
}

function renderHeadlineLink(feature, featureIndex) {
  return `<a ${targetAttribute(`feature:${featureIndex}`)}><small>${feature.category}</small>${feature.teaser}</a>`;
}

registerPageType("main-cover", {
  section: "cover",
  render() {
    const half = Math.ceil(features.length / 2);
    const leftHeadlines = features.slice(0, half).map((f, i) => renderHeadlineLink(f, i)).join("");
    const rightHeadlines = features.slice(half).map((f, i) => renderHeadlineLink(f, i + half)).join("");
    const star = characters[mainCover.featuredCharacter];
    const placeholderClass = mainCover.image ? "" : "is-placeholder";
    return `
      <div class="page-inner main-cover">
        <div class="main-cover__strip">
          <span>${siteSettings.issueLabel}</span><span>${siteSettings.date}</span><span>${siteSettings.edition}</span>
        </div>
        <h1 class="main-cover__masthead">${siteSettings.name}</h1>
        <div class="main-cover__layout">
          <div class="main-cover__headlines">${leftHeadlines}</div>
          <div class="main-cover__hero" style="--accent:${mainCover.color}" ${targetAttribute(`character:${mainCover.featuredCharacter}`)}>
            <div class="cover-art ${placeholderClass}" ${backgroundImageStyle(mainCover.image)}></div>
            <span class="main-cover__hero-label">Portada · ${fullName(star)}</span>
          </div>
          <div class="main-cover__headlines is-right">${rightHeadlines}</div>
        </div>
        <div class="main-cover__footer">
          <i class="barcode"></i><span>${siteSettings.price}</span>
          <button ${targetAttribute("section:kiosk")}>Abrir la edición →</button>
        </div>
      </div>`;
  },
});
