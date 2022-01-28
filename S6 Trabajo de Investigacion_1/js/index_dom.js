import { hamburgerMenu } from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});

function Modal() {
  const $openModal = document.querySelector("#enviar");
  const $modal = document.querySelector(".modal");
  const $closeModal = document.querySelector(".close_modal");

  $openModal.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const $informacion = document.getElementById("informacion");
    const expRegEmail =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const valinombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (nombre.length == 0 && email.length == 0 && mensaje == 0) {
      alert("No escribio nada");
      return;
    }
    if (nombre.length == 0) {
      alert("No ingresaste un Nombre");
      return;
    }
    if (!valinombre.test(nombre)) {
      alert("Ingresaste mal el nombre");
      return;
    }

    if (email.length == 0) {
      alert("No ingresaste un Email");
      return;
    }

    if (!expRegEmail.test(email)) {
      alert("Email Incorrecto");
      return;
    }

    if (mensaje.length == 0) {
      alert("No ingresaste el Mensaje");
      return;
    }

    $informacion.textContent = ` ${nombre}, revise su correo => ${email} para confirmar su registro, gracias por su comentario => ${mensaje}`;
    $modal.classList.add("modal--show");
  });
  $closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    $modal.classList.remove("modal--show");
  });
}

Modal();
