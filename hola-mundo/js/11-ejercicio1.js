'use strict'

/*
Programa que pida 2 numeros y que nos diga cual es el mayor, el menor
y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir

*/

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero",0));
    numero2 = parseInt(prompt("Introduce el segundo numero",0));
}
console.log(numero1,numero2);

/* 
ESTE ES MI EJERCICIO ANTES DE VER EXPLICACION.
RESULTADO PARECIDO PERO NO ES EXACTAMENTE LO QUE DICE EL EJERCICIO
EL MIO TE DICE QUE UN NUMERO ES MAYOR QUE EL OTRO
Y EL EJERCICIO PIDE QUE ESPECIFIQUES CUAL ES EL MAYOR Y CUAL EL MENOR
ADEMAS; ELSE NO SIRVE PARA DECIR QUE CUALQUIER OTRO CASO SON IGUALES.
YA QUE SI NO INTRODUCES NUMEROS TAMBIEN TE DARIA ESE RESULTADO.
HAY QUE HACERLO CON:

else if (numero1 == numero2){
    alert("Los dos numeros son iguales; ("+numero1+") es igual que ("+numero2+")"
}
 */

/*
if (numero1 > numero2){
    alert("El primer numero ("+numero1+") Es mayor que el segundo numero ("+numero2 +")")
}
else if(numero1 < numero2){
    alert("El segundo numero ("+numero2+") Es mayor que el primer numero ("+numero1 +")")
}
else {
     alert("Los dos numeros son iguales; ("+numero1+") es igual que ("+numero2+")")
}
*/

if(numero1 == numero2){
    alert("Los dos numeros son iguales; ("+numero1+") es igual que ("+numero2+")")
}
else if(numero1 > numero2){
    alert("El primer número ("+numero1+") es el mayor.")
    alert("El segundo número ("+numero2+") es el menor.")
}
else if(numero2 > numero1){
    alert("El segundo número ("+numero2+") es el mayor.")
    alert("El primer número ("+numero1+") es el menor.")
}
else{
    alert("INTRODUCE NUMEROS CORRECTOS");
}

