/*puntos interés san francisco*/
$(document).ready(function () {
    $(".parrafogranja").hide();
    $(".parrafokiosko").hide();
    $(".parrafoestanque").hide();
    /*jquery Belen */
    $(".parrafo1cons").hide();
    $(".parrafo2").hide();
    $(".parrafo3").hide();

    $("#boton1").click(function () {
        $(".parrafogranja").toggle(500)
        $(".parrafokiosko").hide()
        $(".parrafoestanque").hide()


    })

    $("#boton2").click(function () {
        $(".parrafokiosko").toggle(500)
        $(".parrafogranja").hide()
        $(".parrafoestanque").hide()

    })

    $("#boton3").click(function () {
        $(".parrafoestanque").toggle(500)
        $(".parrafogranja").hide()
        $(".parrafokiosko").hide()

    })

    /**jquery eventos belen */
    $("#boton1").click(function () {
        $(".parrafo1cons").toggle(500)
        $(".parrafo2fue").hide()
        $(".parrafo3escu").hide()
    
    
    });
    
    $("#boton2").click(function () {
        $(".parrafo2fue").toggle(500)
        $(".parrafo1cons").hide()
        $(".parrafo3escu").hide()
    
    });
    
    $("#boton3").click(function () {
        $(".parrafo3escu").toggle(500)
        $(".parrafo1cons").hide()
        $(".parrafo2fue").hide()
    
    });


 

});