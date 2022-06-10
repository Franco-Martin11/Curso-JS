//* Programacion Funcional

//? Este paradigma se basa en la ejecucion de instrucciones apartir de funciones-

/* Caracteristicas
 * Funciones de orden superior : Son dichas funciones que reciben por parametro un callback o funciones de primer orden
 * Funciones de primer orden : Son funciones estilo callback las cuales ejecutan una tarea
 * Una de las principales caracteristicas es la inmutabilidad
 */

let fnPrimerOrden = (value, multply) => (value = value * multply);

let fnOrdenSuperior = (fn) => {
  let result = console.log(fn);
  return result;
};

//  fnOrdenSuperior(fnPrimerOrden(22, 2));

//* Este paradigma metodos ya predeterminados que se pueden usar

/*
?   .filter()
?   .map()
?   .reduce()
 */

const ArrayFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? El metodo '.filter()' para los arreglos lo que hace es buscar elemento por elemento una condicion y asi filtar las respuestas verdaderas de la condicion y las falsas las descarta. Ya que dicha ejecucion se lleva acabo desde una variable independiente el resultado no va a sobrescribir el array original, por lo tanto es un metodo que tiene la caracteristica de la inmutabilidad.

//* El parametro 'e' hace referencia a el elemento ejecutado, este metodo por implicitamente hace una especie de 'forEach()' que analiza una condicion y mediante ese analisis hace un '.push()' a un nuevo array.

let numFiltrados = ArrayFilter.filter((e) => e > 4 && e <= 8);

//console.log(numFiltrados);
//console.log(ArrayFilter);

//* Metodo '.map()' para los arreglos lo que hace es por cada elemento hacer una operacion

// En este caso la operacione que va a hacer es una multiplicacion de cada elemento del array
//? Este metodo al igual que los demas no modifica el array original sino que crea un array nuevo con los resultados
let numMap = ArrayFilter.map((e) => e * 5);

//console.log(numMap);

//* Metodo '.reduce()' para los arreglos , lo que hace es reducir el valor de todos los elementos en uno solo para ello recibe por parametro 2 variables , una que va a guardar el acumulado (acc) y otra que va a representar el elemento(e).

//? reduce hace un recorrido por todo el array y devuelve la reduccion del elemento, en un solo elemento .

let numReduce = ArrayFilter.reduce((acc, e) => acc + e, 0);

// El segundo parametro del bloque de codigo especifica el valor inicial del acc ,

//console.log(numReduce);
