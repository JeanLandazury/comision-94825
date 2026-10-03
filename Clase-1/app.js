


let nombre = " Jean";    // String o cadena de texto 
let edad = 29;  // Number 
let soltero = false; // Boolean  true or flase 
let millonario  // Undefined 
let mansion = null  // No hay valor 

console.log(nombre);
console.log(edad);
console.log(soltero);
console.log(millonario);
console.log(mansion);

millonario = true;

const DNI = 123456789;
console.log(DNI);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof soltero);
console.log(typeof millonario);
console.log(typeof mansion);


let suma = 10 + 10;
let resta = 15 - 10;
let multi = 10 * 10;
let divi = 30 / 10;

console.log(suma);
console.log(resta);
console.log(multi);
console.log(divi);

console.log("suma " + resta);
console.log("Hola soy" + nombre + " tengo " + edad + " años");
console.log (edad + nombre);

let sumaRara = nombre + " " + edad;
console.log(sumaRara);


// funciones nactivas
// Prompt

let user = prompt("Cual es tu nombre?");


console.log(user);

console.log (Number (user));
console.log(parseInt(user));
console.log(parseFloat(user));

alert("Hola " + user + " Bienvenido a la clase de JavaScript Jean Landazury");


// Comfirm

let siONo = confirm("Estas seguro de eliminar este elemento?");

console.log(siONo);

let mensaje = siONo ? "Elemento eliminado" : "No se elimino el elemento";
console.log(mensaje);

let mensaje = nombre === "Jean" ? "Bienvenido Jean" : "No eres Jean";
console.log(mensaje);




