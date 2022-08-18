'use strict'

//Tabla de multiplicar por un numero introducido por pantalla

var numero = parseInt(prompt("¿Hasta que tabla necesitas?",0));

/*
document.write("<h1> Aquí tienes la tabla del "+numero+"</h1>");
for(let i= 0; i <= 10;i++){
    document.write(i+" x "+numero+" = "+numero * i+"<br />");
}
*/
//TODAS LAS TABLAS DE MULTIPLICAR hasta la introducida por el usuario

for(let c= 1; c <= numero;c++){
    document.write("<h1>La tabla del "+c+"</h1>");
    for(let i= 0; i <= 10;i++){
        document.write(i+" x "+c+" = "+c * i+"<br />");
    };
}