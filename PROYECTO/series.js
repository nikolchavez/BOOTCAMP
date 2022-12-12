var preguntas = [
    "¿cuantos capitulos tiene la serie de los simpson?",
    "¿cuanddo se estreno The Walking Dead?",
    "¿cómo se llama el  personaje principal de la serie Vincenzo en la vida real?"
    
];

var opciones = [
    ["100 capitulos",
    "550 capitulos",
    "728 capitulos",
    "1000 caitulos",
    "220 capitulos"]
    ["31 de noviembre del 2010",
    "20 de octubre del 2010",
    "31 de octubre del 2009",
    "30 de octubre del 2010",
    "31 de octubre del 2010"]
    ["Ok Taec-yeon",
    "Yang Kyung-wons",
    "Kwak Dong-yeon",
    "Song Joong-ki",
    "Kim Sung-cheol"]
    
    ];

    var PuntajePorOpcion=[
        [0,0,5,0,0],
        [0,0,0,0,5],
        [0,0,0,5,0]
    ];

    var i=0;

    function SiguientePregunta(){
        document.getElementById("pregunta").innerHTML=preguntas[i];
        
        document.getElementById("op1").innerHTML=opciones[i][0];
        document.getElementById("op2").innerHTML=opciones[i][1];
        document.getElementById("op3").innerHTML=opciones[i][2];
        document.getElementById("op4").innerHTML=opciones[i][3];
        document.getElementById("op5").innerHTML=opciones[i][4];
       
    }

 SiguientePregunta();

var actualizado=0;

function actualizarPuntaje(alternativa){
    actualizado=PuntajePorOpcion[i][alternativa]+actualizado;

    i++;

    if (i<3){

        SiguientePregunta();
    }
    else{
        mostrarResultado();

    }
}

document.getElementById("op1").addEventListener("click",function(){actualizarPuntaje(0)});
document.getElementById("op2").addEventListener("click",function(){actualizarPuntaje(1)});
document.getElementById("op3").addEventListener("click",function(){actualizarPuntaje(2)});
document.getElementById("op4").addEventListener("click",function(){actualizarPuntaje(3)});
document.getElementById("op5").addEventListener("click",function(){actualizarPuntaje(4)});


function mostrarResultado(){

    document.getElementById("titulo").innerHTML="RESULTADO";
    document.getElementById("pregunta").innerHTML="El puntaje obtenido es: "+actualizado;
    document.getElementsByClassName("pregunta_alternativas")[0].innerHTML="";
    
    var img=document.createElement('img'); 
    img.setAttribute("src","https://i.pinimg.com/564x/69/27/1c/69271c6a5b462322921de2511de2109d.jpg"); 
    img.setAttribute("width","450"); 
    img.setAttribute("height","260"); 
    document.getElementsByClassName("pregunta_alternativas")[0].appendChild(img);

}