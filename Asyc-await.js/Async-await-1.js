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
}, 1000 );*/

// Con esta funcion se puede hacer un reloj/temporizador sin ningun problema

//*Clear

//? En caso de necesitar para el Interval o el Timeout hay 2 metodos para hacerlo

// clearTimeout recibe como parametro dicho timeout en forma de variable

let temporizador = setTimeout(() => {
  console.log("temporizador");
}, 2500);

clearTimeout(temporizador);

// Y en el caso de los intervalos se usa el metodo clearInterval() que tambien recibe un Temporizador en forma de variable

let intervalo = setInterval(() => {
  console.log("intervalo");
}, 2500);

clearInterval(intervalo);

//* Asincronia y Event Loop

//? Asincronia: La asincronia es una pilar muy importante en el lenguaje JS, porque este lenguaje es uno de single thread. Es decir un lenguaje que solo procesa de 1 en 1. Por lo tanto es crucial poder solicitar o procesar escaladamente un codigo.

//? Event Loop : el ciclo de eventos define la manera de procesar las peticiones en el lenguaje, en el caso de JavaScript al tener un procesamiento single thread las peticiones se pueden ir 'Stackeando'(CallStack) e ir resolviendose de una en una dependiendo si son asincronas o no.

//? Concurrencia: Sucede cuando 2 o mas tareas van progresando simultaneamente.

//? Paralelismo: Sucede cuando 2 o mas tareas se ejecutan al mismo tiempo.

//* Operaciones Sincrona y Asincrona

//? Hace referencia a la respuesta de ejecucion , en el caso de operaciones Sincronas la respuesta de la ejecucion es de tipo bloqueante. Es decir la ejecucion va a parar el hilo principal del codigo y hasta que dicha operacion no de una respuesta no continuara la ejecucion del codigo principal. En cambio, Asincrono es lo contrario no espera que la respuesta de la ejecucion sea instantanea, por lo tanto devuelve el curso del hilo principal del codigo y luego cuando sea estipulado devolvera la respuesta a la  ejecucion anteriormente llamada.


