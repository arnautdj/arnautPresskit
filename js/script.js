// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function() {

  // 1. Selecciona la barra de navegación
  const navbar = document.querySelector('.navbar');

  // 2. Selecciona la sección "Hero" para medir su altura
  const heroSection = document.querySelector('.hero-section');

  // 3. Obtiene la altura del "Hero"
  const heroHeight = heroSection.offsetHeight;

  // 4. Obtiene la altura de la propia barra de navegación
  const navbarHeight = navbar.offsetHeight;

  // 5. Define el "punto de activación"
  // Queremos que la barra cambie JUSTO ANTES de que el 
  // final del "Hero" pase por debajo de ella.
  const triggerPoint = heroHeight - navbarHeight;

  // 6. Escucha el evento 'scroll' en la ventana
  window.addEventListener('scroll', function() {
    // Comprueba si el scroll vertical (window.scrollY) 
    // ha pasado el punto de activación
    if (window.scrollY > triggerPoint) {
      // Si ha pasado, añade la clase sólida
      navbar.classList.add('navbar-solid');
    } else {
      // Si está por encima, quita la clase sólida
      navbar.classList.remove('navbar-solid');
    }
  });
});