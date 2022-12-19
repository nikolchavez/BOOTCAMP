document.getElementById("titulo").innerHTML="VERIFICADO";

document.getElementById("parrafo").innerHTML="HOLA SI FUNCIONA";

document.getElementById("mensaje").innerHTML="prueba";

for(var i=1 ; i<=5 ; i++){

   console.log("hola");
}

var mensaje="BIEN";
for(let x=1; x<=10; x++){

    console.log(mensaje);
}
var texto="HOLA";
for(let y=0; y<=3; y++){

    console.log(texto);
    console.log(y);
}

 //SUMATORIA DE NUMEROS CON FOR 

var suma=0
for(let i=1; i<=100; i++){

    suma=i+suma;
}
  console.log(suma);
  document.getElementById("mensaje").innerHTML=suma;
