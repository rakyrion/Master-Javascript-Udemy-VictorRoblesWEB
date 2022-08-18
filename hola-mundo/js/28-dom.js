'use strict'

// DOM - Document Object Mode

function cambiaColor(color){
    caja.style.background = color;
}

// Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!"
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";


// Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");

//var contenidoEnTexto = todosLosDivs[2];
//contenidoEnTexto.innerHTML = "Otro texto para el segundo DIV";

// --- "Recorrer todos los elementos" div para crear parrafos

var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

// El for in recorre cada indice de todosLosDivs y pone el valor del
// indice en la variable valor
for(valor in todosLosDivs){
    // Esto comprueba que el contenido sea un "string"
    if(typeof todosLosDivs[valor].textContent == "string"){
        // Esto crea un elemento "p" en el HTML, y damos ese valor a una variable
        var parrafo = document.createElement("p");
        // Esto crea un texto con el "text content" de cada pasada que hace la variable valor
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        // Envia el contenido del texto al elemento p. Eso hace appendChild
        parrafo.appendChild(texto);
        // Seleccionamos la sección con la variable que utiliza querySelector para targetear
        seccion.appendChild(parrafo);
    }


    /* Por pasos lo que hace esta funcion es:
    Ejecuta la función 1 vez por cada "valor" (index) en todos los div
    Comprueba que el contenido de cada index dentro de todosLosDivs sea un texto. Si es así:
    crea una variable parrafo con un elemento "p" (No hay que poner <p>, porque ya esta creando un elemento y se hace solo)
    Crea un texto, al que le da el valor del "textContent" del indice que esta recorriendo esta vez.
    Envia el contenido del texto. con "appendChild", haciendo que ahora parrafo tenga el "elemento" y el texto dentro del elemento.
    Por ultimo seleccionamos la sección donde queremos enviarlo y con "append" child lo ponemos dentro del elemento seccion.

    Cada "pasada" de la funcion for in creará de nuevo el parrafo y dará valores nuevos segun el indice.
    */
}

// En este caso podemos usar append en vez de append child.
// Si utilizaramos prepend es lo mismo pero lo añade al final.
seccion.append(hr);



// ----- Conseguir elementos por su clase css

// Esto solo coge el primer elemento con la clase "rojo"
//var divsRojos = document.querySelector(".rojo");

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");

// Para establecer valores no se puede hacer a todos a la vez. El siguiente codigo da error
// divsRojos.style.background = "red";

// Hay que seleccionar a que elemento del array que nos ha creado queremos aplicarlo, como:
// divsRojos[0].style.background = "red";

// O hacer un bucle que recorra los diferentes arrays y los haga a todos

for(var index in divsRojos){
    if(divsRojos[index].className == "rojo"){
    divsRojos[index].style.background = "red";
    }
}

for(var index in divsAmarillos){
    if(divsAmarillos[index].className == "amarillo"){
    divsAmarillos[index].style.background = "yellow";
    }
}


// Query selector

var id = document.querySelector("#encabezado");
var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);
