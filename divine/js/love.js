/* COMPORTAMIENTO de la sección romántica: clave, apertura, corazones y visor de fotos. */
const passcodeLength = loveSection.accessCode.length;
const passcodeLockMilliseconds = 2600;
let enteredDigits = "";
let isPasscodeLocked = false;
let passcodeElement, loveElement, lightboxElement, revealObserver;

function mountLoveSection() {
  document.body.insertAdjacentHTML("beforeend", renderPasscodeModal() + renderLoveSection() + renderLightbox());
  passcodeElement = document.getElementById("passcode");
  loveElement = document.getElementById("love");
  lightboxElement = document.getElementById("love-lightbox");
  spawnFloatingHearts();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { root: loveElement, threshold: 0.2 });
  bindLoveEvents();
}

function spawnFloatingHearts(count = 16) {
  const container = document.getElementById("love-hearts");
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "love__heart";
    heart.textContent = "♥";
    heart.style.cssText = `left:${Math.random() * 100}%;font-size:${12 + Math.random() * 26}px;animation-duration:${9 + Math.random() * 10}s;animation-delay:${-Math.random() * 16}s`;
    container.append(heart);
  }
}

function setPasscodeMessage(text) {
  document.getElementById("passcode-message").textContent = text;
}

function setPasscodeKeysDisabled(disabled) {
  passcodeElement.querySelectorAll(".passcode__keys button").forEach((button) => { button.disabled = disabled; });
}

function updatePasscodeDots() {
  passcodeElement.querySelectorAll(".passcode__dots i").forEach((dot, i) => {
    dot.classList.toggle("is-filled", i < enteredDigits.length);
  });
}

function resetPasscode() {
  enteredDigits = "";
  isPasscodeLocked = false;
  passcodeElement.classList.remove("is-denied");
  setPasscodeMessage("Introduce la clave");
  setPasscodeKeysDisabled(false);
  updatePasscodeDots();
}

function openPasscode() {
  resetPasscode();
  passcodeElement.classList.add("is-open");
}

function closePasscode() {
  passcodeElement.classList.remove("is-open");
}

function addDigit(digit) {
  if (isPasscodeLocked || enteredDigits.length >= passcodeLength) return;
  enteredDigits += digit;
  updatePasscodeDots();
  if (enteredDigits.length === passcodeLength) setTimeout(checkPasscode, 180);
}

function deleteDigit() {
  if (isPasscodeLocked) return;
  enteredDigits = enteredDigits.slice(0, -1);
  updatePasscodeDots();
}

function checkPasscode() {
  if (enteredDigits === loveSection.accessCode) grantAccess();
  else denyAccess();
}

function denyAccess() {
  isPasscodeLocked = true;
  passcodeElement.classList.add("is-denied");
  setPasscodeMessage("Acceso denegado");
  setPasscodeKeysDisabled(true);
  setTimeout(resetPasscode, passcodeLockMilliseconds);
}

function grantAccess() {
  isPasscodeLocked = true;
  setPasscodeMessage("Bienvenida ♡");
  setTimeout(() => { closePasscode(); openLoveSection(); }, 700);
}

function openLoveSection() {
  loveElement.scrollTop = 0;
  loveElement.classList.add("is-open");
  loveElement.querySelectorAll(".love__reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
}

function closeLoveSection() {
  loveElement.classList.remove("is-open");
}

function openLightbox(memoryElement) {
  if (!memoryElement.dataset.image) return;
  document.getElementById("lightbox-image").src = memoryElement.dataset.image;
  document.getElementById("lightbox-caption").textContent = memoryElement.dataset.caption;
  lightboxElement.classList.add("is-open");
}

function bindLoveEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest("[data-open-love]")) return openPasscode();
    if (target.closest("[data-close-passcode]")) return closePasscode();
    const digitButton = target.closest("[data-digit]");
    if (digitButton) return addDigit(digitButton.dataset.digit);
    if (target.closest("[data-delete]")) return deleteDigit();
    if (target.closest("[data-close-love]")) return closeLoveSection();
    if (target.closest("#love-lightbox")) return lightboxElement.classList.remove("is-open");
    const memory = target.closest(".memory");
    if (memory) openLightbox(memory);
  });

  document.addEventListener("keydown", (event) => {
    if (lightboxElement.classList.contains("is-open")) {
      if (event.key === "Escape") lightboxElement.classList.remove("is-open");
    } else if (passcodeElement.classList.contains("is-open")) {
      if (/^\d$/.test(event.key)) addDigit(event.key);
      if (event.key === "Backspace") deleteDigit();
      if (event.key === "Escape") closePasscode();
    } else if (loveElement.classList.contains("is-open") && event.key === "Escape") {
      closeLoveSection();
    }
  });
}
