'use strict'

// Localstorage

// Comprobar si el navegador es compatible con local storage

if(typeof(Storage) !== "undefined"){
    console.log("Localstorage disponible");
}else{
    console.log("Localstorage no disponible")
}

// Guardar datos

localStorage.setItem("titulo", "Curso de Symfony ...");

// Recuperar elemento

document.querySelector(".peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos

var usuario = {
    nombre: "Adrian Ruiz",
    email: "adrian@adrian.com",
    web: "test.es"
};

// Esto no funcionará porque el navegador no es capaz de recibir el objeto completo
// localStorage.setItem("usuario", usuario);

// Hay que convertir el objeto JSON en un JSON String para que el navegador lo reciba
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
// Igual que para mandarlo, para recuperar un objeto que hemos formateado como
// JSON String, hay que volver a convertirlo en JSON con 
// JSON.parse()
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs)
document.querySelector("#datos").append(" "+ userjs.web +" - "+userjs.nombre);

