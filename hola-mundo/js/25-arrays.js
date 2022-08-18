'use strict'

// Arrays o Arreglos o Matrices

var nombre= "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", 52, true];


// new Array nos crea el objeto "Array" 
var lenguajes = new Array("PHP","JS", "GO", "Java");

/*
var elemento = parseInt(prompt("Que elemento del array quieres??",0));
if (elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length);
}else{
    alert(nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

lenguajes.forEach((elemento) => {
    document.write("<li>"+elemento+"</li>");   
});
/*
for(var i= 0; i < lenguajes.length; i++){

document.write("<li>"+lenguajes[i]+"</li>");    
}
document.write("</ul>")
*/
