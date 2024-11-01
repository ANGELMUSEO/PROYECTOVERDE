//vivero


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


             /* fin jquery de tarjetas leer mas.... vivero*/
});


//deportes

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
        $(".tarjin1").fadeIn(3000).delay(2000).fadeOut(10000);
        $(".tarjin2").hide();
        $(".tarjin3").hide();
        $(".tarjin4").hide();
        $(".tarjin5").hide();
        $(".tarjin6").hide();
   }) 
       
   $(".btnin2").click(function(){
       $(".tarjin2").fadeIn(3000).delay(2000).fadeOut(10000);
       $(".tarjin1").hide();
       $(".tarjin3").hide();
       $(".tarjin4").hide();
       $(".tarjin5").hide();
       $(".tarjin6").hide();
  }) 

    $(".btnin3").click(function(){
    $(".tarjin3").fadeIn(3000).delay(2000).fadeOut(10000);
    $(".tarjin1").hide();
    $(".tarjin2").hide();
    $(".tarjin4").hide();
    $(".tarjin5").hide();
    $(".tarjin6").hide();
   })
   $(".btnin4").click(function(){
       $(".tarjin4").fadeIn(3000).delay(2000).fadeOut(10000) ;
       $(".tarjin1").hide();
       $(".tarjin2").hide();
       $(".tarjin3").hide();
       $(".tarjin5").hide();
       $(".tarjin6").hide();
      })
    $(".btnin5").click(function(){
       $(".tarjin5").fadeIn(3000).delay(2000).fadeOut(10000) ;
       $(".tarjin1").hide();
       $(".tarjin2").hide();
       $(".tarjin3").hide();
       $(".tarjin4").hide();
       $(".tarjin6").hide();
      })
      $(".btnin6").click(function(){
       $(".tarjin6").fadeIn(3000).delay(2000).fadeOut(10000);
       $(".tarjin1").hide();
       $(".tarjin2").hide();
       $(".tarjin3").hide();
       $(".tarjin4").hide();
       $(".tarjin5").hide();
      })

})