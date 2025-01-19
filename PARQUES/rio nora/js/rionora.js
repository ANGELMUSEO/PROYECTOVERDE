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