$(document).ready(function(){

    var caja = $('#caja');

    $('#mostrar').hide();
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        caja.fadeIn('slow');
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();

        caja.fadeOut('slow', function(){
            console.log('Cartel ocultado');
        });
    });

    $("#todoenuno").click(function(){
        caja.fadeToggle('fast');
    });

    $('#animar').click(function(){
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '100px',
                        textAlign: 'center',
                    }, 'slow')
                    
            .animate({
                borderRadius: '900px',
                marginTop: '300px',
            }, 'slow')

            .animate({
                borderRadius: '0px',
                marginLeft: '0px',
            }, 'slow')

            .animate({
                fontSize: '16px',
                height: '50px',
                marginTop: '0px',
            }, 'slow')

    });
});