
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
         
   (() => {
    
    class ZonasVerdes {
        constructor() {
            // Selecciona todas las tarjetas de zonas verdes
            this.cards = document.querySelectorAll('.zv-2000-zona-verde');
            this.init();
        }

      
        init() {
            this.cards.forEach(card => {
                card.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
                card.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
                card.addEventListener('mousemove', this.handleMouseMove.bind(this));
                card.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
                card.addEventListener('touchend', this.handleTouchEnd.bind(this));
            });
        }

        
        handleMouseEnter(e) {
            const card = e.currentTarget;
            card.style.transition = 'none';
        }

        
        handleMouseLeave(e) {
            const card = e.currentTarget;
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'perspective(1000px) scale(1)';
        }

        
        handleMouseMove(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            
            const rotateX = ((y - centerY) / 20) * -1;
            const rotateY = (x - centerX) / 20;
            
          
            card.style.transform = `
                perspective(1000px)
                scale(1.03)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        }

        
        handleTouchStart(e) {
            const card = e.currentTarget;
            card.classList.add('touched');
        }

       
        handleTouchEnd(e) {
            const card = e.currentTarget;
            setTimeout(() => {
                card.classList.remove('touched');
            }, 300);
        }
    }

    
    document.addEventListener('DOMContentLoaded', () => {
        new ZonasVerdes();
    });
})();

*/

// Script Carousel Esculturas

(function() {
  const NatanaelCarousel = {
      config: {
          intervalTime: 5000,
          totalSlides: 10,
          prefix: 'natanael14'
      },

      elements: {
          imageCarousel: null,
          infoCarousel: null,
          mainWrapper: null
      },

      init: function() {
          this.elements.imageCarousel = document.getElementById(this.config.prefix + 'ImageCarousel');
          this.elements.infoCarousel = document.getElementById(this.config.prefix + 'InfoCarousel');
          this.elements.mainWrapper = document.querySelector('.nat14-main-wrapper');

          if (!this.elements.imageCarousel || !this.elements.infoCarousel) return;

          this.initCarousels();
          this.bindEvents();
          this.initAnimation();
      },

      initCarousels: function() {
          const options = { interval: this.config.intervalTime, wrap: true };
          this.elements.bsImageCarousel = new bootstrap.Carousel(this.elements.imageCarousel, options);
          this.elements.bsInfoCarousel = new bootstrap.Carousel(this.elements.infoCarousel, options);
      },

      bindEvents: function() {
          this.syncCarousels();
          this.bindNavButtons();
      },

      syncCarousels: function() {
          let isTransitioning = false;

          const syncHandler = (source, target) => {
              source.addEventListener('slide.bs.carousel', event => {
                  if (!isTransitioning) {
                      isTransitioning = true;
                      bootstrap.Carousel.getInstance(target).to(event.to);
                  }
              });

              source.addEventListener('slid.bs.carousel', () => {
                  isTransitioning = false;
              });
          };

          syncHandler(this.elements.imageCarousel, this.elements.infoCarousel);
          syncHandler(this.elements.infoCarousel, this.elements.imageCarousel);
      },

      bindNavButtons: function() {
          document.querySelectorAll('.nael-nav-button').forEach(button => {
              button.addEventListener('click', e => {
                  e.preventDefault();
                  const direction = button.getAttribute('data-bs-slide');
                  const carousel = bootstrap.Carousel.getInstance(this.elements.imageCarousel);
                  carousel[direction]();
              });
          });
      },

      initAnimation: function() {
          setTimeout(() => {
              this.elements.mainWrapper?.classList.add('nat14-visible');
          }, 100);
      }
  };

  document.addEventListener('DOMContentLoaded', () => NatanaelCarousel.init());
})();


// Fin Script Esculturas



// Script Otoño

(function() {
  const NatanaelAutumnCarousel = {
      init: function() {
          this.initAnimation();
          this.createLeaves();
          this.initCarousel();
      },

      initAnimation: function() {
          setTimeout(() => {
              document.querySelector('.natanael-autumn-wrapper').classList.add('natanael-visible');
          }, 100);
      },

      createLeaves: function() {
          const createLeaf = () => {
              const leaf = document.createElement('div');
              leaf.className = 'natanael-autumn-leaf';
              leaf.style.left = Math.random() * window.innerWidth + 'px';
              leaf.style.animationDuration = Math.random() * 3 + 2 + 's';
              document.body.appendChild(leaf);

              leaf.addEventListener('animationend', () => {
                  leaf.remove();
              });
          };

          setInterval(createLeaf, 2000);
          for(let i = 0; i < 5; i++) {
              setTimeout(createLeaf, i * 300);
          }
      },

      initCarousel: function() {
          new bootstrap.Carousel(document.querySelector('#natanaelAutumnCarousel'), {
              interval: 5000,
              wrap: true
          });
      }
  };

  document.addEventListener('DOMContentLoaded', () => NatanaelAutumnCarousel.init());
})();

// Fin Script Otoño