'use strict'

//Pruebas con let y var
alert("Hola");

//Prueba con var
var numero = 40; 
console.log(numero); // valor 40
if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//Prueba con Let

var texto = "Curso JS"
console.log(texto); // Valor ""

if (true){
    let texto = "Texto Let modificado" // Texto Let modificado
    console.log(texto);
}

console.log(texto); // Curso JS