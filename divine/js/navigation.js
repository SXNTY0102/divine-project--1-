/* NAVEGACIÓN: barra superior, giro de páginas, teclado, gestos y clics.
   Cualquier elemento con data-target="…" navega; destinos válidos:
   section:cover | section:kiosk | section:features | section:closing | character:N | feature:N */
const pages = buildPageList();
const sectionPageTypes = { cover: "main-cover", kiosk: "kiosk", features: "features-index", closing: "closing" };

const bookElement = document.getElementById("book");
const siteNavElement = document.getElementById("site-nav");
const previousButton = document.getElementById("previous-page");
const nextButton = document.getElementById("next-page");
const pageCounter = document.getElementById("page-counter");

let currentPageIndex = 0;
let pageElements = [];

function renderSiteNav() {
  siteNavElement.innerHTML = `
    <button class="site-nav__logo" ${targetAttribute("section:cover")}>${siteSettings.name}</button>
    <div>
      <button ${targetAttribute("section:cover")}>Portada</button>
      <button ${targetAttribute("section:kiosk")}>Kiosco</button>
      <button ${targetAttribute("section:features")}>Features</button>
    </div>`;
}

function renderBook() {
  bookElement.innerHTML = pages.map((page) => `<div class="page">${renderPage(page)}</div>`).join("");
  pageElements = [...bookElement.children];
}

function findPageIndex(target) {
  const [kind, value] = target.split(":");
  if (kind === "section") return pages.findIndex((p) => p.type === sectionPageTypes[value]);
  if (kind === "character") return pages.findIndex((p) => p.type === "character-profile" && p.characterIndex === Number(value));
  if (kind === "feature") return pages.findIndex((p) => p.type === "feature-article" && p.featureIndex === Number(value));
  return -1;
}

function highlightActiveSection() {
  const section = sectionOfPage(pages[currentPageIndex]);
  siteNavElement.querySelectorAll("[data-target]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === `section:${section}`);
  });
}

function goToPage(index) {
  currentPageIndex = Math.max(0, Math.min(pages.length - 1, index));
  pageElements.forEach((element, i) => {
    element.classList.toggle("is-current", i === currentPageIndex);
    element.classList.toggle("is-turned", i < currentPageIndex);
  });
  highlightActiveSection();
  pageCounter.textContent = `${String(currentPageIndex + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;
  previousButton.disabled = currentPageIndex === 0;
  nextButton.disabled = currentPageIndex === pages.length - 1;
  pageElements[currentPageIndex].firstElementChild.scrollTop = 0;
}

function toggleLike(button) {
  const liked = button.classList.toggle("is-active");
  button.textContent = `${liked ? "♥" : "♡"} ${Number(button.dataset.count) + (liked ? 1 : 0)}`;
}

function bindNavigationEvents() {
  previousButton.addEventListener("click", () => goToPage(currentPageIndex - 1));
  nextButton.addEventListener("click", () => goToPage(currentPageIndex + 1));

  document.addEventListener("click", (event) => {
    const likeButton = event.target.closest("[data-like]");
    if (likeButton) return toggleLike(likeButton);
    const link = event.target.closest("[data-target]");
    if (!link) return;
    const index = findPageIndex(link.dataset.target);
    if (index >= 0) goToPage(index);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") goToPage(currentPageIndex + 1);
    if (event.key === "ArrowLeft") goToPage(currentPageIndex - 1);
  });

  let touchStartX = 0;
  document.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    const distance = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 70) goToPage(currentPageIndex + (distance < 0 ? 1 : -1));
  });
}
