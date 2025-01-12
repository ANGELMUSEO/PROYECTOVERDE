$(document).ready(function () {
    
    $(".parrafocas1").hide();
    $(".parrafocas2").hide();
    $(".parrafocas3").hide();


    $(".botoncat").click(function () {

        $(".parrafocas2").hide();
        $(".parrafocas3").hide();
        $(".parrafocas1").toggle(1000);

    });

    $(".botonfer").click(function () {
        $(".parrafocas1").hide();

        $(".parrafocas3").hide();
        $(".parrafocas2").toggle(1000);

    });

    $(".botonjos").click(function () {
        $(".parrafocas1").hide();
        $(".parrafocas2").hide();
        $(".parrafocas3").toggle(1000);



    });


    $(".ocultar").hide();
    
    $(".botonocul").click(function () {
        $(".ocultar").toggle(500);
    
    });


    $(".ocultardos").hide();
    
    $(".botonoculdos").click(function () {
        $(".ocultardos").toggle(500);
    
    });

    
    
    $(".ocultres").hide();
    
    $(".botonocultres").click(function () {
        $(".ocultres").toggle(500);
    
    });

    $(".oculcuatro").hide();
    
    $(".botonoculcuatro").click(function () {
        $(".oculcuatro").toggle(500);
    
    });
        


    });
   
   





