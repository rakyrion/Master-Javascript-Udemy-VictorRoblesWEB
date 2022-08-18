// ASI COMPROBAMOS QUE SE HAYA CARGADO CORRECTAMENTE 

// "$" y "jQuery" es lo mismo. se refiere al objeto.
// (document) es el selector, que selecciona el documento
// .ready hace referencia a un evento, con su funcion call back
jQuery(document).ready(function(){
    console.log("Estamos listos!!")

    // Selector de ID
    var rojo = $("#rojo").css("background","red")
                        .css("color","white");

    var amarillo = $("#amarillo").css("background", "yellow")
                                .css("color","green");

    $("#verde").css("background","green")
                .css("color","white");


    // Selectores de clases

    var mi_clase = $(".zebra");

    $(".sin_borde").click(function(){
        console.log("Click dado!!!")
    $(this).addClass("zebra");
    console.log()
    });

    // Selectores de etiqueta

    // Cursor pointer hace que aparezca el icono de la mano haciendo "click"
    var parrafos = $("p").css("cursor","pointer");

    parrafos.click(function(){
        var that= $(this);
        if(!that.hasClass("grande")){
            that.addClass("grande");
        }else{
            that.removeClass("grande")
        }
        
    });

    // Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros
    // $('p,a').addClass('margen-superior');

    var busqueda = $('.elemento2').parent().parent().find('.resaltado');
    console.log(busqueda);
});
