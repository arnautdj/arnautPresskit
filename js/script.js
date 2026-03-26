// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function () {


// 1. Seleccionamos la barra de navegación
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight;

  // 2. Seleccionamos SOLO las secciones donde queremos que la barra sea transparente
  const transparentSections = document.querySelectorAll('.hero-section, #el-show, #video, #clips, #booking, #formatos-show');

  // 3. Función que evalúa dónde estamos
  function checkNavbarState() {
    // Calculamos el punto exacto justo debajo de la barra de navegación
    let scrollPos = window.scrollY + navbarHeight; 

    let isTransparent = false;
    let hideLogo = false;

    // Escaneamos las secciones especiales
    transparentSections.forEach(function(sec) {
      const secTop = sec.offsetTop;
      const secBottom = secTop + sec.offsetHeight;

      // Si nuestro scroll está dentro de los límites de alguna de estas secciones
      if (scrollPos >= secTop && scrollPos < secBottom) {
        isTransparent = true; // La barra debe ser transparente

        // Pero SOLO ocultamos el logo si estamos específicamente en el Hero y hay un hero-logo grande
        if (sec.classList.contains('hero-section') && document.querySelector('.hero-logo')) {
          hideLogo = true;
        }
      }
    });

    // APLICAMOS LOS CAMBIOS VISUALES
    if (isTransparent) {
      navbar.classList.remove('navbar-solid');
    } else {
      navbar.classList.add('navbar-solid');
    }

    if (hideLogo) {
      navbar.classList.add('hide-logo');
    } else {
      navbar.classList.remove('hide-logo');
    }
  }

  // 4. Ejecutamos la función cada vez que el usuario hace scroll
  window.addEventListener('scroll', checkNavbarState);

  // 5. Ejecutamos la función una vez al cargar la página por si el usuario recarga a mitad de la web
  checkNavbarState();


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