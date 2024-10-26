
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