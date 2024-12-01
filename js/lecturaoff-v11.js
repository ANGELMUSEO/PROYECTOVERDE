(function() {
    'use strict';

    const LecturaManager = {
        config: {
            fondosDefinidos: [
                '.bg-white',
                '.bg-gris',
                '.bg-light',
                '.bg-azul-oscuro',
                '.navbar',
                '.footer',
                '.bg-azul-oscuro-opacity-75',
                '.bg-azul-oscuro-b'
            ],
            defaultTheme: 'light'
        },

        elementos: {},

        init: function() {
            this.agregarEstilos();
            this.inicializarElementos();
            this.configurarEventListeners();
            this.aplicarModoOscuroAutomatico();
            this.initializeTheme();
            this.configurarObservador();
        },

        agregarEstilos: function() {
            const estilos = document.createElement('link');
            estilos.rel = 'stylesheet';
            estilos.href = 'css/modo_oscuro.css';
            document.head.appendChild(estilos);
        },

        inicializarElementos: function() {
            this.elementos = {
                modoCortesiaToggle: document.querySelector('.modo-cortesia-toggle'),
                modoCortesiaPanel: document.querySelector('.modo-cortesia-panel'),
                modoCortesiaSlider: document.getElementById('modoCortesiaSlider'),
                modoCortesiaValue: document.querySelector('.modo-cortesia-value'),
                modoClaro: document.getElementById('modoClaro'),
                modoOscuro: document.getElementById('modoOscuro'),
                brilloSlider: document.getElementById('brilloSlider'),
                brilloValue: document.querySelector('.brillo-value'),
                brilloContainer: this.crearBrilloContainer()
            };
        },

        crearBrilloContainer: function() {
            let container = document.querySelector('.brillo-container');
            if (!container) {
                container = document.createElement('div');
                container.className = 'brillo-container';
                document.body.appendChild(container);
            }
            return container;
        },

        necesitaAjuste: function(elemento) {
            const tieneFondoDefinido = this.config.fondosDefinidos.some(selector => 
                elemento.closest(selector)
            );
            
            const modoOscuro = document.documentElement.getAttribute('data-dark-mode') === 'true';
            return modoOscuro && !tieneFondoDefinido;
        },

        aplicarModoOscuroAutomatico: function() {
            document.querySelectorAll('*').forEach(elemento => {
                if (elemento.textContent.trim() && !elemento.children.length) {
                    if (this.necesitaAjuste(elemento)) {
                        elemento.classList.add('text-azul-adjust');
                    }
                }

                if (elemento.tagName === 'IMG' && 
                    elemento.src.includes('/iconos/') && 
                    this.necesitaAjuste(elemento)) {
                    elemento.classList.add('icon-adjust');
                }
            });
        },

        actualizarModo: function(value) {
            const bgColor = Math.round(255 - (value * 2.55));
            const textColor = bgColor > 128 ? 0 : 255;
            const iconInvert = value > 50 ? 1 : 0;

            document.documentElement.style.setProperty('--bg-color', `${bgColor}, ${bgColor}, ${bgColor}`);
            document.documentElement.style.setProperty('--text-color', `${textColor}, ${textColor}, ${textColor}`);
            document.documentElement.style.setProperty('--icon-invert', iconInvert);

            if (value > 40) {
                this.aplicarModoOscuro();
            } else {
                this.aplicarModoClaro();
            }

            this.elementos.modoCortesiaValue.textContent = `${value}%`;
        },

        aplicarModoOscuro: function() {
            document.documentElement.setAttribute('data-dark-mode', 'true');
            document.documentElement.style.setProperty('--text-title-color', '#ffffff');
            // ... resto de la lógica del modo oscuro ...
        },

        aplicarModoClaro: function() {
            document.documentElement.setAttribute('data-dark-mode', 'false');
            document.documentElement.style.setProperty('--text-title-color', 'var(--azul-oscuro)');
            // ... resto de la lógica del modo claro ...
        },

        initializeTheme: function() {
            const savedTheme = localStorage.getItem('theme') || this.config.defaultTheme;
            document.documentElement.setAttribute('data-theme', savedTheme);
            
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.checked = savedTheme === 'dark';
            }
        },

        configurarEventListeners: function() {
            const self = this;

            // Eventos del panel de modo cortesía
            if (this.elementos.modoCortesiaToggle) {
                this.elementos.modoCortesiaToggle.addEventListener('click', () => {
                    this.elementos.modoCortesiaPanel.classList.toggle('active');
                });
            }

            if (this.elementos.modoCortesiaSlider) {
                this.elementos.modoCortesiaSlider.addEventListener('input', (e) => {
                    this.actualizarModo(parseInt(e.target.value));
                });
            }

            // Eventos de los modos
            if (this.elementos.modoClaro) {
                this.elementos.modoClaro.addEventListener('click', () => this.actualizarModo(0));
            }

            if (this.elementos.modoOscuro) {
                this.elementos.modoOscuro.addEventListener('click', () => this.actualizarModo(100));
            }

            // Control de brillo
            if (this.elementos.brilloSlider) {
                this.elementos.brilloSlider.addEventListener('input', function() {
                    const valor = this.value;
                    self.elementos.brilloValue.textContent = `${valor}%`;
                    document.documentElement.style.filter = `brightness(${valor}%)`;
                });
            }
        },

        configurarObservador: function() {
            const observer = new MutationObserver(() => {
                this.aplicarModoOscuroAutomatico();
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    };

    // Inicializar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => LecturaManager.init());
})();