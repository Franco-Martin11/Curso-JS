//* Funciones Anonimas Autoejecutables

//! Se envuelve a la funcion en () para generar el espacio en memoria y se reconozca como tal.

(function () {
  /*let x = Math.random() * 100;
  let numero1 = x * 50;
  numero1 = Math.round(numero1);
  let resultado1 = numero1 / 2;
  console.log(resultado1);*/
})(); //? los parentesis finales sentencian la ejecucion de la función.

//!Siempre usar el ; para evitar un conflicto de bloques.

//Todo: Con esta tecnica se pueden hacer scripts/plugins o abreviaturas para sintetizar el trabajo

/*(function (c) {
  c.log("esto es una prueba");
})(console);*/

//? Al pasar el objeto 'console' por parametro , se puede usar dentros de la funcion sin solo llamando a el nombre de referencia de dicho parametro en este caso la letra 'c'.


//*Hay una manera mas abreviada de nombrar a una funcion IIFE y es utilizando el simbolo de admiración.

/*!(function (cns) {
  let nombre = "franco";
  cns.log(`mi nombre es ${nombre}`);
})(console);*/