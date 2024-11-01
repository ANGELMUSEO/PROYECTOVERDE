
/*codigo efecto entrada con scroll para las cards de pagina2.html*/
document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
      const elements = document.querySelectorAll('.cardEspecial1');
      /*repetimos codigo para efecto por la derecha*/
      const elements2=document.querySelectorAll('.cardEspecial2');
      const elements3=document.querySelectorAll('.cardEspecial3');
      const elements4=document.querySelectorAll('.cardEspecial4');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        }
      });
/*repetimos codigo para efecto por la derecha*/
      elements2.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        }
      });
      elements3.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        }
      });

      elements4.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        }
      });

    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para verificar la posición al cargar la página
  });


  /**boton video*/
  function playVideo(button) {
    const container = button.parentElement;
    const video = container.querySelector('video');
    
    button.style.display = 'none';
    video.play();
  }

  /* zonas verdes*/
  /**
         * IIFE para encapsular el código y evitar contaminación del scope global
         */
   (() => {
    /**
     * Clase principal para manejar la interactividad de las zonas verdes
     */
    class ZonasVerdes {
        constructor() {
            // Selecciona todas las tarjetas de zonas verdes
            this.cards = document.querySelectorAll('.zv-2000-zona-verde');
            this.init();
        }

        /**
         * Inicializa los event listeners para cada tarjeta
         */
        init() {
            this.cards.forEach(card => {
                card.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
                card.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
                card.addEventListener('mousemove', this.handleMouseMove.bind(this));
                card.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
                card.addEventListener('touchend', this.handleTouchEnd.bind(this));
            });
        }

        /**
         * Maneja el evento de entrada del mouse
         * Elimina la transición para movimiento suave
         */
        handleMouseEnter(e) {
            const card = e.currentTarget;
            card.style.transition = 'none';
        }

        /**
         * Maneja el evento de salida del mouse
         * Restaura la transición y resetea la transformación
         */
        handleMouseLeave(e) {
            const card = e.currentTarget;
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'perspective(1000px) scale(1)';
        }

        /**
         * Maneja el movimiento del mouse
         * Calcula y aplica la rotación 3D basada en la posición del cursor
         */
        handleMouseMove(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calcula la rotación basada en la distancia desde el centro
            const rotateX = ((y - centerY) / 20) * -1;
            const rotateY = (x - centerX) / 20;
            
            // Aplica la transformación 3D
            card.style.transform = `
                perspective(1000px)
                scale(1.03)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        }

        /**
         * Maneja el inicio del toque en dispositivos táctiles
         * Añade una clase para efectos táctiles específicos
         */
        handleTouchStart(e) {
            const card = e.currentTarget;
            card.classList.add('touched');
        }

        /**
         * Maneja el fin del toque en dispositivos táctiles
         * Elimina la clase de toque después de un delay
         */
        handleTouchEnd(e) {
            const card = e.currentTarget;
            setTimeout(() => {
                card.classList.remove('touched');
            }, 300);
        }
    }

    /**
     * Inicializa la aplicación cuando el DOM está completamente cargado
     */
    document.addEventListener('DOMContentLoaded', () => {
        new ZonasVerdes();
    });
})();