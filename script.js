document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el navbar-wrapper ahora
    const navbarWrapper = document.querySelector('.navbar-wrapper');
    let lastScrollY = window.scrollY; // Guarda la posición de scroll anterior

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY; // Posición de scroll actual

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Bajando y ya hemos bajado un poco (ej. más de 100px desde el inicio)
            navbarWrapper.classList.add('hidden'); // Añade la clase al wrapper
        } else if (currentScrollY < lastScrollY) {
            // Subiendo
            navbarWrapper.classList.remove('hidden'); // Remueve la clase del wrapper
        }

        lastScrollY = currentScrollY; // Actualiza la última posición de scroll
    });
});