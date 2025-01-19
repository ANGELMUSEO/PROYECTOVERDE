$(document).ready(function () {
    
    $(".parrafocas1").hide();
    $(".parrafocas2").hide();
    $(".parrafocas3").hide();


    $(".botoncat").click(function () {
        $(".parrafocas1").toggle(1000);
        if($(".parrafocas2").is(":visible")){
            $(".parrafocas2").toggle(1000); 
        };
        if($(".parrafocas3").is(":visible")){
            $(".parrafocas3").toggle(1000); 
        };
       
    
    });

    $(".botonfer").click(function () {
        $(".parrafocas2").toggle(1000);
        if($(".parrafocas1").is(":visible")){
            $(".parrafocas1").toggle(1000); 
        };
         if($(".parrafocas3").is(":visible")){
            $(".parrafocas3").toggle(1000); 
        };
       

    });

    $(".botonjos").click(function () {
        $(".parrafocas3").toggle(1000);
        if($(".parrafocas1").is(":visible")){
            $(".parrafocas1").toggle(1000); 
        };
        if($(".parrafocas2").is(":visible")){
            $(".parrafocas2").toggle(1000); 
        };
        

    });

          

    });
   
   





