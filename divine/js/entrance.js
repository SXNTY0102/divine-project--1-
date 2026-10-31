/* ENTRADA: letras de DIVINE que aparecen una a una y telón que sube al entrar. */
function setupEntrance() {
  const gate = document.getElementById("gate");
  const logo = document.getElementById("gate-logo");

  siteSettings.name.split("").forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${0.2 + i * 0.18}s`;
    logo.append(span);
  });

  document.getElementById("enter-button").addEventListener("click", () => {
    gate.classList.add("open");
    setTimeout(() => { gate.style.visibility = "hidden"; }, 1600);
  });
}
