//* Javascript Object Notation

//? Es un formato ligero de intercambio de datos, el cual esta soportado en todos los lenguajes de programacion ya que se maneja con tipo de datos primitivos.

/*
? Arrays
? Objetos
? Booleans
? Numbers
? String
? Null
 */

//* Este formato tiene dos metodos fundamentales

//* JSON.parse(): Analiza una notación JSON y la convierte en un tipo de dato JS.
//* JSON.stringify(): Convierte un tipo de dato JS a notación JSON.

//* Los datos JSON se escriben entre comillas dobles sin importar el tipo de dato que sea, en caso de un string se escribiria con comillas dobles y luego simples

const ArrayJSON = [1, 2, 3];

console.log(JSON.stringify(ArrayJSON));

let ArrayConverter = JSON.stringify(ArrayJSON);

ArrayConverter = JSON.parse(ArrayConverter);

console.log(ArrayConverter);

/* Esto seria un formato JSON de un Objeto.
{
    "name":"franco",
    "subname":"martin"
}
*/
