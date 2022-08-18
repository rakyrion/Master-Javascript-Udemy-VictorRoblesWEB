$(document).ready(function(){
   
    // Slider

    if(window.location.href.indexOf('index') > -1){
        $(function(){
            $('.bxslider').bxSlider({
              mode: 'fade',
              captions: true,
              slideWidth: 1200
            });
          });
    }
   
    
    //Posts
    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare nunc. Donec id turpis a erat egestas mattis. Donec volutpat nisi et nunc hendrerit, et finibus nunc tincidunt. Maecenas aliquet lacinia tellus non condimentum. Fusce vulputate varius dolor, quis dignissim erat finibus suscipit. Aliquam mauris nisi, gravida eu risus at, pharetra tincidunt nunc. Donec ac congue risus. Duis at massa imperdiet, consequat nibh eget, volutpat odio. Praesent ut odio tortor. Curabitur vel egestas eros. Nulla malesuada mi quis odio faucibus dictum. Aliquam id metus pretium, fringilla nunc quis, posuere ligula. Praesent vitae auctor orci. Fusce sed pretium nunc. Nunc ut risus semper, eleifend tortor gravida, consectetur quam. Donec non elementum lacus, ut tincidunt est.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare nunc. Donec id turpis a erat egestas mattis. Donec volutpat nisi et nunc hendrerit, et finibus nunc tincidunt. Maecenas aliquet lacinia tellus non condimentum. Fusce vulputate varius dolor, quis dignissim erat finibus suscipit. Aliquam mauris nisi, gravida eu risus at, pharetra tincidunt nunc. Donec ac congue risus. Duis at massa imperdiet, consequat nibh eget, volutpat odio. Praesent ut odio tortor. Curabitur vel egestas eros. Nulla malesuada mi quis odio faucibus dictum. Aliquam id metus pretium, fringilla nunc quis, posuere ligula. Praesent vitae auctor orci. Fusce sed pretium nunc. Nunc ut risus semper, eleifend tortor gravida, consectetur quam. Donec non elementum lacus, ut tincidunt est.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare nunc. Donec id turpis a erat egestas mattis. Donec volutpat nisi et nunc hendrerit, et finibus nunc tincidunt. Maecenas aliquet lacinia tellus non condimentum. Fusce vulputate varius dolor, quis dignissim erat finibus suscipit. Aliquam mauris nisi, gravida eu risus at, pharetra tincidunt nunc. Donec ac congue risus. Duis at massa imperdiet, consequat nibh eget, volutpat odio. Praesent ut odio tortor. Curabitur vel egestas eros. Nulla malesuada mi quis odio faucibus dictum. Aliquam id metus pretium, fringilla nunc quis, posuere ligula. Praesent vitae auctor orci. Fusce sed pretium nunc. Nunc ut risus semper, eleifend tortor gravida, consectetur quam. Donec non elementum lacus, ut tincidunt est.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare nunc. Donec id turpis a erat egestas mattis. Donec volutpat nisi et nunc hendrerit, et finibus nunc tincidunt. Maecenas aliquet lacinia tellus non condimentum. Fusce vulputate varius dolor, quis dignissim erat finibus suscipit. Aliquam mauris nisi, gravida eu risus at, pharetra tincidunt nunc. Donec ac congue risus. Duis at massa imperdiet, consequat nibh eget, volutpat odio. Praesent ut odio tortor. Curabitur vel egestas eros. Nulla malesuada mi quis odio faucibus dictum. Aliquam id metus pretium, fringilla nunc quis, posuere ligula. Praesent vitae auctor orci. Fusce sed pretium nunc. Nunc ut risus semper, eleifend tortor gravida, consectetur quam. Donec non elementum lacus, ut tincidunt est.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare nunc. Donec id turpis a erat egestas mattis. Donec volutpat nisi et nunc hendrerit, et finibus nunc tincidunt. Maecenas aliquet lacinia tellus non condimentum. Fusce vulputate varius dolor, quis dignissim erat finibus suscipit. Aliquam mauris nisi, gravida eu risus at, pharetra tincidunt nunc. Donec ac congue risus. Duis at massa imperdiet, consequat nibh eget, volutpat odio. Praesent ut odio tortor. Curabitur vel egestas eros. Nulla malesuada mi quis odio faucibus dictum. Aliquam id metus pretium, fringilla nunc quis, posuere ligula. Praesent vitae auctor orci. Fusce sed pretium nunc. Nunc ut risus semper, eleifend tortor gravida, consectetur quam. Donec non elementum lacus, ut tincidunt est.'
        },
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare nunc. Donec id turpis a erat egestas mattis. Donec volutpat nisi et nunc hendrerit, et finibus nunc tincidunt. Maecenas aliquet lacinia tellus non condimentum. Fusce vulputate varius dolor, quis dignissim erat finibus suscipit. Aliquam mauris nisi, gravida eu risus at, pharetra tincidunt nunc. Donec ac congue risus. Duis at massa imperdiet, consequat nibh eget, volutpat odio. Praesent ut odio tortor. Curabitur vel egestas eros. Nulla malesuada mi quis odio faucibus dictum. Aliquam id metus pretium, fringilla nunc quis, posuere ligula. Praesent vitae auctor orci. Fusce sed pretium nunc. Nunc ut risus semper, eleifend tortor gravida, consectetur quam. Donec non elementum lacus, ut tincidunt est.'
        },

    ];

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.content}</p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
        `;
        $("#posts").append(post);
    });
    };
   // Selector de tema

   var theme = $("#theme");

   $("#to-green").click(function(){
    theme.attr("href","css/green.css")
    almacenarTema();
   });

   $("#to-red").click(function(){
    theme.attr("href","css/red.css")
    almacenarTema();
   });

   $("#to-blue").click(function(){
    theme.attr("href","css/blue.css")
    almacenarTema();
   });

   function almacenarTema(){
   localStorage.setItem("theme",theme.attr('href'));
   }

   if(localStorage.getItem("theme") != null && localStorage.getItem("theme") != 'undefined' ){
    theme.attr("href",localStorage.getItem("theme"));
   };

   // Scroll arriba de la web
   $('.subir').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    },500);
    
    return false;
   });

   // Login falso

   $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
        location.reload();
   });

   var form_name = localStorage.getItem('form_name');

   if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $('#about p');
        about_parrafo.html("<br><strong>Bienvenido, "+ form_name +"</strong>");
        about_parrafo.append('<a href ="#" id="logout">Cerrar sesión</a>');
        $('#login').hide();
        
        $('#logout').click(function(){
            localStorage.removeItem("form_name");
            location.reload();
        });
   };
   
   // Acordeon

   if(window.location.href.indexOf('about') > -1){

        $('#acordeon').accordion();
   }

   // Reloj
   if(window.location.href.indexOf('reloj') > -1){

    var reloj = moment().format('h:mm:ss');
    $('#reloj').html(reloj);

    setInterval(function(){
        var reloj = moment().format('h:mm:ss');
        $('#reloj').html(reloj);
    },1000);
    };

    if(window.location.href.indexOf('contact') > -1){

        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        // El errorMessagePosition no funciona, parece que la libreria es vieja y ya no sirve
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top' ,
            scrollToTopOnError: true
        });
    }
});