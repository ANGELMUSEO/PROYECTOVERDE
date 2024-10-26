
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
  // IIFE para encapsular el código y evitar contaminación global
  (function() {
    //  para la aplicación
    const ZonasVerdesApp = {
        // Configuración
        config: {
            selectorZona: '.zv-2000-zona-verde',
            transformDuration: 300, // ms
        },

        // Cache de elementos DOM
        elements: {
            zonas: null
        },

        // Estado de la aplicación
        state: {
            isTransitioning: false
        },

        // Inicialización
        init: function() {
            this.elements.zonas = document.querySelectorAll(this.config.selectorZona);
            this.bindEvents();
        },

        // Vinculación de eventos D
        bindEvents: function() {
            this.elements.zonas.forEach(zona => {
                zona.addEventListener('mousemove', this.handleMouseMove.bind(this));
                zona.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
                zona.addEventListener('touchstart', this.handleTouchStart.bind(this));
                zona.addEventListener('touchend', this.handleTouchEnd.bind(this));
            });
        },

        // Manejadores de eventos
        handleMouseMove: function(e) {
            if (this.state.isTransitioning) return;

            const zona = e.currentTarget;
            const rect = zona.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / 0) * -1;
            const rotateY = (x - centerX) / 0;
            
            this.applyTransform(zona, rotateX, rotateY);
        },

        handleMouseLeave: function(e) {
            this.resetTransform(e.currentTarget);
        },

        handleTouchStart: function(e) {
            // Prevenir el scroll mientras se toca la tarjeta
            e.preventDefault();
            const zona = e.currentTarget;
            this.applyTransform(zona, 0, -5); // Efecto sutil al tocar
        },

        handleTouchEnd: function(e) {
            this.resetTransform(e.currentTarget);
        },

        // Utilidades
        applyTransform: function(element, rotateX, rotateY) {
            element.style.transform = `
                scale(1.03)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        },

        resetTransform: function(element) {
            this.state.isTransitioning = true;
            element.style.transform = 'scale(1) rotateX(0) rotateY(0)';
            
            setTimeout(() => {
                this.state.isTransitioning = false;
            }, this.config.transformDuration);
        }
    };

    // Inicializar la aplicación cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => {
        ZonasVerdesApp.init();
    });
})();