var respuesta1="";
var respuesta2="";
var respuesta3="";
var respuesta4="";
var respuesta5="";
var respuesta6="";
var respuesta7="";
var respuesta8="";
var respuesta9="";
var respuesta10="";

var cont=0;

function enviarRespuesta1(){
    
    var opcion = document.getElementsByName("p1");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta1 = opcion[i].value;
                break;
            }
        }

        if(respuesta1 == "Ecuador"){
            cont++;
        }
    console.log("Respuesta 1: " , cont);
    return respuesta1;
}



function enviarRespuesta2(){
    
    var opcion = document.getElementsByName("p2");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta2 = opcion[i].value;
                break;
            }
        }

        if(respuesta2 == "Serbia"){
            cont++;
        }
    console.log("Respuesta 2: " , cont);
    return respuesta2;
}




function enviarRespuesta3(){
    
    var opcion = document.getElementsByName("p3");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta3 = opcion[i].value;
                break;
            }
        }

        if(respuesta3 == "Guatemala"){
            cont++;
        }
    console.log("Respuesta 3: " , cont);
    return respuesta3;
}



function enviarRespuesta4(){
    
    var opcion = document.getElementsByName("p4");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta4 = opcion[i].value;
                break;
            }
        }

        if(respuesta4 == "Senegal"){
            cont++;
        }
    console.log("Respuesta 4: " , cont);
    return respuesta4;
}



function enviarRespuesta5(){
    
    var opcion = document.getElementsByName("p5");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta5 = opcion[i].value;
                break;
            }
        }

        if(respuesta5 == "Puerto-Rico"){
            cont++;
        }
    console.log("Respuesta 5: " , cont);
    return respuesta5;
}



function enviarRespuesta6(){
    
    var opcion = document.getElementsByName("p6");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta6 = opcion[i].value;
                break;
            }
        }

        if(respuesta6 == "Siria"){
            cont++;
        }
    console.log("Respuesta 6: " , cont);
    return respuesta6;
}



function enviarRespuesta7(){
    
    var opcion = document.getElementsByName("p7");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta7 = opcion[i].value;
                break;
            }
        }

        if(respuesta7 == "Lituania"){
            cont++;
        }
    console.log("Respuesta 7: " , cont);
    return respuesta7;
}



function enviarRespuesta8(){
    
    var opcion = document.getElementsByName("p8");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta8 = opcion[i].value;
                break;
            }
        }

        if(respuesta8 == "Tailandia"){
            cont++;
        }
    console.log("Respuesta 8: " , cont);
    return respuesta8;
}



function enviarRespuesta9(){
    
    var opcion = document.getElementsByName("p9");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta9 = opcion[i].value;
                break;
            }
        }

        if(respuesta9 == "Kazajistan"){
            cont++;
        }
    console.log("Respuesta 9: " , cont);
    return respuesta9;
}



function enviarRespuesta10(){
    
    var opcion = document.getElementsByName("p10");
        
        for(let i=0; i<opcion.length;i++){
            if(opcion[i].checked){
                respuesta10 = opcion[i].value;
                break;
            }
        }

        if(respuesta10 == "Finlandia"){
            cont++;
        }
    console.log("Respuesta 10: " , cont);

    return cont,respuesta10;
     

}
console.log("cantidad de respuestas correctas: " , cont,"/10");



