/*puntos interés san francisco*/
$(document).ready(function () {
    /*EMILIANO HISTORIA */
    $(".parrafogranja").hide();
    $(".parrafokiosko").hide();
    $(".parrafoestanque").hide();

    $(".parrafo1cons").hide();
    $(".parrafo2").hide();
    $(".parrafo3").hide();

    $("#boton1").click(function () {
        $(".parrafogranja").toggle(500)
        $(".parrafokiosko").hide()
        $(".parrafoestanque").hide()


    })

    $("#boton2").click(function () {
        $(".parrafokiosko").toggle(500)
        $(".parrafogranja").hide()
        $(".parrafoestanque").hide()

    })

    $("#boton3").click(function () {
        $(".parrafoestanque").toggle(500)
        $(".parrafogranja").hide()
        $(".parrafokiosko").hide()

    })

    /**jquery eventos belen */
    $("#boton1").click(function () {
        $(".parrafo1cons").toggle(500)
        $(".parrafo2fue").hide()
        $(".parrafo3escu").hide()


    });

    $("#boton2").click(function () {
        $(".parrafo2fue").toggle(500)
        $(".parrafo1cons").hide()
        $(".parrafo3escu").hide()

    });

    $("#boton3").click(function () {
        $(".parrafo3escu").toggle(500)
        $(".parrafo1cons").hide()
        $(".parrafo2fue").hide()

    });

    /**FIN HISTORIA */

    $(".parrafogranja").hide();
    $(".parrafokiosko").hide();
    $(".parrafoestanque").hide();
    /*jquery Belen */
    $(".parrafo1cons").hide();
    $(".parrafo2").hide();
    $(".parrafo3").hide();

    $("#boton1").click(function () {
        $(".parrafogranja").toggle(500)
        $(".parrafokiosko").hide()
        $(".parrafoestanque").hide()


    })

    $("#boton2").click(function () {
        $(".parrafokiosko").toggle(500)
        $(".parrafogranja").hide()
        $(".parrafoestanque").hide()

    })

    $("#boton3").click(function () {
        $(".parrafoestanque").toggle(500)
        $(".parrafogranja").hide()
        $(".parrafokiosko").hide()

    })

    /**jquery eventos belen */
    $("#boton1").click(function () {
        $(".parrafo1cons").toggle(500)
        $(".parrafo2fue").hide()
        $(".parrafo3escu").hide()


    });

    $("#boton2").click(function () {
        $(".parrafo2fue").toggle(500)
        $(".parrafo1cons").hide()
        $(".parrafo3escu").hide()

    });

    $("#boton3").click(function () {
        $(".parrafo3escu").toggle(500)
        $(".parrafo1cons").hide()
        $(".parrafo2fue").hide()

    });

    // Carga la pagina con los textos ocultos
    $(".textv-1").hide();
    $(".textv-2").hide();
    $(".textv-3").hide();
    $(".textv-4").hide();
    $(".textv-5").hide();
    $(".textv-6").hide();
    $(".textv-7").hide();
    $(".textv-8").hide();

    // al hacer click en los botones muestra los textos y oculta el resto Naturaleza-charo
    $(".botonv-1").click(function () {
       

        if ($(".textv-2").is(":visible")) {
            $(".textv-2").toggle(1500);
           
        }
        if ($(".textv-3").is(":visible")) {
           
            $(".textv-3").toggle(1500);
        }

        if ($(".textv-4").is(":visible")) {
           
            $(".textv-4").toggle(1500);
        }
        
        $(".textv-1").delay(1000).toggle(1500)
        

    });
    $(".botonv-2").click(function () {
        if ($(".textv-1").is(":visible")) {
            $(".textv-1").toggle(1500);
           
        }
        if ($(".textv-3").is(":visible")) {
           
            $(".textv-3").toggle(1500);
        }

        if ($(".textv-4").is(":visible")) {
           
            $(".textv-4").toggle(1500);
        }
        
        $(".textv-2").delay(1000).toggle(1500)
    });

    $(".botonv-3").click(function () {
        if ($(".textv-2").is(":visible")) {
            $(".textv-2").toggle(1500);
           
        }
        if ($(".textv-1").is(":visible")) {
           
            $(".textv-1").toggle(1500);
        }

        if ($(".textv-4").is(":visible")) {
           
            $(".textv-4").toggle(1500);
        }
        
        $(".textv-3").delay(1000).toggle(1500)
    });

    $(".botonv-4").click(function () {
        if ($(".textv-2").is(":visible")) {
            $(".textv-2").toggle(1500);
           
        }
        if ($(".textv-1").is(":visible")) {
           
            $(".textv-1").toggle(1500);
        }

        if ($(".textv-3").is(":visible")) {
           
            $(".textv-3").toggle(1500);
        }
        
        $(".textv-4").delay(1000).toggle(1500)
    });

    /*-----------------------ESCULTURA  tarjetas en recuerdo amalia -------------------- */
        $(".parrafoignacio").hide();
        $(".parrafoalfonso").hide();
        $(".parrafovictimas").hide();


        $(".ignacio").click(function () {

            $(".parrafoalfonso").hide();
            $(".parrafovictimas").hide();
            $(".parrafoignacio").toggle(1000);

        });

        $(".alfonso").click(function () {
            $(".parrafoignacio").hide();

            $(".parrafovictimas").hide();
            $(".parrafoalfonso").toggle(1000);

        });

        $(".victimas").click(function () {
            $(".parrafoignacio").hide();
            $(".parrafoalfonso").hide();
            $(".parrafovictimas").toggle(1000);



        });


         /* gema */
    /*card*/

   


    $("#botongema1").click(function () {
        if ($(".parrafo3").is(":visible")) {
            $(".parrafo3").toggle(1500);
           
        }
        if ($(".parrafo2").is(":visible")) {
           
            $(".parrafo2").toggle(1500);
        }
        
        $(".parrafo1").toggle(1500)
        
    });

    $("#botongema2").click(function () {
        if ($(".parrafo3").is(":visible")) {
            $(".parrafo3").toggle(1500);
           
        }
        if ($(".parrafo1").is(":visible")) {
           
            $(".parrafo1").toggle(1500);
        }
        
        $(".parrafo2").toggle(1500)

    })

    $("#botongema3").click(function () {
        if ($(".parrafo1").is(":visible")) {
            $(".parrafo1").toggle(1500);
           
        }
        if ($(".parrafo2").is(":visible")) {
           
            $(".parrafo2").toggle(1500);
        }
        
        $(".parrafo3").toggle(1500)

    })

    /*card1*/
    $("#botongema4").click(function () {
        if ($(".parrafo5").is(":visible")) {
            $(".parrafo5").toggle(1500);
           
        }
        if ($(".parrafo6").is(":visible")) {
           
            $(".parrafo6").toggle(1500);
        }
        
        $(".parrafo4").toggle(1500)


    })

    $("#botongema5").click(function () {
        if ($(".parrafo4").is(":visible")) {
            $(".parrafo4").toggle(1500);
           
        }
        if ($(".parrafo6").is(":visible")) {
           
            $(".parrafo6").toggle(1500);
        }
        
        $(".parrafo5").toggle(1500)

    })

    $("#botongema6").click(function () {
        if ($(".parrafo5").is(":visible")) {
            $(".parrafo5").toggle(1500);
           
        }
        if ($(".parrafo4").is(":visible")) {
           
            $(".parrafo4").toggle(1500);
        }
        
        $(".parrafo6").toggle(1500)

    })

});





