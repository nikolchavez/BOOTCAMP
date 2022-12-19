let resultado = 0;
function sumando(numero1,numero2   ){

resultado = numero1+numero2; 
return resultado;


}
console.log(sumando(4 , 5 ) );
console.log(sumando(8 ,12) );

var hoyEsUnDiaSoliado; //ejemplo de camel case

//hallando el area de un circulo
let areaCirculo;
let radio;
const pi=3.14;

radio = prompt("INGRESA UN RADIO:" );
areaCirculo = pi*radio*radio; //3.14*5*5 = 78.5
console.log(areaCirculo);

//HALLANDO EL AREA DE UN CIRCULO 
//let resultadoArea;
//let radio;
//const pi=3.14;
//radio = prompt("INGRESA UN RADIO:");
//resultadoArea = pi*radio*radio;//3.14*5*5 = 78.5
console.log(resultadoArea);


//PASANDO CODIGO A FUNCION 
function areaCirculo( radio ){

    const pi-3.14; //cuando usamos const significa que nunca va a cambiar ese valor 
    let resultadoArea;
    resultadoArea - pi*radio*radio;
    return resultadoArea;

}
radio - prompt("INGRESA UN RADIO:");

let radioValor = prompt("INGRESA UN RADIO:");
console.log(areaCirculo( radioValor ));


function notas( calificacion ){

   if(calificacion>=13.){
   alert("USTED APROBO EL CURSO, FELICIDADES");
   }
   else if(calificacion<13){
        alert("USTED JALO EL CURSO, DEBE ESFORZARSE MAS PARA LA PROXIMA")
   }

}
let valorNote = prompt("INGRESA TU NOTA:");
notas(  valorNota  );

function areaTriangulo(  base, altura     ){

       let area = base*altura/2;
       return area;
}

let baseTriangulo - prompt("INGRESA UNA BASE PARA EL TRIANGULO");
let alturaTriangulo - prompt("INGRESA UNA ALTURA PARA EL TRIANGULO");

console.log (areaTriangulo( baseTriangulo , alturaTriangulo  ));


//FUNCION PARA HALLAR EL AREA DE UNH TRIANGULO 
function areaTriangulo( base, altura   ){

    let area = base*altura/2; //base-5 altura-4
    return area;
}

let baseTriangulo - prompt("INGRESA UNA BASE PARA EL TRIANGULO");
let alturaTriangulo - prompt("INGRESA UNA ALTURA PARA EL TRIANGULO");

console.log(areaTriangulo( baseTriangulo , alturaTriangulo  ));

function areaCuadrado( lado  ){

     area=lado*lado;

}
let ladoCuadrado - prompt("INGRESA EL LADO DEL CUADRADO:");
console.log(areaCuadrado( ladoCuadrado));