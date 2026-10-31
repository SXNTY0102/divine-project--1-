/* FEATURES & STORIES: portada de la sección y artículos. */
registerPageType("features-index", {
  section: "features",
  render() {
    const cards = features.map((feature, index) => {
      const isLead = index === 0;
      const hasImage = Boolean(feature.image);
      const imageBlock = hasImage ? `<div class="feature-card__image" ${backgroundImageStyle(feature.image)}></div>` : "";
      return `
      <article class="feature-card ${isLead ? "is-lead" : ""} ${hasImage ? "has-image" : ""}" style="--accent:${characters[feature.accentCharacter].color}" ${targetAttribute(`feature:${index}`)}>
        ${imageBlock}
        <span class="kicker">${feature.category}</span>
        <h3>${feature.headline}</h3>
        <p>${feature.deck}</p>
        <b>Leer →</b>
      </article>`;
    }).join("");
    return `
      <div class="page-inner">
        <div class="eyebrow">Features &amp; Stories</div>
        <h2>Lo que se cuenta <em>entre bastidores</em></h2>
        <div class="ticker"><span>${tickerText}</span><span>${tickerText}</span></div>
        <div class="feature-grid">${cards}</div>
      </div>`;
  },
});

registerPageType("feature-article", {
  section: "features",
  render({ featureIndex }) {
    const feature = features[featureIndex];
    const likes = 12450 + featureIndex * 9;
    const [firstParagraph, ...otherParagraphs] = feature.paragraphs;
    const remainingText = otherParagraphs.map((text) => `<p class="story no-dropcap">${text}</p>`).join("");
    const related = feature.relatedCharacters.map((i) =>
      `<button class="chip" ${targetAttribute(`character:${i}`)}>${fullName(characters[i])} →</button>`).join("");
    return `
      <div class="page-inner" style="--accent:${characters[feature.accentCharacter].color}">
        <div class="article">
          <div>
            <span class="kicker">${feature.category}</span>
            <h2>${feature.headline}</h2>
            <p class="article-deck">${feature.deck}</p>
            <div class="eyebrow">Por la Redacción ${siteSettings.name} · ${feature.readingMinutes} min de lectura</div>
            <p class="story" style="margin-top:22px">${firstParagraph}</p>
            ${renderFigures(feature.figures)}
            <blockquote class="pull-quote">“${feature.pullQuote}”</blockquote>
            ${remainingText}
            ${renderFigures(feature.closingFigures)}
          </div>
          <aside>
            <div class="eyebrow">Expediente</div>
            ${related}
            <button class="like-button" data-like data-count="${likes}">♡ ${likes}</button>
            <button class="chip" ${targetAttribute("section:features")}>← Más Features</button>
          </aside>
        </div>
      </div>`;
  },
});