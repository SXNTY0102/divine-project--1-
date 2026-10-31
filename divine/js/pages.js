/* ORDEN DE LA REVISTA: portada → kiosco → personajes → features → cierre. */
function buildPageList() {
  const pageList = [{ type: "main-cover" }, { type: "kiosk" }];
  characters.forEach((_, characterIndex) => {
    pageList.push({ type: "character-profile", characterIndex });
    pageList.push({ type: "character-interview", characterIndex });
  });
  pageList.push({ type: "features-index" });
  features.forEach((_, featureIndex) => pageList.push({ type: "feature-article", featureIndex }));
  pageList.push({ type: "closing" });
  return pageList;
}
