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
   
   
});

/* El js siempre debajo de la libreria




    $(".parrafo1").hide();
    $(".parrafo2").hide();
    $(".parrafo3").hide();

    $("#boton1").click(function () {
        $(".parrafo1").toggle(500)
        $(".parrafo2").hide()
        $(".parrafo3").hide()


    })

    $("#boton2").click(function () {
        $(".parrafo2").toggle(500)
        $(".parrafo1").hide()
        $(".parrafo3").hide()

    })

    $("#boton3").click(function () {
        $(".parrafo3").toggle(500)
        $(".parrafo1").hide()
        $(".parrafo2").hide()

    })

*/



