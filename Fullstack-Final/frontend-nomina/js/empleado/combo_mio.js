export function obtenerCargosCombos() {
    fetch = ("http://localhost:3000/cargos")
      .then((res) => res.json())
      .then((cargos) => {
        let filas1 = "";
        cargos.forEach((cargo) => {
          let { id, descripcion } = cargo;
          filas1 += `
                    <option value="${id}">${descripcion}</option>
                `;
        });
        document.getElementById("combo-cargos").innerHTML = filas1;
        console.log(filas1);
      });
  }
export function obtenerDepartamentosCombos() {
    fetch = ("http://localhost:3000/departamentos")
      .then((res) => res.json())
      .then((departamentos) => {
        let filas2 = "";
        departamentos.forEach((departamento) => {
          let { id, descripcion } = departamento;
          filas2 += `
                    <option value="${id}">${descripcion}</option>
                `;
        });
        document.getElementById("combo-departamentos").innerHTML = filas2;
        console.log(filas2);
      });
  }
