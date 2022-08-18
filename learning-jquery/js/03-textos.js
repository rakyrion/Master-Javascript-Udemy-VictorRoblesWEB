$(document).ready(function(){

    reloadLinks();

    $("#add_button")
        .removeAttr('disabled')
        .click(function(){
        
        $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
        $('#add_link').val('')
        console.log($('#add_link').val())
        reloadLinks();
    });

    function reloadLinks(){
        $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");

        that.attr('target','_blank');
        that.removeAttr()

        that.text(enlace);
        });
    };
});

