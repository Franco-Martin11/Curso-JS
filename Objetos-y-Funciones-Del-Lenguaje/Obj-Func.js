// Objetos del lenguaje

//Console: El objeto console hace referencia a la consola del navegador

//Aviso de precausion
console.warn();
//Aviso de error
console.error();
//Aviso de informacion
console.info();
//Aviso de mensaje
console.log();
//Para representar un elemento como si fuera una objeto JS
console.dir();
//aviso en forma de tabla
console.table();

//Aviso de timein: sirve para saber cuanto tiempo tarda en ejecutarse una instruccion

console.time("cuanto tiempo tarda el codigo");
const arr22 = Array(5000220);

for (let index = 0; index < arr22.length; index++) {
  arr22[index] = index;
}
console.timeEnd("cuanto tiempo tarda el codigo");

//Este metodo te manda por consola las veces que se ejecuta dicho codigo, puede ser util para saber en caso de bajo rendimiento si un bloque de codigo se esta ejecutando mas veces de las necesarias

//Lleva por parametro una flag
console.count();

// En caso de no usar librerias de test con el metodo assert se puede usar para testear el codigo. Este metodo recibe 3 parametros, analaliza en forma de condiccion y en caso de fallar retorna por consola un mensaje de error y en formato OBJETO el contenido del analisis.

let x = 3,
  y = 2,
  pruebaAssert = "se espera que X sea mayor a Y";

console.assert(x < y, { x, y, pruebaAssert });

console.clear();

// Objeto DATE

// esta funcion sirve para obtener la fecha mediante el reloj de node.js

let fecha = new Date();

//Se necesita generar una variable que este asiganada al constructor 'Date()'

console.log(fecha);

// Hay muchos metodos para el objeto Date()

/*
    *.getMonth(),.getFullYear()
    *.getHours(),.getSecond(),.getMinutes()

    *.toLocaleDateString(),.toLocalTimeString()
    *.getUTCHours(), Etc
*/

console.log(fecha.toLocaleTimeString());

// con un setInterval se puede crear un reloj utiizando los datos que devuelve la variable asiganada al constructor

console.clear();
