'use strict'

/* 

1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página
y la consola
3. Ordenar el array y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, y que nos diga si esta
en el array y además su posicion (indice).

(Se valorará el uso de funciones)
*/


var numeros = [];
var manera = "defecto";

// Victor aquí hace algo similar, pero con una cosa interesante:
// Añade otra propiedad a la función para invocar un "Texto custom" que utilizará más adelante para especificar el tipo de mostrar.
// De esta manera ahorras escibir tanto como yo he hecho mas abajo
// function mostrar (elementos, textoCustom = ""){}
// Asi cuando invocas la funcion, en vez de dar valor a "manera" como hago yo, haces lo siguiente
// mostrar (numeros, "ordenados"); -- Que es mucho mas practico

function mostrar (numeros){
    document.write(`<h1> Estos son los números ${manera}: </h1>
    <h3>${numeros}</h3>
    `);
    console.log("Estos son los números " +manera+": "+numeros);

}

function pedir_numeros(){
    for(let i = 0; i < 6; i++){
        numeros.push(parseInt(prompt("Introduce el numero",0)));
        // Victor por ejemplo ha hecho
        // numeros[i] = parseInt(prompt("Introduce el numero",0));
        // Es lo mismo, pero diferente manera de hacerlo
        // Pero para que su codigo funcione, tienes que inicializar la variable de esta manera:
        // var numeros = new Array(6)  -- Para establecer que tiene 6 huecos el array
        // Luego victor hace tambien el push y se queda con el push
    }
    
}
function busqueda_e_imprime (){
    var numero_a_buscar = parseInt(prompt("Introduce el número que quieres buscar",0));
    numeros.some(pepe => pepe == numero_a_buscar);
    var resultado_busqueda = numeros.findIndex(pepe => pepe == numero_a_buscar);
    if(resultado_busqueda >= 0){
        document.write("El número se encuentra en el array, y está en el indice : "+resultado_busqueda);
    }else{
        document.write("El número solicitado no se encuentra en el array.");
    }
    // A partir de aqui acciones de imprimir
    manera = "introducidos por defecto"
    mostrar(numeros);
    manera = "introducidos de manera ordenada";
    mostrar(numeros.sort(function(a, b){return a-b}));
    manera = "introducidos ordenados a la inversa";
    mostrar(numeros.sort(function(a, b){return b-a}));
    manera = "totales que contiene el array"
    mostrar(numeros.length);
    
    
}


pedir_numeros();
busqueda_e_imprime();




