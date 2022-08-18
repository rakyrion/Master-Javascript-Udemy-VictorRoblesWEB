'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

var textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
    La hora es: ${hora}:${minutos}
`
console.log(textoHora);

// MATHS

console.log(Math.ceil(Math.random()*1000));