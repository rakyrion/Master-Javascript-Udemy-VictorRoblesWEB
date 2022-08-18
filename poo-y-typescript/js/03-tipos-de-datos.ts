type alfanumerico = string | number;
// string

let cadena: alfanumerico = "Adrian Ruiz"

cadena = 44;
// number

let numero: number = 12;

// Booleano

let verdadero_falso: boolean = true;

// Any
let cualquiera: any = "hola";
cualquiera = 77;

//Arrays
var lenguajes: Array<any> = ["PHP","JS","CSS", 15];

let years: number[] = [12,13,14];

// Let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1==10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera,lenguajes,years);