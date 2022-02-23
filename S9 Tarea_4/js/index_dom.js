import hamburgerMenu from "../dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "../dom/reloj.js";
import { moveBall,shortcuts } from "../dom/teclado.js";
import countdown from "../dom/cuenta_regresiva.js";
import scrollTopButton from "../dom/boton_scroll.js";
import darkTheme from "../dom/tema_oscuro.js";
import responsiveMedia from "../dom/objeto_responsive.js";
import responsiveTester from "../dom/prueba_reponsive.js";
import userDeviceInfo from "../dom/deteccion_dispositivos.js";
import networkStatus from "../dom/deteccion_red.js";
import webCam from "../dom/deteccion_webcam.js";
import getGeolocation from "../dom/geolocalizacion.js";
import searchFilters from "../dom/filtro_busquedas.js";
import draw from "../dom/sorteo.js";
import slider from "../dom/carrusel.js";
import scrollSpy from "../dom/scroll_espia.js";
import smartVideo from "../dom/video_inteligente.js";
import contactFormValidations from "../dom/validaciones_formulario.js";
import speechReader from "../dom/narrador.js";

const d= document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma-morning-mix.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown",
        "Mar 22, 2022  8:00:00",
        "feliz cumpleaños Leonardo Altamirano"
    );
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank" rel="noopener">ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );

    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/FaoLFE7EjkfFciig6" target="_blank" rel="noopener">ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.575154725253!2d-79.88860898088038!3d-2.1938946323458506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6e64c00a5ebf%3A0xb983f0134e08ebb!2sMalec%C3%B3n%202000!5e0!3m2!1ses-419!2sec!4v1645389582388!5m2!1ses-419!2sec"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode")
networkStatus();
speechReader();    