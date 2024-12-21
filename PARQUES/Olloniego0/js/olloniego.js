/* js deportes */
$(document).ready(function(){
    /*ocultacion de todos los botones*/
    $(".tarjin1").hide();
    $(".tarjin2").hide();
    $(".tarjin3").hide();
    $(".tarjin4").hide();
    $(".tarjin5").hide();
    $(".tarjin6").hide();

    /*ocultacion de cerrar botones cuando clico en uno*/
         $(".btnin1").click(function(){
         $(".tarjin1").toggle(700);
         $(".tarjin2").hide();
         $(".tarjin3").hide();
         $(".tarjin4").hide();
         $(".tarjin5").hide();
         $(".tarjin6").hide();
    }) 
        
    $(".btnin2").click(function(){
        $(".tarjin2").toggle(700);
        $(".tarjin1").hide();
        $(".tarjin3").hide();
        $(".tarjin4").hide();
        $(".tarjin5").hide();
        $(".tarjin6").hide();
   }) 

     $(".btnin3").click(function(){
     $(".tarjin3").toggle(700);
     $(".tarjin1").hide();
     $(".tarjin2").hide();
     $(".tarjin4").hide();
     $(".tarjin5").hide();
     $(".tarjin6").hide();
    })
    $(".btnin4").click(function(){
        $(".tarjin4").toggle(700);
        $(".tarjin1").hide();
        $(".tarjin2").hide();
        $(".tarjin3").hide();
        $(".tarjin5").hide();
        $(".tarjin6").hide();
       })
     $(".btnin5").click(function(){
        $(".tarjin5").toggle(700);
        $(".tarjin1").hide();
        $(".tarjin2").hide();
        $(".tarjin3").hide();
        $(".tarjin4").hide();
        $(".tarjin6").hide();
       })
       $(".btnin6").click(function(){
        $(".tarjin6").toggle(700);
        $(".tarjin1").hide();
        $(".tarjin2").hide();
        $(".tarjin3").hide();
        $(".tarjin4").hide();
        $(".tarjin5").hide();
       })

})