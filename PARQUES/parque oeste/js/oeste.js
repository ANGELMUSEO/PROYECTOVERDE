/* Parque del Oeste - General */ 



/* Historia */ 




/* Naturaleza */ 

$(document).ready(function () {


    // Carga la pagina con los textos ocultos
    $(".textv-1").hide();
    $(".textv-2").hide();
    $(".textv-3").hide();
    $(".textv-4").hide();
    $(".textv-5").hide();
    $(".textv-6").hide();
    $(".textv-7").hide();
    $(".textv-8").hide();

    // al hacer click en los botones muestra los textos y oculta el resto
    $(".botonv-1").click(function () {
        $(".textv-1").toggle(500);
        $(".textv-2").hide();
        $(".textv-3").hide();
        $(".textv-4").hide();
        $(".textv-5").hide();
        $(".textv-6").hide();
        $(".textv-7").hide();
        $(".textv-8").hide();

    });
    $(".botonv-2").click(function () {
        $(".textv-2").toggle(500);
        $(".textv-3").hide();
        $(".textv-4").hide();
        $(".textv-5").hide();
        $(".textv-6").hide();
        $(".textv-7").hide();
        $(".textv-8").hide();
        $(".textv-1").hide();
    });

    $(".botonv-3").click(function () {
        $(".textv-3").toggle(500);
        $(".textv-4").hide();
        $(".textv-5").hide();
        $(".textv-6").hide();
        $(".textv-7").hide();
        $(".textv-8").hide();
        $(".textv-1").hide();
        $(".textv-2").hide();
    });

    $(".botonv-4").click(function () {
        $(".textv-4").toggle(500);
        $(".textv-5").hide();
        $(".textv-6").hide();
        $(".textv-7").hide();
        $(".textv-8").hide();
        $(".textv-1").hide();
        $(".textv-2").hide();
        $(".textv-3").hide();
    });

    $(".botonv-5").click(function () {
        $(".textv-5").toggle(500);
        $(".textv-6").hide();
        $(".textv-7").hide();
        $(".textv-8").hide();
        $(".textv-1").hide();
        $(".textv-2").hide();
        $(".textv-3").hide();
        $(".textv-4").hide();
    });

    $(".botonv-6").click(function () {
        $(".textv-6").toggle(500);
        $(".textv-7").hide();
        $(".textv-8").hide();
        $(".textv-1").hide();
        $(".textv-2").hide();
        $(".textv-3").hide();
        $(".textv-4").hide();
        $(".textv-5").hide();
    });

    $(".botonv-7").click(function () {
        $(".textv-7").toggle(500);
        $(".textv-8").hide();
        $(".textv-1").hide();
        $(".textv-2").hide();
        $(".textv-3").hide();
        $(".textv-4").hide();
        $(".textv-5").hide();
        $(".textv-6").hide();
    });

    $(".botonv-8").click(function () {
        $(".textv-8").toggle(500);
        $(".textv-1").hide();
        $(".textv-2").hide();
        $(".textv-3").hide();
        $(".textv-4").hide();
        $(".textv-5").hide();
        $(".textv-6").hide();
        $(".textv-7").hide();
    });



})



/* Deporte */ 

$(document).ready(function(){

    $("#horarios").hide().delay(5000).fadeIn(5000);
    

})

$(document).ready(function(){

    $("#boton1").click(function(){
        $(".parrafo1").toggle(1500)
        $(".parrafo2").hide()
        $(".parrafo3").hide()
    

    })

    $("#boton2").click(function(){
        $(".parrafo2").toggle(1500)
        $(".parrafo1").hide()
        $(".parrafo3").hide()
    
    })
    
    $("#boton3").click(function(){
        $(".parrafo3").toggle(1500)
        $(".parrafo1").hide()
        $(".parrafo2").hide()
    
    })

});

$(document).ready(function(){

    $("#banner").hide().delay(3000).fadeIn(5000);

});




/* Otros */