'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros
introducidos por el usuario
*/
var numeros = [];

var numero1= parseInt(prompt("Introduce el primer numero",0));
var numero2= parseInt(prompt("Introduce el segundo numero",0));

console.log(numero1);
console.log(numero2);

// Solucion Victor
/*
document.write("<h1> De "+numero1+" a "+numero2+" están estos numeros:</h1>")
for(var i = numero1; i<= numero2; i++){
    document.write(i+"<br/>")
}

//Problema de la solución de Victor: Si introduces el numero 2 mayor que el
//Numero 1 no funciona

//Mi solución
*/
//Al principio lo hice mostrando el mensaje con Alert (Como en el else if). 
// Al ver la solución de Victor probé a hacerlo escribiendolo en el body de la pagina (document.writeS)
if(numero1 > numero2){
    document.write("<h1> Entre el número "+numero1+" y el número "+numero2+" están los números: </h1><br>")
    while(numero1 >= numero2){
        numero1--;
        numeros.push(numero1); 
    }
   document.write(numeros+"</br>")
       
    
}

else if(numero2 > numero1){
    while(numero2 >= numero1){
        numero2--;
        numeros.push(numero2);
    }
    alert("Estos son los numeros entre los dos números: "+numeros);
}

