//* Temporizadores

//? En JS hay dos tipos de temporizadores ,es decir funciones que nos permiten accionar luego de un tiempo determinado

//*SetTimeout
//? SetTimeout recibe un callback (Es decir una funcion a ejecutar) y luego un parametro donde se escribiria en ms luego de que tiempo se ejecuta ese callback

setTimeout(() => {
  console.warn("esto es un callback con timeout");
}, 3000);

