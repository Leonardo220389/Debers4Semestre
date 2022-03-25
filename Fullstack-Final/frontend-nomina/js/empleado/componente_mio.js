import { getOpcionesCargo, getOpcionesDepartamento } from "./combo";

export class Empleado {
  constructor() {
    this.id = "";
    this.grabar = true;
    this.url = "http://localhost:3000/empleados";
  }

  obtenerEmpleados() {
    fetch(this.url)
      .then((res) => res.json())
      .then((empleados) => {
        console.log(empleados);
        let filas = "";
        empleados.forEach((empleado) => {
          let { id, nombre, cedula, Cargo, Departamento, sueldo, estado } =
            empleado;
          filas += `<tr>
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${cedula}</td>
                <td>${Cargo}</td>
                <td>${Departamento}</td>
                <td>${sueldo}</td>
                <td>${estado ? "Activo" : "Inactivo"}</td>
                <td>
                  <button type="button" class="btn btn-edit" id="btn-edit" data-id="${id}">✏️</button>
                  <button type="button" class="btn btn-delete" id="btn-delete" data-id="${id}">❌</button>
                </td>`;
        });
        document.getElementById("detalle-empleados").innerHTML = filas;

        getOpcionesCargo();

        getOpcionesDepartamento();

        const btnsDelete = document.querySelectorAll(".btn-delete");

        btnsDelete.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            console.log(btn.dataset.id, e.target.dataset.id);
            console.log("Eliminado...");
            await this.eliminarEmpleado(e.target.dataset.id);
          });
        });
      });
  }
  async obtenerEmpleado(id) {
    const res = await fetch(`${this.url}/${id}`);
    const dato = await res.json();
    return dato[0];
  }

  async eliminarEmpleado(id) {
    const res = await fetch(`${this.url}/${id}`, { method: "delete" });
    this.obtenerEmpleados();
  }

  async insertarDatos(empleado) {
    try {
      const res = await fetch(`${this.url}`, { method: "post", body: Cargo });
      this.obtenerEmpleados();
      return true;
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async modificarDatos(empleadoMod, id) {
    try {
      const res = await fetch(`${this.url}/${id}`, {
        method: "put",
        body: empleadoMod,
      });
      this.obtenerEmpleados();
      document.getElementById("enviar").innerHTML = "Insertar";
      this.grabar = true;
    } catch (error) {
      console.log("error; ", error);
    }
  }
}
