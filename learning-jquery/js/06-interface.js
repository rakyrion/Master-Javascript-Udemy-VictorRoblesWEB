$(document).ready(function(){

    // Mover elemento por la pagina
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Seleccionar elementos y ordenar
    //$('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });


    // Drop
    $('#elemento-movido').draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro de el area");
        }
    });

    // Efectos
    $('#mostrar').click(function(){
        $('#caja-efectos').toggle('shake',{}, 4000);
    });

    //Tooltip
    $(document).tooltip();

    //Tooltip Tooltipster
    $('.tooltip').tooltipster({
        theme: 'tooltipster-noir'
    });

   // Dialog
   $('#boton-continuar').click (function(){
    $('.oculto').css('display' , 'inline' )
    $('#popup').dialog()
   });
   
   // Datepicker
   $("#calendario").datepicker();

   // Tabs
   $("#pestanas").tabs();
});