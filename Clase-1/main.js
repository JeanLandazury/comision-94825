
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

let user = prompt("¿Cuál es tu nombre?");

console.log(user);
alert("Hola " + user + ", Bienvenido a la clase de JavaScript: Mi Primer Script Interactivo.");

let user2 = parseInt(prompt("¿Cuál es tu edad?"));

console.log(user2);
alert("Hola " + user + ", tienes " + user2 + " años.");

let user3 = parseFloat(prompt("¿Cuál es tu salario mensual?"));

console.log(user3);
alert("Hola " + user + ", tu salario mensual es de " + user3 + " pesos.");

// Operación matemática
let salarioAnual = user3 * 12;

console.log("Tu salario anual es: " + salarioAnual);

alert("Tu salario anual es de " + salarioAnual + " pesos.");











