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

const validarEmail = (email = "") => {
  if (!email) return console.warn("no ingresaste un nombre");
  if (typeof email !== "string")
    return console.error(
      `El valor "${email}" ingresado, No es una cadena de texto`
    );
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,15})/i.test(
      email
    );
  return expReg
    ? console.info(`"${email}", es un email valido`)
    : console.warn(`"${email}", no es un email valido`);
};

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("no ingresaste un nombre");
  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, No es una cadena de texto`
    );
  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
  return expReg
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", no es un nombre valido`);
};
