


$(document).ready(function(){


   /*jquery de tarjetas leer mas.... vivero*/
    $(".parrafopuri1").hide();
    $(".parrafopuri2").hide();
    $(".parrafopuri3").hide();


    $(".botonpuri1").click(function(){
        $(".parrafopuri1").toggle(1000);
        if($(".parrafopuri2").is(":visible")){
            $(".parrafopuri2").toggle(1000) 
        };
        if($(".parrafopuri3").is(":visible")){
            (".parrafopuri3").toggle(1000) 
        };
       
   
        });

     $(".botonpuri2").click(function(){
        $(".parrafopuri2").toggle(1000);
        if($(".parrafopuri1").is(":visible")){
            $(".parrafopuri1").toggle(1000) 
        };
        if($(".parrafopuri3").is(":visible")){
            (".parrafopuri3").toggle(1000) 
        };
        
       
         });

    $(".botonpuri3").click(function(){
            $(".parrafopuri3").toggle(1000);
            if($(".parrafopuri1").is(":visible")){
                $(".parrafopuri1").toggle(1000) 
            };
            if($(".parrafopuri2").is(":visible")){
                $(".parrafopuri2").toggle(1000) 
            };
            
                              
            });


            // deportes purificacion tomas tarjetas
            $(".dtext-1").hide();
            $(".dtext-2").hide();
            $(".dtext-3").hide();

$(".dboton-1").click(function(){
    $(".dtext-1").toggle(1000);
    if($(".dtext-2").is(":visible")){
        $(".dtext-2").toggle(1000)  
    };
    if($(".dtext-3").is(":visible")){
        $(".dtext-3").toggle(1000)   
    };
});

$(".dboton-2").click(function(){
    $(".dtext-2").toggle(1000);
    if($(".dtext-1").is(":visible")){
        $(".dtext-1").toggle(1000)  
    };
    
    if($(".dtext-3").is(":visible")){
        $(".dtext-3").toggle(1000)
    };
});

$(".dboton-3").click(function(){
    $(".dtext-3").toggle(1000);
    if($(".dtext-1").is(":visible")){
        $(".dtext-1").toggle(1000)  
    };
    if($(".dtext-2").is(":visible")){
        $(".dtext-2").toggle(1000)   
    };
   
});
            



});