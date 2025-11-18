// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function () {


  // 1. Selecciona la barra de navegación
  const navbar = document.querySelector('.navbar');

  // 2. Selecciona la sección "Hero" para medir su altura
  const heroSection = document.querySelector('.hero-section');

  // 3. Obtiene la altura del "Hero"
  const heroHeight = heroSection.offsetHeight;

  // 4. Obtiene la altura de la propia barra de navegación
  const navbarHeight = navbar.offsetHeight;

  // 5. Define el "punto de activación"
  const triggerPoint = heroHeight - navbarHeight;

  // 6. Escucha el evento 'scroll' en la ventana
  window.addEventListener('scroll', function () {
    // Comprueba si el scroll vertical (window.scrollY) ha pasado el punto de activación
    if (window.scrollY > triggerPoint) {
      // Si ha pasado, añade la clase sólida
      navbar.classList.add('navbar-solid');
    } else {
      // Si está por encima, quita la clase sólida
      navbar.classList.remove('navbar-solid');
    }
  });


  // CÓDIGO PARA CERRAR AUTOMÁTICAMENTE EL MENÚ EN MOVIL

  // 1. Seleccionar todos los enlaces del menú
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // 2. Seleccionar el botón de hamburguesa
  const navbarToggler = document.querySelector('.navbar-toggler');

  // 3. Seleccionar el menú (el div que se colapsa)
  const navCollapse = document.querySelector('.navbar-collapse');

  // 4. Añadir un "escuchador" de clic a CADA enlace del menú
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {

      // 5. Comprobar si el menú está abierto
      // (Bootstrap le añade la clase 'show' cuando está abierto)
      if (navCollapse.classList.contains('show')) {

        // 6. Si está abierto, "hacemos clic" en el botón de hamburguesa
        // para forzar que se cierre.
        navbarToggler.click();
      }
    });
  });

});