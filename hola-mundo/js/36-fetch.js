'use strict'

// Fetch(ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_ervin = document.querySelector("#ervin");
var div_profesor = document.querySelector("#profesor");
var cargando = document.querySelector(".cargando");

    getUsuarios()
        .then (data => data.json())
        .then (users => {
            listadoUsuarios(users);

            return getInfo();
           
        })
        .then(data => {
            div_profesor.innerHTML = data;

            return getErvin();
        })
        .then(data => data.json())
        .then(user => {
            mostrarErvin(user)
        })
        .catch(error =>{
            alert("Error en las peticiones");
        })
        
        


function getUsuarios(){
    return fetch("https://jsonplaceholder.typicode.com/users");
}

function getErvin(){
    return fetch("https://jsonplaceholder.typicode.com/users/2");
}

function getInfo(){
    var profesor = {
        nombre: "Victor",
        apellidos: "Robles",
        url: "https://victorroblesweb.es"
    };
    return new Promise((resolve, reject) =>{
        var profesor_string = "";
        setTimeout( function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != "string" || profesor_string == "") return reject("error configurado");
            document.querySelector("#profesor .cargando").style.display = "none";
            return resolve(profesor_string);
        },3000);

        
    });

    
}
function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement("h2");

        nombre.innerHTML = i + user.name + " " + user.email;
        console.log(nombre);
        div_usuarios.appendChild(nombre);
        cargando.style.display= "none";
    })
};

function mostrarErvin(user){

        let nombre = document.createElement("h4");
        nombre.innerHTML = user.name + " " + user.email;
        console.log(nombre);
        div_ervin.appendChild(nombre); 
        document.querySelector("#ervin .cargando").style.display = "none";
    }
