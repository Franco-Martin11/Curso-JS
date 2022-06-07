//* Callback (Llamada de vuelta/Rotorno)

//? Es una funcion que se va invocar una vez que una funcion padre se ejecute.

//? Una vez declarada la funcion definir el parametro callback y luego hacer la ejecucion dentro del bloque de codigo;

/*
function callbackFunc(value, callback) {
  setTimeout(() => {
    callback(value, value * value + 2);
  }, Math.random() * 1000);
}
*/

//* Una vez llamada la funcion , para por parametro la Funcion callback(en este caso una arrowFunction).

/**
    callbackFunc(3, (value, result) => {
  console.log("inicia callback");
  console.info(`El valor es : ${value} y el resultado es ${result}`);
});
*/

//* Lo que permite las callbacks es tener control del flujo de ejecucion , ya que no se va a ejecutar otra instruccion hasta que no finalice la callback.

/*
* callbackFunc(3, (value, result) => {
  console.log("inicia callback");
  console.info(`El valor es : ${value} y el resultado es ${result}`);

  callbackFunc(3, (value, result) => {
    console.log("inicia callback");
    console.info(`El valor es : ${value} y el resultado es ${result}`);
    callbackFunc(3, (value, result) => {
      console.log("inicia callback");
      console.info(`El valor es : ${value} y el resultado es ${result}`);
    });
  });
});

*/

//! Es un buen mecanismo cuando no se tiene que concatenar varias callbacks

//? Por ejemplo cuando se quiere desencadenar diferentes eventos dependiendo de una validacion, en el caso de tener un error deberias evaluar el error en cada callback por lo tanto no es un buen metodo, ya que se deberia evaluar y resolver en cada una de las instancias (Como solucion se usa la funcion asincrona 'promise'la cual tiene una propiedad que es mas eficiente para capturar y resolver errores).

//* Promesas ('promise')

//? Las promesas trabajan con dos objetos principales , 'resolve'/'reject'

//  Es muy parecido a un expected/result de JEST cuando se hace TDD

function PromiseFunc(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * 5,
      });
    }, Math.random() * 100);
  });
}

//* Las promises tiene dos metodos para las funciones muy imprtantes

/*

? Pueden haber tantos como sean necesarios.

 * .then() : es el metodo que recibe el valor del 'RESOLVE'

 * .catch() : es el metodo que va a capturar y recibir el error explicitado en el 'REJECT'
*/

PromiseFunc(22)
  .then((obj) => console.log(`resolve ${obj.result}, ${obj.value}`))
  .catch();
