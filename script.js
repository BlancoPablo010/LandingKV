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

// En tu archivo script.js

// En tu archivo script.js

// En tu archivo script.js

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const explanationDiv = document.getElementById('service-explanation');
    const explanationText = document.getElementById('explanation-text');

    const serviceDetails = {
        'card1': {
            title: 'Coaching 1 a 1 para Alta Dirección',
            text: 'Acompañamiento exclusivo para propietarios, CEOS y directivos que buscan claridad, mejorar su impacto, toma de decisiones, visión estratégica y equilibrio personal.'
        },
        'card2': {
            title: 'Coaching para Mandos Intermedios',
            text: 'Entrenamos mediante dinámicas de alto rendimiento, la cohesión, visión compartida, habilidades comunicativas, toma de decisiones bajo presión y gestión de equipos para directivos y mandos clave.'
        },
        'card3': {
            title: 'Coaching para Personal de Base',
            text: 'Impulsamos el liderazgo interno y la autonomía desde los niveles operativos, con foco en la motivación, comunicación y responsabilidad. Desarrollamos compromiso y sentido de pertenencia. Cada empleado es parte clave del “once titular”.'
        },
        'card4': {
            title: 'Programas de Equipo – Cultura y Cohesión. Team Building.',
            text: 'Inspirados en dinámicas de vestuario: unidad, confianza, objetivos compartidos y feedback constructivo.'
        }
    };

    let activeCardId = null; // ID de la tarjeta actualmente seleccionada

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            const isCurrentlyActiveExplanation = explanationDiv.classList.contains('active');
            const isSameCardClicked = (activeCardId === cardId);

            // PASO 1: Remover la clase 'selected-state' de la tarjeta ANTERIORMENTE activa
            if (activeCardId) {
                const prevActiveCard = document.getElementById(activeCardId);
                if (prevActiveCard) {
                    prevActiveCard.classList.remove('selected-state'); // <-- QUITAR CLASE
                }
            }

            // --- Lógica de Animación y Selección ---

            if (isSameCardClicked && isCurrentlyActiveExplanation) {
                // Caso: Clic en la misma tarjeta activa -> OCULTAR explicación y deseleccionar card
                explanationDiv.classList.remove('active');
                explanationText.classList.add('fading-out'); 
                setTimeout(() => {
                    explanationText.textContent = ''; 
                    explanationText.classList.remove('fading-out'); 
                }, 300); 
                activeCardId = null; // No hay tarjeta activa
                // La clase 'selected-state' ya se quitó al principio de este bloque si era la misma tarjeta
            } else {
                // Caso: Clic en una tarjeta diferente O la primera vez que se activa
                activeCardId = cardId; // Establece la nueva tarjeta activa
                document.getElementById(activeCardId).classList.add('selected-state'); // <-- AÑADIR CLASE a la nueva tarjeta

                const details = serviceDetails[cardId];
                const newTextContent = details ? `<strong>${details.title}</strong><br>${details.text}` : 'Información no disponible para este servicio.';

                if (isCurrentlyActiveExplanation) {
                    // Ya hay una explicación visible y se selecciona OTRA tarjeta -> CAMBIAR CONTENIDO (fade-out, cambiar, fade-in)
                    explanationText.classList.add('fading-out'); 
                    setTimeout(() => {
                        explanationText.innerHTML = newTextContent; 
                        explanationText.classList.remove('fading-out'); 
                    }, 300); 
                    explanationDiv.classList.add('active'); // Asegura que el div contenedor ya tiene la clase 'active'
                    
                } else {
                    // No hay explicación visible -> BARRIDO (slide-down y fade-in)
                    explanationText.innerHTML = newTextContent; 
                    explanationDiv.classList.add('active'); 
                }
            }
        });
    });

    // Opcional: Listener para clic fuera para ocultar el texto y deseleccionar tarjeta
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.service-card') && !target.closest('#service-explanation')) {
            if (activeCardId) { 
                const prevActiveCard = document.getElementById(activeCardId);
                if (prevActiveCard) {
                    prevActiveCard.classList.remove('selected-state'); // <-- QUITAR CLASE AL DESELECCIONAR TODO
                }
                explanationDiv.classList.remove('active');
                explanationText.classList.add('fading-out'); 
                setTimeout(() => {
                    explanationText.textContent = '';
                    explanationText.classList.remove('fading-out');
                }, 300); 
                activeCardId = null;
            }
        }
    });
});