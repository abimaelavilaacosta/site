    /*Enviar formulario*/
    function sendForm(){
        $(".campo_requerido").css('display','none');
        $('.mensaje_form').empty();
        console.log("Enviar mensaje");
        var nombre_form = $("#nombre_form").val();
        var email_form = $(".correo_form").val();
        var tel_form = $("#tel_form").val();
        var como_se_entero = $("#como_se_entero").val();
        var mensaje_form = $("#mensaje_form").val();
        if (nombre_form == '') {
            $(".nombre_form_messaje").css('display','block');
        }else{
            console.log(email_form);
            if (/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/.test(email_form) == false){
                $(".email_form_messaje").css('display','block');
            }else{
                if (/^\d+$/.test(tel_form) == false) {
                    $(".tel_form_messaje").css('display','block');
                }else{
                    if (como_se_entero == 0) {
                        $(".como_form_messaje").css('display','block');
                    }else{
                        if (mensaje_form == '') {
                            $(".mensaje_form_messaje").css('display','block');
                        }else{
                            var url = "enviar_correo.php";
                            $.ajax({                        
                               type: "POST",
                               url: url,                     
                               data: $("#send_form").serialize(), 
                               success: function(data){
                                parseInt(data);
                                 if (data == 1) {
                                    $('.mensaje_form').append('<p style="color:green;">Su mensaje ha sido envíado correctamente.</p>');
                                 }else{
                                    $('.mensaje_form').append('<p style="color:orange;">Error al enviar, intenta de nuevo en unos minutos.</p>');
                                 }
                               },
                               error: function(data){
                                    $('.mensaje_form').append('<p style="color:orange;">Error al enviar, intenta de nuevo en unos minutos.</p>');
                               }
                           });
                        }
                    }
                }
            }
        }
    }
    /*Enviar formulario END*/






    //this code is for smooth scroll and nav selector
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-default .navbar-nav>li>a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }


    //this code is for animation nav
    jQuery(window).scroll(function () {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if (windowScrollPosTop >= 150) {
            jQuery(".header").css({
                "background": "#B193DD",
            });
            jQuery(".top-header img.logo").css({
                "margin-top": "-16px",
                "margin-bottom": "0"
            });
            jQuery(".navbar-default").css({
                "margin-top": "-15px",
            });
        } else {
            jQuery(".header").css({
                "background": "transparent",
            });
            jQuery(".top-header img.logo").css({
                "margin-top": "10px",
                "margin-bottom": "25px"
            });
            jQuery(".navbar-default").css({
                "margin-top": "12px",
                "margin-bottom": "0"
            });

        }
    });





