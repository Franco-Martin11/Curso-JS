//* Prueba tecnica de algoritmo JR

//invertir una cadena

const PruebaCadena = "Hola que tal";

let pruebaNuevaCadena = cadena.split("").reverse().join("");

//!console.log(pruebaNuevaCadena);

//cuantas veces se repite

let palabraPrueba = "hola que tal".split("");

const LetraABuscar = "a";

let contadorLetras = 0;

for (let index = 0; index < palabraPrueba.length; index++) {
  palabraPrueba[index] === LetraABuscar ? contadorLetras++ : "";
}

//!console.log(contadorLetras);

palabraPrueba.forEach((element, index) => {
  element[index] === LetraABuscar ? contadorLetras++ : "";
});

//!console.log(contadorLetras);

//Distancia de hammling

const string1 = "hola mi nombre es martin";
const string2 = "hola mi nombre es franco";

const Hammling = (string1, string2) => {
  function metodoHammling() {
    let DistanciaHammling = 0;

    (string1 = string1.split("")), (string2 = string2.split(""));

    console.log(string1, string2);

    for (let index = 0; index < string1.length; index++) {
      string1[index] !== string2[index] ? DistanciaHammling++ : "";
    }

    console.log(DistanciaHammling);
  }

  !string1 || !string2
    ? console.warn("ingresa las palabras correctamente")
    : string1.length !== string2.length
    ? console.warn("deben ser string de igual longitud")
    : metodoHammling();
};

//*Contador de palabras

/*
*RegExp 
  Se inicia y finaliza con barra /.../
? \s : Este patron hace referencia a los espacios en blanco, saltos de linea y tabulaciones.

? + : Este atributo hace referencia a la aparicion del patron (en este caso '\s'). El patron debe aparecer como minimo una vez.

* /g : Es una flag que hace referencial al ambito global del string.

todo: Se puede usar el metodo .trim() para eliminar los espacios de los extremos y tener una mejor validacion de los datos ingresados por parametro

*/
const contadorDePalabras = (string) => {
  const regExp1 = /\s+/g;
  string = string.replace(regExp1, " ");
  console.log(string);
  console.log(string.length);
  string = string.toUpperCase().split(" ");
  const objetoReg = { ...string };
  return objetoReg;
};

//? {...'Spread operator'} para cambiar de array a un objeto.

//*Contar caracteres de una cadena

/*
 ? El metodo .replace(x,y) recibe 2 parametros.El parametro x= RegEx:y=Modifier.
 */

function contadorCaracteres(string) {
  !string
    ? console.warn("el string esta vacio")
    : (string = string.replace(/\s+/g, "").length);
  return string;
}
