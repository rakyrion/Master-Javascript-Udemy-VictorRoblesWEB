$(document).ready(function(){

    var div_datos = $("#datos");
    // Load
    /*
    $('#datos').load("https://reqres.in/");
    */
    // Get y Post

    $.get("https://reqres.in/api/users", {page: 2}, function(response){
    response.data.forEach((element, index) => {
        div_datos.append("<p>"+element.first_name + " " + element.last_name + "</p>")
    })
    });

    
    $("#formulario").submit(function(event){
        event.preventDefault();

        var usuario = {
            "nombre" : $("#nombre").val(),
            "apellido": $("#apellidos").val()
        };

/*
    if(usuario.nombre.trim().length > 0 && usuario.apellido.trim().length > 0){
        $.post($(this).attr("action"), usuario, function(response){
        console.log(response);
    }).done(function(){
        alert("Usuario añadido correctamente");
    });

    }
*/
    $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("Enviando usuario...");
        },
        success: function(response){
            console.log(response);
        },
        error: function(){
            console.log("A ocurrido un error");
        },
        timeout: 2000
    });
    return false;
    });

    
})