(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const imageCarousel = new bootstrap.Carousel(document.getElementById('carouselEstacionesImg'), {
            interval: 5000,
            touch: true
        });
        const infoCarousel = new bootstrap.Carousel(document.getElementById('carouselEstacionesInfo'), {
            interval: 5000,
            touch: true
        });

        document.getElementById('carouselEstacionesImg').addEventListener('slide.bs.carousel', function (e) {
            infoCarousel.to(e.to);
        });

        document.getElementById('carouselEstacionesInfo').addEventListener('slide.bs.carousel', function (e) {
            imageCarousel.to(e.to);
        });
    });


});

/*nata*/

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        // Inicializar los carousels
        const carouselImagenes = new bootstrap.Carousel(document.getElementById('navidadImagenes'), {
            interval: 5000,
            touch: true
        });

        const carouselContenido = new bootstrap.Carousel(document.getElementById('navidadContenido'), {
            interval: 5000,
            touch: true
        });

        // Sincronizar los carousels
        document.getElementById('navidadImagenes').addEventListener('slide.bs.carousel', function (e) {
            carouselContenido.to(e.to);
        });

        document.getElementById('navidadContenido').addEventListener('slide.bs.carousel', function (e) {
            carouselImagenes.to(e.to);
        });

        // Animación de serpentinas
        function createStreamer() {
            const colors = [
                ['#c41e3a', '#ff4d6a'], // Variaciones de rojo
                ['#165b33', '#2a8c53'], // Variaciones de verde
                ['#d4af37', '#ffd700']  // Variaciones de dorado
            ];

            const streamer = document.createElement('div');
            streamer.className = 'cn2023-streamer';

            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomLeft = Math.random() * 100;
            const randomDuration = 3 + Math.random() * 4;
            const randomDelay = Math.random() * 2;

            streamer.style.setProperty('--color-start', randomColor[0]);
            streamer.style.setProperty('--color-end', randomColor[1]);
            streamer.style.left = `${randomLeft}%`;
            streamer.style.setProperty('--fall-duration', `${randomDuration}s`);
            streamer.style.animationDelay = `${randomDelay}s`;

            const contentElements = document.querySelectorAll('.cn2023-content');
            contentElements.forEach(element => {
                const streamerClone = streamer.cloneNode(true);
                element.appendChild(streamerClone);

                streamerClone.addEventListener('animationend', () => {
                    streamerClone.remove();
                });
            });
        }

        // Crear serpentinas periódicamente
        setInterval(createStreamer, 200);
    });







})();

