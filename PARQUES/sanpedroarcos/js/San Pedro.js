$(document).ready(function(){

    $("#horarios").hide().delay(5000).fadeIn(5000);
    

})

$(document).ready(function(){

    $("#boton1").click(function(){
        $(".parrafo1").toggle(1000)

        if($(".parrafo2").is(":visible")){
           $(".parrafo2").toggle(1000) 
        }
        if($(".parrafo3").is(":visible")){
            $(".parrafo3").toggle(1000) 
        }
    

    })

    $("#boton2").click(function(){
        $(".parrafo2").toggle(1000)

        if($(".parrafo1").is(":visible")){
            $(".parrafo1").toggle(1000) 
        }
        if($(".parrafo3").is(":visible")){
            $(".parrafo3").toggle(1000) 
        }
    
    })
    
    $("#boton3").click(function(){
        $(".parrafo3").toggle(1000)

        if($(".parrafo1").is(":visible")){
            $(".parrafo1").toggle(1000) 
        }
        if($(".parrafo2").is(":visible")){
            $(".parrafo2").toggle(1000) 
        }
    
    })

});

$(document).ready(function(){

    $("#banner").hide().delay(3000).fadeIn(5000);

});
