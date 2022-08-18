'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2){

}
function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){
        console.log("Suma: "+ (numero1 + numero2));
        console.log("Resta: "+ (numero1 - numero2));
        console.log("Multiplicacion: "+ (numero1 * numero2));
        console.log("Division: "+ (numero1 / numero2));
        console.log("*********************");
    }
    else{
        document.write("Suma: "+ (numero1 + numero2)+"<br />");
        document.write("Resta: "+ (numero1 - numero2)+"<br />");
        document.write("Multiplicacion: "+ (numero1 * numero2)+"<br />");
        document.write("Division: "+ (numero1 / numero2)+"<br />");
        document.write("*********************"+"<br />");
    }
    
}

// Invocar o llamar a la función
calculadora(5,3);
calculadora(10,20, true);

