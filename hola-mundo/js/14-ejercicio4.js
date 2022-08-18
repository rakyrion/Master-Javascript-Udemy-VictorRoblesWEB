'use estrict'

/* Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1= parseInt(prompt("Introduce el primer numero",0));
var numero2= parseInt(prompt("Introduce el segundo numero",0));
var numeros_impares = [];

console.log(numero1);
console.log(numero2);

if(numero1 > numero2){
    document.write("<h1> Entre el número "+numero1+" y el número "+numero2+" están los siguientes números impares: </h1><br>")
    while(numero1 >= numero2){
        if(numero1 % 2 == 1){
        numeros_impares.push(numero1); 
        }
        numero1--;
    }
   document.write(numeros_impares+"</br>")
       
    
}

else if(numero2 > numero1){
    while(numero2 >= numero1){
        if(numero2 % 2 == 1){
        numeros_impares.push(numero2);
        }
        numero2--;
    }
    alert("Estos son los numeros impares entre los dos números: "+numeros_impares);
}


/*
 Solucion de victor:
Pasa como en el otro ejercicio, si pones el numero 2 superior al numero 1 no hace nada.

var numero1= parseInt(prompt("Introduce el primer numero",0));
var numero2= parseInt(prompt("Introduce el segundo numero",0));

while(numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        console.log("El "+numero1+" es impar");
    }
}
*/