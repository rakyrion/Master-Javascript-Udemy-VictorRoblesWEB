'use strict'

window.addEventListener("load",() =>{

    var formulario = document.querySelector("#form");
    var boton_comprobar = document.querySelector(".comprobar");
    var box_dashed = document.querySelector(".box");

    // Con esto ocultamos con JS un elemento del HTML para mas adelante "invocarlo"
    box_dashed.style.display = "none";

    function comprobar_datos(){
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var año_nacimiento = document.querySelector("#number").value;
        alert(`
        El nombre que has indicado es: ${nombre} \n
        Los apellidos que has indicado son: ${apellidos}\n
        El año de nacimiento que has indicado es: ${año_nacimiento}
        `);
    }

    boton_comprobar.addEventListener("click", function(){
        comprobar_datos();
    })
    
    formulario.addEventListener("submit" , function(){
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var año_nacimiento = parseInt(document.querySelector("#number").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es válido");
            document.querySelector(".error_nombre").innerHTML="El nombre no es válido";
            return false;
        }else{
            document.querySelector(".error_nombre").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Los apellidos no son válidos");
            return false;
        }

        if(año_nacimiento() == null || año_nacimiento <= 0 || isNaN) {
            alert("La edad no es válida");
            return false;
        }
        
        box_dashed.style.display = "block";
        box_dashed.innerHTML = `
        <p>El formulario se ha enviado</p>
        <p>El nombre que has indicado es: <i>${nombre}</i></p>
        <p>Los apellidos que has indicado son: <i>${apellidos}</i></p>
        <p>El año de nacimiento que has indicado es: <i>${año_nacimiento}</i></p>
        `;
    })
   
    
})
