'use strict'

// BOM - Browser Object Model

function getBom(){
console.log(window.innerWidth);
//console.log(screen.width);
//console.log(window.innerHeight);
console.log(screen.height);
console.log(window.location);

//window.innerHeight -> Da el valor que tiene la ventana del usuario al momento
// screen.height -> Da el valor que tiene la página web segun las propiedades html
}

// Redirigir dentro de la ventana a otra web
function redirect(url){
    window.location.href = url;
}
getBom();

// Abrir nueva ventana

function abrirVentana(url){
    window.open(url,"","width=400, height=300");
}