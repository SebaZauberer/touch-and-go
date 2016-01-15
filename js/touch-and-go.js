$(document).ready(function(){
    $(".expandir").click(function(){
            $(".caja-abierta").animate({
                width: 'toggle'
            });
            $(".caja-abierta").mouseleave(function(){
                $(this).fadeOut('fast',0);
            });
        });
    });