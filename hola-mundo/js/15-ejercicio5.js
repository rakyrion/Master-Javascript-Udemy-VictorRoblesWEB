'use strict'

/*
Muestre todos los numeros divisores de un numero introducido en un prompt
*/

var numero = parseInt(prompt("Introduce un número",0));
document.write("<h1> Los números divisores de "+numero+" son:</h1>");
for (var i = numero; i > 0; i--){
    if((numero % i) == 0){
        document.write("<br>"+i+"</br>");
    }
console.log(i)
}