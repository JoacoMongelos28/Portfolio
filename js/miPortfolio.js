emailjs.init('lj2UUGVwhv6yNpbU_');

document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());
    const email = formObject.email;

    if (!validateEmail(email)) {
        const errorCard = document.createElement('div');
        errorCard.classList.add('card');
        errorCard.innerHTML = `
            <svg class="wave-error" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z" fill-opacity="1"></path>
            </svg>
            <div class="icon-container-error">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon-error">
                    <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12 5.636 7.05a1 1 0 1 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"></path>
                </svg>
            </div>
            <div class="message-text-container-error">
                <p class="message-text-error">Invalid email address</p>
                <p class="sub-text-error">Please provide a valid email.</p>
            </div>
        `;

        document.body.appendChild(errorCard);
        setTimeout(function () {
            errorCard.classList.add('show');
        }, 100);

        setTimeout(function () {
            errorCard.remove();
        }, 3000);

        return;
    }

    emailjs.send('service_qj9fujc', 'template_arvtarq', formObject)
        .then(function () {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <svg class="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z" fill-opacity="1"></path>
                </svg>
                <div class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                    </svg>
                </div>
                <div class="message-text-container">
                    <p class="message-text">Mail sent successfully!</p>
                    <p class="sub-text">Everything went well</p>
                </div>
            `;

            document.body.appendChild(card);
            setTimeout(function() {
                card.classList.add('show');
            }, 100);

            setTimeout(function() {
                card.remove();
            }, 3000);
        }, function (error) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <svg class="wave-error" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z" fill-opacity="1"></path>
                </svg>
                <div class="icon-container-error">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon-error">
                        <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12 5.636 7.05a1 1 0 1 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"></path>
                    </svg>
                </div>
                <div class="message-text-container-error">
                    <p class="message-text-error">Oops! Something went wrong</p>
                    <p class="sub-text-error">Please try again later.</p>
                </div>
            `;

            document.body.appendChild(card);
            setTimeout(function() {
                card.classList.add('show');
            }, 100);

            setTimeout(function() {
                card.remove();
            }, 3000);
        });
});

function validateEmail(email) {
    const emailRegex= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return emailRegex.test(email);
}

let lastScrollTop = 0;
const fadeOutOnScrollElements = document.querySelectorAll('.fade-out-on-scroll');

const checkVisibility = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    fadeOutOnScrollElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
        }
    });

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

window.addEventListener('scroll', checkVisibility);

window.addEventListener('load', checkVisibility);


window.addEventListener("DOMContentLoaded", function () {
    const infoTxt = document.querySelector(".presentacion-txt");
    infoTxt.classList.add("visible");
});

// Seleccionamos los elementos necesarios
const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.contenedor-menu-nav');
const menuLinks = document.querySelectorAll('.menu-a');

// Alternar el menú cuando se presiona el botón
menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    console.log('Toggle menu:', menuNav.classList);
});

// Ocultar el menú cuando se presiona un enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuNav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        menuNav.classList.remove('active');
    }
});

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})