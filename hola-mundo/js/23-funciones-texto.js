'use strict'

// Transformación de textos

/*
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "De aquí al cielo";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

    */
//console.log(typeof dato + dato);

// Calcular longitud del texto

//var nombre = "";

// var nombre = 234;
// Esto nos daria undefined, ya que no es un texto, es un numero.
// Esto nos sirve para ver la longitud del texto y, si de verdad hay un texto.
// Cualquier resultado no correcto significaria que no hay texto (O nada o otras cosas).

// En el array, el length nos devolveria 2. Ya que nos cuenta cuantos
// elementos hay dentro del array 
//var nombre =["Texto1", "Texto2"];

//console.log(nombre.length);


// Concatenar - Unir textos

//var textoTotal = texto1+" "+texto2;
//var textoTotal = texto1.concat(" "+texto2);



// *****
// Aqui cambia al video de busquedas

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso de Victor Robles";
var texto2 = "De aquí al cielo";

//var busqueda = texto1.indexOf("curso");
//var busqueda = texto1.lastIndexOf("curso");
//var busqueda = texto1.search("curso") -> Hace lo mismo que indexOf
//var busqueda = texto1.match("curso");
// La siguiente es para buscar todas las veces que aparezca curso
//var busqueda = texto1.match(/curso/g);

//var busqueda = texto1.substr(14,5);
//var busqueda = texto1.charAt(44);
//var busqueda = texto1.startsWith("Bienvenido");
//var busqueda = texto1.endsWith("Victor Robles");
//var busqueda = texto1.includes("JavaScript");

//var busqueda = texto1.replace("JavaScript","Symfony");
//var busqueda = texto1.slice(14,22);

var busqueda = texto1.split(" ");

//var busqueda = texto1.trim();
console.log(busqueda);

