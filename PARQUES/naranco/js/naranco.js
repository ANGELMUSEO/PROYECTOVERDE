
$(document).ready(function () {
    /* rutas */
    $(".parrafopicu1").hide();
    $(".parrafopicu2").hide();
    $(".parrafopicu3").hide();


    $(".botonpicu1").click(function () {

        $(".parrafopicu2").hide();
        $(".parrafopicu3").hide();
        $(".parrafopicu1").toggle();

    });

    $(".botonpicu2").click(function () {
        $(".parrafopicu1").hide();

        $(".parrafopicu3").hide();
        $(".parrafopicu2").toggle();

    });

    $(".botonpicu3").click(function () {
        $(".parrafopicu1").hide();
        $(".parrafopicu2").hide();
        $(".parrafopicu3").toggle();



    });


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



});

