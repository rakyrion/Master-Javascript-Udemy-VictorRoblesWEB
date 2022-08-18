'use strict'

window.addEventListener("load", function(){

    //Timers
    // setInterval => Ejecuta en bucle cada x ms que indicamos
    // setTimeout => Lo mismo pero solo ejecuta 1 vez la función despues de X ms
    function intervalo(){
        var tiempo = setInterval(function (){

            console.log("Set interval ejecutado");
           
            var encabezado = document.querySelector(".H1")
            if(encabezado.style.color == "red"){
                encabezado.style.color = "green";
            }else{
                encabezado.style.color = "red";
            }
        }, 500)
        return tiempo;
    }
    
    var tiempo = intervalo();
    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");

    stop.addEventListener("click",function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    })

    start.addEventListener("click", function(){
        alert("Has reiniciado el intervalo en bucle");
        intervalo();
    })
    
}); // End load