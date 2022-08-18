'use strict'

// Condicional if
// Si A es igual a B entonces haz algo

var edad= 69;
var nombre ="David Suarez";

/* Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=

*/
//si pasa esto
if(edad >= 18){
    //Es mayor de edad
    console.log(nombre+" tiene "+edad +" años, es mayor de edad");

    if(edad<=33){
        console.log("Todavia eres millenial");
    }
    else if(edad>=70){
        console.log("Eres anciano")
    }
    else{
        console.log("Ya no eres millenial");
    }
}
else{
    //Es menor de edad
    console.log(nombre+" tiene "+edad +" años, es menor de edad");

}

/*
Operadores lógicos

AND(Y): &&
OR(O): ||
NEGACION: !
*/

var year= 2028;

//NEGACION
if(year != 2016){
    console.log("El año no es 2016 realmente es: "+year);
}

//AND

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR
// Puedes utilizar un parentesis () despues de un operador lógico
// para hacer 2 comprobaciones en uno...

if(year == 2008 || (year>=2018 && year==2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}
