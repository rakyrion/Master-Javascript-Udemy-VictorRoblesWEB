'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos un numero mal que nos lo vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de
sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

while(isNaN(numero1)||isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer número",0));
    numero2 = parseInt(prompt("Introduce el segundo número",0));
}

/* ESTE ES MI CODIGO ANTES DE VER LA SOLUCION DE VICTOR

PROBLEMA: REESCRIBO EL TEXTO Y LA OPERACIÓN MUCHAS VECES

document.write("<h1>Estos son las operaciones de los números "+numero1+" y "+numero2+"</h1>");
document.write("Esta es la suma: "+numero1+" + "+numero2+ " = "+(numero1+numero2)+"<br />");
document.write("Esta es la resta: "+numero1+" - "+numero2+ " = "+(numero1-numero2)+"<br />");
document.write("Esta es la multiplicación: "+numero1+" x "+numero2+ " = "+(numero1 * numero2)+"<br />");
document.write("Esta es la división: "+numero1+" / "+numero2+ " = "+(numero1 / numero2)+"<br />");
alert("Estos son los resultados :\n"+"Suma : "+(numero1 + numero2)+"\nResta : "+(numero1 - numero2)+"\nMultiplicación : "+(numero1 * numero2)+"\nDivisión : "+(numero1 / numero2))
console.log("Esta es la suma : "+(numero1 + numero2));
console.log("Esta es la resta : "+(numero1 - numero2));
console.log("Esta es la multiplicación : "+(numero1 * numero2));
console.log("Esta es la división : "+(numero1 / numero2));

*/

// ALGO SIMILAR A ESTO ES LA SOLUCIÓN DE VICTOR... No es mucho mas corta pero "SOBRETODO MAS FACIL DE LEER Y COMPRENDER. Y REUTILIZAMOS MAS CODIGO"
// Establecemos todos los resultados en una variable.
var resultado = "Esta es la suma: "+numero1+" + "+numero2+ " = "+(numero1+numero2)+"<br />"+
                "Esta es la resta: "+numero1+" - "+numero2+ " = "+(numero1-numero2)+"<br />"+
                "Esta es la multiplicación: "+numero1+" x "+numero2+ " = "+(numero1 * numero2)+"<br />"+
                "Esta es la división: "+numero1+" / "+numero2+ " = "+(numero1 / numero2)+"<br />"

// Tenemos que crear otra variable para los resultados en console y alert. Ya que el salto de linea "br" solo es para HTML

var resultadoCMD = "Esta es la suma: "+numero1+" + "+numero2+ " = "+(numero1+numero2)+"\n"+
                "Esta es la resta: "+numero1+" - "+numero2+ " = "+(numero1-numero2)+"\n"+
                "Esta es la multiplicación: "+numero1+" x "+numero2+ " = "+(numero1 * numero2)+"\n"+
                "Esta es la división: "+numero1+" / "+numero2+ " = "+(numero1 / numero2)+"\n"
document.write(resultado);
console.log(resultadoCMD);
alert(resultadoCMD);