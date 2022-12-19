var numero=5;
while(numero<=10){
    console.log("hola");
    numero=numero+1      //numero=5+1=6   numero=6+1=7
}
//RETO 1
let num=0 //INICIALIZANDO UNA VARIABLE O LET
while(num<=100){

    console.log(num);
    num=num+2;  //ACTUALIZANDO A LOS PARES
}
//RETO 2
let number=1
while(number<=12){

    console.log(number);
    number=number+2;
}
//RETO 3
let numeros=1
while(numeros<=12){
    
    console.log(numeros);
    numeros=numeros+1
}
//RETO 4: RECORRIENDO ARREGLOS
var juegos =["minecraf","FIFA",50,25,10]// 5 ELEMENTOS

let i=0//INICIALIZANDO
while(i<=(juegos.length-1 ));
  console.log(juegos[i]);
  i=i+1

let valor = 0;
do{
   console.log(valor);
   valor=valor+1;

}while( valor<=10);

let inicio=1
do{

    console.log(inicio);
    inicio=inicio+2

}while( inicio<=100 );

let comienzo= 0;
do{

    console.log(comienzo);
    comienzo=comienzo+1;

}while( comienzo<=20 );

var dato = prompt("INGRESA TU EDAD:");
const patron= /hola[0-9]/ // patrones de una palabra con un numero
do{
  
}while(!patron.test(dato));


