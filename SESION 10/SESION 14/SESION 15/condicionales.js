var respuesta = prompt("¿como te sientes el dia de hoy?");

switch(respuesta){

    case "feliz":
        alert("sige estando feliz");
        break;

    case "triste":
       alert("no estes triste todo se soluciona");
       break;

    case "molesto":
        alert("trata de tranquilizarse");
        break;

     default:
        alert("tu estado de animo es complicado");   
        break;
}