$(document).ready(function () {
    $(".mostrarMensajeFinal").hide();
    $(".respuestas").hide();

    $(".enviarFinal").click(function(){
        if(cont >=7){
    $(".mostrarMensajeFinal").append("<p>Cantidad de Respuestas Correctas: " , cont ,". Aprobaste!!</p>");
    $(".mostrarMensajeFinal").css("color", "rgb(41, 212, 19)");
    $(".mostrarMensajeFinal").fadeIn(3000);
        }
    if(cont <=6){
        $(".mostrarMensajeFinal").append("<p>Cantidad de Respuestas Correctas: " , cont ,". Desaprobaste :(</p>");
        $(".mostrarMensajeFinal").css("color", "rgb(236, 19, 19)");
        $(".mostrarMensajeFinal").fadeIn(3000);
    }

    $(".respuestas").append("<p> Respuestas:" , 
                            "<br>Respuesta 1: " ,respuesta1 , 
                            "<br>Respuesta 2: " ,respuesta2 ,
                            "<br>Respuesta 3: " ,respuesta3 ,
                            "<br>Respuesta 4: " ,respuesta4 , 
                            "<br>Respuesta 5: " ,respuesta5 , 
                            "<br>Respuesta 6: " ,respuesta6 , 
                            "<br>Respuesta 7: " ,respuesta7 , 
                            "<br>Respuesta 8: " ,respuesta8 , 
                            "<br>Respuesta 9: " ,respuesta9 ,
                            "<br>Respuesta 10: " ,respuesta10 ,               
                            
                            "<br><br> <b>Gracias por jugar!<b></p>");


    $(".respuestas").fadeIn(3000);
    });


    $(".respuestaCorrecta1").hide();
    $(".respuestaIncorrecta1").hide();
    $(".respuestaCorrecta2").hide();
    $(".respuestaIncorrecta2").hide();
    $(".respuestaCorrecta3").hide();
    $(".respuestaIncorrecta3").hide();
    $(".respuestaCorrecta4").hide();
    $(".respuestaIncorrecta4").hide();
    $(".respuestaCorrecta5").hide();
    $(".respuestaIncorrecta5").hide();
    $(".respuestaCorrecta6").hide();
    $(".respuestaIncorrecta6").hide();
    $(".respuestaCorrecta7").hide();
    $(".respuestaIncorrecta7").hide();
    $(".respuestaCorrecta8").hide();
    $(".respuestaIncorrecta8").hide();
    $(".respuestaCorrecta9").hide();
    $(".respuestaIncorrecta9").hide();
    $(".respuestaCorrecta10").hide();
    $(".respuestaIncorrecta10").hide();


    var i=0;
    $(".boton").click(function(){
        
        $(".marcador").append("<p> " ,cont, "/" ,(i+1) ," </p>");
        i++;
        


        if(respuesta1 == "Ecuador"){
            $(".respuestaCorrecta1").show();
        }if(respuesta1 == "Venezuela" || respuesta1 == "Colombia"){
            $(".respuestaIncorrecta1").show();
        }


        if(respuesta2 == "Serbia"){
            $(".respuestaCorrecta2").show();
        }if(respuesta2== "Eslovenia" || respuesta2 == "Eslovaquia"){
            $(".respuestaIncorrecta2").show();
        }

        if(respuesta3 == "Guatemala"){
            $(".respuestaCorrecta3").show();
        }if(respuesta3== "Nicaragua" || respuesta3=="Honduras"){
            $(".respuestaIncorrecta3").show();
        }

        if(respuesta4 == "Senegal"){
            $(".respuestaCorrecta4").show();
        }if(respuesta4 == "Camerun" || respuesta4== "Ghana"){
            $(".respuestaIncorrecta4").show();
        }

        if(respuesta5 == "Puerto-Rico"){
            $(".respuestaCorrecta5").show();
        }if(respuesta5=="Costa-Rica" || respuesta5 == "Dominicana"){
            $(".respuestaIncorrecta5").show();
        }

        if(respuesta6 == "Siria"){
            $(".respuestaCorrecta6").show();
        }if(respuesta6== "Kuwait" || respuesta6== "Emiratos-Arabes"){
            $(".respuestaIncorrecta6").show();
        }

        if(respuesta7 == "Lituania"){
            $(".respuestaCorrecta7").show();
        }if(respuesta7== "Letonia" || respuesta7=="Estonia"){
            $(".respuestaIncorrecta7").show();
        }

        if(respuesta8 == "Tailandia"){
            $(".respuestaCorrecta8").show();
        }if(respuesta8 == "Nepal" || respuesta8 == "Vietnam"){
            $(".respuestaIncorrecta8").show();
        }

        if(respuesta9 == "Kazajistan"){
            $(".respuestaCorrecta9").show();
        }if(respuesta9 == "Uzbekistan" || respuesta9 == "Afghanistan" ){
            $(".respuestaIncorrecta9").show();
        }

        if(respuesta10 == "Finlandia"){
            $(".respuestaCorrecta10").show();
        }if(respuesta10 == "Noruega" || respuesta10 == "Islandia"){
            $(".respuestaIncorrecta10").show();
        }


    });


    $(".boton").click(function(){
        if(respuesta1 != ""){
        $(".1").hide();
        }

        if(respuesta2 != ""){
            $(".2").hide();
            }

        if(respuesta3 != ""){
        $(".3").hide();
        }

        if(respuesta4 != ""){
        $(".4").hide();
        }

        if(respuesta5 != ""){
        $(".5").hide();
        }

        if(respuesta6 != ""){
        $(".6").hide();
        }

        if(respuesta7 != ""){
        $(".7").hide();
        }

        if(respuesta8 != ""){
        $(".8").hide();
        }

        if(respuesta9 != ""){
        $(".9").hide();
        }

        if(respuesta10 != ""){
        $(".10").hide();
        }
    })
    


});


