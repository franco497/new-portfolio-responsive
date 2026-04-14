// Toggle del menú hamburguesa
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".header__nav a");

// Crear el span para las líneas del botón hamburguesa
const hamburgerSpan = document.createElement("span");
menuToggle.appendChild(hamburgerSpan);

// Función para abrir/cerrar menú
function toggleMenu() {
  mainNav.classList.toggle("header__nav--open");
  menuToggle.classList.toggle("active");

  // Actualizar aria-label
  if (mainNav.classList.contains("header__nav--open")) {
    menuToggle.setAttribute("aria-label", "Cerrar menú");
    // Prevenir scroll
    document.body.style.overflow = "hidden";
  } else {
    menuToggle.setAttribute("aria-label", "Abrir menú");
    // Restaurar scroll
    document.body.style.overflow = "";
  }
}

// Evento click en el botón
menuToggle.addEventListener("click", toggleMenu);

// Cerrar menú al hacer click en un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("header__nav--open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    document.body.style.overflow = "";
  });
});

// Cerrar menú al hacer click fuera (mejora UX)
document.addEventListener("click", (event) => {
  const isClickInsideMenu = mainNav.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    mainNav.classList.contains("header__nav--open")
  ) {
    mainNav.classList.remove("header__nav--open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    document.body.style.overflow = "";
  }
});

// Prevenir que el click dentro del menú lo cierre
mainNav.addEventListener("click", (event) => {
  event.stopPropagation();
});
