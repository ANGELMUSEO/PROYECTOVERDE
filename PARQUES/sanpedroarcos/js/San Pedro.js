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
