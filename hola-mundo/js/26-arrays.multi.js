'use strict'

var categorias = ["Acción", "Terror","Comedia"];
var peliculas =["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

/*var elemento= "";
do{
    elemento = prompt("Introduce tu pelicula: \n O, si quieres salir escribe \"FIN\"")
    
    if(elemento != "FIN"){
        peliculas.push(elemento);
    }
        
}while(elemento != "FIN")
*/

var indice = peliculas.indexOf("La vida es bella");
if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();
console.log(peliculas);

