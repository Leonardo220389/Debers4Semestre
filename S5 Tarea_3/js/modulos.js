import Saludar, { Pi, saludar, usuario } from "./constantes.js";
import { aritmetica as calculos} from "./aritmetica.js";

console.log("Archivos modulos.js");
console.log(Pi, usuario);
console.log(calculos.sumar(4, 3));
saludar();

let saludo = new Saludar();
saludo;