$(document).ready(function(){
    /*ocultacion de todos los botones*/
    $(".tarjin1").hide();
    $(".tarjin2").hide();
    $(".tarjin3").hide();
   

    /*ocultacion de cerrar botones cuando clico en uno*/
         $(".btnin1").click(function(){
         $(".tarjin1").toggle(1000);

         if($(".tarjin2").is(":visible")){
            $(".tarjin2").toggle(1000)
         };
         if($(".tarjin3").is(":visible")){
            $(".tarjin3").toggle(1000)
         };
        
    }) 
        
    $(".btnin2").click(function(){
        $(".tarjin2").toggle(1000);

        if($(".tarjin1").is(":visible")){
           $(".tarjin1").toggle(1000)
        };
        if($(".tarjin3").is(":visible")){
           $(".tarjin3").toggle(1000)
        };
        
   }) 

     $(".btnin3").click(function(){
     $(".tarjin3").toggle(1000);

     if($(".tarjin1").is(":visible")){
        $(".tarjin1").toggle(1000)
     };
     if($(".tarjin2").is(":visible")){
        $(".tarjin2").toggle(1000)
     };
     
     
     
   
    })
     

})