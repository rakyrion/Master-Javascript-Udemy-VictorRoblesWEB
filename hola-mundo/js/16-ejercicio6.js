'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Si numero no es valido que nos pida de nuevo el numero
*/

var numero = parseInt(prompt("Introduce el número",0));
// Victor utiliza este otro código, ya que no es necesario comprobar que sea true, ya que en el momento que no se cumpla la condición de isNaN parara el bucle
// while(isNaN(number))
while(isNaN(numero) == true){
    numero = parseInt(prompt("Por favor, introduce un núnero correcto",0));
}

if(numero % 2 == 0){
    alert("El numero "+numero+" es par");
}
else{
    alert("El numero "+numero+" es impar");
}