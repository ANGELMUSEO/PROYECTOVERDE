


$(document).ready(function(){


   /*jquery de tarjetas leer mas.... vivero*/
    $(".parrafopuri1").hide();
    $(".parrafopuri2").hide();
    $(".parrafopuri3").hide();


    $(".botonpuri1").click(function(){
       
        $(".parrafopuri2").hide();
        $(".parrafopuri3").hide();
        $(".parrafopuri1").toggle();
   
        });

     $(".botonpuri2").click(function(){
        $(".parrafopuri1").hide();
        $(".parrafopuri3").hide();
        $(".parrafopuri2").toggle();
       
         });

         $(".botonpuri3").click(function(){
            $(".parrafopuri1").hide();
            $(".parrafopuri2").hide();
            $(".parrafopuri3").toggle();
                              
            });


            // deportes purificacion tomas tarjetas
            $(".dtext-1").hide();
$(".dtext-2").hide();
$(".dtext-3").hide();

$(".dboton-1").click(function(){
    $(".dtext-1").toggle(1000);
    $(".dtext-2").hide();
    $(".dtext-3").hide();
});

$(".dboton-2").click(function(){
    $(".dtext-1").hide();
    $(".dtext-2").toggle(1000);
    $(".dtext-3").hide();
});

$(".dboton-3").click(function(){
    $(".dtext-1").hide();
    $(".dtext-2").hide();
    $(".dtext-3").toggle(1000);
});
            



});