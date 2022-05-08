//* Expresiones Regulares (RegExp)

// Una expresion regular es una secuencia de caracteres que forman un patron de busqueda muy utilizado en las cadenas de texto.

//? Link(RegExp): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp

//? Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

let cadena =
  "Veniam ad aliqua elit Lorem minim adipisicing incididunt. Ullamco cillum duis proident quis incididunt laboris elit reprehenderit elit et deserunt. Laborum reprehenderit ipsum minim culpa sint quis consectetur voluptate ad duis consectetur elit.";

//* Se pueden crear expresiones regulares de dos maneras , la mas primitiva es utilizando el constructor
//? Esta expresion recibe por paramero los caracteres a buscar y como segundo parametro una FLAG (Indica el metodo de busqueda)

let regularExpresion = new RegExp("", "");

/*
*Flags
g: Global search 
i: no distingue entre mayusculas/minusculas
d: busca numeros
*/

//*Expresion abreviada

let regExpresion = /elit/g;

//*Metodos de RegExp

//El metodo 'test' devuelve un boolean si se cumple la condicicion de la expresion.

console.log(regExpresion.test(cadena));

//El metodo 'exec' devuelve un array con todos los detalles de la busqueda (index,input,element.etc)

console.log(regExpresion.exec(cadena));

console.clear()