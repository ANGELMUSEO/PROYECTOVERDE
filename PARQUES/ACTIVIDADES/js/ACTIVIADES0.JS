(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const carousels = [
            { images: 'carouselFutbol', content: 'contenidoFutbol' },
            { images: 'carouselBaloncesto', content: 'contenidoBaloncesto' },
            { images: 'carouselTenis', content: 'contenidoTenis' },
            { images: 'carouselNatacion', content: 'contenidoNatacion' },
            { images: 'carouselAtletismo', content: 'contenidoAtletismo' },
			 { images: 'carouselDiscGolf', content: 'contenidoDiscGolf' },
			  { images: 'carouselInfantil', content: 'contenidoInfantil' }
        ];

        carousels.forEach(carousel => {
            const carouselImages = new bootstrap.Carousel(document.getElementById(carousel.images), {
                interval: 5000,
                touch: true
            });
            
            const carouselContent = new bootstrap.Carousel(document.getElementById(carousel.content), {
                interval: 5000,
                touch: true
            });

            document.getElementById(carousel.images).addEventListener('slide.bs.carousel', function(e) {
                carouselContent.to(e.to);
            });

            document.getElementById(carousel.content).addEventListener('slide.bs.carousel', function(e) {
                carouselImages.to(e.to);
            });
        });

        // Manejo del selector de deportes
        const sportSelector = document.getElementById('sportSelector');
        const sportSelector2 = document.getElementById('sportSelector2');
        sportSelector.addEventListener('change', function() {
            const selectedSport = this.value;
            if (selectedSport) {
                const targetSection = document.getElementById(selectedSport);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        sportSelector2.addEventListener('change', function() {
            const selectedSport = this.value;
            if (selectedSport) {
                const targetSection = document.getElementById(selectedSport);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

    });
})();