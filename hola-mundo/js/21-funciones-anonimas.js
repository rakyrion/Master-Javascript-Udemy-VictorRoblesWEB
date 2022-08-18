'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: "+ nombre;
}

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    // Invocamos las funciones anonimas para que al ejecutar sumame ejecute estas funciones 
    // y establecer el "dato" que en este caso será la var "sumar"
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// De esta manera podriamos tener una función en la que al usuario solo le pedimos 2 valores
// Los dos numeros a sumar. Y nosotros establecemos las funciones anonimas
// Para que haga otras cosas
sumame (5, 7, function(dato){
    console.log("La suma es: ",dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
}
)
