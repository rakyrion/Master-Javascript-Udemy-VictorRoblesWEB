'use strict'


window.addEventListener("load", () =>{

    // Eventos del ratón

    function cambiarColor(){
        var bg = boton.style.background;
        if(bg =="green"){
            boton.style.background = "red";
        }else{
            boton.style.background ="green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

    }

    var boton = document.querySelector("#boton");

    // Click
    boton.addEventListener("click", function(){
        cambiarColor();
        this.style.border = "10px solid black";
    });

    // Mouse over
    boton.addEventListener("mouseover", function(){
        boton.style.background = "yellow";
    });

    // Mouseout
    boton.addEventListener("mouseout", function(){
        boton.style.background = "#ccc";
    });


    // Focus -> Hace la acción cuando entramos en el elemento. En este caso en 
    // la casilla de texto del formulario
    var input = document.querySelector("#campo_nombre");
    input.addEventListener("focus", function(){
        console.log("[focus]Estas dentro del input");
    });

    // Blur -> Hacec la acción cuando salimos del elemento. En este caso
    // al salir de la casilla de texto

    input.addEventListener("blur", function(){
        console.log("[blur]Has salido del input");
    });

    // Keydown -> Registra cuando pulsas una tecla dentro del elemento seleccionado (input en este caso)
    // Keydown lo que hace es devolver un "evento", que esta compuesto por varios elementos, entre
    // ellos la tecla que se pulsa
    // Si solo queremos saber la tecla, podemos utilizar "String.fromCharCode" para sacar el "keyCode".
    // Ver bien el ejemplo

    input.addEventListener("keydown", function(event){
        console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });

    // Keypress


    input.addEventListener("keypress", function(event){
        console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
    });

    // Keyup

    input.addEventListener("keyup", function(event){
        console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
    });
}) // end load
