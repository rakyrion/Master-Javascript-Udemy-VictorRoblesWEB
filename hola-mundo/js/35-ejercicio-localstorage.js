'use strict'

var formulario = document.querySelector("#formpeliculas");
var divpeliculas = document.querySelector("#divpeliculas");

formulario.addEventListener('submit', function(){
    console.log("entra")
    var titulo = document.querySelector("#addpelicula").value ;
    if(titulo.trim() != ""){
    localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#peliculas-list");

for (var index in localStorage){
    console.log(localStorage[index]);
    if(typeof localStorage[index] == "string"){
    var li = document.createElement("li");
    li.append(localStorage[index]);
    ul.append(li);
    }
}



var formulariob = document.querySelector("#formBorrado");


formulariob.addEventListener('submit', function(){
    console.log("entra")
    var titulo = document.querySelector("#delPelicula").value ;
    if(titulo.trim() != ""){
    localStorage.removeItem(titulo);
    }
});