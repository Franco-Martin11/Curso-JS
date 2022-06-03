//* Temporizadores

//? En JS hay dos tipos de temporizadores ,es decir funciones que nos permiten accionar luego de un tiempo determinado

//*SetTimeout
//? SetTimeout recibe un callback (Es decir una funcion a ejecutar) y luego un parametro donde se escribiria en ms luego de que tiempo se ejecuta ese callback

setTimeout(() => {
  console.warn("esto es un callback con timeout");
}, 2500);



//* SetInterval
//? Esta funcion tambien recibe un callback el cual se ejecuta indefinida veces , tambien recibe un parametro de time en formato ms.

/*
setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, );*/



